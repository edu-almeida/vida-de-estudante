import styled, { css } from 'styled-components/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeTransaction {
  type: 'income' | 'expense';
}

export const Container = styled.View`
  height: ${RFValue(83)}px;

  flex-direction: row;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: rgba(255, 255, 255, 0.05);

  align-items: center;
  justify-content: space-between;
`;

export const TransactionInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContentIcon = styled.View`
  width: 45px;
  height: 45px;

  background-color: ${({ theme }) => theme.colors.background_light};

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 24.5px;
  margin: 5px;
`;

export const Icon = styled(MaterialCommunityIcons)<TypeTransaction>`
  font-size: ${RFValue(29)}px;
  ${(props) =>
    props.type === 'income'
      ? css`
          color: ${({ theme }) => theme.colors.income};
        `
      : css`
          color: ${({ theme }) => theme.colors.expense};
        `};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
  margin: 10px;
`;

export const TransactionDetails = styled.View`
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

export const ContentTypeTransaction = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IconTypeTransaction = styled(Ionicons)<TypeTransaction>`
  font-size: ${RFValue(22)}px;
  ${(props) =>
    props.type === 'income'
      ? css`
          color: ${({ theme }) => theme.colors.income};
        `
      : css`
          color: ${({ theme }) => theme.colors.expense};
        `};
`;

export const DollarSign = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Time = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(8)}px;
  color: ${({ theme }) => theme.colors.title};
`;
