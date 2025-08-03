import { useEffect, useState } from "react";
import Job from "../Job/Job";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 2);
  };


  return (
    <div className="my-8">
      <h2 className="text-4xl font-bold text-center mb-4">Featured Jobs</h2>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        {jobs.slice(0, visibleCount).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
        {visibleCount < jobs.length && (
          <button
            onClick={handleLoadMore}
             className="btn bg-gradient-to-r from-pink-500 to-yellow-500 text-white w-40 mx-auto my-4"
          >
            See All Jobs
          </button>
        )}
        
      </div>
    </div>
  );
};

export default Jobs;
