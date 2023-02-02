import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function App() {
  const data = [{name: 'Page A', uv: 500, pv: 2400, amt:2400}, {name: 'Page B', uv: 250, pv: 2400, amt:2400}, {name: 'Page C', uv: 100, pv: 2400, amt:2400}]

  return (
    <div>
      <h2>Recharts 연습용 페이지</h2>

      <div className="Wrapper">
        <LineChart width={400} height={400} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
}

export default App;
