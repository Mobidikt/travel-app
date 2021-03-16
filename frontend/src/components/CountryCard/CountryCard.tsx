import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
import './CountryCard.scss'
import { CountryType } from '../../store/types/countries'

const { Meta } = Card

type CountryProps = {
  country: CountryType,
}

const CountryCard: React.FC<CountryProps> = ({ country }) => {
  return (
    <Link className="country-card" to={`/countries/${country.id}`}>
      <Card hoverable cover={<img alt={country.country} src={country.picture} />}>
        <Meta title={country.country} description={country.capital} />
      </Card>
    </Link>
  )
}

export default CountryCard
