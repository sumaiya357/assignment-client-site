import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeDetails from '../HomeDetails/HomeDetails';

const Home = () => {
    const alldata = useLoaderData()
    console.log(alldata)
    return (
        <div>
            {/* <h2>Home:{alldata.length}</h2> */}
            {
                alldata.map(data => <HomeDetails
                key={data.id}
                data={data}>

                </HomeDetails>)
            }
        </div>
    );
};

export default Home;