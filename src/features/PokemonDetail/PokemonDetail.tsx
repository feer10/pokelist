import { useCurrentPokemon } from '@/hooks/useCurrentPokemon'
import { FC } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import Arrow from '@/assets/left-arrow.svg'
import { Button, Table, TableColumn } from 'feer-p-lib'
import PokemonDetailWrapper from './components/PokemonDetailWrapper'
import PokemonDetailSkeleton from './components/PokemonDetailSkeleton'
import { PokemonStats } from '@/models/pokemon'
import './PokemonDetail.scss'

const columns: TableColumn[] = [
  { header: 'Stat', accessor: (data: PokemonStats) => data.stat.name },
  { header: 'Base Stat', accessor: 'base_stat' },
  { header: 'Effort', accessor: 'effort' },
]

const PokemonDetail: FC = () => {
  const { id } = useParams()
  const numberId = Number(id)
  const { currentPokemon } = useCurrentPokemon({ numberId })

  const navigate = useNavigate()

  return (
    <>
      <Button className="back-list" onClick={() => navigate('/list')}>
        <img className="arrow-icon" src={Arrow} />
        Back to list
      </Button>
      {currentPokemon && Object.keys(currentPokemon).length > 0 ? (
        <div className="pokemon-detail-wrapper">
          <PokemonDetailWrapper
            name={currentPokemon.name}
            id={currentPokemon.id}
            abilities={currentPokemon.abilities}
            sprites={currentPokemon.sprites}
            types={currentPokemon.types}
            generation={currentPokemon.generation}
            height={currentPokemon.height}
            flavor_text_entries={currentPokemon.flavor_text_entries}
            species={currentPokemon.species}
            weight={currentPokemon.weight}
          />
          <div className="pokemon-detail-wrapper__table-wrapper">
            <h3>Stats:</h3>
            <Table data={currentPokemon.stats} columns={columns} skeletonRowsNumber={8} />
          </div>
        </div>
      ) : (
        <PokemonDetailSkeleton />
      )}
    </>
  )
}

export default PokemonDetail
