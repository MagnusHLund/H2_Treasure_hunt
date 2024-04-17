import { combineReducers, configureStore } from '@reduxjs/toolkit'
import treasureReducer from './Reducers/treasureReducer'
import inventoryReducer from './Reducers/inventoryReducer'

const rootReducer = combineReducers({
  treasure: treasureReducer,
  inventory: inventoryReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
