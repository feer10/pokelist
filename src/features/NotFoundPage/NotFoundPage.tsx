import { FC } from 'react'
import { Link } from 'react-router-dom'
import './NotFoundPage.scss'
import { Button } from 'feer-p-lib'

const NotFoundPage: FC = () => {
  return (
    <div className="not-found" data-testid="not-found">
      This page has not been found, please return to home by clicking
      <Link to={'list'} className="not-found__link" data-testid="not-found__link">
        <Button className="not-found__button">Here</Button>
      </Link>
    </div>
  )
}

export default NotFoundPage
