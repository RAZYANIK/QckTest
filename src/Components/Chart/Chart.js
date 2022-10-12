import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';


const Chart = () => {

    const data = [
        {
            "id": 1,
            "name": "React",
            "total": 8
        },
        {
            "id": 2,
            "name": "JavaScript",
            "total": 9
        },
        {
            "id": 4,
            "name": "CSS",
            "total": 8
        },
        {
            "id": 5,
            "name": "Git",
            "total": 11
        }]

    return (
        <div>

            <LineChart
                width={500}
                height={300}
                data={data}

            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />


                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>


        </div>
    );
};

export default Chart;