import React from 'react';
import { Route, Link } from 'react-router-dom';
import Absolute from './absolute';
import Sticky from './sticky';
import Unset from './unset';
import './index.css';

export default function Position(props) {
    return (
        <div className="position-container">
            <div className="position-sidebar">
                <div className="position-sidebar-link">
                    <Link to={`${props.match.path}/absolute/`}>absolute</Link>
                </div>
                <div className="position-sidebar-link">
                    <Link to={`${props.match.path}/sticky/`}>sticky</Link>
                </div>
                <div className="position-sidebar-link">
                    <Link to={`${props.match.path}/unset/`}>unset</Link>
                </div>
            </div>
            <div className="position-content">
                <Route path={`${props.match.path}/absolute/`} exact component={Absolute} />
                <Route path={`${props.match.path}/sticky/`} exact component={Sticky} />
                <Route path={`${props.match.path}/unset/`} exact component={Unset} />

            </div>
        </div>
    )
}

  