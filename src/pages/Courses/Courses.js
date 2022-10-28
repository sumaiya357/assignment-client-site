import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseDetails2 from '../CourseDetails2/CourseDetails2';



const Courses = () => {
    const alldata = useLoaderData()
    console.log(alldata)
    return (
        <div className='d-lg-flex d-block mt-5 ms-5 '>
            <div className='border border-black col-8' >
            <h2>Course:{alldata.length}</h2>
            {
                alldata.map(data => <CourseDetails2
                key={data._id}
                data={data}>

                </CourseDetails2>)
            }
           
            </div>
            <div className='m-5 col-4 '>
              
            <h2>Course List</h2>
           {/* {
            alldata.map(data => <LeftNavDetails
                key={data._id}
                data={data}>

                </LeftNavDetails>)
             } */}
          
           {
                alldata.map(data =>
                    <p >
                        <Link to={`/category/${data._id}`} className='text-decoration-none'>{data.title}</Link>
                    </p>)
            } 
            
        </div>
        </div>
            
    );
};

export default Courses;