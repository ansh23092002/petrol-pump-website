import Image from "next/image";
import { JSX } from "react";

type Testimonial = {
  name: string;
  message: string;
  image: string;
  active?: boolean;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "David Johnson",
    message: "Made our daily readings simple and error-free.",
    image: "/userphoto.jpg",
  },
  {
    name: "David Johnson",
    message: "Made our daily readings simple and error-free.",
    image: "/userphoto.jpg",
    active: true,
  },
  {
    name: "David Johnson",
    message: "Made our daily readings simple and error-free.",
    image: "/userphoto.jpg",
  },
];

export default function Testimonials(): JSX.Element {
  return (
    <section className="bg-[#fff8ef] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">

        {/* Section label */}
        <p className="text-sm font-semibold text-orange-500 mb-3">
          Testimonials
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-xl bg-white p-8 shadow-sm transition
                ${
                  item.active
                    ? "border-2 border-blue-500 scale-105"
                    : "border border-slate-200"
                }
              `}
            >
              {/* Avatar */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="h-20 w-20 rounded-full overflow-hidden border-4 border-white shadow">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="pt-12">
                <h4 className="font-semibold text-slate-900">
                  {item.name}
                </h4>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {item.message}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
