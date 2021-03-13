import React from 'react'
import useTypedSelector from '../../hooks/useTypedSelector'
import './Map.scss'

// eslint-disable-next-line
function Map() {
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)
  return (
    <section className="map">
      <div className="map__wrapper">
        <iframe
          className="map__iframe"
          title="map"
          src="https://yandex.ru/map-widget/v1/-/CCUQnYXwpC"
          allowFullScreen
        />
      </div>
    </section>
  )
}
export default Map
