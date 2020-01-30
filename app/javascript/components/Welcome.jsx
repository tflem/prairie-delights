import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Prairie Delights</h1>
        <p className="lead">
          The best in homemade meals and delicacies from the Canadian prairies.
        </p>
        <hr className="my-4" />
        <Link to="/recipes" className="btn btn-lg custom-button" role="button">
          View Recipes
        </Link>
      </div>
    </div>
  </div>
);
