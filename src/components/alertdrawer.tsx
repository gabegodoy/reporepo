import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

export default function AlertDrawer() {
  return (
    <>
      <Drawer>
        <DrawerContent className="rounded-t-lg">
          <DrawerHeader>
            <DrawerDescription className="font-semibold text-black text-xs text-start">Os dados apresentados têm como base 23/10/2023 - 18h57. Demonstrativo para simples conferência e sujeito a alterações.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline" className="bg-primary-blue text-white font-bold w-full px-4 py-2">Entendi</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
