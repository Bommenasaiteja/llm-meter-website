import Link from "next/link";

export const metadata = {
  title: "LLM Meter Local Installation Guide",
  description: "Complete guide to installing and setting up LLM Meter locally on your machine.",
};

export default function LocalInstallDocsPage() {
  return (
    <main className="relative mx-auto flex flex-col max-w-6xl">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">LLM Meter Local Installation Guide</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Step-by-step instructions to install and set up LLM Meter locally on your machine.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 max-w-4xl mx-auto">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prerequisites</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Node.js (version 18 or higher)</li>
              <li>npm or pnpm package manager</li>
              <li>Git (for cloning the repositories)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Backend Installation</h2>
            <p className="mb-4">First, install and run the LLM Meter backend server:</p>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">Clone the repository</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <pre className="text-sm font-mono overflow-x-auto">
                git clone https://github.com/Bommenasaiteja/llm-meter-backend.git
              </pre>
            </div>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">Install dependencies</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <pre className="text-sm font-mono overflow-x-auto">
{`cd llm-meter-backend
npm install
# or
pnpm install`}
              </pre>
            </div>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">Set up environment variables</h3>
            <p className="mb-3">Create a <code className="bg-gray-100 px-1 rounded">.env</code> file in the root directory with your configuration:</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <pre className="text-sm font-mono overflow-x-auto">
{`# Database configuration
DATABASE_URL="file:./dev.db"

# API configuration
PORT=3001

# Optional: Add your LLM provider API keys
OPENAI_API_KEY="your-openai-api-key"
ANTHROPIC_API_KEY="your-anthropic-api-key"`}
              </pre>
            </div>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">Run the server</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <pre className="text-sm font-mono overflow-x-auto">
{`npm run dev
# or
pnpm dev`}
              </pre>
            </div>
            <p>The backend server will be available at <code className="bg-gray-100 px-1 rounded">http://localhost:3001</code>.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">CLI Installation</h2>
            <p className="mb-4">Install the LLM Meter CLI globally:</p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <pre className="text-sm font-mono overflow-x-auto">
                npm install -g llm-meter-cli
              </pre>
            </div>
            
            <p>Or use it directly with npx without installing:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <pre className="text-sm font-mono overflow-x-auto">
                npx llm-meter-cli
              </pre>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Configuration</h2>
            <p className="mb-3">
              The CLI connects to the LLM Meter backend server. You can configure the API endpoint using the <code className="bg-gray-100 px-1 rounded">LLM_METER_API</code> environment variable:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <pre className="text-sm font-mono overflow-x-auto">
                export LLM_METER_API=http://localhost:3001/api
              </pre>
            </div>
            <p className="mt-3">
              Default endpoint: <code className="bg-gray-100 px-1 rounded">http://localhost:3001/api</code>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quick Start</h2>
            <p className="mb-3">Once everything is set up, you can start using LLM Meter:</p>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">View usage statistics</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <pre className="text-sm font-mono overflow-x-auto">
                llm-meter stats
              </pre>
            </div>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">List recent API requests</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <pre className="text-sm font-mono overflow-x-auto">
                llm-meter requests
              </pre>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Troubleshooting</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Ensure the backend server is running before using the CLI</li>
              <li>Check that the <code className="bg-gray-100 px-1 rounded">LLM_METER_API</code> environment variable is correctly set</li>
              <li>Verify that your API keys are properly configured in the backend</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Next Steps</h2>
            <p>After completing the installation, you can start tracking your LLM usage. Check out our CLI documentation for more command options and features.</p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/docs" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Back to Documentation
          </Link>
        </div>
      </div>
    </main>
  );
}