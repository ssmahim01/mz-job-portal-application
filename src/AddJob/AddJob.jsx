import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
    const {user} = useAuth();
    const navigate = useNavigate();

  const handleAddJob = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const initialFormData = Object.fromEntries(formData.entries());

    const { min, max, currency, ...newJob } = initialFormData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    //    console.log(newJob);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Job has been submitted",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/myPostedJobs");
        }
      });
  };

  return (
    <div className="my-20">
      <div className="flex md:flex-row flex-col-reverse justify-between items-center md:gap-0 lg:gap-8 gap-10 md:mr-10">
        <div className="md:w-full">
          <h1 className="text-center md:text-4xl text-3xl font-bold mb-10">
            Post A New Job
          </h1>
          <div className="card bg-base-200 lg:w-3/5 md:w-4/5 w-full mx-auto shadow-lg">
            <form className="card-body" onSubmit={handleAddJob}>
              {/* Job Title */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Job Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Job Title"
                  className="input input-bordered md:w-full w-80"
                  required
                />
              </div>

              {/* Job Location */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Job Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Job Location"
                  className="input input-bordered md:w-full w-80"
                  required
                />
              </div>

              {/* Company Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Company Name</span>
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="input input-bordered md:w-full w-80"
                  required
                />
              </div>

              {/* Job Type */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Job Type</span>
                </label>
                <select defaultValue="Pick a Job Type"
                  name="jobType"
                  className="input input-bordered select select-ghost md:w-full w-80 bg-white"
                >
                  <option disabled>Pick a Job Type</option>
                  <option>Full-time</option>
                  <option>Intern</option>
                  <option>Part-time</option>
                  <option>Hybrid</option>
                  <option>Remote</option>
                </select>
              </div>

              {/* Job Category */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Job Category</span>
                </label>
                <select defaultValue="Pick a Job Category"
                  name="category"
                  className="input input-bordered select select-ghost md:w-full w-80 bg-white"
                >
                  <option disabled>Pick a Job Category</option>
                  <option>Engineering</option>
                  <option>Marketing</option>
                  <option>Finance</option>
                  <option>Teaching</option>
                </select>
              </div>

              {/* Salary Range */}
              <div>
                <label className="label">
                  <span className="label-text font-bold">Salary Range</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-end">
                  <div className="form-control">
                    <input
                      type="number"
                      name="min"
                      placeholder="Min"
                      className="input input-bordered md:w-full w-80"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <input
                      type="number"
                      name="max"
                      placeholder="Max"
                      className="input input-bordered md:w-full w-80"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <select defaultValue="Currency"
                      name="currency"
                      className="input input-bordered select select-ghost md:w-full w-80 bg-white"
                    >
                      <option disabled>Currency</option>
                      <option>BDT</option>
                      <option>USD</option>
                      <option>EURO</option>
                      <option>Pound</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Job Description</span>
                </label>
                <textarea
                  name="description"
                  className="textarea min-h-32 textarea-bordered"
                  placeholder="Job Description"
                  required
                ></textarea>
              </div>

              {/* Job Requirements */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Job Requirements</span>
                </label>
                <textarea
                  name="requirements"
                  className="textarea min-h-28 textarea-bordered"
                  placeholder="Put each requirement in a new line"
                  required
                ></textarea>
              </div>

              {/* Job Responsibilities */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">
                    Job Responsibilities
                  </span>
                </label>
                <textarea
                  name="responsibilities"
                  className="textarea min-h-32 textarea-bordered"
                  placeholder="Write each responsibility in a new line"
                  required
                ></textarea>
              </div>

              {/* Application Deadline */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Application Deadline</span>
                </label>
                <input
                  type="date"
                  name="applicationDeadline"
                  className="input input-bordered md:w-full w-80"
                  required
                />
              </div>

              {/* HR Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">HR Name</span>
                </label>
                <input
                  type="text"
                  name="hr_name"
                  readOnly
                  defaultValue={user?.displayName}
                  className="input input-bordered md:w-full w-80"
                  required
                />
              </div>

              {/* HR Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">HR Email</span>
                </label>
                <input
                  type="email"
                  name="hr_email"
                  readOnly
                  defaultValue={user?.email}
                  className="input input-bordered md:w-full w-80"
                  required
                />
              </div>

              {/* Company Logo */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Company Logo</span>
                </label>
                <input
                  type="url"
                  name="company_logo"
                  placeholder="Company Logo"
                  className="input input-bordered md:w-full w-80"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button className="btn bg-amber-600 text-lg text-white font-bold rounded-full">
                  Submit Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
