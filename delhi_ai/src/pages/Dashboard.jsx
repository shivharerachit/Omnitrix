import { Card, Title, AreaChart, BarChart, DonutChart } from '@tremor/react';
import { motion } from 'framer-motion';
import { FaBolt, FaSun, FaIndustry } from 'react-icons/fa';

const chartdata = [
  { date: '00:00', load: 2500 },
  { date: '04:00', load: 2000 },
  { date: '08:00', load: 4000 },
  { date: '12:00', load: 6000 },
  { date: '16:00', load: 8300 },
  { date: '20:00', load: 7500 },
];

const distributionData = [
  { sector: 'Domestic', value: 65 },
  { sector: 'Commercial', value: 25 },
  { sector: 'Industrial', value: 10 },
];

function Dashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Current Load", value: "6,240 MW", icon: <FaBolt className="text-yellow-500" />, color: "blue" },
          { title: "Peak Today", value: "8,300 MW", icon: <FaBolt className="text-red-500" />, color: "red" },
          { title: "Solar Generation", value: "1,200 MW", icon: <FaSun className="text-orange-500" />, color: "green" }
        ].map((metric, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card decoration="top" decorationColor={metric.color} className="hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full bg-${metric.color}-50`}>
                  {metric.icon}
                </div>
                <div>
                  <Title>{metric.title}</Title>
                  <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                </div>
              </div>
              <div className="mt-4 h-2 bg-gray-100 rounded-full">
                <div className={`h-2 bg-${metric.color}-500 rounded-full animate-pulse`} style={{ width: '70%' }}></div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <Title>24-Hour Load Profile</Title>
          <AreaChart
            className="h-72 mt-4"
            data={chartdata}
            index="date"
            categories={["load"]}
            colors={["blue"]}
            valueFormatter={(value) => `${value.toLocaleString()} MW`}
            showAnimation={true}
          />
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="bg-gradient-to-br from-orange-50 to-yellow-50">
            <Title>Weather Impact</Title>
            <div className="mt-4 space-y-4">
              {[
                { label: "Temperature", value: "38°C", color: "text-red-500" },
                { label: "Humidity", value: "65%", color: "text-blue-500" },
                { label: "Wind Speed", value: "12 km/h", color: "text-green-500" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{item.label}</span>
                  <span className={`font-bold ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
            <Title>Load Distribution</Title>
            <DonutChart
              className="h-52 mt-4"
              data={distributionData}
              category="value"
              index="sector"
              colors={["blue", "cyan", "indigo"]}
              showAnimation={true}
            />
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Dashboard;