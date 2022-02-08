import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Pokemon } from "../models/pokemon.model";
import { TrainerService } from "../services/trainer.service";

@Component({
    selector: "app-pokemon-display",
    templateUrl: "pokemon-display.component.html",
    styleUrls: ["pokemon-display.component.css"]
})

export class PokemonDisplayComponent implements OnInit {
    @Input() pokemon: Pokemon | undefined;
    @Output() clicked: EventEmitter<Pokemon> = new EventEmitter();
    public imgSrc = "";

    constructor(private readonly trainerService: TrainerService) {

    }

    ngOnInit(): void {
      this.imgSrc = "../../assets/images/" + this.pokemon?.num + ".png";
    }

    public onAddPokemonClick(): void {
      const storedUser = localStorage.getItem("user");
      if (typeof storedUser === "string") {
        this.trainerService.trainer = JSON.parse(storedUser);
      }
      this.clicked.emit(this.pokemon);
      alert("You've added " + this.pokemon?.name + " to your collection! Keep going. Gotta catch 'em all!");
    }
}
