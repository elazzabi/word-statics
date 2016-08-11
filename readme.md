# word-statics [![Build Status](https://travis-ci.org/elazzabi/word-statics.svg?branch=master)](https://travis-ci.org/elazzabi/word-statics)

> Get statistics about words in a string! Total words, total unique words and number of iterations for a given word

## Install

```
$ npm install --save word-statics
```

## Usage

```js
const ws = require('word-statics');

let string = 'Hello World! Hello World! Hello World!';
let x = ws(string);

// Returns an object
// => x = {
//		words: {
//			hello: 3,
//			world: 3
//		},
//		stats: {
//			totalWords: 6,
//			totalUniqueWords: 2
//		}
//	}

x.stats.totalWords; // 6

string = "Hello. hello!";
x = ws(string, true); // Case sensitive = true (false by default)

// Returns an object
// => x = {
//		words: {
//			hello: 1,
//			Hello: 1
//		},
//		stats: {
//			totalWords: 2,
//			totalUniqueWords: 2
//		}
//	}

```

## Testing

```
$ npm test
```

## License

MIT © [EL AZZABI Ahmed](http://elazzabi.com)
