import React, { useState, useEffect } from 'react';
import { Card, Pagination, Button, Input } from 'antd';
import { teachers } from '../data.js';
import { Link, useLocation } from 'react-router-dom';

const Teachers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const pageSize = 8;

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedTeacherName = params.get('selected');

  useEffect(() => {
    if (selectedTeacherName) {
      const foundTeacher = teachers.find(teacher => teacher.name === selectedTeacherName);
      if (foundTeacher) setSelectedTeacher(foundTeacher);
    } else {
      setSelectedTeacher(teachers[0]);
    }
  }, [selectedTeacherName]);

  const filteredTeachers = teachers.filter(teacher => 
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.university.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastTeacher = currentPage * pageSize;
  const indexOfFirstTeacher = indexOfLastTeacher - pageSize;
  const currentTeachers = filteredTeachers.slice(indexOfFirstTeacher, indexOfLastTeacher);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSelectTeacher = (teacher) => {
    setSelectedTeacher(teacher);
  };

  return (
    <div className="flex p-8">
      <div className="w-1/3 pr-8 ">
        <Input 
          placeholder="Tìm kiếm giáo viên theo tên hoặc trường đại học"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-5 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 pl-12"
        />
        {selectedTeacher && (
          <div className="p-4 border rounded-lg shadow-md mt-[20px] bg-blue-50 border-blue-500">
            <img
              src={selectedTeacher.picture}
              alt={selectedTeacher.name}
              className="w-50 h-50 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-center text-orange-600">{selectedTeacher.name}</h2>
            <p className="text-center mb-2">{selectedTeacher.experience} of experience</p>
            <p className="text-center mb-2"><strong>University:</strong> {selectedTeacher.university}</p>
            <p className="text-center mb-2"><strong>Email:</strong> {selectedTeacher.email}</p>
            <p className="text-center mb-4"><strong>Teaches:</strong> {selectedTeacher.course}</p>
            <Link to={`/courses?instructor=${selectedTeacher.name}`}>
              <Button type="primary" block> Xem thông tin khóa học được đảm nhận</Button>
            </Link>
          </div>
        )}
      </div>

      <div className="w-2/3">
        <div className="grid grid-cols-4 gap-6 mb-6">
          {currentTeachers.map((teacher, index) => (
            <Card
            key={index}
            hoverable
            onClick={() => handleSelectTeacher(teacher)}
            className={`text-center cursor-pointer transition-all 
              ${selectedTeacher === teacher ? "!border-blue-500 !border-4 !bg-blue-50 shadow-lg" : "!border-gray-200 shadow-md"}`}
            cover={
              <div className="!flex !justify-center items-center p-4">
                <img 
                  alt={teacher.name} 
                  src={teacher.picture} 
                  className="w-30 h-30 rounded-full object-cover border-2 border-gray-300" 
                />
              </div>
            }
          >
            <Card.Meta title={<span className="font-semibold text-lg">{teacher.name}</span>} description={teacher.course} />
            <p className="mt-2 text-gray-500 text-sm">{teacher.experience}</p>
          </Card>
          ))}
        </div>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredTeachers.length}
          onChange={handlePageChange}
          className="mt-4 text-center"
        />
      </div>
    </div>
  );
};

export default Teachers;
