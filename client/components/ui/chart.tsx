// client/components/ui/chart.tsx
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface ChartProps {
  data: { name: string; value: number }[];
}

export function Chart({ data }: ChartProps) {
  return (
    <div className="w-full h-64 bg-white rounded-lg shadow p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} />
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
