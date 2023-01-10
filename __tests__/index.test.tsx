import { render, screen } from '@testing-library/react'
import * as React from 'react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByText(/welcome to next\.js!/i) as HTMLElement
    expect(heading.textContent).equal('welcome to next.js')
  })
})
