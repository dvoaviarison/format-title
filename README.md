# format-title

[![Build Status](https://travis-ci.org/dvoaviarison/format-title.svg?branch=master)](https://travis-ci.org/dvoaviarison/format-title)

Manipulate strings to give you the title format you need: capitalized/non-capitalized per word etc...

## Try me
You can try and see the result realtime [HERE](https://runkit.com/npm/format-title)

## API List
```java
capWords(string)
capFirstWord(string)
capAll(string)
capCamelize(string)
lowWords(string)
lowFirstWord(string)
lowAll(string)
lowCamelize(string)
```

## Example

Capitalize each word

```js
var formatTitle = require('format-title');
console.log(formatTitle.capWords('this is my title'));
// > This Is My Title
```

Capitalize first word only

```js
var formatTitle = require('format-title');
console.log(formatTitle.capFirstWord('this is my title'));
// > This is my title
```

Capitalize all (trivial)

```js
var formatTitle = require('format-title');
console.log(formatTitle.capAll('this is my title'));
// > THIS IS MY TITLE
```

