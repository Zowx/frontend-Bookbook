import React from 'react';
// import Img from '../Assets/couverture.webp'

const BookCard = ({ book }) => {
    return (
        <div className='w-60 h-80 relative overflow-hidden shadow-lg'>
            <img className='w-full h-full' src={book.image} alt="Book Cover" />
            <div className='absolute bottom-0 left-0 w-full bg-white opacity-75 p-2 z-10'>
                <h4 className='text-lg font-bold'>{book.title}</h4>
                <button className='mt-2 bg-blue-500 text-white py-1 px-2 rounded'>Détail</button>
            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-75 transition-opacity duration-300 ease-in-out p-4 z-0'>
                <div className='h-full flex flex-col justify-start'>
                    <p className='mt-2'>Description:</p>
                    <p className='h-32 text-ellipsis overflow-hidden'>
                        {book.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookCard;