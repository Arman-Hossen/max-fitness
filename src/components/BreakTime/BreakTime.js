// load data from local storage 
import React from 'react';

const BreakTime = (props) => {
    const dbItems = localStorage.getItem('breakTime');
    if(dbItems){
        localStorage.getItem('breakTime')
    }
    else{
        localStorage.setItem('breakTime', 0);
        localStorage.getItem('breakTime');
    }
   
    

    return (
        <div>
            <h6 className=" border rounded-3 p-3 mt-4" style={{backgroundColor : '#E7F1FF'}}>
            Break time: {dbItems}m
      </h6>
            
        </div>
    );
};

export default BreakTime;