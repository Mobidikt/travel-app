import React from 'react'
import useTypedSelector from '../../hooks/useTypedSelector'
import './Description.scss'

// eslint-disable-next-line
function Description() {
  const ending = (country: string) => {
    if (country === 'Доминиканская Республика') {
      return 'Доминиканской Республики'
      // eslint-disable-next-line
    } else if (country === 'Венесуэла') {
      return 'Венесуэлы'
      // eslint-disable-next-line
    } else return country.substring(0, country.length - 1) + 'и'
  }
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)
  return (
    <section className="description">
      <p className="description__text">{currentCountry?.description}</p>
      <p className="description__capital">
        {currentCountry?.capital} столица{' '}
        {currentCountry?.country ? ending(currentCountry?.country) : null}
      </p>
    </section>
  )
}

export default Description
