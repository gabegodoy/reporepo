"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ArrowLeftWhite from "../../images/icons/arrow-left-white.png";
import SquareArrowUpRight from "../../images/icons/icon-square-arrow-up-right.png";
import {
  FloatingLabel,
  FloatingInput,
} from "@/components/ui/floating-label-input";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { ContractList } from "@/lib/utils";
import useAxios from "@/hooks";
import { useQuery } from "@tanstack/react-query";
import { getDadosContratoDevedor, loginDevedor } from "@/services/devedor";


interface Pagamento {
  id: number;
  status: string;
  nr_parcela: number;
  valor_parcela: string;
  dt_vencimento: string;
}


const pagamentos : Pagamento[] = [
  // {
  //   id: 1,
  //   status: "vencido",
  //   nr_parcela: 16,
  //   valor_parcela: "9500",
  //   dt_vencimento: "10/07/2023",
  // },
  // {
  //   id: 2,
  //   status: "vencido",
  //   nr_parcela: 17,
  //   valor_parcela: "9500",
  //   dt_vencimento: "10/08/2023",
  // },
  // {
  //   id: 3,
  //   status: "pago",
  //   nr_parcela: 15,
  //   valor_parcela: "9500",
  //   dt_vencimento: "10/05/2023",
  // },
  // {
  //   id: 4,
  //   status: "pago",
  //   nr_parcela: 14,
  //   valor_parcela: "9500",
  //   dt_vencimento: "10/04/2023",
  // },
];

