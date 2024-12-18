import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";

const HotJobs = ({currentPage, items}) => {
    const [jobs, setJobs] = useState([]);
    // console.log(jobs);

    useEffect(() => {
        fetch(`https://mz-job-portal-server.vercel.app/jobs-collection?page=${currentPage}&size=${items}`)
        .then(res => res.json())
        .then(data => setJobs(data))
      }, [currentPage, items]);    

    return (
        <div className="lg:mx-0 mx-6 my-10">
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job} />)
                }
            </div>
        </div>
    );
};

export default HotJobs;