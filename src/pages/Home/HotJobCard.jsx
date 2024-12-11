import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;

  return (
    <div className="card card-compact bg-base-100 w-full shadow-xl">
      <div className="flex gap-3 m-3 items-center">
        <figure>
          <img className="w-16 h-16" src={company_logo} alt={company} />
        </figure>

        <div>
          <h4 className="text-xl font-bold">{company}</h4>
          <div className="flex gap-1 items-center">
            <FaMapMarkerAlt />{" "}
            <p className="text-gray-700 font-medium">{location}</p>
          </div>
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-gray-600 font-medium">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {requirements.map((skill, index) => (
            <p key={index} className="px-2 border shadow-sm text-center rounded-md text-gray-800 font-semibold cursor-pointer hover:text-indigo-600 hover:bg-gray-300">
              {skill}
            </p>
          ))}
        </div>

        <div className="card-actions justify-end items-center mt-4">
          <p className="flex items-center text-gray-800 font-semibold">
            Salary:<FaDollarSign />
            <span className="text-gray-600">
              {salaryRange.min}-{salaryRange.max} {salaryRange.currency}
            </span>
          </p>
          <Link to={`/jobs/${_id}`}>
          <button className="btn bg-emerald-600 text-white font-bold">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
