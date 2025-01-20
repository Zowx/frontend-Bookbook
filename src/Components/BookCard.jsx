import React from 'react';
import Img from '../Assets/couverture.webp'


const BookCard = () => {
    return (
        <div className='w-60 h-80 relative overflow-hidden'>
            <img className='w-full h-full' src={Img} alt="Book Cover" />
            <div className='absolute bottom-0 left-0 w-full bg-white opacity-75 p-2 z-10'>
                <h4 className='text-lg font-bold'>Titre</h4>
                <button className='mt-2 bg-blue-500 text-white py-1 px-2 rounded'>Détail</button>
            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out p-4 z-0'>
                <div className='h-full flex flex-col justify-center'>
                    <p className='mt-2'>Description</p>
                </div>
            </div>
        </div>
    );
};

export default BookCard;