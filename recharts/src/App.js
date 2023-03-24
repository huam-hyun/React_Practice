import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import CustomBarChart from './CustomBarChart';

const data2 = [
  { name: 'Page A', uv: 4000, color: '#0088FE' },
  { name: 'Page B', uv: 3000, color: '#00C49F' },
  { name: 'Page C', uv: 2000, color: '#FFBB28' },
  { name: 'Page D', uv: 2780, color: '#FF8042' },
  { name: 'Page E', uv: 1890, color: '#AF19FF' },
  { name: 'Page F', uv: 2390, color: '#00A2AE' },
];

function App() {
  const data1 = [{name: 'Page A', uv: 500, pv: 2400, amt:2400}, {name: 'Page B', uv: 250, pv: 2400, amt:2400}, {name: 'Page C', uv: 100, pv: 2400, amt:2400}]

  return (
    <div>
      <h2>Recharts 연습용 페이지</h2>

      <div className="Wrapper">
        <span>
          <LineChart width={400} height={400} data={data1}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name"/>
            <YAxis />
            <Tooltip />
          </LineChart>
        </span>
        <span>
          <CustomBarChart data={data2} />
        </span>
      </div>

      <hr />
    </div>
  );
}

export default App;
