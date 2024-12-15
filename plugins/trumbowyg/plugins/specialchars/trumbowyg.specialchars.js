/* ===========================================================
 * trumbowyg.specialchars.js v0.99
 * Unicode characters picker plugin for Trumbowyg
 * http://alex-d.github.com/Trumbowyg
 * ===========================================================
 * Author : Renaud Hoyoux (geektortoise)
*/

(function ($) {
    'use strict';

const suffixcode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const prefixcode = [
										'20A', '20B', 
										'220', '221', '222', '223', '224', '225', '226', '227', '228', '229', '22A', '22B', '22C', '22D', '22E', '22F',
										'230', '231', '232', '233', '234', '235', '236', '237', '238', '239', '23A', '23B', '23C', '23D', '23E', '23F',
										'260', '261', '262', '263', '264', '265', '266', '267', '268', '269', '26A', '26B', '26C', '26D', '26E', '26F',
										'270', '271', '272', '273', '274', '275', '276', '277', '278', '279', '27A', '27B',
										'1F70', '1F71', '1F72', '1F73', '1F74', '1F75', '1F76',

									 ];

var allspecialchars = [];
let p = 0;
while (p < prefixcode.length) {
		for(var i=0;i<16;i++){
	    allspecialchars.push(prefixcode[p]+''+suffixcode[i]);
		}
 p++;
}	
    var defaultOptions = {
        symbolList: allspecialchars
    };

    $.extend(true, $.trumbowyg, {
        langs: {
            en: {
                specialChars: 'Special characters'
            },
            az: {
                specialChars: 'Xüsusi simvollar'
            },
            by: {
                specialChars: 'Спецыяльныя сімвалы'
            },
            et: {
                specialChars: 'Erimärgid'
            },
            fr: {
                specialChars: 'Caractères spéciaux'
            },
            hu: {
                specialChars: 'Speciális karakterek'
            },
            ko: {
                specialChars: '특수문자'
            },
            ru: {
                specialChars: 'Специальные символы'
            },
            sl: {
                specialChars: 'Posebni znaki'
            },
            tr: {
                specialChars: 'Özel karakterler'
            },
        },
        plugins: {
            specialchars: {
                init: function (trumbowyg) {
                    trumbowyg.o.plugins.specialchars = trumbowyg.o.plugins.specialchars || defaultOptions;
                    var specialCharsBtnDef = {
                        dropdown: buildDropdown(trumbowyg)
                    };

                    trumbowyg.addBtnDef('specialChars', specialCharsBtnDef);
                }
            }
        }
    });

    function buildDropdown(trumbowyg) {
        var dropdown = [];
        $.each(trumbowyg.o.plugins.specialchars.symbolList, function (i, symbol) {
            if (symbol === null) {
                symbol = '&nbsp';
            } else {
                symbol = '&#x' + symbol;
            }

            var btn = symbol.replace(/:/g, ''),
                defaultSymbolBtnName = 'symbol-' + btn,
                defaultSymbolBtnDef = {
                    text: symbol,
                    hasIcon: false,
                    fn: function () {
                        var encodedSymbol = String.fromCodePoint(parseInt(symbol.replace('&#', '0')));
                        trumbowyg.execCmd('insertText', encodedSymbol);
                        return true;
                    }
                };

            trumbowyg.addBtnDef(defaultSymbolBtnName, defaultSymbolBtnDef);
            dropdown.push(defaultSymbolBtnName);
        });

        return dropdown;
    }
})(jQuery);
