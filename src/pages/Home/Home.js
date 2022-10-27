import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';

const Home = () => {
    const alldata = useLoaderData()
    console.log(alldata)
    return (
        <div>
            <h2>Home:{alldata.length}</h2>
            {
                alldata.map(data => <CourseDetails
                key={data.id}
                data={data}>

                </CourseDetails>)
            }
        </div>
    );
};

export default Home;