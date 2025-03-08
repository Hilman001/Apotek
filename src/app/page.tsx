"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { TypeAnimation } from "react-type-animation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaInstagram, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export default function Portfolio() {
  const products = [
    {
      name: "Imboost Syrup",
      image: "/imboost.jpg",
      price: "Rp76.000",
      discount: "20%",
    },
    {
      name: "Pimtracol Kids",
      image: "/pim.png",
      price: "Rp80.000",
      discount: "15%",
    },
    {
      name: "Fasidol",
      image: "/fasidol.jpg",
      price: "Rp55.000",
      discount: "25%",
    },
    {
      name: "Lerzin Syrup",
      image: "/lerzin.png",
      price: "Rp78.000",
      discount: "10%",
    },
    {
      name: "Neurobion",
      image: "/neurobion.jpeg",
      price: "Rp50.000",
    },
    {
      name: "Sanmol Tablet",
      image: "/sanmol.jpeg",
      price: "Rp6.000",
    },
    {
      name: "EntroStop",
      image: "/entro.jpg",
      price: "Rp20.000",
      discount: "10%",
    },
    {
      name: "Siladex",
      image: "/siladex.jpg",
      price: "Rp20.000",
      discount: "10%",
    },
    {
      name: "Telfast",
      image: "/telfast.png",
      price: "Rp20.000",
      discount: "10%",
    },
    {
      name: "Cataflam",
      image: "/Cataflam1.png",
      price: "Rp20.000",
      discount: "10%",
    },
    {
      name: "Itrabat",
      image: "/itrabat.png",
      price: "Rp20.000",
      discount: "10%",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-900 bg-gradient-to-b from-blue-600 to-white">
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/banner1.webp")' }}
        role="banner"
        aria-label="Apotek Rahmi Farma Banner"
      >
        <div className="absolute inset-0 bg-black opacity-50" aria-hidden="true"></div>
        <div className="relative container mx-auto px-6 py-12 top-8 text-center text-blue-500">
          <h1 className="text-5xl font-extrabold mb-4 animate-pulse drop-shadow-lg ">
            Apotek Rahmi Farma
          </h1>
          <p className="text-lg font-semibold mb-6 animate-pulse drop-shadow-md">
            Tempat terbaik untuk kebutuhan kesehatan Anda dengan harga
            bersahabat dan layanan konsultasi apoteker!
          </p>

          <div className="mt-10 max-w-[500px] mx-auto">
            <Carousel
              infiniteLoop
              autoPlay
              showThumbs={false}
              showStatus={false}
              interval={2000}
              className="rounded-lg"
              aria-label="Carousel of Apotek Rahmi Farma"
            >
              <div>
                <Image
                  src="/rahmifarm.jpg" 
                  alt="Apotek Rahmi Farma"
                  width={300}
                  height={200}
                  className="w-full object-cover rounded-md"
                />
              </div>
              <div>
                <Image
                  src="/aptk.jpg" 
                  alt="Apotek Rahmi Farma Interior"
                  width={300}
                  height={200}
                  className="w-full object-cover rounded-md"
                />
              </div>
              <div>
                <Image
                  src="/pharmacy.jpg" 
                  alt="Pharmacy Products"
                  width={300}
                  height={200}
                  className="w-full object-cover rounded-md"
                />
              </div>
            </Carousel>

            <a
              href="product"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-400 transition transform hover:scale-105 shadow-lg font-semibold uppercase tracking-wider mt-6 block"
              role="button"
              aria-label="See our Products"
            >
              Lihat Produk
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <TypeAnimation
          sequence={[
            "Selamat Datang Di Apotek kami",
            1000,
            "✨ Promo Spesial! ✨ ",
            1000,
            "Diskon hingga 50% untuk produk kesehatan pilihan!",
            1000,
            "Beli obat & vitamin, GRATIS konsultasi apoteker!",
            1000,
            "Pelayanan 24 Jam! Siap membantu kapan saja!",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "1.6em",
            display: "block",
            color: "white",
            textAlign: "center",
            marginBottom: "16px",
            textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
          }}
          repeat={Infinity}
        />
      </div>

      <section className="mt-12 container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Tentang Kami</h2>
        <p className="text-lg text-gray-700 mb-4">
          Apotek Rahmi Farma telah beroperasi sejak 2000, melayani kebutuhan
          kesehatan masyarakat dengan komitmen memberikan produk berkualitas
          tinggi dan layanan konsultasi apoteker profesional. Kami berfokus pada
          kenyamanan pelanggan, harga yang terjangkau, dan kualitas layanan
          terbaik.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4 drop-shadow-md">
          Produk Terlaris
        </h2>
        <Marquee gradient={false} speed={60} className="flex space-x-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-lg max-w-xs mx-3 border border-gray-200 hover:border-teal-400 hover:shadow-xl transition duration-300 transform hover:scale-105"
              role="listitem"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={product.image}
                  alt={`Produk ${product.name}`}
                  width={80}
                  height={80}
                  className="rounded-md hover:shadow-md hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="font-semibold text-center text-blue-600 mb-2 text-sm">
                {product.name}
              </h3>
              <p className="text-gray-700 text-xs">
                Diskon: {product.discount || "-"}
              </p>
              <p className="mt-1 font-bold text-blue-600 text-sm">
                Harga: {product.price}
              </p>
            </div>
          ))}
        </Marquee>
      </section>

      <section className="mt-10 container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-4 drop-shadow-md">
          Testimoni Pelanggan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[ 
            {
              name: "Maria, Pelanggan Setia",
              text: "Apotek Rahmi Farma selalu memberikan pelayanan yang ramah dan obat yang berkualitas. Saya merasa puas dengan produk yang saya beli dan konsultasi yang diberikan.",
              image: "/profil2.jpg",
            },
            {
              name: "Joko, Pelanggan Loyal",
              text: "Layanan yang cepat dan efektif, semua produk selalu tersedia dan harga yang sangat terjangkau!",
              image: "/profil1.jpg",
            },
            {
              name: "Lina, Pelanggan Setia",
              text: "Apotek Rahmi Farma selalu memberikan pelayanan yang cepat dan obat yang berkualitas. Terima kasih atas bantuan konsultasinya.",
              image: "/profil2.jpg",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-teal-400 transition duration-300 transform hover:scale-105"
              role="region"
              aria-labelledby={`testimonial-${index}`}
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={`Testimonial ${testimonial.name}`}
                  width={80}
                  height={80}
                  className="rounded-full object-cover shadow-lg"
                />
              </div>
              <p className="text-gray-700 text-sm mb-4">{testimonial.text}</p>
              <p className="font-semibold text-blue-600">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full mt-10 flex gap-8 justify-center">
        <a
          href="https://www.instagram.com/apotekrahmifarma/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <div className="py-3 px-6 rounded-2xl shadow-lg bg-pink-500 text-white flex items-center mb-5 hover:scale-110 transform transition-all duration-300">
            <FaInstagram size={24} />
            <p className="ml-3">Instagram</p>
          </div>
        </a>

        <a
          href="https://www.google.com/maps/place/Apotek+RAHMI+FARMA"
          target="_blank"
          rel="noreferrer"
          aria-label="Google Map"
        >
          <div className="py-3 px-6 rounded-2xl shadow-lg bg-white text-black flex items-center mb-5 hover:scale-110 transform transition-all duration-300">
            <FaMapMarkerAlt size={24} />
            <p className="ml-3">Google Map</p>
          </div>
        </a>

        <a href="https://wa.me/081234567890" target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <div className="py-3 px-6 rounded-2xl shadow-lg bg-green-600 text-white flex items-center mb-5 hover:scale-110 transform transition-all duration-300">
            <FaWhatsapp size={24} />
            <p className="ml-3">WhatsApp</p>
          </div>
        </a>
      </div>
    </div>
  );
}
