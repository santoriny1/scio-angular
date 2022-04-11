import { Component, Input, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { PokemonGame } from 'src/app/Models/pokemon-game.model'

@Component({
  selector: 'app-pokemon-game-card',
  templateUrl: './pokemon-game-card.component.html',
  styleUrls: ['./pokemon-game-card.component.css']
})

export class PokemonGameCardComponent implements OnInit {

  @Input('game') game: PokemonGame = new PokemonGame;

  pokemonGame: PokemonGame = new PokemonGame;

  constructor(private pokeService: PokeapiService) { }

  ngOnInit(): void {
    this.pokeService.GetPokemonGameByName(this.game.name)
      .subscribe(gameResult => this.pokemonGame = gameResult);
  }

}
