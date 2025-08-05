import { AiOutlineEnvironment, AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    id
  } = job;
  return (
    <div className="md:flex justify-between items-center lg:w-3/4 mx-auto border-1 border-base-300 rounded-xl p-4">
      <div className="md:flex items-center  gap-4">
        <div className="md:bg-base-300 py-8 px-4 rounded-sm">
            <img className="w-30 h-10" src={logo} alt={job_title} />
        </div>
        <div>
          <h2>{job_title}</h2>
          <p>{company_name}</p>
          <div className="flex gap-4 my-2">
            <p className="px-3 border-1 rounded-sm border-pink-500 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
              {remote_or_onsite}
            </p>
            <p className="px-3 border-1 rounded-sm border-pink-500 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
              {job_type}
            </p>
          </div>
          <div className="flex gap-4">
                <div className="flex gap-2 items-center">
                    <AiOutlineEnvironment></AiOutlineEnvironment>
                    <p>{location}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <AiOutlineDollar></AiOutlineDollar>
                    <p>{salary}</p>
                </div>
                
            </div>
        </div>
      </div>
      <div>
        <Link  className="btn bg-gradient-to-r from-pink-500 to-yellow-500 text-white mt-2" to={`/jobDetails/${id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default AppliedJob;
