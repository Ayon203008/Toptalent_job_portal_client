import React from "react";
import { NavLink, useLoaderData } from "react-router";

const JobDetails = () => {
  const { title, company,_id } = useLoaderData();
  return (
    <div>
      <h1 className="text-4xl text-center"> Job : {company}</h1>
      <NavLink to={`/jobApply/${_id}`}>
        <button className="btn btn-secondary px-5">Apply now</button>
      </NavLink>
    </div>
  );
};

export default JobDetails;
