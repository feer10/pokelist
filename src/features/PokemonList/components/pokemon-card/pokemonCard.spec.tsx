import { render, screen } from '@testing-library/react'
import { Pokemon } from '@/models/pokemon'
import PokemonCard from './PokemonCard'

const mockPokemon: Partial<Pokemon> = {
  id: 1,
  name: 'bulbasaur',
  types: ['grass', 'poison'],
}

describe('PokemonCard', () => {
  it('should render the Pokemon name and id', () => {
    render(<PokemonCard id={mockPokemon.id} name={mockPokemon.name} />)
    const nameElement = screen.getByText('bulbasaur')
    const idElement = screen.getByText('#1')
    expect(nameElement).toBeInTheDocument()
    expect(idElement).toBeInTheDocument()
  })

  it('should render the Pokemon types', () => {
    render(<PokemonCard types={mockPokemon.types} />)
    const grassTypeElement = screen.getByText('grass')
    const poisonTypeElement = screen.getByText('poison')
    expect(grassTypeElement).toBeInTheDocument()
    expect(poisonTypeElement).toBeInTheDocument()
  })

  it('should call the onOpen function when clicked', () => {
    const onOpenMock = vi.fn()
    render(<PokemonCard onOpen={onOpenMock} />)
    const pokemonCardElement = screen.getByTestId('pokemon-card')
    pokemonCardElement.click()
    expect(onOpenMock).toHaveBeenCalled()
  })
})
