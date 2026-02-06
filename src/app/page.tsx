// Simplified home page without session dependencies
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-50">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Indian Accounting Software
        </p>
      </div>

      <div className="relative flex place-items-center mt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            🇮🇳 Indian Accounting Software
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            GST-compliant accounting solution
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Manage invoices, expenses, and GST filings
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/auth/login"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              Get Started
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <a
              href="/invoice"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center"
            >
              Create Invoice
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-8">
        <a href="/invoice" className="group rounded-lg border border-transparent px-5 py-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-white shadow-sm block">
          <h2 className="mb-3 text-2xl font-semibold text-green-700">
            Invoicing
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-gray-600">
            Create and manage GST-compliant invoices
          </p>
        </a>

        <a href="/expenses" className="group rounded-lg border border-transparent px-5 py-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-white shadow-sm block">
          <h2 className="mb-3 text-2xl font-semibold text-blue-700">
            Expense Tracking
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-gray-600">
            Track business expenses and categorize them
          </p>
        </a>

        <a href="/reports" className="group rounded-lg border border-transparent px-5 py-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-white shadow-sm block">
          <h2 className="mb-3 text-2xl font-semibold text-purple-700">
            GST Reports
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-gray-600">
            Generate GST reports for easy filing
          </p>
        </a>
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-500 mb-4">Built for Indian businesses with GST compliance</p>
      </div>
    </main>
  );
}

// Remove duplicate export
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Indian Accounting Software
        </p>
      </div>

      <div className="relative flex place-items-center mt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            🇮🇳 Indian Accounting Software
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            GST-compliant accounting solution
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Manage invoices, expenses, and GST filings
          </p>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-8">
        <Link href="/invoice" className="group rounded-lg border border-transparent px-5 py-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-white shadow-sm block">
          <h2 className="mb-3 text-2xl font-semibold text-green-700">
            Invoicing
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-gray-600">
            Create and manage GST-compliant invoices with automatic tax calculations
          </p>
        </Link>

        <Link href="/expenses" className="group rounded-lg border border-transparent px-5 py-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-white shadow-sm block">
          <h2 className="mb-3 text-2xl font-semibold text-blue-700">
            Expense Tracking
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-gray-600">
            Track business expenses and categorize them for better financial management
          </p>
        </Link>

        <Link href="/reports" className="group rounded-lg border border-transparent px-5 py-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-white shadow-sm block">
          <h2 className="mb-3 text-2xl font-semibold text-purple-700">
            GST Reports
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-gray-600">
            Generate GST reports for easy filing and compliance
          </p>
        </Link>
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-500 mb-4">Built for Indian businesses with GST compliance</p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}