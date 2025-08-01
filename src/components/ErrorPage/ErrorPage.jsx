
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-sm mx-auto my-30'>
            <h2 className='text-xl font-extrabold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent mb-8 text-center'>Page not found!</h2>
            <Link to={'/'} className="btn bg-gradient-to-r from-pink-500 to-yellow-500 text-white block mx-auto py-2">Back to Home page</Link>
        </div>
    );
};

export default ErrorPage;