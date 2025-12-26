// app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us - iNext Software Solutions",
  description:
    "Learn more about the team and workflow behind iNext Software Solutions.",
};

const teamMembers = [
  {
    name: "Rahul Sharma",
    role: "Technical Lead",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
  },
  {
    name: "Priya Verma",
    role: "UI/UX Designer",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
  },
  {
    name: "Amit Kumar",
    role: "Backend Engineer",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
  },
  {
    name: "Neha Patel",
    role: "Product Manager",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
  },
  {
    name: "Vikram Singh",
    role: "DevOps Engineer",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
];

export default function AboutPage() {
  return (
    <main
      className="
        min-h-screen 
        bg-[#d7cec4] 
        text-[#171310]
        bg-[radial-gradient(circle,_rgba(0,0,0,0.06)_1px,_transparent_0)]
        bg-[length:18px_18px]
      "
    >
      {/* NEW: Top hero section like last screenshot */}
      <ShowcaseSection />

      <TeamSection />
      <WorkflowSection />
      <FinalSection />
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* TOP SHOWCASE SECTION – big black images + stats (23K / 38 etc.)    */
/* ------------------------------------------------------------------ */

function ShowcaseSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-20 lg:pt-24">
      {/* Top: 2 big black image blocks */}
      <div className="grid gap-6 lg:gap-10 lg:grid-cols-[3fr_2fr] items-start">
  
  {/* Left image */}
  <div className="relative overflow-hidden rounded-3xl bg-black">
    <div className="aspect-[16/16] w-full">
      <Image
        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
        alt="Crafted details"
        fill
        className="object-cover"
      />
    </div>
  </div>

  {/* Right image */}
  <div className="relative overflow-hidden rounded-3xl bg-black mt-25">
    <div className="aspect-[4/5] w-full ">
      <Image
        src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
        alt="Product close-up"
        fill
        className="object-cover"
      />
    </div>
  </div>

</div>
    

      {/* Bottom: quote + stats */}
      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)_minmax(0,1fr)] items-start">
        {/* Quote / description */}
        <div className="text-sm leading-relaxed text-[#3f3a35]">
          <div className="mb-3 text-4xl text-[#171310]">&ldquo;</div>
          <p>
            We are constantly searching for better ways to build digital
            products, combining proven engineering practices with thoughtful
            design. Every release is the result of careful experimentation,
            iteration and collaboration.
          </p>
        </div>

        {/* Stat 1 */}
        <div>
          <p className="text-3xl font-semibold tracking-tight text-[#171310]">
            23K
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-[#5a5248]">
            Deployments / year
          </p>
          <p className="mt-3 text-xs leading-relaxed text-[#4f4944]">
            Our current delivery capacity across multiple client projects,
            managed through automated CI/CD pipelines and observability
            tooling.
          </p>
        </div>

        {/* Stat 2 */}
        <div>
          <p className="text-3xl font-semibold tracking-tight text-[#171310]">
            38
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-[#5a5248]">
            Years of activity
          </p>
          <p className="mt-3 text-xs leading-relaxed text-[#4f4944]">
            Combined experience of our core leadership team in software
            engineering, product strategy and digital transformation.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3. FINAL SECTION – "Why choose iNext?"                            */
/* ------------------------------------------------------------------ */

function FinalSection() {
  return (
    <section className="mx-auto max-w-4xl px-4 pb-24 text-center">
      <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
        Why choose iNext?
      </h2>
      <p className="mb-8 text-lg text-[#4f4944]">
        We blend engineering, design, and business strategy to deliver digital
        products that drive real impact. Our team is passionate, our workflow is
        proven, and our commitment to your success is unwavering.
      </p>
      <div className="flex flex-col justify-center gap-8 md:flex-row">
        <div className="flex-1 rounded-2xl bg-[#ede6de] p-6 shadow-sm">
          <h3 className="mb-2 text-xl font-medium text-[#b0673b]">
            Expertise
          </h3>
          <p className="text-sm text-[#4f4944]">
            Seasoned professionals in engineering, design, and product
            management.
          </p>
        </div>
        <div className="flex-1 rounded-2xl bg-[#ede6de] p-6 shadow-sm">
          <h3 className="mb-2 text-xl font-medium text-[#b0673b]">
            Collaboration
          </h3>
          <p className="text-sm text-[#4f4944]">
            We work as an extension of your team, ensuring transparency and
            partnership.
          </p>
        </div>
        <div className="flex-1 rounded-2xl bg-[#ede6de] p-6 shadow-sm">
          <h3 className="mb-2 text-xl font-medium text-[#b0673b]">
            Results
          </h3>
          <p className="text-sm text-[#4f4944]">
            Focused on outcomes, we deliver solutions that scale and perform.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <span className="inline-block rounded-full bg-[#b0673b] px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-[#a05a2e]">
          Let’s build something great together
        </span>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 1. TEAM SECTION – "Not just a team, but a big family."             */
/* ------------------------------------------------------------------ */

function TeamSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 pt-24 lg:pt-32">
      {/* Top text + quote */}
      <div className="mb-10 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c15735]">
            Our team
          </p>
          <h1 className="mt-3 text-3xl font-medium leading-tight tracking-tight md:text-4xl lg:text-[42px]">
            Not just a team,
            <br />
            but a big family.
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#4f4944]">
            A multidisciplinary group of engineers, designers and product
            people, working together to build reliable digital products for our
            clients.
          </p>
        </div>

        <div className="max-w-sm text-right text-xs text-[#b0673b]">
          <p className="italic">
            &quot;We are always looking for curious people, interested and
            willing to grow with us in the world of software.&quot;
          </p>
          <p className="mt-3 text-[11px] font-semibold tracking-[0.22em] uppercase">
            iNext Leadership
          </p>
        </div>
      </div>

      {/* Slider / row of portraits */}
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex-1 min-w-[180px] max-w-[220px] rounded-2xl border border-[#8d8275] bg-[#d1c5b6] p-1 shadow-sm"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] bg-black">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover filter grayscale"
                />
              </div>
              <div className="mt-3 px-1 pb-2">
                <p className="text-sm font-medium tracking-tight">
                  {member.name}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[#6a6259]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2. WORKFLOW SECTION – "Our core workflow it's not just a vision."  */
/* ------------------------------------------------------------------ */

function WorkflowSection() {
  const steps = [
    {
      step: "01",
      label: "Discovery / Strategy",
      title: "Discovery",
      text: "We work with stakeholders to understand business goals, user needs and technical constraints before we propose any solution.",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
    },
    {
      step: "02",
      label: "Mould Engineering",
      title: "Engineering",
      text: "Our engineers design system architecture, select technologies and define standards that balance quality, cost and time‑to‑market.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    },
    {
      step: "03",
      label: "Target / Testing",
      title: "Testing",
      text: "Each release is verified through automated and manual testing, performance checks and security reviews before going live.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 pb-24">
      {/* Top text + quote */}
      <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c15735]">
            Our steps
          </p>
          <h2 className="mt-3 text-3xl font-medium leading-tight tracking-tight md:text-4xl lg:text-[40px]">
            Our core workflow,
            <br />
            it&apos;s not just a vision.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#4f4944]">
            From initial discovery to long‑term support, our process is built to
            keep quality and efficiency aligned with business impact.
          </p>
        </div>

        <div className="max-w-sm text-right text-xs text-[#b0673b]">
          <p className="italic">
            &quot;We find our work satisfying when quality, timing and
            reliability go hand in hand.&quot;
          </p>
          <p className="mt-3 text-[11px] font-semibold tracking-[0.22em] uppercase">
            iNext Production Team
          </p>
        </div>
      </div>

      {/* Steps cards */}
      <div className="grid gap-10 md:grid-cols-3">
        {steps.map((item) => (
          <div key={item.step} className="flex flex-col gap-5">
            {/* Step image */}
            <div className="overflow-hidden rounded-3xl bg-black/90">
              <div className="aspect-[4/5] w-full relative">
                <Image
                  src={item.image}
                  alt={item.title + ' illustration'}
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7b7369]">
                {item.label}
              </p>
              <h3 className="text-xl font-medium tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#4f4944]">
                {item.text}
              </p>
            </div>

            <div className="mt-4 text-4xl font-light tracking-tight text-[#24201c]">
              {item.step}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}