import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trainer } from "../models/trainer.model";
import { map, Observable, of, switchMap } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root',
})
export class TrainerService {

    private _trainers: Trainer[] = [];
    private _error: string = '';
    private _trainerUrl: string = environment.apiTrainersUrl;
    private _apiKey: string = environment.apiKey;
    private _httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'X-API-key': this._apiKey
        })
    }

    public loggedIn: boolean = false;

    constructor(private readonly http: HttpClient) { }

    public login(username: string): Observable<Trainer> {
        return this.checkUsername(username)
            .pipe(
                switchMap((trainer: Trainer | undefined) => {
                    if(trainer === undefined) { // user does not exist
                        return this.createTrainer(username)
                    }
                    return of(trainer);
                })
            )
    }

    //Checks if the username is already in the database
    private checkUsername(username: string): Observable<Trainer | undefined> {
        return this.http.get<Trainer[]>(`${this._trainerUrl}?username=${username}`)
            .pipe(
                map((response: Trainer[]) => response.pop())
            )
    }

    //Creates the user if the user does not exist
    private createTrainer(username: string): Observable<Trainer> {
        const trainer = {
            username,
            pokemon: []
        }
        return this.http.post<Trainer>(this._trainerUrl, trainer, this._httpOptions)
    }

    public trainers(): Trainer[] {
        return this._trainers;
    }

    public error(): string {
        return this._error;
    }
}

