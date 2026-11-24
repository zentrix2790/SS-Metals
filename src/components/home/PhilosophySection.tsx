import { Gem, Handshake, Repeat2, Sprout } from "lucide-react";
import "@/app/company-profile/page.module.css";

const values = [
  [Gem, "Quality First", "Material and processing decisions guided by consistency and customer expectations."],
  [Handshake, "Long-Term Relationships", "Building dependable connections through service and reliability."],
  [Repeat2, "Continuous Improvement", "Strengthening processes and equipment as business requirements evolve."],
  [Sprout, "Responsible Growth", "Developing capability while maintaining a commitment to quality."],
] as const;

export default function PhilosophySection() {
  return (
    <section className="philosophy">
      <div className="wrap">
        <div className="quoteBlock" data-aos="fade-up">
          <p className="eyebrow">Our Philosophy</p>
          <h2>One Principle Has Remained Unchanged.</h2>
          <blockquote>“Deliver the Best Quality Possible to the Customer.”</blockquote>
        </div>
        <div className="valueGrid">
          {values.map(([Icon, title, text], index) => <article key={title} data-aos="fade-up" data-aos-delay={index * 70}><Icon /><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}
