import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 90%;
  height: 60px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background: #40db3b;
  margin-top: 19px;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 22px;
  color: #fff;
`;
