import React, { useRef } from 'react'

const UnControlled = () => {

    const inputName = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("🚀 ~ file: UnControlled.jsx ~ line 6 ~ UnControlled ~ inputName", inputName.current.value)
    }

    return (
        <div>
            <h2>UnControlled</h2>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="inputName">Enter Your Name</label>
                    <input type="text" id="inputName" ref={inputName} />
                </div>
                <button>SUBMIT</button>
            </form>
        </div>
    )
}

export default UnControlled