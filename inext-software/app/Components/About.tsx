// app/components/AboutSection.tsx
"use client";

export default function AboutSection() {
  return (
    <section className="relative bg-[#05070b] text-white py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-semibold mb-4">
            Why Businesses Choose{" "}
            <span className="text-blue-500">Inext Software Solutions</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We build high-performance, secure, and scalable web applications
            using modern frontend technologies teams trust.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Card>
            <StatCircle value="92%" />
            <h3 className="mt-4 font-medium">Real Business Impact</h3>
            <p className="text-xs text-gray-400 mt-2">
              Faster delivery, reduced cost, and scalable solutions for growth.
            </p>
          </Card>

          {/* Card 2 */}
          <Card>
            <FakeGraph />
            <h3 className="mt-4 font-medium">Modern Frontend Stack</h3>
            <p className="text-xs text-gray-400 mt-2">
              Next.js, React, and Tailwind CSS for clean and maintainable UI.
            </p>
          </Card>

          {/* Card 3 */}
          <Card>
            <FakeGraph small />
            <h3 className="mt-4 font-medium">Actionable Insights</h3>
            <p className="text-xs text-gray-400 mt-2">
              Clear dashboards and UI patterns that drive decisions.
            </p>
          </Card>

          {/* Card 4 */}
          <Card className="md:col-span-2">
            <ChatMock />
            <h3 className="mt-4 font-medium">Always-On Support</h3>
            <p className="text-xs text-gray-400 mt-2">
              We collaborate closely to ship, improve, and scale continuously.
            </p>
          </Card>

          {/* Card 5 */}
          <Card>
            <IntegrationMock />
            <h3 className="mt-4 font-medium">Seamless Integrations</h3>
            <p className="text-xs text-gray-400 mt-2">
              APIs, CRMs, dashboards, and third-party services.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ---------------- UI Blocks ---------------- */

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white/5 border border-white/10 rounded-xl p-5
      backdrop-blur-xl hover:border-blue-500/40 transition ${className}`}
    >
      {children}
    </div>
  );
}

function StatCircle({ value }: { value: string }) {
  return (
    <div className="w-24 h-24 rounded-full border-4 border-blue-500/40 flex items-center justify-center text-xl font-semibold text-blue-400">
      {value}
    </div>
  );
}

function FakeGraph({ small }: { small?: boolean }) {
  return (
    <div
      className={`w-full ${
        small ? "h-20" : "h-28"
      } rounded-lg bg-gradient-to-r from-blue-500/30 to-blue-400/5`}
    />
  );
}

function ChatMock() {
  return (
    <div className="h-32 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center text-xs text-gray-400">
      “How can we help you today?”
    </div>
  );
}

function IntegrationMock() {
  return (
    <div className="h-28 rounded-lg bg-black/40 border border-white/10 grid place-items-center text-blue-400 text-sm">
      API · Dashboard · CRM
    </div>
  );
}
