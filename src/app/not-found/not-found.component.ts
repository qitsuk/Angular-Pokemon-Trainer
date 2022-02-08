import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerService } from '../services/trainer.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private readonly trainerService: TrainerService,
    private readonly router: Router
    ) { }
    loggedIn: boolean = false;

  ngOnInit(): void {
    this.loggedIn = this.trainerService.loggedIn;
    console.log(this.loggedIn);
  }
  toCatalogueClick() {

  }

  toTrainerPageClick() {

  }

  backToFrontPageClick() {
    this.router.navigateByUrl("/");
  }
}
