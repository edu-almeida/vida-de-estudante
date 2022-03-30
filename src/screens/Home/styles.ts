import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import {MaterialCommunityIcons} from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_dark};
`;

export const Header = styled.View`
  width: 100%;
  height: ${getStatusBarHeight() + RFValue(64)}px;

  background-color: ${({ theme }) => theme.colors.background_dark};

  justify-content: center;
  align-items: flex-end;
`;

export const UserWrapper = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${RFValue(14)}px ${RFValue(28)}px;

  margin-top: ${RFValue(15)}px; 
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(36)}px;
  height: ${RFValue(36)}px;

  border-radius: 18px;

  margin-right: 8px;
`;

export const Gretting = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.title};
`;

export const GrettingUser = styled.Text`
  color: ${({ theme }) => theme.colors.income};
`;

export const LogoutButton = styled.View`
  flex-direction: row;
`;

export const Icon = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.title};
  margin-right: ${RFValue(8)}px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  font-weight: bold;
`;
