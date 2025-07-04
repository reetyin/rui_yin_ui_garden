// src/components/Card/Card.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { Card } from './Card';

describe('Card Component', () => {
  it('renders title and description', () => {
    render(<Card title="Test Card" description="Description here" />);
    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText('Description here')).toBeInTheDocument();
  });

  it('renders image when imageUrl is provided', () => {
    render(<Card title="Test Card" imageUrl="test.jpg" />);
    const img = screen.getByAltText('Test Card') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('test.jpg');
  });

  it('applies disabled styles and disables onClick', () => {
    const onClick = jest.fn();
    render(<Card title="Disabled Card" disabled onClick={onClick} />);
    const card = screen.getByText('Disabled Card').parentElement!;
    expect(card).toHaveStyleRule('opacity', '0.5');
    fireEvent.click(card);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('calls onClick handler when clicked', () => {
    const onClick = jest.fn();
    render(<Card title="Clickable Card" onClick={onClick} />);
    const card = screen.getByText('Clickable Card').parentElement!;
    fireEvent.click(card);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
