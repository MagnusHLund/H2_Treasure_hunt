import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setTreasureCoordinates,
  setUserClickedPosition,
} from '../../Redux/Actions/treasureActions'
import { setTreasureLocation } from '../../Utils/setTreasureLocation'
import { TreasureState } from '../../Redux/Reducers/treasureReducer'
import './TreasureMap.css'
import { coordinates } from '../../../Types/coordinates'
import { digTreasure } from '../../Utils/digTreasure'

interface ITreasureMapProps {
  className: string
  height?: string
  treasureImageSize?: number
}

const TreasureMap: React.FC<ITreasureMapProps> = ({
  className = '',
  height = '500px',
}) => {
  const dispatch = useDispatch()
  const clickedCoords = useSelector(
    (state: TreasureState) => state.treasure.clickedCoords
  )
  const canvasRef = useRef(null)

  useEffect(() => {
    const mapImage = new Image()
    mapImage.src = 'Map.jpg'
    const treasureLocationImage = new Image()
    treasureLocationImage.src = 'RedCross.png'

    const canvas = canvasRef.current
    const canvasContext = canvas.getContext('2d')

    treasureLocationImage.onload = () => {
      canvasContext.drawImage(mapImage, 0, 0, canvas.width, canvas.height)
      const treasureLocation = setTreasureLocation({
        x: canvas.width,
        y: canvas.height,
      })
      const IMAGE_OFFSET = 5
      dispatch(setTreasureCoordinates(treasureLocation))
      canvasContext.drawImage(
        treasureLocationImage,
        treasureLocation.x - IMAGE_OFFSET,
        treasureLocation.y - IMAGE_OFFSET
      )
    }
  }, [])

  useEffect(() => {
    digTreasure()
  }, [clickedCoords])

  const handleClick = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    const clickPosition: coordinates = {
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY,
    }
    dispatch(setUserClickedPosition(clickPosition))
  }

  return (
    <div className={className}>
      <canvas ref={canvasRef} onClick={(e) => handleClick(e)} height={height} />
    </div>
  )
}

export default TreasureMap
