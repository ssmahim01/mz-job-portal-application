import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const {user} = useAuth();

  const submitJobApplication = (e) => {
    e.preventDefault();

    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const gitHub = form.gitHub.value;
    const resume = form.resume.value;

    const applyInfo = {
      job_id: id,
      applicant_email: user?.email,
      linkedIn,
      gitHub,
      resume,
    };

    // console.log(applyInfo);

    fetch('http://localhost:5000/job-applications', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(applyInfo)
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      if(data.insertedId){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your application has been submitted",
          showConfirmButton: false,
          timer: 2000
        });
      }
    })
  };

  return (
    <div className="my-20">
      <div className="flex md:flex-row flex-col-reverse justify-between items-center md:gap-0 lg:gap-8 gap-10 md:mr-10">
        <div className="md:w-full">
          <h1 className="text-center md:text-4xl text-3xl font-bold mb-10">
            Apply For Job
          </h1>
          <div className="card bg-base-200 lg:w-1/2 md:w-4/5 w-full mx-auto shadow-lg">
            <form onSubmit={submitJobApplication} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">LinkedIn URL</span>
                </label>
                <input
                  type="url"
                  name="linkedIn"
                  placeholder="LinkedIn URL"
                  className="input input-bordered md:w-full w-80"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">GitHub URL</span>
                </label>
                <input
                  type="url"
                  name="gitHub"
                  placeholder="GitHub URL"
                  className="input input-bordered md:w-full w-80"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Resume URL</span>
                </label>
                <input
                  type="url"
                  name="resume"
                  placeholder="Resume URL"
                  className="input input-bordered md:w-full w-80"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-teal-600 text-lg text-white font-bold rounded-full">
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
