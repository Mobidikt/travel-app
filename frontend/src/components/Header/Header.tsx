import React from 'react'
import { Button } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons'
import logo from '../../assets/logo.png'
import LanguageSelect from '../LanguageSelect/LanguageSelect'
import SearchField from '../SearchField/SearchField'
import useActions from '../../hooks/useActions'
import AuthCard from '../AuthCard/AuthCard'
<<<<<<< Updated upstream
import Grades from '../Grades/Grades'
import config from '../../config'
=======
import Currency from '../Currency/Currency'
>>>>>>> Stashed changes

import './Header.scss'
import useTypedSelector from '../../hooks/useTypedSelector'

const Header: React.FC = () => {
  const { pathname } = useLocation()
  const mainLocation = pathname === '/countries'
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)

  const { token } = useTypedSelector((state) => state.authReducer)
  const { setIsVisibleAuthCard, logout } = useActions()

  let backgroundHeader = {}
  if (currentCountry && !mainLocation) {
    const Background = currentCountry.picture
    backgroundHeader = {
      backgroundImage: `url(${Background})`,
    }
  } else {
    backgroundHeader = {}
  }

  return (
    <header className="header" style={backgroundHeader}>
      <AuthCard />
      <div className="header__wrapper">
        <Link to="/countries">
          <img src={logo} className="header__logo" alt="logo" />
        </Link>
        <div className="header__menu">
          <LanguageSelect />
          {mainLocation ? <SearchField /> : null}
<<<<<<< Updated upstream

          {/* {mainLocation ? <Grades /> : null} */}
          {token ? (
            <Button size="large" shape="round" onClick={logout} icon={<LogoutOutlined />}>
              Выйти
            </Button>
=======
          {mainLocation ? null : <Currency />}
          {isLogin ? (
            <button type="button">Выйти</button>
>>>>>>> Stashed changes
          ) : (
            <Button
              size="large"
              shape="round"
              onClick={setIsVisibleAuthCard}
              icon={<LoginOutlined />}
            >
              Войти
            </Button>
          )}

          {mainLocation ? null : <Grades />}
        </div>
      </div>
      <h1 className="header__title">
        {mainLocation ? 'Travel app' : `Travel to the ${currentCountry?.country || ''}`}
      </h1>
    </header>
  )
}

export default Header
