import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList, FlatListProps } from 'react-native';
import { DataListProps } from '.';

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

export const HighlightCards = styled.View`
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;

  color: ${({ theme }) => theme.colors.title};

  margin-bottom: 9px;
`;

export const HighlightCardsList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin: ${RFValue(9)}px 0 ${RFValue(5)}px 0;
`;

export const TransactionList = styled(
  FlatList as new (
    props: FlatListProps<DataListProps>
  ) => FlatList<DataListProps>
).attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Transactions = styled.View`
  flex: 1;
  padding: 20px;
`;
