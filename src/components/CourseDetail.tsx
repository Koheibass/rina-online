import { SectionTitle } from "./SectionTitle";
import { PriceBox } from "./PriceBox";

interface CourseFeature {
  label: string;
  description: string;
}

interface CourseDetailProps {
  id: string;
  titleJa: string;
  titleEn: string;
  catchphrase?: string;
  preamble?: React.ReactNode;
  features: CourseFeature[];
  extraContent?: React.ReactNode;
  recommendations: string[];
  planName: string;
  price: string;
  priceUnit: string;
  buttonHref: string;
  highlightClass: string;
  popular?: boolean;
}

export function CourseDetail({
  id,
  titleJa,
  titleEn,
  catchphrase,
  preamble,
  features,
  extraContent,
  recommendations,
  planName,
  price,
  priceUnit,
  buttonHref,
  highlightClass,
  popular = false,
}: CourseDetailProps) {
  return (
    <section className="mb-8 lg:mb-16">
      <SectionTitle title={titleJa} subtitle={titleEn} id={id} />

      {catchphrase && (
        <p className="text-center text-text-light text-sm lg:text-lg mb-8 -mt-8 lg:-mt-16">
          {catchphrase}
        </p>
      )}

      <div>
        <div className="bg-white rounded-2xl shadow-card p-6 lg:p-10 mb-8 border border-cream-border">
          <h3 className="text-center text-text-heading mb-8">
            <div className="text-sm lg:text-base font-bold gradient-coral text-white inline-block px-6 py-2 rounded-full">
              {titleJa}でできること
            </div>
          </h3>
          <div className="text-[13px] lg:text-[18px] text-text-main leading-relaxed">
            {preamble}
            {features.map((feature) => (
              <div key={feature.label} className="mb-5 bg-section-bg rounded-xl p-4 lg:p-5">
                <div className={`${highlightClass} font-bold py-1.5 px-4 rounded-full inline-block mb-2 text-sm`}>
                  {feature.label}
                </div>
                <p className="text-text-main">{feature.description}</p>
              </div>
            ))}
            {extraContent}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-card p-6 lg:p-10 mb-8 border border-cream-border">
          <h3 className="text-center text-text-heading mb-8">
            <div className="text-sm lg:text-base font-bold gradient-coral text-white inline-block px-6 py-2 rounded-full">
              こんな方にオススメ！
            </div>
          </h3>
          <div className="text-center text-[13px] lg:text-[18px] text-text-main leading-loose">
            {recommendations.map((rec) => (
              <div key={rec} className="flex items-start gap-2 text-left max-w-lg mx-auto mb-2">
                <span className="text-primary shrink-0 mt-0.5">&#x2714;</span>
                <span>{rec}</span>
              </div>
            ))}
          </div>
        </div>

        <PriceBox
          planName={planName}
          price={price}
          priceUnit={priceUnit}
          buttonHref={buttonHref}
          buttonText="まずは気軽に参加してみる"
          popular={popular}
        />
      </div>
    </section>
  );
}
