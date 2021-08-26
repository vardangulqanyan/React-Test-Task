import React from 'react'
import { Col, Card } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import classes from './styles.module.css'

const MyCard = ({ card, removeHandler }) => {
  return (
    <Col span={6}>
      <Card
        className={classes.antCard}
        actions={[
          <DeleteOutlined
            onClick={() => removeHandler(card.docId)}
            key="remove"
          />,
        ]}
      >
        <h4>{card.title}</h4>
        <p>{card.text}</p>
      </Card>
    </Col>
  )
}

export default MyCard
