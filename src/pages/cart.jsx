import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import firebase from 'firebase'
import { MyModal, MyCard } from '../components'
import { useFirestore } from '../context/FirestoreContext'
import { useAuth } from '../context/AuthContext'

const Cart = () => {
  const { currentUser } = useAuth()
  const { create, get, remove } = useFirestore()
  const [cards, setCards] = useState([])
  const [visible, setVisible] = useState(false)

  const handleModalVisible = (modalVisibleState) => {
    setVisible(modalVisibleState)
  }

  const fetchData = async () => {
    const { uid } = currentUser
    try {
      const data = await get(uid)
      setCards(
        data.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id,
        }))
      )
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])

  const onFinish = async (value) => {
    const { uid } = currentUser
    const { title, text } = value

    const newTodo = {
      id: Date.now(),
      title: title,
      text: text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    }

    try {
      await create(newTodo, uid)
      fetchData()
    } catch (error) {
      console.log(error.message)
    }
  }

  const removeHandler = async (docId) => {
    const { uid } = currentUser
    try {
      await remove(uid, docId)
      fetchData()
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <Row>
        <Col span={24}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => handleModalVisible(true)}
          >
            Create card
          </Button>
        </Col>
      </Row>

      <br />

      <Row gutter={[32, 32]}>
        {cards.length > 0 &&
          cards.map((card) => (
            <MyCard key={card.id} card={card} removeHandler={removeHandler} />
          ))}
      </Row>

      <MyModal
        visible={visible}
        setVisible={handleModalVisible}
        handleCreate={onFinish}
      />
    </>
  )
}

export default Cart
