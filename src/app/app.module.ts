import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PokemoncardComponent } from './pages/list-page/components/pokemoncard/pokemoncard.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { PokemonSearchComponent } from './pages/list-page/components/pokemon-search/pokemon-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    PokemoncardComponent,
    DetailsPageComponent,
    PokemonSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
