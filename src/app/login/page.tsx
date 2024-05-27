import Image from "next/image";
import carPic from "../../images/car-image.png";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  FloatingLabel,
  FloatingInput,
} from "@/components/ui/floating-label-input";
import { Button } from "@/components/ui/button";

export default function Login() {
  const isValid = false;

  return (
    <main className="h-screen">
      <div className="pt-8 h-full">
        <div className="h-1/2 mb-2">
          <div className="mb-16 w-4/5 mx-auto">
            <span className="border-[1px] rounded-md border-white py-5 text-xs text-white text-center font-bold block">
              SUA MARCA
            </span>
          </div>
          <Image src={carPic} alt="imagem de um carro" className="pb-8" />
        </div>
        <div className="rounded-t-lg bg-white py-6 px-4 h-1/2">
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-sm text-darkgrey font-bold">
              Confirme os primeiros 4 dígitos do seu CPF:
            </h3>
            <div className="relative">
              <FloatingInput id="floating-customize" />
              <FloatingLabel htmlFor="floating-customize">
                Primeiros 4 dígitos do seu CPF*
              </FloatingLabel>
            </div>
            <Button type="submit" className={(isValid ? "bg-primary-blue " : "bg-muted ") + "text-white font-bold w-full px-4 py-2"}>Continuar</Button>
          </div>
          {/* <div className="flex flex-col justify-between h-full">
            <h3 className="text-sm text-darkgrey font-bold">
              Digite o código que enviamos para o telefone (11) *****-**98:
            </h3>
            <div className="relative">
              <FloatingInput id="floating-customize" />
              <FloatingLabel htmlFor="floating-customize">
                Código de autenticação*
              </FloatingLabel>
            </div>
            <Button
              type="submit"
              className={
                (isValid ? "bg-primary-blue " : "bg-muted ") +
                "text-white font-bold w-full px-4 py-2"
              }
            >
              Continuar
            </Button>
          </div> */}
        </div>
      </div>
    </main>
  );
}
