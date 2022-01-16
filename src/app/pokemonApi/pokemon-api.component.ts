import { Pokemon, Ability, Abilities } from './../model/IPokemones';
import { PokeServiService } from './../servicios/poke-servi.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pokemon-api',
  templateUrl: './pokemon-api.component.html',
  styleUrls: ['./pokemon-api.component.css']
})
export class PokemonApiComponent implements OnInit {

  pokemones:Pokemon[]=[];

  abilities!: Abilities[];

  public pagina:number=0;

  constructor( private pokeServiService:PokeServiService) { }

  ngOnInit(): void {

    this.pokeServiService.obtenerPokemones().subscribe(poke=>{
      this.pokemones=poke;

    });
    //console.log(this.pokemones)
  }
  paginaAnterior(){
    if(this.pagina>0){
      this.pagina -= 20
    }
  }

  paginaSiguiente(){
    this.pagina += 20;
    console.log(this.pagina)
  }


  mostrarModal(name:string){
    console.log(name)
    const button = document.createElement('button');
    const container=document.querySelector('#container');
    button.type='button';
    button.style.display='none';
    this.pokeServiService.obtenerPokemon(name).subscribe(a=>{
      //this.abilities=a;
      console.log(a)
     // a.forEach(ab=>console.log(ab))
    })
    button.setAttribute('data-target','#pokemonModal');
    container?.appendChild(button);
    button.click();
  }

}
