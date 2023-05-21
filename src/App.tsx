import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { PokemonContextProvider } from './context/pokemonContext'
import '@/styles/App.scss'

const App: FC = () => {
  return (
    <PokemonContextProvider>
      <Outlet />
    </PokemonContextProvider>
  )
}

export default App
