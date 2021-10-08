---
date: '2021-04-09'
title: 'Não use any no Typescript'
featuredImage: ../../../data/images/negative-space-california-road-dry.webp
alt: Image by Matt Bango in Negative Space
link: https://negativespace.co/valley-road/
description: Você deveria evitar usar o tipo any na sua aplicação React. Aqui está algumas dicas para te ajudar com isso
---

Umas das melhores coisas no Typescript é usar tipagem em funções, variáveis e componentes, melhorando sua experiência no código, trazendo muitas vantagens.
Porém, quando começamos a usar Typescript, não gostamos de adicionar as tipagens, adicionamos `any` em tudo, a parâmetros e retornos de funções; fazendo isso perdemos todos benefícios que o Typescript traz.

## Por que isso é errado?

Quando adicionamos tipos a uma função ou componente, é para melhorar nosso ambiente de desenvolvimento, deixando mais rápido criar código. Temos que colocar se o parâmetro é uma string, número, boleano ou um ReactComponent.
Ao adicionar um tipo `any`, só estamos mostrando que o parâmetro é qualquer coisa, pode ser string, número, array, uma página, um ReactNode...

Olha esse exemplo:

```tsx
interface ComponentProps {
  name: any;
}

const Component = ({ name }: ComponentProps) => <div>{name}</div>;
```

Passando `any` como um tipo para `name`, eu posso passar tudo como uma prop quando utilizo esse componente:

```jsx
<Component name={0123} />
<Component name={<div>Hello</div>} />
<Component name="Gabriel" />
```

## Não 'overtype'

Ok, então você vai por uma direção diferente, colocando tipos em TUDO, como uma resposta JSON da API do GitHub (exemplo desse [endpoint](https://api.github.com/users/gabrielmaiaf)):

```tsx
interface GithubUserResponseProps {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  (...more 28 types)
}
```

Isso demanda muito tempo e no fim você provavelmente vai usar somente 2 ou 3 informações desse endpoint. Só adicione tipo no que você precisa! A Intelisense da sua IDE e sua sanidade te agradecem:

```tsx
interface GithubUserResponseProps {
  name: string;
  id: number;
  avatar_url: string;
}
```

## Tire vantagem do \<T\>

Tem alguns casos que nós não tipamos diretamente como quando usamos `useState` do React, uma chamada da API utilizando Axios ou tipando uma página no Gatsby, como nesse exemplo:

```tsx
const [products, setProducts] = useState([]);
```

Colocando isso num projeto React usando Typescript, o array vai mostrar que é um tipo `never[]` ou `any[]` (`never` é até pior comparado a `any`, dizendo que nunca vai ter retorno). Então, como podemos mudar isso?

Quando você inspeciona `useState` internamente, você vai ver isso dentro da pasta `node_modules`:

```tsx
function useState<S>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>];
```

Esse `<S>` é passado para seu componente e se é um tipo simples como uma string, boleano ou número, vai passar automaticamente para o useState:

```tsx
const [text, setText] = useState(''); // vai mostrar que é um tipo string
const [number, setNumber] = useState(0); // vai mostrar que é um tipo número
const [isModalOpen, setIsModalOpen] = useState(false); // vai mostrar um tipo boleano
```

Mas quando é um array ou um objeto, você tem que usar `<S>` como exemplo:

```tsx
interface Product {
  id: number;
  name: string;
  price: number;
  isAvailable: boolean;
}

const [products, setProducts] = useState<Product[]>([]);
```

Então você receberá a tipagem corretamente quando usar a variável `products`.

Pegando proveito desse princípio, você pode faer como fiz nesse blog (olha esse [arquivo](https://github.com/gabrielmaiaf/gabrielmaiaf.github.io/blob/master/src/templates/blog-template.tsx)):

```tsx
interface BlogPost {
  markdownRemark: {
    html: string;
    frontmatter: {...};
    fields: {
      slug: string;
      langKey: string;
    };
  };
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
}

const Template: React.FC<PageProps<BlogPost>> = ({ data }) => { ... }
```

Estou passando o tipo que criei para PageProps do Gatsby.js, que estou passando para o tipo React.FC. Doido, não é?

## E componentes HTML?

Quando você quer adicionar tipos para um input ou form normal, criando seu input customizado, você não precisa passar todas as props criando seu tipo. Você só precisa passar a tipagem nativa diretamente, como nesse exemplo, onde amplio `InputProps` que criei com `InputHTMLAttributes<HTMLInputElement>`:

```tsx
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: React.CSSProperties;
  icon?: React.ComponentType<IconBaseProps>;
}
```

Esse `InputHTMLAttributes` é um tipo importado do React, mas `HTMLInputElement` é nativo, não preciso importar para usar, como usamos `window` ou `Intl`. Então, quando utilizar esse componente, todas as propriedades do input serão passados diretamente para meu input customizado.

Happy typing!
