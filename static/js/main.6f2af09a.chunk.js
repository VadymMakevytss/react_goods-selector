(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{19:function(e,t,c){e.exports=c(27)},25:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(11),o=c.n(s),r=c(16),l=c(13),i=c(14),d=c(17),u=c(15),m=(c(24),c(30)),f=c(29),G=(c(25),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),v=function(e){Object(d.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(l.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={selectedGoods:["Jam"]},e.clearText=function(){e.setState((function(e){return e.selectedGoods.splice(0)}))},e}return Object(i.a)(c,[{key:"setTitleList",value:function(){var e=this.state.selectedGoods;switch(e.length){case 0:return"NO GOODS SELECTED";case 1:return"".concat(e[0]," is selected");default:return"".concat(e.slice(0,-1).join(", ")," and\n          ").concat(e.slice(-1)," are selected")}}},{key:"isGodSelected",value:function(e){return this.state.selectedGoods.includes(e)}},{key:"addGood",value:function(e){this.setState((function(t){return{selectedGoods:[].concat(Object(r.a)(t.selectedGoods),[e])}}))}},{key:"removeGood",value:function(e){this.setState((function(t){return{selectedGoods:t.selectedGoods.filter((function(t){return t!==e}))}}))}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App list"},a.a.createElement("div",null,a.a.createElement("h1",{className:"list__title"},"Selected good:"," ",this.setTitleList()," ",a.a.createElement(m.a,{onClick:this.clearText},"X"))),a.a.createElement(f.a,{as:"ul",className:"list__group"},G.map((function(t){return a.a.createElement(f.a.Item,{key:t,active:e.isGodSelected(t),as:"li",className:"list__item"},t,a.a.createElement(m.a,{variant:e.isGodSelected(t)?"danger":"success",className:"list__selector",onClick:e.isGodSelected(t)?function(){return e.removeGood(t)}:function(){return e.addGood(t)}},e.isGodSelected(t)?"Remove":"Add"))}))))}}]),c}(n.Component);o.a.render(a.a.createElement(v,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.6f2af09a.chunk.js.map