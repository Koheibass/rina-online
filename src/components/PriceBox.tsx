import { OrangeButton } from "./OrangeButton";

interface PriceBoxProps {
  planName: string;
  price: string;
  priceUnit: string;
  buttonHref: string;
  buttonText: string;
  external?: boolean;
  popular?: boolean;
}

export function PriceBox({
  planName,
  price,
  priceUnit,
  buttonHref,
  buttonText,
  external = false,
  popular = false,
}: PriceBoxProps) {
  return (
    <div className={`relative px-6 lg:px-10 py-8 my-8 bg-white rounded-2xl shadow-card border-2 ${popular ? "border-primary" : "border-cream-border"}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-coral text-white text-xs font-bold px-4 py-1 rounded-full">
          人気 No.1
        </div>
      )}
      <h2 className="text-[14px] md:text-[20px] lg:text-[24px] text-center text-text-heading">
        {planName}
        <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mt-2">
          {price}
          <span className="text-base lg:text-lg text-text-light font-normal">
            {priceUnit}
          </span>
        </div>
      </h2>
      <div className="text-center mt-6">
        <OrangeButton href={buttonHref} external={external}>
          {buttonText}
        </OrangeButton>
      </div>
    </div>
  );
}
