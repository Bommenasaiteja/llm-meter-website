import Link from "next/link";

export const metadata = {
  title: "LLM Meter Documentation",
  description: "Complete documentation for LLM Meter - Track and monitor your LLM usage, costs, and performance.",
};

export default function DocsPage() {
  return (
    <main className="relative mx-auto flex flex-col max-w-6xl">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">LLM Meter Documentation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guides and references for using LLM Meter to track and monitor your LLM usage, costs, and performance across multiple providers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">CLI Documentation</h2>
            <p className="text-gray-600 mb-4">
              Learn how to use the LLM Meter CLI to track and monitor your LLM usage from the command line.
            </p>
            <Link 
              href="/docs/cli"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600"
            >
              View CLI Docs
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Local Installation</h2>
            <p className="text-gray-600 mb-4">
              Step-by-step guide to installing and setting up LLM Meter locally on your machine.
            </p>
            <Link 
              href="/docs/local-install"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600"
            >
              View Installation Guide
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}