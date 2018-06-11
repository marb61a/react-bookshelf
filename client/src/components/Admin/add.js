import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addBook, clearNewBook } from '../../actions';

class AddBook extends Component {
    state = {
        formdata:{
            name:'',
            author:'',
            review:'',
            pages:'',
            rating:'',
            price:''
        }
    }
    
    render(){
        return (
            <div className="rl_container article">
                <form>
                
                </form>
            </div>    
        );
    }
}

function mapStateToProps(state){
    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(AddBook);