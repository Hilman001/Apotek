"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { TypeAnimation } from "react-type-animation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Portfolio() {
  const images = ["/rahmifarm.jpg", "/aptk.jpg", "/pharmacy.jpg", "/apt5.jpg"];
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
      image: "/cataflam1.png",
      price: "Rp20.000",
      discount: "10%",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-900">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/obat.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 py-8 mt-12">
        <h1 className="text-4xl font-bold text-center mb-3 text-blue-400 animate-pulse drop-shadow-lg">
          Apotek Rahmi Farma
        </h1>
        <p className="text-md text-center font-bold mb-6 text-blue-300 animate-pulse drop-shadow-md">
          Tempat terbaik untuk kebutuhan kesehatan Anda dengan harga bersahabat dan layanan konsultasi apoteker! ✨
        </p>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="text-center md:text-left">
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
                fontSize: "1.5em",
                display: "block",
                color: "white",
                textAlign: "center",
                marginBottom: "16px",
                textShadow: "2px 2px 5px rgba(0,0,0,0.5)",
              }}
              repeat={Infinity}
            />
            <h2 className="text-3xl font-bold mb-4 text-blue-300 drop-shadow-lg">
              Kesehatan Anda Prioritas Kami!
            </h2>
            <p className="mb-4 text-md text-white">
              Kami menyediakan produk kesehatan terbaik dengan harga terjangkau. Dapatkan promo menarik setiap bulan dan manfaatkan layanan konsultasi dengan apoteker profesional.
            </p>
            <a
              href="product"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-lg font-bold uppercase tracking-wide"
            >
              Lihat Produk
            </a>
          </div>

          <div className="relative">
            <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000} className="w-3/4 mx-auto">
              {images.map((image, index) => (
                <div key={index} className="flex justify-center">
                  <Image
                    src={image}
                    alt={`Apotek ${index + 1}`}
                    width={300}
                    height={400}
                    className="rounded-lg shadow-xl mx-auto border-4 border-blue-400 hover:border-blue-600 transition duration-300 transform hover:scale-105"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </main>

        <div className="w-full mt-5 flex gap-7">
              <a
                href="https://www.instagram.com/apotekrahmifarma/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="ml-7 py-2 px-4 rounded-2xl shadow-md bg-pink-500 text-white flex items-center mb-5 hover:scale-110">
                  <img src="/ig.png" alt="instagram" width={20} height={20} />
                  <p className="ml-2 hidden ig-block">Instagram</p>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/place/Apotek+RAHMI+FARMA/@-1.4270028,102.3353129,17z/data=!3m1!4b1!4m6!3m5!1s0x2e2ebd007de5f7ef:0xc404921bfe76d276!8m2!3d-1.4270082!4d102.3378878!16s%2Fg%2F11w1kjq_gx?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                <div className="py-2 px-4 rounded-2xl shadow-md bg-white text-white flex items-center mb-5 hover:scale-110">
                  <img src="/gmap.png" alt="discord" width={20} height={20} />
                  <p className="ml-2 hidden ig-block">Google Map</p>
                </div>
              </a>
              <a
                href="https://wa.me/+6282279308219"
                target="_blank"
                rel="noreferrer"
              >
                <div className="py-2 px-4 rounded-2xl shadow-md bg-white text-white flex items-center mb-5 hover:scale-110">
                  <img src="/wa.png" alt="github" width={20} height={20} />
                  <p className="ml-2 hidden ig-block">Discord</p>
                </div>
              </a>
          
             
             
            </div>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-center text-blue-400 mb-4 drop-shadow-md">
            Produk Terlaris
          </h2>
          <Marquee gradient={false} speed={50} className="flex space-x-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md max-w-xs mx-2 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition duration-300 transform hover:scale-105"
              >
                <div className="flex justify-center mb-3">
                  <Image
                    src={product.image}
                    alt={`Produk ${index + 1}`}
                    width={80}
                    height={80}
                    className="rounded-md hover:shadow-md hover:scale-110 transition duration-300"
                  />
                </div>
                <h3 className="font-semibold text-center text-blue-600 mb-1 text-sm">
                  {product.name}
                </h3>
                <p className="text-gray-700 text-xs">Diskon: {product.discount || "-"}</p>
                <p className="mt-1 font-bold text-blue-600 text-sm">
                  Harga: {product.price}
                </p>
              </div>
            ))}
          </Marquee>
        </section>

        <footer className="mt-8 text-center text-gray-300 py-3 rounded-lg bg-blue-900 shadow-inner">
          <div className="container mx-auto">
            <p>© {new Date().getFullYear()} Apotek Rahmi Farma. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
