import { css, styled } from "styled-components";


export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: -4rem auto 0 auto; 
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

interface SummaryItemProps {
  variant?: "profit" | "loss"
}

export const SummaryItem = styled.div<SummaryItemProps>`
  background: ${props => props.theme["gray-600"]};
  padding: 1.5rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: .75rem;
  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .in{
      color: ${props => props.theme["green-300"]};
    }
    .out{
      color: ${props => props.theme["red-300"]};
    }
  }

  ${props => props.variant === "profit" && css`
    background: ${props.theme["green-700"]};
  `}

  ${props => props.variant === "loss" && css`
    background: ${props.theme["red-700"]}; 
  `}
`