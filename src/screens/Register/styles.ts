import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_dark};
`;

export const Header = styled.View`
  width: 100%;
  height: ${getStatusBarHeight() + RFValue(64)}px;

  background-color: ${({ theme }) => theme.colors.background_dark};

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  padding: 22px 28px;
`;

export const Form = styled.View`
  padding: 27px 18px;
  margin: 0 38px;
`;

export const Title = styled.Text`
  font-family:  ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Price = styled.View`
 flex-direction: row;
 align-items: center;
 justify-content: center;

 margin: 18px 0;
`;

export const DollarSign = styled.Text`
  font-family:  ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.total};

  margin-right: 8px;
`;

export const Value = styled(TextInput)`
  font-family:  ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(61)}px;
  color: ${({ theme }) => theme.colors.total};
`;

export const Description = styled(TextInput)`
  width: 100%;
  height: 86px;
  padding: 7px 13px;

  font-family:  ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.subtitle};

  background-color: rgba(255, 255, 255, 0.05) brightness(2);
  

  border: 1px solid ${({ theme }) => theme.colors.subtitle};
  border-radius: 8px;

`;

