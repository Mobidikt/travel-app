import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction } from 'redux'
import { Select } from 'antd'

import languageSelectors from '../../store/selectors/language'
// import setLanguage from '../../store/actions/language'
import useActions from '../../hooks/useActions'
import useTypedSelector from '../../hooks/useTypedSelector'

const { Option } = Select

const LanguageSelect = () => {
  const { setLanguage } = useActions()
  const changeLanguage = (newLanguage: string) => {
    console.log(newLanguage)
    setLanguage(newLanguage)
  }
  const { language } = useTypedSelector((state) => state.language)
  console.log(languageSelectors)
  console.log(language)
  return (
    <Select defaultValue={language} onChange={changeLanguage} style={{ width: 120 }}>
      <Option value="en">English</Option>
      <Option value="ru">Russian</Option>
      <Option value="de">German</Option>
    </Select>
  )
}

export default LanguageSelect
