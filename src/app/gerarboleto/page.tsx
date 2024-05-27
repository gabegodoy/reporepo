import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import IconClose from "../../images/icons/icon-close.png";
import { Button } from "@/components/ui/button";
import IconCopy from "../../images/icons/icon-copy.png"
import barcodePic from "../../images/Barcode.png"

export default function GerarBoleto() {
  return (
    <>
      <div className="container py-4 px-3">
        <div className="pt-4 mb-6">
          <div className="flex items-center justify-end">
            <Link href="/realizarpagamento" className="relative z-10">
              <Image src={IconClose} alt="ícone de fechar" />
            </Link>
          </div>
        </div>
        <Card className="rounded-t-lg rounded-b-none">
          <CardHeader className="p-3">
            <CardTitle>
              <div className="">
                <span className="border-[1px] rounded-md border-grey py-2 px-6 text-center text-xs text-grey font-bold block">SUA MARCA</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-5 pb-2 px-3">
            <p className="font-semibold text-black text-xs text-center mb-4">
              Seu acordo foi concluído. Realize o pagamento pela forma
              escolhida.
            </p>
            <p className="font-medium text-[10px] text-border-grey text-center mb-4">
              Realize o pagamento através do boleto copiando o código abaixo.
              Este boleto tem <b>validade para a data de vencimento abaixo</b>.
            </p>
          </CardContent>
          <CardFooter className="px-3 justify-between">
            <div className="min-w-24">
              <span className="text-grey text-[10px] font-semibold block">
                Valor total a pagar
              </span>
              <span className="font-bold text-xs text-black">R$38.000,00</span>
            </div>
            <div className="min-w-24">
              <span className="text-grey text-[10px] font-semibold block">
                Vencimento
              </span>
              <span className="font-bold text-xs text-black">23/09/2023</span>
            </div>
          </CardFooter>
        </Card>
        <Card className="b-t-border-grey rounded-none bg-washed-blue">
          <CardHeader className="p-3">
            <CardTitle>
              <Image src={barcodePic} alt="imagem de código de barras" className="mx-auto">
              </Image>
            </CardTitle>
            <CardDescription className="font-medium text-[10px] text-grey-500">001 9 05009 5 4014481606 9 0680935031 4 3 3737 0003800000</CardDescription>
          </CardHeader>
          <CardContent className="px-3 pb-2">
            <p className="font-medium text-[10px] text-border-grey mb-4">
              A liquidação do boleto está condicionada ao processo de
              compensação do banco em que o boleto foi pago.
            </p>
          </CardContent>
        </Card>
        <div className="w-full mt-6 flex gap-4">
          <Button
            type="submit"
            className="bg-tranparent border-white border-2 text-white font-bold w-1/2"
          >
            Baixar Boleto
          </Button>
          <Button
            type="submit"
            className="bg-white flex items-center gap-1 w-1/2"
          >
            <Image
                src={IconCopy}
                alt="ícone de cópia"
                className="shrink-0"
            />
            <span className="block text-primary-blue font-bold text-sm">Copiar Código</span>
          </Button>
        </div>
      </div>
    </>
  );
}
