import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PokemonserviceService } from 'src/app/services/pokemonservice.service';
import { ActivatedRoute } from '@angular/router';
import { PokemonType } from 'src/app/interfaces/pokemon-interface';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
})
export class DetailsPageComponent implements OnInit {
  
  pokemonDetails: any;
  pokemonList: PokemonType [] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private pokemonService: PokemonserviceService
  ) {}
  ngOnInit() {
    const idString = this.route.snapshot.paramMap.get('id');
    if (!idString){
      console.error('pokemon Id not found');
      return;
    }
    const id = +idString;
    this.pokemonList = this.pokemonService.pokemonList;
    this.pokemonDetails = this.pokemonList.find(pokemon => pokemon.id === id);

    console.log('id en details:', typeof(id), this.pokemonList);
    console.log('pokemoDetails:', this.pokemonDetails);
  }

  goBack() {
    this.pokemonService.pokemonList=[];
    this.location.back();
  }
}
