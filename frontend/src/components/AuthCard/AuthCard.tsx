import React, { useState } from 'react'
import { Card, Button } from 'antd'
import { useIntl } from 'react-intl'
import { CloseOutlined } from '@ant-design/icons'
import Login from '../Login/Login'
import Registration from '../Registration/Registration'
import useTypedSelector from '../../hooks/useTypedSelector'
import useActions from '../../hooks/useActions'

import './AuthCard.scss'
import config from '../../config'

const AuthCard: React.FC = () => {
  const intl = useIntl()

  const [buttons, setButtons] = useState([
    { title: 'Authorization', isActive: true },
    { title: 'Register', isActive: false },
  ])

  const { isVisibleAuthCard, userPhoto } = useTypedSelector((state) => state.authReducer)
  const { setIsVisibleAuthCard } = useActions()

  const activeClickHandler = (activeTitle: string) => {
    const newButtons = buttons.map((btn) => {
      if (btn.title === activeTitle) return { title: btn.title, isActive: true }
      return { title: btn.title, isActive: false }
    })
    setButtons(newButtons)
  }

  let cardClasses = 'auth-card'

  if (!isVisibleAuthCard) {
    cardClasses += ' auth-card--hide'
  }

  return (
    <Card className={cardClasses}>
      <CloseOutlined className="auth-card__close" onClick={setIsVisibleAuthCard} />
      <div className="auth-card-header">
        {buttons.map((btn) => (
          <Button
            className={`auth-card-header__btn ${
              btn.isActive ? 'auth-card-header__btn--active' : ''
            }`}
            type="link"
            key={btn.title}
            onClick={() => activeClickHandler(btn.title)}
          >
            {intl.formatMessage({ id: btn.title })}
          </Button>
        ))}
      </div>
      {buttons[0].isActive ? <Login /> : <Registration />}
    </Card>
  )
}

export default AuthCard
