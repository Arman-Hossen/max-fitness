import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import logo from '../../images/profile.ico'
import Toast from '../Toast/Toast';

const List = (props) => {
    const {list} = props;
    let totalTime = 0;
    for(const item of list){
        totalTime = totalTime + item.time;
        
         console.log(totalTime)
    }
    
    const button1=10;
    const button2=20;
    const button3=30;
    const button4=40;
    const button5=50;

    return (
        <div>
            <div className='d-flex align-items-center mb-2 rounded-2'>
                <div>
                    <img src={logo}  width="70" height="70" className='rounded-5 p-2' alt="" />


                </div>
                <div>
                    <h5 className='pt-3'>Md Arman Hossen</h5>
                    <div className='d-flex align-items-space justify-content-evenly'>
                    <FontAwesomeIcon className='pt-1' icon={faLocation}></FontAwesomeIcon>
                    <p>Dhaka, Bangladeh</p>
                    </div>


                </div>

            </div>

            <div className='bg-light border p-3 mb-3 rounded-3' >
            <div className='d-flex justify-content-evenly ps-1'>
                <div className='d-flex'>
                    <h3>85</h3>
                    <p className='pt-2'><small>kg</small></p>
                </div>
                <div>
                    <h3>5' 11"</h3>
                </div>
                <div className='d-flex'>
                    <h3>23</h3>
                    <p className='pt-2'><small>Yrs</small></p>
                </div>
            </div>
            <div className='d-flex justify-content-evenly '>
                <div >
                    <p>Weight</p>
                </div>
                <div>
                    <p>Height</p>
                </div>
                <div>
                    <p>Age</p>
                </div>
            </div>
            </div>
            <h4 className='mt-5'>Add A Break </h4>

            <div className='d-flex justify-content-evenly'>
            <button className='btn btn-light text-primary border rounded-circle p-3'>{button1}s</button>
            <button className='btn btn-light text-primary border rounded-circle p-3'>{button2}s</button>
            <button className='btn btn-light text-primary border rounded-circle p-3'>{button3}s</button>
            <button className='btn btn-light text-primary border rounded-circle p-3'>{button4}s</button>
            <button className='btn btn-light text-primary border rounded-circle p-3'>{button5}s</button>
            
            </div>


            <h4 className='mt-5'>Exercise Details </h4>
            <h6 className='bg-light border rounded-3 p-3'>Exercise time: {totalTime}s</h6>
            <div className='mt-5'>
                <Toast></Toast>
            </div>
            
        </div>
    );
};

export default List;