import React from 'react';

const Exercise = (props) => {
    const { name, picture, about, age, time} = props.exercise;
    return (
        <div className='col-4'>
            <div className='card' style={{width :"18rem"}}>
            <img src={picture} className='card-img-top h-50' alt="..."/>
            <div className='card-body'>
                <h5 className='card-title'>Name:{name}</h5>
                {/* <p className='card-text'>{about}</p> */}
                <p className='card-text'>{about.slice(0,170)}</p>
                <a href="/" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
                        
        </div>
    );
};

export default Exercise;