"use client";
import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const paragraphVariant = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.8, delay: i * 0.3 },
  }),
};

const OverviewTextWithImage = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-100">
      <div className="flex flex-col md:flex-row items-start max-w-4xl mx-auto p-6 mt-16">
        <div className="flex flex-col items-center">
          <motion.img
            src="mimii.png"
            alt="Deskripsi Gambar"
            className="w-48 md:w-60 rounded-lg border-4 border-blue-500 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.p
            className="mt-2 text-lg font-semibold text-gray-700"
            variants={textVariant}
            initial="hidden"
            animate="visible"
          >
            Apt.IzzaturRahmi, S.Farm
          </motion.p>
        </div>

        <div className="flex-1 md:ml-6 mt-6 md:mt-0">
          <motion.h1
            className="text-3xl font-bold text-blue-700"
            variants={textVariant}
            initial="hidden"
            animate="visible"
          >
            Tentang Kami
          </motion.h1>

          <div className="mt-6">
            <motion.h2
              className="text-2xl font-semibold text-gray-800 mt-6"
              variants={textVariant}
              initial="hidden"
              animate="visible"
            >
              Misi dan Visi Apotek Rahmi Farma
            </motion.h2>
            
            <motion.p
              className="mt-4 text-gray-700 leading-relaxed"
              variants={paragraphVariant}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Apotek Rahmi Farma memiliki misi untuk menyediakan produk kesehatan berkualitas dengan harga yang terjangkau, 
              serta memberikan layanan pelanggan yang ramah dan profesional. Kami berkomitmen untuk mendukung kesehatan masyarakat 
              dengan menyediakan solusi medis yang lengkap dan dapat diandalkan.
            </motion.p>

            <motion.p
              className="mt-4 text-gray-700 leading-relaxed"
              variants={paragraphVariant}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              Visi kami adalah menjadi apotek pilihan utama bagi masyarakat dalam memenuhi kebutuhan kesehatan, 
              dengan memprioritaskan kualitas, kepercayaan, dan kenyamanan pelanggan. Kami percaya bahwa dengan pelayanan yang 
              responsif dan tepat waktu, setiap pelanggan dapat merasakan manfaat optimal dari produk kesehatan yang kami tawarkan.
            </motion.p>

            <motion.h3
              className="text-xl font-semibold text-gray-800 mt-6"
              variants={textVariant}
              initial="hidden"
              animate="visible"
            >
              Layanan Kami
            </motion.h3>

            <motion.p
              className="mt-4 text-gray-700 leading-relaxed"
              variants={paragraphVariant}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              Di Apotek Rahmi Farma, kami tidak hanya menawarkan obat-obatan umum, tetapi juga layanan konsultasi apoteker 
              untuk memberikan solusi yang lebih personal terkait kesehatan Anda. Kami menyediakan vitamin, suplemen, 
              produk perawatan kulit, dan berbagai produk medis lainnya yang aman dan terjamin kualitasnya.
            </motion.p>

            <motion.h3
              className="text-xl font-semibold text-gray-800 mt-6"
              variants={textVariant}
              initial="hidden"
              animate="visible"
            >
              Komitmen Kami pada Kesehatan Masyarakat
            </motion.h3>

            <motion.p
              className="mt-4 text-gray-700 leading-relaxed"
              variants={paragraphVariant}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              Kami juga aktif dalam berbagai kegiatan sosial yang mendukung kesehatan masyarakat, termasuk memberikan 
              edukasi tentang gaya hidup sehat dan memberikan diskon untuk layanan kesehatan di daerah sekitar. 
              Dengan begitu, kami berharap dapat membantu menciptakan lingkungan yang lebih sehat bagi semua orang.
            </motion.p>
          </div>
        </div>
      </div>

      <footer className="bg-blue-700 text-white py-4">
        <div className="container mx-auto flex justify-center space-x-6">
          <Link href="/" className="hover:text-blue-300 transition duration-300">Home</Link>
          <Link href="/contact" className="hover:text-blue-300 transition duration-300">Contact</Link>
        </div>
        <div className="text-center mt-2">
          <p className="text-sm">© 2025 Apotek Rahmi Farma. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
    
  );
};

export default OverviewTextWithImage;
