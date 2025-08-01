import { useEffect, useState } from "react";
import JobCategory from "../JobCategory/JobCategory";


const JobCategories = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
        .then (res => res.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div className="my-16">
            <h2 className="text-4xl font-bold text-center mb-4">Job Category List</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid md:grid-cols-4 gap-4 my-12">
                {
                    jobs.map(job => <JobCategory key={job.id} job={job}></JobCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategories;