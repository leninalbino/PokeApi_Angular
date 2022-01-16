import { Pokemon, ObtenerTodos, Ability, Abilities } from './../model/IPokemones';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeServiService {
  private endPoint:string ='https://pokeapi.co/api/v2/pokemon/';
  constructor(private http:HttpClient) { }

obtenerPokemones():Observable<Pokemon[]>{
return this.http.get<ObtenerTodos>(`${this.endPoint}?limit=1500`).pipe(map(this.transformarResultado))
}

obtenerPokemon(name:string):Observable<Ability[]>{
return this.http.get<Abilities>(`${this.endPoint}${name}`).pipe(map(this.transformarDetalle));
}

private transformarResultado(res:ObtenerTodos):Pokemon[]{
const pokemon: Pokemon[]=res.results.map(p=>{
const arregloUrl=p.url.split('/');
const id=arregloUrl[6];
const image=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
return {
  id, image, name:p.name
}
})
return pokemon;
}

private transformarDetalle(res:Abilities):Ability[]{
  const ability: Ability[]=res.ability.map(a=>{
    return {
      name: a.name,
      url:a.url
    }
  })
  return ability;
}
}
