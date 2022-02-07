import { Component, Input } from "@angular/core";
import { Pokemon, PokemonAPICall } from "../models/pokemon.model";

@Component({
    selector: "app-pokemon-display",
    templateUrl: "pokemon-display.component.html",
    styleUrls: ["pokemon-display.component.css"]
})

export class PokemonDisplayComponent {
    @Input() pokemon_api: PokemonAPICall | undefined;
    @Input() pokemon: Pokemon | undefined;
}