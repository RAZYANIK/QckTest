import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';


const Chart = ({ topic }) => {
    // const { total } = topic;
    // const marks = total;
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
            <ResponsiveContainer width="100%" height="100%"></ResponsiveContainer>
            <LineChart width={500} height={400} data={data}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
            </LineChart>
        </div>
    );
};

export default Chart;