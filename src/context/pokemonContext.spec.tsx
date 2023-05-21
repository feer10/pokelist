import { render, screen } from '@testing-library/react'
import PokemonContext, { PokemonContextProvider } from '@/context/pokemonContext'

describe('PokemonContextProvider', () => {
  it('Renders with the default context', () => {
    render(
      <PokemonContextProvider>
        <PokemonContext.Consumer>
          {({ pokemon, offset }) => (
            <>
              <div data-testid="pokemon-length">{pokemon.length}</div>
              <div data-testid="offset">{offset}</div>
            </>
          )}
        </PokemonContext.Consumer>
      </PokemonContextProvider>
    )

    expect(screen.getByTestId('context-provider')).toBeInTheDocument()
    expect(screen.getByTestId('pokemon-length')).toHaveTextContent('0')
    expect(screen.getByTestId('offset')).toHaveTextContent('0')
  })
})