export default function HistoricoPagamentos() {
  
  const [customer, setCustomer] = useState({ name: '', document: '' });
  const [contracts, setContracts] = useState<ContractList[]>([]);
  const [selectedContract, setSelectedContract] = useState<ContractList | null>(null);

  const credentials = {
    "nome": "vcomtestes",
    "email": "vcomtestes",
    "senha": "vcomtestes"
  };

  const axiosLogin = useAxios('Login');
  const { data: resp } = useQuery({
    queryKey: ["Login"],
    queryFn: () => loginDevedor(axiosLogin, credentials),
  });

  const token = resp?.token || '';

  const axiosDevedor = useAxios('LoginDevedor', token);
  const { data: contractDevedor } = useQuery({
    queryKey: ["DadosContratoDevedor", token],
    queryFn: () => getDadosContratoDevedor(axiosDevedor),
  });

  let contractDaVez = '123456';
  let totalAmount = 0;
  function populatePagtos (contracts: ContractList[]) {
  let counter = 1;
    contracts.forEach((contract) => {
      if (contract.contrato === contractDaVez) {
        pagamentos.push(
          {
            id: counter++,
            status: contract.situacao,
            nr_parcela: parseInt(contract.numero),
            valor_parcela: contract.valorPrincipal,
            dt_vencimento: contract.dataInfo,
          }
        )
        totalAmount += parseInt(contract.valorPrincipal);
      }
    });
  }

  useEffect(() => {
    if (contractDevedor) {
      const { nome, documento, listaContratos } = contractDevedor;
      setCustomer({ name : nome, document: documento });
      setContracts(listaContratos);
      setSelectedContract(listaContratos.length > 0? listaContratos[0] : null);
      populatePagtos(listaContratos)
    }
  }, [contractDevedor]);

  const handleChange = (selectedValue: any) => {
    setSelectedContract(JSON.parse(selectedValue));
    console.log(selectedContract)
  };

  return (
    <>
      <div className="container px-3 mb-4">
        <div className="pt-8">
          <div className="flex gap-2 items-center">
            <Link href="/" className="relative z-10">
              <Image src={ArrowLeftWhite} alt="ícone de seta para a esquerda" />
            </Link>
            <span className="text-base text-white font-semibold block">
              Histórico de pagamentos
            </span>
          </div>
        </div>
      </div>
      <main className="bg-off-white py-4 px-3">
        <Card className="p-3 mb-4 rounded-xl border-thin-grey">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-[10px] text-grey font-semibold text-center block">
                Valor da dívida
              </span>
              <span className="text-xl text-primary-blue font-bold text-center block">
                R$ {totalAmount}
              </span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between">
              <div className="min-w-24">
                <span className="text-grey text-[10px] font-semibold block">
                  Nº de parcelas
                </span>
                <span className="font-bold text-xs text-black">36</span>
              </div>
              <div className="min-w-32">
                <span className="text-grey text-[10px] font-semibold block">
                  Parcelas em aberto
                </span>
                <span className="font-bold text-xs text-black">{pagamentos.length}</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="min-w-24">
                <span className="text-grey text-[10px] font-semibold block">
                  Valor em aberto
                </span>
                <span className="font-bold text-xs text-black">
                  R$ {totalAmount}
                </span>
              </div>
              <div className="min-w-32">
                <span className="text-grey text-[10px] font-semibold block">
                  Data de vencimento
                </span>
                <span className="font-bold text-xs text-black">23/09/2023</span>
              </div>
            </div>
            <Link href="" className="flex gap-2 items-center">
              <span className="font-medium text-xs text-black block">
                Ir para o portal de negociações do banco
              </span>
              <Image
                src={SquareArrowUpRight}
                alt="ícone seta para diagonal direita"
              />
            </Link>
          </div>
        </Card>
        <Tabs defaultValue="Todos" className="mb-14">
          <TabsList>
            <TabsTrigger
              value="Todos"
              className="text-border-grey font-semibold"
            >
              Todos
            </TabsTrigger>
            <TabsTrigger
              value="Vencidos"
              className="text-border-grey font-semibold"
            >
              Vencidos
            </TabsTrigger>
            <TabsTrigger
              value="Pagos"
              className="text-border-grey font-semibold"
            >
              Pagos
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Todos" className="grid grid-cols-1 gap-4">
            {pagamentos.map((pagamento) => (
              <div
                className="flex justify-between items-center"
                key={pagamento.id}
              >
                <div>
                  <div className="flex items-center gap-1">
                    <span
                      className={
                        "rounded-full w-[7px] h-[7px] " +
                        (pagamento.status === "vencido"
                          ? "bg-danger"
                          : "bg-success")
                      }
                    ></span>
                    <span className="text-black text-[10px] font-bold uppercase">
                      {pagamento.status}
                    </span>
                  </div>
                  <span className="text-grey text-[10px] font-semibold block">
                    Nº da parcela: {pagamento.nr_parcela}
                  </span>
                </div>
                <div>
                  <span className={"font-bold text-xs text-end block " + (pagamento.status === "vencido"
                          ? "text-danger"
                          : "text-success")}>
                    R$
                    {Number(pagamento.valor_parcela).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                  <span className="text-grey text-[10px] font-semibold block">
                    Vencimento em: {pagamento.dt_vencimento}
                  </span>
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="Vencidos" className="grid grid-cols-1 gap-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center gap-1">
                  <span className="rounded-full bg-danger w-[7px] h-[7px]"></span>
                  <span className="text-black text-[10px] font-bold uppercase">
                    Vencido
                  </span>
                </div>
                <span className="text-grey text-[10px] font-semibold block">
                  Nº da parcela: 16
                </span>
              </div>
              <div>
                <span className="text-danger font-bold text-xs text-end block">
                  R$9.500,00
                </span>
                <span className="text-grey text-[10px] font-semibold block">
                  Vencimento em: 10/07/2023
                </span>
              </div>
            </div>
            <hr></hr>
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center gap-1">
                  <span className="rounded-full bg-danger w-[7px] h-[7px]"></span>
                  <span className="text-black text-[10px] font-bold uppercase">
                    Vencido
                  </span>
                </div>
                <span className="text-grey text-[10px] font-semibold block">
                  Nº da parcela: 17
                </span>
              </div>
              <div>
                <span className="text-danger font-bold text-xs text-end block">
                  R$9.500,00
                </span>
                <span className="text-grey text-[10px] font-semibold block">
                  Vencimento em: 10/08/2023
                </span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Pagos" className="grid grid-cols-1 gap-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center gap-1">
                  <span className="rounded-full bg-success w-[7px] h-[7px]"></span>
                  <span className="text-black text-[10px] font-bold uppercase">
                    Pago
                  </span>
                </div>
                <span className="text-grey text-[10px] font-semibold block">
                  Nº da parcela: 15
                </span>
              </div>
              <div>
                <span className="text-success font-bold text-xs text-end block">
                  R$9.500,00
                </span>
                <span className="text-grey text-[10px] font-semibold block">
                  Vencimento em: 10/05/2023
                </span>
              </div>
            </div>
            <hr></hr>
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center gap-1">
                  <span className="rounded-full bg-success w-[7px] h-[7px]"></span>
                  <span className="text-black text-[10px] font-bold uppercase">
                    Pago
                  </span>
                </div>
                <span className="text-grey text-[10px] font-semibold block">
                  Nº da parcela: 14
                </span>
              </div>
              <div>
                <span className="text-success font-bold text-xs text-end block">
                  R$9.500,00
                </span>
                <span className="text-grey text-[10px] font-semibold block">
                  Vencimento em: 10/04/2023
                </span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <div className="py-2 px-3 bg-white fixed bottom-0 w-full z-10">
        <Link
          href="/realizarpagamento"
          className="rounded-md bg-primary-blue text-white font-bold w-full px-4 py-2 block text-center"
        >
          Realizar pagamento
        </Link>
      </div>
    </>
  );
}
