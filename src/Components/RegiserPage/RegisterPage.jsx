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
const RegisterPage = () => {
  const [loading,setLoading] = useState(false)

  async function handle(values){
    setLoading(true)
  try{
  await axios.post('https://proxstream.online/public/register',values)
  .then(response=>{alert("regester Successfully")})
  .catch(error=>{alert("Somthing Went Wrong!!",error)})
}
  catch(e){
    console.log(e)
  }
  finally{
    setLoading(false)
  }
  
}

   
  const [form] = Form.useForm();
  const variant = Form.useWatch('variant', form);
  return (
    <center>
    <div>
        <br></br>
        <h1>Registration Form</h1>
        <br />
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
            name="name" 
            rules={[{ required: true, message: 'Please Enter Full Name!' }]}>
              <Input />
            </Form.Item>
      
            <Form.Item label="Email" 
            name="email" 
             rules={[{ required: true, message: 'Please Enter Email!' }]}>
              <Input />
            </Form.Item>
      
            <Form.Item
              label="Mobile Number"
              name="phone"
              rules={[{ required: true, message: 'Please Enter Mobile Number!' }]}
            >
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
      
      <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please Enter Password!' }]}
            >
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
           
      
            <Form.Item
              label="Role"
              name="role"
              rules={[{ required: true, message: 'Please Enter Role!' }]}
            >
           <Input />
            </Form.Item>
      
      
      <Form.Item label={null}>
        <Button type="primary" htmlType="Regester" {...loading? {disabled:true} : {}}>
          {loading? 'Registering...': 'Register'}
        </Button>
      </Form.Item>
    </Form>
    </div>
    {
  loading && (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255,255,255,0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
      }}
    >
      <img
        src="https://i.gifer.com/ZKZg.gif"
        alt="loading"
        width="100"
      />
    </div>
  )
}
    </center>
  );
};
export default RegisterPage;