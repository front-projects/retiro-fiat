import CardInput from "./CardInput";
import Confirm from "./Confirm";
import CurrencyInput from "./CurrencyInput";

export default function LeftPart() {
  return (
    <div className="flex-grow bg-white rounded-[24px] p-[36px] font-semibold">
      <CurrencyInput />
      <CardInput />
      <Confirm />
    </div>
  );
}
