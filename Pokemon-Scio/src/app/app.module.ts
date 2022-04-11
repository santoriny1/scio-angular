import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table'

// App Modules
import { AppComponent } from './app.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PokemonToolbarComponent } from './components/pokemon-toolbar/pokemon-toolbar.component';
import { PokegamelistComponent } from './pokegamelist/pokegamelist.component';
import { PokemonGameCardComponent } from './components/pokemon-game-card/pokemon-game-card.component';

// services
import { PokeapiService } from './services/pokeapi.service';

// pipes
import { CamelCasePipe } from './Shared/Pipes/camel-case.pipe';
import { TitlePipe } from './Shared/Pipes/title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokelistComponent,
    PokemonDetailsComponent,
    PokemonCardComponent,
    CamelCasePipe,
    NotFoundComponent,
    PokemonToolbarComponent,
    TitlePipe,
    PokegamelistComponent,
    PokemonGameCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
  ],
  providers: [PokeapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
