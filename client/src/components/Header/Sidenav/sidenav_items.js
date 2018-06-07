import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';

const SidenavItems = ({user}) => {
    const items = [
        {
            type:'navItem',
            icon:'home',
            text:'Home',
            link:'/',
            restricted:false
        }
    ];
    
    const showItems = () => (
        user.login
    );
    
    return (
        <div>
            {showItems()}
        </div>    
    );
};

function mapStateToProps(state){
    return{
        user: state.user
    };
}

export default connect(mapStateToProps)(SidenavItems);