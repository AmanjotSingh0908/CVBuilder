import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import '../resources/authentication.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Flex, Spin } from 'antd';
import { host } from "../host";



function Regsiter() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const onFinish = async (values) => {
    setLoading(true)
      try {
        await axios.post(`${host}/api/user/register`, values);
        setLoading(false);
        message.success("Registration successfull");
      } catch (error) {
        setLoading(false);
        message.error("Registration Failed, Please try again after sometime");
      }
  };

  useEffect(() => {
    if(localStorage.getItem('resumebuilder-user'))
    {
      navigate('/home')
    }
  })

  return (
    <div className="auth-parent">
      {loading && (<Spin size="large"/>)}
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Register</h1>
        <hr></hr>
        <Form.Item name="username" label="Username">
          <input className="input-fields"/>
        </Form.Item>
        <Form.Item name="password" label="Password">
          <input className="input-fields" type='password'/>
        </Form.Item>
        <Form.Item name="cpassword" label="Confirm Password">
          <input className="input-fields" type='password'/>
        </Form.Item>

      <div className="d-flex align-items-center justify-content-between">  
        <Link to='/login'>Click Here to Login</Link>
        <Button type="primary" htmlType="submit">
          REGISTER
        </Button>
      </div>
      

        
      </Form>
    </div>
  );
}

export default Regsiter;
