import { useDispatch, useSelector } from 'react-redux'
import { coordinates } from '../../Types/coordinates'
import { setTreasureLocation } from '../Utils/setTreasureLocation'
import { TreasureState } from '../Redux/Reducers/treasureReducer'
import { setTreasureCoordinates } from '../Redux/Actions/treasureActions'
import { useEffect } from 'react'
import './TreasureLocation.css'

interface ITreasureLocationProps {
  size?: string
}

const TreasureLocation: React.FC<ITreasureLocationProps> = ({
  size = '50px',
}) => {
  const dispatch = useDispatch()
  const treasureState = useSelector((state: TreasureState) => state.treasure)

  useEffect(() => {
    const treasureLocation = setTreasureLocation(treasureState.mapSize)
    dispatch(setTreasureCoordinates(treasureLocation))
  }, [treasureState.mapSize])

  return (
    <img
      src="RedCross.png"
      alt="Buried treasure location"
      className="buried-treasure"
      style={{
        height: size,
        width: size,
        left: treasureState.treasureCoords.x,
        top: treasureState.treasureCoords.y,
      }}
    />
  )
}

export default TreasureLocation
