import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const [postedJobs, setPostedJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPostedJobs(data));
  }, [user?.email]);

  return (
    <div>
      <h2 className="md:text-3xl text-2xl font-bold text-center mb-8">
        My Posted Jobs: {postedJobs.length}
      </h2>

      <div className="overflow-x-auto">
          {postedJobs.length > 0 ? (
        <table className="table">
          {/* head */}
          <thead className="bg-fuchsia-600 *:text-white/80 *:font-bold">
            <tr>
              <th>No.</th>
              <th>Job Title</th>
              <th>Location</th>
              <th>Salary</th>
              <th>Deadline</th>
              <th>Application Count</th>
              <th>Applications</th>
            </tr>
          </thead>
            <tbody>
              {postedJobs.map((job, index) => (
                <tr key={job._id} className="*:font-semibold">
                  <th>{index + 1}</th>
                  <td>{job?.title}</td>
                  <td>{job?.location}</td>
                  <td>
                    {job?.salaryRange?.min} - {job?.salaryRange?.max}{" "}
                    {job?.salaryRange?.currency}
                  </td>
                  <td>{job?.applicationDeadline}</td>
                  <td>{job?.applicationCount}</td>
                  <td>
                    <Link to={`/viewApplications/${job._id}`}>
                      <button className="btn btn-link font-bold">
                        View Applications
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
              </table>
          ) : (
            <p className="text-xl text-center text-rose-600 font-bold">
              Posted Jobs is Empty
            </p>
          )}
      </div>
    </div>
  );
};

export default MyPostedJobs;
