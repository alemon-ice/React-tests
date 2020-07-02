import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import TechList from '../../components/TechList';

describe('TechList component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

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

  it('should store techs in storage', () => {
    let { getByTestId, getByLabelText, debug, getByText } = render(
      <TechList />,
    );

    debug();

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'ReactJS' } });
    fireEvent.submit(getByTestId('tech-form'));

    cleanup();

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'techs',
      JSON.stringify(['ReactJS']),
    );
    ({ getByTestId, getByLabelText, debug, getByText } = render(<TechList />));

    expect(getByTestId('tech-list')).toContainElement(getByText('ReactJS'));
  });
});
