import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'

describe('Header component', () => {
  test('renders the logo link pointing to the list page', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    const logoLink = screen.getByRole('link', { name: 'Pokemon Logo' })
    expect(logoLink).toHaveAttribute('href', '/list')
  })
})
