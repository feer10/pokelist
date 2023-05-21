import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom'
import App from '@/App'
import PokemonList from '@/features/PokemonList/PokemonList'
import PokemonDetail from '@/features/PokemonDetail/PokemonDetail'
import NotFoundPage from '@/features/NotFoundPage/NotFoundPage'
import MainLayout from '@/layouts/MainLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route element={<MainLayout />}>
        <Route index element={<Navigate to="list" />} />
        <Route path="list" index element={<PokemonList />} />
        <Route path="pokemon/:id" element={<PokemonDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Route>
  )
)

export default router
