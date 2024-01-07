import React from "react";
import "./../resources/defaultlayout.css";
import { Button, Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("resumebuilder-user"));
  const navigate = useNavigate()
  const items = [
    {
      key: "1",
      label: (
        <Link to="/home">
          Home
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to="/profile">
          Profile
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <span onClick={()=>{
          localStorage.removeItem('resumebuilder-user')
          navigate('/login')
        }}>Logout</span>
      ),
    },
  ];

  return (
    <div className="layout">
      <div className="header">
        <h1 onClick={()=>navigate('/home')} style={{cursor: 'pointer'}}>Build Your CV</h1>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
          arrow
        >
          <Button icon={<UserOutlined />}>{user.username}</Button>
        </Dropdown>
      </div>
      <div className="content" style={{overflow:'scroll'}}>{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
