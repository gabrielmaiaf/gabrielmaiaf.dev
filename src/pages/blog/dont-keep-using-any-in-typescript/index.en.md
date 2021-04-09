---
date: '2021-04-09'
title: "Don't keep using any in Typescript"
featuredImage: ../../../data/images/negative-space-california-road-dry.webp
alt: Image by Matt Bango in Negative Space
link: https://negativespace.co/valley-road/
description: You should avoid using any type in your React aplication. There is some tips to help you with it
---

One of the greatest things in Typescript is using types in functions, variables and components, enhancing your code experience a lot, bringing all advantages while coding.
However, when we started coding Typescript, we don't like adding types so much, we add `any` in everything, to parameters and returns in functions; doing this we lose all benefits that Typescript brings.

## Why is this wrong?

When we add types to a function or component, it's to improve our development environment, making faster to code. We have to add if the parameter is a string, number, boolean or a ReactComponent.
Adding `any` type, we are just saying that the parameter it's anything, if it's a string, number, boolean, an array, a page component, ReactNode...

Look at this simple example:

```tsx
interface ComponentProps {
  name: any;
}

const Component = ({ name }: ComponentProps) => <div>{name}</div>;
```

Passing `any` as a type to `name`, I can pass anything as a prop when calling this component:

```jsx
<Component name={0123} />
<Component name={<div>Hello</div>} />
<Component name="Gabriel" />
```

## Don't overtype

Ok, so you begin to go a different approach, add a type to EVERYTHING, like a JSON response from GitHub API (example from [this endpoint](https://api.github.com/users/gabrielmaiaf)):

```tsx
interface GithubUserResponseProps {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  (...more 28 types)
}
```

This is gonna take too much time and at the end you will only use 2 or 3 informations from this endpoint. Just type what you need! Your IDE intelisense and your sanity will thank you:

```tsx
interface GithubUserResponseProps {
  name: string;
  id: number;
  avatar_url: string;
}
```

## Take advantage of \<T\>

There's some cases that we can't type directly like using `useState` from React, an API call using Axios or typing a page component in Gatsby, like this example:

```tsx
const [products, setProducts] = useState([]);
```

Adding this to a React project using Typescript, the array will show that it's a `never[]` or `any[]` type (`never` is even worse compared to `any`, saying that it will never return). So, how we gonna change this?

When you inspect `useState` internally, you will see like this inside `node_modules`:

```tsx
function useState<S>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>];
```

This `<S>` is passed to your component and if it's a simple type like string, boolean and number, it will pass automatically to useState:

```tsx
const [text, setText] = useState(''); // it will show a string type
const [number, setNumber] = useState(0); // it will show a number type
const [isModalOpen, setIsModalOpen] = useState(false); // it will show a boolean type
```

But when it's a array or object, you have to use `<S>` like our example:

```tsx
interface Product {
  id: number;
  name: string;
  price: number;
  isAvailable: boolean;
}

const [products, setProducts] = useState<Product[]>([]);
```

Then you will receive the type correctly when use the variable `products`.

Using this principle, you can use like I use in this blog (look this [file](https://github.com/gabrielmaiaf/gabrielmaiaf.github.io/blob/master/src/templates/blog-template.tsx)):

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

I'm passing the type that I created to PageProps from Gatsby.js, and I'm passing all this to React.FC. Crazy, isn't it?

## What about HTML components?

When you want to add types passing for a regular input or form, creating your custom input, you don't need to pass every prop creating your type. You just need pass native type directly, like this example, where I extend `InputProps` that I created with `InputHTMLAttributes<HTMLInputElement>`:

```tsx
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: React.CSSProperties;
  icon?: React.ComponentType<IconBaseProps>;
}
```

This `InputHTMLAttributes` is a type imported from React, but `HTMLInputElement` it's native, I don't need import to use it, like when we use `window` or `Intl`. So, when I use this component, every native prop from input will pass directly to my custom input.

Happy typing!
