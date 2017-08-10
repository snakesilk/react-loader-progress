# React Loader Progress

React progress visualizers for Snakesilk Loaders customizable with CSS.

## Usage

* Install.
```bash
yarn add @snakesilk/react-loader-progress
```

* Require component.
```js
import {ProgressBar} from '@snakesilk/react-loader-progress';
```

* Setup and render.
```jsx
<ProgressBar loader={loader}/>
```

## Props

### `loader` *Loader*
Instance of a Snakesilk Loader object which the progress events will be bound to.
