import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

function AuthStatus() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">Loading...</div>;
  }

  if (session) {
    return (
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">Welcome, {session.user?.name}</span>
        <button
          onClick={() => signOut()}
          className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full hover:bg-red-200 transition-colors"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/auth/login"
      className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full hover:bg-green-200 transition-colors"
    >
      Sign In
    </Link>
  );
}

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-between w-full">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-xl font-bold text-gray-900">
                  Indian Accounting
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Dashboard
              </Link>
              <Link href="/invoice" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Invoicing
              </Link>
              <Link href="/expenses" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Expenses
              </Link>
              <Link href="/reports" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Reports
              </Link>
              <Link href="/tally/setup" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Tally Integration
              </Link>
            </div>
            </div>
            <div className="flex items-center">
              <AuthStatus />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}