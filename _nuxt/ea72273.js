(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(t){t.exports=JSON.parse('{"about":{"pl":"o mnie","en":"about"},"skills":{"pl":"umiejętności","en":"skills"},"contact":{"pl":"kontakt","en":"contact"}}')},160:function(t,n,e){"use strict";e.r(n);var o=e(131),r={computed:{tab:{get:function(){return this.$store.state.tab},set:function(t){this.$store.commit("tab",t)}},language:function(){return this.$store.state.polish?"pl":"en"},about:function(){return o.about[this.language]},skills:function(){return o.skills[this.language]},contact:function(){return o.contact[this.language]}}},c=e(44),l=e(51),f=e.n(l),h=e(159),v=e(312),_=e(316),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-tabs",{staticClass:"white",attrs:{right:"","show-arrows":"mobile"},model:{value:t.tab,callback:function(n){t.tab=n},expression:"tab"}},[e("v-tab",[e("v-icon",{staticClass:"mr-2"},[t._v("mdi-information-outline")]),t._v(" "),e("span",{staticClass:"text-caption"},[t._v(t._s(t.about))])],1),t._v(" "),e("v-tab",[e("v-icon",{staticClass:"mr-2"},[t._v("mdi-hammer-screwdriver")]),t._v(" "),e("span",{staticClass:"text-caption"},[t._v(t._s(t.skills))])],1),t._v(" "),e("v-tab",[e("v-icon",{staticClass:"mr-2"},[t._v("mdi-email-outline")]),t._v(" "),e("span",{staticClass:"text-caption"},[t._v(t._s(t.contact))])],1)],1)}),[],!1,null,null,null);n.default=component.exports;f()(component,{VIcon:h.a,VTab:v.a,VTabs:_.a})},161:function(t,n,e){"use strict";e.r(n);var o={computed:{polish:{get:function(){return this.$store.state.polish},set:function(t){this.$store.commit("polish",t)}}}},r=e(44),c=e(51),l=e.n(c),f=e(313),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-col",{staticClass:"text-uppercase text-caption grey--text cursor-pointer",attrs:{cols:"auto"},on:{click:function(n){t.polish=!t.polish}}},[e("span",{class:{"black--text":!t.polish}},[t._v("en")]),t._v("/"),e("span",{class:{"black--text":t.polish}},[t._v("pl")])])}),[],!1,null,null,null);n.default=component.exports;l()(component,{VCol:f.a})},194:function(t,n,e){var content=e(248);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(14).default)("7388ab72",content,!0,{sourceMap:!1})},211:function(t,n,e){"use strict";var o=e(160),r=e(161),c={components:{AppBarTabs:o.default,SwitchLanguage:r.default}},l=e(44),f=e(51),h=e.n(f),v=e(311),_=e(317),d=e(314),m=e(315),x=e(208),component=Object(l.a)(c,(function(){var t=this.$createElement,n=this._self._c||t;return n("v-app",[n("v-app-bar",{staticClass:"white",attrs:{app:"","hide-on-scroll":""},scopedSlots:this._u([{key:"extension",fn:function(){return[n("app-bar-tabs")]},proxy:!0}])},[n("v-toolbar-title",{staticClass:"white text-overline grey--text text--darken-1"},[this._v("\n      Cezary Stroczyński\n    ")]),this._v(" "),n("v-spacer"),this._v(" "),n("switch-language")],1),this._v(" "),n("v-main",[n("nuxt",{staticClass:"blue-grey lighten-5"})],1)],1)}),[],!1,null,null,null);n.a=component.exports;h()(component,{SwitchLanguage:e(161).default,AppBarTabs:e(160).default}),h()(component,{VApp:v.a,VAppBar:_.a,VMain:d.a,VSpacer:m.a,VToolbarTitle:x.a})},219:function(t,n,e){e(220),t.exports=e(221)},247:function(t,n,e){"use strict";e(194)},248:function(t,n,e){(n=e(13)(!1)).push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=n},304:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return o})),e.d(n,"mutations",(function(){return r}));var o=function(){return{tab:0,polish:!1}},r={tab:function(t,n){t.tab=n},polish:function(t,n){t.polish=n}}},60:function(t,n,e){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(e(247),e(44)),c=e(51),l=e.n(c),f=e(311),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);n.a=component.exports;l()(component,{VApp:f.a})}},[[219,3,1,4]]]);