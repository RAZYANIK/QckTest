import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';

const YourPerformanceStat = () => {
    const topic = useLoaderData().data;


    return (
        <div>

            <Chart></Chart>



        </div>
    );
};

export default YourPerformanceStat;