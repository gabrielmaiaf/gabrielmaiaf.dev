---
date: '2021-03-26'
title: 'Connect local back-end with React Native in your phone'
featuredImage: ../../../data/images/network-1246209_1280.jpg
alt: Image by Free-Photos from Pixabay
link: https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1246209
description: What to do when your back-end not connect with your React Native app using your IP?
---

Esses dias tentei acessaruma API rodando localmente a um aplicativo em React Native para terminar um curso. Meu computador não tem muita performance para rodar um emulador (eu tentei usar Genymotion e Android Studio) e era muuuuito devagar.

Meu computador é um notebook HP 14-dk0002dx com um processador AMD-A9 dual core, 12GB de RAM, 512GB de SSD e não tem uma placa gráfica dedicada. Para trabalhar com desenvolvimento web é ok (se o projeto não for muito grande) mas não para trabalhar com desenvolvimento mobile. Tenho que usar meu celular para construir e testar uma aplicação, então rodando dois ou três consoles e o emulador é fora de cogitação.

A aplicação back-end estava rodando na porta 3333, então a melhor maneira de rodar no celular é digitar isso no console:

```nginx
adb reverse tcp:3333 tcp:3333
```

Tentei conectar usando localhost, falhou.
Tentei novamente com meu IP, falhou também.

Procurando no Stack Overflow achei uma solução usando Ngrok. Ele basicamente cria um túnel proxy entre a aplicação rodando localmente a uma URL pública. Você escolhe qual porta para conectar e o Ngrok cria a URL automaticamente.

Com o back-end rodando na porta 3333, você simplesmente tem que rodar num console separado:

```nginx
ngrok http 3333
```

E você verá isso:

```nginx
ngrok by @inconshreveable (Ctrl+C to quit)

Session Status online
Account YourUsername (Plan: Free)
Version 2.3.35
Region United States (us)
Web Interface http://127.0.0.1:4040
Forwarding http://123456789abc.ngrok.io -> http://localhost:3333
Forwarding https://123456789abc.ngrok.io -> http://localhost:3333

Connections ttl opn rt1 rt5 p50 p90
```

Agpora você só tem que usar `http://123456789abc.ngrok.io` na sua aplicação React Native e irá conectar normalmente.

Há alguns poréns:

- Sem nenhuma conta, irá desconectar a cada 2 horas
- Usando a conta grátis, cada vez que você rode `ngrok http [port]` vai te mostrar uma URL diferente que a última que você usou.
- Tem que tomar cuidado com sua URL, porque conectará ao servidor e deixando seu servidor local disponível globalmente.
- Usando uma conta paga, você pode colocar uma URL customizável e não irá trocar toda vez que você rodar o comando. Mas ainda assim você tem que tomar cuidado.
