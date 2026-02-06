// InvoiceForm.tsx - Basic invoice form component
import React, { useState } from 'react';

export default function InvoiceForm() {
  const [invoiceData, setInvoiceData] = useState({
    customerName: '',
    customerGSTIN: '',
    invoiceNumber: '',
    date: new Date().toISOString().split('T')[0],
    items: [
      { description: '', quantity: 1, rate: 0, gstRate: 18 }
    ],
    paymentTerms: 'Net 30'
  });

  const addItem = () => {
    setInvoiceData(prev => ({
      ...prev,
      items: [...prev.items, { description: '', quantity: 1, rate: 0, gstRate: 18 }]
    }));
  };

  const updateItem = (index: number, field: string, value: any) => {
    const newItems = [...invoiceData.items];
    newItems[index] = { ...newItems[index], [field]: value };
    setInvoiceData(prev => ({ ...prev, items: newItems }));
  };

  const calculateTotal = () => {
    return invoiceData.items.reduce((total, item) => {
      const itemTotal = item.quantity * item.rate;
      const gstAmount = itemTotal * (item.gstRate / 100);
      return total + itemTotal + gstAmount;
    }, 0);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Create Invoice</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
          <input
            type="text"
            value={invoiceData.customerName}
            onChange={(e) => setInvoiceData(prev => ({ ...prev, customerName: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Customer GSTIN</label>
          <input
            type="text"
            value={invoiceData.customerGSTIN}
            onChange={(e) => setInvoiceData(prev => ({ ...prev, customerGSTIN: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="22AAAAA0000A1Z5"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Invoice Number</label>
          <input
            type="text"
            value={invoiceData.invoiceNumber}
            onChange={(e) => setInvoiceData(prev => ({ ...prev, invoiceNumber: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <input
            type="date"
            value={invoiceData.date}
            onChange={(e) => setInvoiceData(prev => ({ ...prev, date: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Items</h3>
        {invoiceData.items.map((item, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3">
            <input
              type="text"
              value={item.description}
              onChange={(e) => updateItem(index, 'description', e.target.value)}
              placeholder="Item description"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateItem(index, 'quantity', parseInt(e.target.value) || 1)}
              placeholder="Qty"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              value={item.rate}
              onChange={(e) => updateItem(index, 'rate', parseFloat(e.target.value) || 0)}
              placeholder="Rate"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={item.gstRate}
              onChange={(e) => updateItem(index, 'gstRate', parseFloat(e.target.value))}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={0}>0%</option>
              <option value={5}>5%</option>
              <option value={12}>12%</option>
              <option value={18}>18%</option>
              <option value={28}>28%</option>
            </select>
          </div>
        ))}

        <button
          onClick={addItem}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          + Add Item
        </button>
      </div>

      <div className="flex justify-end mt-8">
        <div className="text-right">
          <p className="text-xl font-bold text-gray-800">Total: ₹{calculateTotal().toFixed(2)}</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Generate Invoice
          </button>
        </div>
      </div>
    </div>
  );
}