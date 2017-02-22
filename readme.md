# babel-preset-hyperdom

> Babel presets for hyperdom: JSX, binding syntax

## Example

In

```jsx
<input type="text" binding="item[n].method().name"/>
```

Out

```js
hyperdom.jsx("input", { type: "text", binding: [item[n].method(), "name"] });
```

## Installation

```sh
npm install --save-dev babel-preset-hyperdom
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["hyperdom"]
}
```

### Via CLI

```sh
babel --presets hyperdom script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["hyperdom"]
});
```
