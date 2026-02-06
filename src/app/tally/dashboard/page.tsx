// Tally Dashboard - Shows compliance features available through Tally integration
import Link from 'next/link';

export default function TallyDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Tally Compliance Dashboard</h1>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Connected</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Ind AS Compliant</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Compliance Features */}
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h2 className="text-xl font-semibold text-green-800 mb-3">📋 MCA Compliance</h2>
                <p className="text-green-600 text-sm mb-4">Schedule III compliance through Tally integration</p>
                <ul className="text-xs text-green-700 space-y-1 mb-4">
                  <li>• Balance Sheet format</li>
                  <li>• Profit & Loss format</li>
                  <li>• Notes to Accounts</li>
                  <li>• Cash Flow Statement</li>
                </ul>
                <Link href="/tally/mca" className="inline-block px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
                  Generate Reports
                </Link>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h2 className="text-xl font-semibold text-blue-800 mb-3">📊 Ind AS Compliance</h2>
                <p className="text-blue-600 text-sm mb-4">Indian Accounting Standards compliance</p>
                <ul className="text-xs text-blue-700 space-y-1 mb-4">
                  <li>• Ind AS 1 - Presentation</li>
                  <li>• Ind AS 101 - First-time Adoption</li>
                  <li>• Ind AS 109 - Financial Instruments</li>
                  <li>• Ind AS 115 - Revenue</li>
                </ul>
                <Link href="/tally/indas" className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                  Check Compliance
                </Link>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h2 className="text-xl font-semibold text-purple-800 mb-3">🔍 CARO 2020</h2>
                <p className="text-purple-600 text-sm mb-4">Companies Audit Report Order</p>
                <ul className="text-xs text-purple-700 space-y-1 mb-4">
                  <li>• Clause 3(i) - Fixed Assets</li>
                  <li>• Clause 3(ii) - Inventories</li>
                  <li>• Clause 3(iii) - Loans</li>
                  <li>• Clause 3(iv) - Investments</li>
                </ul>
                <Link href="/tally/caro" className="inline-block px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors">
                  Generate Report
                </Link>
              </div>

              {/* Tax Features */}
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h2 className="text-xl font-semibold text-yellow-800 mb-3">💰 Income Tax</h2>
                <p className="text-yellow-600 text-sm mb-4">Individual & Company tax computation</p>
                <ul className="text-xs text-yellow-700 space-y-1 mb-4">
                  <li>• ITR-1 to ITR-7 support</li>
                  <li>• Tax audit reports</li>
                  <li>• TDS computation</li>
                  <li>• Advance tax calculation</li>
                </ul>
                <Link href="/tally/tax" className="inline-block px-4 py-2 bg-yellow-600 text-white text-sm rounded-lg hover:bg-yellow-700 transition-colors">
                  Compute Tax
                </Link>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h2 className="text-xl font-semibold text-red-800 mb-3">📄 GST Compliance</h2>
                <p className="text-red-600 text-sm mb-4">GST reconciliation & reporting</p>
                <ul className="text-xs text-red-700 space-y-1 mb-4">
                  <li>• GSTR-1 generation</li>
                  <li>• GSTR-3B reconciliation</li>
                  <li>• E-way bill integration</li>
                  <li>• GSTIN validation</li>
                </ul>
                <Link href="/tally/gst" className="inline-block px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors">
                  GST Reports
                </Link>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                <h2 className="text-xl font-semibold text-indigo-800 mb-3">🔗 Reconciliation</h2>
                <p className="text-indigo-600 text-sm mb-4">Automated reconciliation tools</p>
                <ul className="text-xs text-indigo-700 space-y-1 mb-4">
                  <li>• Bank Reconciliation</li>
                  <li>• EPF reconciliation</li>
                  <li>• ESI reconciliation</li>
                  <li>• TDS reconciliation</li>
                </ul>
                <Link href="/tally/reconcile" className="inline-block px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors">
                  Run Reconciliation
                </Link>
              </div>
            </div>

            <div className="mt-8 bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">🔄 Data Sync Status</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">124</p>
                  <p className="text-sm text-gray-600">Invoices Synced</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">45</p>
                  <p className="text-sm text-gray-600">Payments Synced</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">8</p>
                  <p className="text-sm text-gray-600">Reconciliations</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-600">100%</p>
                  <p className="text-sm text-gray-600">Compliance Score</p>
                </div>
              </div>
              <button className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Sync Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}