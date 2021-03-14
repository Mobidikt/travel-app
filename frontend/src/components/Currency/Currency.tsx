import React, { useEffect, useState } from 'react'
import useTypedSelector from '../../hooks/useTypedSelector'

const Currency: React.FC = () => {
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)
  const [currency, setCurrency] = useState<number>(5)
  useEffect(() => {
    const HOST = 'https://openexchangerates.org/'
    const action = 'api/convert/'
    const val = '1'
    const from = 'USD'
    const to = currentCountry?.currency || ''
    const id = '2d0321814c8e4db9bba4fc098cb80a92'
    const URL = `${HOST}${action}${val}/${from}/${to}?app_id=${id}`
    console.log(URL)
    const ac = new AbortController()
    fetch(URL)
      .then((response) => response.json())
      .then((response) => setCurrency(response))
      .catch((error) => setCurrency(error))
  }, [currentCountry?.currency])
  const grade = (): number[] => {
    const res: number[] = []
    let val = 0
    for (let i = 0; i < 5; i += 1) {
      if (val > 0) {
        res.push(1)
        val -= 1
      } else {
        res.push(0)
      }
    }
    return res
  }
  return <div className="currency">{currency}</div>
}

export default Currency
