import { Button, Card, Image } from "antd";
import { motion } from "framer-motion";
import { teachers,  categories, sliders } from "../data.js";
import {Swiper, SwiperSlide} from "swiper/react"
import { Link } from "react-router-dom";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HomePage() {

  return (
    <div className="bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-300 min-h-screen">
	{/*Chuyển động hình trượt */}
    <motion.div
        className="max-w-[calc(100%)] mx-auto pt-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="w-[calc(100%-200px)] h-[300px] rounded-lg overflow-hidden shadow-lg"
          >
            {sliders.map((image, index) => (
                <SwiperSlide key={index}>
                <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                </SwiperSlide>
            ))}
            </Swiper>
        </motion.div>

      {/* Hiển thị top categories */}
      <motion.div
        className="max-w-[calc(100%-200px)] mx-auto py-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-extrabold text-center mb-8 text-gray-900">Top Courses</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.slice(0, 10).map((category, index) => (
            <motion.div whileHover={{ scale: 1.05 }} key={index}>
              <Link to={`/courses?name=${category.name}`}>                        
              <Card className="flex flex-col items-center text-center shadow-lg hover:shadow-xl cursor-pointer transition-all p-4 rounded-lg overflow-hidden">
                <div className="w-40 h-40 flex items-center justify-center bg-white p-2 rounded-lg overflow-hidden">
                  <Image src={category.picture} className="w-full h-full object-contain" />
                </div>
                <h4 className="font-bold mt-3 text-lg text-gray-900 text-center">{category.name}</h4>
                <p className="text-gray-600 text-sm">{category.level}</p>
              </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        {/* Nút see more */}
        <div className="text-center mt-6">
          <Link to="/courses">
            <Button type="primary" className="!font-bold !bg-blue-500">See More</Button>
          </Link>
        </div>
      </motion.div>

      {/* Hiển thị thông tin giáo viên */}
      <motion.div
        className="max-w-[calc(100%-200px)] mx-auto py-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h3 className="text-3xl font-extrabold text-center mb-8 text-gray-900">Best Teachers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.slice(0, 4).map((teacher, index) => (
            <motion.div whileHover={{ scale: 1.05 }} key={index}>
              <Link to={`/teachers?selected=${teacher.name}`}>
              <Card className="flex flex-col items-center text-center shadow-lg hover:shadow-xl cursor-pointer transition-all p-4 rounded-lg overflow-hidden">                
                <div className="w-48 h-48 bg-white p-2 flex items-center justify-center rounded-full overflow-hidden">
                  <Image src={teacher.picture} className="w-full h-full object-cover rounded-full" />
                </div>                
                <h4 className="font-bold mt-3 text-lg text-gray-900 text-center">{teacher.name}</h4>
                <p className="text-gray-600 text-sm">Experience: {teacher.experience}</p>
                <p className="text-gray-600 text-sm">Course: {teacher.course}</p>
              </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        {/* Nút see more */}
        <div className="text-center mt-6">
          <Link to="/teachers">
            <Button type="primary" className="!font-bold !bg-blue-500">See More</Button>
          </Link>
        </div>
      </motion.div>

      
    </div>
  );
}
