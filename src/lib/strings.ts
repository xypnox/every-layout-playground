
export const humanizeHeading = (heading: string) => {
  return heading
    .replace(/^\d+-/, '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
