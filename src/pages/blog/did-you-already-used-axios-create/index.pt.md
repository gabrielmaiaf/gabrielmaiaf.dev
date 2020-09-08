---
date: '2020-09-08'
title: 'Você já usou Axios.create?'
featuredImage: ../../../data/images/machine-gears-axios-create.jpg
alt: Machine Gears por Ryan McGuire na Gratisography
link: https://gratisography.com/photo/machine-gears/
description: Você já sabia sobre Axios.create? Pode usar no seu site para melhorar seus services usando a API
---

Quando usamos o Fetch ou Axios, geralmente passamos a URL inteira que vamos fazer a requisição, como esse exemplo de um GET na API do GitHub:

```jsx
axios.get('https://api.github.com/users/gabrielmaiaf');
```

Talvez você já tenha usado assim ou alterado de outras maneiras como:

```jsx
const baseUrl = 'https://api.github.com';

axios.get(`${baseUrl}/users/gabrielmaiaf`);
```

E desse ponto, para não ficar repetitivo, já vi criar funções ou uma classe, para retornar uma Promise, e você manipular os dados como quiser

```jsx
requestService.get('/users/gabrielmaiaf');
```

Sua aplicação irá funcionar normalmente mas o problema é quando você quer adicionar testes ou ter que trocar a URL para ambientes diferentes. Ter que mudar a URL, colocar uma variável na baseURL e assim por diante.

Você vê o erro quando se aplica testes, tenta mockar o projeto tentando fazer o teste de Actions do Redux e se esbarra no erro 'only absolute URLs are supported'. Você tenta usar somente o service, colocar a URL completa, tenta colocar só a action mas você sempre cai nesse erro.

## Aí entra o Axios.create

Essa semana tenho feito o bootcamp da Rocketseat e mostraram essa opção. Você cria uma instância passando alguns parâmetros iniciais como a URL ou header padrão.

Vamos aplicar no nosso exemplo:

```jsx
const gitAPI = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
```

E depois para você usar para pegar as informações do usuário, você pode usar a variável nas requisições

```jsx
gitAPI.get('/users/gabrielmaiaf');
```

E o interessante é que todos os métodos podem ser usados pela constante (POST, DELETE, PUT). Legal né?

## E os testes?

Para usar nos testes, podemos importar essa variável e usar um pacote chamado 'axios-mock-adapter'

```jsx
const gitMock = new MockAdapter(gitAPI);
```

E usar nos testes, mockando a resposta e as respostas

```jsx
apiMock.onGet("/users/gabrielmaiaf").reply(200, { ...resposta da api });
```
