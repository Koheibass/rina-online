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
    <div className="px-2 lg:px-5 py-2 my-8 text-dark-text bg-cream-box border-t-[5px] border-b-[5px] border-cream-border-alt pb-8">
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
