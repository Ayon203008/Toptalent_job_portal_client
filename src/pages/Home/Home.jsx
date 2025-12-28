import React, { Suspense } from "react";
import Banner from "./Banner/Banner";
import HotJobs from "./HotJobs";

  const JobsPromise = fetch("http://localhost:3000/jobs").then((res) => {
  return  res.json() // * correct
  });
  
const Home = () => {

  return (
    <div>
      <Banner></Banner>
     <div className="max-w-11/12 gap-5 mx-auto">

        <HotJobs JobsPromise={JobsPromise}></HotJobs>
     </div>
     
    </div>
  );
};

export default Home;
