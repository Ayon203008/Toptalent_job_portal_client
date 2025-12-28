import React, { use } from "react";
import JobsCard from "./JobsCard";

const HotJobs = ({ JobsPromise }) => {
  const jobs = use(JobsPromise);

  return <div className="grid grid-cols-3 gap-5">
    {
        jobs.map((job)=><JobsCard key={job._id} job={job}></JobsCard>)
    }
  </div>;
};

export default HotJobs;
