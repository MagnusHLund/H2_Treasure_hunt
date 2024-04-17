import { coordinates } from '../../Types/coordinates'
export function calculateArrowRotation(
  treasureLocation: coordinates,
  clickLocation: coordinates
): number {
  const y = treasureLocation.y - clickLocation.y
  const x = treasureLocation.x - clickLocation.y
  let degrees = Math.atan2(y, x)
  degrees *= 180 / Math.PI
  console.log(degrees)
  return degrees
}
