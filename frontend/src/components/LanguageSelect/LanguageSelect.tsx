import React, { useRef } from 'react'
import { Select } from 'antd'

import useActions from '../../hooks/useActions'
import useTypedSelector from '../../hooks/useTypedSelector'

const { Option } = Select

const LanguageSelect: React.FC = () => {
  const { language } = useTypedSelector((state) => state.language)
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)
  const { setLanguage, fetchCountries } = useActions()

  const changeLanguage = (newLanguage: 'en' | 'ru' | 'de') => {
    setLanguage(newLanguage)
    fetchCountries(currentCountry ? currentCountry.id : null)
  }

  return (
    <Select defaultValue={language} onChange={changeLanguage} style={{ width: 60 }}>
      <Option value="en">En</Option>
      <Option value="ru">Ru</Option>
      <Option value="de">De</Option>
    </Select>
  )
}

export default LanguageSelect
