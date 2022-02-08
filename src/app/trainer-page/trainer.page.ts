import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TrainerService } from "../services/trainer.service";

@Component({
    selector: "app-trainer-page",
    templateUrl: "trainer.page.html",
    styleUrls: ["trainer.page.css"]
})

export class TrainerPage {
    constructor(private readonly router: Router, private trainerService: TrainerService) {}
    username: string | null = localStorage.getItem("username");
    public printUsername(): void {
        console.log(this.username);
    }
    public signOutButtonClick(): void {
        this.router.navigateByUrl("");
        localStorage.clear();
        this.trainerService.clearTrainer();

    }
    public catalogueButtonClick(): void {
        this.router.navigateByUrl("catalogue");
    }

}
