import React from 'react'
import { Select } from 'antd'

import useActions from '../../hooks/useActions'
import useTypedSelector from '../../hooks/useTypedSelector'

const { Option } = Select

const LanguageSelect: React.FC = () => {
  const { setLanguage } = useActions()
  const changeLanguage = (newLanguage: 'en' | 'ru' | 'de') => {
    setLanguage(newLanguage)
  }
  const { language } = useTypedSelector((state) => state.language)
  return (
    <Select defaultValue={language} onChange={changeLanguage} style={{ width: 60 }}>
      <Option value="en">En</Option>
      <Option value="ru">Ru</Option>
      <Option value="de">De</Option>
    </Select>
  )
}

export default LanguageSelect
