"use client";
// TallyTest.tsx - Component for testing Tally integration with sample data
import React, { useState } from 'react';
import TallyConnector from '@/lib/tally-connector';

export default function TallyTest() {
  const [config, setConfig] = useState({
    serverUrl: 'localhost',
    port: 9000,
    companyName: 'Test Company'
  });
  const [testResults, setTestResults] = useState<any[]>([]);
  const [isTesting, setIsTesting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfig(prev => ({ ...prev, [name]: value }));
  };

  const runTests = async () => {
    setIsTesting(true);
    setTestResults([]);
    setConnectionStatus(null);

    const results = [];
    const connector = new TallyConnector(config);

    try {
      // Test 1: Connection
      results.push({
        test: 'Tally Connection',
        status: 'running',
        message: 'Testing connection...'
      });
      setTestResults([...results]);

      const connected = await connector.connect();
      setConnectionStatus({
        success: connected,
        message: connected ? 'Successfully connected to Tally!' : 'Failed to connect to Tally'
      });

      results[0] = {
        test: 'Tally Connection',
        status: connected ? 'success' : 'failed',
        message: connected ? 'Connection established' : 'Connection failed',
        data: connected ? { connected: true } : null
      };
      setTestResults([...results]);

      if (!connected) {
        setIsTesting(false);
        return;
      }

      // Test 2: Company Data
      results.push({
        test: 'Company Data',
        status: 'running',
        message: 'Fetching company data...'
      });
      setTestResults([...results]);

      try {
        const companyData = await connector.getCompanyData();
        results[1] = {
          test: 'Company Data',
          status: 'success',
          message: 'Company data retrieved successfully',
          data: companyData
        };
      } catch (error) {
        results[1] = {
          test: 'Company Data',
          status: 'failed',
          message: 'Failed to get company data',
          error: error instanceof Error ? error.message : 'Unknown error'
        };
      }
      setTestResults([...results]);

      // Test 3: Sample Invoice Import
      results.push({
        test: 'Invoice Import',
        status: 'running',
        message: 'Testing invoice import...'
      });
      setTestResults([...results]);

      try {
        const sampleInvoice = {
          VOUCHER: {
            '@_VCHTYPE': 'Sales',
            '@_ACTION': 'Create',
            DATE: new Date().toISOString().split('T')[0],
            NARRATION: 'Test invoice from hybrid system',
            PARTYLEDGERNAME: 'Cash',
            CSTFORMISSUETYPE: '',
            CSTFORMRECVTYPE: '',
            FBTPAYMENTTYPE: 'Default',
            PERSISTEDVIEW: 'Accounting Invoice',
            VCHGSTCLASS: '',
            ENTEREDBY: 'Admin',
            ENTRYDATE: new Date().toISOString(),
            ALTERID: '',
            VCHKEY: '',
            OLDAUDITENTRIES: '',
            ISINVOICE: 'Yes',
            ALLINVENTORYENTRIES: {
              STOCKITEM: [
                {
                  STOCKITEMNAME: 'Test Product',
                  ISDEEMEDPOSITIVE: 'Yes',
                  RATE: '100',
                  AMOUNT: '100',
                  ACTUALQTY: '1',
                  BILLEDQTY: '1'
                }
              ]
            }
          }
        };

        const importResult = await connector.importVoucher(sampleInvoice);
        results[2] = {
          test: 'Invoice Import',
          status: 'success',
          message: 'Sample invoice imported successfully',
          data: importResult
        };
      } catch (error) {
        results[2] = {
          test: 'Invoice Import',
          status: 'failed',
          message: 'Failed to import invoice',
          error: error instanceof Error ? error.message : 'Unknown error'
        };
      }
      setTestResults([...results]);

      // Test 4: GST Reports
      results.push({
        test: 'GST Reports',
        status: 'running',
        message: 'Fetching GST reports...'
      });
      setTestResults([...results]);

      try {
        const period = `${new Date().getFullYear()}-04-01 to ${new Date().getFullYear()}-03-31`;
        const gstData = await connector.getGSTReports(period);
        results[3] = {
          test: 'GST Reports',
          status: 'success',
          message: 'GST reports retrieved successfully',
          data: gstData
        };
      } catch (error) {
        results[3] = {
          test: 'GST Reports',
          status: 'failed',
          message: 'Failed to get GST reports',
          error: error instanceof Error ? error.message : 'Unknown error'
        };
      }
      setTestResults([...results]);

      // Test 5: Financial Statements
      results.push({
        test: 'Financial Statements',
        status: 'running',
        message: 'Fetching financial statements...'
      });
      setTestResults([...results]);

      try {
        const financialData = await connector.getFinancialStatements();
        results[4] = {
          test: 'Financial Statements',
          status: 'success',
          message: 'Financial statements retrieved successfully',
          data: financialData
        };
      } catch (error) {
        results[4] = {
          test: 'Financial Statements',
          status: 'failed',
          message: 'Failed to get financial statements',
          error: error instanceof Error ? error.message : 'Unknown error'
        };
      }
      setTestResults([...results]);

    } catch (error) {
      console.error('Test error:', error);
    } finally {
      setIsTesting(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-100 text-green-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'running': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Tally Integration Test</h2>
      <p className="text-gray-600 mb-6">Test the connection and data exchange with Tally ERP</p>

      <div className="space-y-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tally Server URL</label>
          <input
            type="text"
            name="serverUrl"
            value={config.serverUrl}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          />
        </div>

        <button
          onClick={runTests}
          disabled={isTesting}
          className={`w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 ${isTesting ? 'cursor-not-allowed' : ''}`}
        >
          {isTesting ? 'Running Tests...' : 'Run Integration Tests'}
        </button>
      </div>

      {connectionStatus && (
        <div className={`mb-6 p-4 rounded-lg ${connectionStatus.success ? 'bg-green-50 border border-green-400' : 'bg-red-50 border border-red-400'}`}>
          <h3 className="font-semibold mb-2">Connection Status</h3>
          <p className={connectionStatus.success ? 'text-green-700' : 'text-red-700'}>
            {connectionStatus.message}
          </p>
        </div>
      )}

      {testResults.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Test Results</h3>
          <div className="space-y-4">
            {testResults.map((result, index) => (
              <div key={index} className={`p-4 rounded-lg ${getStatusColor(result.status)}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{result.test}</h4>
                    <p className="text-sm mt-1">{result.message}</p>
                    {result.error && <p className="text-xs mt-1 text-red-600">Error: {result.error}</p>}
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${result.status === 'success' ? 'bg-green-200 text-green-800' : result.status === 'failed' ? 'bg-red-200 text-red-800' : 'bg-yellow-200 text-yellow-800'}`}>
                    {result.status.toUpperCase()}
                  </span>
                </div>
                {result.data && (
                  <div className="mt-2 text-xs bg-white p-2 rounded border border-gray-200 overflow-x-auto">
                    <pre>{JSON.stringify(result.data, null, 2)}</pre>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-2">Test Information</h3>
        <p className="text-sm text-gray-600">This test will:</p>
        <ul className="text-sm text-gray-600 space-y-1 mt-2">
          <li>• Test connection to Tally server</li>
          <li>• Retrieve company data</li>
          <li>• Import a sample invoice</li>
          <li>• Fetch GST reports</li>
          <li>• Get financial statements</li>
        </ul>
      </div>
    </div>
  );
}