import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  value: number;
  category: string;
  createdAt: string;
}

interface CreateTransactionProps {
  description: string;
  value: number;
  category: string;
  type: "income" | "outcome";
}

interface TransactionsContextType {
  transactions: Transaction[];
  loadTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionProps) => Promise<void>
}

interface TransactionsContextProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsContextProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions(query?: string) {
    const response = await api.get("/transactions", {
      params: {
        q: query,
      }
    })
    setTransactions(response.data);
  }

  async function createTransaction(data: CreateTransactionProps) {
    const { description, value, category, type } = data;

    const response = await api.post("/transactions", {
      description,
      value,
      category,
      type,
      createdAt: new Date(),
    })
    setTransactions([...transactions, response.data])
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, loadTransactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}