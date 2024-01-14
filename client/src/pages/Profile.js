import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Button, Form, Spin, Tabs, message } from "antd";
import PersonalInfo from "../components/PersonalInfo";
import SkillsEducation from "../components/SkillsEducation";
import ExperienceProjects from "../components/ExperienceProjects";
import axios from 'axios'
import { host } from "../host";


const { TabPane } = Tabs;
function Profile() {
  const [loading, setLoading]=useState(false)
  const user = JSON.parse(localStorage.getItem('resumebuilder-user'))
  const onFinish = async (values) => {
    setLoading(true)
    console.log(values)
      try {
        const result = await axios.post(`https://1q9p77n2x1.execute-api.ap-south-1.amazonaws.com/dev/api/user/update`, {...values, _id : user._id }, {withCredentials:true});
        localStorage.setItem('resumebuilder-user', JSON.stringify(result.data))
        setLoading(false);
        message.success("Profile Updated successfully");
      } catch (error) {
        setLoading(false);
        message.error("Updation Failed, Please try again after sometime");
      }
  };

  return (
    <DefaultLayout>
      {loading && <Spin size="large"/>}
      <div className="update-profile">
      <h4><b>Update Profile</b></h4>
      <hr></hr>
        <Form layout="vertical" initialValues={user}>
          <Tabs defaultActiveKey="1"> 
            <TabPane tab="Personal Info" key="1">
              <PersonalInfo />
            </TabPane>
            <TabPane tab="Skills and Education" key="2">
              <SkillsEducation />
            </TabPane>
            <TabPane tab="Experience / Projects" key="3">
              <ExperienceProjects />
            </TabPane>
          </Tabs>
          <Button onClick={onFinish}>UPDATE</Button>
        </Form>
      </div>
    </DefaultLayout>
  );
}

export default Profile;
