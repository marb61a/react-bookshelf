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
    
    render(){
        let user = this.props.user;
        
        return (
            <div className="rl_container">
                <form>
                    <h2>Add user</h2>
                    <div className="form_element">
                        <input 
                            type="text"
                            placeholder="Enter Name"
                            value={this.state.name}
                            onChange={this.handleImputname}
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