import React, { Suspense } from 'react';

import MyPostedJobList from './MyPostedJobList';
import { jobsCreatedPromise } from '../../api/jobsApi';
import { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const MyPostedJobs = () => {
    const {user}=use(AuthContext)
    return (
        <div>
            <h1 className='text-center text-4xl mt-10'>My posted jobs</h1>
            <Suspense fallback={"loading"}>
            <MyPostedJobList jobsCreatedPromise={jobsCreatedPromise(user.email)}></MyPostedJobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;



