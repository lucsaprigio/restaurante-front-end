import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface Sale {
  consumer?: {
    id?: string;
    name?: string;
    phone?: string;
  },
  ID_PRODUTO: number,
  DESCRICAO: string,
  VALOR_UNITARIO: number,
  VALOR_TOTAL?: number;
  CD_CATEGORIA: number,
  QUANTIDADE: number,
}

interface SaleContextData {
  sale: Sale | null;
  addLaunch: (sale: Sale) => Promise<void>;
  removeLaunch: (sale: Sale) => Promise<void>;
}

interface SaleProviderProps {
  children: ReactNode;
}

export const SaleContext = createContext<SaleContextData>({} as SaleContextData);

const SaleProvider = ({ children }: SaleProviderProps) => {
  const [data, setData] = useState<Sale>({} as Sale);
  const [sale, setSale] = useState<Sale[]>([{} as Sale]);

  async function loadData() {
    const saleStoraged = localStorage.getItem("@Sale:user");

    const saleStoragedJSON = JSON.parse(saleStoraged);

    setSale(saleStoragedJSON)
  }

  useEffect(() => {
    loadData()
  }, []);

  async function addLaunch({ ID_PRODUTO, DESCRICAO, VALOR_UNITARIO, CD_CATEGORIA, QUANTIDADE, VALOR_TOTAL }: Sale) {
    const data = {
      ID_PRODUTO,
      DESCRICAO,
      VALOR_UNITARIO,
      QUANTIDADE,
      CD_CATEGORIA,
      VALOR_TOTAL
    }

    const saleList = [...sale];

    const index = saleList.find(product => product.ID_PRODUTO === data.ID_PRODUTO);

    if (!index) {
      saleList.push({ ...data, VALOR_TOTAL: VALOR_UNITARIO * QUANTIDADE });
    } else {
      index.QUANTIDADE++
      index.VALOR_TOTAL = index.VALOR_UNITARIO * index.QUANTIDADE
    }

    setSale(saleList);

    let total = saleList.map((sale) => (
      sale.VALOR_TOTAL
    ));


    let sumItens = 0;
    for (let i = 0; i < total.length; i++) {
      sumItens += total[i]
    }


    localStorage.setItem("@Sale:user", JSON.stringify(saleList));
    localStorage.setItem("@Total:user", JSON.stringify(sumItens));
  }

  async function removeLaunch({ ID_PRODUTO, DESCRICAO, VALOR_UNITARIO, CD_CATEGORIA, QUANTIDADE, VALOR_TOTAL }: Sale) {
    const saleList = [...sale];

    const data = {
      ID_PRODUTO,
      DESCRICAO,
      VALOR_UNITARIO,
      QUANTIDADE,
      CD_CATEGORIA,
      VALOR_TOTAL,
    }

    const index = saleList.find((product) => product.ID_PRODUTO === data.ID_PRODUTO);

    if (index?.QUANTIDADE! > 1) {
      index.QUANTIDADE = index?.QUANTIDADE! - 1;
      index.VALOR_TOTAL = index.VALOR_UNITARIO * index.QUANTIDADE
      setSale(saleList);
      localStorage.setItem("@Sale:user", JSON.stringify(saleList));

      let total = saleList.map((sale) => (
        sale.VALOR_TOTAL
      ));

      localStorage.setItem("@Total:user", JSON.stringify(total));
    } else {
      const saleFiltered = saleList.filter((product) => product.ID_PRODUTO !== data.ID_PRODUTO);
      setSale(saleFiltered);
      localStorage.setItem("@Sale:user", JSON.stringify(saleFiltered));

      let totalItens = saleFiltered.map((sale) => (
        sale.VALOR_TOTAL
      ));
/* 
      var subtractItens = 0;
      for (let i = 0; i < total.length; i++) {
        subtractItens -= total[i]
      }
 */
      localStorage.setItem("@Total:user", JSON.stringify(totalItens));
    }
  }

  return (
    <SaleContext.Provider value={{ sale: { ...data }, addLaunch, removeLaunch }}>
      {children}
    </SaleContext.Provider >
  )
}

function useSaleLaunch() {
  const context = useContext(SaleContext);

  return context;
}

export { SaleProvider, useSaleLaunch }