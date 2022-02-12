import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                INC
            </button>
        </div>
    );
};

export default Counter;
