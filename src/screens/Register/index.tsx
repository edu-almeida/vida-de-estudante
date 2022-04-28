import React from 'react';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Form/Button';

import {
  Container,
  Header,
  Form,
  Title,
  Price,
  DollarSign,
  Value,
  Description,
} from './styles';

export function Register() {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <Button name="Cancelar" type="cancel" />
        <Button name="Salver" type="save" />
      </Header>

      <Form>
        <Title>Valor da movimentação</Title>
        <Price>
          <DollarSign>R$</DollarSign>
          <Value placeholder="0,00" placeholderTextColor={theme.colors.total} />
        </Price>

        <Description
          placeholder="Descreva a Transação"
          placeholderTextColor={theme.colors.subtitle}
        />
        <Title>Categoria</Title>
      </Form>
    </Container>
  );
}
