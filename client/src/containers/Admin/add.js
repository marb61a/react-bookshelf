import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addBook, clearNewBook } from '../../actions';

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

  submitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(addBook({
      ...this.state.formdata,
      ownerId: this.props.user.login.id
    }));
  }

  render(){
    return (
      <div className="rl_container article">
        <form onSubmit={this.submitForm}>
          <h2>Add a review</h2>

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