import React from 'react';

import {
  Container,
  TransactionInfo,
  ContentIcon,
  Icon,
  Title,
  TransactionDetails,
  ContentTypeTransaction,
  IconTypeTransaction,
  DollarSign,
  Amount,
  Time,
} from './styles';

export interface TransactionCardProps {
  type: 'income' | 'expense';
  title: string;
  amount: string;
  time: string;
  iconTypeTransaction: string;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({data}: Props) {
  return (
    <Container>
      <TransactionInfo>
        <ContentIcon>
          <Icon name={data.iconTypeTransaction} type={data.type}/>
        </ContentIcon>
        <Title>{data.title}</Title>
      </TransactionInfo>
      <TransactionDetails>
        <ContentTypeTransaction>
          <IconTypeTransaction name={data.type === 'income' ? "ios-caret-up" : "ios-caret-down"} type={data.type}/>
          <DollarSign>R$</DollarSign>
        </ContentTypeTransaction>
        <Amount>{data.amount}</Amount>
        <Time>{data.time}</Time>
      </TransactionDetails>
    </Container>
  );
}
