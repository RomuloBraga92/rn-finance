import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #131313;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 30px;
  color: #f4f4f4;
  margin-bottom: 30px;
`;

export const Logo = styled.Image`
  margin: 30px 0;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.35)',
})`
  width: 90%;
  height: 60px;
  padding: 0 16px;
  margin-bottom: 15px;
  background: rgba(100, 100, 100, 0.4);
  border-radius: 10px;
  color: #fff;
  align-items: center;
  border-width: 2px;
  border-color: #40db3b;
  font-size: 20px;
`;

export const SignUpButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-color: #fff;
  padding: 16px 0 ${getBottomSpace()}px;
`;

export const SignUpButtonText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 20px;
  color: #fff;
`;
