import React, { useState } from 'react'
import { Row, Col, Form, Input, Button, Card, Typography } from 'antd'
import { useAuth } from '../context/AuthContext'
import { MyAlert } from '../components'

const { Title } = Typography

const Reset = () => {
  const [form] = Form.useForm()
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    try {
      setMessage('')
      setError('')
      setLoading(true)
      await resetPassword(values.email)
      setMessage('Check your inbox for further instructions...')
      form.resetFields()
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
    setLoading(false)
  }

  return (
    <Row align="middle">
      <Col span={8} offset={8}>
        <Title level={3}>Reset Password</Title>
        <Card>
          {error && <MyAlert type="error" message={error} />}
          {message && <MyAlert type="success" message={message} />}
          <Form form={form} layout="vertical" name="reset" onFinish={onFinish}>
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

            <Form.Item>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                loading={loading}
              >
                Reset Password
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

export default Reset
