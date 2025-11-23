# Desenvolvendo o Dio Bank
desenvolvido por [Nathally Souza](https://github.com/nathyts)

#### Projeto desenvolvido com React

### Tecnologias
- Typescript

### Como rodar o projeto

1 - Clone o repositório

2 - Instale as dependeências
    
    npm install

3 - Execute o projeto

    npm start

#### Desafios
[x] Crie os componentes referentes aos elementos na página inicial
  - Crie um componente para o header, com o título da aplicação
  - Crie um componente para o botão, que aceite onClick como uma das props do componente
  - Refatore o componente Card para receber o formulário de login. Ao invés de chamar elemento por elemento na página inicial, apenas o componente Card deve ser chamado.

[x] Crie uma função de Boas vindas
  - Ao clicar no botão, deve aparecer um alert com uma mensagem de boas vindas
  - Crie o teste unitário da função

### Solução
Para resolver os desafios propostos, a seguinte estrutura de componentes foi criada:

- **`Header`**: Um componente de cabeçalho simples que exibe o título da aplicação, "Dio Bank".
- **`Button`**: Um botão reutilizável que recebe uma função `onClick` como propriedade, permitindo a execução de ações personalizadas.
- **`Card`**: O componente `Card` foi refatorado para encapsular o formulário de login, incluindo campos de `email`, `password` e o componente `Button`.
- **`App.tsx`**: O componente principal da aplicação foi simplificado para renderizar apenas o `Header` e o `Card`, tornando o código mais limpo e modular.
- **`login` service**: Uma função de login foi criada para exibir um `alert` de boas-vindas quando o botão de login é clicado.
- **Testes**: Foi criado um teste unitário para a função `login`, garantindo que o `alert` é chamado corretamente.