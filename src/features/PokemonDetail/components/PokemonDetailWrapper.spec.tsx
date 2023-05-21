import { render, screen } from '@testing-library/react'
import PokemonDetailWrapper from './PokemonDetailWrapper'

describe('PokemonDetailWrapper component', () => {
  test('renders the component with correct data', () => {
    const mockPokemon = {
      name: 'Pikachu',
      id: 25,
      sprites: {
        front_default: 'pikachu.png',
        front_shiny: 'pikachu-shiny.png',
      },
      types: ['Electric'],
      generation: { name: 'I' },
      height: 40,
      weight: 60,
      flavor_text_entries: [{ flavor_text: 'Pikachu description' }],
    }

    render(<PokemonDetailWrapper {...mockPokemon} />)

    expect(screen.getByText('Pikachu')).toBeInTheDocument()
    expect(screen.getByText('Number: 25')).toBeInTheDocument()
    expect(screen.getByAltText('Pikachu')).toHaveAttribute('src', 'pikachu.png')
    expect(screen.getByAltText('Pikachu shiny')).toHaveAttribute('src', 'pikachu-shiny.png')
    expect(screen.getByTestId('type')).toHaveStyle({ background: 'rgb(184, 184, 208)', color: 'rgb(0, 0, 0)' })
    expect(screen.getByText('I')).toBeInTheDocument()
    expect(screen.getByText('Height: 4 m')).toBeInTheDocument()
    expect(screen.getByText('Weight: 6 kg')).toBeInTheDocument()
    expect(screen.getByText('Pikachu description')).toBeInTheDocument()
  })
})
