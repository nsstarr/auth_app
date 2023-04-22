import { render, screen } from '@testing-library/react';

import Home from '../pages/Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home', () => {
  it('renders', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    screen.debug();

    // check if App components renders headline
  });
});
