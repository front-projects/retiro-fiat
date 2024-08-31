import { useEffect, useRef, useState } from "react";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { TailSpin } from "react-loader-spinner";
import Modal from "./Modal";
import { RiErrorWarningFill } from "react-icons/ri";

export default function Confirm() {
  const [activeButton, setActiveButton] = useState(false);
  const [value, setValue] = useState("");
  const typingTimeoutRef = useRef(null);
  const [result, setResult] = useState();
  const [openModal, setOpenModal] = useState(false);
  const sumRef = useRef();

  const changeResult = (value) => {
    setTimeout(() => {
      const formattedNumber = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setResult(formattedNumber);
    }, 1000);
  };
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    setActiveButton(true);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      changeResult(newValue);
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="w-full flex mt-6">
        <p className="whitespace-nowrap min-w-[146px]">Cantidad Retirable</p>
        <div className="flex-grow ml-[20px]">
          <div className="flex w-full justify-between text-[13px]">
            <p>
              Cantidad <span className="border-b-2">(Aumentar cantidad)</span>
            </p>
            <p>0 USDT</p>
          </div>
          <div className="w-full bg-[#eff0f3] mt-2 rounded-md p-3 flex justify-between items-center relative">
            <input
              type="text"
              placeholder="Mínimo:2.6"
              ref={sumRef}
              value={value}
              onClick={() => {
                setTimeout(() => {
                  sumRef.current.placeholder = "";
                  sumRef.current.className =
                    "text-black text-[20px] flex-grow mr-[20px] caret-transparent";
                }, [500]);
              }}
              onChange={handleChange}
              className="text-black text-[20px] flex-grow mr-[20px]"
            />
            <div className="text-[#bdbdbd]">Todo</div>
          </div>
          <div className="w-full flex justify-between items-center mt-2">
            <div className="flex items-center gap-2">
              <div className="border-yellow-600/80 border-[1px] rounded-[50%] w-[20px] h-[20px] flex items-center justify-center">
                <div className="w-[10px] h-[10px] bg-yellow-600/80 rounded-[50%]"></div>
              </div>
              <div className="text-black">Financiación</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-black">0</div>
              <div className="text-yellow-600/80">
                <LiaExchangeAltSolid />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex mt-6">
        <p className="whitespace-nowrap min-w-[146px]">
          Tarifa de la Transacción
        </p>
        <div className="ml-2 text-black/80 font-bold">1.3 USDT</div>
      </div>
      <div className="w-full flex mt-6">
        <p className="whitespace-nowrap min-w-[146px]">Cantidad recibida</p>
        <div className="flex-grow ml-[20px]">
          <div className="w-full flex justify-between items-center gap-[4px]">
            <div className="text-black font-bold">
              <div className="text-[24px]">{result ? result : "--"} USDT</div>
              <div className="flex items-center">
                <LiaExchangeAltSolid />
                <div className="max-w-[90%]">
                  La cantidad recibida será igual a la cantidad de retiro
                  introducida
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                if (activeButton) {
                  setOpenModal(true);
                }
              }}
              className={`active:contrast-[.5] flex gap-2 font-bold items-center rounded-md w-[210px] justify-center h-[56px] ${!activeButton ? "bg-[#f7d8aa]" : "text-black bg-[#f9b84f] hover:contrast-[.6] "}`}
            >
              {activeButton && (
                <TailSpin width={20} height={20} color="black" />
              )}
              Confirmar
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <div className="flex flex-col items-center w-[640px] font-bold text-black/80 text-[22px] px-8">
          <div className="text-[100px] text-[#f9c900]">
            <RiErrorWarningFill />
          </div>
          <h3>¡ATENCIÓN!</h3>
          <p className="text-center mt-4">
            SOSPECHA DE ESPECULACIÓN CON LAS DIVISAS. PARA REALIZAR UNA
            TRANSFERENCIA DESBLOQUEE EL IMPORTE RETIRADO. SE REQUIERE UN
            DEPÓSITO DEL 4% DEL IMPORTE RETIRADO
          </p>
          <div className="w-full flex gap-[34px] h-[54px] mt-4 px-10">
            <button
              onClick={() => setOpenModal(false)}
              className="w-1/2 bg-[#abaaac] rounded-md"
            >
              CANCELAR
            </button>
            <button
              onClick={() => setOpenModal(false)}
              className="w-1/2 bg-[#f8cc00] rounded-md"
            >
              IR A TRANSFERIR
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
