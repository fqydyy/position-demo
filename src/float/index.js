import React from 'react';
import { Route, Link } from 'react-router-dom';
import './index.css';
export default function Float(props) {
   
    return (
        <div className="float-demo-container">
            <h3>浮动</h3>
            <div>
                <section>
                    <div class="left">1</div>
                    <div class="left">2</div>
                    <div class="right">3</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi tristique sapien ac erat tincidunt, sit amet dignissim
                        lectus vulputate. Donec id iaculis velit. </p>
                </section>
                <p>1111111111111111111</p>
            </div>

            <div className="float-box-container">
                <div class="float-box float-box1">1</div>
                <div class="float-box float-box2 float-right">2</div>
                <div class="float-box float-box3 ">3</div>
            </div>

            <h3 className="float-clear-title">清除浮动</h3>
            <div className="float-clear-container">
                <section>
                    <div class="left">1</div>
                    <div class="left">2</div>
                    <div class="right">3</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi tristique sapien ac erat tincidunt, sit amet dignissim
                        lectus vulputate. Donec id iaculis velit.</p>
                </section>
                <p>1111111111111111111</p>
            </div>
        </div>
    )
}

  