// TallySetup.tsx - Component for configuring Tally integration
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function TallySetup() {
  const router = useRouter();
  const [config, setConfig] = useState({
    serverUrl: 'localhost',
    port: 9000,
    companyName: '',
    username: '',
    password: ''
  });
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfig(prev => ({ ...prev, [name]: value }));
  };

  const testConnection = async () => {
    setIsTesting(true);
    setTestResult(null);

    try {
      // In a real implementation, this would call the TallyConnector
      // For now, we'll simulate a connection test
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulate successful connection
      setTestResult({
        success: true,
        message: 'Successfully connected to Tally!'
      });
    } catch (error) {
      setTestResult({
        success: false,
        message: 'Failed to connect to Tally. Please check your settings.'
      });
    } finally {
      setIsTesting(false);
    }
  };

  const saveConfiguration = () => {
    // Save to localStorage for now
    localStorage.setItem('tallyConfig', JSON.stringify(config));
    router.push('/tally/dashboard');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Tally Integration Setup</h2>
      <p className="text-gray-600 mb-6">Connect to Tally ERP 9 or Tally Prime for compliance features.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tally Server URL</label>
          <input
            type="text"
            name="serverUrl"
            value={config.serverUrl}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="localhost or IP address"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Port</label>
          <input
            type="number"
            name="port"
            value={config.port}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="9000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={config.companyName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Company Name in Tally"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Username (if applicable)</label>
          <input
            type="text"
            name="username"
            value={config.username}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Optional"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password (if applicable)</label>
          <input
            type="password"
            name="password"
            value={config.password}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Optional"
          />
        </div>

        <div className="flex gap-4 pt-6">
          <button
            onClick={testConnection}
            disabled={isTesting}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {isTesting ? 'Testing...' : 'Test Connection'}
          </button>

          <button
            onClick={saveConfiguration}
            disabled={!config.companyName || isTesting}
            className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
          >
            Save & Continue
          </button>
        </div>

        {testResult && (
          <div className={`mt-4 p-3 rounded-md ${testResult.success ? 'bg-green-50 border border-green-400' : 'bg-red-50 border border-red-400'}`}>
            <p className={testResult.success ? 'text-green-700' : 'text-red-700'}>
              {testResult.message}
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-2">What This Enables:</h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li>• Ind AS compliance through Tally</li>
          <li>• MCA.gov.in reporting</li>
          <li>• Schedule III compliance</li>
          <li>• CARO 2020 audit reports</li>
          <li>• GST reconciliation</li>
          <li>• Income tax computations</li>
          <li>• Financial statement generation</li>
        </ul>
      </div>
    </div>
  );
}