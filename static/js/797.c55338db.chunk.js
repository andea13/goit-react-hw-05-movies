"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[797],{4797:function(n,t,e){e.r(t);var r=e(3433),a=e(9439),c=e(2791),u=e(1087),s=e(9568),i=e(184),o=(0,c.lazy)((function(){return e.e(368).then(e.bind(e,6368))}));t.default=function(){var n=(0,u.lr)(),t=(0,a.Z)(n,2),e=t[0],f=t[1],p=(0,c.useState)(""),l=(0,a.Z)(p,2),h=l[0],d=l[1],v=(0,c.useState)([]),x=(0,a.Z)(v,2),m=x[0],g=x[1],Z=(0,c.useState)(1),w=(0,a.Z)(Z,2),y=w[0],b=w[1],k=(0,c.useState)(!1),_=(0,a.Z)(k,2),j=_[0],S=_[1],L=(0,c.useState)(null),C=(0,a.Z)(L,2),E=C[0],F=C[1];(0,c.useEffect)((function(){F(null),h||g([]),h&&(f({input:h}),S(!0),(0,s.LI)(h,y).then((function(n){var t=n.results;g((function(n){return[].concat((0,r.Z)(n),(0,r.Z)(t))}))})).catch((function(n){F(n.message)})).finally((function(){S(!1)})))}),[h,y,f]),(0,c.useEffect)((function(){d(e.get("input"))}),[e]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("main",{children:[(0,i.jsx)("form",{onSubmit:function(n){n.preventDefault(),d(n.target.elements.searchQuery.value.toLowerCase())},children:(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{name:"searchQuery"}),(0,i.jsx)("button",{type:"submit",children:"Search"})]})}),j&&(0,i.jsx)("p",{children:"Loading..."}),E&&(0,i.jsxs)("p",{children:["Error: ",E]}),(0,i.jsx)(c.Suspense,{children:(0,i.jsx)(o,{moviesFound:m})}),m.length>0&&!j&&!E&&(0,i.jsx)("button",{onClick:function(){b((function(n){return n+1}))},children:"Load More"})]})})}},9568:function(n,t,e){e.d(t,{BG:function(){return p},LI:function(){return f},OX:function(){return l},mo:function(){return h},wr:function(){return o}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1243),s="https://api.themoviedb.org/3/",i="42fa24333ee689285b5f9f8d0d7e86b8",o=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"trending/all/day?language=en-US&api_key=").concat(i));case 2:return t=n.sent,n.next=5,t.data;case 5:return e=n.sent,n.abrupt("return",e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"search/movie?include_adult=false&language=en-US&api_key=").concat(i,"&query=").concat(t,"&page=").concat(e));case 2:return r=n.sent,n.next=5,r.data;case 5:return a=n.sent,n.abrupt("return",a);case 7:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"movie/").concat(t,"?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"movie/").concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=797.c55338db.chunk.js.map