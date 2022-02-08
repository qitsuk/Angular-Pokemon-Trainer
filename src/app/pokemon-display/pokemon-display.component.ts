import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Pokemon } from "../models/pokemon.model";

@Component({
    selector: "app-pokemon-display",
    templateUrl: "pokemon-display.component.html",
    styleUrls: ["pokemon-display.component.css"]
})

export class PokemonDisplayComponent implements OnInit {
    @Input() pokemon: Pokemon | undefined;
    @Output() clicked: EventEmitter<Pokemon> = new EventEmitter();
    public imgSrc = "";

    ngOnInit(): void {
      this.imgSrc = "../../assets/images/" + this.pokemon?.num + ".png";
    }

    public onAddPokemonClick(): void {
      this.clicked.emit(this.pokemon);
      alert("You've added " + this.pokemon?.name + " to your collection! Keep going. Gotta catch 'em all!");
    }
}
