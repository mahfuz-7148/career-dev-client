import React, {Suspense, use} from 'react';
import {AuthCotext} from '../Contexts/AuthProvider.jsx';
import JobLists from './JobLists.jsx';
import axios from 'axios';

const jobsCreatedByPromise = email => {
    return axios.get(`http://localhost:3000/jobs/applications?email=${email}`)
        .then(res => res.data)
}


const MyPostedJobs = () => {
    const {saveUser} = use(AuthCotext)
    return (
        <div>
            <h2>My posted Jobs: </h2>
            <Suspense>
                <JobLists
                    jobsCreatedByPromise={jobsCreatedByPromise(saveUser.email)}
                ></JobLists>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;