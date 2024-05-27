import {
  FloatingLabel,
  FloatingInput,
} from "@/components/ui/floating-label-input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ArrowLeftWhite from "../../images/icons/arrow-left-white.png";

export default function Contato() {
  const isValid = false;

  return (
    <div className="h-dvh">
      <div className="container px-4 mb-4">
        <div className="pt-8">
          <div className="flex gap-2 items-center">
            <Link href="/devedor" className="relative z-10">
              <Image src={ArrowLeftWhite} alt="ícone de seta para a esquerda" />
            </Link>
            <span className="text-base text-white font-semibold block">
              Entre em contato
            </span>
          </div>
        </div>
      </div>
      <main className="bg-off-white h-4/5 p-4">
        <div className="relative mb-4">
          <FloatingInput
            id="floating-customize"
            className="bg-off-white border-2 border-grey"
          />
          <FloatingLabel htmlFor="floating-customize" className="bg-off-white">
            Motivo do contato*
          </FloatingLabel>
        </div>
        <div className="relative mb-24">
          <FloatingLabel htmlFor="message" className="bg-off-white">
            Descreva sua dúvida*
          </FloatingLabel>
          <Textarea
            id="message"
            className="bg-off-white border-2 border-grey min-h-52"
          />
        </div>
        <div className="rounded-md bg-white py-2 px-4">
          <span className="font-medium text-[10px] block">
            Descreva sua dúvida, e em breve entraremos em contato.
          </span>
        </div>
      </main>
      <div className="py-2 px-4 bg-white fixed bottom-0 w-full">
        <Button
          type="submit"
          className={
            (isValid ? "bg-primary-blue " : "bg-muted ") +
            "text-white font-bold w-full px-4 py-2"
          }
        >
          Enviar mensagem
        </Button>
      </div>
    </div>
  );
}
