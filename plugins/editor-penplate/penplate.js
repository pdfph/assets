! function(a) {
    var b = function() {
        var b, c, d, e, f = this,
            g = a(window).width(),
            h = "",
            j = {
                b: "text-bold",
                i: "text-italic",
                u: "text-underline",
                sub: "text-subscript",
                sup: "text-superscript",
                strike: "text-strikethrough",
                blockquote: "format-blockquote",
                a: "custom-link"
            },
            k = [],
            l = !1;
        f.settings = {
            breakpoint: "700",
            heading_1_tag: "h1",
            heading_2_tag: "h2",
            heading_3_tag: "h3",
            heading_4_tag: "h4",
            heading_5_tag: "h5",
            heading_6_tag: "h6",
            controls: ["bold", "italics", "underline", "strikethrough", "subscript", "superscript", "heading_1", "heading_2", "heading_3", "heading_4", "heading_5", "heading_6"]
        }, f.init = function(c, d) {
            f.settings = a.extend(f.settings, d), b = c, $this_penplate_content = jQuery.trim(b.html()), $check_webplate = a(".webplate:first"), $check_webplate && $check_webplate.length > 0 && (l = !0), f.add_controls(), b.find("p:first").length < 1 && b.html($this_penplate_content), b.attr({
                contenteditable: "true"
            }), document.execCommand("defaultParagraphSeparator", !1, "p"), j[f.settings.heading_1_tag] = "format-" + f.settings.heading_1_tag, j[f.settings.heading_2_tag] = "format-" + f.settings.heading_2_tag, j[f.settings.heading_3_tag] = "format-" + f.settings.heading_3_tag, j[f.settings.heading_4_tag] = "format-" + f.settings.heading_4_tag, j[f.settings.heading_5_tag] = "format-" + f.settings.heading_5_tag, j[f.settings.heading_6_tag] = "format-" + f.settings.heading_6_tag, f.window_type(), a(window).resize(function() {
                f.window_type()
            }), f.new_paragraph(), f.window_resize(), f.activate_controls(b), f.link_control()
        }, f.add_controls = function() {
            d = {
                bold: '<li><a href="#" class="textbtn noscript" data-pen-edit="text-bold"><i class="bi-type-bold"></i></a></li>',
                italics: '<li><a href="#" class="textbtn noscript" data-pen-edit="text-italic"><i class="bi-type-italic"></i></a></li>',
                underline: '<li><a href="#" class="textbtn noscript" data-pen-edit="text-underline"><i class="bi-type-underline"></i></a></li>',
                strikethrough: '<li><a href="#" class="textbtn noscript" data-pen-edit="text-strikethrough"><i class="bi-type-strikethrough"></i></a></li>',
                subscript: '<li><a href="#" class="textbtn script" data-pen-edit="text-subscript"><i class="bi-subscript"></i></a></li>',
                superscript: '<li><a href="#" class="textbtn script" data-pen-edit="text-superscript"><i class="bi-superscript"></i></a></li>',
                heading_1: '<li><a href="#" class="headerbtn" data-pen-edit="format-' + f.settings.heading_1_tag + '">H1</a></li>',
                heading_2: '<li><a href="#" class="headerbtn" data-pen-edit="format-' + f.settings.heading_2_tag + '">H2</a></li>',
                heading_3: '<li><a href="#" class="headerbtn" data-pen-edit="format-' + f.settings.heading_3_tag + '">H3</a></li>',
                heading_4: '<li><a href="#" class="headerbtn" data-pen-edit="format-' + f.settings.heading_4_tag + '">H4</a></li>',
                heading_5: '<li><a href="#" class="headerbtn" data-pen-edit="format-' + f.settings.heading_5_tag + '">H5</a></li>',
                heading_6: '<li><a href="#" class="headerbtn" data-pen-edit="format-' + f.settings.heading_6_tag + '">H6</a></li>',

//                quote: '<li><a href="#" data-pen-edit="format-blockquote" class="img-quote">Quote</a></li>',
//                link: '<li><a href="#" data-pen-edit="custom-link" class="img-link">Link</a></li>',
//                image: '<li><a href="#" data-pen-edit="custom-image" class="img-image">Image</a></li>'
            }, h += '<div class="penplate-controls">', h += '<div class="penplate-link">', h += '<div class="input-container"><input type="text" value="" placeholder="Your link..." /></div>', h += '<a href="#" data-pen-edit="custom-link-cancel" class="link-cancel">Cancel</a>', h += "</div>", h += "<ul>", a.each(f.settings.controls, function(a, b) {
                h += d[b]
            }), h += "</ul></div>", 0 == a(".penplate-controls:first").length && (a("body").append(h), 0 == l ? a("body").append(h) : a(".webplate .webplate-content").append(h), a(".penplate-controls:last").addClass("penplate-small"), a(".penplate-controls:first").addClass("penplate-large"), f.edit_selection())
        }, f.window_type = function() {
            a(window).width() <= f.settings.breakpoint ? (a("html").addClass("penplate-small-view"), a("html").removeClass("penplate-large-view"), c = "small-view", f.reset_position()) : (a("html").removeClass("penplate-small-view"), a("html").addClass("penplate-large-view"), c = "large-view"), g = a(window).width()
        }, f.reset_position = function() {
            a(".penplate-controls.penplate-large").css({
                top: "-100px",
                left: "0"
            })
        }, f.activate_controls = function(b) {
            b.on("mouseup", function() {
                f.check_selection()
            }), b.on("keyup", function() {
                f.check_selection()
            }), a("html").on("click", function(b) {
                var c = a(b.target),
                    d = c.parents(".penplate-controls").length;
                0 == d && f.hide_controls(), a(window).resize(function() {
                    f.hide_controls()
                })
            })
        }, f.restore_selection = function(a) {
            if (a)
                for ($selection.removeAllRanges(), i = 0, len = a.length; len > i; i += 1) $selection.addRange(a[i])
        }, f.check_selection = function() {

					var selection = window.getSelection();
					var this_node = selection.anchorNode.parentNode.tagName;
						if(this_node=='P' || this_node=='SPAN'){
							a(".penplate-controls").find('.textbtn').show();
							a(".penplate-controls").find('.headerbtn').hide();
						}
						if(this_node.indexOf("H") !== -1){
							a(".penplate-controls").find('.headerbtn').show();
							a(".penplate-controls").find('.textbtn').hide();
						}
//        	console.log(this_node)
            for ($selection = window.getSelection(), $range = $selection.getRangeAt(0), $range_start = $range.startOffset, $range_end = $range.endOffset, $is_range = !1, $parent_node = null, k = [], $parent_node = f.get_parent_node($range); void 0 != $parent_node.tagName && ($tag_name = $parent_node.tagName.toLowerCase(), k.push($tag_name), "p" != $tag_name) && (a('.penplate-controls [data-pen-edit="' + j[$tag_name] + '"]').addClass("active"), $parent_node = $parent_node.parentNode, "h" != $tag_name.substring(0, 1)););
            f.save_selection(), $range_end - $range_start != 0 && ($is_range = !0), 1 == $is_range && f.show_controls()
        }, f.save_selection = function() {
            if ($selection) {
                if ($selection = window.getSelection(), $selection.getRangeAt && $selection.rangeCount) {
                    for (var a = [], b = 0, c = $selection.rangeCount; c > b; ++b) a.push($selection.getRangeAt(b));
                    e = a
                }
            } else document.selection && document.selection.createRange && (e = document.selection.createRange())
        }, f.range_check = function(a) {
            var b = a.startContainer;
            return b === a.endContainer && b.hasChildNodes() && a.endOffset === a.startOffset + 1
        }, f.show_controls = function() {
            f.set_control_position(), 0 == a("html").hasClass("show-penplate-controls") && a("html").addClass("show-penplate-controls"), a(".penplate-controls").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                1 == a("html").hasClass("show-penplate-controls") && a("html").addClass("penplate-controls-open")
            })
        }, f.hide_controls = function() {
            a("html").hasClass("show-penplate-controls") && a("html").hasClass("penplate-controls-open") && (a("html").removeClass("show-penplate-controls").removeClass("penplate-controls-open"), a(".penplate-controls a.active").removeClass("active"), f.link_input_hide(), a(".penplate-controls.penplate-large").css({
                top: "-100px"
            }))
        }, f.set_control_position = function() {
            "large-view" == c && ($control_w = a(".penplate-controls.penplate-large").outerWidth(), $control_h = a(".penplate-controls.penplate-large").height(), $selection = window.getSelection(), $range = $selection.getRangeAt(0), $boundary = $range.getBoundingClientRect(), $boundary_center = ($boundary.left + $boundary.right) / 2, $offset_left = $boundary_center - $control_w / 2, $offset_top = 0 == l ? $boundary.top + window.pageYOffset - ($control_h + 12) : $boundary.top + a(".webplate .webplate-content").scrollTop() - ($control_h + 12), 0 > $offset_left ? $offset_left = 0 : $offset_left + $control_w > g && ($offset_left = g - $control_w), a(".penplate-controls.penplate-large").css({
                left: $offset_left,
                top: $offset_top
            }))
        }, f.edit_selection = function() {
            a(".penplate-controls a").on("click", function(b) {
								if($(this).hasClass('headerbtn')){
            			a(".penplate-controls a").removeClass("active");
            		}

								if($(this).hasClass('noscript')){
            			a(".penplate-controls a.script.active").trigger('click');
            			a(".penplate-controls a.script").removeClass("active");
            		}
								if($(this).hasClass('script')){
            			a(".penplate-controls a.script").removeClass("active");
            			a(".penplate-controls a.noscript.active").trigger('click');
            		}

//let strippedString = originalString.replace(/(<([^>]+)>)/gi, "");
                b.preventDefault(), $this = a(this), $pen_edit = $this.data("pen-edit"), $ex_pen_edit = $pen_edit.split("-"), $pen_edit_type = $ex_pen_edit[0], $pen_edit_action = $ex_pen_edit[1], 1 == $this.hasClass("active") ? $this.removeClass("active") : $this.addClass("active"), "text" == $pen_edit_type ? document.execCommand($pen_edit_action) : "format" == $pen_edit_type && ($parent_tag_type = f.get_parent_tag_type(), $parent_tag_type != $pen_edit_action ? ($super_parent = window.getSelection().anchorNode.parentElement.parentElement.nodeName.toLowerCase(), "blockquote" == $pen_edit_action ? (document.execCommand("outdent", !1, null), "blockquote" != $super_parent && document.execCommand("formatBlock", !1, $pen_edit_action)) : document.execCommand("formatBlock", !1, $pen_edit_action)) : document.execCommand("formatBlock", !1, "p")), f.save_selection(), setTimeout(function() {
                    f.set_control_position()
                }, 1)
            }), a(".penplate-controls .penplate-link input").on("keyup", function(b) {
                13 === b.keyCode && (b.preventDefault(), $link_input_val = a(this).val(), f.restore_selection(e), document.execCommand("createLink", !1, $link_input_val), $parent = a(this).parents(".penplate-controls"), $parent_type = 1 == $parent.hasClass("penplate-large") ? "penplate-large" : "penplate-small", f.link_input_hide($parent_type), a(".penplate-controls." + $parent_type + " a.img-link").addClass("active"), a(this).val(""))
            })
        }, f.get_parent_node = function(a) {
            return $check_range = f.range_check(a), $parent_node = $check_range ? a.startContainer.childNodes[a.startOffset] : 3 === a.startContainer.nodeType ? a.startContainer.parentNode : a.startContainer
        }, f.get_parent_tag_type = function() {
            return $crt_selection = window.getSelection(), $crt_selection.anchorNode.parentElement.nodeName.toLowerCase()
        }, f.new_paragraph = function() {
            b.on("keypress", function(a) {
                "13" == a.keyCode && setTimeout(function() {
                    document.execCommand("formatBlock", !1, "p")
                }, 10)
            })
        }, f.window_resize = function() {
            a(window).on("resize", function() {
                f.window_type()
            })
        }, f.link_control = function() {
            a(".penplate-controls a.img-link").on("click", function() {
                $is_link = !1, $parent = a(this).parents(".penplate-controls"), $parent_type = 1 == $parent.hasClass("penplate-large") ? "penplate-large" : "penplate-small", a.each(k, function(a, b) {
                    "a" == b && ($is_link = !0)
                }), 1 == $is_link ? (document.execCommand("unlink", !1, null), f.remove_current_node("a"), f.save_selection()) : f.link_input_show($parent_type)
            }), a(".penplate-controls .link-cancel").on("click", function(b) {
                b.preventDefault(), $parent = a(this).parents(".penplate-controls"), $parent_type = 1 == $parent.hasClass("penplate-large") ? "penplate-large" : "penplate-small", f.link_input_hide($parent_type), f.restore_selection(e)
            })
        }, f.remove_current_node = function(a) {
            $node_index = k.indexOf(a), $node_index > -1 && k.splice($node_index, 1)
        }, f.link_input_show = function(b) {
            console.log(b), a(".penplate-controls." + b + " ul").hide(), a(".penplate-controls." + b + " .penplate-link").fadeIn("fast", function() {
                a(".penplate-controls." + b + " .penplate-link input").focus()
            })
        }, f.link_input_hide = function(b) {
            a(".penplate-controls." + b + " ul").fadeIn(), a(".penplate-controls." + b + " .penplate-link").hide(), a(".penplate-controls." + b + " a.img-link").removeClass("active")
        }
    };
    a.fn.penplate = function(c) {
        var d = this.length;
        return this.each(function(e) {
            var f = a(this),
                g = "penplate" + (d > 1 ? "-" + ++e : ""),
                h = (new b).init(f, c);
            f.data(g, h).data("key", g)
        })
    }
}(jQuery);