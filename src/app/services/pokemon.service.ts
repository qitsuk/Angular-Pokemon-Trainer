import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Pokemon, PokemonAPICall } from '../models/pokemon.model';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PokemonService {
    constructor(private readonly http: HttpClient) { }
    private _pokemon: Pokemon[] = [];
    private _error: string = "";

    fetchFiftyPokemon(url: string): Observable<PokemonAPICall> {
        return this.http.get<PokemonAPICall>(url)
        .pipe(map(response => response));
    }

    public pokemons(): Pokemon[] {
        return this._pokemon;
    }

    public error(): string {
        return this._error;
    }
}
