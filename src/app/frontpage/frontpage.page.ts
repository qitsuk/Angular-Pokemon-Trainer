import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Trainer } from "../models/trainer.model";
import { TrainerService } from "../services/trainer.service";

@Component({
    selector: "app-frontpage",
    templateUrl: "frontpage.page.html",
    styleUrls: ["frontpage.page.css"]
})

export class FrontPage {
    get trainers(): Trainer[] {
        return this.trainerService.trainers();
    }

    constructor(
        private readonly router: Router,
        private readonly trainerService: TrainerService
    ) {}

    public onSubmit(usernameForm :NgForm) {
        console.log(usernameForm.valid);

        let newTrainer: Trainer =
            {
                'id': 10,
                'username': usernameForm.controls['username'].value,
                'pokemon': {'name': ''}
            }
        this.trainerService.postTrainer(newTrainer)
            .subscribe(trainer => this.trainers.push(trainer));

        this.trainerService.saveToLocal(usernameForm.controls['username'].value);

        this.router.navigateByUrl("trainer");

    }
}
