import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import useTypedSelector from '../../hooks/useTypedSelector'
import './Map.scss'

const Map: React.FC = () => {
  const [fullScreen, setFullScreen] = useState(false)
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)

  const zoomMap = () => {
    setFullScreen(!fullScreen)
  }
  return currentCountry ? (
    <section className="map">
      <div className={`map__wrapper ${fullScreen ? 'map__full-screen' : ''}`}>
        <iframe className="map__iframe" title="map" src={currentCountry.map} allowFullScreen />
        <button className="map__btn" type="button" onClick={zoomMap}>
          {fullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
        </button>
      </div>
    </section>
  ) : null
}
export default Map
