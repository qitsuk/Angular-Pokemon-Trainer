import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Trainer } from "../models/trainer.model";

@Injectable({
    providedIn: 'root'
})

export class TrainerService {
    private _trainers: Trainer[] = [];
    private _error: string = "";

    constructor(private readonly http: HttpClient) { }

    public fetchTrainers(): void {
        this.http.get<Trainer[]>
        ("http://kga-noroff-api.herokuapp.com/trainers/1")
            .subscribe((trainers: Trainer[]) => {
                this._trainers = trainers;
            },
                (error: HttpErrorResponse) => {
                    this._error = error.message;
            }
        );
    }

    public trainers(): Trainer[] {
        return this._trainers;
    }

    public error(): string {
        return this._error;
    }
}