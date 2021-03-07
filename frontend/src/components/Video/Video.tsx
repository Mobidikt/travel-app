import React from 'react'
import './Video.scss'

// eslint-disable-next-line
function Video() {
  return (
    <section className="video">
      <div className="video__wrapper">
        <h3 className="video__title">Video about country</h3>
        <div className="video__iframe">
          <iframe
            title="video-country"
            src="https://www.youtube.com/embed/tQIgwox2nmA"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

export default Video
