import React from 'react'
import AuthCard from '../../components/AuthCard/AuthCard'
import './Countries.scss'
import CountryCard from '../../components/CountryCard/CountryCard'

const Countries: React.FC = () => {
  return (
    <div className="countries-page">
      <h1>Countries</h1>
      <AuthCard />
      <CountryCard />
    </div>
  )
}

export default Countries
