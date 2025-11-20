import Image from "next/image"
import Link from "next/link"
import { Button } from "../Button"

export function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="mx-auto max-w-6xl">
      <div className="grid items-center gap-8 sm:grid-cols-6">
        <div className="sm:col-span-2">
          <h2
            id="cta-title"
            className="scroll-my-60 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl"
          >
            Start tracking your LLM usage today
          </h2>
          <p className="mt-3 mb-8 text-lg text-gray-600">
            Get insights into your AI usage, costs, and performance across multiple providers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="text-md">
              <Link href="https://github.com/Bommenasaiteja/llm-meter-backend">Get Started</Link>
            </Button>
            <Button asChild className="text-md" variant="secondary">
              <Link href="/docs">View Documentation</Link>
            </Button>
          </div>
        </div>
        <div className="relative isolate rounded-xl sm:col-span-4 sm:h-full">
             {/* <Image
            alt="LLM usage dashboard"
            src="/images/field.png"
            height={1000}
            width={1000}
            className="relative z-10 rounded-2xl"
          /> */}
          <Image
            aria-hidden
            alt="LLM usage dashboard"
            src="/images/drone.png"
            height={1000}
            width={1000}
            className="absolute inset-0 -z-10 rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default CallToAction
