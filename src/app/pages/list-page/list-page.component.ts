import { Component, OnInit } from '@angular/core';
import { PokemonType } from 'src/app/interfaces/pokemon-interface';
import { PokemonserviceService } from 'src/app/services/pokemonservice.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit{
  pokemonList: PokemonType[] = [];
  randomNumbers: number[] = [];
  pokemonToSelect: number = 5;
  

  constructor(private pokemonService: PokemonserviceService) { }

  ngOnInit(): void {
    this.generateRandomNumbers();
    this.getPokemonList();
    this.pokemonList=this.pokemonService.pokemonList;
    console.log('My pokemon list:',this.pokemonList);
  }

  generateRandomNumbers(){    
    for (let i = 0; i < this.pokemonToSelect; i++) {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      this.randomNumbers.push(randomNumber);
    }
    console.log('Los PokemonId: ',this.randomNumbers);
  }

  async getPokemonList() {
    await this.randomNumbers.map((n)=> this.pokemonService.getPokemonList(n)
    )
  }

  
}
