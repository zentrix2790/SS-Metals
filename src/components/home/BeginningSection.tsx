import Image from "next/image";

export default function BeginningSection() {
  return (
    <section className="section overflow-hidden bg-white">
      <div className="wrap grid gap-12 lg:grid-cols-[46%_54%] lg:gap-24 lg:items-center">
        <figure className="relative overflow-visible lg:-ml-6" data-aos="fade-right">
          <Image
            src="/images/company-profile/company-beginning-illustrative.png"
            alt="Illustrative view of SS Metals' early stainless-steel trading roots"
            width={1200}
            height={800}
            className="aspect-[4/3] w-full object-cover rounded-[12px] shadow-[0_20px_44px_rgba(7,31,43,0.12)] [filter:sepia(0.45)_saturate(0.7)_contrast(0.95)]"
          />
          <figcaption className="absolute z-10 -bottom-5 left-5 rounded-[8px] border border-white/35 bg-[#8e6918]/95 px-[18px] py-3.5 text-[0.8rem] text-white shadow-[0_16px_36px_rgba(7,31,43,0.18),0_4px_12px_rgba(7,31,43,0.08)]">
            <span className="block text-[0.67rem] font-semibold uppercase tracking-[0.1em] text-white/90 mb-[3px]">Trading Roots</span>
            <span className="block font-semibold">Salem Stainless-Steel Coils</span>
          </figcaption>
        </figure>
        <div className="pt-4 lg:pt-0 lg:pl-10" data-aos="fade-left">
          <div className="flex items-center gap-4"><span className="h-0.5 w-12 bg-brass" /><p className="text-sm font-bold uppercase tracking-[0.22em] text-steel-600">Our Beginning</p></div>
          <h2 className="h-section mt-5">A Foundation Built Around Quality.</h2>
          <p className="mt-5 text-lg leading-relaxed text-steel-700">SS Metals began its journey under the leadership of <strong className="text-ink">Mr. Raman Lal Agarwal (CA)</strong>, along with <strong className="text-ink">Mr. Sarvesh Kumar</strong>, starting with Salem stainless steel coils.</p>
          <p className="mt-5 text-lg leading-relaxed text-steel-700">From the beginning, the philosophy was simple — source dependable material, maintain consistency, and deliver the best possible quality to every customer.</p>
        </div>
      </div>
    </section>
  );
}
