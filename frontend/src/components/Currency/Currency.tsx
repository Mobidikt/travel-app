import React, { useEffect, useState } from 'react'
import useTypedSelector from '../../hooks/useTypedSelector'

const Currency: React.FC = () => {
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)
  const [currency, setCurrency] = useState<number>(5)
  const grade = (obj: any): number[] => {
    // eslint-disable-next-line
    const { rates } = obj
    /* let curr = 0
    rates.map((el) => {
      el
    }) */
    console.log(rates)
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
  useEffect(() => {
    const id = '2d0321814c8e4db9bba4fc098cb80a92'
    const URL = `https://openexchangerates.org/api/latest.json?app_id=${id}`
    const ac = new AbortController()
    fetch(URL)
      .then((response) => response.json())
      .then((response) => grade(response))
      .catch((error) => setCurrency(error))
  }, [currentCountry?.currency])
  return <div className="currency">{}</div>
}

export default Currency
