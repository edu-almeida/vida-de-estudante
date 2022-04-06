import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Svg, { Ellipse } from 'react-native-svg';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  Gretting,
  GrettingUser,
  LogoutButton,
  Icon,
  Text,
  HighlightCards,
  Title,
  HighlightCardsList,
} from './styles';
import { HighlightCard } from '../../components/HightlightCard';


export function Home() {
  return (
    <Container>
      {/* <CustomBackground /> */}
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{ uri: 'https://avatars.githubusercontent.com/elveson' }}
            />
            <Gretting>
              Olá,
              <GrettingUser> Elveson</GrettingUser>!
            </Gretting>
          </UserInfo>
          <LogoutButton>
            <Icon name="logout" />
            <Text>Sair</Text>
          </LogoutButton>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <Title>Carteira</Title>
        <HighlightCardsList>
          <HighlightCard />
          <HighlightCard />
          <HighlightCard />
        </HighlightCardsList>
      </HighlightCards>

      <Transactions>
        <Title>Movimentações</Title>
      </Transactions>
    </Container>
  );
}