export interface Pokemon{
  id: string,
  name:string,
  image:string

}
export interface Results{
  name: string,
  url:string
}

export interface ObtenerTodos{
  count:number,
  next:null,
  previous:null,
  results:Results[]

}

//Detalle
export class Abilities{
  ability: Ability[] = []

}
export class Ability{
  name!: string
  url!: string
}


