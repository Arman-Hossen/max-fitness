import React from 'react';

const Exercise = (props) => {
    const { name, picture, about, age, time} = props.exercise;
    return (
        <div className='col-lg-4 col-sm-12'>
            <div className='card '>
            <img src={picture} className='card-img-top h-50' alt="..."/>
            <div className='card-body'>
                <h5 className='card-title'>{name}</h5>
                <p className='card-text'>{about.slice(0,110)+'...'}</p>
                <h6 className='card-title'>For Age :{age}</h6>
                <h6 className='card-title'>Time required :{time}</h6>
                <button className='btn btn-primary w-100' onClick={() => props.handleAddToList(props.exercise)}>Add to list</button>
            </div>
            </div>
                        
        </div>
    );
};

export default Exercise;