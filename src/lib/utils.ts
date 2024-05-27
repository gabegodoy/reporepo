import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface LoginDevedor {
  nome: string;
  email: string;
  senha: string;
}

export interface ContractList {
  nomeFantasia: string;
  contrato: string;
  plano: string;
  numero: string;
  valorPrincipal: string;
  dataInfo: string;
  tipoVencimento: string;
  situacao: string;
  telefonePrincipal: null;
  dataDeNascimento: null;
}
