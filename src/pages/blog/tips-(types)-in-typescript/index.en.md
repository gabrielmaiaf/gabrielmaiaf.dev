---
date: '2025-07-04'
title: "Tips (Types) in Typescript"
featuredImage: ../../../data/images/pexels-pixabay-261626.jpg
alt: Image by Pixabay in Pexels
link: https://www.pexels.com/photo/gray-metal-typewriter-part-in-close-up-photo-261626/
description: While I've done some code challenges, I've found some interesting patterns that I want to show
---

Since in my job I didn't have the opportunity to use Typescript (libraries blocking Typescript migration), I only had the chance to use and challenge myself when I done some code challenges and fixing some issues in my personal website.
Of course, for some people these patterns are already being used everywhere, but for me (maybe for you too) it is some news that you can use in your project (or in your company)

DISCLAIMER: I'll not post links for the code challenge itself, but I'll make some changes to show a good way to display the points that I have.

I'll present some types - oops, tips! - for you to use in your next day-to-day when using Typescript

## Global types
This one is the most basic (and sometimes missed) way to grab types everywhere in your project.
We create a file with any name that you want and at the end you use .d.ts.
Then, you can create some type inside the file like this example:
```typescript
export type AmountType = {
    amount: number;
    currency: string;
}
```

So, you can go to any .tsx (or .ts) and you can use this type right away, without importing!

## Namespace
This one I think it is a little more powerful. Imagine that you have a lot of types in your project and start importing (or doing the tip that I gave to you!), you will have a lot of strange types (or interfaces):
- ClientAmountType
- SubGroupClientAmountType
- PrimaryGroupClientAmountType

This way you will have so many names that it will break your Prettier max_length quickly! To avoid this kind of nightmare, in Typescript we have namespaces.
You can create inside a .d.ts file this way:
```typescript
declare namespace StarWarsRebels {
}
```

Then you can add some types on it
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

At the end of the file, you will add this line, exporting as namespace
```typescript
export as namespace StarWarsRebels;
```

So, when you will start coding, you can use the type based on namespace and then the type; without needing to use long names!
```typescript
let GoldenDroid: StarWarsRebels.C3POType;
```

## Conditional types with generic types
This one is something that I scratched some time (without using chatGPT!) because I found the documentation a little confusing and I struggled to see some examples. But thanks to StackOverflow I found some good tips.
For some reason, we have a field called value in our database that could be Amount or Installments. Now we have a crossroad, how can I add a conditional based on variable type? 
First we define the different case:

```typescript
export type Amount = {
    amount: number;
    currency: string;
}

export type Installments = number;
```

And finally we use the generic type "magic":
```typescript
export type Value<T> = T extends 'amount' ? Amount : Installments;
```

This is so powerful that we can switch around amount and installments, without breaking everything!

For example we parse the value based on API, only show currency field when the value is in amount type, we can use like this:
```tsx
<AmountComponent value={{value as Client.Value<'amount'>}} />
```
And when we want only to show installments:
```tsx
<input type="number" defaultValue={{value as Client.Value<installments>}} />
```