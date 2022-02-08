import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CataloguePage } from './catalogue/catalogue.page';
import { FrontPage } from './frontpage/frontpage.page';
import { PokemonDisplayComponent } from './pokemon-display/pokemon-display.component';
import { TrainerOverviewComponent } from './trainer-overview/trainer-overview.component';
import { TrainerPage } from './trainer-page/trainer.page';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPage,
    TrainerPage,
    CataloguePage,
    TrainerOverviewComponent,
    PokemonDisplayComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
