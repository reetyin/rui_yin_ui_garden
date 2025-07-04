// src/components/Card/Card.types.tsx
export interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  disabled?: boolean;
  onClick?: () => void;
}
