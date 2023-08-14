import { styled } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from '@radix-ui/react-radio-group';



export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  inset: 0;
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  background: ${props => props.theme["gray-800"]};
  color: ${props => props.theme.white};
  padding: 2.5rem 3rem;
  border-radius: 6px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    input{
      background: ${props => props.theme["gray-900"]};
      padding: 1rem;
      border: 1px solid transparent;
      border-radius: 6px;
      outline: none;
      color: ${props => props.theme["gray-300"]};
      &::placeholder{
        color: ${props => props.theme["gray-500"]};
      }
      &:active{
        border-color: ${props => props.theme["green-300"]};
      }
    }
  }

  button[type="submit"]{
    background: ${props => props.theme["green-500"]};
    color: ${props => props.theme.white};
    font-weight: 700;
    padding: 1rem 0;
    width: 100%;
    border: none;
    border-radius: 6px;
    margin-top: 2.5rem;
    cursor: pointer;
    &:hover{
      background: ${props => props.theme["green-300"]};
      transition: .2s;
    }
  }
`

export const ButtonClose = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  color: ${props => props.theme["gray-500"]};
  font-size: 0;

  top: 1.5rem;
  right: 1.5rem;
`

export const Title = styled(Dialog.Title)`
  font-size: 1.5rem;
`

export const TransactionsTypeContainer = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
`

interface TransactionsTypeProps {
  variant: "income" | "outcome";
}

export const TransactionsTypeButton = styled(RadioGroup.Item) <TransactionsTypeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  border: 0;
  border-radius: 6px;
  padding: 1rem;
  background: ${props => props.theme["gray-700"]};
  color: ${props => props.theme["gray-300"]};
  svg{
    color: ${props => props.variant === "income" ? props.theme["green-300"] : props.theme["red-300"]};
  }
  &[data-state = "unchecked"]:hover{
    background: ${props => props.theme["gray-600"]};
    transition: background-color 0.2s;
  }

  &[data-state = "checked"]{
    background: ${props => props.variant === "income" ? props.theme["green-700"] : props.theme["red-700"]};
    color: ${props => props.theme.white};
    svg{
      color: ${props => props.theme.white};
    }
  }
`