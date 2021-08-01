import React from 'react';
import {Navlink} from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <>
            <header>
                <div className = "container">
                    <div>
                        <Navlink to = "/popular" activeClassName="active-nav">Popular</Navlink>
                        <Navlink to = "/battle" activeClassName="active-nav">Battle</Navlink>
                    </div>
                </div>
            </header>
            </>
        )
    }
}


export default Header;