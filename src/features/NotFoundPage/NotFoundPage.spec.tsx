import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NotFoundPage from './NotFoundPage'

describe('NotFoundPage component', () => {
  test('renders the component', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    )

    expect(screen.getByTestId('not-found')).toBeInTheDocument()
    expect(screen.getByText('Here')).toBeInTheDocument()
  })

  test('renders the link with the correct destination', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    )

    const link = screen.getByTestId('not-found__link')
    expect(link).toHaveAttribute('href', '/list')
  })
})
