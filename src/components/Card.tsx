import {
  Center,
  Input,
  Box,
} from '@chakra-ui/react'
import { Button } from './Button/Button';

interface ICard {
  id: number,
  title: string,
  onClick: () => void
}

export const Card = ({ id, title, onClick }: ICard) => {
  return(
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
      <Center>
        <h1>{title}</h1>
      </Center>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Center>
        <Button onClick={onClick} title='Button' />
      </Center>
    </Box>
  )
}