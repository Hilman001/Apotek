"use client";

import Image from "next/image";

const products = [
  {
    name: "Imboost Syrup",
    image: "/imboost.jpg",
    price: "Rp76.000",
    category: "Pain Relief",
  },
  {
    name: "Pimtracol Kids",
    image: "/pim.png",
    price: "Rp80.000",
    category: "Children's Medication",
  },
  {
    name: "Hufagrip Syrup",
    image: "/hufagrip1.jpg",
    price: "Rp80.000",
    category: "Children's Medication",
  },
  {
    name: "Fasidol",
    image: "/fasidol.jpg",
    price: "Rp55.000",
    category: "Pain Relief",
  },
  {
    name: "Lerzin Syrup",
    image: "/lerzin.png",
    price: "Rp78.000",
    category: "Antihistamines & Allergies",
  },
  {
    name: "Neurobion",
    image: "/neurobion.jpeg",
    price: "Rp50.000",
    category: "Stomach & Digestion",
  },
  {
    name: "Sanmol Tablet",
    image: "/sanmol.jpeg",
    price: "Rp6.000",
    category: "Pain Relief",
  },
  {
    name: "EntroStop",
    image: "/entro.jpg",
    price: "Rp20.000",
    category: "Stomach & Digestion",
  },
  {
    name: "Siladex",
    image: "/siladex.jpg",
    price: "Rp33.000",
    category: "Antihistamines & Allergies",
  },
  {
    name: "Telfast",
    image: "/telfast.png",
    price: "Rp18.000",
    category: "Antihistamines & Allergies",
  },
  {
    name: "Cataflam",
    image: "/cataflam1.png",
    price: "Rp6.000/1 pcs",
    category: "Pain Relief",
  },
  {
    name: "Cooling Plus",
    image: "/cooling.png",
    price: "Rp38.000",
    category: "Cough & Cold",
  },
  {
    name: "Comtusi Syrup",
    image: "/comtusi2.jpg",
    price: "Rp60.000",
    category: "Cough & Cold",
  },
  {
    name: "Sanadryl Syrup",
    image: "/sanadryl.png",
    price: "Rp35.000",
    category: "Cough & Cold",
  },
  {
    name: "Procold",
    image: "/procold.jpg",
    price: "Rp6.000",
    category: "Cough & Cold",
  },
  {
    name: "Lacoldin",
    image: "/lacoldin.png",
    price: "Rp22.000",
    category: "Stomach & Digestion",
  },
  {
    name: "Decolgen",
    image: "/decolgen.png",
    price: "Rp21.000",
    category: "Cough & Cold",
  },
  {
    name: "Farsifen Plus",
    image: "/farsifen.png",
    price: "Rp20.000",
    category: "Cough & Cold",
  },
  {
    name: "Mylanta",
    image: "/mylanta.png",
    price: "Rp27.000",
    category: "Stomach & Digestion",
  },
  {
    name: "Polycrol Forte",
    image: "/polycrol.jpeg",
    price: "Rp35.000",
    category: "Stomach & Digestion",
  },
  {
    name: "Itrabat",
    image: "/itrabat.png",
    price: "Rp44.000",
    category: "Antihistamines & Allergies",
  },
];

const categories = [
  "Cough & Cold",
  "Pain Relief",
  "Stomach & Digestion",
  "Antihistamines & Allergies",
  "Children's Medication",
];

export default function ProductList() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-white py-10 px-6">
      <h1 className="text-4xl font-bold text-center mt-5 text-blue-800 mb-6 mt-8">
        Daftar Produk Obat
      </h1>
      <div className="max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products
                .filter((product) => product.category === category)
                .map((product, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={150}
                      height={150}
                      className="mx-auto rounded-md"
                    />
                    <h3 className="text-lg font-semibold text-center text-blue-600 mt-4">
                      {product.name}
                    </h3>
                    <p className="text-blue-800 text-center font-bold mt-2">
                      {product.price}
                    </p>
                    <button className="block w-full bg-blue-500 text-white py-2 mt-4 rounded-lg hover:bg-blue-700 transition">
                      Beli Sekarang
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
