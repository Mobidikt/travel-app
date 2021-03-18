import React from 'react'
import './Countries.scss'
import CountryCardList from '../../components/ContryCardList/CountryCardList'

const Countries: React.FC = () => {
  return (
    <div className="countries-page">
      <CountryCardList />
    </div>
  )
}

export default Countries
