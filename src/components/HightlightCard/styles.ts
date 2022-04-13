import styled, { css } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'income' | 'expense' | 'total';
}

export const Container = styled.View`
  width: 159px;
  height: 89px;

  background-color: ${({ theme }) => theme.colors.background_light};
  border-radius: 20px;
  padding: 0 5px;

  margin-right: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-end;
  position: relative;
  bottom: 5px;
`;

export const Icon = styled(Ionicons)<TypeProps>`
  font-size: ${RFValue(27)}px;
  margin-right: 5px;

  ${(props) => props.type === 'total' && css`
    color: ${({ theme }) => theme.colors.total};
  `}
  ${(props) => props.type === 'income' && css`
    color: ${({ theme }) => theme.colors.income};
  `}
  ${(props) => props.type === 'expense' && css`
    color: ${({ theme }) => theme.colors.expense};
  `}
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.title};
  padding-bottom: 2px;
`;

export const Footer = styled.View``;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(24)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
`;

export const LastTransaction = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(7)}px;
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
`;
