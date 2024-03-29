import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Description from '../../components/Description/Description'
import Map from '../../components/Map/Map'
import Video from '../../components/Video/Video'
import useActions from '../../hooks/useActions'
import useTypedSelector from '../../hooks/useTypedSelector'
import DateComponent from '../../components/Date/Date'
import Weather from '../../components/Weather/Weather'
import Slider from '../../components/Slider/Carousel'
import CurrencyCard from '../../components/CurrencyCard/CurrencyCard'

const CountryPage = (
  <div className="country-page">
    <Description />
    <DateComponent />
    <Slider />
    <Video />
    <Map />
  </div>
)

const Country: React.FC = () => {
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)
  const { setCurrentCountry } = useActions()
  const { id } = useParams()

  useEffect(() => {
    setCurrentCountry(id)
    window.scrollTo(0, 0)
    // eslint-disable-next-line
  }, [id])

  return currentCountry ? CountryPage : <h1>Нет страны с таким ID</h1>
}

export default Country
