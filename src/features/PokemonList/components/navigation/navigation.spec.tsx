import { render, screen, fireEvent } from '@testing-library/react'
import Navigation from './Navigation'

describe('Navigation', () => {
  it('render navigation buttons and call onNavigation', () => {
    const onNavigation = vi.fn()
    render(<Navigation onNavigation={onNavigation} />)
    const prevButton = screen.getByTestId('prev-button')
    const nextButton = screen.getByTestId('next-button')
    expect(prevButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()

    fireEvent.click(prevButton)
    expect(onNavigation).toHaveBeenCalledWith('prev')

    fireEvent.click(nextButton)
    expect(onNavigation).toHaveBeenCalledWith('next')
  })
})
