import React, { useEffect, useState } from 'react'
import useTypedSelector from '../../hooks/useTypedSelector'

const Currency: React.FC = () => {
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)
  const [currency, setCurrency] = useState<number>(5)
  console.log(currentCountry)
  const currUSDtoW = (obj: any): void => {
    // eslint-disable-next-line
    const { rates } = obj
    const currencyId = currentCountry?.currency
    // eslint-disable-next-line
    setCurrency(rates)
  }
  useEffect(() => {
    const id = '2d0321814c8e4db9bba4fc098cb80a92'
    const URL = `https://openexchangerates.org/api/latest.json?app_id=${id}`
    const ac = new AbortController()
    fetch(URL)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        // eslint-disable-next-line
        const { rates } = res
        const currencyId = currentCountry?.currency || 'EUR'
        // eslint-disable-next-line
        setCurrency(rates[currencyId])
      })
      .catch((error) => console.log(error))
  }, [currentCountry?.currency])
  console.log(currency)
  return (
    <div className="currency">
      {currency} {currentCountry?.currency}
    </div>
  )
}

export default Currency
