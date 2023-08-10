import { styled } from "styled-components";


export const SearchFormContainer = styled.form`
  width: 100%;
  max-width: 1280px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
  display: flex;
  gap: 1rem;

  input{
    flex: 1;
    border-radius: 6px;
    border: 1px solid transparent;
    background: ${props => props.theme["gray-900"]};
    color: ${props => props.theme["gray-300"]};
    padding: 1rem;
    outline: none;
    &::placeholder{
      color: ${props => props.theme["gray-500"]};
    }
    &:active{
      border: 1px solid ${props => props.theme["green-300"]};
    }
  }

  button{
    display: flex;
    align-items: center;
    gap: .75rem;
    padding: .75rem 2rem;
    background: transparent;
    color: ${props => props.theme["green-300"]};
    border-radius: 6px;
    border: 1px solid ${props => props.theme["green-300"]};
    font-weight: bold;
    cursor: pointer;
    &:hover{
      background: ${props => props.theme["green-500"]};
      border: 1px solid ${props => props.theme["green-500"]};
      color: ${props => props.theme.white};
      transition: .2s
    }
  }
`