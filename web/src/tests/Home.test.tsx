import { render, screen } from '@testing-library/react';

import Home from '../pages/Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home', () => {
  it('should render navbar', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();
  });

  it('should render image', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const imageElement = screen.getByAltText('cromwell');
    expect(imageElement).toBeInTheDocument();
  });

  it('should render heading', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const headingElement = screen.getByText('We keep industry working');
    expect(headingElement).toBeInTheDocument();
  });

  it('should render paragraphs', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const paragraph1 = screen.getByTestId('paragraph-1');
    const paragraph2 = screen.getByTestId('paragraph-2');
    const paragraph3 = screen.getByTestId('paragraph-3');
    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
    expect(paragraph3).toBeInTheDocument();
  });
});
