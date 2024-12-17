import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyApplications = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [jobs, setJobs] = useState([]);
  //   console.log(jobs);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://mz-job-portal-server.vercel.app/job-application/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your application has been deleted.",
                icon: "success",
              });
              const remainingJobs = jobs.filter(
                (jobData) => jobData._id !== id
              );
              setJobs(remainingJobs);
            }
          });
      }
    });
  };

  useEffect(() => {
    // fetch(`https://mz-job-portal-server.vercel.app/job-application?email=${user.email}`)
    //   .then((response) => response.json())
    //   .then((data) => setJobs(data));

    // axios.get(`https://mz-job-portal-server.vercel.app/job-application?email=${user.email}`, {withCredentials: true})
    // .then(res => setJobs(res.data))

    axiosSecure.get(`/job-application?email=${user.email}`)
    .then(res => setJobs(res.data))

  }, [user.email]);

  return (
    <div>
      <h2 className="md:text-4xl text-2xl text-center font-bold mb-8">
        My Applications: {jobs.length}
      </h2>

      <div className="overflow-x-auto">
          {jobs.length > 0 ? (
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-teal-600 *:text-white *:font-bold">
              <th>Serial No.</th>
              <th>Info</th>
              <th>Job Type</th>
              <th>Salary</th>
              <th>Deadline</th>
              <th>Action</th>
            </tr>
          </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={job._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={job?.company_logo} alt={job?.company} />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold">{job?.title}</div>
                        <div className="text-sm font-semibold opacity-50">
                          {job?.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold">{job?.jobType}</td>
                  <td className="font-semibold">
                    {job?.salaryRange?.min} - {job?.salaryRange?.max}
                    {job?.salaryRange?.currency}
                  </td>
                  <td className="font-semibold">{job?.applicationDeadline}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(job?._id)}
                      className="btn btn-error btn-xs text-white font-medium"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
        </table>
          ) : (
            <p className="text-xl text-center text-rose-600 font-bold">
              Application Not Found
            </p>
          )}
      </div>
    </div>
  );
};

export default MyApplications;
