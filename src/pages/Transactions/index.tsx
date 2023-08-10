import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PageContainer, PriceDetails, TableContainer, TransactionsContainer } from "./styles";


export function Transactions() {
  return (
    <PageContainer>
      <Header />
      <Summary />
      <SearchForm />
      <TransactionsContainer>
        <TableContainer>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <PriceDetails variant="income">
                  R$ 12.000,00
                </PriceDetails>
              </td>
              <td>Serviço</td>
              <td>10/08/2023</td>
            </tr>
            <tr>
              <td>Varanda Burguer</td>
              <td>
                <PriceDetails variant="outcome">
                  - R$ 60,00
                </PriceDetails>
              </td>
              <td>Alimentação</td>
              <td>13/08/2023</td>
            </tr>
          </tbody>
        </TableContainer>
      </TransactionsContainer>
    </PageContainer>
  )
}