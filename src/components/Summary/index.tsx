import { SummaryContainer, SummaryItem } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";


export function Summary() {
  const { valueIncome, valueOutcome } = useSummary()

  return (
    <SummaryContainer>
      <SummaryItem>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp className="in" size={32} />
        </header>
        <h2>{priceFormatter.format(valueIncome)}</h2>
      </SummaryItem>
      <SummaryItem>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown className="out" size={32} />
        </header>
        <h2>{priceFormatter.format(valueOutcome)}</h2>
      </SummaryItem>
      <SummaryItem variant="profit">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </header>
        <h2>{priceFormatter.format(valueIncome - valueOutcome)}</h2>
      </SummaryItem>
    </SummaryContainer>
  )
}