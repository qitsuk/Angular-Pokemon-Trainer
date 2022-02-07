import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPage } from './frontpage/frontpage.page';
import { TrainerPage } from './trainer-page/trainer.page';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: FrontPage
  },
  {
    path: "trainer",
    component: TrainerPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
