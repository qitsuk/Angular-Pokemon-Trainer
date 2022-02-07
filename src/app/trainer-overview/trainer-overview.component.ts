import { Component, Input } from "@angular/core";
import { Trainer } from "../models/trainer.model";

@Component({
    selector: "app-trainer-overview",
    templateUrl: "trainer-overview.component.html",
    styleUrls: ["trainer-overview.component.css"]
})

export class TrainerOverviewComponent {
    @Input() trainer: Trainer | undefined;
}