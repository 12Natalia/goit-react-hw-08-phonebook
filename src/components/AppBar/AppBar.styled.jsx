import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  CarryOutOutlined,
  LoginOutlined,
  HomeOutlined,
  SolutionOutlined,
} from '@ant-design/icons';

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  color: #008000;
`;

export const Link = styled(NavLink)`
  :nth-child(2n + 1) {
    margin-right: 20px;
  }
  &.active {
    border-top: 2px solid #adff2f;
  }
  text-decoration: none;
  color: #008000;
  font-size: 18px;
  font-weight: 600;
  padding: 11px 4px;
`;

export const RegIcon = styled(CarryOutOutlined)`
  margin-right: 8px;
`;

export const LogInIcon = styled(LoginOutlined)`
  margin-right: 8px;
`;

export const HomeIcon = styled(HomeOutlined)`
  margin-right: 8px;
`;

export const ContactIcon = styled(SolutionOutlined)`
  margin-right: 8px;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  width: 1000px;
`;
