import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-50">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Indian Accounting Software
        </p>
      </div>

      <div className="relative flex place-items-center mt-16">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Welcome to Indian Accounting Software
        </h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-8">
        <div className="group rounded-lg border border-transparent px-5 py-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-white shadow-sm">
          <h2 className="mb-3 text-2xl font-semibold text-green-700">
            Invoicing
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-gray-600">
            Create and manage GST-compliant invoices with automatic tax calculations
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-white shadow-sm">
          <h2 className="mb-3 text-2xl font-semibold text-blue-700">
            Expense Tracking
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-gray-600">
            Track business expenses and categorize them for better financial management
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-white shadow-sm">
          <h2 className="mb-3 text-2xl font-semibold text-purple-700">
            GST Reports
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-gray-600">
            Generate GST reports for easy filing and compliance
          </p>
        </div>
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