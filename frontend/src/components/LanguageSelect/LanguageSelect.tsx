import React from 'react'
import { Select } from 'antd'

import useActions from '../../hooks/useActions'
import useTypedSelector from '../../hooks/useTypedSelector'

const { Option } = Select

const LanguageSelect: React.FC = () => {
  const { setLanguage } = useActions()
  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage)
  }
  const { language } = useTypedSelector((state) => state.language)
  return (
    <Select defaultValue={language} onChange={changeLanguage} style={{ width: 120 }}>
      <Option value="en">English</Option>
      <Option value="ru">Russian</Option>
      <Option value="de">German</Option>
    </Select>
  )
}

export default LanguageSelect
