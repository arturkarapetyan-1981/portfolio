"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, ExternalLink } from "lucide-react";
import Lightbox from "./Lightbox";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  images: string[]; 
  link: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Calculator",
    category: "App",
    images: ["/app/app-1-1.png", "/app/app-1-2.png", "/app/app-1-3.png"],
    link: "https://calculator-three-brown.vercel.app/",
  },
  {
    id: 2,
    title: "Fun Puzzle Game",
    category: "Games",
    images: ["/images/portfolio/game1.jpg", "/images/portfolio/game2.jpg"],
    link: "https://example.com/game",
  },
  {
    id: 3,
    title: "Corporate Website",
    category: "Web",
    images: ["/images/portfolio/web1.jpg", "/images/portfolio/web2.jpg"],
    link: "https://example.com/web",
  },
  {
    id: 4,
    title: "Portfolio Template",
    category: "Template",
    images: ["/images/portfolio/template1.jpg"],
    link: "https://example.com/template",
  },
  {
    id: 5,
    title: "Professional Book",
    category: "Professional books for free download",
    images: ["/images/portfolio/book1.jpg"],
    link: "https://example.com/book",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("*");
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [] as string[],
    index: 0,
  });

  // ✅ New menu of filters
  const filters = [
    "*",
    "App",
    "Games",
    "Web",
    "Template",
    "Professional books for free download",
  ];

  const filteredItems =
    activeFilter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  // ✅ Lightbox functions
  const openLightbox = (images: string[], index: number) => {
    setLightbox({ isOpen: true, images, index });
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
  };

  const prevImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length,
    }));
  };

  const nextImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length,
    }));
  };

  return (
    <section id="portfolio" className="min-h-screen py-16 bg-linear-to-r from-cyan-500 to-blue-500">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">My Portfolio</h2>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full border transition ${
                activeFilter === filter
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {filter === "*" ? "All" : filter}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg"
            >
              {/* Show only first image as thumbnail */}
              <Image
                src={item.images[0]}
                alt={item.title}
                width={600}
                height={400}
                className="object-cover w-full h-60 transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition">
                {/* Open Lightbox with this project’s images */}
                <button
                  onClick={() => openLightbox(item.images, 0)}
                  className="p-3 bg-white rounded-full hover:bg-gray-100"
                >
                  <Plus className="w-6 h-6 text-gray-800" />
                </button>

                {/* External link */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full hover:bg-gray-100"
                >
                  <ExternalLink className="w-6 h-6 text-gray-800" />
                </a>
              </div>

              {/* Title */}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Lightbox */}
      <Lightbox
        state={lightbox}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </section>
  );
}




