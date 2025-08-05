import { useLoaderData } from "react-router-dom";
import bg1 from "../../assets/images/bg1.png";
import { useEffect, useState } from "react";
import { getStoredJobList } from "../../utility/addToDB";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {

    const allJobs = useLoaderData();
    

    const [jobList, setJobList] = useState([])

    useEffect(() =>{
        const storedJobList = getStoredJobList()

        const storedJobListInt = storedJobList.map(id => parseInt(id))
        console.log(storedJobListInt)
        const jobAppliedList = allJobs.filter(job => storedJobListInt.includes(job.id))
        setJobList(jobAppliedList)

    },[])

    console.log(jobList.job)

  return (
    <div>
      <div
        className="hero bg-auto bg-no-repeat bg-left-bottom"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <h2 className="text-xl font-bold py-30">Applied Jobs</h2>
      </div>
        <div className="w-4/5 mx-auto my-20">
            
            {
              jobList.map((job) => <AppliedJob key={job.id} job={job}></AppliedJob>)
            }
        </div>
    </div>
  );
};

export default AppliedJobs;
