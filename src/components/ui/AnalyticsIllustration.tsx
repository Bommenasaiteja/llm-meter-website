import { LineChartIllustration } from "../../../public/images/LineChartIllustration"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "../Table"

const summary = [
  {
    name: "OpenAI GPT-4",
    value: "24,532 tokens",
    model: "gpt-4",
    cost: "$3.24",
    input: "15,320 tokens",
    output: "9,212 tokens",
    avgLatency: "245ms",
    accuracy: "98.3%",
    bgColor: "bg-orange-500",
    changeType: "positive",
  },
  {
    name: "Anthropic Claude",
    value: "31,987 tokens",
    model: "claude-3-sonnet",
    cost: "$2.78",
    input: "20,456 tokens",
    output: "11,531 tokens",
    avgLatency: "310ms",
    accuracy: "97.8%",
    bgColor: "bg-blue-500",
    changeType: "positive",
  },
  {
    name: "Ollama Llama3",
    value: "12,456 tokens",
    model: "llama3",
    cost: "$0.00",
    input: "7,890 tokens",
    output: "4,566 tokens",
    avgLatency: "120ms",
    accuracy: "95.2%",
    bgColor: "bg-purple-500",
    changeType: "negative",
  },
]

export default function LLMUsageAnalytics() {
  return (
    <div className="h-150 shrink-0 overflow-hidden mask-[radial-gradient(white_30%,transparent_90%)] perspective-[4000px] perspective-origin-center">
      <div className="-translate-y-10 -translate-z-10 rotate-x-10 rotate-y-20 -rotate-z-10 transform-3d">
        <h3 className="text-sm text-gray-500">LLM Usage Performance</h3>
        <p className="mt-1 text-3xl font-semibold text-gray-900">
          68,975 tokens
        </p>
        <p className="mt-1 text-sm font-medium">
          <span className="text-emerald-700">+12,450 tokens (22.1%)</span>{" "}
          <span className="font-normal text-gray-500">Past month</span>
        </p>
        <LineChartIllustration className="mt-8 w-full min-w-200 shrink-0" />

        <TableRoot className="mt-6 min-w-200">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Model</TableHeaderCell>
                <TableHeaderCell className="text-right">Tokens</TableHeaderCell>
                <TableHeaderCell className="text-right">Cost</TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Input Tokens
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Output Tokens
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Latency
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Accuracy
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {summary.map((item) => (
                <TableRow key={item.name}>
                  <TableCell className="font-medium text-gray-900">
                    <div className="flex space-x-3">
                      <span
                        className={item.bgColor + " w-1 shrink-0 rounded"}
                        aria-hidden="true"
                      />
                      <span>{item.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{item.value}</TableCell>
                  <TableCell className="text-right">{item.cost}</TableCell>
                  <TableCell className="text-right">{item.input}</TableCell>
                  <TableCell className="text-right">{item.output}</TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        item.changeType === "positive"
                          ? "text-emerald-700"
                          : "text-red-700"
                      }
                    >
                      {item.avgLatency}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        item.changeType === "positive"
                          ? "text-emerald-700"
                          : "text-red-700"
                      }
                    >
                      {item.accuracy}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableRoot>
      </div>
    </div>
  )
}
