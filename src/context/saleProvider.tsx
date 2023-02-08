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
  CD_CATEGORIA: number,
  QUANTIDADE: number,
  VALOR_TOTAL?: number[];
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

    const saleStoragedJSON = JSON.parse(saleStoraged)

    setSale(saleStoragedJSON)
  }

  useEffect(() => {
    loadData()
  }, []);

  async function addLaunch({ ID_PRODUTO, DESCRICAO, VALOR_UNITARIO, CD_CATEGORIA, QUANTIDADE }: Sale) {
    const saleList = [...sale];

    const data = {
      ID_PRODUTO,
      DESCRICAO,
      VALOR_UNITARIO,
      QUANTIDADE,
      CD_CATEGORIA,
    }


    const index = saleList.find(product => product.ID_PRODUTO === data.ID_PRODUTO);

    const total = saleList.map((total) => (
      total.VALOR_UNITARIO * total.QUANTIDADE
    ));

    if (!index) {
      saleList.push({ ...data });
    } else {
      index.QUANTIDADE++
    }

    setSale(saleList);
    console.log(saleList);
    localStorage.setItem("@Sale:user", JSON.stringify(saleList));
    localStorage.setItem("@Total:user", JSON.stringify(total));
  }

  async function removeLaunch({ ID_PRODUTO, DESCRICAO, VALOR_UNITARIO, CD_CATEGORIA, QUANTIDADE }: Sale) {
    const saleList = [...sale];

    const data = {
      ID_PRODUTO,
      DESCRICAO,
      VALOR_UNITARIO,
      QUANTIDADE,
      CD_CATEGORIA
    }

    const index = saleList.find((product) => product.ID_PRODUTO === data.ID_PRODUTO);

    if (index?.QUANTIDADE! > 1) {
      index.QUANTIDADE = index?.QUANTIDADE! - 1;
      setSale(saleList);
      localStorage.setItem("@Sale:user", JSON.stringify(saleList));
    } else {
      const saleFiltered = saleList.filter((product) => product.ID_PRODUTO !== data.ID_PRODUTO);
      setSale(saleFiltered);
      localStorage.setItem("@Sale:user", JSON.stringify(saleFiltered));
    }
    console.log(sale);
  }

  return (
    <SaleContext.Provider value={{ sale: data, addLaunch, removeLaunch }}>
      {children}
    </SaleContext.Provider>
  )
}

function useSaleLaunch() {
  const context = useContext(SaleContext);

  return context;
}

export { SaleProvider, useSaleLaunch }