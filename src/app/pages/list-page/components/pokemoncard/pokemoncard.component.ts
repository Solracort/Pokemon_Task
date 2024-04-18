import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonType } from 'src/app/interfaces/pokemon-interface';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemoncard.component.html',
  styleUrls: ['./pokemoncard.component.css'],
})
export class PokemoncardComponent {
  @Input() pokemon: any;

  constructor(private router: Router) {}

  goToDetailsPage(pokemon: any) {
    //console.log('Este es el pokemon para el detalle: ', pokemon)
    if (!pokemon || !pokemon.id) {
      return; // Handle the case where pokemon or pokemon.id is undefined
    }

    this.router.navigate(['/details', pokemon.id]);
  }
}
