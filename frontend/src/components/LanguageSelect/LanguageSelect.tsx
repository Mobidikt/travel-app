import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Select } from 'antd'

// import languageSelectors from '../store/selectors/language'
// import setLanguage from '../store/actions/language'

const { Option } = Select

const LanguageSelect = () => {
  //  const dispatch:any = useDispatch()
  //  const changeLanguage = (newLanguage) => {
  //  dispatch(setLanguage(newLanguage))
  //  }
  //   const { language } = useSelector(languageSelectors.language)
  return (
    <Select
      //   defaultValue={language === 'en' ? 'English' : language === 'ru' ? 'Russian' : 'German'}
      //   onChange={changeLanguage}
      defaultValue="en"
      style={{ width: 120 }}
    >
      <Option value="en">English</Option>
      <Option value="ru">Russian</Option>
      <Option value="de">German</Option>
    </Select>
  )
}

export default LanguageSelect
