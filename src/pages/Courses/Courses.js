import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails2 from '../CourseDetails2/CourseDetails2';

const Courses = () => {
    const alldata = useLoaderData()
    console.log(alldata)
    return (
        <div>
            <h2>Course:{alldata.length}</h2>
            {
                alldata.map(data => <CourseDetails2
                key={data.id}
                data={data}>

                </CourseDetails2>)
            }
            </div>
    );
};

export default Courses;