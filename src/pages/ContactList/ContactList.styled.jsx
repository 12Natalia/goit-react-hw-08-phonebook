import styled from 'styled-components';
import { Button, Modal, Input } from 'antd';
import {
  UserSwitchOutlined,
  PhoneOutlined,
  ContactsOutlined,
} from '@ant-design/icons';

export const ButtonRedact = styled(Button)`
  margin-right: 8px;
  margin-left: auto;
  color: #008000;
  background-color: #adff2f;
  border: none;
`;

export const Item = styled.li`
  background-color: #f5f6f7;
  padding-left: 10px;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
`;

export const List = styled.ul`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export const UserIcon = styled(UserSwitchOutlined)`
  color: #c7c6c6;
  transform: translateY(60%);
`;

export const PhoneIcon = styled(PhoneOutlined)`
  color: #c7c6c6;
  transform: translateY(60%);
`;

export const InputForm = styled(Input)`
  height: 40px;
  font-size: 18px;
  width: 100%;
  :nth-child(1) {
    margin-bottom: 12px;
  }
`;

export const ModalRedact = styled(Modal)`
  text-align: center;
  .ant-modal-content {
    width: 330px;
    position: absolute;
    top: 20%;
    left: 20%;
  }
`;

export const UserIconList = styled(ContactsOutlined)`
  margin-right: 8px;
  color: #008000;
`;

export const PhoneiconList = styled(PhoneOutlined)`
  margin: 0 8px;
  color: #008000;
`;

export const DivName = styled.div`
  min-width: 220px;
`;

export const Title = styled.h2`
  margin: 20px auto;
  color: #008000;
`;

export const Container = styled.div`
  padding: 20px 0;
`;
