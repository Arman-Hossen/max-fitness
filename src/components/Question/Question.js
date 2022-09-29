import React from 'react';

const Question = () => {
    return (
        <div>
            <div className='container my-5' id="question">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-md-2  justify-content-center  align-items-center ">
             <div className='col '>
                 <h1 className="text-center"> Questions About React</h1>
                 
             </div>
 
            </div>
            <div className="container">
             <div className="row row-cols-1 row-cols-lg-2 justify-content-center  align-items-center">
                 <div className="accordion" id="accordionExample">
                     <div className="accordion-item">
                       <h2 className="accordion-header" id="headingOne">
                        
                         <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                         How Does React Work?
                            
         
                         </button>
                       </h2>
                       <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                         
                         <div cclassName="accordion-body">
                           <strong></strong> 
                         </div>
                       </div>
                     </div>
                     <div className="accordion-item">
                       <h2 className="accordion-header" id="headingTwo">
                         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Different Between Porops and states?

         
                         </button>
                       </h2>
                       <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                         <div className="accordion-body">
                           <strong> </strong> 
                          
                         </div>
                       </div>
                     </div>
                     <div className="accordion-item">
                       <h2 className="accordion-header" id="headingThree">
                         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                         Uses Of Use useEffect expect data loading?
                         </button>
                       </h2>
                       <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                         <div className="accordion-body">
                           <strong> </strong> 
                         </div>
                       </div>
                     </div>
                     
                   
                   </div>
             </div>
         </div>
          
         </div>
            
        </div>
    );
};

export default Question;