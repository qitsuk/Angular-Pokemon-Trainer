import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class SelectedPokemonService {
  private _pokemon: Pokemon | null = null;

  public setPokemon(pokemon: Pokemon) {
    this._pokemon = pokemon;
  }

  public pokemon(): Pokemon | null {
    return this._pokemon;
  }
}
