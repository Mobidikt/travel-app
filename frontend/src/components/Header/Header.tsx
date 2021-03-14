import React from 'react'
import { Button } from 'antd'
import { useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import LanguageSelect from '../LanguageSelect/LanguageSelect'
import SearchField from '../SearchField/SearchField'
import useActions from '../../hooks/useActions'
import AuthCard from '../AuthCard/AuthCard'
import Grades from '../Grades/Grades'

import './Header.scss'
import useTypedSelector from '../../hooks/useTypedSelector'

const isLogin = false // вошел ли пользователь

const Header: React.FC = () => {
  const { pathname } = useLocation()
  const mainLocation = pathname === '/countries'
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)
  const { setIsVisibleAuthCard } = useActions()
  let backgroundHeader = {}
  if (currentCountry) {
    const Background = currentCountry.picture
    backgroundHeader = {
      backgroundImage: `url(${Background})`,
    }
  }

  return (
    <div className="header" style={backgroundHeader}>
      <AuthCard />
      <div className="header__wrapper">
        <a href="/countries">
          <img src={logo} className="header__logo" alt="logo" />
        </a>
        <div className="header__menu">
          <LanguageSelect />
          {mainLocation ? <SearchField /> : null}
          {mainLocation ? null : <Grades />}
          {isLogin ? (
            <button type="button">Выйти</button>
          ) : (
            <Button
              className="header__btn"
              shape="round"
              size="large"
              onClick={setIsVisibleAuthCard}
            >
              Авторизоваться
            </Button>
          )}
        </div>
      </div>
      <h1 className="header__title">
        {mainLocation ? 'Travel app' : `Travel to the ${currentCountry?.country || ''}`}
      </h1>
    </div>
  )
}

export default Header
