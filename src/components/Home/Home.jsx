import Banner from "../Banner/Banner";
import JobCategories from "../JobCategories/JobCategories";
import Jobs from "../Jobs/Jobs";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
      <div className="w-4/5 mx-auto">
      <JobCategories></JobCategories>
      <Jobs></Jobs>
      </div>
    </div>
  );
};

export default Home;
