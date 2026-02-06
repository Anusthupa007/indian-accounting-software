import TallySetup from '@/components/tally/TallySetup';

export default function TallySetupPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <TallySetup />
          </div>
        </div>
      </div>
    </div>
  );
}