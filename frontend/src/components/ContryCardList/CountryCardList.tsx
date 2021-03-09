import React from 'react'
import { connect } from 'react-redux'
import CountryCard from '../CountryCard/CountryCard'
import './CountryCardList.scss'
import { CountriesState, CountryType } from '../../store/types/countries'

type CountryCardListProps = {
  countries: Array<CountryType>,
}

const CountryCardList: React.FC<CountryCardListProps> = (props) => {
  const { countries } = props
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

const mapStateToProps = (state: { countriesReducer: CountriesState }) => {
  const { countries }: CountriesState = state.countriesReducer
  const props: CountryCardListProps = {
    countries,
  }
  return props
}

export default connect(mapStateToProps)(CountryCardList)
