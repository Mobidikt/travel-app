import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { AnyAction } from 'redux'
import { Select } from 'antd'

// import languageSelectors from '../../store/selectors/language'
// import setLanguage from '../../store/actions/language'

const { Option } = Select
// type State = { a: string } // your state type
// type AppDispatch = <State, any, AnyAction>

const LanguageSelect = () => {
  // const dispatch = useDispatch()
  // const changeLanguage = (newLanguage: string) => {
  //   console.log(newLanguage)
  //   dispatch(setLanguage(newLanguage))
  // }
  // const { language } = useSelector(languageSelectors.language)
  // console.log(languageSelectors)
  // console.log(language)
  return (
    <Select
      //   defaultValue={language === 'en' ? 'English' : language === 'ru' ? 'Russian' : 'German'}
      // onChange={changeLanguage}
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
