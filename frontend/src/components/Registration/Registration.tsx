import React, { useRef, useEffect } from 'react'
import { Form, Input, Button, Alert, message } from 'antd'
import './Registration.scss'
import useActions from '../../hooks/useActions'
import useTypedSelector from '../../hooks/useTypedSelector'

export type RegistrationType = {
  name: string,
  email: string,
  password: string,
  photo: File | null,
}

const validateMessages = {
  required: 'Обязательное поле',
  types: {
    email: 'Адрес эл. почты должен быть действительным.',
    min: 'Минимальная длина пароля 6 символов',
  },
}

const Registration: React.FC = () => {
  const { fetchRegistation } = useActions()
  const { errorMessage, isRegistrationError, isRegistrated } = useTypedSelector(
    (state) => state.authReducer,
  )

  const successMessage = useRef(() => {})
  const fileInput = useRef<HTMLInputElement>(null)

  const onFinish = (values: RegistrationType) => {
    const { email, name, password } = values
    const photo = fileInput.current?.files?.length === 1 ? fileInput.current.files[0] : null
    fetchRegistation(name, email, password, photo)

    successMessage.current = () => {
      // eslint-disable-next-line
      message.success('Регистрация прошла успешно')
    }
  }

  useEffect(() => {
    if (isRegistrated) {
      successMessage.current()
    }
  }, [isRegistrated])

  return (
    <>
      <Form
        className="form"
        layout="vertical"
        validateMessages={validateMessages}
        onFinish={onFinish}
      >
        <Form.Item label="Имя" name="name" rules={[{ required: true }]}>
          <Input className="form__input" />
        </Form.Item>

        <Form.Item label="E-mail" name="email" rules={[{ type: 'email', required: true }]}>
          <Input className="form__input" />
        </Form.Item>

        <Form.Item label="Пароль" name="password" rules={[{ required: true }]}>
          <Input.Password className="form__input" />
        </Form.Item>

        <input className="form__input form__input--file" type="file" ref={fileInput} />

        <Form.Item>
          <Button size="large" htmlType="submit" className="form__btn">
            Зарегистрироваться
          </Button>
        </Form.Item>
      </Form>
      {isRegistrationError ? <Alert message={errorMessage} type="error" /> : null}
    </>
  )
}

export default Registration
