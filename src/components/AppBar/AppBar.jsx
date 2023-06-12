import {
  Nav,
  Link,
  RegIcon,
  LogInIcon,
  HomeIcon,
  ContactIcon,
  Container,
} from './AppBar.styled';

import { Spiner } from 'components/LoadingIndicator';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const { isLoaggedIn, isLoading } = useSelector(state => state.auth);

  return (
    <header>
      {isLoading && <Spiner />}

      <Container>
        <Nav>
          <div>
            <Link to="/">
              <HomeIcon />
              Home
            </Link>
            {isLoaggedIn && (
              <Link to="/contacts">
                <ContactIcon />
                Contacts
              </Link>
            )}
          </div>
          <div>
            {isLoaggedIn ? (
              <UserMenu />
            ) : (
              <>
                <Link to="/register">
                  <RegIcon />
                  Register
                </Link>
                <Link to="/login">
                  <LogInIcon />
                  Log in
                </Link>
              </>
            )}
          </div>
        </Nav>
      </Container>
      <div style={{ position: 'fixed', bottom: '0', right: 0 }}>
        <img
          src={
            ' https://1.bp.blogspot.com/-WdVXaAz12Hk/YRKSaDor1NI/AAAAAAAAEVI/t3iPbaGE7GQQrmv2SwNsVRma7bw6ykRiwCLcBGAsYHQ/s0/%25D0%259A%25D0%25BE%25D1%2582%25D0%25B8%25D0%25BA%2B4.gif'
          }
          alt="МУРЧИК"
        />
      </div>
    </header>
  );
};
