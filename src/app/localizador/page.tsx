import Image from "next/image";
import Link from "next/link";
import SideBar from "@/components/sidebar";
import SearchFilter from "@/components/searchfilter";
import starIcon from "../../images/icons/star-solid.png";
import magnifyinGlass from "../../images/icons/icon-magnifying-glass-solid.png";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Localizador() {
  const veiculos = [
    {
      id: 1,
      devedor: "Paulo André Gonçalves",
      modelo: "Mahindra XUV 500",
      placa: "AAA9999",
      status: "disponível",
      designado: true,
    },
    {
      id: 2,
      devedor: "Gabriela Pinto Gomes",
      modelo: "Fiat 500L",
      placa: "JUA6933",
      status: "encontrado",
      designado: false,
    },
    {
      id: 3,
      devedor: "Nicolash Araujo Rodrigues",
      modelo: "Toyota Etios",
      placa: "HYG1793",
      status: "apreendido",
      designado: true,
    },
    {
      id: 4,
      devedor: "Diego Pererira Barros",
      modelo: "Innova Crysta",
      placa: "LYM1563",
      status: "disponível",
      designado: false,
    },
    {
      id: 5,
      devedor: "Eduarda Carvalho Cardoso",
      modelo: "Creta Hyundai",
      placa: "LYG5823",
      status: "disponível",
      designado: true,
    },
  ];

  const disponiveis: any[] = veiculos.filter((veiculo) => {
    return veiculo.status === 'disponível';
  });

  const encontrados: any[] = veiculos.filter((veiculo) => {
    return veiculo.status === 'encontrado';
  })

  const apreendidos: any[] = veiculos.filter((veiculo) => {
    return veiculo.status === 'apreendido';
  })


  return (
    <>
      <div className="container px-3 h-1/5">
        <div className="pt-8">
          <header className="flex flex-col justify-between relative z-10">
            <div className="flex justify-between mb-2">
              <SideBar></SideBar>
              <span className="font-bold text-white text-base block">
                Veículos
              </span>
              <div>
                <SearchFilter></SearchFilter>
              </div>
            </div>
          </header>
        </div>
      </div>
      <div className="bg-off-white py-2 h-full">
        <div className="container py-4 px-3 h-full">
          <Tabs defaultValue="Todos" className="relative top-[-66px]">
            <TabsList>
              <TabsTrigger
                value="Todos"
                className="px-2 text-white font-semibold data-[state=active]:bg-white data-[state=active]:text-black"
              >
                Todos
              </TabsTrigger>
              <TabsTrigger
                value="Disponíveis"
                className="px-1 text-white font-semibold data-[state=active]:bg-white data-[state=active]:text-black"
              >
                Disponíveis
              </TabsTrigger>
              <TabsTrigger
                value="Encontrados"
                className="px-1 text-white font-semibold data-[state=active]:bg-white data-[state=active]:text-black"
              >
                Encontrados
              </TabsTrigger>
              <TabsTrigger
                value="Apreendidos"
                className="px-1 text-white font-semibold data-[state=active]:bg-white data-[state=active]:text-black"
              >
                Apreendidos
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Todos" className="grid grid-cols-1 gap-2 pt-2">
              {veiculos && veiculos.length > 0
                ? veiculos.map((veiculo) => (
                    <Link
                      href={"/localizador/detalhes/" + veiculo.id }
                      key={veiculo.id}
                    >
                      <div
                        key={veiculo.id}
                        className="border-[1px] border-thin-grey rounded-md flex"
                      >
                        <div
                          className={
                            "h-auto w-1 rounded-l-md " +
                            (veiculo.status === "disponível"
                              ? "bg-success"
                              : veiculo.status === "encontrado"
                              ? "bg-attention"
                              : "bg-locked")
                          }
                        ></div>
                        <div className="grid grid-col-1 w-full">
                          <div className="flex justify-between py-2 px-1 bg-white">
                            <div>
                              <span className="font-semibold text-xs text-dark-grey block">
                                {veiculo.modelo}
                              </span>
                              <span className="font-semibold text-[10px] text-thin-grey">
                                Devedor{" "}
                              </span>
                              <span className="font-normal text-[10px] text-border-grey">
                                {veiculo.devedor}
                              </span>
                            </div>
                            {/* <div className="border-blue-600 rounded border-2 min-w-[35%] text-center">
                              <div className="border-b-2 border-blue-600 bg-blue-100 h-2/6 flex items-center justify-end gap-6 pr-1">
                                  <div className="rounded-full bg-locked text-center w-1/5 h-2/6"></div>
                                  <div className="rounded-full bg-locked text-end w-1/12 h-2/6"></div>
                              </div>
                              <span className="p-1 uppercase font-bold text-blue-100">{veiculo.placa}</span>
                            </div> */}
                            <div className="plate-div min-w-[32%]">
                              <div className="bg-plate h-full">
                                <span className="text-blue-100 font-bold text-xs uppercase px-3 pt-4 text-center block">
                                  {veiculo.placa}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between p-2">
                            <div className="flex items-center gap-1">
                              <span
                                className={
                                  "rounded-full w-[7px] h-[7px] " +
                                  (veiculo.status === "disponível"
                                    ? "bg-success"
                                    : veiculo.status === "encontrado"
                                    ? "bg-attention"
                                    : "bg-locked")
                                }
                              ></span>
                              <span className="text-black text-[10px] font-bold uppercase">
                                Veículo {veiculo.status}
                              </span>
                            </div>
                            {veiculo.designado === true ? (
                              <div>
                                <div className="flex items-center gap-1">
                                  <Image src={starIcon} alt="ícone de estrela" />
                                  <span className="font-semibold text-[10px] text-blue-100">
                                    Designado a você
                                  </span>
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                : null}
            </TabsContent>
            <TabsContent value="Disponíveis" className="grid grid-cols-1 gap-4">
              {disponiveis && disponiveis.length > 0
                ? disponiveis.map((disponivel) => (
                    <Link
                      href={"/localizador/detalhes/" + disponivel.id}
                      key={disponivel.id}
                    >
                      <div
                        key={disponivel.id}
                        className="border-[1px] border-thin-grey rounded-md flex"
                      >
                        <div
                          className="h-auto w-1 rounded-l-md bg-success"
                        ></div>
                        <div className="grid grid-col-1 w-full">
                          <div className="flex justify-between py-2 px-1 bg-white">
                            <div>
                              <span className="font-semibold text-xs text-dark-grey block">
                                {disponivel.modelo}
                              </span>
                              <span className="font-semibold text-[10px] text-thin-grey">
                                Devedor{" "}
                              </span>
                              <span className="font-normal text-[10px] text-border-grey">
                                {disponivel.devedor}
                              </span>
                            </div>
                            <div className="plate-div min-w-[32%]">
                              <div className="bg-plate h-full">
                                <span className="text-blue-100 font-bold text-xs uppercase px-3 pt-4 text-center block">
                                  {disponivel.placa}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between p-2">
                            <div className="flex items-center gap-1">
                              <span
                                className="rounded-full w-[7px] h-[7px] bg-success"
                              ></span>
                              <span className="text-black text-[10px] font-bold uppercase">
                                Veículo {disponivel.status}
                              </span>
                            </div>
                            {disponivel.designado === true ? (
                              <div>
                                <div className="flex items-center gap-1">
                                  <Image src={starIcon} alt="ícone de estrela" />
                                  <span className="font-semibold text-[10px] text-blue-100">
                                    Designado a você
                                  </span>
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                : null}
            </TabsContent>
            <TabsContent value="Encontrados" className="grid grid-cols-1 gap-4">
              {encontrados && encontrados.length > 0
                ? encontrados.map((encontrado) => (
                    <Link
                      href={"/localizador/detalhes/" + encontrado.id}
                      key={encontrado.id}
                    >
                      <div
                        key={encontrado.id}
                        className="border-[1px] border-thin-grey rounded-md flex"
                      >
                        <div
                          className="h-auto w-1 rounded-l-md bg-attention"
                        ></div>
                        <div className="grid grid-col-1 w-full">
                          <div className="flex justify-between py-2 px-1 bg-white">
                            <div>
                              <span className="font-semibold text-xs text-dark-grey block">
                                {encontrado.modelo}
                              </span>
                              <span className="font-semibold text-[10px] text-thin-grey">
                                Devedor{" "}
                              </span>
                              <span className="font-normal text-[10px] text-border-grey">
                                {encontrado.devedor}
                              </span>
                            </div>
                            <div className="plate-div min-w-[32%]">
                              <div className="bg-plate h-full">
                                <span className="text-blue-100 font-bold text-xs uppercase px-3 pt-4 text-center block">
                                  {encontrado.placa}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between p-2">
                            <div className="flex items-center gap-1">
                              <span
                                className="rounded-full w-[7px] h-[7px] bg-attention"
                              ></span>
                              <span className="text-black text-[10px] font-bold uppercase">
                                Veículo {encontrado.status}
                              </span>
                            </div>
                            {encontrado.designado === true ? (
                              <div>
                                <div className="flex items-center gap-1">
                                  <Image src={starIcon} alt="ícone de estrela" />
                                  <span className="font-semibold text-[10px] text-blue-100">
                                    Designado a você
                                  </span>
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                : null}
            </TabsContent>
            <TabsContent value="Apreendidos" className="grid grid-cols-1 gap-4">
              {apreendidos && apreendidos.length > 0
                ? apreendidos.map((apreendido) => (
                    <Link
                      href={"localizador/detalhes/" + apreendido.id}
                      key={apreendido.id}
                    >
                      <div
                        key={apreendido.id}
                        className="border-[1px] border-thin-grey rounded-md flex"
                      >
                        <div
                          className="h-auto w-1 rounded-l-md bg-locked"
                        ></div>
                        <div className="grid grid-col-1 w-full">
                          <div className="flex justify-between py-2 px-1 bg-white">
                            <div>
                              <span className="font-semibold text-xs text-dark-grey block">
                                {apreendido.modelo}
                              </span>
                              <span className="font-semibold text-[10px] text-thin-grey">
                                Devedor{" "}
                              </span>
                              <span className="font-normal text-[10px] text-border-grey">
                                {apreendido.devedor}
                              </span>
                            </div>
                            <div className="plate-div min-w-[32%]">
                              <div className="bg-plate h-full">
                                <span className="text-blue-100 font-bold text-xs uppercase px-3 pt-4 text-center block">
                                  {apreendido.placa}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between p-2">
                            <div className="flex items-center gap-1">
                              <span
                                className="rounded-full w-[7px] h-[7px] bg-locked"
                              ></span>
                              <span className="text-black text-[10px] font-bold uppercase">
                                Veículo {apreendido.status}
                              </span>
                            </div>
                            {apreendido.designado === true ? (
                              <div>
                                <div className="flex items-center gap-1">
                                  <Image src={starIcon} alt="ícone de estrela" />
                                  <span className="font-semibold text-[10px] text-blue-100">
                                    Designado a você
                                  </span>
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                : null}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
