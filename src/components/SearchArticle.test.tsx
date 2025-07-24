import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import {SearchArticle} from './SearchBar' // pastikan ini default export

describe('SearchBar', () => {
  it('renders search input', () => {
    render(<SearchArticle />)
    const input = screen.getByPlaceholderText(/search new york times/i)
    expect(input).toBeInTheDocument()
  })
})
