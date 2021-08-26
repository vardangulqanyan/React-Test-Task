import React, { useState } from 'react'
import { Row, Col, Form, Input, Button, Card, Typography } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import { RESET_ROUTE, HOME_ROUTE } from '../navigation/constants'
import { useAuth } from '../context/AuthContext'
import { MyAlert } from '../components'

const { Title } = Typography

const Login = () => {
  const [form] = Form.useForm()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const onFinish = async (values) => {
    try {
      setError('')
      setLoading(true)
      await login(values.email, values.password)
      history.push(HOME_ROUTE)
      form.resetFields()
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  return (
    <Row align="middle">
      <Col span={8} offset={8}>
        <Title level={3}>Login Form</Title>
        <Card>
          {error && <MyAlert type="error" message={error} />}
          <Form form={form} layout="vertical" name="login" onFinish={onFinish}>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password size="large" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                loading={loading}
              >
                Login
              </Button>

              <Button type="link">
                <Link to={RESET_ROUTE}>Forgot password</Link>
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

export default Login
