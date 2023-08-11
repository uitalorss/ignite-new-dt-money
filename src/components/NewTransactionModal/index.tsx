import * as Dialog from "@radix-ui/react-dialog";
import { ButtonClose, Content, Overlay, Title, TransactionsTypeButton, TransactionsTypeContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";


export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Nova transação</Title>
        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />
        </form>
        <TransactionsTypeContainer>
          <TransactionsTypeButton variant="income" value="income">
            <ArrowCircleUp size={24} />
            Entrada
          </TransactionsTypeButton>
          <TransactionsTypeButton variant="outcome" value="outcome">
            <ArrowCircleDown size={24} />
            Saída
          </TransactionsTypeButton>
        </TransactionsTypeContainer>
        <button type="submit">Cadastrar</button>
        <ButtonClose>
          <X size={24} />
        </ButtonClose>
      </Content>
    </Dialog.Portal>
  )
}