import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserPosts } from '../../actions';
import moment from 'moment-js';
import { Link } from 'react-router-dom';

class UserPosts extends Component {
    
    render(){
        let user = this.props.user;
        
        return (
            <div className="user_posts">
                <h4>Your reviews:</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showUserPosts(user)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(UserPosts);