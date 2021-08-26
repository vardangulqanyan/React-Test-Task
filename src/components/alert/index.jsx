import React from 'react'
import { Alert } from 'antd'
import classes from './styles.module.css'

const MyAlert = ({ message, type }) => {
  return (
    <div className={classes.errorContainer}>
      <Alert
        message={message ? message : 'Something went wrong...'}
        type={type ? type : 'warning'}
        showIcon
        closable
      />
    </div>
  )
}

export default MyAlert
