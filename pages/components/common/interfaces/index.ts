// interfaces/index.ts

// Props for the Card component
export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

// Props for the Button component
export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}
