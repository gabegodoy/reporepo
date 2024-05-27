import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogHeader,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import Link from "next/link";
import TownHall from "../images/icons/icon-towhall.png";
import { Button } from "./ui/button";

export default function RedirectDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Link href="">
          <div className="flex gap-2 justify-center items-center mb-4">
            <Image src={TownHall} alt="ícone" />
            <span className="font-bold text-base block">
              Portal de negociações
            </span>
          </div>
        </Link>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="border-2 rounded-md border-grey py-2 px-6 mt-4 mb-6 text-center">
              <span className="text-xs text-grey font-bold">SUA MARCA</span>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription className="font-semibold text-black text-xs pt-4 mb-4">
            Você está sendo direcionado para o portal de renegociações oficial
            do banco.
          </AlertDialogDescription>
          <div className="loader text-center">
          </div>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
