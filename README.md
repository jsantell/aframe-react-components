# aframe-react-components

[![Build Status](http://img.shields.io/travis/jsantell/aframe-react-components.svg?style=flat-square)][travis]
[![Build Status](http://img.shields.io/npm/v/aframe-react-components.svg?style=flat-square)][npm]

Provides light sugar around [aframe-react's] `<Entity />` component. Instead of passing in a `primitive` attribute to an `<Entity />`, you can just use an [aframe-react-component] component.

```js
import { Entity } from 'aframe-react';

<Entity primitive='a-box' width='5' />
```

With [aframe-react-components], just use the component directly:

```js
import { Box } from 'aframe-react-components';

<Box width='5' />
```

## Usage

See [aframe-react-boilerplate] for general usage of [aframe-react]. See [src/components.js][components] for supported components.

## Installation

Ensure you have peer dependencies installed from [aframe-react].

```
npm install --save aframe aframe-react react react-dom aframe-react-components
```

## Test

```
npm test
```

## Future Work

May possibly tie in [React PropTypes][proptypes] to components for aid in development.

## License

MIT License, Copyright (c) 2016 Jordan Santell

[aframe-react]: https://www.npmjs.com/package/aframe-react
[aframe-react-component]: https://www.npmjs.com/package/aframe-react-component
[aframe-react-boilerplate]: https://github.com/ngokevin/aframe-react-boilerplate
[proptypes]: https://facebook.github.io/react/docs/react-component.html#proptypes
[travis]: https://travis-ci.org/jsantell/aframe-react-components
[npm]: https://www.npmjs.org/package/aframe-react-components
[components]: https://github.com/jsantell/aframe-react-components/blob/master/src/components.js
