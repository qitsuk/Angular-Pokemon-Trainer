import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-trainer-page",
    templateUrl: "trainer.page.html",
    styleUrls: ["trainer.page.css"]
})

export class TrainerPage {
    constructor(private readonly router: Router) {}
    username: string | null = localStorage.getItem("username");
    public printUsername(): void {
        console.log(this.username);
    }
    public signOutButtonClick(): void {
        this.router.navigateByUrl("");
        localStorage.clear();
        console.log("I AM CLICKING!!!");
    }
    public catalogueButtonClick(): void {
        this.router.navigateByUrl("catalogue");
    }

}