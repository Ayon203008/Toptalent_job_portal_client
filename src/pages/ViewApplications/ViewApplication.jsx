import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const ViewApplication = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();


  const handleStatusChnage = (e,app_id)=>{
    console.log(e.target.value,app_id)
    axios.patch(`http://localhost:3000/applications/${app_id}`,{status:e.target.value})
    .then(result=>{
        console.log(result)
        alert("updated")
    })
    .catch((error)=>{
        console.log(error)
    })
  }



  return (
    <div>
      <h2 className="text-4xl text-center">
        {" "}
        {applications.length} Applications for jobId : {job_id}
      </h2>

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
            {applications.map((application) => (
              <tr>
                <th>1</th>
                <td>{application.applicant}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select defaultChecked={application.status} onChange={e=>handleStatusChnage(e,application._id)} className="select">
                    <option disabled={true}>Upgrade Status</option>
                    <option>Pending</option>
                    <option>Reject</option>
                    <option>ShortList</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
