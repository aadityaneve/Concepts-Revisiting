import React, { useEffect, useState } from 'react';

const AlertComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        alert('Helloo Side Effect...!');

        return () => alert('Component is Unmounted From UI')
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                INC
            </button>
        </div>
    );
};

export default AlertComponent;

/* 

    class Counter {
        constructor() {
            super(props);

            this.state = {
                count: 0,
            }
        }

        componentDidMount() { ON
            initialized
        }

        componentDidUpdate() { update
            state updated
        }

        componentWillUnmount() { OFF
            destroyed / removed from dom
        }
    }

*/
