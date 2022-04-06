import React from 'react';

import { Container, IconPlus } from './styles';

interface ButtonNewTransactionProps {
  isFocused: boolean;
  size: number;
  color: string;
}

export function ButtonNewTransaction({
  isFocused,
  size,
  color,
}: ButtonNewTransactionProps) {
  return (
    <Container>
        <IconPlus name="plus" color={color} size={size} />
    </Container>
  );
}
