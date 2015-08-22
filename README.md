# divTOjstree
javascript/requirejs module converting HTML elements to jstree elements

## Usage

``` html
This module let you to convert an HTML element to an Jstree element.
HTML element example:

<div class="jstree option-TESTNAME"></div>
```
TESTNAME must mach an object configuration:

``` javascript
define(function () {
    var configurations = {};
    configurations["TESTNAME"] = {
        "onClickCallback": function (nodeElement) {
             //calback fot the click events
        },
        "serverBasePath": "./stubServer.json" 
    };
    return configurations;
});
```


## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please email mercoglianoisidoro.com instead of using the issue tracker.

## Credits

- [isidoro][mercogliano.isidoro@gmail.com]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.



