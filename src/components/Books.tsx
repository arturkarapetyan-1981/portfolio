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
    link: "https://fzrovy24kbygdx6o.public.blob.vercel-storage.com/%D0%9B%D0%B5%D0%B3%D0%BA%D0%B8%D0%B8%CC%86%20%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%20%D0%B2%D1%8B%D1%83%D1%87%D0%B8%D1%82%D1%8C%20Java.pdf",
    language: "Russian",
  },
  {
    id: 2,
    title: "Java: руководство для начинающих",
    author: "Герберт Шильдт",
    category: "Java",
    images: ["/books/russian/book-2.jpg"],
    link: "https://fzrovy24kbygdx6o.public.blob.vercel-storage.com/java-rukovodstvo-dlya-nachinayushih-9-izd.pdf",
    language: "Russian",
  },
  {
    id: 3,
    title: "Learn Three.js, Fourth Edition",
    author: "Jos Dirksen",
    category: "Java Script",
    images: ["/books/english/book-3.jpg"],
    link: "https://fzrovy24kbygdx6o.public.blob.vercel-storage.com/Learn%20Three.js.pdf",
    language: "English",
  },
  {
    id: 4,
    title: "Functional Programming in Javascript",
    author: "Luis Atencio",
    category: "Java Script",
    images: ["/books/english/book-4.jpg"],
    link: "https://fzrovy24kbygdx6o.public.blob.vercel-storage.com/Luis_Funkcionalnoe_programmirovanie_na_JavaScript_kak_uluchshit.pdf",
    language: "English",
  },
  {
    id: 5,
    title: "Что такое ТЕСТИРОВАНИЕ",
    author: "Ольга Назина",
    category: "Testing",
    images: ["/books/russian/book-5.jpg"],
    link: "https://fzrovy24kbygdx6o.public.blob.vercel-storage.com/Chto_takoe_testirovanie.pdf",
    language: "Russian",
  },
  {
    id: 6,
    title: "JavaScript: Полное руководство, 7-е издание",
    author: "Дэвид Фланаган",
    category: "Java Script",
    images: ["/books/russian/book-6.jpg"],
    link: "https://fzrovy24kbygdx6o.public.blob.vercel-storage.com/JavaScript.%20%D0%9F%D0%BE%D0%BB%D0%BD%D0%BE%D0%B5%20%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE%2C%207-%D0%B5%20%D0%B8%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%20%5B2021%5D%20%D0%A4%D0%BB%D1%8D%D0%BD%D0%B0%D0%B3%D0%B0%D0%BD.pdf",
    language: "Russian",
  },
  {
    id: 7,
    title: "Java: оптимизация программ",
    author: "Бенджамин Дж. Эванс, Джеймс Гоф, Крис Ньюланд",
    category: "Java",
    images: ["/books/russian/book-7.jpg"],
    link: "https://fzrovy24kbygdx6o.public.blob.vercel-storage.com/java_optimizaciya_programm_bendzhamin_2019.pdf",
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
  {
    id: 9,
    title: "React в действии",
    author: "Томас Марк Тиленс",
    category: "Java Script",
    images: ["/books/russian/book-9.jpg"],
    link: "https://vigyhkysesyfimmh.public.blob.vercel-storage.com/React_v_deystvii_2019_Tomas.pdf",
    language: "Russian",
  },
  {
    id: 10,
    title: "Practical MongoDB Aggregations",
    author: "Paul Done",
    category: "Database",
    images: ["/books/english/book-10.jpg"],
    link: "https://vigyhkysesyfimmh.public.blob.vercel-storage.com/Practical.MongoDB.Aggregations.pdf",
    language: "English",
  },
  {
    id: 11,
    title: "Microsoft Visual C# Step by Step, Ninth Edition",
    author: "John Sharp",
    category: "C#",
    images: ["/books/english/book-11.jpg"],
    link: "https://vigyhkysesyfimmh.public.blob.vercel-storage.com/Microsoft%20Visual%20C%23%20Step%20by%20Step%2C%20Ninth%20Edition.pdf",
    language: "English",
  },
  {
    id: 12,
    title: "Graphic Javascript Algorithms",
    author: "Yang Hu",
    category: "Java Script",
    images: ["/books/english/book-12.jpg"],
    link: "https://vigyhkysesyfimmh.public.blob.vercel-storage.com/c_7_i__e2VFmzg.pdf",
    language: "English",
  },
  {
    id: 13,
    title: "C# 7 и .NET Core",
    author: "Марк Дж. Прайс",
    category: "C#",
    images: ["/books/russian/book-13.jpg"],
    link: "https://vigyhkysesyfimmh.public.blob.vercel-storage.com/c_7_i__e2VFmzg.pdf",
    language: "Russian",
  },
  {
    id: 14,
    title: "Fullstack Vue 3",
    author: "Hassan Djirdeh, Nate Murray, and Ari Lerner",
    category: "Java Script",
    images: ["/books/english/book-14.jpg"],
    link: "https://vigyhkysesyfimmh.public.blob.vercel-storage.com/Fullstack%20Vue%203t.pdf",
    language: "English",
  },
  {
    id: 15,
    title: "React - Сборник рецептов",
    author: "Дэвид Гриффитс, Дон Гриффитс",
    category: "Java Script",
    images: ["/books/russian/book-15.jpg"],
    link: "https://vigyhkysesyfimmh.public.blob.vercel-storage.com/1032_React-sbornik-receptov.pdf",
    language: "Russian",
  },
  {
    id: 16,
    title: "Система модулей Java",
    author: "Парлог Николай",
    category: "Java",
    images: ["/books/russian/book-16.jpg"],
    link: "https://vigyhkysesyfimmh.public.blob.vercel-storage.com/%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0%20%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D0%B5%D0%B8%CC%86%20Java.pdf",
    language: "Russian",
  },
  {
    id: 17,
    title: "JavaScript Design Patterns",
    author: "Hugo Di Francesco",
    category: "Java Script",
    images: ["/books/english/book-17.jpeg"],
    link: "https://vigyhkysesyfimmh.public.blob.vercel-storage.com/di_francesco_h_javascript_design_patterns_deliver_fast_and_e.pdf",
    language: "English",
  },
  {
    id: 18,
    title: "Front-End Development Projects with Vue.js",
    author: "Raymond Camden, Hugo Di Francesco, Clifford Gurney, Philip Kirkbride, and Maya Shavin",
    category: "Java Script",
    images: ["/books/english/book-18.jpg"],
    link: "https://vigyhkysesyfimmh.public.blob.vercel-storage.com/Front-End%20Development%20Projects%20with%20Vue.js.pdf",
    language: "English",
  },
  {
    id: 19,
    title: "JavaScript для FrontEnd-разработчиков",
    author: "Кириченко А. В.",
    category: "Java Script",
    images: ["/books/russian/book-19.jpg"],
    link: "https://vigyhkysesyfimmh.public.blob.vercel-storage.com/JavaScript%20%D0%B4%D0%BB%D1%8F%20FrontEnd-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D0%BE%D0%B2.pdf",
    language: "Russian",
  },
  {
    id: 20,
    title: "Изучаем TypeScript 3",
    author: "Натан Розенталс",
    category: "Java Script",
    images: ["/books/russian/book-20.jpg"],
    link: "https://vigyhkysesyfimmh.public.blob.vercel-storage.com/Izuchaem_TypeScript_3_%282019%29.pdf",
    language: "Russian",
  },
  {
    id: 21,
    title: "Network Science with Python",
    author: "David Knickerbocker",
    category: "Python",
    images: ["/books/english/book-21.jpg"],
    link: "https://vigyhkysesyfimmh.public.blob.vercel-storage.com/29623753.pdf",
    language: "English",
  },
];

export default function Books() {
  const [activeLanguage, setActiveLanguage] = useState<string>("*");
  const [activeCategory, setActiveCategory] = useState<string>("*");
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const languages = ["*", "English", "Russian"];
  const categories = ["*", "Java", "Java Script", "Testing", "Database", "C#", "Python"];

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
          Free professional literature
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



