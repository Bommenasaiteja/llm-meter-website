import {
  RiBarChartFill,
  RiCoinsFill,
  RiSpeedFill,
  RiNotification3Fill,
} from "@remixicon/react"
import { Divider } from "../Divider"
import AnalyticsIllustration from "./AnalyticsIllustration"
import { StickerCard } from "./StickerCard"

export function SolarAnalytics() {
  return (
    <section
      aria-labelledby="solar-analytics"
      className="relative mx-auto w-full max-w-6xl overflow-hidden"
    >
      <div>
        <h2
          id="solar-analytics"
          className="relative scroll-my-24 text-lg font-semibold tracking-tight text-orange-500"
        >
          LLM Analytics
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
        </h2>
        <p className="mt-2 max-w-lg text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
          Turn usage data into cost savings with real-time insights
        </p>
      </div>
      <div className="*:pointer-events-none">
        <AnalyticsIllustration />
      </div>
      <Divider className="mt-0"></Divider>
      <div className="grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-4 md:grid-rows-1">
        <StickerCard
          Icon={RiBarChartFill}
          title="Usage Tracking"
          description="Monitor token usage across all your AI providers in real-time."
        />
        <StickerCard
          Icon={RiCoinsFill}
          title="Cost Monitoring"
          description="Track expenses for each model and provider to optimize spend."
        />
        <StickerCard
          Icon={RiSpeedFill}
          title="Performance Metrics"
          description="Analyze latency, throughput, and other performance metrics."
        />
        <StickerCard
          Icon={RiNotification3Fill}
          title="Intelligent Alerts"
          description="Get notified when usage or costs exceed your defined thresholds."
        />
      </div>
    </section>
  )
}
