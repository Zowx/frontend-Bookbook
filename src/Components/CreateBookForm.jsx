import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateBookForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
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
            genre: '',
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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto border border-gray-500 rounded-md p-4">
      {/* Champs du formulaire */}
      <div className='mb-4'>
        <label htmlFor="title" className='block text-sm font-medium text-gray-700'>Titre :</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor="author" className='block text-sm font-medium text-gray-700'>Auteur :</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
          className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor="genre" className='block text-sm font-medium text-gray-700'>Genre :</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor="description" className='block text-sm font-medium text-gray-700'>Description :</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='publication' className='block text-sm font-medium text-gray-700'>Date de publication :</label>
        <input
          type="date"
          id="publication"
          name="publication"
          value={formData.publication}
          onChange={handleChange}
          className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor="format" className='block text-sm font-medium text-gray-700'>Format :</label>
        <input
          type='text'
          id="format"
          name="format"
          maxLength="50"
          value={formData.format}
          onChange={handleChange}
          className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        />
      </div>
      <button type="submit" className='px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
        Créer le livre
      </button>
    </form>
  );
}

export default CreateBookForm;
