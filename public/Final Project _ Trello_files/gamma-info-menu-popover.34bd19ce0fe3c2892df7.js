webpackJsonp([21],{"./app/gamma/src/components/popovers/header-info-menu/header-info-menu.less":function(e,t,o){var n=o('./node_modules/css-loader/index.js?{"minimize":true,"modules":true,"importLoaders":2,"localIdentName":"[hash:base64:14]","sourceMap":false}!./node_modules/postcss-loader/lib/index.js?{"config":{"path":"/buildeng/bamboo-agent-home/xml-data/build-dir/TRE-WEB-BWP/.build/prod/build-3202/tools/webpack/postcss.config.js"},"sourceMap":true}!./node_modules/less-loader/dist/cjs.js?{"outputStyle":"expanded","sourceMap":false}!./app/gamma/src/components/popovers/header-info-menu/header-info-menu.less');"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0};o("./node_modules/style-loader/lib/addStyles.js")(n,r);n.locals&&(e.exports=n.locals)},"./app/gamma/src/components/popovers/header-info-menu/index.tsx":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("./node_modules/classnames/index.js"),r=o.n(n),a=o("./app/common/data/tips.ts"),s=o("./app/gamma/src/components/popover/index.tsx"),i=o("./app/gamma/src/components/popovers/popover-ids.ts"),l=o("./app/gamma/src/components/shared/button.less"),c=o.n(l),p=o("./app/common/components/singlespa/router-link.tsx"),u=o("./node_modules/react/index.js"),d=o.n(u),m=o("./app/common/lib/util/i18n/index.ts"),f=o("./node_modules/@trello/analytics/index.ts"),b=o("./app/gamma/src/debug/analytics.ts"),g=o("./app/gamma/src/components/popovers/header-info-menu/header-info-menu.less"),h=o.n(g),y=o("./app/gamma/src/components/popovers/header-info-menu/tip-carousel.tsx");function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var w=Object(m.forNamespace)("view title"),O=Object(m.forNamespace)("social"),I=Object(m.forTemplate)("header_info_menu"),T=function(e){var t=e.href,o=e.message;return d.a.createElement("li",{className:h.a.listItem},d.a.createElement(p.a,{className:h.a.link,href:t,target:"_blank"},o))},N=function(e){function t(){var e,o,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return n=this,r=(e=v(t)).call.apply(e,[this].concat(s)),E(k(o=!r||"object"!==x(r)&&"function"!=typeof r?k(n):r),"state",{expanded:!1}),E(k(o),"onClickMoreLink",function(e){b.b.trackUE({category:f.Noun.HEADER,verb:f.Verb.SHOWS_MORE,directObj:f.Noun.INFO_MENU,context:{action:"Show more links"}}),e.preventDefault(),o.setState({expanded:!0})}),o}var o,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,d.a.Component),o=t,(n=[{key:"render",value:function(){return this.state.expanded?this.props.children:d.a.createElement("li",{key:"more",className:h.a.listItem},d.a.createElement("button",{className:r()(h.a.moreLink,h.a.link,c.a.buttonLink),onClick:this.onClickMoreLink},I("more")))}}])&&_(o.prototype,n),a&&_(o,a),t}();t.default=function(e){var t=e.target;return d.a.createElement(s.a,{name:i.d,offsetTop:38,target:t,title:w("information"),width:360},function(){return d.a.createElement("div",{className:h.a.content},d.a.createElement(y.a,{tips:a.default}),d.a.createElement("hr",{className:h.a.lessHr}),d.a.createElement("ul",{className:h.a.linkList},d.a.createElement(T,{key:"pricing",href:"/pricing",message:I("pricing")}),d.a.createElement(T,{key:"platforms",href:"/platforms",message:I("apps")}),d.a.createElement(T,{key:"blog",href:O("blog"),message:I("blog")}),d.a.createElement(T,{key:"privacy",href:"/privacy",message:I("privacy")}),d.a.createElement(N,null,d.a.createElement(T,{key:"help",href:"http://help.trello.com",message:I("help")}),d.a.createElement(T,{key:"developers",href:"https://developers.trello.com",message:I("developers")}),d.a.createElement(T,{key:"legal",href:"/legal",message:I("legal")}))))})}},"./app/gamma/src/components/popovers/header-info-menu/tip-carousel.less":function(e,t,o){var n=o('./node_modules/css-loader/index.js?{"minimize":true,"modules":true,"importLoaders":2,"localIdentName":"[hash:base64:14]","sourceMap":false}!./node_modules/postcss-loader/lib/index.js?{"config":{"path":"/buildeng/bamboo-agent-home/xml-data/build-dir/TRE-WEB-BWP/.build/prod/build-3202/tools/webpack/postcss.config.js"},"sourceMap":true}!./node_modules/less-loader/dist/cjs.js?{"outputStyle":"expanded","sourceMap":false}!./app/gamma/src/components/popovers/header-info-menu/tip-carousel.less');"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0};o("./node_modules/style-loader/lib/addStyles.js")(n,r);n.locals&&(e.exports=n.locals)},"./app/gamma/src/components/popovers/header-info-menu/tip-carousel.tsx":function(e,t,o){"use strict";var n=o("./node_modules/classnames/index.js"),r=o.n(n),a=o("./app/gamma/src/components/shared/button.less"),s=o.n(a),i=o("./node_modules/react/index.js"),l=o.n(i),c=o("./app/gamma/src/components/popovers/header-info-menu/tip-carousel.less"),p=o.n(c),u=o("./node_modules/@trello/analytics/index.ts"),d=o("./app/common/lib/util/i18n/index.ts"),m=o("./app/gamma/src/debug/analytics.ts");function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=Object(d.forTemplate)("tips"),_=Object(d.forTemplate)("header_info_menu"),v=function(e){function t(e){var o,n,r,a,s,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=g(t).call(this,e),o=!r||"object"!==f(r)&&"function"!=typeof r?h(n):r,a=h(o),i=function(){m.b.trackUE({category:u.Noun.HEADER,verb:u.Verb.OPENS,directObj:u.Noun.HEADER_TIPS,context:{tipId:o.state.currentTip.id}})},(s="sendAnalytics")in a?Object.defineProperty(a,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[s]=i,o.state=o.getFreshTip(o.props.tips.slice()),o}var o,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,l.a.Component),o=t,(n=[{key:"getFreshTip",value:function(e){var t=e;t.length<1&&(t=this.props.tips.slice(0));var o=Math.floor(Math.random()*t.length),n=t[o];return t.splice(o,1),m.b.trackUE({category:u.Noun.HEADER,verb:u.Verb.VIEWS,directObj:u.Noun.HEADER_TIPS,context:{tipId:n.id}}),{currentTip:n,tipArray:t}}},{key:"render",value:function(){var e=this,t=this.state.currentTip,o=t.id,n=t.url,a=t.bgcolor,i=t.imgUrl1x,c=t.imgUrl2x;return l.a.createElement("div",null,l.a.createElement("a",{className:p.a.tip,href:n,target:"_blank",rel:"noopener noreferrer",onClick:this.sendAnalytics},l.a.createElement("div",{className:p.a.tipImage,style:{backgroundColor:a}},l.a.createElement("img",{key:o,src:i,srcSet:"".concat(i," 1x, ").concat(c," 2x"),alt:"",role:"presentation"})),l.a.createElement("h3",{className:p.a.tipText},x(o))),l.a.createElement("button",{className:r()(p.a.nextTipLink,s.a.buttonLink),onClick:function(){return e.setState(e.getFreshTip(e.state.tipArray))}},_("get-new-tip")))}}])&&b(o.prototype,n),a&&b(o,a),t}();t.a=v},'./node_modules/css-loader/index.js?{"minimize":true,"modules":true,"importLoaders":2,"localIdentName":"[hash:base64:14]","sourceMap":false}!./node_modules/postcss-loader/lib/index.js?{"config":{"path":"/buildeng/bamboo-agent-home/xml-data/build-dir/TRE-WEB-BWP/.build/prod/build-3202/tools/webpack/postcss.config.js"},"sourceMap":true}!./node_modules/less-loader/dist/cjs.js?{"outputStyle":"expanded","sourceMap":false}!./app/gamma/src/components/popovers/header-info-menu/header-info-menu.less':function(e,t,o){(t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".DJTfNhK2dw7AAq{padding:0 12px}._2Lgc-NtIkeRHRL{text-align:center}._3r0H8ewVFXgwb0{display:inline-block;vertical-align:top}._2bz9_RmdMItnj9{border-radius:3px;color:#6b778c;display:block;margin:0 1px 2px;padding:6px 8px;transition-property:background-color,border-color,box-shadow;transition-duration:85ms;transition-timing-function:ease}._2bz9_RmdMItnj9:hover{background-color:rgba(9,30,66,.13);color:#172b4d}._2bz9_RmdMItnj9:active{background-color:rgba(9,30,66,.25);color:#172b4d}._1oayIqt8fqkgQP._1oayIqt8fqkgQP{display:block;border-radius:3px;color:#6b778c;padding:6px 8px;text-decoration:underline;transition-property:background-color,border-color,box-shadow;transition-duration:85ms;transition-timing-function:ease}._1oayIqt8fqkgQP._1oayIqt8fqkgQP:hover{background-color:rgba(9,30,66,.13);color:#172b4d}._1oayIqt8fqkgQP._1oayIqt8fqkgQP:active{background-color:rgba(9,30,66,.25);color:#172b4d}._3sSyfmzVumo6vM{margin:8px 0}",""]),t.locals={content:"DJTfNhK2dw7AAq",linkList:"_2Lgc-NtIkeRHRL",listItem:"_3r0H8ewVFXgwb0",link:"_2bz9_RmdMItnj9",moreLink:"_1oayIqt8fqkgQP",lessHr:"_3sSyfmzVumo6vM"}},'./node_modules/css-loader/index.js?{"minimize":true,"modules":true,"importLoaders":2,"localIdentName":"[hash:base64:14]","sourceMap":false}!./node_modules/postcss-loader/lib/index.js?{"config":{"path":"/buildeng/bamboo-agent-home/xml-data/build-dir/TRE-WEB-BWP/.build/prod/build-3202/tools/webpack/postcss.config.js"},"sourceMap":true}!./node_modules/less-loader/dist/cjs.js?{"outputStyle":"expanded","sourceMap":false}!./app/gamma/src/components/popovers/header-info-menu/tip-carousel.less':function(e,t,o){(t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"._37CSXNJmlK0FUO{border-radius:3px;display:block;margin-bottom:2px;position:relative;text-align:center;text-decoration:none}._37CSXNJmlK0FUO:hover{background-color:#f4f5f7}._2Mx9i1gqI6_1mK{border-radius:3px;display:block;height:170px}._2Mx9i1gqI6_1mK img{border-radius:3px;display:block;width:100%;max-width:100%}._1IQCoLhttBT5Z6{margin:0;min-height:40px;padding:8px}._1TujIHx16d7sTW{border-radius:3px;color:#7a869a;display:block;text-align:center;padding:6px 8px;margin:0 auto;text-decoration:underline;width:100%;font-weight:400}._1TujIHx16d7sTW:hover{background-color:#f4f5f7;color:#091e42}",""]),t.locals={tip:"_37CSXNJmlK0FUO",tipImage:"_2Mx9i1gqI6_1mK",tipText:"_1IQCoLhttBT5Z6",nextTipLink:"_1TujIHx16d7sTW"}}});
//# sourceMappingURL=gamma-info-menu-popover.34bd19ce0fe3c2892df7.js.map