"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Produk Berkualitas",
      description:
        "Kami menyediakan berbagai produk kesehatan berkualitas, mulai dari obat-obatan, vitamin, hingga alat kesehatan.",
      image: "/logo2.png",
    },
    {
      title: "Konsultasi Apoteker",
      description:
        "Dapatkan layanan konsultasi langsung dengan apoteker profesional kami untuk memastikan penggunaan obat yang aman.",
      image: "/logo1.png",
    },
    {
      title: "Layanan Antar Obat",
      description:
        "Tidak sempat ke apotek? Gunakan layanan antar obat kami dan dapatkan pesanan Anda dengan mudah dan cepat.",
      image: "/antar.png",
    },
    {
      title: "Layanan Cepat & Responsif",
      description:
        "Kami siap melayani Anda dengan cepat dan responsif untuk memastikan kebutuhan kesehatan Anda terpenuhi tanpa penundaan.",
      image: "/pelayanan1.png",
    },
    {
      title: "Diskon & Promo",
      description:
        "Nikmati berbagai diskon dan promo menarik untuk produk kesehatan pilihan setiap bulannya!",
      image: "/promo1.png",
    },
    {
      title: "Pemesanan Online",
      description:
        "Pesan produk kesehatan dengan mudah melalui platform online kami, cepat dan aman!",
      image: "/order.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-8">
      <motion.h1
        className="text-4xl font-extrabold text-center text-blue-600 mb-6 mt-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Layanan Kami
      </motion.h1>
      <motion.p
        className="text-xl text-center text-gray-700 mb-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Berbagai layanan terbaik yang kami sediakan untuk memenuhi kebutuhan kesehatan Anda.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Image
              src={service.image}
              alt={service.title}
              width={320}
              height={210}
              className="rounded-md mx-auto mb-6"
            />
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              {service.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
