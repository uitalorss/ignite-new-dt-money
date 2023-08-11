import * as Dialog from "@radix-ui/react-dialog";
import { ButtonClose, Content, Overlay, Title } from "./styles";
import { X } from "phosphor-react";


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
        <button type="submit">Cadastrar</button>
        <ButtonClose>
          <X size={24} />
        </ButtonClose>
      </Content>
    </Dialog.Portal>
  )
}