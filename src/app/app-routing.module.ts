import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CataloguePage } from './catalogue/catalogue.page';
import { FrontPage } from './frontpage/frontpage.page';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { TrainerPage } from './trainer-page/trainer.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: FrontPage,
  },
  {
    path: 'trainer',
    component: TrainerPage,
    canActivate: [AuthGuard],
  },
  {
    path: 'catalogue',
    component: CataloguePage,
    canActivate: [AuthGuard],
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
