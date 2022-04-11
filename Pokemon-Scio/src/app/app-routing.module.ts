import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PokegamelistComponent } from './pokegamelist/pokegamelist.component';

const routes: Routes = [
    { path: 'Pokemons', component: PokelistComponent },
    { path: 'Pokemon/:name', component: PokemonDetailsComponent},
    { path: 'Games', component: PokegamelistComponent },
    { path: '404', component: NotFoundComponent },
    { path: '', redirectTo: 'Pokemons', pathMatch: 'full' },
    { path: '**', redirectTo: '404', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
