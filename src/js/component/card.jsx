import React from "react";

export const Card = () => {
    return(
    <div className="card m-3">
        <img src="https://marbslifestyle.com/wp-content/uploads/2023/03/drone-horizontal-7.jpg" className="card-img-top" alt="Marbella"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

    )
};