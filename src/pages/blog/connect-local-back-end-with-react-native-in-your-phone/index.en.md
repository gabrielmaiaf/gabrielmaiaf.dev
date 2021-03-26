---
date: '2021-03-26'
title: 'Connect local back-end with React Native in your phone'
featuredImage: ../../../data/images/network-1246209_1280.jpg
alt: Image by Free-Photos from Pixabay
link: https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1246209
description: What to do when your back-end not connect with your React Native app using your IP?
---

These days I tried to access a back-end API to an application running in my phone using React Native for finishing a course. My computer does not have good performance to run a emulator (I tried to using Genymotion and Android Studio) and it was soooo slow.

My computer is a HP 14-dk0002dx with a AMD-A9 dual core, 12GB RAM, 512GB SSD and does not have a dedicated graphics card. To work with web development it's ok (with a project not too big) but work with mobile development it's not. I have to use my phone to build and test any application, so running two or three console windows and a emulator it's out of question.

The back-end application was running in 3333, so the standard way to run in my phone is run this in console:

```nginx
adb reverse tcp:3333 tcp:3333
```

I tried to connect using localhost, it failed.
Tried again with my IP, it failed again.

Searching Stack Overflow I found a solution running Ngrok. Ngrok basically creates a proxy tunnel between an application running locally to a public URL. You choose a port to connect and Ngrok creates a URL to connect.

With the back-end running in port 3333, you simply have to run in a separate console window:

```nginx
ngrok http 3333
```

And you will see this:

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

Now you have to use only `http://123456789abc.ngrok.io` in your React Native application and it will connect normally.

There's some caveats:

- Without use any account, it will disconnect every two hours
- Using a free account, every time you run `ngrok http` it will send another URL different than the last one.
- You have to be careful with your URL, because it will connect to the server and making your local server globally.
- Using a paid account, you can set a custom URL and it will not change everytime you run Ngrok. But you have to be careful.
