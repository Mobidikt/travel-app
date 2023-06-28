import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import useTypedSelector from '../../hooks/useTypedSelector'
import './Map.scss'

const Map: React.FC = () => {
  const intl = useIntl()
  const [fullScreen, setFullScreen] = useState(false)
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)

  const zoomMap = () => {
    setFullScreen(!fullScreen)
  }
  return currentCountry ? (
    <section className="map">
      <h3 className="map__title">
        {currentCountry.country} {intl.formatMessage({ id: 'on_map' })}
      </h3>
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
