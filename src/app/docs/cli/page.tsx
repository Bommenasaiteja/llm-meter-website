import Link from "next/link";

export const metadata = {
  title: "LLM Meter CLI Documentation",
  description: "Complete documentation for the LLM Meter CLI - Track and monitor your LLM usage, costs, and performance across multiple providers.",
};

export default function CLIDocsPage() {
  return (
    <main className="relative mx-auto flex flex-col max-w-6xl">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">LLM Meter CLI Documentation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Command-line interface for LLM Meter - Track and monitor your LLM usage, costs, and performance across multiple providers (OpenAI, Anthropic, Ollama, etc.).
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 max-w-4xl mx-auto">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>View usage statistics and costs</li>
              <li>List individual API requests with token details</li>
              <li>Interactive REPL mode for exploring data</li>
              <li>Server management commands</li>
              <li>Model pricing configuration</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Installation</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <pre className="text-sm font-mono overflow-x-auto">
                npm install -g llm-meter-cli
              </pre>
            </div>
            <p className="mt-4">Or install and run with npx:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <pre className="text-sm font-mono overflow-x-auto">
                npx llm-meter-cli
              </pre>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Usage</h2>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Basic Commands</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <pre className="text-sm font-mono overflow-x-auto">
{`# Show usage statistics
llm-meter stats

# List recent API requests
llm-meter requests

# View details of a specific request
llm-meter request <request-id>

# View model pricing
llm-meter pricing

# Start the LLM Meter server
llm-meter serve`}
              </pre>
            </div>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Options</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><code className="bg-gray-100 px-1 rounded">--help</code>: Show help information for any command</li>
              <li><code className="bg-gray-100 px-1 rounded">-p, --project &lt;name&gt;</code>: Filter by project</li>
              <li><code className="bg-gray-100 px-1 rounded">--page &lt;number&gt;</code>: Page number for requests (default: 1)</li>
              <li><code className="bg-gray-100 px-1 rounded">--limit &lt;number&gt;</code>: Requests per page (default: 20)</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Interactive Mode</h3>
            <p className="mb-3">Run <code className="bg-gray-100 px-1 rounded">llm-meter</code> without any arguments to enter the interactive REPL mode:</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <pre className="text-sm font-mono overflow-x-auto">
                llm-meter
              </pre>
            </div>
            <p className="mb-3">This launches a shell where you can run commands like:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><code className="bg-gray-100 px-1 rounded">stats</code> - Show usage statistics</li>
              <li><code className="bg-gray-100 px-1 rounded">requests</code> - List recent requests</li>
              <li><code className="bg-gray-100 px-1 rounded">pricing</code> - View model pricing</li>
              <li><code className="bg-gray-100 px-1 rounded">help</code> - Show available commands</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Configuration</h2>
            <p className="mb-3">
              The CLI connects to the LLM Meter backend server. You can configure the API endpoint using the <code className="bg-gray-100 px-1 rounded">LLM_METER_API</code> environment variable:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <pre className="text-sm font-mono overflow-x-auto">
                export LLM_METER_API=http://localhost:3001/api
              </pre>
            </div>
            <p className="mt-3">
              Default endpoint: <code className="bg-gray-100 px-1 rounded">http://localhost:3001/api</code>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contributing</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Fork the repository</li>
              <li>Create a feature branch (git checkout -b feature/amazing-feature)</li>
              <li>Make your changes</li>
              <li>Commit your changes (git commit -m &apos;Add amazing feature&apos;)</li>
              <li>Push to the branch (git push origin feature/amazing-feature)</li>
              <li>Open a Pull Request</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">License</h2>
            <p>MIT License</p>
          </section>
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