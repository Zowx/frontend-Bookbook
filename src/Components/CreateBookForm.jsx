import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateBookForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: [],
    description: '',
    publication: '',
    format: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookData = { ...formData };

    fetch('http://localhost:3001/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify(bookData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Réponse backend :', data);

        alert('Livre créé avec succès');
        setFormData({
          title: '',
          author: '',
          genre: [],
          description: '',
          publication: '',
          format: '',
        });
        navigate('/');
      })
      .catch((error) => {
        console.error('Erreur :', error);
        alert('Une erreur est survenue lors de la création du livre.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto border border-gray-500 rounded-md p-6 bg-[#1C2953]">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-white">Titre :</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="author" className="block text-sm font-medium text-white">Auteur :</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="genre" className="block text-sm font-medium text-white">
          Genre :
        </label>
        <div className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
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
            <div key={genre} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={genre}
                name="genre"
                value={genre}
                checked={formData.genre.includes(genre)} 
                onChange={(e) => {
                  const value = e.target.value;
                  if (e.target.checked) {
                    setFormData({
                      ...formData,
                      genre: [...formData.genre, value],
                    });
                  } else {
                    setFormData({
                      ...formData,
                      genre: formData.genre.filter((g) => g !== value),
                    });
                  }
                }}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor={genre} className="text-sm text-white">
                {genre}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-white">Description :</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="publication" className="block text-sm font-medium text-white">Date de publication :</label>
        <input
          type="date"
          id="publication"
          name="publication"
          value={formData.publication}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="format" className="block text-sm font-medium text-white">Format :</label>
        <input
          type="text"
          id="format"
          name="format"
          maxLength="50"
          value={formData.format}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Créer le livre
      </button>
    </form>
  );
}

export default CreateBookForm;
