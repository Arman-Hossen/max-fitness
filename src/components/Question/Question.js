// question and anserwing 
import React from "react";

const Question = () => {
  return (
    <div>
      <div className="container my-5" id="question">
        <div className="row row-cols-1 row-cols-lg-2 row-cols-md-2  justify-content-center  align-items-center ">
          <div className="col ">
            <h1 className="text-center"> Questions About React</h1>
          </div>
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 justify-content-center  align-items-center">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How Does React Work?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div cclassName="accordion-body">
                    <strong>
                      ReactJS divides the UI into isolated reusable pieces of
                      code known as components.
                    </strong>
                    React components work similarly to JavaScript functions as
                    they accept arbitrary inputs called properties or props It’s
                    possible to have as many components as necessary without
                    cluttering your code.Unlike browser DOM elements, React
                    elements are plain objects and are cheap to create. React
                    DOM takes care of updating the DOM to match the React
                    elements. The reason for this is that JavaScript is very
                    fast and it’s worth keeping a DOM tree in it to speed up its
                    manipulation. Although React was conceived to be used in the
                    browser, because of its design it can also be used in the
                    server with Node.js.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Different Between Porops and states?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>
                      Props are used to pass data from one component to another.
                    </strong>
                    The state is a local data storage that is local to the
                    component only and cannot be passed to other
                    components.Props are read-only. State is both read and
                    write.Props can be used with state and functional
                    components.State can be used only with the state
                    components/class component (Before 16.0).
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Uses Of Use useEffect expect data loading?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>The useEffect hook allows components to react to lifecycle
                    events such as mounting to the DOM, re-rendering, and
                    unmounting. </strong>
                    We can use useEffect to filter an array "on the
                    fly" by typing letters into an input element. To do so, we
                    will need to use a state to save the input, and a filter
                    implementation inside the useEffect that will be triggered
                    when the input changes, thanks to useEffect dependencies We
                    can use the useEffect hook to trigger an animation on a
                    shopping cart as a side effect of adding a new product to
                    it. In this case, we'll need a state to handle the cart
                    items, and another state to handle the animation trigger.
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
