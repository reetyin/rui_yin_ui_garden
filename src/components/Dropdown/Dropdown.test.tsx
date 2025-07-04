import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown component', () => {
  test('renders options', () => {
    const options = ['A', 'B', 'C'];
    render(<Dropdown options={options} />);
    options.forEach(option => {
      expect(screen.getByText(option)).toBeVisible();
    });
  });

  test('disabled state works', () => {
    render(<Dropdown options={['A']} disabled />);
    const select = screen.getByRole('combobox');
    expect(select).toBeDisabled();
    expect(select).toHaveStyle('opacity: 0.5');
  });

  test('calls onChange when selection changes', () => {
    const handleChange = jest.fn();
    render(<Dropdown options={['A', 'B']} onChange={handleChange} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'B' } });
    expect(handleChange).toHaveBeenCalledWith('B');
  });
});
