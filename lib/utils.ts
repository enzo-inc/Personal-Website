import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const toggleCursorAnimation = (ref: React.RefObject<HTMLElement>, show: boolean) => {
  if (!ref.current) {
    return;
  }

  const el = ref.current;
  if (show) {
    el.classList.add('typing_animation');
  } else {
    el.classList.remove('typing_animation');
  }
};
