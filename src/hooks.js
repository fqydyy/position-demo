import React, { useState, useEffect }  from 'react';

export default function Hooks(props) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `你点击了${count}次`;
    })
    return (
        <div className="container">
           <p>点击的次数: {count}</p> 
           <button onClick={() => setCount(count + 1)}>按钮</button>
        </div>
    )
}