import { FC } from 'react'
import { getTypeColor } from '@/utils/colorMap'
import './PokemonDetailWrapper.scss'
import { Pokemon } from '@/models/pokemon'

const PokemonDetailWrapper: FC<Partial<Pokemon>> = ({
  name,
  id,
  sprites,
  types,
  generation,
  height,
  weight,
  flavor_text_entries,
}) => {
  return (
    <div className="pokemon-detail">
      <div className="pokemon-detail__top">
        <div className="pokemon-detail__top-title">
          <h1 className="pokemon-detail__top-title-name">{name}</h1>
          <span className="pokemon-detail__top-title-number">Number: {id}</span>
        </div>
        <div className="pokemon-detail__top-images">
          <div className="pokemon-detail__top-images-detail">
            <span>Normal</span>
            <img className="pokemon-detail__top-images-image" src={sprites?.front_default} alt={`${name}`} />
          </div>
          <div className="pokemon-detail__top-images-detail">
            <span>* Shiny *</span>
            <img className="pokemon-detail__top-images-image" src={sprites?.front_shiny} alt={`${name} shiny`} />
          </div>
        </div>
        <div className="pokemon-detail__top-wrapper">
          <div className="pokemon-detail__top-wrapper--left">
            <div className="pokemon-detail__top-types">
              <h3 className="pokemon-detail__top-types-title">Types:</h3>
              {types?.map((type: string) => {
                const { backgroundColor, textColor } = getTypeColor(type)
                return (
                  <span
                    className="pokemon-detail__top-types-type"
                    data-testid="type"
                    key={`${name}${type}`}
                    style={{ background: backgroundColor, color: textColor }}>
                    {type}
                  </span>
                )
              })}
            </div>
            <div className="pokemon-detail__top-generation">{generation?.name}</div>
          </div>
          <div className="pokemon-detail__top-wrapper--right">
            <div className="pokemon-detail__top-wrapper-height">Height: {height && height / 10} m</div>
            <div className="pokemon-detail__top-wrapper-weight">Weight: {weight && weight / 10} kg</div>
          </div>
        </div>
      </div>
      <div className="pokemon-detail__bottom">
        <p>{flavor_text_entries && flavor_text_entries[0].flavor_text}</p>
      </div>
    </div>
  )
}

export default PokemonDetailWrapper
