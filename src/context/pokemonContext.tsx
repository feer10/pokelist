import { Pokemon } from '@/models/pokemon'
import React, { useState } from 'react'

export interface PokemonContextType {
  pokemon: Array<Pokemon>
  setPokemon: React.Dispatch<React.SetStateAction<never[]>>
  currentPokemon: Pokemon
  setCurrentPokemon: React.Dispatch<React.SetStateAction<Pokemon>>
  offset: number
  setOffset: React.Dispatch<React.SetStateAction<number>>
}

const Context = React.createContext<PokemonContextType>({} as PokemonContextType)

export function PokemonContextProvider({ children }: { children: React.ReactNode }) {
  const [pokemon, setPokemon] = useState([])
  const [currentPokemon, setCurrentPokemon] = useState({} as Pokemon)
  const [offset, setOffset] = useState(0)

  return (
    <div data-testid="context-provider">
      <Context.Provider
        value={{ pokemon, setPokemon, currentPokemon, setCurrentPokemon, offset, setOffset } as PokemonContextType}>
        {children}
      </Context.Provider>
    </div>
  )
}

export default Context
