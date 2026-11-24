import Image from "next/image";
import { CircleDot, Handshake, Settings, TrendingUp, UserRound } from "lucide-react";
import "@/app/company-profile/page.module.css";

const journey = [
  [CircleDot, "The Beginning", "A Trading Foundation", "The journey began with Salem stainless-steel coils and a disciplined focus on dependable material.", "/images/company-profile/company-beginning-illustrative.png", "archive"],
  [Handshake, "Trust & Association", "Relationships Built the Reach", "Consistent service strengthened customer confidence, while the VINOD association expanded activity across Western Uttar Pradesh.", "/about/plant-overview.jpg", "heritage"],
  [UserRound, "2013 · Next Generation", "A New Operating Outlook", "Mr. Pulkit Agarwal (CA) joined the business and advanced the shift toward automation, efficiency, and bulk production.", "/images/company-profile/transformation-2013-illustrative.png", "transition"],
  [Settings, "Manufacturing Transformation", "Capability Moved In-House", "Circle production, coil slitting, and cut-to-length machinery created a stronger value-added processing setup.", "/images/company-profile/coil-slitting-line-illustrative.png", "industry"],
  [TrendingUp, "Today", "Stronger. Modern. Trusted.", "Sourcing knowledge, modern infrastructure, and established industry relationships now operate as one connected capability.", "/images/company-profile/hero-steel-coils-generated.png", "today"],
] as const;

export default function JourneySection() {
  return (
    <section className="journey" id="journey">
      <div className="wrap">
        <div className="sectionIntro" data-aos="fade-up">
          <h2>From Legacy to Innovation</h2>
          <p>Tracing SS Metals’ journey from trusted roots to modern manufacturing excellence.</p>
        </div>
        <ol className="journeyStory">
          {journey.map(([Icon, era, title, text, image, tone], index) => (
            <li
              className="journeyStage"
              data-tone={tone}
              key={era}
              data-aos="fade-up"
              data-aos-delay={index * 90}
            >
              <span className="journeyProgress"><b>{String(index + 1).padStart(2, "0")}</b></span>
              <div className="journeyStageImage">
                <Image src={image} alt={`Illustrative visual representing ${era}`} fill sizes="(max-width: 800px) 100vw, 56vw" />
                <span className="journeyBadge"><Icon /> {era}</span>
              </div>
              <div className="journeyStageContent"><span className="journeyEra">{era}</span><h3>{title}</h3><p>{text}</p><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
