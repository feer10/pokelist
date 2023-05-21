import { Pokemon } from '@/models/pokemon'
import { FC } from 'react'
import './PokemonCard.scss'
import { getTypeColor } from '@/utils/colorMap'

const PokemonCard: FC<Partial<Pokemon>> = ({ id, name, sprites, types, onOpen }) => {
  return (
    <div className="pokemon-card" onClick={onOpen} data-testid="pokemon-card">
      <div className="pokemon-card__top">
        <img className="pokemon-card__image" src={sprites?.front_default} alt={`Pokemon ${name}`} />
      </div>
      <div className="pokemon-card__title">
        <h2 className="pokemon-card__title-name">{name}</h2>
        <h3 className="pokemon-card__title-number">#{id}</h3>
      </div>
      <h3 className="pokemon-card__types">
        {types?.map((type: string) => {
          const { backgroundColor, textColor } = getTypeColor(type)
          return (
            <span
              className="pokemon-card__types-type"
              key={`${name}${type}`}
              style={{ background: backgroundColor, color: textColor }}>
              {type}
            </span>
          )
        })}
      </h3>
    </div>
  )
}

export default PokemonCard
