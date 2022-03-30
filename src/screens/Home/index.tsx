import React from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons'

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
} from './styles';
export function Home() {
  return (
    <Container>
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
    </Container>
  );
}
