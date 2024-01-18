# TODO List Website

This project uses **Next.js, REACT, Node.js, MongoDB and Typescript.** <br>
**Website**: [`TODO List Maker`](https://todo-list-sc.vercel.app)

## Features:

- Allows users from anywhere in the world to maintain their own to-do lists with each task having its deadline in their local time. Tasks can be created, completed (checked) or removed.
- Every task will show 'Pending', 'Completed' or 'Deadline Expired' depending upon its status.
- The lists are persisted using MongoDB, hence the lists are maintained even when you close the app.
- PWA (Progressive Web App) compatibility is present, which allows users to install the web-app on their devices and use it. Some future developments are planned regarding the PWA, which will be listed further down below.

## Instructions to use the app:

- The instructions are pretty intuitive, since all the user has to do is to sign up once and then login using the same details to access and modify their lists.
- No empty tasks can be added, and if the deadline for a task is not mentioned, it will be set to EOD.

## Dependencies  

The repository is made using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) in TypeScript. Some of the major dependencies used are:
- `next (v14.0.4)`: The NextJS Framework which is used for routing and other backend stuff.
- `react (v18.2.0)` and `react-dom (v18.2.0)`: The ReactJS framework for frontend purposes.
- `next-auth`: For authentication of users.
- `bcrypt`: For hashing the passwords before storing them in the database.

There are also various development dependencies which are used:
- `typescript`: Typescript support dependency which also includes `@types/node`, `@types/react`, `@types/react-dom`

> _Note: The server runs on Node.js v20. Make sure to update Node if it is not yet updated._

## File Layout

```
components/
  (tsx component files)
models/
  (MongoDB models)
pages/
  api/
  _app.tsx
  (tsx page files)
public/
  (PWA service workers are also present here)
styles/
utils/
  db.ts (for connecting to the database)
```

## Running the server

The server can be run using `npm run dev`. The development server will run on [http://localhost:3000](http://localhost:3000).

The server can be built for production using the command `npm run build` and the build can be run using `npm run start`.

## Future developments

Currently trying to implement a notification system for the app which will notify users once a task's deadline is closing in, for example, in 1 hour.

