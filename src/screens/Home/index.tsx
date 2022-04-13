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
  TransactionList,
  Transactions,
} from './styles';
import { HighlightCard } from '../../components/HightlightCard';
import {
  TransactionCard,
  TransactionCardProps,
} from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Home() {
  const transactionData: DataListProps[] = [
    {
      id: '1',
      type: 'income',
      title: 'Salário',
      amount: '510,00',
      time: '11:30 am 24/01/2022',
      iconTypeTransaction: 'piggy-bank',
    },
    {
      id: '2',
      type: 'income',
      title: 'Salário',
      amount: '510,00',
      time: '11:30 am 24/01/2022',
      iconTypeTransaction: 'piggy-bank',
    },
    {
      id: '3',
      type: 'income',
      title: 'Salário',
      amount: '510,00',
      time: '11:30 am 24/01/2022',
      iconTypeTransaction: 'piggy-bank',
    },
    {
      id: '4',
      type: 'expense',
      title: 'Salário',
      amount: '510,00',
      time: '11:30 am 24/01/2022',
      iconTypeTransaction: 'piggy-bank',
    },
    {
      id: '5',
      type: 'income',
      title: 'Salário',
      amount: '510,00',
      time: '11:30 am 24/01/2022',
      iconTypeTransaction: 'piggy-bank',
    },
    {
      id: '6',
      type: 'income',
      title: 'Salário',
      amount: '510,00',
      time: '11:30 am 24/01/2022',
      iconTypeTransaction: 'piggy-bank',
    },
    {
      id: '7',
      type: 'income',
      title: 'Salário',
      amount: '510,00',
      time: '11:30 am 24/01/2022',
      iconTypeTransaction: 'piggy-bank',
    },
  ];
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
          <HighlightCard
            title="Disponível"
            amount="R$12000,00"
            // lastTransaction="Última entrada dia 13 de abril"
            type="total"
          />
          <HighlightCard
            title="Entradas mês"
            amount="R$1200,00"
            lastTransaction="Última entrada dia 13 de abril"
            type="income"
          />
          <HighlightCard
            title="Saídas mês"
            amount="R$1200,00"
            lastTransaction="Última entrada dia 13 de abril"
            type="expense"
          />
        </HighlightCardsList>
      </HighlightCards>

      <Transactions>
        <Title>Movimentações</Title>
        <TransactionList
          data={transactionData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
