# urlToLink jQuery Plugin

A jQuery plugin that transforms URLs in text into HTML `<a>` elements.


## How to use

<b>ATTENTION</b>: This plugin erases the event bindings of the element and its children. Use it only on elements that you are sure won't affect the overall behavior of your application.

Assuming that you have already inserted jquery.js and jquery.urlToLink.js in your code and that `$` is your jQuery object reference.

Simple usage:<br />
`$('p').urlToLink();`

Changing the parameters:<br />
`$('p').urlToLink({target:'_blank'});`

You can change the default parameters by calling `$.fn.urlToLink.defaults` anywhere in your script and passing an array to it. <br />
Example:<br />
`$.fn.urlToLink.defaults = { target:'_blank'}`


## License

This plugin was inspired by Hugo Dias's snippet at http://goo.gl/pptTi

Copyright (c) 2011 [Gabriel Izaias](gabrielizaias.com)<br />
Dual licensed under the MIT and GPL licenses:<br />
http://www.opensource.org/licenses/mit-license.php<br />
http://www.gnu.org/licenses/gpl.html
