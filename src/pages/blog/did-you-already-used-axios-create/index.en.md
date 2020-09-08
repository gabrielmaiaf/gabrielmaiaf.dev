---
date: '2020-09-08'
title: 'Did you already used Axios.create?'
featuredImage: ../../../data/images/machine-gears-axios-create.jpg
alt: Machine Gears by Ryan McGuire in Gratisography
link: https://gratisography.com/photo/machine-gears/
description: You did know about Axios.create? You can use in your site to boost your services to API
---

When we use Fetch or Axios, usually we pass through the whole URL to make a request, like this example making a GET request in GitHub API:

```jsx
axios.get('https://api.github.com/users/gabrielmaiaf');
```

Maybe you already used like that or changed to others ways like this:

```jsx
const baseUrl = 'https://api.github.com';

axios.get(`${baseUrl}/users/gabrielmaiaf`);
```

And from this point, not to be repetitive, I've already seen creating functions or a class returning a Promise, and you can manipulate data as you wish

```jsx
requestService.get('/users/gabrielmaiaf');
```

Your application will work normally but the problem is when you want to add service tests or have to change URL for different environments. Having to change the URL, placing a variable as a baseURL and so forth.

You see the error when you apply tests, trying to mock the project doing Redux Actions and bumps in the following error: 'only absolute URLs are supported'. You try use service, put the whole URL, try to use only the action but always falls in this error.

## Then enters Axios.create

This week I have doing Rocketseat bootcamp and they applied this option. You create an instance passing some initial parameters like an URL or standard header.

Let's apply to our example:

```jsx
const gitAPI = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
```

And to you use to get user info, you can use constant in all requests

```jsx
gitAPI.get('/users/gabrielmaiaf');
```

And the interesting thing is that all methods can be used by variable that you created (POST, DELETE, PUT), because you created an instance of Axios. Sweet, isn't it?

## And what about tests?

To use in tests, we can import this constant and use a package called 'axios-mock-adapter'

```jsx
const gitMock = new MockAdapter(gitAPI);
```

And use usually in tests, mocking the request and response

```jsx
apiMock.onGet("/users/gabrielmaiaf").reply(200, { ...api response });
```
