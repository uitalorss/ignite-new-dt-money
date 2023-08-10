import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque uma transação" />
      <button> <MagnifyingGlass size={20} />  Buscar</button>
    </SearchFormContainer>
  )
}