import { styled } from "styled-components";


export const HeaderContainer = styled.header`
  background: ${props => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem 0;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div{
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  button{
    background: ${props => props.theme["green-500"]};
    color: ${props => props.theme.white};
    padding: .75rem 1.25rem;
    font-weight: 700;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    &:hover{
      background: ${props => props.theme["green-300"]};
      transition: .2s
    }
  }
`

