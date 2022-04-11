import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable, retry } from 'rxjs';
import { PokemonDetails } from '../Models/pokemon-details.model';
import { PokemonGame } from '../Models/pokemon-game.model';

@Injectable({
    providedIn: 'root'
})
export class PokeapiService {

    pokeUrl = 'https://pokeapi.co/api/v2/'

    constructor(private http: HttpClient) { }

    GetPokemonList(): any {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Accept': '*/*'
            })
        }
        return this.http.get<any>(this.pokeUrl + 'pokemon/?limit=151', httpOptions).pipe(
            map((data: any) => data.results ), retry(1)
        );
    }

    GetPokemonByName(name: string): Observable<PokemonDetails> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Accept': '*/*'
            })
        }
        return this.http.get<PokemonDetails>(this.pokeUrl + 'pokemon/' + name, httpOptions).pipe(
            map((data: any) => data ), retry(1)
        );
    }

    GetPokemonGameList(): any {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Accept': '*/*'
            })
        }
        return this.http.get<any>(this.pokeUrl + 'version/', httpOptions).pipe(
            map((data: any) => data.results ), retry(1)
        );
    }

    GetPokemonGameByName(name: string): Observable<PokemonGame> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Accept': '*/*'
            })
        }
        return this.http.get<PokemonGame>(this.pokeUrl + 'version/' + name, httpOptions).pipe(
            map((data: any) => data ), retry(1)
        );
    }

}
