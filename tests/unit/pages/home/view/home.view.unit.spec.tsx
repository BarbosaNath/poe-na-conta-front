import React from 'react';
import Home from '@pages/home/view/home.view';

import { render } from '@testing-library/react';

describe('Home', () => {
  it('should render home', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
