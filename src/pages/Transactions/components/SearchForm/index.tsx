import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { loadTransactions } = useContext(TransactionsContext)
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  });

  function handleSearchTransactions(data: SearchFormInput) {
    loadTransactions(data.query)
  }


  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input type="text" placeholder="Busque uma transação" {...register("query")} />
      <button> <MagnifyingGlass size={20} />  Buscar</button>
    </SearchFormContainer>
  )
}