import React from 'react'
import { Button } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons'
import logo from '../../assets/logo.png'
import LanguageSelect from '../LanguageSelect/LanguageSelect'
import SearchField from '../SearchField/SearchField'
import useActions from '../../hooks/useActions'
import AuthCard from '../AuthCard/AuthCard'
import Grades from '../Grades/Grades'
import config from '../../config'

import './Header.scss'
import useTypedSelector from '../../hooks/useTypedSelector'

const Header: React.FC = () => {
  const { pathname } = useLocation()
  const mainLocation = pathname === '/countries'
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)

  const { token } = useTypedSelector((state) => state.authReducer)
  const { setIsVisibleAuthCard, logout } = useActions()

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
        <Link to="/countries">
          <img src={logo} className="header__logo" alt="logo" />
        </Link>
        <div className="header__menu">
          <LanguageSelect />
          {mainLocation ? <SearchField /> : null}

          {/* {mainLocation ? <Grades /> : null} */}
          {token ? (
            <Button size="large" shape="round" onClick={logout} icon={<LogoutOutlined />}>
              Выйти
            </Button>
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
    </div>
  )
}

export default Header
