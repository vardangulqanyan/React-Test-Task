import React from 'react'
import { Layout } from 'antd'
import { CopyrightOutlined } from '@ant-design/icons'
const { Footer } = Layout

const MyFooter = () => {
  return (
    <Footer>
      <CopyrightOutlined /> Ant Design {new Date().getFullYear()}
    </Footer>
  )
}

export default MyFooter
