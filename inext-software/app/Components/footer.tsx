// components/MagicFooter.tsx

export default function MagicFooter() {
  const FooterLink = ({ label }: { label: string }) => (
    <li className="group relative inline-flex items-center cursor-pointer overflow-hidden py-1">
      {/* left slash */}
      <span className="mr-1 text-[#f7efe3]/60 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        /
      </span>

      {/* text */}
      <span className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#f7efe3]">
        {label}
      </span>

      {/* right slash */}
      <span className="ml-1 text-[#f7efe3]/60 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        /
      </span>
    </li>
  );

  return (
    <footer className="relative w-full bg-black text-[#f7efe3]">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-28 sm:pt-36 md:pt-48 lg:pt-56 pb-14">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-10 lg:gap-x-16 text-sm sm:text-[15px]">

          {/* SERVICES */}
          <div>
            <h4 className="mb-5 text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase opacity-70">
              Services
            </h4>
            <ul className="space-y-3 flex flex-col">
              <FooterLink label="Web Development" />
              <FooterLink label="Mobile Apps" />
              <FooterLink label="Software Solutions" />
              <FooterLink label="IT Consulting" />
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="mb-5 text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase opacity-70">
              Company
                </h4>
                <ul className="space-y-3 flex flex-col">
              <FooterLink label="About Us" />
              <FooterLink label="Our Team" />
              <FooterLink label="Portfolio" />
              <FooterLink label="Careers" />
              <FooterLink label="Contact" />
            </ul>
          </div>

          {/* SOCIALS */}
          <div>
            <h4 className="mb-5 text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase opacity-70">
              Connect
            </h4>
            <ul className="space-y-3 flex flex-col">
              <FooterLink label="LinkedIn" />
              <FooterLink label="Twitter" />
              <FooterLink label="YouTube" />
              <FooterLink label="WhatsApp" />
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-5 text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase opacity-70">
              Contact
            </h4>
            <ul className="space-y-3 text-[#f7efe3]/85">
              <FooterLink label="info@inext.com" />
              <FooterLink label="+91 1234567890" />
              <li className="max-w-xs text-[13px] leading-relaxed opacity-80 pt-1">
                iNext Software Solutions,
                <br />
                India
              </li>
            </ul>
          </div>
        </div>

       {/* FOOTER BOTTOM BAR */}
<div className="mt-16">
  <div className="mx-auto max-w-6xl bg-white text-black rounded-full px-6 sm:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">

    {/* LEFT */}
    <p className="text-[11px] sm:text-xs text-black/70 text-center sm:text-left">
      © {new Date().getFullYear()} iNext Software. All rights reserved.
    </p>

    {/* RIGHT LINKS */}
    <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] sm:text-xs text-black/70">
      <li className="hover:text-black cursor-pointer underline-offset-4 hover:underline">
        Privacy Policy
      </li>
      <li className="hover:text-black cursor-pointer underline-offset-4 hover:underline">
        Terms & Conditions
      </li>
      <li className="hover:text-black cursor-pointer underline-offset-4 hover:underline">
        Refund Policy
      </li>
      <li className="hover:text-black cursor-pointer underline-offset-4 hover:underline">
        Sitemap
      </li>
    </ul>
  </div>
</div>

      </div>
    </footer>
  );
}
