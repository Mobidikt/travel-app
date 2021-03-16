import React from 'react'
import './Countries.scss'
import CountryCardList from '../../components/ContryCardList/CountryCardList'
import Music from '../../components/Music/Music'

const Countries: React.FC = () => {
  return (
    <div className="countries-page">
      <Music />
      <CountryCardList />
    </div>
  )
}

export default Countries
