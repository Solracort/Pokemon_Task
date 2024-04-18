import { Injectable } from '@angular/core';
import { PokemonType } from '../interfaces/pokemon-interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonserviceService {
  private apiUrl: string = 'https://pokeapi.co/api/v2/pokemon';

  public pokemonList: PokemonType[] = [];
  
  constructor() { }

  async getPokemonList(id:number) {
    try {
      const response = await fetch(`${this.apiUrl}/${id}/`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.pokemonList.push(data);
    } catch (error) {
      console.error('Error fetching Pokémon list:', error);
    }
  }

  searchPokemon(query: string) {
    const filteredPokemon = this.pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(query.toLowerCase()));
    return filteredPokemon.map(pokemon => ({id: pokemon.id , name :pokemon.name}));
  }

}
