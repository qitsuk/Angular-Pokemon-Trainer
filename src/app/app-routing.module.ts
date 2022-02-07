import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CataloguePage } from './catalogue/catalogue.page';
import { FrontPage } from './frontpage/frontpage.page';
import { TrainerPage } from './trainer-page/trainer.page';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "home",
    component: FrontPage
  },
  {
    path: "trainer",
    component: TrainerPage
  },
  {
    path: "catalogue",
    component: CataloguePage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
