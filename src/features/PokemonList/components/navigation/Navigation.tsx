import { FC } from 'react'
import { Navigation } from '@/models/navigation'
import { Button } from 'feer-p-lib'
import './Navigation.scss'
import Arrow from '@/assets/left-arrow.svg'

const Navigation: FC<Navigation> = ({ onNavigation }) => {
  return (
    <div className="navigation">
      <Button className="navigation__prev" onClick={() => onNavigation('prev')} testId="prev-button">
        <img className="arrow-icon" src={Arrow} />
        Prev
      </Button>
      <Button className="navigation__next" onClick={() => onNavigation('next')} testId="next-button">
        Next
        <img className="arrow-icon right" src={Arrow} />
      </Button>
    </div>
  )
}

export default Navigation
