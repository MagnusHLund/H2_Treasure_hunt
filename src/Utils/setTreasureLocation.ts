import { coordinates } from '../../Types/coordinates'

export function setTreasureLocation(mapSize: coordinates): coordinates {
  const Y = getRandomPosition(mapSize.y)
  const X = getRandomPosition(mapSize.x)
  return { x: X, y: Y }
}

function getRandomPosition(max: number) {
  return Math.floor(Math.random() * max)
}
