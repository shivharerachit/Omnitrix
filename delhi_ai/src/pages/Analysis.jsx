import { Card, Title, BarChart, LineChart, DonutChart } from '@tremor/react';

const monthlyData = [
  { month: 'Jan', load: 4500 },
  { month: 'Feb', load: 4200 },
  { month: 'Mar', load: 4800 },
  { month: 'Apr', load: 5500 },
  { month: 'May', load: 7200 },
  { month: 'Jun', load: 8300 },
];

const distributionData = [
  { sector: 'Domestic', value: 65 },
  { sector: 'Commercial', value: 25 },
  { sector: 'Industrial', value: 10 },
];

function Analysis() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <Title>Monthly Peak Load Analysis</Title>
          <BarChart
            className="h-72 mt-4"
            data={monthlyData}
            index="month"
            categories={["load"]}
            colors={["blue"]}
          />
        </Card>

        <Card>
          <Title>Load Distribution by Sector</Title>
          <DonutChart
            className="h-72 mt-4"
            data={distributionData}
            category="value"
            index="sector"
            colors={["blue", "cyan", "indigo"]}
          />
        </Card>
      </div>

      <Card>
        <Title>Historical Load Trends</Title>
        <LineChart
          className="h-72 mt-4"
          data={monthlyData}
          index="month"
          categories={["load"]}
          colors={["blue"]}
          yAxisWidth={60}
        />
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <Title>Peak Load Growth</Title>
          <div className="mt-4">
            <div className="text-2xl font-bold text-blue-600">12.5%</div>
            <div className="text-sm text-gray-500">Year over Year</div>
          </div>
        </Card>

        <Card>
          <Title>Load Factor</Title>
          <div className="mt-4">
            <div className="text-2xl font-bold text-blue-600">68.3%</div>
            <div className="text-sm text-gray-500">Average</div>
          </div>
        </Card>

        <Card>
          <Title>Solar Contribution</Title>
          <div className="mt-4">
            <div className="text-2xl font-bold text-blue-600">15.2%</div>
            <div className="text-sm text-gray-500">Of Peak Demand</div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Analysis;