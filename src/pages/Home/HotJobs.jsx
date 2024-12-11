import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/jobs")
        .then(response => response.json())
        .then(data => setJobs(data))
    } ,[]);

    return (
        <div className="my-20">
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job} />)
                }
            </div>
        </div>
    );
};

export default HotJobs;