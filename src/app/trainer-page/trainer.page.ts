import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-trainer-page",
    templateUrl: "trainer.page.html",
    styleUrls: ["trainer.page.css"]
})

export class TrainerPage {
    
    username: string | null = localStorage.getItem("username");
    public printUsername(): void {
        console.log(this.username);
    }
    public signOutClicked(): void {
        localStorage.clear();
        console.log("Signout function called!")
    }
    public catalogueButtonClick(): void {
        
    }

}