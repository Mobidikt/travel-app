import React from 'react'
import useTypedSelector from '../../hooks/useTypedSelector'
import './Description.scss'

// eslint-disable-next-line
function Description() {
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)
  return (
    <section className="description">
      <p className="description__text">{currentCountry?.description}</p>
      <p className="description__capital">
        {currentCountry?.capital} столица {currentCountry?.country}
      </p>
    </section>
  )
}

export default Description
