"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[983,368],{6368:function(n,e,t){t.r(e);var r=t(7689),a=t(1087),c=t(184);e.default=function(n){var e=n.moviesFound;console.log(e);var t=(0,r.TH)();return(0,c.jsx)("ul",{children:e.map((function(n){return(0,c.jsx)("li",{children:(0,c.jsxs)(a.rU,{to:"/movies/".concat(n.id),state:{from:t},children:[n.title&&(0,c.jsx)("span",{children:n.title}),n.name&&(0,c.jsx)("span",{children:n.name})]})},n.id)}))})}},3983:function(n,e,t){t.r(e);var r=t(9439),a=t(2791),c=t(9568),u=t(6368),i=t(184),o=(0,a.lazy)((function(){return Promise.all([t.e(727),t.e(854)]).then(t.bind(t,854))}));e.default=function(){var n=(0,a.useState)([]),e=(0,r.Z)(n,2),t=e[0],s=e[1],f=(0,a.useState)(!1),p=(0,r.Z)(f,2),l=p[0],d=p[1];return(0,a.useEffect)((function(){d(!0),(0,c.wr)().then((function(n){var e=n.results;s(e)})).catch((function(n){return console.error(n.message)})).finally(d(!1))}),[]),(0,i.jsx)("main",{children:(0,i.jsxs)("section",{children:[(0,i.jsx)("h1",{children:"Trending today"}),(0,i.jsx)(a.Suspense,{children:l&&(0,i.jsx)(o,{})}),(0,i.jsx)(u.default,{moviesFound:t})]})})}},9568:function(n,e,t){t.d(e,{BG:function(){return p},LI:function(){return f},OX:function(){return l},mo:function(){return d},wr:function(){return s}});var r=t(5861),a=t(4687),c=t.n(a),u=t(1243),i="https://api.themoviedb.org/3/",o="42fa24333ee689285b5f9f8d0d7e86b8",s=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"trending/all/day?language=en-US&api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.data;case 5:return t=n.sent,n.abrupt("return",t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"search/movie?include_adult=false&language=en-US&api_key=").concat(o,"&query=").concat(e,"&page=").concat(t));case 2:return r=n.sent,n.next=5,r.data;case 5:return a=n.sent,n.abrupt("return",a);case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(e,"?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=983.8c622eaa.chunk.js.map