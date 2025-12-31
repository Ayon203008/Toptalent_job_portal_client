import React from "react";
import ApplicationList from "./ApplicationList";
import { Suspense } from "react";
import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";

const myApplicationsPromise = (email) => {
  return fetch(`http://localhost:3000/applications?email=${email}`,{credentials:'include'}).then(
    (res) => res.json()
  );
};
const MyApplications = () => {
  const { user } = use(AuthContext);

  return (
    <div>
      <Suspense fallback={"Loading keep patience"}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
