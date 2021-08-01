import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Router } from 'react-router';
import Languages from './Languages';


class Popular extends React.Component{
    constructor(props){
        super(props)
            this.state = {

            }
        
    }
    render(){
        return(
            <>
                <section className = 'popular'>
                    <ul className = "languages-display">
                        <li>
                            <NavLink to = "/popular/all" activeClassName = "active-nav">
                                All
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to = "/popular/JavaScript" activeClassName = "active-nav">
                                Javascript
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to = "/popular/Ruby" activeClassName = "active-nav">
                                Ruby
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to = "/popular/Java" activeClassName = "active-nav">
                                Java
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to = "/popular/CSS" activeClassName = "active-nav">
                                CSS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to = "/popular/Python" activeClassName = "active-nav">
                                Python
                            </NavLink>
                        </li>
                    </ul>
                    <Route path = '/popular/:lang' component = {Languages}/>
                </section>
            </>
        )
    }
}

export default Popular

