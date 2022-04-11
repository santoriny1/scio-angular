import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetails } from '../Models/pokemon-details.model';
import { Pokemon } from '../Models/pokemon.model';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
    selector: 'poke-details',
    templateUrl: './pokemon-details.component.html',
    styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

    name:string = ''
    pokemonDetails: PokemonDetails = new PokemonDetails;
    constructor(private route: ActivatedRoute, private pokeApi: PokeapiService) { }

    ngOnInit(): void {
       this.name = this.route.snapshot.paramMap.get('name') as string

       this.pokeApi.GetPokemonByName(this.name)
       .subscribe(pokemonResult => this.pokemonDetails = pokemonResult);
    }
}
