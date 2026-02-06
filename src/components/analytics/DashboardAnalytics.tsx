// DashboardAnalytics.tsx - Custom analytics dashboard that complements Tally
import React from 'react';
import { BarChart, PieChart, LineChart } from './Charts';

export default function DashboardAnalytics() {
  // Sample data - in real app, this would come from API or Tally integration
  const revenueData = {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      { label: 'Revenue', data: [120000, 150000, 180000, 210000, 190000, 220000] },
      { label: 'Expenses', data: [80000, 90000, 110000, 100000, 95000, 110000] }
    ]
  };

  const gstData = {
    labels: ['CGST', 'SGST', 'IGST', 'Cess'],
    values: [45000, 45000, 25000, 5000]
  };

  const ageingData = {
    labels: ['Current', '0-30 days', '31-60 days', '61-90 days', '90+ days'],
    debtors: [150000, 80000, 40000, 20000, 10000],
    creditors: [90000, 60000, 30000, 15000, 5000]
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Revenue vs Expenses */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue vs Expenses</h3>
        <div className="h-64">
          <BarChart data={revenueData} />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-green-600">₹3,20,000</p>
            <p className="text-sm text-gray-600">Total Revenue</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-red-600">₹1,95,000</p>
            <p className="text-sm text-gray-600">Total Expenses</p>
          </div>
        </div>
      </div>

      {/* GST Breakdown */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">GST Breakdown</h3>
        <div className="h-64 flex items-center justify-center">
          <PieChart data={gstData} />
        </div>
        <div className="mt-4 text-center">
          <p className="text-2xl font-bold text-blue-600">₹1,15,000</p>
          <p className="text-sm text-gray-600">Total GST Collected</p>
        </div>
      </div>

      {/* Ageing Analysis */}
      <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Debtors & Creditors Ageing</h3>
        <div className="h-64">
          <LineChart data={ageingData} />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-xl font-bold text-blue-600">₹3,00,000</p>
            <p className="text-sm text-gray-600">Total Debtors</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-green-600">₹2,00,000</p>
            <p className="text-sm text-gray-600">Total Creditors</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
          <p className="text-2xl font-bold text-green-700">₹1,25,000</p>
          <p className="text-sm text-green-600 mt-1">Current Ratio</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
          <p className="text-2xl font-bold text-blue-700">45%</p>
          <p className="text-sm text-blue-600 mt-1">Gross Margin</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-center">
          <p className="text-2xl font-bold text-yellow-700">32</p>
          <p className="text-sm text-yellow-600 mt-1">Days Sales Outstanding</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
          <p className="text-2xl font-bold text-purple-700">₹75,000</p>
          <p className="text-sm text-purple-600 mt-1">Working Capital</p>
        </div>
      </div>
    </div>
  );
}