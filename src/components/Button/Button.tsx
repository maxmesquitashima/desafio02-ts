
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

interface IButton extends ButtonProps {
  onClick: () => void;
}

export const Button = ({ onClick, title, ...rest }: IButton) => {
  return (
    <ChakraButton onClick={onClick} colorScheme='teal' size='sm' width='100%' marginTop='5px' {...rest}>
      {title}
    </ChakraButton>
  )
}
