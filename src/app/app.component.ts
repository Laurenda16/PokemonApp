import { Component,  } from '@angular/core';
/*** 
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';*/

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'


})
export class AppComponent{
/*
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon |undefined ;
  */

  /*
//methode qui affiche une fois l'application ouvert
  ngOnInit(): void {

    console.table(this.pokemonList);
  
      
  }
  
  selectPokemon(pokemonId: string)
  {
  
   const pokemon: Pokemon |undefined = this.pokemonList.find(pokemon=> pokemon.id == +pokemonId);
   if(pokemon)
   {
    console.log(`vous avez cliquer sur le pokemon ${pokemon.name}`);
    this.pokemonSelected = pokemon;
   }
   else{
    console.log(`vous avez demander un pokemon qui n'existe pas`);
    this.pokemonSelected = pokemon;
   }
  

  } */

}
