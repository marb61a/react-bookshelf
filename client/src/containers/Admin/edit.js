import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBook, updateBook, clearBook, deleteBook } from '../../actions';

class EditBook extends PureComponent {
  state = {
    formdata:{
      _id:this.props.match.params.id,
            name:'',
            author:'',
            review:'',
            pages:'',
            rating:'',
            price:''
    }
  }

  render(){
    let books = this.props.books;

    return (
      <div className="rl_container article">
        {
          books.updateBook ? 
          <div className="edit_confirm">
            Post Updated, <Link to={`/books/${books.book._id}`}>
              Click here to see your post
            </Link>
          </div>
          : null
        }
      </div>
    );
  }
}