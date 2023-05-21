import { FC } from 'react'
import './Header.scss'
import pokemonLogo from '@/assets/pokemon-logo.png'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  return (
    <div className="header">
      <Link className="header__logo" to={'list'}>
        <img className="header__logo-link" src={pokemonLogo} alt="Pokemon Logo" />
      </Link>
    </div>
  )
}

export default Header
