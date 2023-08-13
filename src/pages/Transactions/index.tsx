import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PageContainer, PriceDetails, TableContainer, TransactionsContainer } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";


export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

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