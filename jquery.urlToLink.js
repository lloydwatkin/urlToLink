/**
 * urlToLink plugin
 *
 * Transforms URLs in text into HTML <a> elements.
 *
 * Example: Lorem ipsum dolor sit amet consecter adpsim elit http://loremipsum.com
 * Result:  Lorem ipsum dolor sit amet consecter adpsim elit <a href="http://loremipsum.com">http://loremipsum.com</a>
 *
 * HOW TO USE
 *
 * Assuming that you have already inserted jquery.js and jquery.urlToLink.js in your code
 * and that $ is your jQuery object reference.
 *
 * Simple usage:
 * $('p').urlToLink();
 *
 * Changing the parameters:
 * $('p').urlToLink({target:'_blank'});
 *
 * You can change the default parameters by calling
 * $.fn.urlToLink.defaults anywhere in your script.
 *
 * LICENSE
 *
 * This plugin was inspired by John Gruber's regex at
 * http://daringfireball.net/2010/07/improved_regex_for_matching_urls
 *
 * Copyright (c) 2011 Gabriel Izaias (gabrielizaias.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
(function ($) {
    "use strict";

    var linkMatchingRegEx = /\b(?:\b[a-z\d.-]+:\/\/[^<>\s]+|\b(?:(?:(?:[^\s!@#$%^&*()_=+[\]{}\|;:'",.<>\/?]+)\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:[0-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5]))(?:[;\/][^#?<>\s]*)?(?:\?[^#<>\s]*)?(?:#[^<>\s]*)?(?!\w))/ig

    $.fn.urlToLink = function (options) {
        options = $.extend({}, $.fn.urlToLink.defaults, options);
        return this.each(function () {
            $(this).html($(this).html().replace(
                linkMatchingRegEx,
                function (match, contents, offset, s) {
                    var href = match,
                        linkText = '',
                        lengthToSplit = 0;

                    if (options.removeHttp)
                        href = href.replace("http://", "").replace("https://", "")

                    linkText = href

                    if (options.compressTo) {
                        if (href.length > options.compressTo) {
                            lengthToSplit = (options.compressTo - options.compressWith.length) / 2
                            linkText = href.substring(0, lengthToSplit) +
                                        options.compressWith +
                                        href.slice(-lengthToSplit)
                        }
                    }

                    return ' <a href="' + match + '" title="' + match + '" target="' + options.target + '">' + linkText + '</a>'
                }
            ))
        });
    }

    /**
     * Default configuration
     */
    $.fn.urlToLink.defaults = {
        // Link target
        target : '_self',
        // Text to add when compressedTo is set
        compressWith: '&hellip;'
    }
})(jQuery)
