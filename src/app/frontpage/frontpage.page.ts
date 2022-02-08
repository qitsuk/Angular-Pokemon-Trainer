import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { Trainer } from '../models/trainer.model';
import { TrainerService } from '../services/trainer.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: 'frontpage.page.html',
  styleUrls: ['frontpage.page.css'],
})
export class FrontPage {
  get trainers(): Trainer[] {
    return this.trainerService.trainers();
  }

  constructor(
    private readonly router: Router,
    private readonly trainerService: TrainerService
  ) {}

  public onSubmit(usernameForm: NgForm) {
    console.log(usernameForm.valid);
    this.trainerService.setLocalUsername(usernameForm.controls['username'].value);
    this.trainerService
      .login(usernameForm.controls['username'].value)
      .pipe(
        finalize(() => {
          this.router.navigateByUrl('catalogue');
        })
      )
      .subscribe({
        next: () => {},
      });
  }
}
