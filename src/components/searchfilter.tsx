import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  DrawerHeader,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Separator } from "./ui/separator";
import Image from "next/image";
import MagnifyingGrey from "../images/icons/icon-magnifying-glass-grey.png";
import MagnifyingWhite from "../images/icons/icon-magnifying-glass-solid.png";
import ArrowLeft from "../images/icons/arrow-left.png";
import returnIcon from "../images/icons/icon-return.png";
import { Button } from "./ui/button";

export default function SearchFilter() {
  return (
    <>
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <Image src={MagnifyingWhite} alt="ícone de lupa branca"></Image>
        </DrawerTrigger>
        <DrawerContent className="h-full w-full">
          <DrawerHeader className="p-0 pb-4">
            <div className="container px-3 pt-4">
              <div className="flex gap-4 items-center">
                <DrawerClose>
                  <Image src={ArrowLeft} alt="ícone de seta para esquerda" />
                </DrawerClose>
                <div className="w-full flex justify-between items-center bg-grey-200 rounded-md">
                  <Input
                    type="text"
                    placeholder="Busque pela placa"
                    className="bg-grey-200 font-semibold text-xs text-grey-400"
                  ></Input>
                  <Image
                    src={MagnifyingGrey}
                    alt="ícone de lupa cinza"
                    className="mr-3"
                  />
                </div>
              </div>
            </div>
          </DrawerHeader>
          <Separator></Separator>
          <div className="container px-3">
            <h5 className="text-xs text-black font-semibold my-3">
              Placas buscadas
            </h5>
            <div className="grid grid-cols-1">
              <div className="flex justify-between items-center">
                <span className="block text-xs text-grey-400 uppercase font-semibold">
                  AAA9999
                </span>
                <Button className="bg-inherit p-0">
                  <Image src={returnIcon} alt="ícone de retorno" />
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <span className="block text-xs text-grey-400 uppercase font-semibold">
                  JUA6933
                </span>
                <Button className="bg-inherit p-0">
                  <Image src={returnIcon} alt="ícone de retorno" />
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <span className="block text-xs text-grey-400 uppercase font-semibold">
                  HYG1793
                </span>
                <Button className="bg-inherit p-0">
                  <Image src={returnIcon} alt="ícone de retorno" />
                </Button>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
