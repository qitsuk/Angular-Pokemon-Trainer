import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trainer } from '../models/trainer.model';
import { map, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private _trainers: Trainer[] = [];
  private _trainer: Trainer | null = null;
  private _error: string = '';
  private _trainerUrl: string = environment.apiTrainersUrl;
  private _apiKey: string = environment.apiKey;
  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-key': this._apiKey,
    }),
  };

  public loggedIn: boolean = false;

  constructor(private readonly http: HttpClient) {
    if (localStorage.getItem("user") !== null) {
      this.loggedIn = true;
    }
  }

  public login(username: string): Observable<Trainer> {
    return this.checkUsername(username).pipe(
      switchMap((trainer: Trainer | undefined) => {
        if (trainer === undefined) {
          // user does not exist
          return this.createTrainer(username);
        } else {
          this.setTrainer(trainer);
          this.setLocalUsername(trainer);
          console.log(this._trainer);
        }
        return of(trainer);
      })
    );
  }

  //Checks if the username is already in the database
  private checkUsername(username: string): Observable<Trainer | undefined> {
    return this.http
      .get<Trainer[]>(`${this._trainerUrl}?username=${username}`)
      .pipe(map((response: Trainer[]) => response.pop()));
  }

  //Creates the user if the user does not exist
  private createTrainer(username: string): Observable<Trainer> {
    const trainer = {
      username,
      pokemon: [],
    };
    return this.http.post<Trainer>(
      this._trainerUrl,
      trainer,
      this._httpOptions,
    );
  }
  public setLocalUsername(trainer: Trainer) {
    localStorage.setItem("user", JSON.stringify(trainer));
    this.loggedIn = true;
  }

  public trainers(): Trainer[] {
    return this._trainers;
  }

  public error(): string {
    return this._error;
  }
  public setTrainer(trainer: Trainer) {
    this._trainer = trainer;
  }

  public trainer(): Trainer | null {
    return this._trainer;
  }

  public clearTrainer() {
    this._trainer = null;
  }
}
