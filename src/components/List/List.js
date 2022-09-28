import React from 'react';

const List = (props) => {
    const {list} = props;
    let totalTime = 0;
    for(const exercise of list){
        totalTime = totalTime + exercise.time;
        
         console.log(totalTime)
    }
    return (
        <div>
            <h1>Added to List</h1>

            <h3>Exercise Details </h3>
            <h6 className='bg-light border rounded p-3'>Exercise time: {totalTime}s</h6>
            
        </div>
    );
};

export default List;