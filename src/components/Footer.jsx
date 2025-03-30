import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-800 text-white text-center p-6 mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <p className="text-lg font-semibold">Contact Us</p>
      <p>Email: contact@greatmission.com</p>
      <p>Phone: +123 456 789</p>
      <p>Address: 123 Learning St, Education City, World</p>
    </motion.footer>
  );
}