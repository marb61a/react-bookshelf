import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../../actions';

class Login extends Component {
    state = {
        email:'',
        password:'',
        error:'',
        success:false
    };
    
    render(){
        let props = this.props.user;
        
        return(
            <div className="rl_container">
                <form>
                
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

export default connect(mapStateToProps)(Login);