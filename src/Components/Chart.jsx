import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, { PureComponent } from 'react';


const Chart = ({ bookArray }) => {

    // console.log(bookArray)
    return (
        <div>

            <BarChart width={1100} height={300} data={bookArray}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='bookName' />

                <YAxis />

                <Tooltip></Tooltip>
                <Bar dataKey="totalPages" barSize={40} fill="red" />

            </BarChart>

        </div>
    );
};

export default Chart;