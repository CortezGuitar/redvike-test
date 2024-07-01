import { Pokemon } from "../modules/App/Home";

export type PokemonResponse = {
  id: number;
  name: string;
  types: any[];
  height: number;
  weight: number;
  stats: any[];
};

export type PokemonsListResponse = {
  count: number;
  next?: string;
  previous?: string;
  results: Pokemon[];
};
