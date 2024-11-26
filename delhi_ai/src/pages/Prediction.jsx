import { Card, Title, Button, Select, SelectItem } from '@tremor/react';

function Prediction() {
  return (
    <div className="space-y-6">
      <Card>
        <Title>Load Prediction Parameters</Title>
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Time Period</label>
              <Select className="mt-1">
                <SelectItem value="24h">Next 24 Hours</SelectItem>
                <SelectItem value="7d">Next 7 Days</SelectItem>
                <SelectItem value="30d">Next 30 Days</SelectItem>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Region</label>
              <Select className="mt-1">
                <SelectItem value="all">All Delhi</SelectItem>
                <SelectItem value="north">North Delhi</SelectItem>
                <SelectItem value="south">South Delhi</SelectItem>
                <SelectItem value="east">East Delhi</SelectItem>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Temperature Range</label>
              <div className="flex gap-2 mt-1">
                <input type="number" className="w-full rounded-md border-gray-300" placeholder="Min" />
                <input type="number" className="w-full rounded-md border-gray-300" placeholder="Max" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Humidity (%)</label>
              <input type="number" className="mt-1 w-full rounded-md border-gray-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Wind Speed (km/h)</label>
              <input type="number" className="mt-1 w-full rounded-md border-gray-300" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Special Conditions</label>
            <div className="mt-2 space-x-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="ml-2">Public Holiday</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="ml-2">Weekend</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="ml-2">Special Event</span>
              </label>
            </div>
          </div>

          <Button size="lg" color="blue" className="w-full">
            Generate Prediction
          </Button>
        </div>
      </Card>

      <Card>
        <Title>Prediction Results</Title>
        <div className="mt-4">
          {/* Prediction results will be displayed here after ML model processing */}
          <p className="text-gray-500 text-center">Run prediction to see results</p>
        </div>
      </Card>
    </div>
  );
}

export default Prediction;