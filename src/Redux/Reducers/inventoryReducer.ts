interface IAction {
  type: string
  payload: number
}

interface IInventoryState {
  balance: number
  shovelLevel: number
}

const initialState: IInventoryState = {
  balance: 0,
  shovelLevel: 0,
}

const inventoryReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case 'SET_BALANCE':
      return {
        ...state,
        balance: action.payload,
      }
    case 'UPGRADE_SHOVEL':
      return {
        ...state,
        shovelLevel: state.shovelLevel + 1,
      }
    default:
      return state
  }
}

export default inventoryReducer
