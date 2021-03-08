import React from 'react'
import AuthCard from '../../components/AuthCard/AuthCard'
import './Countries.scss'

const Countries: React.FC = () => {
  return (
    <div className="countries-page">
      <h1>Countries</h1>
      <AuthCard />
    </div>
  )
}

export default Countries
