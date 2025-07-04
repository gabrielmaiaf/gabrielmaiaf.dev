---
date: '2025-07-04'
title: "Tips (Types) in Typescript"
featuredImage: ../../../data/images/pexels-pixabay-261626.jpg
alt: Image by Pixabay in Pexels
link: https://www.pexels.com/photo/gray-metal-typewriter-part-in-close-up-photo-261626/
description: While I've done some code challenges, I've found some interesting patterns that I want to show
---

Como no meu trabalho não tive a oprtunidade usar Typescript (bibliotecas bloqueando o uso de Typescript), só tive a chance de usar e desafiar quando fiz alguns desafios de código e corrigi alguns problemas no meu site pessoal.
É claro, para algumas pessoas esses padrões já são usados em todo lugar, mas para mim (talvez para você também!) é novidade que pode usar no seu projeto (ou na sua empresa)

AVISO: não postarei liks para desafios, vou fazer alterações para mostrar uma boa forma de exibir os pontos.

Apresentarei alguns tipos para você usar no seu dia a dia com Typescript

## Tipagem global
Essa é a forma mais básica (e às vezes esquecida) de acessar tipos em qualquer lugar do seu projeto.
Criamos um arquivo com qualquer nome que você quiser e, no final, usa .d.ts.
Então, você pode criar um tipo dentro do arquivo assim:
```typescript
export type AmountType = {
    amount: number;
    currency: string;
}
```
Assim, você pode ir para qualquer .tsx (ou .ts) e usar esse tipo imediatamente, sem importar!

## Namespace
Essa eu acho um pouco mais poderosa. Imagine que você tem muita tipagem no seu projeto e começa a importar (ou faz a dica que dei acima!), você terá muitos tipos (ou interfaces) estranhos:
- ClientAmountType
- SubGroupClientAmountType
- PrimaryGroupClientAmountType

Dessa forma, você terá tantos nomes que vai quebrar o limite de comprimento do Prettier rapidinho! Para evitar esse tipo de pesadelo, no Typescript temos namespaces.
Você pode criar dentro de um arquivo .d.ts assim:
```typescript
declare namespace StarWarsRebels {
}
```

Adicionar alguns tipos dentro:
```typescript
    export type Droid = {
        type: 'droid';
    }

    export interface R2D2Type extends Droid = {
        class: 'Astromech';
        model: 'R2';
    }
    
    export interface C3POType extends Droid = {
        class: 'Protocol';
        model: '3PO';
    }
```

No final do arquivo, adicione essa linha, exportando o namespace:
```typescript
export as namespace StarWarsRebels;
```

Então, quando for codar, pode usar o tipo baseado no namespace, sem precisar de nomes longos!
```typescript
let GoldenDroid: StarWarsRebels.C3POType;
```

## Tipagem condicional com tipagem genérica
Essa é algo que eu ralei um tempo (sem usar chatGPT!) porque achei a documentação um pouco confusa e tive dificuldade para ver exemplos. Mas graças ao StackOverflow encontrei boas dicas.
Por algum motivo, temos um campo chamado value no nosso banco de dados que pode ser Amount ou Installments. Agora temos um dilema: como adicionar uma condicional baseada no tipo da variável?
Primeiro definimos os diferentes casos:

```typescript
export type Amount = {
    amount: number;
    currency: string;
}

export type Installments = number;
```

E finalmente usamos a "mágica" da tipagem genérica:
```typescript
export type Value<T> = T extends 'amount' ? Amount : Installments;
```

Isso é tão poderoso que podemos alternar entre amount e installments sem quebrar nada!

Por exemplo, ao fazer o parse do valor baseado na API, só mostramos o campo currency quando o valor é do tipo amount, podemos usar assim:
```tsx
<AmountComponent value={{value as Client.Value<'amount'>}} />
```
E quando queremos mostrar apenas installments:
```tsx
<input type="number" defaultValue={{value as Client.Value<installments>}} />
```