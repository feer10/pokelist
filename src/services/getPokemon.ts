import { PokemonTypes } from '@/models/pokemon'

export type ListedPokemon = {
  name: string
  url: string
}

export const API_LIMIT = 20

/**
 * This function retrieves a list of Pokemon and returns their data.
 * @param [offset=0] - The `offset` parameter is used to specify the starting index of the list.
 * @returns a Promise that resolves to an array of Pokemon data.
 * The Pokemon data is obtained by making a request to the PokeAPI for a list of Pokemon, and
 *  then using the URLs of each Pokemon in the list to make individual requests for their data using the
 * `getPokemonData` function.
 */
const getPokemonList = async (offset = 0) => {
  const listUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${API_LIMIT}`

  const res = await fetch(listUrl)
  const response = await res.json()
  const { results } = response

  if (Array.isArray(results)) {
    return await Promise.all(
      results.map(async (pokemon: ListedPokemon) => {
        return await getPokemonData(pokemon.url)
      })
    )
  }
}

const getPokemonData = async (url: string) => {
  const pokemonData = await fetch(url)
  const formatedData = await pokemonData.json()
  const types = formatedData.types.map((type: PokemonTypes) => {
    return type.type.name
  })
  return {
    ...formatedData,
    types,
  }
}

export const getPokemonSpecie = async (url: string) => {
  const speciesData = await fetch(url)
  const formatedData = await speciesData.json()

  return formatedData
}

export default getPokemonList
