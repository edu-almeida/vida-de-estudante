import React from 'react';

import {
  Container,
  Header,
  Icon,
  Title,
  Footer,
  Amount,
  LastTransaction,
} from './styles';

interface HighlightCardProps{
  title: string;
  amount: string;
  lastTransaction?: string;
  type: 'income' | 'expense' | 'total';
}

export function HighlightCard({title, amount, lastTransaction, type}: HighlightCardProps) {
  const icons = {
    income: 'ios-caret-up',
    expense: 'ios-caret-down',
    total: 'md-wallet'
  }
  
  return (
    <Container>
      <Header>
        <Icon name={icons[type]} type={type} />
        <Title>{title}</Title>
      </Header>
      <Footer>
        <Amount>{amount}</Amount>
        <LastTransaction>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}