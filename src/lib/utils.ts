import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const filterCategories = [
  "All",
  "Pre Sarfaesi",
  "NPA",
  "RSLI Responses",
  "Symbolic Possession",
  "DM Order",
  "Physical Possession",
  "Auction",
] as const;
