import React from 'react'
import Products from './Products';

const Home = () => {
    return (
      <div className="Hero">
        <div className="card bg-dark text-light border-0">
          <img
            src="/assets/bg2.png"
            className="card-img"
            alt="Background"
            height="500px"
            style={{
              width: "500px",
              height: "500px",
              objectFit: "cover",
              float: "left",
              marginLeft: "800px",
            }}
          />

          <div className="card-img-overlay d-flex flex-column 
           justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-border mb-0">NEW SEASON ARRIVALS</h5>
              <p className="card-text lend fs-2">
               CHECK OUT ALL THE TRENDS
              </p>
            </div>
          </div>
        </div>
        <Products/>
      </div>
    );
};
export default Home;
