import { useState } from "react";
import { PriceFilter } from "./PriceFilter";

const minusIcon = "-";
const plusIcon = "+";

function AccordionPrice({ props }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div
      className="sm:my-4 md:my-6 shadow-sm cursor-pointer bg-white w-full font-mullish"
      onClick={toggleExpanded}
    >
      <div className="px-6 text-left items-center h-20 select-none flex justify-between flex-row font-mullish">
        <h5 className="flex-1">Price</h5>
        <div className="flex-none pl-2">{expanded ? minusIcon : plusIcon}</div>
      </div>
      <div
        className={`px-6 pt-0 overflow-hidden transition-[max-height] font-mullish duration-500 ease-in ${
          expanded ? "max-h-40" : "max-h-0"
        }`}
      >
        <PriceFilter />
      </div>
    </div>
  );
}
export default AccordionPrice;
