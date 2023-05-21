import { MouseEventHandler } from 'react'

export interface Pokemon {
  id: number
  name: string
  abilities: Array<{
    ability: {
      name: string
      url: string
    }
  }>
  sprites: {
    front_default: string
    front_shiny?: string
  }
  types: Array<string>
  generation: Record<string, string>
  height: number
  flavor_text_entries: Array<Record<string, string>>
  onOpen: MouseEventHandler<HTMLDivElement> | undefined
  species: Record<string, string>
  stats: {
    base_stat: number
    effort: number
    stat: PokemonStat
  }[]
  weight: number
}

export type PokemonType = {
  name: string
  url: string
}

export type PokemonTypes = {
  slot: number
  type: PokemonType
}

export type PokemonStat = {
  name: string
  url: string
}

export type PokemonStats = {
  base_stat: number
  effort: number
  stat: PokemonStat
}
