import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

function EnergyMix() {
    const [data, setData] = useState([]);

    // Using state hook to connect to the API
    useEffect(() => {
        axios.get('https://api.carbonintensity.org.uk/generation')
            .then(response => {
                setData(response.data.data.generationmix);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Returning the JSX and fetching the data from the API to the chart
    return (
        <div>
            <h1>UK Energy Generation Mix</h1>
            <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="fuel" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="perc" fill="#8884d8" name="Percentage" />
            </BarChart>
        </div>
    );
}


export default EnergyMix;
