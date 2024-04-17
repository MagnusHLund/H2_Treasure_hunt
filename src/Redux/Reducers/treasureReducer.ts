import { coordinates } from '../../../Types/coordinates'

export type TreasureState = {
  treasure: ReturnType<typeof treasureReducer>
}

interface IAction {
  type: string
  payload: coordinates
}

export interface ITreasureState {
  treasureCoords: coordinates
  clickedCoords: coordinates
  mapSize: coordinates
}

const initialState: ITreasureState = {
  treasureCoords: { x: 0, y: 0 },
  clickedCoords: { x: 0, y: 0 },
  mapSize: { x: 0, y: 0 },
}

const treasureReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case 'SET_TREASURE_COORDINATES':
      return {
        ...state,
        treasureCoords: action.payload,
      }
    case 'SET_USER_CLICKED_POSITION':
      return {
        ...state,
        clickedCoords: action.payload,
      }
    case 'SET_MAP_SIZE':
      return {
        ...state,
        mapSize: action.payload,
      }
    default:
      return state
  }
}

export default treasureReducer
