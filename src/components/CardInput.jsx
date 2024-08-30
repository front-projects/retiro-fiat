import { LuBookMinus } from "react-icons/lu";
import { useState } from "react";
import { FaAngleRight, FaCaretDown } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

export default function CardInput() {
  const [cardValue, setCardValue] = useState("");
  const [cardShow, setCardShow] = useState(false);
  const [bankShow, setBankShow] = useState(false);

  const handleChange = (event) => {
    const inputValue = event.target.value.replace(/\D/g, "");
    const formattedValue = inputValue.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardValue(formattedValue);
  };

  return (
    <div className="w-full flex mt-10">
      <p className="whitespace-nowrap min-w-[146px]">Retirar a</p>
      <div className="flex-grow ml-[20px]">
        <div className="w-full flex border-b-[1px] border-gray-400/20">
          <p className="pl-2 pr-6 border-b-2 border-yellow-600/60 text-black font-semibold">
            R<span className="text-[12px] font-bold">ETIRO</span> F
            <span className="text-[12px] font-bold">IAT</span>
          </p>
          <p className="pl-4 font-bold">Transferencia interna</p>
        </div>
        <div className="mt-6 w-full flex justify-between text-[13px]">
          <div>Dirección de la Cartera</div>
          <div className="text-yellow-600/80 font-bold">Añadir</div>
        </div>
        <div className="w-full bg-[#eff0f3] mt-2 rounded-md p-3 flex justify-between items-center relative">
          {cardShow && (
            <div className="absolute z-10 top-[120%] w-full bg-white left-0 border-[1px] border-gray-400/20 rounded-md pt-3 px-6 h-[300px]">
              <div className="w-full bg-[#eff0f3] rounded-md p-2">
                <IoSearchSharp />
              </div>
              <div className="w-full flex flex-col items-center justify-center h-[70%]">
                <img src="./search.png" alt="" />
                <div className="text-black">
                  No se han encontrado resultados
                </div>
              </div>
            </div>
          )}

          <input
            type="text"
            onFocus={() => setCardShow(true)}
            onBlur={() => setCardShow(false)}
            placeholder="Ingrese"
            value={cardValue}
            maxLength="19"
            onInput={handleChange}
            className="text-black text-[20px] flex-grow mr-[20px]"
          />
          <div className="text-black">
            <LuBookMinus />
          </div>
        </div>
        <div className="w-full flex justify-between mt-10">
          <div>Banco</div>
          <div className="flex gap-1">
            Direccion del contrato{" "}
            <span className="text-black font-bold flex items-center">
              Finaliza con gjLj6t <FaAngleRight />
            </span>
          </div>
        </div>
        <div className="w-full bg-[#eff0f3] mt-2 rounded-md p-3 flex justify-between items-center relative">
          {bankShow && (
            <div className="absolute z-10 top-[120%] w-full bg-white left-0 border-[1px] border-gray-400/20 rounded-md pt-3 px-6 h-[300px]">
              <div className="w-full bg-[#eff0f3] rounded-md p-2">
                <IoSearchSharp />
              </div>
              <div className="w-full flex flex-col items-center justify-center h-[70%]">
                <img src="./search.png" alt="" />
                <div className="text-black">
                  No se han encontrado resultados
                </div>
              </div>
            </div>
          )}

          <input
            type="text"
            onFocus={() => setBankShow(true)}
            onBlur={() => setBankShow(false)}
            placeholder=""
            className="text-black text-[20px] flex-grow mr-[20px]"
          />
          <div className="">
            <FaCaretDown />
          </div>
        </div>
      </div>
    </div>
  );
}
