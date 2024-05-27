import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

export default function Nascimento() {
  const isValid = true;

  return (
    <>
      <div className="h-dvh">
        <div className="my-2">
          <div className="border-[1px] rounded-md border-white p-2 text-center mx-16">
            <span className="text-xs text-white font-bold">SUA MARCA</span>
          </div>
        </div>
        <div className="rounded-t-lg bg-white py-6 px-4 h-5/6">
          <div className="flex flex-col justify-between">
            <div className="mb-2">
              <h3 className="text-sm text-darkgrey font-bold mb-8">
                Qual é o seu dia de nascimento?
              </h3>
              <RadioGroup defaultValue="comfortable" className="mb-8">
                <div className="flex justify-between items-center space-x-2 border-2 rounded-md border-lightgrey p-2">
                  <Label htmlFor="r1" className="text-sm font-medium leading-5">
                    16
                  </Label>
                  <RadioGroupItem
                    className="border-light-blue"
                    value="default"
                    id="r1"
                  />
                </div>
                <div className="flex justify-between items-center space-x-2 border-2 rounded-md border-lightgrey p-2">
                  <Label htmlFor="r2" className="text-sm font-medium leading-5">
                    12
                  </Label>
                  <RadioGroupItem
                    className="border-light-blue"
                    value="comfortable"
                    id="r2"
                  />
                </div>
                <div className="flex justify-between items-center space-x-2 border-2 rounded-md border-lightgrey p-2">
                  <Label htmlFor="r3" className="text-sm font-medium leading-5">
                    04
                  </Label>
                  <RadioGroupItem
                    className="border-light-blue"
                    value="compact"
                    id="r3"
                  />
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="py-2 px-3 bg-white fixed bottom-0 left-0 w-full z-10">
            <Button
              type="submit"
              className={
                (isValid ? "bg-primary-blue " : "bg-muted ") +
                "text-white font-bold w-full px-4 py-2"
              }
            >
              Acessar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
