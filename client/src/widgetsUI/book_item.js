import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = (item) => {
    return (
        <Link>
            <div className="book_header">
                <h2>{item.name}</h2>
            </div>
            
        </Link>    
    );
};

export default BookItem;