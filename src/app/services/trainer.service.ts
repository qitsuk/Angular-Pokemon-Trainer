import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Trainer } from '../models/trainer.model';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  public loggedIn: boolean = false;

  private _trainers: Trainer[] = [];
  private _error: string = '';
  private _trainerUrl: string =
    'https://noroff-assignment-api.herokuapp.com/trainers';
  private _apiKey: string =
    'Wl5NCSOy6QDMhp73UHlpqczdjVrSCOi22e1UFy8z4U6gYPq4xgpWh632uL29wQj2';
  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-key': this._apiKey,
    }),
  };

  constructor(private readonly http: HttpClient) {}

  public fetchTrainers(): void {
    this.http.get<Trainer[]>(this._trainerUrl).subscribe({
      next: (trainers: Trainer[]) => {
        this._trainers = trainers;
      },
      error: (error: HttpErrorResponse) => {
        this._error = error.message;
      },
    });
  }

  public postTrainer(trainer: Trainer): Observable<Trainer> {
    return this.http.post<Trainer>(
      this._trainerUrl,
      trainer,
      this._httpOptions
    );
  }

  public saveToLocal(username: string) {
    localStorage.setItem('username', username);
    this.loggedIn = true;
  }

  public trainers(): Trainer[] {
    return this._trainers;
  }

  public error(): string {
    return this._error;
  }
}
