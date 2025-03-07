"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaInfoCircle, FaMapMarkerAlt } from "react-icons/fa"; 
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const iconVariant = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
};

const footerVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const ContactUs = () => {
  return (
    <div className="bg-blue-50 text-center py-12 px-6 mt-20">
      <div className="flex flex-col items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Image
            src="/mimii.png"
            alt="Profile Picture"
            width={80}
            height={80}
            className="rounded-full border-4 border-blue-500 shadow-lg"
          />
        </motion.div>

        <motion.h2
          className="text-3xl font-bold mt-4 text-blue-700"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="text-gray-600 mt-2 max-w-md mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Use our contact form for all information requests or contact us
          directly using the contact information below.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.div
            className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center"
            variants={iconVariant}
            whileHover={{ scale: 1.2 }}
          >
            <FaInfoCircle size={24} />
          </motion.div>
          <h3 className="font-semibold text-xl mt-3 text-blue-700">Tentang Kami</h3>
          <p className="text-gray-500">Apotek Rahmi Farma</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.div
            className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center"
            variants={iconVariant}
            whileHover={{ scale: 1.2 }}
          >
            <FaPhoneAlt size={24} />
          </motion.div>
          <h3 className="font-semibold text-xl mt-3 text-blue-700">PHONE</h3>
          <p className="text-gray-500">+62 8521 3357 491</p>
          <p className="text-gray-500">+62 8324 4523 258</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.div
            className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center"
            variants={iconVariant}
            whileHover={{ scale: 1.2 }}
          >
            <FaMapMarkerAlt size={24} />
          </motion.div>
          <h3 className="font-semibold text-xl mt-3 text-blue-700">Location</h3>
          <p className="text-gray-500">Apotek Rahmi Farma</p>
          <p className="text-gray-500">Jl. Kopra No.Blok F, Sarimulya, Kec. Rimbo Ilir, Kabupaten Tebo, Jambi 37553</p>
        </motion.div>
      </div>

      <motion.footer
        className="bg-blue-700 text-white py-4 w-full mt-16"
        initial="hidden"
        animate="visible"
        variants={footerVariant}
      >
        <div className="max-w-4xl mx-auto flex justify-center items-center space-x-6 text-center">
          <Link href="/" className="hover:text-blue-300 transition duration-300">Home</Link>
          <Link href="/about" className="hover:text-blue-300 transition duration-300">About</Link>
          <Link href="/contact" className="hover:text-blue-300 transition duration-300">Contact</Link>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">© 2025 Apotek Rahmi Farma. All Rights Reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
};

export default ContactUs;
