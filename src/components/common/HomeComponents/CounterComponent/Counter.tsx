import { useState } from 'react';
import './Counter.css';

const Counter = () => {
    
    const [count, setCount] = useState(0);
    
    const handleIncrement = () => 
        {
        setCount(count + 1)
    }
    
    const handleDecrement = () => 
        {
        setCount(count - 1)
    }
    
    const handleReset = () => 
        {
        setCount(0)
    }
    
    return (
        
        <div className="flex">
            <div className="block">
                <p className="paragraph">by Khetag7</p>
                <h1 className="title">Counter</h1>
                <div className="count-number">
                    <span>{count}</span>
                </div>
                <div className="flex-btns">
                    <button className="btn-increment" onClick={handleIncrement}>+</button>
                    <button className="btn-decrement" onClick={handleDecrement}>-</button>
                    <button className="btn-reset" onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
