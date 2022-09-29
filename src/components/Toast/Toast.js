import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Toast = () => {
    const diffToast = ()=>{
        toast.success("Sucessfully Completed!", {
            position:"top-center"
            
        });

    }
    return (
        <div>
            <button className='btn btn-primary w-100' onClick={diffToast}> Activity Completed</button>

            <ToastContainer />
            
        </div>
    );
};

export default Toast;