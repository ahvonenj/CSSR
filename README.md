# CSSR

Makes writing CSS-styles with JavaScript in runtime easy.

## Features

* Styles are written with object notation
* Full (or at least 95%) CSS selector support
* Style identification - Applied styles can be tagged with an id for easy removal
* Stylebatching - CSSR batches styles with the same id together, which saves unnecessary style tags
* CSSR makes it easy to apply, for example, random values to CSS
* [Monad patterned](https://en.wikipedia.org/wiki/Monad_%28functional_programming%29)

## Example usage

```

// Create new CSSR object
var cssr = new CSSR();

// (Optional) Create "styleobject"
var styleobject = 
{
  '#whatever':
  {
    'position': 'absolute',
    'top': '10px',
    'left': '15%',
    'font-family': 'Tahoma, Arial, Consolas',
    'color': 'red'
  },
  '.something':
  {
    'margin-left': '12em'
  },
  'table#sometable tr:last-child td:nth-child(3) > h1':
  {
    'font-size': '5pt'
  }
}

// Apply / write styleobject and give it an id
cssr.writecss(styleobject, 'somestyle');

// Later remove by id
cssr.removecss('somestyle');

```
