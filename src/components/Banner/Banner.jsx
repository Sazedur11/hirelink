import user from '../../assets/images/user.png'
import cover from '../../assets/images/bg1.png'


const Banner = () => {
  return (
    <div className="hero pt-12 bg-auto bg-no-repeat bg-left-bottom" style={{ backgroundImage: `url(${cover})` }}>
      <div className="hero-content flex-col justify-between lg:flex-row-reverse pb-0">
        <img
          src={user}
          className="w-1/2"
        />
        <div className='h-1/2'>
          <h1 className="text-7xl font-bold leading-[80px]">One Step <br /> Closer To Your <br /> <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">Dream Job</span></h1>
          <p className="py-6">
           Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.
          </p>
          <button className="btn bg-gradient-to-r from-pink-500 to-yellow-500 text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
