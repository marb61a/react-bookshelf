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
    
    handleInput = (event, name) => {
        const newFormdata = {
            ...this.state.formdata
        };
        newFormdata[name] = event.target.value
        
        this.setState({
            formdata: newFormdata    
        });
    }
    
    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatchk(addBook({
            ...this.state.formdata,
            ownerId: this.props.user.login.id
        }));
    }
    
    render(){
        return (
            <div className="rl_container article">
                <form onSubmit={this.submitForm}>
                    <h2>Add a review</h2>
                    <div className="form_element">
                        <input 
                            type="text"
                            placeholder="Enter Name"
                            value={this.state.formdata.name}
                            onChange={(event) => this.handleInput(event, 'name')}
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
                        value={this.formdata.value.review}
                        onChange={(event)=>this.handleInput(event,'review')}
                    />
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