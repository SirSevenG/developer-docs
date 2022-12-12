(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{414:function(t,e,a){"use strict";a.r(e);var n=a(10),s=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"note-about-rational-number-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#note-about-rational-number-type"}},[t._v("#")]),t._v(" Note About Rational Number Type")]),t._v(" "),e("p",[t._v("The AtomicDEX API now offers the "),e("a",{attrs:{href:"https://crates.io/crates/num-rational",target:"_blank",rel:"noopener noreferrer"}},[t._v("num-rational crate"),e("OutboundLink")],1),t._v(" feature. This is used to represent order volumes and prices.")]),t._v(" "),e("p",[t._v("Komodo highly recommends that the developer use the rational number type when calculating an order's price and volume. This avoids rounding and precision errors when calculating numbers, such as "),e("code",[t._v("1/3")]),t._v(", as these cannot be represented as a finite decimal.")]),t._v(" "),e("p",[t._v("The AtomicDEX API typically will return both the rational number type as well as the decimal representation, but the decimal representation should be considered only a convenience feature for readability.")]),t._v(" "),e("p",[t._v("The number can be represented in the following two JSON formats:")]),t._v(" "),e("ol",[e("li",[t._v("As a fraction object that contains a numerator and a denominator as numeric strings, as follows:")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"numer"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10000"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"denom"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3000"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("As a unique format supplied by the "),e("code",[t._v("num-rational")]),t._v(" crate:")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("In the above unique format, the first item "),e("code",[t._v("[1,[0,1]]")]),t._v(" is the "),e("code",[t._v("numerator")]),t._v(" and the second item "),e("code",[t._v("[1,[1]]")]),t._v(" is the "),e("code",[t._v("denominator")]),t._v(".")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("numerator")]),t._v(" and "),e("code",[t._v("denominator")]),t._v(" are BigInteger numbers represented as a sign and a uint32 array (where numbers are 32-bit parts of big integer in little-endian order).")]),t._v(" "),e("p",[e("code",[t._v("[1,[0,1]]")]),t._v(" represents "),e("code",[t._v("+0000000000000000000000000000000010000000000000000000000000000000")]),t._v(" = "),e("code",[t._v("4294967296")])]),t._v(" "),e("p",[e("code",[t._v("[-1,[1,1]]")]),t._v(" represents "),e("code",[t._v("-1000000000000000000000000000000010000000000000000000000000000000")]),t._v(" = "),e("code",[t._v("-4294967297")])])])}),[],!1,null,null,null);e.default=s.exports}}]);