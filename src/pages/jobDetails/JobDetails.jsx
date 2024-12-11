import { FaMapMarkerAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const jobData = useLoaderData();
  // console.log(jobData);
  const {
    company,
    company_logo,
    applicationDeadline,
    location,
    title,
    description,
  } = jobData;

  return (
    <div className="my-16 w-11/12 mx-auto">
      <div className="flex flex-col gap-4 border border-gray-100 rounded-lg shadow-md p-4">
        <div className="flex md:flex-row flex-col md:gap-0 gap-6 justify-between items-center">
          <div className="md:w-1/2 flex gap-2 items-center">
            <figure className="w-14 h-14">
              <img className="w-full h-full" src={company_logo} alt={company} />
            </figure>

            <div>
              <h3 className="text-lg font-semibold">{company}</h3>
              <p className="font-medium flex items-center">
                <FaMapMarkerAlt /> {location}
              </p>
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-600 font-medium">{description}</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h4 className="flex-1 text-lg text-gray-700 font-semibold">
            Deadline: {applicationDeadline}
          </h4>

          <button className="btn btn-info text-lg text-white font-bold rounded-full px-8">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
