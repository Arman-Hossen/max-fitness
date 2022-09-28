import React, { useEffect, useState } from 'react';

const Gymdata = () => {
    const [excercises, setExcercises] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div className='container'>
            <h3>Select your daily exercise</h3>
        </div>
    );
};

export default Gymdata;