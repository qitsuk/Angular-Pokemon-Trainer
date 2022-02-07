import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: "app-frontpage",
    templateUrl: "frontpage.page.html",
    styleUrls: ["frontpage.page.css"]
})

export class FrontPage {

    constructor(
        private readonly router: Router
    ) {}
    public onSubmit(usernameForm :NgForm): void {
        console.log(usernameForm.valid);
        this.setLocalUsername(usernameForm.controls['username'].value);
        this.router.navigateByUrl("trainer");

    }

    private setLocalUsername(username: string): void {
        console.log("Set local username function called!")
        localStorage.setItem('username', username);
    
    }
}