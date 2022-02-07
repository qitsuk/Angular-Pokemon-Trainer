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
    
    ngOnInit(): void {
        this.pokemonService.fetchFiftyPokemon().subscribe(pokemon => {
            this.pokemonList = pokemon.results;
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

}