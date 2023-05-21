import { usePokemon } from '@/hooks/usePokemon'
import { FC, useEffect, useState } from 'react'
import Navigation from './components/navigation/Navigation'
import { useNavigate } from 'react-router-dom'
import { API_LIMIT } from '@/services/getPokemon'
import './PokemonList.scss'
import { useCurrentPokemon } from '@/hooks/useCurrentPokemon'
import { Pokemon } from '@/models/pokemon'
import { Button, Table, TableColumn } from 'feer-p-lib'
import PokemonCardSkeleton from './components/pokemon-card/PokemonCardSkeleton'
import PokemonCard from './components/pokemon-card/PokemonCard'

const PokemonList: FC = () => {
  const [newOffset, setNewOffset] = useState(0)
  const [listView, setListview] = useState(true)
  const { pokemon, offset, isLoading } = usePokemon({ newOffset })
  const { setCurrentPokemon } = useCurrentPokemon({})
  const navigate = useNavigate()

  const openPokemon = (item: Pokemon) => {
    navigate(`/pokemon/${item.id}`)
  }

  const pokemonColumns: TableColumn[] = [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
  ]

  const navigation = (type: string) => {
    switch (type) {
      case 'next':
        setNewOffset(offset + API_LIMIT)
        break
      default:
        if (offset > API_LIMIT) {
          setNewOffset(offset - API_LIMIT)
        } else {
          setNewOffset(1)
        }
        break
    }
  }

  const handleClick = () => {
    setListview(!listView)
  }

  useEffect(() => {
    setCurrentPokemon({} as Pokemon)
  }, [setCurrentPokemon])

  return (
    <>
      <Navigation onNavigation={(ev) => navigation(ev)} />
      <div className="current-page">Page: {Math.round(offset / API_LIMIT + 1)}</div>
      <div className="pokemon-list">
        <Button className="pokemon-list__switch-view" onClick={handleClick}>
          Switch view
        </Button>
        {!pokemon.length || isLoading ? (
          listView ? (
            <Table data={[]} columns={pokemonColumns} skeletonRowsNumber={API_LIMIT} />
          ) : (
            <div className="pokemon-list__wrapper">
              <PokemonCardSkeleton cardsNumber={API_LIMIT} />
            </div>
          )
        ) : listView ? (
          <Table data={pokemon as []} columns={pokemonColumns} onRowClick={openPokemon} />
        ) : (
          <div className="pokemon-list__wrapper">
            {pokemon?.map((pokemon: Pokemon) => (
              <PokemonCard
                key={`${pokemon.id}${pokemon.name}`}
                id={pokemon.id}
                name={pokemon.name}
                sprites={pokemon.sprites}
                types={pokemon.types}
                onOpen={() => openPokemon(pokemon)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default PokemonList
