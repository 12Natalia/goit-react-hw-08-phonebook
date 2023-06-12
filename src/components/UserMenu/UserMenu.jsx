import { useSelector } from 'react-redux';
import { Avatar } from 'antd';
import { Wrap } from './UserMenu.styled';
import { ButtonOut } from './UserMenu.styled';
import { logOut } from 'Redux/Authorization/operations';
import { useDispatch } from 'react-redux';
import { LogoutOutlined } from '@ant-design/icons';

export const UserMenu = () => {
  const { name } = useSelector(state => state.auth.user);
  const { email } = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  return (
    <Wrap>
      <Avatar
        style={{
          backgroundColor: '#ADFF2F',
          color: '#008000',
        }}
      >
        {name.slice(0, 1).toUpperCase()}
      </Avatar>
      <p>{email}</p>
      <ButtonOut type="default" onClick={() => dispatch(logOut())}>
        <LogoutOutlined /> Log out
      </ButtonOut>{' '}
    </Wrap>
  );
};
