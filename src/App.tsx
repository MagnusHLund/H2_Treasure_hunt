import './App.css'
import TreasureMap from './Components/Sections/TreasureMap'
import SidePanel from './Components/Sections/SidePanel'

function App() {
  return (
    <div className="container">
      <SidePanel className="side-panel" />
      <TreasureMap className="treasure-map" />
    </div>
  )
}

export default App
