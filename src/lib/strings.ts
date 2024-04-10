
export const humanizeHeading = (heading: string) => {
  return heading
    .replace(/^\d+-/, '')
    .split('-')
    .map(word => capitalize(word))
    .join(' ');
}

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
