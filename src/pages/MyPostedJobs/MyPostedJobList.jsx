import React from 'react';
import { use } from 'react';

const MyPostedJobList = ({jobsCreatedPromise}) => {
    
    const jobs =  use(jobsCreatedPromise)

    return (
        <div>
            <h1>total job created : {jobs.length}</h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
  {
    jobs.map((job)=> <tr>
        <th>1</th>
        <td>{job.title}</td>
        <td>{job.company}</td>
        <td>{job.deadline}</td>
      </tr>
   )
  }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyPostedJobList;