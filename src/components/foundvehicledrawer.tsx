import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerClose,
} from "@/components/ui/drawer";
import RedirectDialog from "./redirectdialog";
import Image from "next/image";
import Link from "next/link";
import CloseGrey from "../images/icons/icon-close-grey.png";
import CircledCar from "../images/CircledCar.png";
import mapPointer from "../images/icons/icon-mapPointer.png";
import certificateIcon from "../images/icons/icon-certification.png";
import { Card, CardContent, CardFooter } from "./ui/card";
import eyePic from "../images/Eye-gradient.png";
import ArrowRight from "../images/icons/arrow-right.png";

export default function FoundVehicleDrawer() {
  return (
    <>
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <Card className="border-thin-grey border-[1px] mb-3">
            <CardContent className="flex gap-2 justify-between items-center p-4">
              <Image
                src={eyePic}
                alt="ícone de olho"
                className="self-start shrink-0"
              />
              <div>
                <span className="text-xs font-bold block mb-2">
                  Você já encontrou o veículo?
                </span>
                <span className="text-[10px] text-grey font-semibold block">
                  Caso já tenha encontrado o veículo, por favor, indique aqui.
                </span>
              </div>
              <Image
                src={ArrowRight}
                alt="ícone de seta para direita"
                className="shrink-0"
              />
            </CardContent>
            <CardFooter className="py-2 px-4 bg-off-white">
              <div className="flex justify-between ">
                <div className="flex items-center gap-1">
                  <span className="rounded-full w-[7px] h-[7px] bg-success"></span>
                  <span className="text-black text-[10px] font-bold uppercase">
                    Veículo disponível
                  </span>
                </div>
              </div>
            </CardFooter>
          </Card>
        </DrawerTrigger>
        <DrawerContent className="h-full max-w-fit">
          <div className="container px-3 pt-4">
            <DrawerClose className="flex justify-end w-full mb-6">
              <Image src={CloseGrey} alt="ícone de fechamento"></Image>
            </DrawerClose>
            <Image src={CircledCar} alt="imagem de carro circulado" className="mx-auto mb-6"></Image>
            <div className="grid grid-cols-1 gap-6">
              <h5 className="font-semibold text-sm text-black-900">
                É necessário sinalizar que ENCONTROU o veículo para poder
                continuar.
              </h5>
              <div className="flex items-center gap-2">
                <Image
                  src={mapPointer}
                  alt="ícone de apontador de mapa"
                ></Image>
                <span className="font-semibold text-xs text-grey-600">
                  Você precisa estar próximo do veículo.
                </span>
              </div>
              <div className="flex items-start gap-2 mb-6">
                <Image
                  src={certificateIcon}
                  alt="ícone de apontador de mapa"
                  className="shrink-0"
                ></Image>
                <span className="font-semibold text-xs text-grey-600">
                  Com a sua confirmação emitiremos a certidão de busca e
                  apreensão em seu nome.
                </span>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
