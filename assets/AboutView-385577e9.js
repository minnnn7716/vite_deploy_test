import{_ as o,o as s,c as n,a as c,t as r,b as _}from"./index-24a8d5e8.js";const d={data(){return{data:{}}},mounted(){console.log("https://randomuser.me/api/"),console.log("這是產品佈署的環境變數");const e="https://randomuser.me/api/";this.$http.get(e).then(t=>{console.log(t.data),this.data=t.data.results[0]})}},i={class:"about"},l=_("h1",null,"This is an about page",-1);function u(e,t,p,h,a,m){return s(),n("div",i,[l,c(" "+r(a.data),1)])}const f=o(d,[["render",u]]);export{f as default};
