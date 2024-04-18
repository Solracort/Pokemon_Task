import { Component } from '@angular/core';
import { PokemonType } from 'src/app/interfaces/pokemon-interface';
import { PokemonserviceService } from 'src/app/services/pokemonservice.service';

@Component({
  selector: 'pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent {

  searchResults: any[] = [];

  constructor(private pokemonService: PokemonserviceService) {}

  search(event:any) {
    const query = event.target.value;
    console.log('busqueda: ',query);
  if (query) {
    this.searchResults = this.pokemonService.searchPokemon(query);
  } else {
    this.searchResults = []; 
  }
  }
}
