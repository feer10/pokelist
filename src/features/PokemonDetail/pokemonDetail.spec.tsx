import { render, screen } from '@testing-library/react'
import { useParams } from 'react-router-dom'
import PokemonDetail from './PokemonDetail'
import { useCurrentPokemon } from '@/hooks/useCurrentPokemon'

vi.mock('@/hooks/useCurrentPokemon')
vi.mock('react-router-dom', () => ({
  useParams: vi.fn(),
  useNavigate: vi.fn(),
}))

describe('PokemonDetail component', () => {
  test('renders the component with correct data', () => {
    const mockCurrentPokemon = {
      name: 'Pikachu',
      id: 25,
      abilities: ['Static'],
      sprites: {},
      types: ['Electric'],
      generation: 'I',
      height: 0.4,
      flavor_text_entries: [
        {
          flavor_text: 'test',
        },
      ],
      species: 'Mouse Pokémon',
      weight: 6,
      stats: [
        {
          base_stat: 70,
          effort: 0,
          stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' },
        },
      ],
    }

    ;(useParams as jest.Mock).mockReturnValue({ id: '25' })
    ;(useCurrentPokemon as jest.Mock).mockReturnValue({
      currentPokemon: mockCurrentPokemon,
    })

    render(<PokemonDetail />)

    expect(screen.getByText('Pikachu')).toBeInTheDocument()
  })
})
