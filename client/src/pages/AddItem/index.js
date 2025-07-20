import React from 'react';
import { Input, Select, Button, message, Form } from 'antd';
//import 'antd/dist/reset.css';
import 'antd/dist/reset.css';


const { TextArea } = Input;
const { Option } = Select;

function AddItem(){
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
   // console.log("Form submitted with values:", values); 
    const success = Math.random() > 0.5; // Random success or failure
    if (success) {
      message.success("Item added successfully...");
    //  console.log("success..")
      form.resetFields();
    } else {
     // message.error("Failed to add item 😢. Try again!");
      console.log("Failed..")
    }
  };
  return (
    <div >
    <h1 style={{textAlign:'center'}}>AddNewItem</h1>
    <div style={{width:'50%',marginLeft:'25%'}}>   
    <Form 
    form={form}
    layout="vertical"
    onFinish={handleSubmit} 
  >
    <Form.Item
      label="Name"
      name="name"
      rules={[{ required: true, message: 'Please enter the item name' }]}
    >
      <Input placeholder="Enter item name" />
    </Form.Item>

    <Form.Item
      label="Description"
      name="description"
      rules={[{ required: true, message: 'Please enter a description' }]}
    >
      <TextArea rows={4} placeholder="Enter item description" />
    </Form.Item>

    <Form.Item
      label="Category"
      name="category"
      rules={[{ required: true, message: 'Please select a category' }]}
    >
      <Select placeholder="Select a category">
        <Option value="fitness">Fitness</Option>
        <Option value="games">Games</Option>
        <Option value="furniture">Furniture</Option>
        <Option value="kitchen">Kitchen</Option>
        <Option value="tools">Tools</Option>
        <Option value="outdoors">Outdoors</Option>
      </Select>
    </Form.Item>

    <Form.Item
      label="Owner"
      name="owner"     
    >
      <Input placeholder="Item Owner" />
    </Form.Item>

    <Form.Item
      label="Condition"
      name="condition"
      rules={[{ required: true, message: 'Please enter item condition' }]}
    >
      <Input placeholder="Item Condition" />
    </Form.Item>
    <Form.Item
      label="Available"
      name="available"     
    >
      <Input placeholder="yes or no" />
    </Form.Item>

    <Form.Item
      label="Image URL"
      name="image"
      rules={[{ required: true, message: 'Please enter an image URL' }]}
    >
      <Input placeholder=" image URL here" />
    </Form.Item>

    <Form.Item>
      <Button  type="primary" htmlType="submit" block>
        Submit
      </Button>
    </Form.Item>
  </Form>
 
  </div>
  </div>

);
}

export default AddItem;