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
import IconCopy from "../../images/icons/icon-copy.png";
import qrCodePic from "../../images/QRCodePic.png";

export default function GerarBoleto() {
  return (
    <>
      <div className="container p-4 px-3">
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
          <CardContent className="pb-2 px-3">
            <p className="font-semibold text-black text-xs text-center mb-4">
              Seu acordo foi concluído. Realize o pagamento pela forma
              escolhida.
            </p>
            <p className="font-medium text-[10px] text-border-grey text-center mb-4">
              Realize o pagamento através do QR Code abaixo, ou copie e cole o
              código PIX no processo de pagamento via PIX do seu banco.
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
              <Image
                src={qrCodePic}
                alt="imagem de QRCode"
                className="mx-auto"
              ></Image>
            </CardTitle>
          </CardHeader>
          <CardContent className="px-3 pb-2">
            <p className="font-medium text-[10px] text-border-grey mb-4">
              Os dados apresentados têm como base 23/10/2023 - 18h57.
              Demonstrativo para simples conferência e sujeito a alterações.
            </p>
          </CardContent>
        </Card>
        <div className="w-full mt-6">
          <Button
            type="submit"
            className="bg-white text-primary-blue text-sm font-bold flex items-center justify-center gap-1 w-full"
          >
            <Image src={IconCopy} alt="ícone de cópia" />
            Copiar chave PIX
          </Button>
        </div>
      </div>
    </>
  );
}
