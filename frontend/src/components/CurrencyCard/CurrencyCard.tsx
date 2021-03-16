import React from 'react'
import { Card } from 'antd'
import useTypedSelector from '../../hooks/useTypedSelector'
import './CurrencyCard.scss'

// eslint-disable-next-line
const currencyApi: any = {
  CHF: {
    usd: '1.08',
    rub: '78,8',
    eur: '0.91',
  },
  ALL: {
    usd: '103',
    rub: '141',
    eur: '122.85',
  },
  GEL: {
    usd: '3.4',
    rub: '4.6',
    eur: '4',
  },
  EUR: {
    usd: '0,97',
    rub: '1,15',
    eur: '1',
  },
  VEF: {
    usd: '0.000299',
    rub: '0,000409',
    eur: '0.000356',
  },
  DOP: {
    usd: '57.17',
    rub: '78',
    eur: '68.19',
  },
}

const CurrencyCard: React.FC = () => {
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)

  const currentCurrencyCode = currentCountry ? currentCountry.currency : 'EUR'

  // eslint-disable-next-line
  const { usd, rub, eur } = currencyApi[currentCurrencyCode]

  return (
    <Card className="currency-card">
      <h2>Курсы валют</h2>
      <p>
        1 USD = {usd} {currentCurrencyCode}{' '}
      </p>
      <p>
        100 RUB = {rub} {currentCurrencyCode}
      </p>
      <p>
        1 EURO = {eur} {currentCurrencyCode}
      </p>
    </Card>
  )
}

export default CurrencyCard
