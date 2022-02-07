import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CataloguePage } from './catalogue/catalogue.page';
import { FrontPage } from './frontpage/frontpage.page';
import { TrainerPage } from './trainer-page/trainer.page';

@NgModule({
  declarations: [
    AppComponent,
    FrontPage,
    TrainerPage,
    CataloguePage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
