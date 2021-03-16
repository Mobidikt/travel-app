import React from 'react'
import { Form, Input, Button, Alert } from 'antd'
import { useIntl } from 'react-intl'
import useActions from '../../hooks/useActions'
import './Login.scss'
import useTypedSelector from '../../hooks/useTypedSelector'

const validateMessages = {
  required: 'Обязательное поле',
  types: {
    email: 'Адрес эл. почты должен быть действительным.',
  },
}

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { fetchLogin } = useActions()
  const { errorMessage, isLoginError } = useTypedSelector((state) => state.authReducer)

  const onFinish = (values: LoginFormData) => {
    const { email, password } = values

    fetchLogin(email, password)
  }

  return (
    <div className="login">
      <Form
        className="form"
        layout="vertical"
        validateMessages={validateMessages}
        onFinish={onFinish}
      >
        <Form.Item label="E-mail" name="email" rules={[{ type: 'email', required: true }]}>
          <Input className="form__input" />
        </Form.Item>

        <Form.Item
          label={intl.formatMessage({ id: 'password' })}
          name="password"
          rules={[{ required: true }]}
        >
          <Input.Password className="form__input" />
        </Form.Item>

        <Form.Item>
          <Button size="large" htmlType="submit" className="form__btn">
            {intl.formatMessage({ id: 'Login' })}
          </Button>
        </Form.Item>
      </Form>
      {isLoginError ? <Alert message={errorMessage} type="error" /> : null}
    </div>
  )
}

export default Login
