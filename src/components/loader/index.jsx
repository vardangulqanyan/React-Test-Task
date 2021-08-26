import React from 'react'
import { Spin, Space } from 'antd'
import classes from './styles.module.css'

const MyLoader = () => {
  return (
    <div className={classes.loaderContainer}>
      <Space size="large">
        <Spin size="large" />
      </Space>
    </div>
  )
}

export default MyLoader
