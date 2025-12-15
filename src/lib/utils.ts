import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function getDonationUrl(): string | undefined {
  const url = (import.meta as any).env?.VITE_DONATION_URL as string | undefined
  if (url && typeof url === 'string' && url.startsWith('http')) return url
  return undefined
}

export function openDonation(): void {
  const url = getDonationUrl()
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
