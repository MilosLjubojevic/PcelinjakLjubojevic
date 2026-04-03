import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getSerbianItemLabel(count: number): string {
  const mod100 = count % 100
  if (mod100 >= 11 && mod100 <= 14) {
    return "artikala"
  }
  const mod10 = count % 10
  if (mod10 === 1) {
    return "artikal"
  } else if (mod10 >= 2 && mod10 <= 4) {
    return "artikla"
  } else {
    return "artikala"
  }
}
