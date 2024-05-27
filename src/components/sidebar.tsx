import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import RedirectDialog from "./redirectdialog";
import Image from "next/image";
import Link from "next/link";
import Exit from "../images/icons/icon-exit.png"
import BurgerMenu from "../images/icons/bars-solid .png";

export default function SideBar() {
  return (
    <>
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <Image src={BurgerMenu} alt="ícone de menu"></Image>
        </DrawerTrigger>
        <DrawerContent className="h-full max-w-fit">
          <div className="container px-6 pt-4">
            <RedirectDialog></RedirectDialog>
            <Link href="">
              <div className="flex gap-2 items-center">
                <Image src={Exit} alt="ícone de saída" />
                <span className="font-bold text-base block">Sair</span>
              </div>
            </Link>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
