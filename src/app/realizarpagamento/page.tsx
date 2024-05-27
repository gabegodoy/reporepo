import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ArrowLeftWhite from "../../images/icons/arrow-left-white.png";

export default function RealizarPagamento() {
  return (
    <>
      <div className="container px-3 mb-4">
        <div className="pt-8">
          <div className="flex gap-2 items-center">
            <Link href="/historicopagamentos" className="relative z-10">
              <Image src={ArrowLeftWhite} alt="ícone de seta para a esquerda" />
            </Link>
            <span className="text-base text-white font-semibold block">
              Realizar pagamentos
            </span>
          </div>
        </div>
      </div>
      <div className="h-4/5">
        <div className="container px-3 mb-8">
          <div className="pt-4">
            <header className="flex flex-col gap-4 relative z-10">
              <div>
                <span className="text-[10px] text-white font-semibold text-center block">
                  Pague à vista
                </span>
                <span className="text-xl text-white font-bold text-center block">
                  R$ 38.000,00
                </span>
              </div>
            </header>
          </div>
        </div>
        <div className="bg-off-white tab-height">
          <div className="px-3">
            <Tabs defaultValue="Boletos" className="pb-4">
              <div className="flex justify-center items-center">
                <TabsList className="rounded-full bg-white w-4/5 h-14 mb-4 relative top-[-20px]">
                  <TabsTrigger
                    value="Boletos"
                    className="font-semibold py-2 px-8"
                  >
                    Boletos
                  </TabsTrigger>
                  <TabsTrigger value="PIX" className="font-semibold py-2 px-8">
                    PIX
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="Boletos" className="grid grid-cols-1 gap-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="rounded-full bg-danger w-[7px] h-[7px]"></span>
                      <span className="text-black text-[10px] font-bold uppercase">
                        Vencido
                      </span>
                    </div>
                    <span className="text-grey text-[10px] font-semibold block">
                      Nº da parcela: 16
                    </span>
                  </div>
                  <div>
                    <span className="text-danger font-bold text-xs text-end block">
                      R$9.500,00
                    </span>
                    <span className="text-grey text-[10px] font-semibold block">
                      Vencimento em: 10/07/2023
                    </span>
                  </div>
                </div>
                <hr></hr>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="rounded-full bg-danger w-[7px] h-[7px]"></span>
                      <span className="text-black text-[10px] font-bold uppercase">
                        Vencido
                      </span>
                    </div>
                    <span className="text-grey text-[10px] font-semibold block">
                      Nº da parcela: 17
                    </span>
                  </div>
                  <div>
                    <span className="text-danger font-bold text-xs text-end block">
                      R$9.500,00
                    </span>
                    <span className="text-grey text-[10px] font-semibold block">
                      Vencimento em: 10/08/2023
                    </span>
                  </div>
                </div>
                <hr></hr>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="rounded-full bg-danger w-[7px] h-[7px]"></span>
                      <span className="text-black text-[10px] font-bold uppercase">
                        Vencido
                      </span>
                    </div>
                    <span className="text-grey text-[10px] font-semibold block">
                      Nº da parcela: 15
                    </span>
                  </div>
                  <div>
                    <span className="text-danger font-bold text-xs text-end block">
                      R$9.500,00
                    </span>
                    <span className="text-grey text-[10px] font-semibold block">
                      Vencimento em: 10/06/2023
                    </span>
                  </div>
                </div>
                <hr></hr>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="rounded-full bg-danger w-[7px] h-[7px]"></span>
                      <span className="text-black text-[10px] font-bold uppercase">
                        Vencido
                      </span>
                    </div>
                    <span className="text-grey text-[10px] font-semibold block">
                      Nº da parcela: 14
                    </span>
                  </div>
                  <div>
                    <span className="text-danger font-bold text-xs text-end block">
                      R$9.500,00
                    </span>
                    <span className="text-grey text-[10px] font-semibold block">
                      Vencimento em: 10/05/2023
                    </span>
                  </div>
                </div>
                <div className="w-full py-2 px-4 bg-white fixed bottom-0 left-0">
                  <Link
                    href="/gerarboleto"
                    className="bg-primary-blue text-white font-bold w-full p-4 rounded-lg block text-center"
                  >
                    Gerar boleto
                  </Link>
                </div>
              </TabsContent>
              <TabsContent value="PIX" className="grid grid-cols-1 gap-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="rounded-full bg-danger w-[7px] h-[7px]"></span>
                      <span className="text-black text-[10px] font-bold uppercase">
                        Vencido
                      </span>
                    </div>
                    <span className="text-grey text-[10px] font-semibold block">
                      Nº da parcela: 16
                    </span>
                  </div>
                  <div>
                    <span className="text-danger font-bold text-xs text-end block">
                      R$9.500,00
                    </span>
                    <span className="text-grey text-[10px] font-semibold block">
                      Vencimento em: 10/07/2023
                    </span>
                  </div>
                </div>
                <hr></hr>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="rounded-full bg-danger w-[7px] h-[7px]"></span>
                      <span className="text-black text-[10px] font-bold uppercase">
                        Vencido
                      </span>
                    </div>
                    <span className="text-grey text-[10px] font-semibold block">
                      Nº da parcela: 17
                    </span>
                  </div>
                  <div>
                    <span className="text-danger font-bold text-xs text-end block">
                      R$9.500,00
                    </span>
                    <span className="text-grey text-[10px] font-semibold block">
                      Vencimento em: 10/08/2023
                    </span>
                  </div>
                </div>
                <div className="py-2 px-4 bg-white fixed bottom-0 left-0 w-full">
                  <Link
                    href="/gerarpix"
                    className="bg-primary-blue text-white font-bold w-full p-4 rounded-lg block text-center"
                  >
                    Gerar código PIX
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
