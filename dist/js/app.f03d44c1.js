(function(){"use strict";var t={9191:function(t,n,e){var r=e(9242),o=e(3396),i=e(7139);const s=["closed"];function a(t,n,e,r,a,c){const l=(0,o.up)("Block"),u=(0,o.up)("Results");return(0,o.wg)(),(0,o.iD)("div",{class:(0,i.C_)([{transition:a.isPlaying},"container"]),style:(0,i.j5)({background:a.background})},[(0,o._)("h1",{class:(0,i.C_)({transition:a.isPlaying}),style:(0,i.j5)({color:a.color})},"Reaction Timer",6),(0,o._)("a",{closed:a.isPlaying,href:"#",class:(0,i.C_)({transition:a.isPlaying}),onClick:n[0]||(n[0]=(...t)=>c.start&&c.start(...t)),style:(0,i.j5)({background:a.background,color:a.color,"border-color":a.color})},"play",14,s),a.isPlaying?((0,o.wg)(),(0,o.j4)(l,{key:0,delay:a.delay,onEnd:c.endGame},null,8,["delay","onEnd"])):(0,o.kq)("",!0),a.showResults?((0,o.wg)(),(0,o.j4)(u,{key:1,score:a.score},null,8,["score"])):(0,o.kq)("",!0)],6)}const c={ref:"parent",class:"container"},l={class:"animate__animated animate__pulse animate__infinite infinite info"};function u(t,n,e,i,s,a){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",c,[(0,o.wy)((0,o._)("div",{ref:"box",class:"block",onClick:n[0]||(n[0]=(...t)=>a.stopTimer&&a.stopTimer(...t))}," click me ",512),[[r.F8,s.showBlock]])],512),(0,o.wy)((0,o._)("p",l,"Can come at any time!",512),[[r.F8,!s.showBlock]])],64)}var f={props:["delay"],data(){return{showBlock:!1,timer:null,reactionTime:0}},emits:["end"],mounted(){this.placeGenerator(),setTimeout((()=>{this.showBlock=!0,this.startTimer()}),this.delay)},methods:{startTimer(){this.timer=setInterval((()=>{this.reactionTime+=10}),10)},stopTimer(){clearInterval(this.timer),this.$emit("end",this.reactionTime)},placeGenerator(){this.$refs.box.style.left=Math.random()*(this.$refs.parent.clientWidth-100)+"px",this.$refs.box.style.top=Math.random()*(this.$refs.parent.clientHeight-100)+"px"}}},h=e(89);const d=(0,h.Z)(f,[["render",u],["__scopeId","data-v-2672f17c"]]);var p=d;const m={class:"reactionTime"};function v(t,n,e,r,s,a){return(0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("p",null,"Reaction time : "+(0,i.zw)(e.score)+" ms",1),(0,o._)("p",null,(0,i.zw)(s.rank),1)])}var y={props:["score"],data(){return{rank:null}},mounted(){this.score<400?this.rank="You have very fast fingers!":this.score<500?this.rank="You have a rapid reflex":this.score<600?this.rank="Not bad at all":this.rank="Snail pace..."}};const k=(0,h.Z)(y,[["render",v]]);var g=k,b={name:"App",components:{Block:p,Results:g},data(){return{isPlaying:!1,delay:null,score:null,showResults:!1,background:"#fff",color:"#000"}},methods:{start(t){this.delay=2e3+5e3*Math.random(),this.isPlaying=!0,this.showResults=!1,this.background="red",this.color="#fff"},endGame(t){this.score=t,this.isPlaying=!1,this.showResults=!0,this.background="green",this.color="#fff"}}};const w=(0,h.Z)(b,[["render",a]]);var _=w;(0,r.ri)(_).mount("#app")}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,r,o,i){if(!r){var s=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],i=t[u][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(e.O).every((function(t){return e.O[t](r[c])}))?r.splice(c--,1):(a=!1,i<s&&(s=i));if(a){t.splice(u--,1);var l=o();void 0!==l&&(n=l)}}return n}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,o,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,i,s=r[0],a=r[1],c=r[2],l=0;if(s.some((function(n){return 0!==t[n]}))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(c)var u=c(e)}for(n&&n(r);l<s.length;l++)i=s[l],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(u)},r=self["webpackChunkreaction_timer"]=self["webpackChunkreaction_timer"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(9191)}));r=e.O(r)})();
//# sourceMappingURL=app.f03d44c1.js.map