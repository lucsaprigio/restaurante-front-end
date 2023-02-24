import { BsPencilSquare } from 'react-icons/bs';
import { GiExitDoor, GiTable } from 'react-icons/gi';

import {
  MenuBars,
  Container,
  Content,
  IconWrapper,
  NavTo,
  LogoutButton,
} from './styles';

export function SideBar() {
  return (
    <Container>
      <Content>
        <MenuBars>
          <div>
            <NavTo to={"/"}>
              <IconWrapper>
                <GiTable size={21} />
                Mesas
              </IconWrapper>
            </NavTo>
            <NavTo to={"/"}>
              <IconWrapper>
                <BsPencilSquare size={21} />
                Cardápio
              </IconWrapper>
            </NavTo>
            <LogoutButton onClick={() => { }}>
              <IconWrapper>
                <GiExitDoor size={21} />
                Sair
              </IconWrapper>
            </LogoutButton>
          </div>
        </MenuBars>
      </Content>
    </Container>
  )
}