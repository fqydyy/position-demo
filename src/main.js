import React from 'react';
import { Route, Link } from 'react-router-dom';
import Position from './position';
import Float from './float';
import ZIndex from './zindex'; 
import Flex from './flex';

export default function Main(props) {

    return (
        <div className="container">
            <div className="sidebar">
                <div className="sidebar-link">
                    <Link to="/position">
                        positon
                    </Link>
                </div>
                <div className="sidebar-link">
                    <Link to="/float">
                        float
                    </Link>
                </div>
                <div className="sidebar-link">
                    <Link to="/zindex">
                        z-index
                    </Link>
                </div>
                <div className="sidebar-link">
                    <Link to="/flex">
                        flex
                    </Link>
                </div>
            </div>
            <div className="content">

                <Route path="/position" component={Position}/>
                <Route path="/float" component={Float}/>
                <Route path="/zindex" component={ZIndex}/>
                <Route path="/flex" component={Flex}/>
            </div>



        </div>
    )
}