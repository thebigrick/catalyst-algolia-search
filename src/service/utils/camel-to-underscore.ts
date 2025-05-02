/**
 * Converts camelCase to snake_case (underscore format)
 */
export const camelToUnderscore = (str: string): string => {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase();
};
