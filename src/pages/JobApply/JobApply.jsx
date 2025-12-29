import React from "react";
import { use } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
const JobApply = () => {
  const { id: jobId } = useParams(); // * getting the job information
  const { user } = use(AuthContext); // * getting the user information
  console.log(jobId, user);

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant: user.email,
      linkedin,
      github,
      resume,
    };
    // ! post the data using axios , must install the axios
    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data);
        // ! implementaion of sweet alert (****)
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been Submited",
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
    <div className="text-center flex justify-center">
      <form
        onSubmit={handleApplyFormSubmit}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <legend className="fieldset-legend text-2xl">FIll up the form</legend>

        <label className="label">Linkedin Profile Link</label>
        <input
          type="url"
          name="linkedin"
          className="input"
          placeholder="Linkedin profile Link"
        />

        <label className="label">Github</label>
        <input
          type="url"
          name="github"
          className="input"
          placeholder="Github Link"
        />

        <label className="label">Resume </label>
        <input
          type="url"
          name="resume"
          className="input"
          placeholder="Resume Link"
        />
        <input type="submit" className="btn btn-success" value="Apply" />
      </form>
    </div>
  );
};

export default JobApply;
