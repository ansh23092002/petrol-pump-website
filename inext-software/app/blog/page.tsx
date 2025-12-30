"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const posts = [
	{
		title: "Building Scalable Microservices with Kubernetes",
		excerpt:
			"How our team designs and operates microservice architectures on Kubernetes for high-growth products.",
		author: "Rahul Kumar",
		date: "Dec, 2024",
		category: "DevOps",
		emoji: "🚢",
		image: "https://media.licdn.com/dms/image/v2/D5622AQGETivkET_y3A/feedshare-shrink_800/B56ZcWRHi_GsAk-/0/1748425276566?e=2147483647&v=beta&t=-1JdfOjSPcy-JDNF_jNZ6p9S1ebJgl568NuL62Kd768",
	},
	{
		title: "React Server Components: A Deep Dive",
		excerpt:
			"Understanding the React Server Components model and where it fits in modern web architecture.",
		author: "Priya Sharma",
		date: "Dec, 2024",
		category: "Frontend",
		emoji: "⚛️",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvrFmr7v065I5J0ZEWOiiOlxXRbkQs3Cxrwg&s",
	},
	{
		title: "GraphQL vs REST: Making the Right Choice",
		excerpt:
			"Practical guidance on choosing the right API paradigm for your product roadmap.",
		author: "Amit Verma",
		date: "Dec, 2024",
		category: "Backend",
		emoji: "🔗",
		image: "https://media.licdn.com/dms/image/v2/D5622AQFgEEjRGZRR7w/feedshare-shrink_800/B56Zm_BRCzJ0Ak-/0/1759846430038?e=2147483647&v=beta&t=Y7Y5HTRASaGIaXNYbURmVyVynQ6EyygTqQw0wW9BXqE",
	},
	{
		title: "Secure Coding Practices for Web Applications",
		excerpt:
			"Core principles our engineers follow to keep customer applications secure by design.",
		author: "Vikram Singh",
		date: "Dec, 2024",
		category: "Security",
		emoji: "🔐",
		image: "https://cdn.prod.website-files.com/64c28317bed59200e43b392d/6821aca00e23d7b04b3cd7fc_Secure%20Coding%20Practices%20for%20Web%20Application%20Developers.jpg",
	},
];

export default function BlogPage() {
	const loadingSection = useRef<HTMLDivElement>(null);
	const loadingText = useRef<HTMLParagraphElement>(null);
	const loadingSub = useRef<HTMLParagraphElement>(null);

	/* GSAP LOADING ANIMATION */
	useEffect(() => {
		if (!loadingSection.current || !loadingText.current) return;

		const letters = loadingText.current.querySelectorAll("span");

		gsap.set(letters, {
			opacity: 0,
			x: (i) => (i % 2 === 0 ? -window.innerWidth : window.innerWidth),
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: loadingSection.current,
				start: "top 75%",
				once: true,
			},
		});

		tl.to(letters, {
			x: 0,
			opacity: 1,
			duration: 1.2,
			ease: "power3.out",
			stagger: 0.06,
		})
			.fromTo(
				loadingText.current,
				{ letterSpacing: "0.8em" },
				{
					letterSpacing: "0.2em",
					duration: 0.6,
					ease: "power2.out",
				},
				"-=0.4"
			)
			.fromTo(
				loadingSub.current,
				{ y: 30, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.6 },
				"-=0.2"
			);
	}, []);

	return (
		<main
			className="min-h-screen bg-[#0B4EA2] text-white"
		>
			{/* BLOG LAYOUT */}
			<section className="mx-auto max-w-6xl flex flex-col gap-16 px-4 pb-24 pt-24 lg:flex-row lg:gap-24 lg:pt-32">
				{/* RIGHT: Sticky Context (now on the left) */}
						<aside className="shrink-0 w-full lg:w-[32%] lg:pr-8 order-1 lg:order-none">
							<div className="sticky top-32">
								<div className="text-[58px] leading-none sm:text-[72px] md:text-[80px] text-[#FFD23F] font-bold">
									<span className="block">BL</span>
									<span className="block">OG—</span>
									<span className="block">NE</span>
									<span className="block">WS</span>
								</div>
								<p className="mt-6 max-w-xs text-sm text-white/80">
									Latest news and updates from{' '}
									<span className="font-semibold text-[#FFD23F]">iNext Software Solutions</span>.
								</p>
							</div>
						</aside>

				{/* LEFT: Scrollable Content (now on the right) */}
				<div className="flex-1 min-w-0 order-2 lg:order-none">
					{/* POSTS */}
					{posts.map((post, index) => (
						<article
							key={post.title}
										className={`grid gap-10 lg:grid-cols-[260px_1fr] ${
											index !== 0 ? "border-t border-[#0B4EA2]/40 pt-10" : ""
										}`}
						>
							<div className="aspect-[4/5] rounded-3xl bg-[#0B4EA2] flex items-center justify-center text-5xl text-white/80 overflow-hidden p-0">
								{/* Show image fully, no padding, cover entire area */}
								<img
									src={post.image}
									alt={post.title}
									className="object-cover w-full h-full rounded-3xl"
									style={{ display: 'block' }}
								/>
							</div>
							<div className="flex flex-col gap-4">
								<p className="text-[11px] uppercase tracking-[0.24em] text-[#FFD23F]">
									{post.date} · {post.category}
								</p>
								<h2 className="text-2xl font-bold tracking-tight text-white">
									{post.title}
								</h2>
								<p className="max-w-md text-sm text-white/80">
									{post.excerpt}
								</p>
								<div className="flex items-center gap-6 text-xs text-white/60">
									<span>By {post.author}</span>
									<span className="h-px w-8 bg-[#a79d91]" />
									<span>Read time: ~10 min</span>
								</div>
								<button className="mt-4 w-fit rounded-full bg-[#E63946] px-5 py-2.5 text-xs text-white hover:bg-[#b91c1c] font-semibold">
									Discover ↗
								</button>
							</div>
						</article>
					))}
				</div>
			</section>

			{/* FUTURE BACKEND CONTEXT */}
			<section className="mx-auto max-w-6xl px-4 pb-24 bg-[#0B4EA2] rounded-3xl">
				<div className="max-w-3xl">
					<p className="text-[11px] uppercase tracking-[0.22em] text-[#FFD23F]">
						Looking ahead
					</p>

					<h2 className="mt-3 text-3xl font-bold md:text-4xl text-white">
						Future backend implementation
					</h2>

					<p className="mt-4 text-sm text-white/80">
						This blog is architected for future scalability. As content grows,
						it will evolve into a fully dynamic, backend-driven platform with
						structured publishing workflows and performance optimization.
					</p>

					<ul className="mt-6 space-y-3 text-sm text-white/80">
						<li>• Headless CMS integration</li>
						<li>• Secure APIs & role-based access</li>
						<li>• Author & editorial workflows</li>
						<li>• CDN-backed content delivery</li>
						<li>• Analytics & engagement tracking</li>
					</ul>
				</div>
			</section>
			<section
				ref={loadingSection}
				className="bg-gradient-to-t from-black to-transparent py-24 text-center text-[#f0e7db] overflow-hidden"
			>
				<p
					ref={loadingText}
					className="text-[40px] sm:text-[48px] tracking-[0.6em] font-medium"
				>
					{"LOADING".split("").map((char, i) => (
						<span key={i} className="inline-block">
							{char}
						</span>
					))}
				</p>

				<p ref={loadingSub} className="mt-6 text-sm text-[#cdc1b0]">
					Stay tuned for more insights, stories, and updates from our team.
				</p>
			</section>
		</main>
	);
}
