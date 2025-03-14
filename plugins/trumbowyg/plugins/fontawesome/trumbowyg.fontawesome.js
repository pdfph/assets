/* ===========================================================
 * trumbowyg.fontawesome.js v0.1
 * fontawesome picker plugin for Trumbowyg
 * http://alex-d.github.com/Trumbowyg
 * ===========================================================
 * Author : Nicolas Pion
 *          Twitter : @nicolas_pion
 */

(function ($) {
    'use strict';

    var defaultOptions = {
        fontawesomeList: [
'&#xf000', '&#xf001', '&#xf002', '&#xf003', '&#xf004', '&#xf005', '&#xf006', '&#xf007', '&#xf008', '&#xf009', '&#xf00a', '&#xf00b', '&#xf00c', '&#xf00d', '&#xf00e', '&#xf010', '&#xf011', '&#xf012', '&#xf013', '&#xf014', '&#xf015', '&#xf016', '&#xf017', '&#xf018', '&#xf019', '&#xf01a', '&#xf01b', '&#xf01c', '&#xf01d', '&#xf01e', '&#xf021', '&#xf022', '&#xf023', '&#xf024', '&#xf025', '&#xf026', '&#xf027', '&#xf028', '&#xf029', '&#xf02a', '&#xf02b', '&#xf02c', '&#xf02d', '&#xf02e', '&#xf02f', '&#xf030', '&#xf031', '&#xf032', '&#xf033', '&#xf034', '&#xf035', '&#xf036', '&#xf037', '&#xf038', '&#xf039', '&#xf03a', '&#xf03b', '&#xf03c', '&#xf03d', '&#xf03e', '&#xf040', '&#xf041', '&#xf042', '&#xf043', '&#xf044', '&#xf045', '&#xf046', '&#xf047', '&#xf048', '&#xf049', '&#xf04a', '&#xf04b', '&#xf04c', '&#xf04d', '&#xf04e', '&#xf050', '&#xf051', '&#xf052', '&#xf053', '&#xf054', '&#xf055', '&#xf056', '&#xf057', '&#xf058', '&#xf059', '&#xf05a', '&#xf05b', '&#xf05c', '&#xf05d', '&#xf05e', '&#xf060', '&#xf061', '&#xf062', '&#xf063', '&#xf064', '&#xf065', '&#xf066', '&#xf067', '&#xf068', '&#xf069', '&#xf06a', '&#xf06b', '&#xf06c', '&#xf06d', '&#xf06e', '&#xf070', '&#xf071', '&#xf072', '&#xf073', '&#xf074', '&#xf075', '&#xf076', '&#xf077', '&#xf078', '&#xf079', '&#xf07a', '&#xf07b', '&#xf07c', '&#xf07d', '&#xf07e', '&#xf080', '&#xf081', '&#xf082', '&#xf083', '&#xf084', '&#xf085', '&#xf086', '&#xf087', '&#xf088', '&#xf089', '&#xf08a', '&#xf08b', '&#xf08c', '&#xf08d', '&#xf08e', '&#xf090', '&#xf091', '&#xf092', '&#xf093', '&#xf094', '&#xf095', '&#xf096', '&#xf097', '&#xf098', '&#xf099', '&#xf09a', '&#xf09b', '&#xf09c', '&#xf09d', '&#xf09e', '&#xf0a0', '&#xf0a1', '&#xf0f3', '&#xf0a3', '&#xf0a4', '&#xf0a5', '&#xf0a6', '&#xf0a7', '&#xf0a8', '&#xf0a9', '&#xf0aa', '&#xf0ab', '&#xf0ac', '&#xf0ad', '&#xf0ae', '&#xf0b0', '&#xf0b1', '&#xf0b2', '&#xf0c0', '&#xf0c1', '&#xf0c2', '&#xf0c3', '&#xf0c4', '&#xf0c5', '&#xf0c6', '&#xf0c7', '&#xf0c8', '&#xf0c9', '&#xf0ca', '&#xf0cb', '&#xf0cc', '&#xf0cd', '&#xf0ce', '&#xf0d0', '&#xf0d1', '&#xf0d2', '&#xf0d3', '&#xf0d4', '&#xf0d5', '&#xf0d6', '&#xf0d7', '&#xf0d8', '&#xf0d9', '&#xf0da', '&#xf0db', '&#xf0dc', '&#xf0dd', '&#xf0de', '&#xf0e0', '&#xf0e1', '&#xf0e2', '&#xf0e3', '&#xf0e4', '&#xf0e5', '&#xf0e6', '&#xf0e7', '&#xf0e8', '&#xf0e9', '&#xf0ea', '&#xf0eb', '&#xf0ec', '&#xf0ed', '&#xf0ee', '&#xf0f0', '&#xf0f1', '&#xf0f2', '&#xf0a2', '&#xf0f4', '&#xf0f5', '&#xf0f6', '&#xf0f7', '&#xf0f8', '&#xf0f9', '&#xf0fa', '&#xf0fb', '&#xf0fc', '&#xf0fd', '&#xf0fe', '&#xf100', '&#xf101', '&#xf102', '&#xf103', '&#xf104', '&#xf105', '&#xf106', '&#xf107', '&#xf108', '&#xf109', '&#xf10a', '&#xf10b', '&#xf10c', '&#xf10d', '&#xf10e', '&#xf110', '&#xf111', '&#xf112', '&#xf113', '&#xf114', '&#xf115', '&#xf118', '&#xf119', '&#xf11a', '&#xf11b', '&#xf11c', '&#xf11d', '&#xf11e', '&#xf120', '&#xf121', '&#xf122', '&#xf123', '&#xf124', '&#xf125', '&#xf126', '&#xf127', '&#xf128', '&#xf129', '&#xf12a', '&#xf12b', '&#xf12c', '&#xf12d', '&#xf12e', '&#xf130', '&#xf131', '&#xf132', '&#xf133', '&#xf134', '&#xf135', '&#xf136', '&#xf137', '&#xf138', '&#xf139', '&#xf13a', '&#xf13b', '&#xf13c', '&#xf13d', '&#xf13e', '&#xf140', '&#xf141', '&#xf142', '&#xf143', '&#xf144', '&#xf145', '&#xf146', '&#xf147', '&#xf148', '&#xf149', '&#xf14a', '&#xf14b', '&#xf14c', '&#xf14d', '&#xf14e', '&#xf150', '&#xf151', '&#xf152', '&#xf153', '&#xf154', '&#xf155', '&#xf156', '&#xf157', '&#xf158', '&#xf159', '&#xf15a', '&#xf15b', '&#xf15c', '&#xf15d', '&#xf15e', '&#xf160', '&#xf161', '&#xf162', '&#xf163', '&#xf164', '&#xf165', '&#xf166', '&#xf167', '&#xf168', '&#xf169', '&#xf16a', '&#xf16b', '&#xf16c', '&#xf16d', '&#xf16e', '&#xf170', '&#xf171', '&#xf172', '&#xf173', '&#xf174', '&#xf175', '&#xf176', '&#xf177', '&#xf178', '&#xf179', '&#xf17a', '&#xf17b', '&#xf17c', '&#xf17d', '&#xf17e', '&#xf180', '&#xf181', '&#xf182', '&#xf183', '&#xf184', '&#xf185', '&#xf186', '&#xf187', '&#xf188', '&#xf189', '&#xf18a', '&#xf18b', '&#xf18c', '&#xf18d', '&#xf18e', '&#xf190', '&#xf191', '&#xf192', '&#xf193', '&#xf194', '&#xf195', '&#xf196', '&#xf197', '&#xf198', '&#xf199', '&#xf19a', '&#xf19b', '&#xf19c', '&#xf19d', '&#xf19e', '&#xf1a0', '&#xf1a1', '&#xf1a2', '&#xf1a3', '&#xf1a4', '&#xf1a5', '&#xf1a6', '&#xf1a7', '&#xf1a8', '&#xf1a9', '&#xf1aa', '&#xf1ab', '&#xf1ac', '&#xf1ad', '&#xf1ae', '&#xf1b0', '&#xf1b1', '&#xf1b2', '&#xf1b3', '&#xf1b4', '&#xf1b5', '&#xf1b6', '&#xf1b7', '&#xf1b8', '&#xf1b9', '&#xf1ba', '&#xf1bb', '&#xf1bc', '&#xf1bd', '&#xf1be', '&#xf1c0', '&#xf1c1', '&#xf1c2', '&#xf1c3', '&#xf1c4', '&#xf1c5', '&#xf1c6', '&#xf1c7', '&#xf1c8', '&#xf1c9', '&#xf1ca', '&#xf1cb', '&#xf1cc', '&#xf1cd', '&#xf1ce', '&#xf1d0', '&#xf1d1', '&#xf1d2', '&#xf1d3', '&#xf1d4', '&#xf1d5', '&#xf1d6', '&#xf1d7', '&#xf1d8', '&#xf1d9', '&#xf1da', '&#xf1db', '&#xf1dc', '&#xf1dd', '&#xf1de', '&#xf1e0', '&#xf1e1', '&#xf1e2', '&#xf1e3', '&#xf1e4', '&#xf1e5', '&#xf1e6', '&#xf1e7', '&#xf1e8', '&#xf1e9', '&#xf1ea', '&#xf1eb', '&#xf1ec', '&#xf1ed', '&#xf1ee', '&#xf1f0', '&#xf1f1', '&#xf1f2', '&#xf1f3', '&#xf1f4', '&#xf1f5', '&#xf1f6', '&#xf1f7', '&#xf1f8', '&#xf1f9', '&#xf1fa', '&#xf1fb', '&#xf1fc', '&#xf1fd', '&#xf1fe', '&#xf200', '&#xf201', '&#xf202', '&#xf203', '&#xf204', '&#xf205', '&#xf206', '&#xf207', '&#xf208', '&#xf209', '&#xf20a', '&#xf20b', '&#xf20c', '&#xf20d', '&#xf20e', '&#xf210', '&#xf211', '&#xf212', '&#xf213', '&#xf214', '&#xf215', '&#xf216', '&#xf217', '&#xf218', '&#xf219', '&#xf21a', '&#xf21b', '&#xf21c', '&#xf21d', '&#xf21e', '&#xf221', '&#xf222', '&#xf223', '&#xf224', '&#xf225', '&#xf226', '&#xf227', '&#xf228', '&#xf229', '&#xf22a', '&#xf22b', '&#xf22c', '&#xf22d', '&#xf230', '&#xf231', '&#xf232', '&#xf233', '&#xf234', '&#xf235', '&#xf236', '&#xf237', '&#xf238', '&#xf239', '&#xf23a', '&#xf23b', '&#xf23c', '&#xf23d', '&#xf23e', '&#xf240', '&#xf241', '&#xf242', '&#xf243', '&#xf244', '&#xf245', '&#xf246', '&#xf247', '&#xf248', '&#xf249', '&#xf24a', '&#xf24b', '&#xf24c', '&#xf24d', '&#xf24e', '&#xf250', '&#xf251', '&#xf252', '&#xf253', '&#xf254', '&#xf255', '&#xf256', '&#xf257', '&#xf258', '&#xf259', '&#xf25a', '&#xf25b', '&#xf25c', '&#xf25d', '&#xf25e', '&#xf260', '&#xf261', '&#xf262', '&#xf263', '&#xf264', '&#xf265', '&#xf266', '&#xf267', '&#xf268', '&#xf269', '&#xf26a', '&#xf26b', '&#xf26c', '&#xf26d', '&#xf26e', '&#xf270', '&#xf271', '&#xf272', '&#xf273', '&#xf274', '&#xf275', '&#xf276', '&#xf277', '&#xf278', '&#xf279', '&#xf27a', '&#xf27b', '&#xf27c', '&#xf27d', '&#xf27e', '&#xf280', '&#xf281', '&#xf282', '&#xf283', '&#xf284', '&#xf285', '&#xf286', '&#xf287', '&#xf288', '&#xf289', '&#xf28a', '&#xf28b', '&#xf28c', '&#xf28d', '&#xf28e', '&#xf290', '&#xf291', '&#xf292', '&#xf293', '&#xf294', '&#xf295', '&#xf296', '&#xf297', '&#xf298', '&#xf299', '&#xf29a', '&#xf29b', '&#xf29c', '&#xf29d', '&#xf29e', '&#xf2a0', '&#xf2a1', '&#xf2a2', '&#xf2a3', '&#xf2a4', '&#xf2a5', '&#xf2a6', '&#xf2a7', '&#xf2a8', '&#xf2a9', '&#xf2aa', '&#xf2ab', '&#xf2ac', '&#xf2ad', '&#xf2ae', '&#xf2b0', '&#xf2b1', '&#xf2b2', '&#xf2b3', '&#xf2b4', '&#xf2b5', '&#xf2b6', '&#xf2b7', '&#xf2b8', '&#xf2b9', '&#xf2ba', '&#xf2bb', '&#xf2bc', '&#xf2bd', '&#xf2be', '&#xf2c0', '&#xf2c1', '&#xf2c2', '&#xf2c3', '&#xf2c4', '&#xf2c5', '&#xf2c6', '&#xf2c7', '&#xf2c8', '&#xf2c9', '&#xf2ca', '&#xf2cb', '&#xf2cc', '&#xf2cd', '&#xf2ce', '&#xf2d0', '&#xf2d1', '&#xf2d2', '&#xf2d3', '&#xf2d4', '&#xf2d5', '&#xf2d6', '&#xf2d7', '&#xf2d8', '&#xf2d9', '&#xf2da', '&#xf2db', '&#xf2dc', '&#xf2dd', '&#xf2de', '&#xf2e0'        ]
    };

    // Add all fontawesome in a dropdown
    $.extend(true, $.trumbowyg, {
        langs: {
            // jshint camelcase:false
            en: {
                fontawesome: 'Add an fontawesome'
            },
            az: {
                fontawesome: 'fontawesome yerləşdir'
            },
            ca: {
                fontawesome: 'Afegir una emoticona'
            },
            da: {
                fontawesome: 'Tilføj et humørikon'
            },
            de: {
                fontawesome: 'Emoticon einfügen'
            },
            es: {
                fontawesome: 'Añadir un emoticono'
            },
            et: {
                fontawesome: 'Lisa emotikon'
            },
            fr: {
                fontawesome: 'Ajouter un fontawesome'
            },
            hu: {
                fontawesome: 'fontawesome beszúrás'
            },
            ja: {
                fontawesome: '絵文字の挿入'
            },
            ko: {
                fontawesome: '이모지 넣기'
            },
            ru: {
                fontawesome: 'Вставить fontawesome'
            },
            sl: {
                fontawesome: 'Vstavi emotikon'
            },
            tr: {
                fontawesome: 'fontawesome ekle'
            },
            zh_cn: {
                fontawesome: '添加表情'
            },
        },
        // jshint camelcase:true
        plugins: {
            fontawesome: {
                init: function (trumbowyg) {
                    trumbowyg.o.plugins.fontawesome = trumbowyg.o.plugins.fontawesome || defaultOptions;
                    var fontawesomeBtnDef = {
                        dropdown: buildDropdown(trumbowyg)
                    };
                    trumbowyg.addBtnDef('fontawesome', fontawesomeBtnDef);
                }
            }
        }
    });

    function buildDropdown(trumbowyg) {
        var dropdown = [];

        $.each(trumbowyg.o.plugins.fontawesome.fontawesomeList, function (i, fontawesome) {
            if ($.isArray(fontawesome)) { // Custom fontawesome behaviour
                var fontawesomeCode = fontawesome[0],
                    fontawesomeUrl = fontawesome[1],
                    fontawesomeHtml = '<img src="' + fontawesomeUrl + '" alt="' + fontawesomeCode + '">',
                    customfontawesomeBtnName = 'fontawesome-' + fontawesomeCode.replace(/:/g, ''),
                    customfontawesomeBtnDef = {
                        hasIcon: false,
                        text: fontawesomeHtml,
                        fn: function () {
                            trumbowyg.execCmd('insertImage', fontawesomeUrl, false, true);
                            return true;
                        }
                    };

                trumbowyg.addBtnDef(customfontawesomeBtnName, customfontawesomeBtnDef);
                dropdown.push(customfontawesomeBtnName);
            } else { // Default behaviour
                var btn = fontawesome.replace(/:/g, ''),
                    defaultfontawesomeBtnName = 'fontawesome-' + btn,
                    defaultfontawesomeBtnDef = {
                        text: fontawesome,
                        fn: function () {
                            var encodedfontawesome = String.fromCodePoint(fontawesome.replace('', ''));
                            trumbowyg.execCmd('insertText', encodedfontawesome);
                            return true;
                        }
                    };

                trumbowyg.addBtnDef(defaultfontawesomeBtnName, defaultfontawesomeBtnDef);
                dropdown.push(defaultfontawesomeBtnName);
            }

        });

        return dropdown;
    }
})(jQuery);
