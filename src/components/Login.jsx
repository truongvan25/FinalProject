import React, { useState, useEffect, useMemo } from "react";
import { Modal, Button, Tabs, Form, Input } from "antd";
import {api, apiKey} from "../data.js";

const apiCall = `${api}${apiKey}`;

export default function Login(props) {
  const showLoginModal = props.showLoginModal;
  const setShowLoginModal = props.setShowLoginModal;
  const { TabPane } = Tabs;
  const [errorMessage, setErrorMessage] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [isConfirming, setIsConfirming] = useState(false);
  const [confirmAction, setConfirmAction] = useState(""); 
  
  useEffect(() => {
    fetch(apiCall)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Debug dữ liệu API
        const usersArray = data?.data?.data; // Lấy đúng mảng user từ API
        if (Array.isArray(usersArray)) {
          setUserInfo(usersArray);
        } else {
          console.error("User data is not an array:", usersArray);
          setUserInfo([]); // Tránh crash khi dữ liệu lỗi
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const memoizedUserInfo = useMemo(() => userInfo, [userInfo]);

  const handleLogin = (values) => {
    const { username, password } = values;
    const userData = memoizedUserInfo.find(
      (user) => user.username === username && user.password === password
    );

    if (userData) {
      localStorage.setItem("loggedInUser", JSON.stringify(userData));
      localStorage.setItem("isLoggedIn", "true");
      window.dispatchEvent(new Event("user-login"));
      setErrorMessage("");
      setConfirmAction("Logged in");
      setIsConfirming(true);
    } else {
      setErrorMessage("Invalid username or password!")
    }
  };

  const handleRegister = async (values) => {
    if (values.password !== values.confirmPassword) {
      setErrorMessage("Password error, please retry!");
    }

    else {
		const { username, password } = values;
		const userData = memoizedUserInfo.some((user) => user.username == username && user.password === password);
		if (userData){
			setErrorMessage("This username has existed, please Login");
			return ;
		}
		else {
			const newUser = {
			"name": values.name,
			"username": values.username,
			"password": values.password,
			"email": "",
			"phone" : "",
			"address" : "",
			"incourse": [],
			"savecourse":[],
			"finishcourse": []
		};
		try {
			const response = await fetch(apiCall, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newUser),
			});
		
			const result = await response.json();		
			if (response.ok) {
			localStorage.setItem("loggedInUser", JSON.stringify(newUser));
			window.dispatchEvent(new Event("user-register"));
			localStorage.setItem("isLoggedIn", "true");
			setErrorMessage("");
      setConfirmAction("Resgistered");
      setIsConfirming(true);
			
			} else {
			setErrorMessage(result.message || "Registration failed!");
			}
		} catch (error) {
      console.log("Response error: ", error);
			setErrorMessage("An error occurred. Please try again.");
			}
		}
	}
  };

  return (
    <>
    <Modal open={showLoginModal} footer={null} centered onCancel={() => setShowLoginModal(false)}>
      <h2 className="text-xl font-bold mb-4 text-blue-600">Login / Register</h2>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Login" key="1">
          <Form layout="vertical" onFinish={handleLogin}>
            <Form.Item label="Username" name="username" rules={[{ required: true, message: "Please input your username!" }]}>              
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>              
              <Input.Password placeholder="Password" />
            </Form.Item>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full bg-blue-600 hover:bg-blue-700">                
                Login
              </Button>
            </Form.Item>
          </Form>
        </TabPane>

        <TabPane tab="Register" key="2">
          <Form layout="vertical" onFinish={handleRegister}>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please input your Name!" }]}>              
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item label="Username" name="username" rules={[{ required: true, message: "Please input your username!" }]}>              
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>              
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item label="Confirm Password" name="confirmPassword" rules={[{ required: true, message: "Please confirm your password!" }]}>              
              <Input.Password placeholder="Confirm Password" />
            </Form.Item>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full bg-blue-600 hover:bg-blue-700" >                
                Register
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    </Modal>
    <Modal open = {isConfirming}
              onOk = {()=>{
                setIsConfirming(false)
                setShowLoginModal(false);
              }}
              onCancel = {()=>{
                setIsConfirming(false)
                setShowLoginModal(false);
              }}
              centered
              >
          <h1 className="text-center text-xl font-semibold text-green-600">{confirmAction} successfully.</h1>
        </Modal>
    </>
  );
}



