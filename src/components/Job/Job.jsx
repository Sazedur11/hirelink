import { Link } from "react-router-dom";
import { AiOutlineDollar } from "react-icons/ai";
import { AiOutlineEnvironment } from "react-icons/ai";



const Job = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary, id} = job;
    return (
        <div>
            <img className="w-30 h-8 my-4" src={logo} alt={company_name} />
            <h2 className="text-xl font-bold">{job_title}</h2>
            <p>{company_name}</p>
            <div className="flex gap-4 my-2">
                <p className="px-3 border-1 rounded-sm border-pink-500 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">{remote_or_onsite}</p>
                <p className="px-3 border-1 rounded-sm border-pink-500 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">{job_type}</p>
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
            <Link  className="btn bg-gradient-to-r from-pink-500 to-yellow-500 text-white mt-2" to={`/jobDetails/${id}`}>View Details</Link>
        </div>
    );
};

export default Job;