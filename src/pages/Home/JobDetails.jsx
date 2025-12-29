import React from "react";
import { useLoaderData } from "react-router";

const JobDetails = () => {
  const { title, company } = useLoaderData();
  return <div>
    <h1 className="text-4xl text-center"> Job : {company}</h1>
    <button className="btn btn-secondary px-5">Apply now</button>
  </div>;
};

export default JobDetails;
