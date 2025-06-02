import React, {Suspense, use} from 'react';
import ApplicationStats from './ApplicationStats.jsx';
import axios from 'axios';
import ApplicationList from './ApplicationList.jsx';
import {AuthCotext} from '../Contexts/AuthProvider.jsx';

const myApplicationsPromise = email => {
    return axios.get(`http://localhost:3000/applications?email=${email}`)
        .then(res => res.data)
}

const MyApplications = () => {
    const {saveUser} = use(AuthCotext)
    return (
        <div>
            <ApplicationStats />
            <Suspense fallback={'loadingg..'}>
                <ApplicationList
                    myApplicationsPromise={myApplicationsPromise(saveUser.email)}
                />
            </Suspense>
        </div>
    );
};

export default MyApplications;