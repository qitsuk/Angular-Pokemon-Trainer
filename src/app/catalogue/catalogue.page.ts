import { ChangeDetectionStrategy, Component, HostListener, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Pokemon } from "../models/pokemon.model";
import { PokemonService } from "../services/pokemon.service";
import { TrainerService } from "../services/trainer.service";

@Component({
    selector: "app-catalogue-page",
    templateUrl: "catalogue.page.html",
    styleUrls: ["catalogue.page.css"]
})

export class CataloguePage implements OnInit {
    pokemonList: Pokemon[] = [];
    constructor(
        private readonly router: Router,
        private readonly pokemonService: PokemonService,
        private readonly trainerService: TrainerService
    ) {
    }
    private _url: string = "https://pokeapi.co/api/v2/pokemon?limit=50";

    ngOnInit(): void {
        this.pokemonService.fetchFiftyPokemon(this._url).subscribe(pokemon => {
            this.pokemonList.push(...pokemon.results);
            this._url = pokemon.next;
            for (let poke of this.pokemonList) {
              poke.num = parseInt(poke.url.replace(/.*\D(?=\d)|\D+$/g, ""));
              poke.name = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
            }
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
        this.trainerService.clearTrainer();
        this.router.navigateByUrl("home");

    }


    loadMore(): void {
      this.pokemonService.fetchFiftyPokemon(this._url).subscribe(pokemon => {
        this.pokemonList.push(...pokemon.results);
        for (let poke of this.pokemonList) {
          poke.num = parseInt(poke.url.replace(/.*\D(?=\d)|\D+$/g, ""));
          poke.name = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
        }
        this._url = pokemon.next;
      })
    }


}
