import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const jobApplications = useLoaderData();

  const handleStatusUpdate = (e, applicationId) => {
    // console.log(e.target.value, applicationId);

    const statusData = {
      status: e.target.value,
    };

    fetch(`http://localhost:5000/job-applications/${applicationId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(statusData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Status is ${e.target.value}`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div className="md:w-4/5 w-11/12 mx-auto">
      <h2 className="md:text-3xl text-2xl text-center font-bold mb-8">
        Applications: {jobApplications.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-violet-600 *:text-white/90 *:font-bold">
            <tr>
              <th>Serial.</th>
              <th>Applicant Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobApplications.map((application, index) => (
              <tr key={application._id} className="*:font-semibold">
                <th>{index + 1}</th>
                <td>{application?.applicant_email}</td>
                <td>
                  <select
                    onChange={(e) => handleStatusUpdate(e, application._id)}
                    defaultValue={application.status || "Change Status"}
                    className="select select-bordered select-xs w-full max-w-xs *:font-semibold"
                  >
                    <option disabled>Change Status</option>
                    <option>Under Review</option>
                    <option>Set Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
