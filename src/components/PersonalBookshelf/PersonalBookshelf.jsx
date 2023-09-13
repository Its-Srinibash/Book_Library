import React, { useEffect, useState } from 'react';
import '../../components/BookList/BookList.css';
import {IoIosRemoveCircle} from "react-icons/io"
function PersonalBookshelf() {
  // State to hold bookshelf data
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    // Function to load bookshelf data from localStorage
    const loadBookshelf = () => {
      const bookshelfData = localStorage.getItem('bookshelf');
      if (bookshelfData) {
        const parsedBookshelf = JSON.parse(bookshelfData);
        setBookshelf(parsedBookshelf);
      }
    };

    // Load the bookshelf initially
    loadBookshelf();

    // Add an event listener to listen for changes in localStorage
    window.addEventListener('storage', loadBookshelf);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('storage', loadBookshelf);
    };
  }, []); // Run this effect only once on component mount

  const handleRemoveFromBookshelf = (bookKey) => {
    // Log the current bookshelf state
    console.log("Current bookshelf:", bookshelf);
    console.log("Removing book with key:", bookKey);
    
    // Remove the book with the given key from the bookshelf
    const updatedBookshelf = bookshelf.filter((book) => book.key !== bookKey);
    
    // Log the updated bookshelf state
    console.log("Updated bookshelf:", updatedBookshelf);
    
    // Update localStorage with the updated bookshelf
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    
    // Update the state to reflect the change
    setBookshelf(updatedBookshelf);
  };
  

  return (
    <div>
      <h2>Personal Bookshelf</h2>
      <ul>
        {bookshelf.map((book) => (
          <li key={book.key}>
            <div className='book-item flex flex-column flex-sb'>
            <button className='delete' onClick={() => handleRemoveFromBookshelf(book.key)}><IoIosRemoveCircle/></button>
      <div className='book-item-img'>
        <img src = {book.cover_img} alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
      
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          
          </div>
        

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book.author.join(", ")}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
        
      </div>
    </div>
           
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonalBookshelf;
