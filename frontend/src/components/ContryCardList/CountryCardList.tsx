import React from 'react'
import CountryCard from '../CountryCard/CountryCard'
import './CountryCardList.scss'
import useTypedSelector from '../../hooks/useTypedSelector'

const CountryCardList: React.FC = () => {
  const { countries } = useTypedSelector((state) => state.countriesReducer)
  return (
    <div className="country-cards">
      <div className="country-cards__wrapper">
        {countries.map((country) => (
          <CountryCard key={country.id} country={country} />
        ))}
      </div>
    </div>
  )
}

export default CountryCardList
