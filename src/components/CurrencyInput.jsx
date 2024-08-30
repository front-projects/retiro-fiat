import { FaCaretDown } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function CurrencyInput() {
  return (
    <div className="flex w-full cursor-pointer">
      <p className="whitespace-nowrap">Seleccionar moneda</p>
      <div className="flex-grow ml-[20px]">
        <div className="w-full flex justify-between  text-[13px]">
          <p>Moneda</p>
          <p className="text-yellow-600/80 font-bold flex items-center">
            Convertir <FiArrowRight />
          </p>
        </div>
        <div className="w-full bg-[#eff0f3] mt-2 rounded-md p-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-[28px] h-[28px]">
              <img src="./usdt.svg" alt="usdt" className="w-full h-full" />
            </div>
            <p className="text-black font-bold">USDT </p>
            <p className="text-[12px]">Tether USDT</p>
          </div>
          <p>
            <FaCaretDown />
          </p>
        </div>
      </div>
    </div>
  );
}
