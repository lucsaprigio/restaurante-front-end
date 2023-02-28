import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface Sale {
  consumer?: {
    id?: string;
    name?: string;
    phone?: string;
  },
  CD_MESA?: number;
  ID_PRODUTO: number,
  DESCRICAO_PRODUTO: string,
  UNITARIO_PRODUTO: number,
  DESCONTO_PRODUTO?: number,
  TOTAL_PRODUTO?: number;
  CD_CATEGORIA: number,
  QUANTIDADE_PRODUTO: number,
}

interface SaleContextData {
  sale: Sale | null;
  addLaunch: (sale: Sale) => Promise<void>;
  removeLaunch: (sale: Sale) => Promise<void>;
  removeTotalItens: (sale: Sale) => Promise<void>;
}

interface SaleProviderProps {
  children: ReactNode;
}

export const SaleContext = createContext<SaleContextData>({} as SaleContextData);

const SaleProvider = ({ children }: SaleProviderProps) => {
  const [data, setData] = useState<Sale>({} as Sale);
  const [sale, setSale] = useState<Sale[]>([{} as Sale]);

  async function loadData() {
    let list = []
    localStorage.setItem("@Sale:user", JSON.stringify(list));
    localStorage.setItem("@Total:user", JSON.stringify(list));

    const saleStoraged = localStorage.getItem("@Sale:user");

    const saleStoragedJSON = JSON.parse(saleStoraged);

    setSale(saleStoragedJSON)
  }

  useEffect(() => {
    loadData()
  }, []);

  async function addLaunch({ CD_MESA, ID_PRODUTO, DESCRICAO_PRODUTO, UNITARIO_PRODUTO, DESCONTO_PRODUTO, CD_CATEGORIA, QUANTIDADE_PRODUTO, TOTAL_PRODUTO }: Sale) {
    const data = {
      CD_MESA,
      ID_PRODUTO,
      DESCRICAO_PRODUTO,
      UNITARIO_PRODUTO,
      DESCONTO_PRODUTO: DESCONTO_PRODUTO = 0,
      QUANTIDADE_PRODUTO,
      CD_CATEGORIA,
      TOTAL_PRODUTO
    }

    const saleList = [...sale];

    const index = saleList.find(product => product.ID_PRODUTO === data.ID_PRODUTO);

    if (!index) {
      saleList.push({ ...data, TOTAL_PRODUTO: UNITARIO_PRODUTO * QUANTIDADE_PRODUTO });
    } else {
      index.QUANTIDADE_PRODUTO++
      index.TOTAL_PRODUTO = index.UNITARIO_PRODUTO * index.QUANTIDADE_PRODUTO
    }

    setSale(saleList);

    let total = saleList.map((sale) => (
      sale.TOTAL_PRODUTO
    ));


    let sumItens = 0;
    for (let i = 0; i < total.length; i++) {
      sumItens += total[i]
    }


    localStorage.setItem("@Sale:user", JSON.stringify(saleList));
    localStorage.setItem("@Total:user", JSON.stringify((sumItens).toFixed(2)));
  }

  async function removeLaunch({ ID_PRODUTO, DESCRICAO_PRODUTO, UNITARIO_PRODUTO, DESCONTO_PRODUTO, CD_CATEGORIA, QUANTIDADE_PRODUTO, TOTAL_PRODUTO }: Sale) {
    const saleList = [...sale];

    const data = {
      ID_PRODUTO,
      DESCRICAO_PRODUTO,
      UNITARIO_PRODUTO,
      DESCONTO_PRODUTO,
      QUANTIDADE_PRODUTO,
      CD_CATEGORIA,
      TOTAL_PRODUTO,
    }

    const index = saleList.find((product) => product.ID_PRODUTO === data.ID_PRODUTO);

    if (index?.QUANTIDADE_PRODUTO! > 1) {
      index.QUANTIDADE_PRODUTO = index?.QUANTIDADE_PRODUTO! - 1;
      index.TOTAL_PRODUTO = index.UNITARIO_PRODUTO * index.QUANTIDADE_PRODUTO
      setSale(saleList);
      localStorage.setItem("@Sale:user", JSON.stringify(saleList));

      let total = saleList.map((sale) => (
        sale.TOTAL_PRODUTO
      ));

      let subtract = 0;
      for (let i = 0; i < total.length; i++) {
        subtract -= total[i]
      }

      localStorage.setItem("@Total:user", JSON.stringify(Math.abs((subtract)).toFixed(2)));
    } else {
      const saleFiltered = saleList.filter((product) => product.ID_PRODUTO !== data.ID_PRODUTO);
      setSale(saleFiltered);
      localStorage.setItem("@Sale:user", JSON.stringify(saleFiltered));

      let total = saleFiltered.map((sale) => (
        sale.UNITARIO_PRODUTO
      ));

      let resum = 0;
      for (let i = 0; i < total.length; i++) {
        resum -= total[i]
      }

      localStorage.setItem("@Total:user", JSON.stringify(Math.abs(resum).toFixed(2)));
    }
  }

  async function removeTotalItens({ ID_PRODUTO, DESCRICAO_PRODUTO, UNITARIO_PRODUTO, DESCONTO_PRODUTO, CD_CATEGORIA, QUANTIDADE_PRODUTO, TOTAL_PRODUTO }: Sale) {
    const saleList = [...sale];

    const data = {
      ID_PRODUTO,
      DESCRICAO_PRODUTO,
      UNITARIO_PRODUTO,
      DESCONTO_PRODUTO,
      QUANTIDADE_PRODUTO,
      CD_CATEGORIA,
      TOTAL_PRODUTO,
    }

    const index = saleList.findIndex((product) => product.ID_PRODUTO === data.ID_PRODUTO);

    saleList.splice(index, 1);

    let total = saleList.map((sale) => (
      sale.TOTAL_PRODUTO
    ));

    let subtract = 0;
    for (let i = 0; i < total.length; i++) {
      subtract -= total[i]
    }

    setSale(saleList);
    localStorage.setItem("@Sale:user", JSON.stringify(saleList));
    localStorage.setItem("@Total:user", JSON.stringify(Math.abs(subtract).toFixed(2)));
  }

  return (
    <SaleContext.Provider value={{ sale: { ...data }, addLaunch, removeLaunch, removeTotalItens }}>
      {children}
    </SaleContext.Provider >
  )
}

function useSaleLaunch() {
  const context = useContext(SaleContext);

  return context;
}

export { SaleProvider, useSaleLaunch }