import axios from 'axios';
import {useParams} from 'react-router';
import {useQuery} from '@tanstack/react-query';

const applicationDetails = async id => {
    const res = await axios.get(`http://localhost:3000/applications/job/${id}`)
    return res.data

}


const ViewApplication = () => {
    const { id } = useParams();
    const { data: jobId } = useQuery({
        queryKey: ['jobId', id],
        queryFn: () => applicationDetails(id),
    });

    const handleStatusChange = (e, app_id) => {
        console.log(e.target.value, app_id);

        axios.patch(`http://localhost:3000/applications/${app_id}`, { status: e.target.value })
            .then(res => {
                console.log(res.data)

            })
            .catch(error => console.log(error))

    }

    return (
        <div>
            <h2 className="text-4xl"> {jobId?.length} Applications for: {id}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        jobId?.map(application => <tr key={application._id}>
                            <th>1</th>
                            <td>{application.applicant}</td>
                            <td>Quality Control Specialist</td>
                            <td>
                                <select onChange={e => handleStatusChange(e, application._id)} defaultValue={application.status} className="select">
                                    <option disabled={true}>Update Status</option>
                                    <option>Pending</option>
                                    <option>Interview</option>
                                    <option>Hired</option>
                                    <option>Rejected</option>
                                </select>
                            </td>
                        </tr>)
                    }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplication;