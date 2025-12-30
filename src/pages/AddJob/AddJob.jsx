import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = use(AuthContext);

  // * go to hr email input filed and type defaultValue ={user.email}

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    // * process salary range data
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };
    console.log(newJob);
    // * process requirement
    const requirementsString = newJob.requirements;
    const requirementsDirty = requirementsString.split(",");
    const requirementsClean = requirementsDirty.map((req) => req.trim());
    newJob.requirements = requirementsClean;

    // * process responsibilities

    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());
    newJob.status = "active";

    // * post the data to the backend server
axios.post("http://localhost:3000/jobs", newJob)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleAddJob}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Basic Info</legend>

        <label className="label">Title</label>
        <input
          type="text"
          name="title"
          className="input"
          placeholder="My awesome page"
        />

        <label className="label">Company</label>
        <input
          type="text"
          className="input"
          placeholder="Company"
          name="company"
        />

        <label className="label">Location</label>
        <input
          type="text"
          className="input"
          name="location"
          placeholder="Location"
        />

        <label className="label">Company Logo</label>
        <input
          type="text"
          name="company_logo"
          className="input"
          placeholder="Company Logo"
        />
      </fieldset>

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Job Type</legend>

        <div className="filter">
          <input
            className="btn filter-reset"
            type="radio"
            name="jobType"
            aria-label="All"
          />
          <input
            className="btn"
            type="radio"
            name="On-Site"
            aria-label="On-Site"
            value={"On-Site"}
          />
          <input
            className="btn"
            type="radio"
            name="Remote"
            aria-label="Remote"
            value={"Remote"}
          />
          <input
            className="btn"
            type="radio"
            name="Hybrid"
            aria-label="Hybrid"
            value={"Hybrid"}
          />
        </div>
      </fieldset>

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Job Category</legend>

        <select defaultValue="Pick a color" name="category" className="select">
          <option disabled={true}>Job category</option>
          <option>Engineerng</option>
          <option>Human Resource</option>
          <option>Finance</option>
        </select>
      </fieldset>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Application Deadline</legend>
        <input type="date" name="deadline" className="input" />
      </fieldset>

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Salary details</legend>

        <label className="label">Minimun salary</label>
        <input
          type="text"
          className="input"
          name="min"
          placeholder="My awesome page"
        />

        <label className="label">Maximum Salary</label>
        <input
          type="text"
          name="max"
          className="input"
          placeholder="my-awesome-page"
        />

        <label className="label">Currency</label>
        <select defaultValue="Pick a color" name="currency" className="select">
          <option disabled={true}>Currency</option>
          <option>BDT</option>
          <option>USD</option>
          <option>EURO</option>
        </select>
      </fieldset>

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Job Deescription</legend>
        <textarea className="textarea" placeholder="Bio"></textarea>
      </fieldset>

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Application Requirements</legend>
        <textarea
          className="textarea"
          name="requirements"
          placeholder="Requirements"
        ></textarea>
      </fieldset>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Application Reponsibilities</legend>
        <textarea
          className="textarea"
          name="responsibilities"
          placeholder="Responsibilities"
        ></textarea>
      </fieldset>

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">HR related Info</legend>

        <label className="label">Name</label>
        <input
          type="text"
          name="hr_name"
          className="input"
          placeholder="Hr Name"
        />

        <label className="label">HR Email</label>
        <input
          type="text"
          className="input"
          placeholder="Company"
          defaultValue={user.email}
          name="hr_email"
        />

        <label className="label">Location</label>
        <input
          type="text"
          className="input"
          name="location"
          placeholder="Location"
        />
      </fieldset>
      <button className="btn btn-success">Submit</button>
    </form>
  );
};

export default AddJob;
