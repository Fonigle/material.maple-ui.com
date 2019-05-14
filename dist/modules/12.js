(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{32:function(s,a,t){"use strict";t.r(a);var e=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("article",[t("h1",[s._v("起步")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("安装")]),s._v(" "),t("h3",[s._v("npm 安装")]),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),t("h2",[s._v("Typescript 支持")]),s._v(" "),t("p",[s._v("我们已经添加了 typescript 类型声明文件，因此无需编写任何的声明语句或添加额外依赖即可在基于 typescript 的项目中使用它。")]),s._v(" "),t("h2",[s._v("起步")]),s._v(" "),s._m(6),s._v(" "),s._m(7),s._v(" "),s._m(8),s._v(" "),s._m(9),s._v(" "),t("p",[s._v("效果如下：\n"),t("start-example")],1)])};e._withStripped=!0;var l=t(3),n=Object(l.a)({},e,[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[t("code",{staticClass:"code-inline"},[s._v("maple-material-vue")]),s._v(" 是一个基于 Material Design "),t("a",{attrs:{href:"https://www.material.io/develop/web/"}},[s._v("官方组件库")]),s._v("封装的 "),t("code",{staticClass:"code-inline"},[s._v("Vue")]),s._v(" 组件库。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[t("code",{staticClass:"code-inline"},[s._v("maple-material-vue")]),s._v("已经发布到 npm，我们可以使用 npm 来安装它。"),t("br"),s._v("\n这也是我们推荐的使用方式。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{attrs:{lang:"bash"}},[t("code",{staticClass:"hljs bash"},[s._v("npm i --save maple-material-vue\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h3",[s._v("使用"),t("code",{staticClass:"code-inline"},[s._v("<script>")]),s._v("引入")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("直接下载并使用"),t("code",{staticClass:"code-inline"},[s._v("<script>")]),s._v("标签引入位于项目 dist 文件夹下的"),t("code",{staticClass:"code-inline"},[s._v("maple-material-vue.js")]),s._v("，"),t("code",{staticClass:"code-inline"},[s._v("MapleMaterilVue")]),s._v(" 会被注册为一个全局变量。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("不要忘记你也需要引入同一文件夹下的样式表文件 "),t("code",{staticClass:"code-inline"},[s._v("maple-material-vue.css")]),s._v("。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[t("code",{staticClass:"code-inline"},[s._v("maple-material-vue")]),s._v("是一个 Vue 插件，我们只需要在引入 Vue 后安装它：")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{attrs:{lang:"javascript"}},[t("code",{staticClass:"hljs javascript"},[t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Vue "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vue'")]),s._v(";\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" MapleMaterialVue "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'maple-material-vue'")]),s._v(";\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'maple-material-vue/dist/maple-material-vue.css'")]),s._v(";  "),t("span",{staticClass:"hljs-comment"},[s._v("// 别忘了样式表")]),s._v("\n\nVue.use(MapleMaterialVue);\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("而后，就可以使用这些组件了。\n以使用"),t("code",{staticClass:"code-inline"},[s._v("<mdc-button>")]),s._v("为例")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{attrs:{lang:"HTML"}},[t("code",{staticClass:"hljs HTML"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"example"')]),s._v(">")]),s._v("\n        "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("mdc-button")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"raised"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"handleBtnClick"')]),s._v(">")]),s._v("CLICK!"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("mdc-button")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(":{\n            handleBtnClick(){\n                alert("),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(");\n            }\n        }\n    }\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])}],!1,null,null,null);n.options.__file="src/views/articles/start.md";a.default=n.exports}}]);