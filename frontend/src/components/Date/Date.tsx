/* eslint-disable */
import React, { useState } from 'react'
import './Date.scss'
import { useInterval } from '../../hooks/useInterval'
import useTypedSelector from '../../hooks/useTypedSelector'

const DateComponent: React.FC = () => {
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)
  const [date, setDate] = useState('')
  const getDate = () => {
    const options: {[key: string]: string} = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      // eslint-disable-next-line
      timeZone: 'America/Santo_Domingo',
    }
    const currentDate =  new Date().toLocaleString('en-US', options)
    setDate(currentDate)
  }
  useInterval(() => getDate(), 1000)
  return (
    <div className="date">
      <span>{date}</span>
    </div>
  )
}

export default DateComponent
