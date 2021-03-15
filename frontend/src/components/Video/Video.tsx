import React from 'react'
import { useIntl } from 'react-intl'
import useTypedSelector from '../../hooks/useTypedSelector'
import './Video.scss'

const Video: React.FC = () => {
  const intl = useIntl()
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)
  return currentCountry ? (
    <section className="video">
      <div className="video__wrapper">
        <h3 className="video__title">{intl.formatMessage({ id: 'Video_about_country' })}</h3>
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
