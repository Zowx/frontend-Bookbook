import React from 'react';
import BookCard from '../Components/BookCard';
import Navbar from '../Components/NavBar';

const Catalog = () => {
    return (
        <div className='h-screen'>
            <Navbar />
            <div className='flex h-full'>
                <div className="flex flex-col justify-between items-start h-3/4 w-56 bg-blue-900 p-4 overflow-y-auto text-white custom-scrollbar">
                    <h4 className='text-lg w-full text-center font-bold mb-4'>Filtre</h4>
                    
                    <div className='mb-4'>
                        <h5 className='font-semibold mb-2'>Format</h5>
                        <div className='flex flex-col'>
                            <label className='flex items-center'><input type="checkbox" className='mr-2 custom-checkbox' /> Ebook</label>
                            <label className='flex items-center'><input type="checkbox" className='mr-2 custom-checkbox' /> Papier</label>
                            <label className='flex items-center'><input type="checkbox" className='mr-2 custom-checkbox' /> Audio</label>
                        </div>
                    </div>
                    
                    <div className='mb-4'>
                        <h5 className='font-semibold mb-2'>Genre</h5>
                        <div className='flex flex-col max-h-32 overflow-y-auto custom-scrollbar'>
                            <label className='flex items-center'><input type="checkbox" className='mr-2 custom-checkbox' /> Policier</label>
                            <label className='flex items-center'><input type="checkbox" className='mr-2 custom-checkbox' /> Fiction</label>
                            <label className='flex items-center'><input type="checkbox" className='mr-2 custom-checkbox' /> Romance</label>
                            <label className='flex items-center'><input type="checkbox" className='mr-2 custom-checkbox' /> Science-fiction</label>
                            <label className='flex items-center'><input type="checkbox" className='mr-2 custom-checkbox' /> Fantastique</label>
                            <label className='flex items-center'><input type="checkbox" className='mr-2 custom-checkbox' /> Horreur</label>
                            <label className='flex items-center'><input type="checkbox" className='mr-2 custom-checkbox' /> Historique</label>
                            <label className='flex items-center'><input type="checkbox" className='mr-2 custom-checkbox' /> Biographie</label>
                            <label className='flex items-center'><input type="checkbox" className='mr-2 custom-checkbox' /> Thriller</label>
                            <label className='flex items-center'><input type="checkbox" className='mr-2 custom-checkbox' /> Aventure</label>
                        </div>
                    </div>
                    
                    <div className='mb-4'>
                        <h5 className='font-semibold mb-2'>Disponibilité</h5>
                        <div className='flex flex-col'>
                            <label className='flex items-center'><input type="checkbox" className='mr-2 custom-checkbox' /> Disponible</label>
                            <label className='flex items-center'><input type="checkbox" className='mr-2 custom-checkbox' /> Indisponible</label>
                        </div>
                    </div>
                </div>
                <div className=''>
                <BookCard />
                </div>
            </div>
        </div>
    );
};

export default Catalog;
