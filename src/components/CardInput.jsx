import { LuBookMinus } from "react-icons/lu";
import { useEffect, useRef, useState } from "react";
import { FaAngleRight, FaCaretDown } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

export default function CardInput() {
  const [cardValue, setCardValue] = useState("");
  const [cardShow, setCardShow] = useState(false);
  const [bankShow, setBankShow] = useState(false);
  const [searchShow, setSearchShow] = useState(false);

  const cardRef = useRef();
  const bankRef = useRef();
  const searchRef = useRef();
  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setCardShow(false);
    }
  };
  const handleClickOutsideBank = (event) => {
    if (
      bankRef.current &&
      !bankRef.current.contains(event.target) &&
      searchRef.current &&
      !searchRef.current.contains(event.target)
    ) {
      setBankShow(false);
      setSearchShow(false);
    }
  };

  useEffect(() => {
    if (cardShow) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [cardShow]);

  useEffect(() => {
    if (bankShow) {
      document.addEventListener("click", handleClickOutsideBank);
    } else {
      document.removeEventListener("click", handleClickOutsideBank);
    }
    return () => {
      document.removeEventListener("click", handleClickOutsideBank);
    };
  }, [bankShow]);

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
            ref={cardRef}
            onFocus={() => setCardShow(true)}
            // onBlur={() => setCardShow(false)}
            placeholder="Ingrese"
            value={cardValue}
            onClick={() => {
              console.log(cardRef);
              setTimeout(() => {
                cardRef.current.placeholder = "";
                cardRef.current.className =
                  "text-black text-[20px] flex-grow mr-[20px] caret-transparent";
              }, [500]);
            }}
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
            <div className="absolute z-10 top-[120%] w-full bg-white left-0 border-[1px] border-gray-400/20 rounded-md pt-3 px-4">
              <div className="w-full bg-[#eff0f3] rounded-md p-2 flex items-center gap-2 border-2 border-yellow-600/60 custom-shadow-input">
                <IoSearchSharp />
                <input
                  type="text"
                  ref={searchRef}
                  onClick={() => {
                    setTimeout(() => {
                      searchRef.current.placeholder = "";
                      searchRef.current.className =
                        "text-black text-[20px] flex-grow mr-[20px] text-[12px] font-semibold caret-transparent";
                    }, [500]);
                  }}
                  onChange={() =>
                    searchRef.current.value !== ""
                      ? setSearchShow(true)
                      : setSearchShow(false)
                  }
                  // onBlur={() => setBankShow(false)}
                  placeholder=""
                  className="text-black text-[20px] flex-grow mr-[20px] text-[12px] font-semibold"
                />
              </div>
              {searchShow ? (
                <div className="w-full flex flex-col items-center justify-center h-[200px]">
                  <img src="./search.png" alt="" />
                </div>
              ) : (
                <div className="flex flex-col w-full mt-4 h-[220px] overflow-y-auto cursor-pointer">
                  <div className="flex justify-between w-full bg-[#eeeff2] p-2 rounded-md">
                    <p className="text-black text-[18px]  ">TRC20</p>
                    <p>fee:1.3 USDT($1.30)</p>
                  </div>
                  <div className="flex justify-between w-full  p-2">
                    <p className="text-black text-[18px]">BSC</p>
                    <p>fee:1.3 USDT($1.30)</p>
                  </div>
                  <div className="flex justify-between w-full  p-2">
                    <p className="text-black text-[18px]">TON</p>
                    <p>fee:0 USDT</p>
                  </div>
                  <div className="flex justify-between w-full  p-2">
                    <p className="text-black text-[18px]">Arbitrum One</p>
                    <p>fee:1 USDT($1.00)</p>
                  </div>
                  <div className="flex justify-between w-full  p-2">
                    <p className="text-black text-[18px]">SOL</p>
                    <p>fee:1 USDT($1.00)</p>
                  </div>
                  <div className="flex justify-between w-full  p-2">
                    <p className="text-black text-[18px]">Mantle Network</p>
                    <p>fee:0 USDT</p>
                  </div>
                  <div className="flex justify-between w-full  p-2">
                    <p className="text-black text-[18px]">TON</p>
                    <p>fee:0 USDT</p>
                  </div>
                  <div className="flex justify-between w-full  p-2">
                    <p className="text-black text-[18px]">Arbitrum One</p>
                    <p>fee:1 USDT($1.00)</p>
                  </div>
                  <div className="flex justify-between w-full  p-2">
                    <p className="text-black text-[18px]">SOL</p>
                    <p>fee:1 USDT($1.00)</p>
                  </div>
                  <div className="flex justify-between w-full  p-2">
                    <p className="text-black text-[18px]">Mantle Network</p>
                    <p>fee:0 USDT</p>
                  </div>
                </div>
              )}
            </div>
          )}

          <input
            type="text"
            ref={bankRef}
            onFocus={() => setBankShow(true)}
            onClick={() => {
              searchRef.current.focus();
            }}
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
