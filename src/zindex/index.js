import React from 'react';
import './index.css';
export default function ZIndex(props) {
   
    return (
        <div className="zindex-box-container">
           
            <div className="zindex-box">
                <div className="zindex-subbox zindex-subbox1" />
                <div className="zindex-subbox zindex-subbox2" />
                <div className="zindex-subbox zindex-subbox3" />
                <div className="zindex-subbox zindex-subbox4" />
            </div>
            <div className="z-index-summary">
                <h3>Stacking Context及 Stacking Order</h3>
                <ul>
                    <li>stacking contexts的根元素</li>
                    <li>z-index 为负值的定位元素</li>
                    <li>非定位元素</li>
                    <li>z-index 为auto的定位元素</li>
                    <li>z-index 为正值的定位元素</li>
                </ul>
            </div>

           

        </div>
    )
}

  