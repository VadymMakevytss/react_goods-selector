(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{19:function(e,t,s){e.exports=s(27)},25:function(e,t,s){},27:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s.n(c),a=s(11),o=s.n(a),l=s(16),r=s(13),i=s(14),d=s(17),u=s(15),m=(s(24),s(30)),h=s(29),G=(s(25),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),f=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(r.a)(this,s);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={selectedGoods:["Jam"]},e.clearText=function(){e.setState({selectedGoods:[]})},e}return Object(i.a)(s,[{key:"setTitleList",value:function(){var e=this.state.selectedGoods;switch(e.length){case 0:return"NO GOODS SELECTED";case 1:return"".concat(e[0]," is selected");default:return"".concat(e.slice(0,-1).join(", ")," and\n          ").concat(e.slice(-1)," are selected")}}},{key:"isSelectedGoodsLength",value:function(){return!!this.state.selectedGoods.length}},{key:"isGodSelected",value:function(e){return this.state.selectedGoods.includes(e)}},{key:"addGood",value:function(e){this.setState((function(t){return{selectedGoods:[].concat(Object(l.a)(t.selectedGoods),[e])}}))}},{key:"removeGood",value:function(e){this.setState((function(t){return{selectedGoods:t.selectedGoods.filter((function(t){return t!==e}))}}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App list"},n.a.createElement("div",null,n.a.createElement("h1",{className:"list__title"},"Selected good:"," ",this.setTitleList()," ",this.isSelectedGoodsLength()&&n.a.createElement(m.a,{onClick:this.clearText},"X"))),n.a.createElement(h.a,{as:"ul",className:"list__group"},G.map((function(t){return n.a.createElement(h.a.Item,{key:t,active:e.isGodSelected(t),as:"li",className:"list__item"},t,n.a.createElement(m.a,{variant:e.isGodSelected(t)?"danger":"success",className:"list__selector",onClick:e.isGodSelected(t)?function(){return e.removeGood(t)}:function(){return e.addGood(t)}},e.isGodSelected(t)?"Remove":"Add"))}))))}}]),s}(c.Component);o.a.render(n.a.createElement(f,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.61f6a5ca.chunk.js.map