import React from 'react';
import { Route, Link } from 'react-router-dom';
import FlexContainer from './flexContainer';
import './index.css';
export default function Flex(props) {
   
    return (
        <div className="flex-box-container">
           
           <div className="flex-sidebar">
                <div className="flex-sidebar-link">
                    <Link to={`${props.match.path}/flexContainer/`}>flex容器</Link>
                </div>
            </div>
            <div className="flex-content">
                <Route path={`${props.match.path}/flexContainer/`} exact component={FlexContainer} />

            </div>

        </div>
    )
}

  