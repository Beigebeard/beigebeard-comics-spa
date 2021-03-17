import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
//import { Link, graphql } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft, faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'

class TitleBar extends React.Component {
    constructor(props) {
      super(props);
    }
    render () {
        
        //const {previous, next, start, end, post} = this.props;

        return (
        <Router>
            <div className="post-footer">
            <ul>
                {(<Link to="/koganusan" >
                    <FontAwesomeIcon icon={faAngleDoubleLeft} style={{verticalAlign: "-4px"}}/><span style={{color:"#fff"}}>START</span>
                    </Link>)}
                {(
                    <Link to="/?prev">
                    <FontAwesomeIcon icon={faAngleLeft} style={{verticalAlign: "-4px"}}/><span style={{color:"#fff"}}>PREV</span>
                    </Link>)}
                <li>
                <span>TITLE</span>
                <span style={{color:"#fff"}}> DATE</span>
                </li>
                {(
                    <Link to="/" >
                    <span style={{color:"#fff"}} >NEXT</span><FontAwesomeIcon icon={faAngleRight} style={{verticalAlign: "-4px"}}/>
                    </Link>
                )}
                {(
                    <Link to="/" >
                    <span style={{color:"#fff"}}>END</span><FontAwesomeIcon icon={faAngleDoubleRight} style={{verticalAlign: "-4px"}}/>
                    </Link>
                )}
            </ul>
        </div>
        </Router>
        )
    }
}    

export default TitleBar;
