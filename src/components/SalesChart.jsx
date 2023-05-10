import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    ay: 'Ocak',
    satis: 4000,
  },
  {
    ay: 'Şubat',
    satis: 3000,
  },
  {
    ay: 'Mart',
    satis: 2000,
  },
  {
    ay: 'Nisan',
    satis: 2780,
  },
  {
    ay: 'Mayıs',
    satis: 1890,
  },
  {
    ay: 'Haziran',
    satis: 2390,
  },
  {
    ay: 'Temmuz',
    satis: 3490,
  },
  {
    ay: 'Ağustos',
    satis: 4900,
  },
  {
    ay: 'Eylül',
    satis: 5000,
  },
  {
    ay: 'Ekim',
    satis: 3800,
  },
  {
    ay: 'Kasım',
    satis: 3990,
  },
  {
    ay: 'Aralık',
    satis: 3000,
  },
];

const SalesChart = () => {
  return (
    <div className="chart-container">
      <h2 className="chart-title ml-2">Satış Grafiği</h2>
      <LineChart width={1750} height={500} data={data}>
        <XAxis dataKey="ay" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="satis" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};

export default SalesChart;
