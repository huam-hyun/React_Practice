import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

const data = [
  { name: 'A', value: 10, a: 1 },
  { name: 'B', value: 20, a: 2 },
  { name: 'C', value: 30, a: 3 },
  { name: 'D', value: 40, a: 4 },
  { name: 'E', value: 50, a: 5 },
];

const colorMap = {
  A: '#0088FE',
  B: '#00C49F',
  C: '#FFBB28',
  D: '#FF8042',
  E: '#8884d8',
  1: '#abc',
  2: '#def',
  3: '#abd',
  4: '#eff',
  5: '#fef'
};

const CustomBarChart = () => {
  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" stackId="a">
        {data.map((entry, index) => {
          console.log(entry)
          return (<Cell key={`cell-${index}`} fill={colorMap[entry.name]} />)
        })}
      </Bar>
      <Bar dataKey="a" stackId="a">
        {data.map((entry, index) => {
          console.log(entry)
          return (<Cell key={`cell-${index}`} fill={colorMap[entry.a]} />)
        })}
      </Bar>
    </BarChart>
  );
};

export default CustomBarChart;