(window.webpackJsonp=window.webpackJsonp||[]).push([[4,6],{316:function(t,s,i){},318:function(t,s,i){"use strict";i(316)},339:function(t,s,i){},346:function(t,s,i){"use strict";i.r(s);i(31),i(32),i(9);var a=Symbol(),e=Symbol(),n=Symbol(),r={props:["src"],data:function(){return{status:a}},computed:{isDefault:function(){return this.status===a},isLoaded:function(){return this.status===e},isFailed:function(){return this.status===n}},methods:{imgLoaded:function(){this.status=e},imgFailed:function(){this.status=n}}},c=(i(318),i(26)),l=Object(c.a)(r,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"lazy-img"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isDefault,expression:"isDefault"}],staticClass:"card pending"},[i("div",[t._v("loading...")])]),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:t.isLoaded,expression:"isLoaded"}],staticClass:"img",attrs:{src:t.src},on:{load:t.imgLoaded,error:t.imgFailed,click:function(s){return t.$emit("click")}}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isFailed,expression:"isFailed"}],staticClass:"card failed"},[i("div",[t._v("image 404")])])])}),[],!1,null,"afca027e",null);s.default=l.exports},388:function(t,s,i){"use strict";i(339)},399:function(t,s,i){"use strict";i.r(s);var a={components:{LazyImg:i(346).default},data:function(){return{ads:[{url:"https://aaex.uk/cart.php?language=chinese",img:"https://api.crhnode.top/banner.png"},{url:"https://jike138.net/auth/register?code=LdON",img:"https://sy168.site/tupian/clash.jpg"},{url:"https://fastlink.ws/auth/register?code=clashw",img:"http://download.fastlink.ws/fastlink_banner.jpg"},{url:"http://cylink.wtf",img:"http://to.kache.moe/ad/clash_690_150.jpeg"}]}},methods:{handleAdClick:function(t){var s=t.url;s&&window.open(s)}}},e=(i(388),i(26)),n=Object(e.a)(a,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"list"},[t._l(t.ads,(function(s,a){return[i("lazy-img",{staticClass:"item",attrs:{src:s.img},on:{click:function(i){return t.handleAdClick(s)}}}),t._v(" "),a<t.ads.length-1?i("div",{staticClass:"saperator"}):t._e()]}))],2)}),[],!1,null,"f0553bf0",null);s.default=n.exports}}]);