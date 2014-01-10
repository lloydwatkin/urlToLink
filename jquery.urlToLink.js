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

    var linkMatchingRegEx = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig

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
        target : '_self', // Link target
        compressWith: '...'
    }
})(jQuery)
