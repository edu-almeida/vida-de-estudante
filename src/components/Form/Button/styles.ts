import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'save' | 'cancel';
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(16)}px;

  ${(props) => props.type === 'save' && css`
    color: ${({ theme }) => theme.colors.income};
  `}
  ${(props) => props.type === 'cancel' && css`
    color: ${({ theme }) => theme.colors.expense};
  `}
`;

export const ButtonName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};

  margin-left: 6px;
`;
