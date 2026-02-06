import InvoiceForm from '@/components/invoicing/InvoiceForm';

export default function InvoicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Invoice</h1>
            <p className="text-gray-600 mb-6">GST-compliant invoicing for your business</p>
            <InvoiceForm />
          </div>
        </div>
      </div>
    </div>
  );
}