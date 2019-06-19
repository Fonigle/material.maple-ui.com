(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{31:function(s,a,t){"use strict";t.r(a);var l=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("article",[s._m(0),s._v(" "),t("h2",[s._v("基础用法")]),s._v(" "),t("h3",[s._v("label / 标签")]),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),t("p",[t("mdc-switch",{attrs:{label:"prop"}}),s._v(" "),t("mdc-switch",[s._v("slot")])],1),s._v(" "),t("h3",[s._v("双向绑定")]),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),t("p",[t("switch-value-exmaple")],1),s._v(" "),t("h2",[s._v("id")]),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),t("p",[t("mdc-switch",{attrs:{id:"custom-id"}},[s._v("Test Id")])],1),s._v(" "),s._m(7),s._v(" "),t("h2",[s._v("禁用")]),s._v(" "),s._m(8),s._v(" "),s._m(9),s._v(" "),t("p",[t("mdc-switch",{attrs:{disabled:""}},[s._v("disabled")])],1)])};l._withStripped=!0;var _=t(3),c=Object(_.a)({},l,[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h1",[t("i",{staticClass:"icon-switch"}),s._v(" "),t("br"),s._v(" Swicth / 开关")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("可以通过两种方式设置"),t("code",{staticClass:"code-inline"},[s._v("checkbox")]),s._v("的 label。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{attrs:{lang:"HTML"}},[t("code",{staticClass:"hljs HTML"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("mdc-switch")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"prop"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("mdc-switch")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("mdc-switch")]),s._v(">")]),s._v("slot"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("mdc-switch")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("可以通过"),t("code",{staticClass:"code-inline"},[s._v("v-model")]),s._v("双向绑定"),t("code",{staticClass:"code-inline"},[s._v("switch")]),s._v("的值。"),t("br"),s._v("\n只能绑定"),t("code",{staticClass:"code-inline"},[s._v("boolean")]),s._v("类型的值。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{attrs:{lang:"HTML"}},[t("code",{staticClass:"hljs HTML"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"switch-value-exmaple"')]),s._v(">")]),s._v("\n        "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("mdc-switch")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"switchVal"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("mdc-switch")]),s._v(">")]),s._v("\n        "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"bind-value"')]),s._v(">")]),s._v("\n            绑定值："),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-html")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"switchVal"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("\n        "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n        data() {\n            "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n                "),t("span",{staticClass:"hljs-attr"},[s._v("switchVal")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n            }\n        }\n    }\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("如果需要对"),t("strong",[s._v("组件中原生"),t("code",{staticClass:"code-inline"},[s._v("input")]),s._v("元素")]),s._v("指定 id。可以在"),t("code",{staticClass:"code-inline"},[s._v("<mdc-switch>")]),s._v("上绑定 id 属性。"),t("br"),s._v("\n此属性会自动传递到内部"),t("code",{staticClass:"code-inline"},[s._v("input")]),s._v("元素上（"),t("code",{staticClass:"code-inline"},[s._v("<mdc-switch>")]),s._v("最外层元素上不会保留此"),t("code",{staticClass:"code-inline"},[s._v("id")]),s._v("），同时同步设置"),t("code",{staticClass:"code-inline"},[s._v("label")]),s._v("的"),t("code",{staticClass:"code-inline"},[s._v("for")]),s._v("属性。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{attrs:{lang:"HTML"}},[t("code",{staticClass:"hljs HTML"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("mdc-switch")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"custom-id"')]),s._v(">")]),s._v("Test Id"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("mdc-switch")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("你可以通过右键审查此元素查看"),t("code",{staticClass:"code-inline"},[s._v("id")]),s._v("的设置效果。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("通过设置"),t("code",{staticClass:"code-inline"},[s._v("disabled")]),s._v("属性来禁用"),t("code",{staticClass:"code-inline"},[s._v("<mdc-switch>")]),s._v("。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{attrs:{lang:"HTML"}},[t("code",{staticClass:"hljs HTML"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("mdc-switch")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("disabled")]),s._v(">")]),s._v("disabled"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("mdc-switch")]),s._v(">")]),s._v("\n")])])}],!1,null,null,null);c.options.__file="src/views/articles/switch.md";a.default=c.exports}}]);