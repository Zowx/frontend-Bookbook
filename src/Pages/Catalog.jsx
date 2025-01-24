import React, { useState, useEffect } from "react";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";
import BookCard from "../Components/BookCard";


const Catalog = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [filters, setFilters] = useState({
    title: "",
    author: "",
    genre: [],
    publication_date: "",
    format: [],
    reservation_Id: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 25;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/books")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        if (Array.isArray(data)) {
          setBooks(data);
          setFilteredBooks(data);
        }
      })
      .catch((error) => console.error("Erreur lors de la récupération des livres:", error))
      .finally(() => setIsLoading(false));
  }, []);

  const handleFilterChange = (key, value) => {
    if (key === "genre" || key === "format") {
      const currentFilters = filters[key];
      const newFilters = currentFilters.includes(value)
        ? currentFilters.filter((item) => item !== value)
        : [...currentFilters, value];
      setFilters((prev) => ({ ...prev, [key]: newFilters }));
    } else {
      setFilters((prev) => ({ ...prev, [key]: value }));
    }
  };

  useEffect(() => {
    const applyFilters = () => {
      let filtered = [...books];

      if (filters.title) {
        filtered = filtered.filter((book) =>
          book.title.toLowerCase().includes(filters.title.toLowerCase())
        );
      }
      if (filters.author) {
        filtered = filtered.filter((book) =>
          book.author.toLowerCase().includes(filters.author.toLowerCase())
        );
      }
      if (filters.genre.length > 0) {
        filtered = filtered.filter((book) =>
          filters.genre.every((g) => book.genre.toLowerCase().includes(g.toLowerCase()))
        );
      }
      if (filters.publication_date) {
        filtered = filtered.filter((book) =>
          book.publication_date?.startsWith(filters.publication_date)
        );
      }
      if (filters.format.length > 0) {
        filtered = filtered.filter((book) =>
          filters.format.includes(book.format)
        );
      }

      setFilteredBooks(filtered);
    };

    applyFilters();
  }, [filters, books]);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="h-full mb-28">
      <Navbar />
      <div className="flex h-full">
        <div className="flex flex-col sticky top-0 justify-between items-start w-1/6 bg-[#1C2953] p-8 overflow-y-auto text-white custom-scrollbar h-1/2">
          <div className="mb-4">
            <h5 className="font-semibold mb-2">Auteur</h5>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-800 text-white"
              placeholder="Rechercher par auteur"
              onChange={(e) => handleFilterChange("author", e.target.value)}
            />
          </div>
          <div className="mb-4 w-full">
            <h5 className="font-semibold mb-2 w-full">Genre</h5>
            <div className="flex flex-col w-full max-h-40 overflow-y-auto custom-scrollbar">
              {[
                "Policier",
                "Fiction",
                "Romance",
                "Science-fiction",
                "Fantastique",
                "Horreur",
                "Historique",
                "Biographie",
                "Thriller",
                "Aventure",
              ].map((genre) => (
                <label key={genre} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 custom-checkbox"
                    onChange={() => handleFilterChange("genre", genre)}
                  />
                  {genre}
                </label>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h5 className="font-semibold mb-2">Date de publication</h5>
            <input
              type="date"
              className="w-full p-2 rounded bg-gray-800 text-white"
              onChange={(e) =>
                handleFilterChange("publication_date", e.target.value)
              }
            />
          </div>
          <div className="mb-4">
            <h5 className="font-semibold mb-2">Format</h5>
            {["Ebook", "Papier", "Audio"].map((format) => (
              <label key={format} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 custom-checkbox"
                  onChange={() => handleFilterChange("format", format)}
                />
                {format}
              </label>
            ))}
          </div>
          <div className="mb-4">
            <h5 className="font-semibold mb-2">ID de réservation</h5>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-800 text-white"
              placeholder="Rechercher par ID de réservation"
              onChange={(e) =>
                handleFilterChange("reservation_Id", e.target.value)
              }
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col m-2 flex-wrap items-center content-center gap-5 w-4/5">
          <div className="mb-4 w-3/4">
            <input
              type="text"
              placeholder="Rechercher un livre..."
              className="p-3 text-black rounded-full w-full border-2 border-blue-800 outline-none text-sm shadow-md transition-all duration-300 focus:border-blue-600 focus:shadow-lg"
              onChange={(e) => handleFilterChange("title", e.target.value)}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {isLoading ? (
              <p>Chargement des livres...</p>
            ) : currentBooks.length > 0 ? (
              currentBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))
            ) : (
              <p>Aucun livre trouvé.</p>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`mx-1 px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? "bg-blue-700 text-white"
                    : "bg-white text-blue-700"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;