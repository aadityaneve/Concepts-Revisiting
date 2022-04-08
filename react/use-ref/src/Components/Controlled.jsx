import React, { useState } from 'react'

const Controlled = () => {

    const [name, setName] = useState('');


    const handleChange = (e) => setName(e.target.value); console.log("🚀 ~ file: Controlled.jsx ~ line 6 ~ Controlled ~ name", name);

    return (
        <div>
            <h2>Controlled</h2>
            <label htmlFor="inputField">Enter Your Name</label>
            <input type="text" value={name} onChange={handleChange} />
        </div>
    )
}

export default Controlled