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



export function HighlightCard() {
  return (
    <Container>
      <Header>
        <Icon name="ios-wallet" />
        <Title>Disponivel</Title>
      </Header>
      <Footer>
        <Amount>R$ 1200,00</Amount>
        <LastTransaction>Última entrada dia 13 de abril</LastTransaction>
      </Footer>
    </Container>
  );
}
