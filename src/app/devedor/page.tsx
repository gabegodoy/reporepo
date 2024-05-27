'use client';

import Link from "next/link";
import Image from "next/image";
import SideBar from "@/components/sidebar";
import iIcon from "../../images/icons/circle-info-regular.png";
import ArrowRight from "../../images/icons/arrow-right.png";
import CalculatorPic from "../../images/Calculator.png";
import EnvelopePic from "../../images/Envelope.png";
import { Card } from "@/components/ui/card";
import AlertDrawer from "@/components/alertdrawer";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getDadosContratoDevedor, loginDevedor } from "@/services/devedor";
import { useQuery } from "@tanstack/react-query";
// import { useAuth } from "@/contexts/AuthContext";
import useAxios from "@/hooks";
import { useEffect, useState } from "react";
import { ContractList } from "@/lib/utils";

export default function Devedor() {

  const [customer, setCustomer] = useState({ name: '', document: '' });
  const [contracts, setContracts] = useState<ContractList[]>([]);
  const [selectedContract, setSelectedContract] = useState<ContractList | null>(null);
  
  const cards = [
    {
      id: 1,
      title: "Histórico de pagamentos",
      description: "Veja o histórico de pagamentos e pague as parcelas que estão atrasadas.",
      icon: CalculatorPic,
      url: `/historicopagamentos/`,
    },
    {
      id: 2,
      title: "Entre em contato",
      description: "Precisa de ajuda com algo, entre em contato conosco.",
      icon: EnvelopePic,
      url: "/contato",
    },
  ];


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

  useEffect(() => {
    if (contractDevedor) {
      const { nome, documento, listaContratos } = contractDevedor;
      setCustomer({ name : nome, document: documento });
      setContracts(listaContratos);
      setSelectedContract(listaContratos.length > 0? listaContratos[0] : null);
    }
  }, [contractDevedor]);

  const handleChange = (selectedValue: any) => {
    setSelectedContract(JSON.parse(selectedValue));
    console.log(selectedContract)
  };

  return (
    <>
      <div className="container px-3 h-2/6">
        <div className="pt-8">
          <header className="flex flex-col gap-4 relative z-10">
            <div className="flex justify-between">
              <SideBar></SideBar>
              <Image src={iIcon} alt="ícone de informação" />
            </div>
            <div className="mb-2">
              <span className="font-bold text-white text-3xl block">
                Olá, {customer.name}!
              </span>
              <Link
                href=""
                className="text-[10px] text-white font-semibold block"
              >
                Acesse aqui os detalhes do contrato vigente.
              </Link>
            </div>
          </header>
        </div>
      </div>
      <div className="bg-off-white h-4/6">
        <div className="container px-3 relative top-[-110px]">
          {contracts && contracts.length > 1 ? (
            <Select value={JSON.stringify(selectedContract)}  onValueChange={handleChange}> 
              <SelectTrigger className="w-full mb-4">
                <SelectValue placeholder="Selecione um contrato" />
              </SelectTrigger>
              <SelectContent>
                {contracts.map((contract) => (
                  <SelectItem
                    key={contract.numero}
                    value={JSON.stringify(contract)}
                  >
                    <div>
                      <span className="block font-bold uppercase text-xs text-black">
                        {contract.nomeFantasia}
                      </span>
                      <span className="block font-bold uppercase text-xs text-grey">
                        {contract.contrato}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : null}
          {selectedContract ? (

            <Card className="p-4 mb-4">
              <div className="flex flex-col gap-4">
                <div className="border-2 rounded-md border-grey py-2 px-6 text-center">
                  <span className="text-xs text-grey font-bold">SUA MARCA</span>
                </div>
                <div>
                  <span className="text-[10px] text-grey font-semibold text-center block">
                    Valor da dívida
                  </span>
                  <span className="text-xl text-primary-blue font-bold text-center block">
                    R$ {selectedContract?.valorPrincipal}
                  </span>
                </div>
                <div className="flex justify-between">
                  <div className="w-3/5">
                    <span className="text-grey text-[10px] font-semibold block">
                      Razão Social
                    </span>
                    <span className="font-bold text-xs">{selectedContract?.nomeFantasia}</span>
                  </div>
                  <div className="w-2/5">
                    <span className="text-grey text-[10px] font-semibold block">
                      Contrato
                    </span>
                    <span className="font-bold text-xs">{selectedContract?.contrato}</span>
                  </div>
                </div>
                <Link
                  href=""
                  className="rounded-md bg-primary-blue text-sm text-white text-center font-bold w-full px-4 py-2 block"
                >
                  Contrato
                </Link>
              </div>
            </Card>
          ) : null}
          {cards && cards.length > 0
            ? cards.map((card) => (
                <Card className="py-4 px-2 mb-4" key={card.id}>
                  <Link
                    href={card.url}
                    className="flex gap-2 justify-center items-center"
                  >
                    <Image
                      src={card.icon}
                      alt="imagem de calculadora"
                      className="self-start shrink-0"
                    />
                    <div>
                      <span className="text-xs font-bold block mb-2 uppercase">
                        {card.title}
                      </span>
                      <span className="text-[10px] text-grey font-semibold block">
                        {card.description}
                      </span>
                    </div>
                    <Image
                      src={ArrowRight}
                      alt="ícone de seta para direita"
                      className="shrink-0"
                    />
                  </Link>
                </Card>
              ))
            : null}
        </div>
      </div>
      <AlertDrawer></AlertDrawer>
    </>
  );
}
