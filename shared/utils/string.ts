export const words = (text: string): string[] => {
  const maybeText = text.trim();
  if (!maybeText) return [];
  return maybeText.split(/\s+/);
};

export const abbreviation = (text: string): string => {
  return words(text)
    .map((word) => word[0])
    .join('');
};
