import { useSelector } from 'react-redux'
import { calculateArrowRotation } from '../Utils/calculateArrowRotation'
import { TreasureState } from '../Redux/Reducers/treasureReducer'
import { useEffect, useState } from 'react'

interface Arrow {
  size?: string
}

const Text: React.FC<Arrow> = ({ size = '50px' }) => {
  const [direction, setDirection] = useState(0)
  const treasureState = useSelector((state: TreasureState) => state.treasure)

  useEffect(() => {
    if (
      treasureState.clickedCoords.x > 0 &&
      treasureState.clickedCoords.y > 0
    ) {
      setDirection(
        calculateArrowRotation(
          treasureState.treasureCoords,
          treasureState.clickedCoords
        )
      )
      console.log(direction)
    }
  }, [treasureState.clickedCoords, treasureState.treasureCoords])

  return (
    <img
      src="Arrow.png"
      alt={`Arrow pointing at ${direction} degrees`}
      style={{
        height: size,
        width: size,
        transform: `rotate(${direction}deg)`,
      }}
    />
  )
}

export default Text
