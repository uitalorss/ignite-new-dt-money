import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";


export function useSummary() {
  const { transactions } = useContext(TransactionsContext);

  const valueIncome = transactions.reduce((total, item) => {
    if (item.type === "income") {
      total += item.value;
    }
    return total;
  }, 0);

  const valueOutcome = transactions.reduce((total, item) => {
    if (item.type === "outcome") {
      total += item.value;
    }
    return total;
  }, 0);
  return { valueIncome, valueOutcome }
}