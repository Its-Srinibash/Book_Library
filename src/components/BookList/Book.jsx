import React from 'react';
import {BsFillBookmarkPlusFill} from 'react-icons/bs';
import "./BookList.css";

const handleAddToBookshelf = (book) => {
  // Get the current bookshelf from localStorage or initialize it as an empty array
  const currentBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];

  // Check if the book is already in the bookshelf using a unique identifier (e.g., book ID)
  const isBookInBookshelf = currentBookshelf.some((b) => b.id === book.id);

  if (!isBookInBookshelf) {
    // Generate a unique key for the book (e.g., using book ID)
    const bookKey = book.id;

    // Add the book to the bookshelf array with the unique key
    currentBookshelf.push({ ...book, key: bookKey });

    // Update localStorage with the updated bookshelf
    localStorage.setItem('bookshelf', JSON.stringify(currentBookshelf));
    console.log('Book added to your bookshelf:', book);

    // Provide user feedback that the book has been added
    alert('Book added to your bookshelf!');
  } else {
    // If the book is already in the bookshelf, provide user feedback
    alert('Book is already in your bookshelf.');
  }
};


const Book = (book) => {
  return (
    <div className='book-item flex flex-column flex-sb'>
       <button onClick={() => handleAddToBookshelf(book)}><span className='save'><BsFillBookmarkPlusFill/></span></button>
        
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
  )
}

export default Book