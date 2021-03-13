import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import useTypedSelector from '../../hooks/useTypedSelector'
import './Map.scss'

// eslint-disable-next-line
function Map() {
  const [fullScreen, setFullScreen] = useState(false)
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)

  const zoomMap = () => {
    setFullScreen(!fullScreen)
  }
  return (
    <section className="map">
      <div className={`map__wrapper ${fullScreen ? 'map__full-screen' : ''}`}>
        <iframe
          className="map__iframe"
          title="map"
          src="https://yandex.ru/map-widget/v1/-/CCUQnYXwpC"
          allowFullScreen
        />
        <button className="map__btn" type="button" onClick={zoomMap}>
          {fullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
        </button>
      </div>
    </section>
  )
}
export default Map
