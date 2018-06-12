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

  deletePost = () => {
    this.props.dispatch(updateBook(this.state.formdata));
  }

  redirectUser = () => {
    setTimeout(() => {
      this.props.history.push('/user/user-reviews');
    }, 1000);
  }

  componentWillMount(){
    this.props.dispatch(getBook(this.props.match.params.id));
  }

  componentWillReceiveProps(nextProps){
    let book = nextProps.books.book;

    this.setState({
      formdata:{
        _id: book._id,
        name: book.name,
        author: book.author,
        review: book.review,
        pages: book.pages,
        rating: book.rating,
        price: book.price
      }
    })
  }

  componentWillUnmount(){
    this.props.dispatch(clearBook());
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
        {
          books.postDeleted ?
          <div className="red_tag">
            Post Deleted
            {this.redirectUser}
          </div>
          : null
        }
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(EditBook);