import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TechList from '../../components/TechList';

describe('TechList component', () => {
  it('Should be able to add new tech', () => {
    const { getByText, getByTestId, getByLabelText, debug } = render(
      <TechList />,
    );

    debug();

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'ReactJS' } });
    fireEvent.submit(getByTestId('tech-form'));

    debug();

    expect(getByTestId('tech-list')).toContainElement(getByText('ReactJS'));
    expect(getByLabelText('Tech')).toHaveValue('');
  });
});
