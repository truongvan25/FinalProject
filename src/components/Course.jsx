import React, { useState, useEffect, useMemo } from "react";
import { Card, Typography, Button, Input, Checkbox, Pagination, Rate } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useLocation, Link } from "react-router-dom";
import {api, apiKey,  categories } from "../data.js"

const { Title, Text } = Typography;

const CourseList = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedRating, setSelectedRating] = useState(0);
  const [user, setUser] = useState(null);
  const [errorrMessage, setErrorrMessage] = useState("");
  const pageSize = 8;
  
  // phần search
  const filteredCourses = useMemo(() => {
    return categories.filter((course) => {
      if (searchText && !course.name.toLowerCase().includes(searchText.toLowerCase()) &&
          !course.instructor.name.toLowerCase().includes(searchText.toLowerCase())) {
        return false;
      }
      if (selectedPrice !== null) {
        if (selectedPrice === "Free" && course.price.discount !== "Free") return false;
        if (selectedPrice === "Paid" && course.price.discount === "Free") return false;
      }
      if (selectedLevels.length > 0 && !selectedLevels.includes(course.level)) {
        return false;
      }
      if (selectedRating > 0 && course.rating !== selectedRating) {
        return false;
      }
      return true;
    });
  }, [searchText, selectedPrice, selectedLevels, selectedRating]);
  
  const handleLevelChange = (level) => {
    setSelectedLevels(prev => prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]);
  };

  // lấy user hiện tại ra
  useEffect(() => {
    const fetchUserData = () => {
      try {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) {
          setUser(null);
          return;
        }
        const storedUser = localStorage.getItem("loggedInUser");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error(error);
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
  // xử lí khi đăng kí hoặc lưu khóa học
	const handleSaveCourse = async (courseName, type) => {
		if (!user) {
      setErrorrMessage("Bạn cần đăng nhập để thực hiện thao tác này");
      setTimeout(()=>{
        setErrorrMessage("");
      }, 2000);
			
			return;
		}
		const fieldToUpdate = type === "register" ? "incourse" : "savecourse";
		if (user[fieldToUpdate]?.includes(courseName)) {
      setErrorrMessage(`Khóa học này đã có trong ${fieldToUpdate}`);
      setTimeout(()=>{
        setErrorrMessage("");
      }, 2000)	;
			return;
		}
		const updatedField = {
			[fieldToUpdate]: [...(user[fieldToUpdate] || []), courseName], 
		};
		try {			
			const API = `${api}/${user._id}${apiKey}`;
			const response = await fetch(API, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedField),
			});
	
			if (!response.ok) {
				const errorData = await response.json().catch(() => null);
				console.error("Lỗi từ server:", errorData || "Không có phản hồi lỗi từ server");
				throw new Error(`Cập nhật thất bại! Mã lỗi: ${response.status}`);
			}
			const newUser = { ...user, ...updatedField };
			setUser(newUser);
			localStorage.setItem("loggedInUser", JSON.stringify(newUser));
      setErrorrMessage(`${type === "register" ? "Đăng ký" : "Lưu"} khóa học thành công!`);
      setTimeout(()=>{
        setErrorrMessage("");
      }, 2000);

		} catch (error) {
			openModal("Có lỗi xảy ra");
			console.error("Lỗi cập nhật:", error);
		}
	};

  // nếu người dùng nhấn view more thì hiển thị thông tin chi tiết của khóa học
  if (selectedCourse) {
    return (
      <div className="p-6 flex justify-center">
        <div className="w-[600px] max-w-xl p-4 shadow-lg rounded-lg bg-pink-50">
          <div className="flex justify-between mb-4">
            <Button onClick={() => setSelectedCourse(null)}>Back</Button>
          </div>
          <div className="text-center">
            <img src={selectedCourse.picture} alt={selectedCourse.name} className="w-auto h-1/2 object-cover rounded-md mb-4 mx-auto" />
            <Title level={3}>{selectedCourse.name}</Title>
            <div>
              <Title level={4} className="mt-4">Description:</Title>
              {selectedCourse.description && selectedCourse.description.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <Rate disabled defaultValue={selectedCourse.rating} /> ({selectedCourse.rating} stars)
            <div className="text-gray-600 mb-2">Instructor: {selectedCourse.instructor.name}</div>
            <p>Duration: {selectedCourse.duration}</p>
            <p>Students Enrolled: {selectedCourse.students}</p>
            <p>Level: {selectedCourse.level}</p>
            <p>Price: {selectedCourse.price.discount ? (
                <span> <span className="line-through">{selectedCourse.price.original}</span> {selectedCourse.price.discount}</span>
                  ) : (
                    selectedCourse.price.original
                  )}</p>
                <Button   type="link" 
                className="mt-3 !w-[150px] !py-5 !text-white !font-semibold 
                          !bg-gradient-to-r !from-green-400 !to-green-600 
                          !rounded-lg !shadow-md hover:!shadow-lg 
                          hover:!scale-105 !transition-transform duration-300"
                onClick={()=>{handleSaveCourse(selectedCourse.name, "register")}}> Đăng ký </Button>
              <Button    type="link" 
                className="ml-[10px] !w-[150px] !py-5 !text-white !font-semibold 
                          !bg-gradient-to-r !from-blue-400 !to-blue-600 
                          !rounded-lg !shadow-md hover:!shadow-lg 
                          hover:!scale-105 !transition-transform duration-300"
                onClick = {()=> {handleSaveCourse(selectedCourse.name, "save")}}>  Lưu   </Button>
			          {errorrMessage && <p className="text-red-500">{errorrMessage}</p>}
          </div>
        </div>
      </div>
    );
  }

  else return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-12 gap-6">
      <div className="col-span-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6">
        {filteredCourses.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((course, index) => (
          <Card key={index} className=" flex flex-col items-center text-center shadow-lg hover:shadow-xl cursor-pointer transition-all p-4 rounded-lg overflow-hidden w-[250px] h-[350px]">
          <div className="w-40 h-40 !flex !items-center !justify-center bg-white p-2 rounded-lg overflow-hidden">
            <img src={course.picture} alt={course.name} className="w-full h-full object-contain" />
          </div>
          <div className="p-4 text-center">
            <Link to={`/teachers?selected=${course.instructor.name}`}>
              <Text type="secondary">by {course.instructor.name}</Text>
            </Link>
            <Title level={5} className="mt-1">{course.name}</Title>
            <Text type="secondary">{course.level}</Text>
            <br />
            <Rate disabled value={course.rating} className="mb-2" />
            <Button type="link" className="mt-3" onClick={() => setSelectedCourse(course)}>View More</Button>
          </div>
        </Card>
        ))}
      </div>

      <div className="col-span-2   ">
        <div className="p-4 shadow-lg rounded-lg bg-white">
          <Title level={4}>Filters</Title>
          <Input
            placeholder="Search courses..."
            prefix={<SearchOutlined />}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="mb-3"
          />
          <Checkbox 
            checked={selectedPrice === "Free"}
            onChange={() => setSelectedPrice(selectedPrice === "Free" ? null : "Free")}
          > Free Courses</Checkbox><br />

          <Checkbox 
            checked={selectedPrice === "Paid"}
            onChange={() => setSelectedPrice(selectedPrice === "Paid" ? null : "Paid")}
          > Paid Courses</Checkbox><br />

          <Checkbox onChange={() => handleLevelChange("Beginner")}> Beginner</Checkbox><br />
          <Checkbox onChange={() => handleLevelChange("Intermediate")}> Intermediate</Checkbox><br />
          <Checkbox onChange={() => handleLevelChange("Advanced")}> Advanced</Checkbox><br />
          
          <Rate onChange={(value) => {
            setSelectedRating(value);
            
            }} value={selectedRating} className="mt-3" />
            
        </div>
      </div>

      <div className="col-span-12 mt-6 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredCourses.length}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default CourseList;
