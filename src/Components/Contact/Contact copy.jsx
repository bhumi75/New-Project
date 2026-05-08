import React, { useState } from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Segmented,
  Select,
  TreeSelect,
} from 'antd';
import axios from 'axios';
const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
const Contact = () => {
const [fname, setFname] = useState('');
const [email, setEmail] = useState('');
const [mobile, setMobile] = useState(0);
const [address, setAddress] = useState('');
const [dob, setDob] = useState('');

const body = {
  fname:fname,
  email:email,
  mobile:mobile,
  address:address,
  dob:dob
}

function handle(){
  axios.post('https://proxstream.online/public/contact-form',body)
  .then(response=>{alert(response.data)})
  .catch(error=>{alert("Somthing Went Wrong!!",error)})
}


  const [form] = Form.useForm();
  const variant = Form.useWatch('variant', form);
  return (
    <>
    <center>
        <br></br>
    <h1>Contact Me</h1>
    <br></br>
    <Form
      {...formItemLayout}
      form={form}
      onFinish={handle}
      variant={variant || 'filled'}
      style={{ maxWidth: 600 }}
      initialValues={{ variant: 'filled' }}
    >
      {/* <Form.Item label="Form variant" name="variant">
        <Segmented options={['outlined', 'filled', 'borderless', 'underlined']} />
      </Form.Item> */}

      <Form.Item label="Full Name" 
      name="Input" 
      value={fname}
      onChange={(e)=>setFname(e.target.value)} 
      rules={[{ required: true, message: 'Please Enter Full Name!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Email" name="InputEmail" onChange={(e)=>setEmail(e.target.value)} rules={[{ required: true, message: 'Please Enter Email!' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Mobile Number"
        name="InputNumber"
        value={mobile}
        onChange={(e)=>setMobile(e.target.value)}
        rules={[{ required: true, message: 'Please Enter Mobile Number!' }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Address"
        name="TextArea"
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
        rules={[{ required: true, message: 'Please Enter Mobile Number!' }]}
      >
        <Input.TextArea />
      </Form.Item>


      <Form.Item
        label="DOB"
        name="DatePicker"
        value={dob}
        onChange={(e)=>setDob(e.target.value)}
        rules={[{ required: false, message: 'Please Enter Date Of Birth!' }]}
      >
        <DatePicker />
      </Form.Item>


      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </center>
    </>
  );
};
export default Contact;