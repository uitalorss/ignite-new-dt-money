import * as Dialog from "@radix-ui/react-dialog";
import { ButtonClose, Content, Overlay, Title, TransactionsTypeButton, TransactionsTypeContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newTransactionModalSchema = z.object({
  description: z.string(),
  value: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"])
})

type NewtransactionModalForm = z.infer<typeof newTransactionModalSchema>


export function NewTransactionModal() {
  const { register, handleSubmit, control } = useForm<NewtransactionModalForm>({
    resolver: zodResolver(newTransactionModalSchema),
    defaultValues: {
      type: "income"
    }
  })

  function handleNewTransaction(data: NewtransactionModalForm) {
    console.log(data)
  }
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Nova transação</Title>
        <form onSubmit={handleSubmit(handleNewTransaction)}>
          <input type="text" placeholder="Descrição" {...register("description")} required />
          <input type="number" placeholder="Preço" {...register("value", { valueAsNumber: true })} required />
          <input type="text" placeholder="Categoria" {...register("category")} required />
          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionsTypeContainer onValueChange={field.onChange} value={field.value}>
                  <TransactionsTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionsTypeButton>
                  <TransactionsTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionsTypeButton>
                </TransactionsTypeContainer>
              )
            }}
          />
          <button type="submit">Cadastrar</button>
          <ButtonClose>
            <X size={24} />
          </ButtonClose>
        </form>
      </Content>
    </Dialog.Portal>
  )
}