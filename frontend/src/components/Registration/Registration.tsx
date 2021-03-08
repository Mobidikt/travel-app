import React from 'react'
import { Form, Input, Button } from 'antd'
import './Registration.scss'

const validateMessages = {
  required: 'Обязательное поле',
  types: {
    email: 'Адрес эл. почты должен быть действительным.',
  },
}

const Registration: React.FC = () => {
  const onFinish = () => {}

  return (
    <div className="login">
      <Form
        className="form"
        layout="vertical"
        validateMessages={validateMessages}
        onFinish={onFinish}
      >
        <Form.Item label="Имя" name="username" rules={[{ required: true }]}>
          <Input className="form__input" />
        </Form.Item>

        <Form.Item label="E-mail" name="email" rules={[{ type: 'email', required: true }]}>
          <Input className="form__input" />
        </Form.Item>

        <Form.Item label="Пароль" name="password" rules={[{ required: true }]}>
          <Input.Password className="form__input" />
        </Form.Item>

        <Form.Item>
          <Button size="large" htmlType="submit" className="form__btn">
            Зарегистрироваться
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Registration
