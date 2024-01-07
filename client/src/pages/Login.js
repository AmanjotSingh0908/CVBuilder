import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "../resources/authentication.css";
import { Flex, Spin } from 'antd';
import { host } from "../host";


function Login() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const onFinish = async (values) => {
    setLoading(true)
    try {
      const user = await axios.post(`${host}/api/user/login`, values)
      message.success("Login successfull")
      localStorage.setItem('resumebuilder-user', JSON.stringify(user.data));
      setLoading(false)
      navigate('/home')
    } catch (error) {
      setLoading(false)
      message.error("Login Failed, Try to Register")
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
      {loading && <Spin size="large"/>}
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Login</h1>
        <hr></hr>
        <Form.Item name="username" label="Username">
          <input className="input-fields"/>
        </Form.Item>
        <Form.Item name="password" label="Password">
          <input className="input-fields" type='password'/>
        </Form.Item>

      <div className="d-flex align-items-center justify-content-between">  
        <Link to='/register'>Click Here to Register</Link>
        <Button type="primary" htmlType="submit">
          LOGIN
        </Button>
      </div>
      </Form>
    </div>
  );
}

export default Login;
