import React from 'react'
import { useIntl } from 'react-intl'
import useTypedSelector from '../../hooks/useTypedSelector'
import './Description.scss'

const Description: React.FC = () => {
  const intl = useIntl()
  const { language } = useTypedSelector((state) => state.language)
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)

  const ending = (country: string) => {
    if (country === 'Доминиканская Республика') {
      return 'Доминиканской Республики'
      // eslint-disable-next-line
    } else if (country === 'Венесуэла') {
      return 'Венесуэлы'
      // eslint-disable-next-line
    } else return country.substring(0, country.length - 1) + 'и'
  }

  const nameCountry = (country: string) => (language === 'ru' ? ending(country) : country)
  return (
    <section className="description">
      <p className="description__text">{currentCountry?.description}</p>
      <p className="description__capital">
        {currentCountry?.capital} {intl.formatMessage({ id: 'capital' })}{' '}
        {currentCountry?.country ? nameCountry(currentCountry.country) : null}
      </p>
    </section>
  )
}

export default Description
