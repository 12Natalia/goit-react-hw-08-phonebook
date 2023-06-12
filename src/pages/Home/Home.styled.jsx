import styled, { keyframes } from 'styled-components';
import {
  UsergroupAddOutlined,
  SearchOutlined,
  PhoneOutlined,
  UserDeleteOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { rubberBand } from 'react-animations';

const rubberAnimation = keyframes`${rubberBand}`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #008000;
`;

export const Wrap = styled.div`
  margin-bottom: 60px;
  padding: 40px 0;
  display: flex;
  gap: 30px;
  justify-content: center;
`;

export const UnderTitle = styled.h2`
  color: #008000;
  text-align: center;
  font-size: 28px;
  height: 40px;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  margin: 0 6px;
  color: #008000;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: 1px solid #adff2f;
  border-radius: 8px;
  box-shadow: 0 2px 0 rgb(5 145 255 / 10%);
  padding: 5px 8px;
  background-color: #adff2f;
  font-weight: 400;
  font-size: 20px;
  :hover {
    opacity: 0.8;
  }
`;

export const Section = styled.section`
  padding-top: 50px;
`;

export const HomeSearchIcon = styled(SearchOutlined)`
  animation: 7s ${rubberAnimation};
  svg {
    color: #adff2f;
    width: 220px;
    display: block;
    height: 220px;
    margin: 0 auto;
  }
`;

export const HomePhoneIcon = styled(PhoneOutlined)`
  animation: 7s ${rubberAnimation};
  svg {
    color: #adff2f;
    width: 220px;
    display: block;
    height: 220px;
    margin: 0 auto;
  }
`;

export const HomeUserAddIcon = styled(UsergroupAddOutlined)`
  animation: 7s ${rubberAnimation};
  svg {
    color: #adff2f;
    display: block;
    height: 220px;
    margin: 0 auto;
    width: 250px;
  }
`;

export const HomeUserDeleteIcon = styled(UserDeleteOutlined)`
  animation: 7s ${rubberAnimation};

  svg {
    color: #adff2f;
    width: 220px;
    display: block;
    height: 220px;
    margin: 0 auto;
  }
`;
