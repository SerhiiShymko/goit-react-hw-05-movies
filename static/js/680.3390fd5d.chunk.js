"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[680],{854:function(n,t,e){var r=e(691),c=e(184);t.Z=function(){return(0,c.jsx)(r.C,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper",ballColors:["#ff0000","#00ff00","#0000ff"],backgroundColor:"#F4442E"})}},680:function(n,t,e){e.r(t);var r=e(439),c=e(241),a=e(854),u=e(791),o=e(87),i=e(184);t.default=function(){var n=(0,u.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1],f=(0,u.useState)(!1),p=(0,r.Z)(f,2),l=p[0],h=p[1];return(0,u.useEffect)((function(){h(!0),(0,c.Hg)().then((function(n){s(n.results),h(!1)}))}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"Trending today"}),(0,i.jsxs)("div",{children:[e.map((function(n){return(0,i.jsx)("li",{children:(0,i.jsx)(o.rU,{to:"/movies/".concat(n.id),children:n.original_title||n.name})},n.id)})),l&&(0,i.jsx)(a.Z,{})]})]})}},241:function(n,t,e){e.d(t,{Hg:function(){return l},M1:function(){return y},TP:function(){return v},tx:function(){return k},z1:function(){return d}});var r=e(861),c=e(757),a=e.n(c),u=e(243),o="f492f391e784a6c6bab08c174c3d150f",i="https://api.themoviedb.org/3",s="".concat(i,"/trending/all/day"),f="".concat(i,"/search/movie"),p="".concat(i,"/movie");function l(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s,"?api_key=").concat(o,"&language=en-US"),n.next=3,u.Z.get(t).then((function(n){return n.data})).catch((function(n){return console.log(n)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(f,"?api_key=").concat(o,"&include_adult=false&query=").concat(t,"&language=en-US&page=1"),n.next=3,u.Z.get(e).then((function(n){return n.data})).catch((function(n){return console.log(n)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(p,"/").concat(t,"?api_key=").concat(o,"&language=en-US"),n.next=3,u.Z.get(e).then((function(n){return n.data})).catch((function(n){return console.log(n)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(p,"/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"),n.next=3,u.Z.get(e).then((function(n){return n.data})).catch((function(n){return console.log(n)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function k(n){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(p,"/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US"),n.next=3,u.Z.get(e).then((function(n){return n.data})).catch((function(n){return console.log(n)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=680.3390fd5d.chunk.js.map