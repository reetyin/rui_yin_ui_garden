import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RadioButton } from './RadioButton';

describe('RadioButton component', () => {
  test('renders label text', () => {
    render(<RadioButton name="test" value="val1" label="Option 1" />);
    expect(screen.getByLabelText('Option 1')).toBeVisible();
  });

  test('disabled state', () => {
    render(<RadioButton name="test" value="val1" label="Option 1" disabled />);
    const input = screen.getByLabelText('Option 1') as HTMLInputElement;
    expect(input.disabled).toBe(true);
    const label = input.closest('label');
    expect(label).toHaveStyle('cursor: not-allowed');
  });

  test('calls onChange when clicked', () => {
    const onChange = jest.fn();
    render(<RadioButton name="test" value="val1" label="Option 1" onChange={onChange} />);
    fireEvent.click(screen.getByLabelText('Option 1'));
    expect(onChange).toHaveBeenCalledWith('val1');
  });
});
