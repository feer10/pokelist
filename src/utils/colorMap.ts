type mapOptions = {
  [key: string]: string
}

const typeColors: mapOptions = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC',
}

const getContrastColor = (color: string) => {
  const rgb = parseInt(color.substring(1), 16)
  const r = (rgb >> 16) & 0xff
  const g = (rgb >> 8) & 0xff
  const b = (rgb >> 0) & 0xff
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b
  return luma < 128 ? '#ffffff' : '#000000'
}

export const getTypeColor = (typeName: string) => {
  const backgroundColor = typeColors[typeName] || '#B8B8D0'
  const textColor = getContrastColor(backgroundColor)
  return { backgroundColor, textColor }
}
