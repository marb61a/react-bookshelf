import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getUsers, userRegister } from '../../actions';

class Register extends PureComponent {
     state = {
        name:'',
        lastname:'',
        email:'',
        password:'',
        error:''
    };
    
    componentWillMount(){
        this.props.dispatch(getUsers());
    }
    
    handleImputname = (event) => {
        this.setState({
            name: event.target.value
        });
    }
    
    handleInputLastname = (event) => {
        this.setState({
            lastname: event.target.value
        });
    }
    
    handleInputEmail = (event) => {
        this.setState({
            email:event.target.value
        });
    }
    
    submitForm = (e) => {
        e.preventDefault();
        this.setState({error:''});
        
        this.props.dispatch(userRegister({
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            lastname: this.state.lastname
        }, this.props.users.user));
    }
    
    render(){
        let user = this.props.user;
        
        return (
            <div className="rl_container">
                <form onSubmit={this.submitForm}>
                    <h2>Add user</h2>
                    <div className="form_element">
                        <input 
                            type="text"
                            placeholder="Enter First Name"
                            value={this.state.name}
                            onChange={this.handleImputname}
                        />
                    </div>
                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter Lastname"
                            value={this.state.lastname}
                            onChange={this.handleInputLastname}
                         />
                    </div>
                    <div className="form_element">
                        <input 
                            type="email"
                            placeholder="Enter Email Address"
                            value={this.state.email}
                            onChange={this.handleInput}
                        />
                    </div>
                </form>
            </div>    
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(Register);