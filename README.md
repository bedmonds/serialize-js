serialize.js
=============================

Serialize a form in JavaScript without external dependencies.


## Demo

Either open up `demo/index.html` locally or view an online demo
at <http://demo.bedmonds.net/serialize-js/>


## How does it work?

Include `serialize.js`, or paste its contents somewhere in your JS pipleine
and go to town.

Just call the `$serialize` function with a `form` element as a parameter.

    $serialize(formElement) // => queryString
    $serialize(document.getElementById('myForm')) // => queryString

Or, by passing in an optional event from a button click, to add that buttons
name and value pair to `$serialize`'s output.

    document.addEventListener(myFormButton, 'click', function(ev) {
      $serialize(myForm, ev);
    })

**Huzzah for not loading sixty megs of useless,
mobile-battery-murdering libraries.**


### Additional Files

- `sanity.js` is a set of convenient aliases to common JavaScript operations.

## License

MIT

## Author

Brian Edmonds \<brian@bedmonds.net\>
