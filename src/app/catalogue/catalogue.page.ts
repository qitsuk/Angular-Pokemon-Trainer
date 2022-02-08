import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Pokemon, PokemonAPICall } from "../models/pokemon.model";
import { PokemonService } from "../services/pokemon.service";

@Component({
    selector: "app-catalogue-page",
    templateUrl: "catalogue.page.html",
    styleUrls: ["catalogue.page.css"]
})

export class CataloguePage implements OnInit {
    pokemonList: Pokemon[] = [];
    constructor(
        private readonly router: Router,
        private readonly pokemonService: PokemonService
    ) {}
    private _url = "https://pokeapi.co/api/v2/pokemon?limit=50";

    ngOnInit(): void {
        this.pokemonService.fetchFiftyPokemon(this._url).subscribe(pokemon => {
            this.pokemonList.push(...pokemon.results);
            this._url = pokemon.next;
            console.log(this.pokemonList);
        })
    }

    get pokemons(): Pokemon[] {
        return this.pokemonList;
    }

    backToTrainerClick(): void {
        this.router.navigateByUrl("trainer");
    }
    signOutClick(): void {
        localStorage.clear();
        this.router.navigateByUrl("home");
    }

    loadMore(): void {
      this.pokemonService.fetchFiftyPokemon(this._url).subscribe(pokemon => {
        this.pokemonList.push(...pokemon.results);
        this._url = pokemon.next;
      })
    }


}
