import React from 'react';

export default function Absolute(props) {

    return (
        <div className="demo-container absolute-demo-container">
            
            <div className="absolute-demo-content absolute-demo-content1">
                <div class="box" id="one">One</div>
                <div class="box" id="two">Two</div>
                <div class="box" id="three">Three</div>
                <div class="box" id="four">Four</div>
            </div>

            <div className="absolute-demo-content absolute-demo-content2">
                <div class="box" id="one">One</div>
                <div class="box" id="two">Two</div>
                <div class="box" id="three">Three</div>
                <div class="box" id="four">Four</div>
            </div>
        </div>
    )
}