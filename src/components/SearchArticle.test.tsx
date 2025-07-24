import React from 'react'
import { render, screen } from '@testing-library/react'
import { SearchArticle } from './SearchBar'

test('renders input box', () => {
  render(<SearchArticle />)
  const input = screen.getByPlaceholderText(/search/i)
  expect(input).toBeInTheDocument()
})
