import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SummaryContainer, SummaryItem } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"


export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const valueIncome = transactions.reduce((total, item) => {
    if (item.type === "income") {
      total += item.value;
    }
    return total;
  }, 0);
  console.log(valueIncome);

  const valueOutcome = transactions.reduce((total, item) => {
    if (item.type === "outcome") {
      total += item.value;
    }
    return total;
  }, 0);

  return (
    <SummaryContainer>
      <SummaryItem>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp className="in" size={32} />
        </header>
        <h2>R$ {valueIncome}</h2>
      </SummaryItem>
      <SummaryItem>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown className="out" size={32} />
        </header>
        <h2>R$ {valueOutcome}</h2>
      </SummaryItem>
      <SummaryItem variant="profit">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </header>
        <h2>R$ {valueIncome - valueOutcome}</h2>
      </SummaryItem>
    </SummaryContainer>
  )
}