import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Alex Morgan",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Daniel Lee",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 4,
    name: "Emily Carter",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 5,
    name: "Michael Smith",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 6,
    name: "Olivia Brown",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-20 bg-gray-100 flex justify-center">
      <div className="relative w-full max-w-6xl px-6">
        {/* Center Card */}
        <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Floating avatar tiles (desktop) */}
          <div className="hidden md:block absolute -top-12 left-0 right-0 pointer-events-none">
            <div className="relative mx-auto w-full max-w-5xl" style={{height:120}}>
              {testimonials.map((t, i) => {
                const left = `${6 + i * 14}%`;
                const rotate = (i % 2 === 0 ? -6 : 6) + (i % 3) * 2;
                return (
                  <div
                    key={t.id}
                    className="absolute bg-white rounded-2xl p-2 shadow-xl"
                    style={{ left, top: 0, transform: `rotate(${rotate}deg)` }}
                  >
                    <Image src={t.image} alt={t.name} width={110} height={110} className="rounded-xl object-cover" />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="px-8 lg:px-16 py-24 text-center">
            <span className="inline-block rounded-full bg-gray-200 px-4 py-1 text-sm font-medium text-gray-700">
              Testimonials
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900">
              Trusted by leaders
              <span className="block text-gray-500">from various industries</span>
            </h2>

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Learn why professionals trust our solutions to complete their customer journeys.
            </p>

            <div className="mt-10">
              <button className="inline-flex items-center gap-3 rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow hover:opacity-95 transition">
                Read Success Stories
                <span className="inline-block bg-white/10 px-3 py-1 rounded-full text-xs">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile avatar grid under the card */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:hidden">
          {testimonials.map((item) => (
            <div key={item.id} className="rounded-xl bg-white p-2 shadow-md">
              <Image src={item.image} alt={item.name} width={72} height={72} className="rounded-lg object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
