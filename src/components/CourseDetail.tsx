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
  preamble?: React.ReactNode;
  features: CourseFeature[];
  extraContent?: React.ReactNode;
  recommendations: string[];
  planName: string;
  price: string;
  priceUnit: string;
  buttonHref: string;
  highlightClass: string;
}

export function CourseDetail({
  id,
  titleJa,
  titleEn,
  preamble,
  features,
  extraContent,
  recommendations,
  planName,
  price,
  priceUnit,
  buttonHref,
  highlightClass,
}: CourseDetailProps) {
  return (
    <section className="mb-8 lg:mb-16">
      <SectionTitle title={titleJa} subtitle={titleEn} id={id} />
      <div>
        <h3 className="text-center text-brown my-4">
          <div className="text-sm lg:text-base font-bold bg-cream-footer inline-block px-4 py-1 rounded">
            {titleJa}でできること
          </div>
        </h3>
        <div className="text-[13px] lg:text-[20px] text-brown leading-relaxed">
          {preamble}
          {features.map((feature) => (
            <div key={feature.label} className="mb-4">
              <div className={`${highlightClass} font-bold py-1 px-2 rounded inline-block mb-1`}>
                {feature.label}
              </div>
              <p>{feature.description}</p>
            </div>
          ))}
          {extraContent}
        </div>

        <h3 className="text-center text-brown mt-8 mb-4">
          <div className="text-sm lg:text-base font-bold bg-cream-footer inline-block px-4 py-1 rounded">
            {titleJa}は、こんな方にオススメ！
          </div>
        </h3>
        <div className="text-center text-[13px] lg:text-[20px] text-brown leading-loose">
          {recommendations.map((rec) => (
            <div key={rec}>✩ {rec}</div>
          ))}
        </div>

        <PriceBox
          planName={planName}
          price={price}
          priceUnit={priceUnit}
          buttonHref={buttonHref}
          buttonText="参加する"
        />
      </div>
    </section>
  );
}
