import React from "react";
import { Link } from "react-router";

const JobsCard = ({job}) => {
    const {_id,company,requirements,company_logo}=job
  return (
    <div className="border-amber-500 border-2 p-5">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={company_logo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
           {company}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
  
           {
            requirements.map((require,index)=>  <div key={index} className="badge badge-outline">{require}</div>)
           }
          </div>
        </div>
        <Link to={`/jobs/${_id}`}>
        <button className="btn btn-primary">Apply Now</button>
        </Link>
      </div>
    </div>
  );
};

export default JobsCard;
