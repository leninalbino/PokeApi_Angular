import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokemonApiComponent } from './pokemonApi/pokemon-api.component';
import { FiltroPokemonPipe } from './pipes/filtro-pokemon.pipe';



@NgModule({
  declarations: [
    AppComponent,
    PokemonApiComponent,
    FiltroPokemonPipe,


  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
