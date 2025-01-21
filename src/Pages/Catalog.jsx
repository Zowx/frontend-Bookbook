import React, { useState, useEffect } from 'react';
import BookCard from '../Components/BookCard';
import Navbar from '../Components/NavBar';

const Catalog = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [filters, setFilters] = useState({
        title: '',
        author: '',
        genre: [],
        publication_date: '',
        format: [],
        reservation_Id: '',
        comment_id: ''
    });
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 25;

    useEffect(() => {
        // Fetch data from DummyJSON API
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => {
                setBooks(data.products);
                setFilteredBooks(data.products);
            });
    }, []);

    const handleFilterChange = (category, value) => {
        setFilters(prevFilters => {
            const newFilters = { ...prevFilters };
            if (Array.isArray(newFilters[category])) {
                if (newFilters[category].includes(value)) {
                    newFilters[category] = newFilters[category].filter(item => item !== value);
                } else {
                    newFilters[category].push(value);
                }
            } else {
                newFilters[category] = value;
            }
            return newFilters;
        });
    };

    useEffect(() => {
        let filtered = books;
        if (filters.title) {
            filtered = filtered.filter(book => book.title.toLowerCase().includes(filters.title.toLowerCase()));
        }
        if (filters.author) {
            filtered = filtered.filter(book => book.author.toLowerCase().includes(filters.author.toLowerCase()));
        }
        if (filters.genre.length > 0) {
            filtered = filtered.filter(book => filters.genre.includes(book.genre));
        }
        if (filters.publication_date) {
            filtered = filtered.filter(book => book.publication_date === filters.publication_date);
        }
        if (filters.format.length > 0) {
            filtered = filtered.filter(book => filters.format.includes(book.format));
        }
        if (filters.reservation_Id) {
            filtered = filtered.filter(book => book.reservation_Id === filters.reservation_Id);
        }
        if (filters.comment_id) {
            filtered = filtered.filter(book => book.comment_id === filters.comment_id);
        }
        setFilteredBooks(filtered);
    }, [filters, books]);

    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='h-screen'>
            <Navbar />
            <div className='flex h-full'>
                <div className="flex flex-col justify-between items-start h-3/4 w-56 bg-blue-900 p-4 overflow-y-auto text-white custom-scrollbar">
                    <h4 className='text-lg w-full text-center font-bold mb-4'>Filtre</h4>
                    
                    <div className='mb-4'>
                        <h5 className='font-semibold mb-2'>Titre</h5>
                        <input
                            type="text"
                            className='w-full p-2 rounded'
                            placeholder="Rechercher par titre"
                            onChange={(e) => handleFilterChange('title', e.target.value)}
                        />
                    </div>

                    <div className='mb-4'>
                        <h5 className='font-semibold mb-2'>Auteur</h5>
                        <input
                            type="text"
                            className='w-full p-2 rounded'
                            placeholder="Rechercher par auteur"
                            onChange={(e) => handleFilterChange('author', e.target.value)}
                        />
                    </div>
                    
                    <div className='mb-4'>
                        <h5 className='font-semibold mb-2'>Genre</h5>
                        <div className='flex flex-col max-h-32 overflow-y-auto custom-scrollbar'>
                            <label className='flex items-center'>
                                <input type="checkbox" className='mr-2 custom-checkbox' onChange={() => handleFilterChange('genre', 'Policier')} /> Policier
                            </label>
                            <label className='flex items-center'>
                                <input type="checkbox" className='mr-2 custom-checkbox' onChange={() => handleFilterChange('genre', 'Fiction')} /> Fiction
                            </label>
                            <label className='flex items-center'>
                                <input type="checkbox" className='mr-2 custom-checkbox' onChange={() => handleFilterChange('genre', 'Romance')} /> Romance
                            </label>
                            <label className='flex items-center'>
                                <input type="checkbox" className='mr-2 custom-checkbox' onChange={() => handleFilterChange('genre', 'Science-fiction')} /> Science-fiction
                            </label>
                            <label className='flex items-center'>
                                <input type="checkbox" className='mr-2 custom-checkbox' onChange={() => handleFilterChange('genre', 'Fantastique')} /> Fantastique
                            </label>
                            <label className='flex items-center'>
                                <input type="checkbox" className='mr-2 custom-checkbox' onChange={() => handleFilterChange('genre', 'Horreur')} /> Horreur
                            </label>
                            <label className='flex items-center'>
                                <input type="checkbox" className='mr-2 custom-checkbox' onChange={() => handleFilterChange('genre', 'Historique')} /> Historique
                            </label>
                            <label className='flex items-center'>
                                <input type="checkbox" className='mr-2 custom-checkbox' onChange={() => handleFilterChange('genre', 'Biographie')} /> Biographie
                            </label>
                            <label className='flex items-center'>
                                <input type="checkbox" className='mr-2 custom-checkbox' onChange={() => handleFilterChange('genre', 'Thriller')} /> Thriller
                            </label>
                            <label className='flex items-center'>
                                <input type="checkbox" className='mr-2 custom-checkbox' onChange={() => handleFilterChange('genre', 'Aventure')} /> Aventure
                            </label>
                        </div>
                    </div>

                    <div className='mb-4'>
                        <h5 className='font-semibold mb-2'>Date de publication</h5>
                        <input
                            type="date"
                            className='w-full p-2 rounded'
                            onChange={(e) => handleFilterChange('publication_date', e.target.value)}
                        />
                    </div>
                    
                    <div className='mb-4'>
                        <h5 className='font-semibold mb-2'>Format</h5>
                        <div className='flex flex-col'>
                            <label className='flex items-center'>
                                <input type="checkbox" className='mr-2 custom-checkbox' onChange={() => handleFilterChange('format', 'Ebook')} /> Ebook
                            </label>
                            <label className='flex items-center'>
                                <input type="checkbox" className='mr-2 custom-checkbox' onChange={() => handleFilterChange('format', 'Papier')} /> Papier
                            </label>
                            <label className='flex items-center'>
                                <input type="checkbox" className='mr-2 custom-checkbox' onChange={() => handleFilterChange('format', 'Audio')} /> Audio
                            </label>
                        </div>
                    </div>

                    <div className='mb-4'>
                        <h5 className='font-semibold mb-2'>ID de réservation</h5>
                        <input
                            type="text"
                            className='w-full p-2 rounded'
                            placeholder="Rechercher par ID de réservation"
                            onChange={(e) => handleFilterChange('reservation_Id', e.target.value)}
                        />
                    </div>

                    <div className='mb-4'>
                        <h5 className='font-semibold mb-2'>ID de commentaire</h5>
                        <input
                            type="text"
                            className='w-full p-2 rounded'
                            placeholder="Rechercher par ID de commentaire"
                            onChange={(e) => handleFilterChange('comment_id', e.target.value)}
                        />
                    </div>
                </div>
                <div className='flex flex-wrap gap-5 m-5 w-full'>
                    {currentBooks.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </div>
            <div className='flex justify-center mt-4'>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-700 text-white' : 'bg-white text-blue-700'}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Catalog;