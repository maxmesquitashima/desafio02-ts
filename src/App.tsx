import {
  ChakraProvider,
  Box
} from '@chakra-ui/react'
import { login } from './services/login';
import { Card } from './components/Card';
import { Header } from './components/Header/Header';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Header />
        <Card id={1} title='Faça o login' onClick={login} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
