import { OrangeButton } from "./OrangeButton";

interface PriceBoxProps {
  planName: string;
  price: string;
  priceUnit: string;
  buttonHref: string;
  buttonText: string;
  external?: boolean;
}

export function PriceBox({
  planName,
  price,
  priceUnit,
  buttonHref,
  buttonText,
  external = false,
}: PriceBoxProps) {
  return (
    <div className="px-4 lg:px-8 py-6 my-8 text-dark-text bg-cream-box rounded-2xl shadow-card">
      <h2 className="text-[14px] md:text-[20px] lg:text-[30px] text-center">
        {planName}
        <div className="text-2xl md:text-3xl lg:text-[40px] font-extrabold">
          {price}
          <small>
            <small>{priceUnit}</small>
          </small>
        </div>
      </h2>
      <div className="text-center">
        <OrangeButton href={buttonHref} external={external}>
          {buttonText}
        </OrangeButton>
      </div>
    </div>
  );
}
