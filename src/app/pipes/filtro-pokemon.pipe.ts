import { Pokemon } from './../model/IPokemones';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPokemon'
})
export class FiltroPokemonPipe implements PipeTransform {

  transform(pokemones: Pokemon[], pagina: number=0): Pokemon[] {
    return pokemones.slice(pagina, pagina+20)
  }

}
