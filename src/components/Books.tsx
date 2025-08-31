"use client";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface BookItem {
  id: number;
  title: string;
  author: string;
  category: string;
  images: string[];
  link: string;
  language: "English" | "Russian";
}

const bookItems: BookItem[] = [
  {
    id: 1,
    title: "Изучайте Java простым способом",
    author: "Брайсона Пейна",
    category: "Java",
    images: ["/books/russian/book-1.jpg"],
    link: "https://drive.google.com/file/d/1bBItPIcICVJcRt8trgHvUpPpQ-OjxPL4/view?usp=sharing",
    language: "Russian",
  },
  {
    id: 2,
    title: "Java: руководство для начинающих",
    author: "Герберт Шильдт",
    category: "Java",
    images: ["/books/russian/book-2.jpg"],
    link: "https://drive.google.com/file/d/10XrzI6P1q95kxQCh_V4LxbmPqawm6rGT/view?usp=sharing",
    language: "Russian",
  },
  {
    id: 3,
    title: "Learn Three.js, Fourth Edition",
    author: "Jos Dirksen",
    category: "Java Script",
    images: ["/books/english/book-3.jpg"],
    link: "https://drive.google.com/file/d/1YbxKcm1JD8r777hwJWX7R0iZySfYjbsG/view?usp=sharing",
    language: "English",
  },
  {
    id: 4,
    title: "Functional Programming in Javascript",
    author: "Luis Atencio",
    category: "Java Script",
    images: ["/books/english/book-4.jpg"],
    link: "https://drive.google.com/file/d/101JCPXZhrUGIV_X6bJKd7qJvApV-r8s-/view?usp=sharing",
    language: "English",
  },
  {
    id: 5,
    title: "Что такое ТЕСТИРОВАНИЕ",
    author: "Ольга Назина",
    category: "Testing",
    images: ["/books/russian/book-5.jpg"],
    link: "https://drive.google.com/file/d/1KH9p8KxklRfExP5OJOqNWnUuiatIwZnV/view?usp=sharing",
    language: "Russian",
  },
  {
    id: 6,
    title: "JavaScript: Полное руководство, 7-е издание",
    author: "Дэвид Фланаган",
    category: "Java Script",
    images: ["/books/russian/book-6.jpg"],
    link: "https://drive.google.com/file/d/1UaGj61eYZB2rtMeGqirlvmWsqQERLe25/view?usp=sharing",
    language: "Russian",
  },
  {
    id: 7,
    title: "Java: оптимизация программ",
    author: "Бенджамин Дж. Эванс, Джеймс Гоф, Крис Ньюланд",
    category: "Java",
    images: ["/books/russian/book-7.jpg"],
    link: "https://drive.google.com/file/d/1JXiJPG6iXUbJWnMBHQKy9kDZhZTRaF4V/view?usp=sharing",
    language: "Russian",
  },
  {
    id: 8,
    title: "Многопоточный JavaScript",
    author: "Томас Хантер II, Брайан Инглиш",
    category: "Java Script",
    images: ["/books/russian/book-8.jpg"],
    link: "https://arturkarapetyan-1981.github.io/books-IT/assets/%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D0%BF%D0%BE%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B9%20Javascript.pdf",
    language: "Russian",
  },
];

export default function Books() {
  const [activeLanguage, setActiveLanguage] = useState<string>("*");
  const [activeCategory, setActiveCategory] = useState<string>("*");
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const languages = ["*", "English", "Russian"];
  const categories = ["*", "Java", "Java Script", "Testing", "History", "Biography", "Memoir"];

  // Filter logic
  const filteredItems = bookItems.filter((item) => {
    const matchLanguage = activeLanguage === "*" || item.language === activeLanguage;
    const matchCategory = activeCategory === "*" || item.category === activeCategory;
    return matchLanguage && matchCategory;
  });

  const visibleItems = filteredItems.slice(0, visibleCount);

  return (
    <section
      id="books"
      className="min-h-screen py-16 bg-gradient-to-r from-cyan-900 to-blue-900"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-white pt-20">
          Book Collection
        </h2>

        {/* Language Filter */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setActiveLanguage(lang);
                setVisibleCount(6);
              }}
              className={`px-5 py-2 rounded-full border transition ${
                activeLanguage === lang
                  ? "bg-indigo-600 text-white border-none"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {lang === "*" ? "All Languages" : lang}
            </button>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveCategory(filter);
                setVisibleCount(6);
              }}
              className={`px-5 py-2 rounded-full border transition ${
                activeCategory === filter
                  ? "bg-indigo-600 text-white border-none"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {filter === "*" ? "All Categories" : filter}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={item.images[0]}
                alt={item.title}
                width={400}
                height={600}
                className="object-cover aspect-[3/4] w-[250px] h-72 m-auto transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full"
                >
                  <ExternalLink className="w-6 h-6 text-gray-800" />
                </a>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600">
                  {item.language === "English" ? `by ${item.author}` : `автор: ${item.author}`}
                </p>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-sm text-gray-400 italic">{item.language}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < filteredItems.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}



