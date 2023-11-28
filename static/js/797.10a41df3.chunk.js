"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[797],{4797:function(e,t,n){n.r(t);var r=n(3433),a=n(9439),u=n(2791),c=n(1087),s=n(9568),o=n(184),i=(0,u.lazy)((function(){return n.e(368).then(n.bind(n,6368))}));t.default=function(){var e=(0,c.lr)(),t=(0,a.Z)(e,2),n=t[0],f=t[1],p=(0,u.useState)(""),l=(0,a.Z)(p,2),h=l[0],d=l[1],v=(0,u.useState)([]),m=(0,a.Z)(v,2),g=m[0],x=m[1],y=(0,u.useState)(1),w=(0,a.Z)(y,2),Z=w[0],b=w[1],k=(0,u.useState)(!1),_=(0,a.Z)(k,2),S=_[0],j=_[1],L=(0,u.useState)(null),C=(0,a.Z)(L,2),q=C[0],E=C[1];(0,u.useEffect)((function(){var e=localStorage.getItem("query");e&&d(e)}),[]),(0,u.useEffect)((function(){E(null),h||x([]),h&&(f({input:h}),localStorage.setItem("query",h),j(!0),(0,s.LI)(h,Z).then((function(e){var t=e.results;x((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(t))}))})).catch((function(e){E(e.message)})).finally((function(){j(!1)})))}),[h,Z,f]),(0,u.useEffect)((function(){d(n.get("input"))}),[n]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("main",{children:[(0,o.jsx)("form",{onSubmit:function(e){e.preventDefault(),d(e.target.elements.searchQuery.value.toLowerCase()),f({query:e.target.elements.searchQuery.value.toLowerCase()})},children:(0,o.jsxs)("label",{children:[(0,o.jsx)("input",{name:"searchQuery"}),(0,o.jsx)("button",{type:"submit",children:"Search"})]})}),S&&(0,o.jsx)("p",{children:"Loading..."}),q&&(0,o.jsxs)("p",{children:["Error: ",q]}),(0,o.jsx)(u.Suspense,{children:(0,o.jsx)(i,{moviesFound:g,searchParams:n})}),g.length>0&&!S&&!q&&(0,o.jsx)("button",{onClick:function(){b((function(e){return e+1}))},children:"Load More"})]})})}},9568:function(e,t,n){n.d(t,{BG:function(){return p},LI:function(){return f},OX:function(){return l},mo:function(){return h},wr:function(){return i}});var r=n(5861),a=n(4687),u=n.n(a),c=n(1243),s="https://api.themoviedb.org/3/",o="42fa24333ee689285b5f9f8d0d7e86b8",i=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"trending/all/day?language=en-US&api_key=").concat(o));case 2:return t=e.sent,e.next=5,t.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t,n){var r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"search/movie?include_adult=false&language=en-US&api_key=").concat(o,"&query=").concat(t,"&page=").concat(n));case 2:return r=e.sent,e.next=5,r.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"movie/").concat(t,"?api_key=").concat(o));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"movie/").concat(t,"/credits?api_key=").concat(o));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=797.10a41df3.chunk.js.map