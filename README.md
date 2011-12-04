# urlToLink jQuery Plugin

A jQuery plugin that transforms URLs in text into HTML `<a>` elements.


## How to use

Assuming that you have already inserted jquery.js and jquery.urlToLink.js in your code and that `$` is your jQuery object reference.

Simple usage:
`$('p').urlToLink();`

Changing the parameters:
`$('p').urlToLink({target:'_blank'});`

You can change the default parameters by calling `$.fn.urlToLink.defaults` anywhere in your script and passing an array to it. 
Example:
`$.fn.urlToLink.defaults = { target:'_blank'}`


## License

This plugin was inspired by Hugo Dias's snippet at http://goo.gl/pptTi

Copyright (c) 2011 [Gabriel Izaias](gabrielizaias.com)
Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html