import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { PokemonGame } from '../Models/pokemon-game.model';

@Component({
  selector: 'app-pokegamelist',
  templateUrl: './pokegamelist.component.html',
  styleUrls: ['./pokegamelist.component.css']
})
export class PokegamelistComponent implements OnInit {

  games: PokemonGame[] = [];
  games2: PokemonGame[] = [];
  constructor(private pokeApi: PokeapiService) { }

  ngOnInit(): void {
    this.pokeApi.GetPokemonGameList().subscribe((gamesResult: any) => {
      this.games = gamesResult;
      this.games2 = gamesResult;
    });
  }

  filterGames(gameString: string): void {
    this.games2 = this.games.filter(game => game.name.toLowerCase().includes(gameString.toLowerCase()));
  }

}
