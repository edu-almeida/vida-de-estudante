import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonName, Container, Icon } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  name: string;
  type: 'save' | 'cancel';
}

export function Button({ name, type, ...rest }: ButtonProps) {
  const icons = {
    save: 'check',
    cancel: 'x',
  };

  return (
    <Container {...rest}>
      <Icon name={icons[type]} type={type} />
      <ButtonName>{name}</ButtonName>
    </Container>
  );
}
