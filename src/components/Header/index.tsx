import igniteLogo from '../../assets/ignite-logo.svg';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      <strong>Ignite Feed</strong>
    </HeaderContainer>
  )
}