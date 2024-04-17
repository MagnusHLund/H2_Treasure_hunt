import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setMapSize,
  setTreasureCoordinates,
  setUserClickedPosition,
} from '../../Redux/Actions/treasureActions'
import { setTreasureLocation } from '../../Utils/setTreasureLocation'
import { TreasureState } from '../../Redux/Reducers/treasureReducer'

interface ITreasureMapProps {
  className: string
  height?: string
  treasureImageSize?: number
}

const TreasureMap: React.FC<ITreasureMapProps> = ({
  className = '',
  height = '500px',
  treasureImageSize = 1,
}) => {
  const dispatch = useDispatch()
  const treasureState = useSelector((state: TreasureState) => state.treasure)
  const canvasRef = useRef(null)

  useEffect(() => {
    const mapImage = new Image()
    mapImage.src = 'Map.jpg'
    mapImage.className = 'map'
    const canvas = canvasRef.current
    const canvasContext = canvas.getContext('2d')
    mapImage.onload = () => {
      canvasContext.drawImage(mapImage, 0, 0, canvas.width, canvas.height)
      dispatch(setMapSize({ x: canvas.width, y: canvas.height }))
    }
    const treasureLocationImage = new Image()
    treasureLocationImage.src = 'RedCross.png'
    treasureLocationImage.onload = () => {
      const treasureLocation = setTreasureLocation(treasureState.mapSize)
      dispatch(setTreasureCoordinates(treasureLocation))
      canvasContext.drawImage(
        treasureLocationImage,
        treasureLocation.x,
        treasureLocation.y,
        treasureLocation.x + treasureImageSize,
        treasureLocation.y + treasureImageSize
      )
    }
  }, [])

  const handleClick = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    console.log('test')
    dispatch(
      setUserClickedPosition({
        x: event.nativeEvent.offsetX,
        y: event.nativeEvent.offsetY,
      })
    )
  }

  return (
    <div className={className}>
      <canvas ref={canvasRef} onClick={(e) => handleClick(e)} height={height} />
    </div>
  )
}

export default TreasureMap
