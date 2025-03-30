import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Drawer, Modal } from "antd";
import { FaBookOpenReader } from "react-icons/fa6";
import { motion } from "framer-motion";
import { MenuOutlined } from "@ant-design/icons";
import Login from "./Login";  // Đảm bảo đường dẫn đến file Login.js chính xác

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);  // Trạng thái hiển thị modal login
    const location = useLocation();
    const currentPath = location.pathname;

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Courses", path: "/courses" },
        { name: "Teachers", path: "/teachers" },
        { name: "Profile", path: "/profile" },
    ];

    return (
        <>
            <motion.div
                className="flex justify-between items-center p-4 w-[calc(100%-200px)] mx-auto bg-orange-300 shadow-md rounded-lg mb-4 mt-4"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center">
                    <div className="text-orange-500 mr-5 text-2xl">
                        <FaBookOpenReader />
                    </div>
                    <h1 className="text-2xl font-extrabold text-black">GreatMission</h1>
                </div>

                {/* Navbar Links (Visible on Desktop) */}
                <div className="hidden md:flex gap-8">
                    {menuItems.map((item, index) => (
                        <motion.div whileHover={{ scale: 1.1 }} key={index}>
                            <Link to={item.path}>
                                <Button
                                    type="link"
                                    className={`!font-bold ${currentPath === item.path ? "!text-blue-500" : "!text-black"}`}
                                >
                                    {item.name}
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                    <Button
                        type="primary"
                        className="!font-bold !bg-orange-500"
                        onClick={() => setShowLoginModal(true)}
                    >
                        Login/Register
                    </Button>
                </div>

                {/* Mobile Menu Button (Visible on Mobile) */}
                <div className="md:hidden">
                    <Button type="text" icon={<MenuOutlined />} onClick={() => setOpen(true)} />
                </div>
            </motion.div>

            {/* Drawer Menu (Visible on Mobile) */}
            <Drawer title="Menu" placement="right" onClose={() => setOpen(false)} open={open}>
                {menuItems.map((item, index) => (
                    <Link to={item.path} key={index} onClick={() => setOpen(false)}>
                        <Button
                            type="link"
                            className={`!font-bold ${currentPath === item.path ? "!text-blue-500" : "!text-black"} w-full`}
                        >
                            {item.name}
                        </Button>
                    </Link>
                ))}
                <Button
                    type="primary"
                    className="!font-bold !bg-orange-500 w-full mt-2"
                    onClick={() => { setOpen(false); setShowLoginModal(true); }}
                >
                    Login/Register
                </Button>
            </Drawer>

            {/* Login Modal */}
            
            {showLoginModal &&
                (<Login showLoginModal = {showLoginModal} setShowLoginModal={setShowLoginModal} /> )}{/* Bạn đã tạo Login, chỉ cần gọi và điều khiển từ Navbar */}
            
        </>
    );
}

export default Navbar;
