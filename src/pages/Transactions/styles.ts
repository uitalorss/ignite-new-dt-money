import { styled } from "styled-components";


export const PageContainer = styled.main`
`

export const TransactionsContainer = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  td{
    background: ${props => props.theme["gray-700"]};
    padding: 1.25rem 2rem;

    &:first-child{
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      width: 40%;
    }
    &:last-child{
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
`

interface PriceDetailsProps {
  variant: "income" | "outcome";
}
export const PriceDetails = styled.span<PriceDetailsProps>`
  color: ${props => props.variant === "income" ? props.theme["green-300"] : props.theme["red-300"]};
`