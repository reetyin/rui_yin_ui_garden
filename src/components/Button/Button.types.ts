// src/components/Button/Button.types.tsx
export interface ButtonProps {
  label: string;
  disabled?: boolean;
  $backgroundColor?: string;
  onClick?: () => void;
}
