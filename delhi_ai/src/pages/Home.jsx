import { Link } from 'react-router-dom';
import { Card, Title, Text, Metric, Button } from '@tremor/react';
import { motion } from 'framer-motion';
import { FaBolt, FaSun, FaChartLine, FaCog, FaLeaf, FaIndustry, FaHome, FaBuilding } from 'react-icons/fa';
import { useState } from 'react';

function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      title: "AI-Powered Predictions",
      description: "Advanced machine learning models predict electricity demand with high accuracy.",
      icon: <FaChartLine className="text-indigo-500" size={32} />,
      color: "bg-indigo-50"
    },
    {
      title: "Real-time Monitoring",
      description: "Track Delhi's power consumption with interactive dashboards.",
      icon: <FaBolt className="text-yellow-500" size={32} />,
      color: "bg-yellow-50"
    },
    {
      title: "Weather Integration",
      description: "Seamless integration of weather data for accurate predictions.",
      icon: <FaSun className="text-orange-500" size={32} />,
      color: "bg-orange-50"
    },
    {
      title: "Smart Analytics",
      description: "Comprehensive analysis tools for understanding consumption patterns.",
      icon: <FaCog className="text-blue-500" size={32} />,
      color: "bg-blue-50"
    }
  ];

  const powerStats = [
    { icon: <FaHome size={24} />, label: "Residential", value: "45%", color: "blue" },
    { icon: <FaBuilding size={24} />, label: "Commercial", value: "30%", color: "yellow" },
    { icon: <FaIndustry size={24} />, label: "Industrial", value: "25%", color: "red" },
    { icon: <FaLeaf size={24} />, label: "Green Energy", value: "15%", color: "green" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/20" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234338ca' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Hero Section */}
      <motion.div 
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="text-center space-y-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 rounded-3xl shadow-xl relative overflow-hidden"
      >
        {/* Power Grid Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'moveBackground 20s linear infinite',
          }} />
        </div>

        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center"
          >
            <FaBolt className="text-blue-600 text-4xl" />
          </motion.div>
          
          <h1 className="text-5xl font-bold sm:text-7xl">
            Delhi Power AI
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-100 mt-4">
            Next-generation artificial intelligence for precise electricity demand projection
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link to="/dashboard">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                View Dashboard
              </Button>
            </Link>
            <Link to="/predict">
              <Button size="lg" variant="secondary" className="border-white text-white hover:bg-blue-700">
                Try Predictions
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Live Power Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {powerStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-white/90 backdrop-blur">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full bg-${stat.color}-100 text-${stat.color}-500`}>
                  {stat.icon}
                </div>
                <div>
                  <Text>{stat.label}</Text>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                </div>
              </div>
              <div className="mt-4 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: stat.value }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className={`h-full bg-${stat.color}-500`}
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Live Power Consumption Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <Card className="bg-white/90 backdrop-blur">
          <Title>Live Power Consumption</Title>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <Text>Current Load</Text>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-3xl font-bold text-blue-600"
              >
                6,240 MW
              </motion.div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>0 MW</span>
                <span>5,000 MW</span>
                <span>10,000 MW</span>
              </div>
              <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "62.4%" }}
                  transition={{ duration: 1 }}
                  className="h-full bg-blue-500 rounded-full relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600" />
                </motion.div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-white/90 backdrop-blur">
          <Title>Peak Hours Forecast</Title>
          <div className="mt-4 space-y-4">
            {[
              { time: "Morning Peak (8-11 AM)", load: "5,800 MW", percentage: 70 },
              { time: "Afternoon Peak (2-5 PM)", load: "8,300 MW", percentage: 100 },
              { time: "Evening Peak (7-10 PM)", load: "7,200 MW", percentage: 85 }
            ].map((peak, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <Text>{peak.time}</Text>
                  <Text className="font-semibold">{peak.load}</Text>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${peak.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="h-full bg-gradient-to-r from-yellow-500 to-red-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Interactive Features Section */}
      <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-8 overflow-hidden">
        <Title className="text-center mb-8 text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
          Key Features
        </Title>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-200 ${
                  activeFeature === index ? `${feature.color} border-2 border-${feature.color.split('-')[1]}-200` : 'hover:bg-gray-50'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-center gap-4">
                  {feature.icon}
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full flex items-center justify-center bg-gradient-to-br from-white to-blue-50">
              <div className="text-center p-8">
                <motion.div
                  key={activeFeature}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {features[activeFeature].icon}
                  <Title className="mt-4">{features[activeFeature].title}</Title>
                  <Text className="mt-2">{features[activeFeature].description}</Text>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white">
          <div className="text-center space-y-4">
            <Title className="text-white">Ready to Get Started?</Title>
            <Text className="text-blue-100">
              Experience the power of AI in electricity demand prediction
            </Text>
            <div className="flex justify-center gap-4">
              <Link to="/dashboard">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Explore Dashboard
                </Button>
              </Link>
              <Link to="/predict">
                <Button size="lg" variant="secondary" className="border-white text-white hover:bg-blue-700">
                  Make Predictions
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default Home;