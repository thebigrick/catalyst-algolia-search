import { detectAvailableSortIndices } from './detect-available-sort-indices';

/**
 * Cache for available sort indices
 */
let availableSortIndices: Record<string, string> | null = null;

/**
 * Gets available sort indices, with caching
 */
export const getAvailableSortIndices = async (): Promise<Record<string, string>> => {
  if (!availableSortIndices) {
    availableSortIndices = await detectAvailableSortIndices();
  }
  return availableSortIndices;
};
