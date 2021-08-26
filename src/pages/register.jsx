import React, { useState } from 'react'
import { Row, Col, Form, Input, Button, Card, Typography } from 'antd'
import { MyAlert } from '../components'
import { useAuth } from '../context/AuthContext'

const { Title } = Typography

const Register = () => {
  const [form] = Form.useForm()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    try {
      setError('')
      setLoading(true)
      await signup(values.email, values.password)
      form.resetFields()
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  return (
    <Row align="middle">
      <Col span={8} offset={8}>
        <Title level={3}>Register Form</Title>
        <Card>
          {error && <MyAlert type="error" message={error} />}
          <Form
            form={form}
            layout="vertical"
            name="register"
            onFinish={onFinish}
          >
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

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(
                      new Error(
                        'The two passwords that you entered do not match!'
                      )
                    )
                  },
                }),
              ]}
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
                Register
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

export default Register
