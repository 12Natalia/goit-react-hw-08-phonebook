import {
  Title,
  Wrap,
  Section,
  HomeSearchIcon,
  HomePhoneIcon,
  HomeUserDeleteIcon,
  HomeUserAddIcon,
  UnderTitle,
  HomeLink,
} from './Home.styled';

import { useSelector } from 'react-redux';

export default function Home() {
  const { isLoaggedIn } = useSelector(state => state.auth);

  return (
    <Section>
      <Title>PhoneBook welcome page</Title>

      <Wrap>
        {' '}
        <HomeSearchIcon /> <HomePhoneIcon />
        <HomeUserAddIcon />
        <HomeUserDeleteIcon />
      </Wrap>

      {!isLoaggedIn ? (
        <UnderTitle>
          Please click
          <HomeLink to="/register">Register</HomeLink>
          or
          <HomeLink to="/login">Log in</HomeLink>
          to start using the phone book
        </UnderTitle>
      ) : (
        <UnderTitle>
          In the
          <HomeLink to="/contacts">Contacts</HomeLink>
          tab, you can add, edit, delete and find your contacts
        </UnderTitle>
      )}
    </Section>
  );
}
