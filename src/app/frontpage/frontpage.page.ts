import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: "app-frontpage",
    templateUrl: "frontpage.page.html",
    styleUrls: ["frontpage.page.css"]
})

export class FrontPage {

    public onSubmit(usernameForm :NgForm): void {
        console.log(usernameForm.valid);
        this.setLocalUsername(usernameForm.controls['username'].value);

    }

    private setLocalUsername(username: string): void {
        console.log("Set local username function called!")
        localStorage.setItem('username', username);
    
    }
}