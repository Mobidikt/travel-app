import React from 'react'
import useTypedSelector from '../../hooks/useTypedSelector'
import './Video.scss'

// eslint-disable-next-line
function Video() {
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)
  return currentCountry ? (
    <section className="video">
      <div className="video__wrapper">
        <h3 className="video__title">Video about country</h3>
        <div className="video__iframe">
          <iframe
            title="video-country"
            src={currentCountry.video}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  ) : null
}

export default Video
