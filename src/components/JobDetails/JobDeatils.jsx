import {
  AiOutlineDollar,
  AiOutlineEnvironment,
  AiOutlineMail,
  AiOutlinePhone,
  AiTwotoneContainer,
} from "react-icons/ai";
import { Link, useLoaderData, useParams } from "react-router-dom";

const JobDeatils = () => {
  const { jobId } = useParams();
  const data = useLoaderData();

  const id = parseInt(jobId);
  console.log("Parsed ID:", id);

  // Find the job in the array
  const job = data.find((job) => job.id === id);
  console.log(job);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;

  const { phone, email, address } = contact_information;
  return (
    <div>
      <h2 className="text-xl text-center font-bold my-20">Job Details</h2>
      <div className="my-20 flex gap-8">
        <div className="w-2/3">
          <p className="text-gray-500">
            <span className="font-bold">Job Description:</span>
            {job_description}
          </p>
          <p className="text-gray-500 my-3">
            <span className="font-bold">Job Responsibility:</span>
            {job_responsibility}
          </p>
          <p className="font-bold text-gray-500">Educational Requirements:</p>
          <p className="text-gray-500 mb-3">{educational_requirements}</p>
          <p className="font-bold text-gray-500">Expriences:</p>
          <p className="text-gray-500">{experiences}</p>
        </div>
        <div className="h-1/3 text-gray-500">
          <div className="bg-base-300 p-4 rounded-sm">
            <h3 className="text-xl font-bold -mb-4">Job details</h3>
            <div className="divider"></div>
            <div className="flex items-center gap-1">
              <AiOutlineDollar></AiOutlineDollar>
              <p>
                <span className="font-bold">Salary:</span> {salary} (Per Month)
              </p>
            </div>
            <div className="flex items-center gap-1">
                <AiTwotoneContainer></AiTwotoneContainer>
                <p><span className="font-bold">Job Title: </span>{job_title}</p>
            </div>
            <p className="font-bold mt-4 -mb-4">Contct Information</p>
            <div className="divider"></div>
            <div className="flex items-center gap-1">
              <AiOutlinePhone></AiOutlinePhone>
              <p>
                <span className="font-bold">Phone: </span>
                {phone}
              </p>
            </div>
            <div className="flex items-center gap-1 my-2">
              <AiOutlineMail></AiOutlineMail>
              <p>
                <span className="font-bold">Email: </span>
                {email}
              </p>
            </div>
            <div className="flex items-start gap-1">
              <AiOutlineEnvironment></AiOutlineEnvironment>
              <p className="-mt-1">
                <span className="font-bold">Address: </span>
                {address}
              </p>
            </div>
          </div>
          <Link className="btn bg-gradient-to-r from-pink-500 to-yellow-500 text-white mt-4" to={'/'}>Apply Now</Link>
        </div>
      </div>
    </div>
  );
};

export default JobDeatils;
