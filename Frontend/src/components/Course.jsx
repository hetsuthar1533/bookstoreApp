import React, { useEffect, useState } from 'react';
import Cards from './cards';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Course = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get('http://localhost:4001/book');
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-15 px-4'>
        <div className='mt-32 md:mt-40 items-center justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'>
            We are delighted to have you
            <span className='text-pink-500'> Here </span>
          </h1>
          <p className='mt-6 md:mt-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, et totam. Tempora amet atque expedita, quae corrupti totam sed pariatur corporis at veniam est voluptas animi!
          </p>
          <Link to='/'>
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
              Back
            </button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-6'>
          {book.map((item) => {
            return <Cards key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Course;
