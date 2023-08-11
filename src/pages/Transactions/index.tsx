import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PageContainer, PriceDetails, TableContainer, TransactionsContainer } from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  value: number;
  category: string;
  createdAt: string;
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const response = await fetch("http://localhost:3333/transactions/");
    const data = await response.json();
    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <PageContainer>
      <Header />
      <Summary />
      <SearchForm />
      <TransactionsContainer>
        <TableContainer>
          <tbody>
            {transactions.map((item) => {
              return (
                <tr>
                  <td>{item.description}</td>
                  <td>
                    <PriceDetails variant={item.type}>
                      {item.value}
                    </PriceDetails>
                  </td>
                  <td>{item.category}</td>
                  <td>{item.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TableContainer>
      </TransactionsContainer>
    </PageContainer>
  )
}