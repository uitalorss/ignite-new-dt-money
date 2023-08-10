import { SummaryContainer, SummaryItem } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"


export function Summary() {
  return (
    <SummaryContainer>
      <SummaryItem>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp className="in" size={32} />
        </header>
        <h2>R$ 5.000,00</h2>
      </SummaryItem>
      <SummaryItem>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown className="out" size={32} />
        </header>
        <h2>R$ 5.000,00</h2>
      </SummaryItem>
      <SummaryItem variant="profit">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </header>
        <h2>R$ 5.000,00</h2>
      </SummaryItem>
    </SummaryContainer>
  )
}