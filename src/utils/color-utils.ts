export function generateRandomColor(): string {
  return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

export function generateRandomPalette(): string[] {
  return Array.from({ length: 5 }, generateRandomColor);
}

