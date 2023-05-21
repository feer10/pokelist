import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PokemonDetailSkeleton = () => {
  return (
    <div className="pokemon-detail skeleton">
      <div className="pokemon-detail__top">
        <div className="pokemon-detail__top-title">
          <Skeleton width={200} height={56} />
          <Skeleton width={100} height={24} />
        </div>
        <div className="pokemon-detail__top-images">
          <div className="pokemon-detail__top-images-detail">
            <span>Normal</span>
            <Skeleton width={120} height={120} />
          </div>
          <div className="pokemon-detail__top-images-detail">
            <span>* Shiny *</span>
            <Skeleton width={120} height={120} />
          </div>
        </div>
        <div className="pokemon-detail__top-wrapper">
          <div className="pokemon-detail__top-wrapper--left">
            <div className="pokemon-detail__top-types">
              <h3 className="pokemon-detail__top-types-title">Types:</h3>
              <Skeleton count={2} width={60} height={20} style={{ marginBottom: '0.5rem' }} />
            </div>
            <div className="pokemon-detail__top-generation">
              <Skeleton width={100} height={20} />
            </div>
          </div>
          <div className="pokemon-detail__top-wrapper--right">
            <div className="pokemon-detail__top-wrapper-height">
              <Skeleton width={100} height={20} />
            </div>
            <div className="pokemon-detail__top-wrapper-weight">
              <Skeleton width={100} height={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="pokemon-detail__bottom">
        <Skeleton count={3} height={20} />
      </div>
    </div>
  )
}

export default PokemonDetailSkeleton
