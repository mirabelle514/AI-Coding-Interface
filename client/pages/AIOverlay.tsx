import Header from "@/components/Header";
import { Lightbulb, Code2, Zap } from "lucide-react";
import { useState } from "react";

export default function AIOverlay() {
  const [selectedLine, setSelectedLine] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-atelier-bg">
      <Header />

      <main className="pt-24 pb-16 px-4">
        <div className="container max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 animate-slide-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-atelier-warning/10 border border-atelier-border mb-6">
              <Lightbulb className="w-4 h-4 text-atelier-warning" />
              <span className="text-xs font-semibold text-atelier-warning uppercase tracking-wide">
                AI Assistant Overlay
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-atelier-text mb-4">
              Context-Aware Coding Assistance
            </h1>
            <p className="text-base text-atelier-text-muted max-w-2xl">
              Intelligent overlay providing real-time suggestions, auto-completion, and code analysis as you type.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {/* Left: Analysis Panel */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Code Quality */}
                <div className="p-6 rounded-md border border-atelier-border bg-atelier-surface">
                  <h3 className="font-semibold text-atelier-text mb-4">
                    Code Quality
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-atelier-text-muted">
                          Readability
                        </span>
                        <span className="text-xs font-bold text-atelier-success">
                          92%
                        </span>
                      </div>
                      <div className="w-full bg-atelier-bg rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-atelier-success"
                          style={{ width: "92%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-atelier-text-muted">
                          Performance
                        </span>
                        <span className="text-xs font-bold text-atelier-secondary">
                          78%
                        </span>
                      </div>
                      <div className="w-full bg-atelier-bg rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-atelier-secondary"
                          style={{ width: "78%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-atelier-text-muted">
                          Security
                        </span>
                        <span className="text-xs font-bold text-atelier-primary">
                          85%
                        </span>
                      </div>
                      <div className="w-full bg-atelier-bg rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-atelier-primary"
                          style={{ width: "85%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Issues */}
                <div className="p-6 rounded-md border border-atelier-border bg-atelier-surface">
                  <h3 className="font-semibold text-atelier-text mb-4 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-atelier-warning" />
                    Issues Found
                  </h3>
                  <div className="space-y-2">
                    {[
                      { type: "warning", text: "Unused variable" },
                      { type: "error", text: "Missing error handling" },
                    ].map((issue, idx) => (
                      <div
                        key={idx}
                        className={`p-2 rounded-md text-xs font-medium flex items-center gap-2 ${
                          issue.type === "error"
                            ? "bg-atelier-error/10 text-atelier-error border border-atelier-error/20"
                            : "bg-atelier-warning/10 text-atelier-warning border border-atelier-warning/20"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {issue.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Code Editor with Overlay */}
            <div className="lg:col-span-3">
              {/* Editor */}
              <div className="p-6 rounded-md border border-atelier-border bg-atelier-surface mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-5 h-5 text-atelier-primary" />
                  <h3 className="font-semibold text-atelier-text">
                    Code Editor with AI Overlay
                  </h3>
                </div>

                {/* Code Lines with Overlay */}
                <div className="rounded-md bg-atelier-bg border border-atelier-border overflow-hidden">
                  <div className="font-mono text-sm">
                    {[
                      {
                        num: 1,
                        code: "function calculateTotal(items) {",
                        suggestion: null,
                      },
                      {
                        num: 2,
                        code: "  let total = 0;",
                        suggestion: "Add type annotation: items: Array<Item>",
                      },
                      {
                        num: 3,
                        code: "  for (let item of items) {",
                        suggestion: null,
                      },
                      {
                        num: 4,
                        code: "    total += item.price;",
                        suggestion:
                          "Consider using reduce() for better performance",
                      },
                      {
                        num: 5,
                        code: "  }",
                        suggestion: null,
                      },
                      {
                        num: 6,
                        code: "  return total;",
                        suggestion: null,
                      },
                      {
                        num: 7,
                        code: "}",
                        suggestion: null,
                      },
                    ].map((line) => (
                      <div
                        key={line.num}
                        className={`border-b border-atelier-border/50 transition-colors ${
                          selectedLine === line.num
                            ? "bg-atelier-primary/10"
                            : "hover:bg-atelier-surface/50"
                        }`}
                        onClick={() => setSelectedLine(line.num)}
                      >
                        <div className="flex items-stretch">
                          <div className="w-12 px-4 py-2 bg-atelier-bg/50 text-atelier-text-muted flex items-center justify-end select-none border-r border-atelier-border/50 text-xs">
                            {line.num}
                          </div>
                          <div className="flex-1 px-4 py-2 text-atelier-text overflow-x-auto text-xs">
                            {line.code}
                          </div>
                        </div>
                        {line.suggestion && (
                          <div className="px-16 py-3 bg-atelier-warning/10 border-t border-atelier-warning/20 flex items-start gap-3 text-xs">
                            <Lightbulb className="w-4 h-4 text-atelier-warning flex-shrink-0 mt-0.5" />
                            <span className="text-atelier-warning">
                              {line.suggestion}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Suggestions Sidebar */}
              <div className="p-6 rounded-md border border-atelier-border bg-atelier-surface">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-atelier-primary" />
                  <h3 className="font-semibold text-atelier-text">
                    Smart Suggestions
                  </h3>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      title: "Use Array.reduce()",
                      description:
                        "More efficient than loop for calculating totals",
                      score: "High Impact",
                    },
                    {
                      title: "Add Error Handling",
                      description: "Check if items array is valid before use",
                      score: "Important",
                    },
                    {
                      title: "Type Annotations",
                      description:
                        "Add TypeScript types for better code safety",
                      score: "Recommended",
                    },
                  ].map((suggestion, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-md border border-atelier-border bg-atelier-bg hover:border-atelier-primary/50 hover:bg-atelier-surface/50 transition-all duration-200 cursor-pointer group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <p className="text-sm font-semibold text-atelier-text">
                          {suggestion.title}
                        </p>
                        <span className="text-xs px-2 py-1 rounded-md bg-atelier-primary/10 text-atelier-primary font-semibold">
                          {suggestion.score}
                        </span>
                      </div>
                      <p className="text-xs text-atelier-text-muted">
                        {suggestion.description}
                      </p>
                      <button className="mt-2 text-xs font-semibold text-atelier-primary hover:underline">
                        Apply Fix →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Smart Auto-completion",
                description:
                  "Context-aware suggestions as you type code",
              },
              {
                title: "Code Analysis",
                description: "Real-time quality metrics and improvement tips",
              },
              {
                title: "Pattern Recognition",
                description:
                  "Identifies common patterns and best practices",
              },
              {
                title: "Issue Detection",
                description: "Catches bugs and potential issues early",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-4 rounded-md border border-atelier-border bg-atelier-surface hover:border-atelier-primary hover:bg-atelier-surface-elevated transition-all duration-200"
              >
                <h4 className="font-semibold text-atelier-text mb-2 text-sm">
                  {feature.title}
                </h4>
                <p className="text-xs text-atelier-text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
