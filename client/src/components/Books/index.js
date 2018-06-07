import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookView extends Component {
    renderBook = (books) => (
        books.book ?
        <div className="br_container">
            <div className="br_header">
            
            </div>
        </div> 
        : null
    );    
    
    render(){
        let books = this.props.books;
        
        return (
            <div>
                {this.renderBook(books)}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        books: state.books 
    };
}

export default connect(mapStateToProps)(BookView);