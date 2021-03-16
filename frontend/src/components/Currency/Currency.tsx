import React, { useEffect, useState } from 'react'
import useTypedSelector from '../../hooks/useTypedSelector'

const Currency: React.FC = () => {
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)
  const [currency, setCurrency] = useState<number>(5)
  const { language } = useTypedSelector((state) => state.language)
  console.log(language)
  const currUSDtoW = (eu: number, ot: number): void => {
    const res = eu / ot
    setCurrency(res)
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
        if (language === 'en') {
          // eslint-disable-next-line
          setCurrency(rates[currencyId])
        } else if (language === 'de') {
          // eslint-disable-next-line
          currUSDtoW(rates.EUR, rates[currencyId])
        } else if (language === 'ru') {
          // eslint-disable-next-line
          currUSDtoW(rates.RUB, rates[currencyId])
        }
      })
      .catch((error) => console.log(error))
  }, [currentCountry?.currency, language])
  console.log(currentCountry)
  return (
    <div className="currency">
      {currency} {currentCountry?.currencyName}
    </div>
  )
}

export default Currency
