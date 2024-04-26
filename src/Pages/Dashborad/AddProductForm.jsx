import React from 'react';
import { Form, Input, InputNumber, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { addProduct } from '../../services/products.service';
const { TextArea } = Input;

const AddProductForm = () => {
  const onFinish = async(data) => {
    console.log('Form data:', data);
    // console.log('Form data:', data.upload[0].originFileObj.name);
    const addProductResponse = await addProduct(data);
  };

  return (
    <Form
      name="my-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please enter name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: 'Please enter price!' }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please enter description!' }]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item
        label="Upload"
        name="upload"
        valuePropName="fileList"
        getValueFromEvent={(e) => {
          if (Array.isArray(e)) {
            return e;
          }
          return e && e.fileList;
        }}
        rules={[{ required: true, message: 'Please upload a file!' }]}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProductForm;
