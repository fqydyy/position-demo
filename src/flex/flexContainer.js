import React from 'react';

export default function FlexContainer(props) {

    return (
        <div className="flex-container-content">
            <h4>设置display: flex</h4>
            <div class="display-flex-container">
                <div>One</div>
                <div>Two</div>
                <div>Three
                    <br />has
                    <br />extra
                    <br />text
                </div>
            </div>

            <h4>设置flex-direction: column</h4>
            <div class="display-flex-column-container">
                <div>One</div>
                <div>Two</div>
                <div>Three
                    <br />has
                    <br />extra
                    <br />text
                </div>
            </div>

            <h4>设置flex-wrap: wrap</h4>
            <div class="flex-wrap-container">
                <div>One</div>
                <div>Two</div>
                <div>Three
                    <br />has
                    <br />extra
                    <br />text
                </div>
            </div>


        </div>
    )
}