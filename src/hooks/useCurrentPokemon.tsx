import { useContext, useEffect, useCallback } from 'react'
import PokemonContext, { PokemonContextType } from '@/context/pokemonContext'
import { Pokemon } from '@/models/pokemon'
import getPokemonList, { API_LIMIT, getPokemonSpecie } from '@/services/getPokemon'

/**
 * This is a custom hook that fetches a list of Pokemon based on the provided offset or number ID.
 * @param  - The `usePokemon` function takes an object as its parameter with two optional properties.
 * @returns The `usePokemon` hook is returning an object with three properties: `pokemon`, `offset`,
 * and `isLoading`.
 */
export const useCurrentPokemon = ({ numberId }: { numberId?: number }) => {
  const { pokemon, setPokemon, currentPokemon, setCurrentPokemon, setOffset } =
    useContext<PokemonContextType>(PokemonContext)

  const getCurrentPokemon = useCallback(async () => {
    if (!numberId) return
    if (!pokemon.length) {
      const currentOffset = numberId - 1 > API_LIMIT ? numberId - 1 : 0
      const list = await getPokemonList(currentOffset)

      setPokemon(list as [])
      setOffset(currentOffset)
    }

    let pokemonData = pokemon.find((pokemon) => pokemon.id === numberId)
    if (pokemonData?.species.url) {
      const specieData = await getPokemonSpecie(pokemonData.species.url)
      pokemonData = {
        ...pokemonData,
        ...specieData,
      }
    }

    setCurrentPokemon(pokemonData as Pokemon)
  }, [numberId, pokemon, setCurrentPokemon, setOffset, setPokemon])

  useEffect(() => {
    getCurrentPokemon()
  }, [getCurrentPokemon])

  return { currentPokemon, setCurrentPokemon }
}
