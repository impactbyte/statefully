# Statefully

![Travis (.org)](https://img.shields.io/travis/rahmanfadhil/statefully.svg) ![size](https://badgen.now.sh/badge/install%20size/7.65%20kB/44CC11)

📦 A tiny state container for your javascript apps

- 💡 **Simple:** Easy to learn & use APIs
- 📦 **Small:** 7kb install size only
- 🔌 **Pluggable:** Use anywhere you want
- 🔒 **Type-Safe:** Great type support with TypeScript & Flow

> ⚠ NOTE: This project is under active development!

---

### 🔧 Installation

```sh
# Using npm
npm install statefully

# Using yarn
yarn add statefully
```

---

### 📦 Usage

**Create container**

```js
// Using ES Module
import { createContainer } from "statefully";
// Using CommonJS
const { createContainer } = require("statefully");

// Create container with initial value
const store = createContainer({ greeting: "John" });
```

**Get current state**

```js
store.getState(); // { greeting: "John" }
```

**Mutations**

> Mutation is just a function to mutate container data. Just like 'setState' in React

```js
// Register mutation
store.mutation("SET_GREETING", (state, { name }) => {
  return { greeting: name };
});

// Call mutation
store.mutate("SET_GREETING", { name: "Doe" });

store.getState(); // { greeting: "Doe" }
```

**Actions (beta)**

> Actions is a function to do asynchronous things. Ex: fetch data from server

```js
// Register action
store.action("GET_GREETING", async (mutate, { url }) => {
  // Fetch data from server with given url
  const data = await fetch(url);
  const { name } = await data.json();

  // Just a regular mutate function 😁
  mutate("SET_GREETING", { name: name });
});

// Call action
store.commit("GET_GREETING", {
  url: "https://jsonplaceholder.typicode.com/users/1",
});
```

---

### 📝 Guide

**Strict Mode**

> By default, calling unregistered mutation & action will not throw any errors. But you can change this behavior by passing strictMode to container options

```js
const store = createContainer({ greeting: "John" }, { strictMode: true });

// Both will throw an error
store.mutate("WRONG_MUTATION");
store.commit("WRONG_ACTION");
```

**Testing Containers**

```js
// Import your container
import store from "./container";

describe("Test", () => {
  test("Testing actions", () => {});
});
```

**With TypeScript**

```ts
// Create container
type State = { greeting: string };
const store = createContainer<State>({ greeting: "John" });

// Register mutation
type GreetingProps = { name: string };
store.mutation<GreetingProps>("SET_GREETING", (state, { name }) => {
  return { greeting: name };
});

// Call mutation
store.mutate<GreetingProps>("SET_GREETING", { name: "Doe" });
```

---

### 🌟 Features

- ✅ Mutations
- ✅ Actions
- ❌ Subscrition
- ✅ TypeScript Support
- ❌ Flow Support
- ❌ React binding

---

### 🔑 License

[MIT](https://oss.ninja/mit/rahmanfadhil)
