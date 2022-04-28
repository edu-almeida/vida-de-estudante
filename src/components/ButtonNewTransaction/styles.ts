import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 56px;
  height: 56px;

  border-radius: 28px;
  background-color: ${({ theme }) => theme.colors.total};

  align-items: center;
  justify-content: center;

  /* margin-bottom: 45px; */
`;

export const IconPlus = styled(Feather)`
  font-size: ${RFValue(24)}px;
`;
