import logoIgnite from '../../assets/ignite-logo.svg';
import { HeaderContainer, HeaderContent } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={logoIgnite} alt="" />
          <h3>DT Money</h3>
        </div>
        <button>
          Nova transação
        </button>
      </HeaderContent>
    </HeaderContainer>
  )
}