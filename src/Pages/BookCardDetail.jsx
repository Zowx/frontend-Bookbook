import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Img from '../Assets/couverture.webp';

const BookCardDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/api/books/${id}`)
            .then((response) => response.json())
            .then((data) => setBook(data))
            .catch((error) => console.error('Erreur lors de la récupération des données:', error));
    }, [id]);

    if (!book) {
        return <div className="flex items-center justify-center min-h-screen text-white">Chargement...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 px-6 lg:px-24 py-10 flex-grow">
                <div className="h-full flex-shrink-0">
                    <img
                        src={Img}
                        alt="Book Cover"
                        className="w-1/3 h-full rounded-lg shadow-lg object-cover border-4 border-blue-500"
                    />
                </div>

                <div className="flex flex-col content-center items-center gap-6 lg:w-2/3 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        {book.title}
                    </h1>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                        <p className="text-lg text-gray-600">
                            <span className="font-semibold text-blue-500">Auteur :</span> {book.author}
                        </p>
                        <p className="text-lg text-gray-600">
                            <span className="font-semibold text-blue-500">Genre :</span> {book.genre}
                        </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold text-blue-500 mb-2">Description :</h2>
                        <p className="text-gray-700 leading-relaxed">{book.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <p className="text-lg text-gray-600">
                            <span className="font-semibold text-blue-500">Date de publication :</span>{' '}
                            {book.publication_date}
                        </p>
                        <p className="text-lg text-gray-600">
                            <span className="font-semibold text-blue-500">Format :</span> {book.format}
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BookCardDetail;