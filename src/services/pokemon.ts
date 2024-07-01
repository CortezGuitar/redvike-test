// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonsListResponse, PokemonResponse } from "./types";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getAllPokemon: builder.query<PokemonsListResponse, number>({
      query: (limit) => `pokemon?limit=${limit}`,
    }),
    getPokemonByName: builder.query<PokemonResponse, string | undefined>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetAllPokemonQuery, useGetPokemonByNameQuery } = pokemonApi;
