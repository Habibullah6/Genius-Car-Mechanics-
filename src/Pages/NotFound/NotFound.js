import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/not-found.png';

const NotFound = () => {
    return (
        <div>
            <div className='w-100'>
            <img src={notFound} alt="" />
            </div>
            <Link to='/home'>
            <button className='btn btn-primary my-3'>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;