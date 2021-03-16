import React, { useRef, useState } from 'react'
import { Card, Form, Input, Button } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import useTypedSelector from '../../hooks/useTypedSelector'
import './UserProfile.scss'
import useActions from '../../hooks/useActions'
import config from '../../config'

const validateMessages = {
  required: 'Обязательное поле',
}

const UserProfile: React.FC = () => {
  const fileInput = useRef<HTMLInputElement>(null)

  const { isVisibleProfile, email, username, userPhoto } = useTypedSelector(
    (state) => state.authReducer,
  )
  const { setIsVisibleProfileCard } = useActions()

  const initImgSrc = userPhoto ? `${config.API_URL || ''}/${userPhoto || ''}` : undefined

  const [imgSrc, setImgSrc] = useState<string | undefined>(initImgSrc)

  const changeAvatar = () => {
    const photo = fileInput.current?.files?.length === 1 ? fileInput.current.files[0] : null

    const reader = new FileReader()

    reader.onload = () => {
      setImgSrc(reader.result?.toString())
    }

    if (photo) {
      reader.readAsDataURL(photo)
    }
  }

  let cardClasses = 'profile-card'

  if (!isVisibleProfile) {
    cardClasses += ' profile-card--hide'
  }

  const onFinish = () => {
    const photo = fileInput.current?.files?.length === 1 ? fileInput.current.files[0] : null
  }

  return (
    <Card className={cardClasses}>
      <CloseOutlined className="auth-card__close" onClick={setIsVisibleProfileCard} />
      <div className="profile-card-header">
        <h2>Ваш Профиль</h2>
      </div>

      <Form
        className="form"
        layout="vertical"
        validateMessages={validateMessages}
        onFinish={onFinish}
      >
        <Form.Item label="E-mail" name="email">
          <Input defaultValue={email || ''} disabled className="form__input email" />
        </Form.Item>
        <Form.Item
          label="Имя пользователя"
          name="username"
          initialValue={username}
          rules={[{ required: true }]}
        >
          <Input className="form__input" />
        </Form.Item>
        <div className="photo">
          <h3 className="photo__title">Фото:</h3>
          {imgSrc ? (
            <img src={imgSrc} alt="avatar" className="avatar" />
          ) : (
            <h3>Вы можете загрузить свою фотографию</h3>
          )}
        </div>

        <input
          className="form__input form__input--file"
          type="file"
          onChange={changeAvatar}
          ref={fileInput}
        />

        <Form.Item>
          <Button size="large" htmlType="submit" className="form__btn">
            Сохранить
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default UserProfile
