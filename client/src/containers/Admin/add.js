import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addBook, clearNewBook, clearBook } from '../../actions';

class AddBook extends Component {
  state = {
    formdata: {
      name: '',
      author: '',
      review: '',
      pages: '',
      rating: '',
      price: ''
    }
  }

  handleInput = (event, name) => {
    const newFormdata = {
      ...this.state.formdata
    }
    newFormdata[name] = event.target.value;

    this.setState({
        formdata: newFormdata
    });
  }

  showNewBook = (book) => (
    book.post ?
    <div className="conf_link">
      Cool !! <Link to={`/books/${book.bookId}`}>
        Click the link to see the post
      </Link>
    </div>
    : null
  );

  submitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(addBook({
      ...this.state.formdata,
      ownerId: this.props.user.login.id
    }));
  }

  componentWillUnmount(){
    this.props.dispatch(clearBook());
  }

  render(){
    return (
      <div className="rl_container article">
        <form onSubmit={this.submitForm}>
          <h2>Add a review</h2>
          <div className="form_element">
            <input 
              type="text"
              placeholder="Enter First Name"
              value={this.state.name}
              onChange={(event)=>this.handleInput(event,'name')}
            />
          </div>
          <div className="form_element">
            <input
              type="text"
              placeholder="Enter author"
              value={this.state.formdata.author}
              onChange={(event)=>this.handleInput(event,'author')}
            />
          </div>
          <textarea 
            value={this.state.formdata.review}
            onChange={(event)=>this.handleInput(event,'review')}
          />
          <div className="form_element">
            <input 
              type="number"
              placeholder="Enter pages"
              value={this.state.formdata.pages}
              onChange={(event)=>this.handleInput(event,'pages')}
            />
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(AddBook);