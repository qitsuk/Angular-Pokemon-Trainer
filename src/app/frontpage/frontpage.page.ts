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
        this.setLocalUsername(usernameForm.controls['username'].value);

        this.trainerService.login(usernameForm.controls['username'].value)
            .subscribe({
                next: () => {

                }
            })

        this.router.navigateByUrl("trainer");
    }

    private setLocalUsername(username: string) {
        console.log("Set local username function called!")
        localStorage.setItem('username', username);
    }
}