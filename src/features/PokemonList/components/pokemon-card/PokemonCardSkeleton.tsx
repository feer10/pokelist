import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import './PokemonCard.scss'
import 'react-loading-skeleton/dist/skeleton.css'

type PokemonCardSkeleton = {
  cardsNumber: number
}

const PokemonCardSkeleton: FC<PokemonCardSkeleton> = ({ cardsNumber }) => {
  return (
    <>
      {Array.from({ length: cardsNumber }, (_, index: number) => (
        <div className="pokemon-card skeleton" key={index}>
          <div className="pokemon-card__top">
            <Skeleton height={120} width={140} />
          </div>
          <div className="pokemon-card__title">
            <h2 className="pokemon-card__title-name">
              <Skeleton width={100} />
            </h2>
            <h3 className="pokemon-card__title-number">
              <Skeleton width={50} />
            </h3>
          </div>
          <h3 className="pokemon-card__types">
            <Skeleton className="pokemon-card__types-type" width={50} height={20} style={{ marginRight: 10 }} />
            <Skeleton className="pokemon-card__types-type" width={50} height={20} style={{ marginRight: 10 }} />
          </h3>
        </div>
      ))}
    </>
  )
}

export default PokemonCardSkeleton
