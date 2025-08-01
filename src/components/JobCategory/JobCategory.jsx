

const JobCategory = ({job}) => {
    console.log(job);
    const {logo, category_name, availability} = job;
    return (
        <div className="bg-base-200 p-6 rounded-md">
            <img src={logo} alt={category_name} 
            className="w-12 p-2 bg-base-300 rounded-sm mb-4"/>
            <h2 className="font-bold my-1">{category_name}</h2>
            <p className="text-sm text-gray-500">{availability}</p>
        </div>
    );
};

export default JobCategory;