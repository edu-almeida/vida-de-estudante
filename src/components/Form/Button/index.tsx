import React from 'react';
import { ButtonName, Container, Icon } from './styles';

interface ButtonProps {
  name: string;
  type: 'save' | 'cancel';
}

export function Button({ name, type }: ButtonProps) {
  const icons = {
    save: 'check',
    cancel: 'x',
  };

  return (
    <Container>
      <Icon name={icons[type]} type={type} />
      <ButtonName>{name}</ButtonName>
    </Container>
  );
}
