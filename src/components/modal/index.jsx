import React from 'react'
import { Modal, Form, Input, Button } from 'antd'
// import SlateEditor from '../editor'

const { TextArea } = Input

const MyModal = ({ visible, setVisible, handleCreate }) => {
  const [form] = Form.useForm()

  const handleCancel = () => {
    setVisible && setVisible(false)
    form.resetFields()
  }

  const onFinish = (value) => {
    handleCreate && handleCreate(value)
    setVisible && setVisible(false)
    form.resetFields()
  }

  return (
    <Modal
      title="Create"
      visible={visible}
      onCancel={handleCancel}
      footer={[
        <Button
          key="cancel"
          type="default"
          size="large"
          htmlType="button"
          onClick={handleCancel}
        >
          Cancel
        </Button>,
        <Button
          key="create"
          type="primary"
          size="large"
          htmlType="submit"
          form="create"
        >
          Create
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        id="create"
        name="createTodo"
        onFinish={onFinish}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Title required!' }]}
        >
          <Input size="large" />
        </Form.Item>

        {/* <Form.Item
          name="text"
          label="Text"
          rules={[{ required: true, message: 'Text required!' }]}
        >
          <SlateEditor />
        </Form.Item> */}

        <Form.Item
          name="text"
          label="Text"
          rules={[{ required: true, message: 'Text required!' }]}
        >
          <TextArea rows={6} />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default MyModal
