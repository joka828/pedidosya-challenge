# pedidosya-challenge
Repo for both node service and react app for PedidosYa Joaquin Candalaft's challenge.

This should be ran in two terminals at the same time: one for the node service, and one for the front end.

### First terminal (Node Service)
On the root of the project:

```shell
cd ./service
npm i
npm start
```

It will be accesible at [http://localhost:3001](http://localhost:3001)
The exercise said that the shops should be searched with the param `query`. I changed that param to `shopName` in order to have better code consistency.

### Second terminal (React UI)
On the root of the project:

```shell
cd ./frontend
npm i
npm start
```

It will be accesible at [http://localhost:3000](http://localhost:3000) . Make sure you use localhost for this one since the node service has the CORS header allowing only that url.

Run `npm test` for jest snapshot testing.

Enjoy and thanks for taking the time for this!
