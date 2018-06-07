import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBooks } from '../actions';
import BookItem from '../widgetsUI/book_item';

class HomeContainer extends Component {
    componentWillMount(){
        this.props.dispatch(getBooks(1,0,'desc'));
    }
    
    renderItems = (books) => (
        books.list ?
        books.list.map(item => (
            <BookItem {...item} key={item._id} />    
        ))
        : null
    );
    
    render(){
        return(
            <div></div>    
        );
    }
}

function mapStateToProps(state){
    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(HomeContainer);