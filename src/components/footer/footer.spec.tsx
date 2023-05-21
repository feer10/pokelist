import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer component', () => {
  it('renders the author name and extra text', () => {
    render(<Footer />)
    const authorElement = screen.getByText('By Fer')
    const extraTextElement = screen.getByText('Coding test')
    expect(authorElement).toBeInTheDocument()
    expect(extraTextElement).toBeInTheDocument()
  })
})
