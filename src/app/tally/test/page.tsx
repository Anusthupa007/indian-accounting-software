import TallyTest from '@/components/tally/TallyTest';

export default function TallyTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <TallyTest />
          </div>
        </div>
      </div>
    </div>
  );
}