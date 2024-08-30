export default function RightPart() {
  return (
    <div className="whitespace-nowrap font-bold">
      <h1 className="text-[24px] text-black/80">Preguntas frecuentes</h1>
      <ul className="flex flex-col gap-2 mt-8 border-b-[1px] border-gray-300 pb-4 text-black/80 text-[18px]">
        <li>• Preguntas más frecuentes sobre la retirada de c</li>
        <li>• Cómo retirar mediante la transferencia interna</li>
        <li>• Vea el estado de depósito/retiro de todas las mo</li>
        <li>• Cómo cambiar tu límite de retiro</li>
        <li>• Cómo gestionar tu agenda de direcciones de reti</li>
      </ul>
      <div className="bg-white w-full mt-4 rounded-md shadow-sm p-3 font-medium text-[15px]">
        <p className="">Límite restante diario</p>
        <div className="flex items-center gap-2 mt-2">
          <progress value="20000" max="20000" className="rounded-xl"></progress>
          <p className="text-[#2aba63]">100.00%</p>
          <div>
            <span className="text-black font-bold">20,000</span>
            /20,000 USDT
          </div>
        </div>
        <p className="mt-1">Límite restante mensual</p>
        <div className="flex items-center gap-2 mt-2">
          <progress value="20000" max="20000" className="rounded-xl"></progress>
          <p className="text-[#2aba63]">100.00%</p>
          <div>
            <span className="text-black font-bold">100,000</span>
            /100,000 USDT
          </div>
        </div>
        <div className="flex gap-2 mt-3 font-bold text-yellow-600/80">
          <p>Incrementar límite</p>
          <p>Administrar límite</p>
        </div>
      </div>
    </div>
  );
}
