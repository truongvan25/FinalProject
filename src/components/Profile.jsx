import React, { useEffect, useState } from "react";
import { Card, Avatar, Typography, List, Divider, Input, Button, Modal } from "antd";
import { 
  UserOutlined, MailOutlined, PhoneOutlined, HomeOutlined, EditOutlined,
  BookOutlined, HeartOutlined, MessageOutlined, CheckCircleOutlined 
} from "@ant-design/icons";
import { message } from "antd";
import { categories, api, apiKey } from "../data.js";

const { Title, Text } = Typography;

 const Profile = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingField, setEditingField] = useState("");
  const [editingValue, setEditingValue] = useState("");
  const [isConfirming, setIsConfirming] = useState(false);
  const [confirmAction, setConfirmAction] = useState(""); 

  useEffect(() => {
    const fetchUserData = () => {
      try {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) return setUser(null);
        
        const storedUser = localStorage.getItem("loggedInUser");
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          if (parsedUser && typeof parsedUser === "object") {
            setUser(parsedUser);
          } else {
            message.error("Invalid user data.");
          }
        }
      } catch (error) {
        message.error("Error reading user data.");
      }
    };

    fetchUserData();
    window.addEventListener("user-login", fetchUserData);
    window.addEventListener("user-register", fetchUserData);
    return () => {
      window.removeEventListener("user-login", fetchUserData);
      window.removeEventListener("user-register", fetchUserData);
    };
  }, []);

  const handleEditClick = (field, value) => {
    setEditingField(field);
    setEditingValue(value);
    setIsEditing(true);
  };
  const handleSaveEdit = async() => {
    const updatedField = {   [editingField]: editingValue     }; 
    console.log("updatedUser: ", updatedField);
    try {
      console.log(user?._id);
      const API = `${api}/${user._id}${apiKey}`;
      const response = await fetch(API, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedField),
      });
      console.log("resonse: ", response);
      if (!response.ok) {
        // Đọc lỗi từ server (nếu có)
        const errorData = await response.json().catch(() => null); 
        console.error("Lỗi từ server:", errorData || "Không có phản hồi lỗi từ server");
        throw new Error(`Cập nhật thất bại! Mã lỗi: ${response.status}`);
      }
      const newUser = {...user, ...updatedField};
      setUser(newUser); 
      localStorage.setItem("loggedInUser", JSON.stringify(newUser));
      setIsEditing(false);
    } catch (error) {
      console.error("Lỗi cập nhật:", error);
    }      
};
	const handleLogout = () => {
		setConfirmAction("logout");
		setIsConfirming(true);
	};

	const handleDelete = async() =>{
		setConfirmAction("delete");
		setIsConfirming(true);
	}
	const handleConfirm = async () => {
		if (confirmAction === "logout"){
			localStorage.removeItem("loggedInUser");
			localStorage.removeItem("isLoggedIn");
			window.dispatchEvent(new Event("user-logout")); 
			window.location.reload();
		}
		else if (confirmAction === "delete"){
			try {
				if (!user?._id) {
				  message.error("Không tìm thấy ID người dùng!");
				  return;
				}
			
				const API = `${api}/${user._id}${apiKey}`;
			
				const response = await fetch(API, {
				  method: "DELETE",
				  headers: {
					"Content-Type": "application/json",
				  },
				});
			
				if (!response.ok) {
				  const errorData = await response.json().catch(() => null);
				  console.error("Lỗi từ server:", errorData || "Không có phản hồi lỗi từ server");
				  throw new Error(`Xóa thất bại! Mã lỗi: ${response.status}`);
				}
				else {
					console.log("Xoá thành công");
				}
			
				// Xóa dữ liệu người dùng khỏi localStorage
				localStorage.removeItem("loggedInUser");
				localStorage.removeItem("isLoggedIn");
			
				// Cập nhật UI
				setUser(null);
				window.dispatchEvent(new Event("user-logout")); 
				window.location.reload(); // Reload lại trang để cập nhật trạng thái đăng nhập
			  } catch (error) {
				console.error("Lỗi xóa tài khoản:", error);
			  }
		}
	}
    // Lấy các khóa học mà người dùng đã đăng ký, đã lưu và đã hoàn thành
  const enrolledCourses = categories.filter(course => user?.incourse?.includes(course.name));
  const savedCourses = categories.filter(course => user?.savecourse?.includes(course.name));
  const completedCourses = categories.filter(course => user?.finishcourse?.includes(course.name));

  if (user === null) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-300 p-10 flex justify-center items-center">
        <div className="text-black text-2xl font-bold">MỜI BẠN ĐĂNG NHẬP</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-300 p-10 flex justify-center items-center">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-xl overflow-hidden p-6">
        {/* Header */}
        <div className="flex flex-col items-center">
          <Avatar size={120} icon={<UserOutlined />} className="bg-blue-500 text-white shadow-md" />
          <Title level={2} className="mt-4 text-gray-900">{user?.name}</Title>
        </div>

        {/* User Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className="shadow-md">
            <Title level={4} className="text-gray-700">Thông tin cá nhân</Title>
            <List
              itemLayout="horizontal"
              dataSource={[
                { icon: <MailOutlined />, label: "Email", field : "email", value: user?.email },
                { icon: <PhoneOutlined />, label: "Số điện thoại", field: "phone", value: user?.phone },
                { icon: <HomeOutlined />, label: "Địa chỉ", field: "address", value: user?.address },
              ]}
              renderItem={(item) => (
                <List.Item
                  actions={ [<EditOutlined key = "edit" className="cursor-pointer text-blue-500 hover:text-blue-700"
                  onClick={()=> handleEditClick(item.field, item.value)}/>]}
                >
                  <List.Item.Meta avatar={item.icon} title={<Text strong>{item.label}</Text>} description={item.value} />
                </List.Item>
              )}
            />
          </Card>

          <Card className="shadow-md">
            <Title level={4} className="text-gray-700"><BookOutlined /> Khóa học đang tham gia</Title>
            <List
              dataSource={enrolledCourses}
              renderItem={(course) => (
                <List.Item
                  actions={[
                    <Button type="link" onClick={() => setSelectedCourse(course)}>Xem chi tiết</Button>
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={course.picture} />}
                    title={<Text strong>{course.name}</Text>}
                  />
                </List.Item>
              )}
            />
          </Card>
        </div>

        {/* Saved Courses */}
        <Card className="shadow-md mt-6">
          <Title level={4} className="text-gray-700"><HeartOutlined /> Khóa học đã lưu</Title>
          <List
            dataSource={savedCourses}
            renderItem={(course) => (
              <List.Item
                actions={[
                  <Button type="link" onClick={() => setSelectedCourse(course)}>Xem chi tiết</Button>
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={course.picture} />}
                  title={<Text strong>{course.name}</Text>}
                />
              </List.Item>
            )}
          />
        </Card>

        {/* Completed Courses */}
        <Card className="shadow-md mt-6">
          <Title level={4} className="text-gray-700"><CheckCircleOutlined className="text-green-500" /> Khóa học đã hoàn thành</Title>
          <List
            dataSource={completedCourses}
            renderItem={(course) => (
              <List.Item
                actions={[
                  <Button type="link" onClick={() => setSelectedCourse(course)}>Xem chi tiết</Button>
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={course.picture} />}
                  title={<Text strong>{course.name}</Text>}
                />
              </List.Item>
            )}
          />
        </Card>

        {/*Modal to edit personal information*/}
        <Modal
          title={`Chỉnh sửa ${editingField}`}
          open={isEditing}
          onCancel={() => setIsEditing(false)}
          onOk={handleSaveEdit}
        >
          <Input value={editingValue} onChange={(e) => setEditingValue(e.target.value)} />
        </Modal>
        
        {/*Button to log out */}
        <div className="flex justify-center mt-4">
          <Button type="danger" onClick={handleLogout} className="!bg-green-500 hover:!bg-green-700 !text-white">
            Đăng xuất
          </Button>  
        </div>
		<div className="flex justify-center mt-4">
          <Button type="danger" onClick={handleDelete} className="!bg-red-500 hover:!bg-red-700 !text-white">
            Xóa tài khoản
          </Button>  
        </div>
      </div>

	  <Modal
          title="Xác nhận hành động"
          open={isConfirming}
          onOk={handleConfirm}
          onCancel={() => setIsConfirming(false)}
          okText="Yes"
          cancelText="No"
        >
          <p>{confirmAction === "logout" ? "Bạn có chắc chắn muốn đăng xuất?" : "Bạn có chắc chắn muốn xóa tài khoản?"}</p>
        </Modal>

      {/* Course Details Modal */}
      <Modal open={!!selectedCourse} onCancel={() => setSelectedCourse(null)} footer={null} centered>
        {selectedCourse && (
        <div className="text-center">
        <Avatar size={80} src={selectedCourse.picture} className="mb-3" />
        <Title level={3}>{selectedCourse.name}</Title>
        
        
        <Divider />

        {/* Mô tả khóa học */}
        <Title level={5}>Mô tả khóa học:</Title>
        <ul className="text-left">
            {selectedCourse.description.map((item, index) => (
            <li key={index} className="text-gray-600">✅ {item}</li>
            ))}
        </ul>
            {/* Hiển thị tên giảng viên */}
        <Title className="mt-[20px]" level={5}> </Title>
        <Title level={5}>Giảng viên:</Title>
            <div className="flex justify-center items-center gap-4 mt-2">
                <Avatar 
                size={80} 
                src={selectedCourse.instructor.picture}
                className="mb-3" 
                />
            </div>
        <Text strong className="text-gray-700">{selectedCourse.instructor.name}</Text>
        </div>
        )}
        </Modal>
    </div>
  );
};
export default Profile;