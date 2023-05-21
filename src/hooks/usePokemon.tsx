import { useContext, useEffect, useState, useCallback } from 'react'
import PokemonContext, { PokemonContextType } from '@/context/pokemonContext'
import getPokemonList, { API_LIMIT } from '@/services/getPokemon'

/**
 * This is a custom hook that fetches a list of Pokemon based on the provided offset or number ID.
 * @param  - The `usePokemon` function takes an object as its parameter with two optional properties.
 * @returns The `usePokemon` hook is returning an object with three properties: `pokemon`, `offset`,
 * and `isLoading`.
 */
export const usePokemon = ({ newOffset }: { newOffset?: number }) => {
  const { pokemon, setPokemon, offset, setOffset } = useContext<PokemonContextType>(PokemonContext)
  const [isLoading, setIsLoading] = useState(true)

  const pokemonList = useCallback(async () => {
    setIsLoading(true)

    if (newOffset) {
      const currentOffset = newOffset >= API_LIMIT ? newOffset : 0
      const list = await getPokemonList(currentOffset)

      setPokemon(list as [])
      setOffset(currentOffset)
    } else if (!pokemon.length) {
      const list = await getPokemonList(newOffset)

      setPokemon(list as [])
      setOffset(0)
    }
    setIsLoading(false)
  }, [newOffset, pokemon.length, setOffset, setPokemon])

  useEffect(() => {
    pokemonList()
  }, [pokemonList])

  return { pokemon, offset, isLoading }
}
