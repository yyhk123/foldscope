import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <div className="head">
                <h1 className="head-title">
                    <span className="foldscope">FOLDSCOPE </span>
                    <span className="instruments">INSTRUMENTS</span>
                </h1>
            </div>
        );
    }
}

export default Header;