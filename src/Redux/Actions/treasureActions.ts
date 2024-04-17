import { coordinates } from '../../../Types/coordinates'

export const setTreasureCoordinates = (coordinates: coordinates) => ({
  type: 'SET_TREASURE_COORDINATES',
  payload: coordinates,
})

export const setUserClickedPosition = (coordinates: coordinates) => ({
  type: 'SET_USER_CLICKED_POSITION',
  payload: coordinates,
})

export const setMapSize = (coordinates: coordinates) => ({
  type: 'SET_MAP_SIZE',
  payload: coordinates,
})
