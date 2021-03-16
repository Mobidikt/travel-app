import React from 'react'
import { Button, Avatar, Image } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { LoginOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import logo from '../../assets/logo.png'
import LanguageSelect from '../LanguageSelect/LanguageSelect'
import SearchField from '../SearchField/SearchField'
import useActions from '../../hooks/useActions'
import AuthCard from '../AuthCard/AuthCard'
import config from '../../config'

import './Header.scss'
import useTypedSelector from '../../hooks/useTypedSelector'
import Music from '../Music/Music'

const Header: React.FC = () => {
  const intl = useIntl()
  const { pathname } = useLocation()
  const mainLocation = pathname === '/countries'
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)

  const { token, userPhoto } = useTypedSelector((state) => state.authReducer)
  const { setIsVisibleAuthCard, logout } = useActions()
  const { language } = useTypedSelector((state) => state.language)
  const ending = (country: string) => {
    if (country === 'Доминиканская Республика') {
      return 'Доминиканской Республики'
      // eslint-disable-next-line
    } else if (country === 'Венесуэла') {
      return 'Венесуэле'
      // eslint-disable-next-line
    } else return country.substring(0, country.length - 1) + 'и'
  }
  let backgroundHeader = {}
  if (currentCountry && !mainLocation) {
    const Background = currentCountry.picture
    backgroundHeader = {
      backgroundImage: `url(${Background})`,
    }
  } else {
    backgroundHeader = {}
  }
  const nameCountry = (country: string) => (language === 'ru' ? ending(country) : country)
  return (
    <header className="header" style={backgroundHeader}>
      <AuthCard />
      <div className="header__wrapper">
        <Link to="/countries">
          <img src={logo} className="header__logo" alt="logo" />
        </Link>
        <div className="header__menu">
          <div className="menu-bar">
            <LanguageSelect />
            {mainLocation ? <SearchField /> : null}
          </div>
          {token ? (
            <div className="user-info">
              {userPhoto ? (
                <Avatar
                  size={40}
                  src={<Image src={`${config.API_URL || ''}/${userPhoto || ''}`} />}
                />
              ) : (
                <Avatar icon={<UserOutlined />} />
              )}
              <Button size="large" shape="round" onClick={logout} icon={<LogoutOutlined />}>
                {intl.formatMessage({ id: 'Exit' })}
              </Button>
            </div>
          ) : (
            <Button
              size="large"
              shape="round"
              onClick={setIsVisibleAuthCard}
              icon={<LoginOutlined />}
            >
              {intl.formatMessage({ id: 'Login' })}
            </Button>
          )}
        </div>
      </div>
      <h1 className="header__title">
        {mainLocation
          ? `${intl.formatMessage({ id: 'Travel_app' })}`
          : `${intl.formatMessage({ id: 'Travel_to_the' })}
          ${currentCountry?.country ? nameCountry(currentCountry.country) : ''}`}
      </h1>
      <Music />
    </header>
  )
}

export default Header
