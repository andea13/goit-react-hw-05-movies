"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{1247:function(n,t,e){e.r(t);var r=e(9439),a=e(2791),c=e(7689),u=e(9568),i=e(184),s=(0,a.lazy)((function(){return Promise.all([e.e(727),e.e(854)]).then(e.bind(e,854))}));t.default=function(){var n=(0,a.useState)(null),t=(0,r.Z)(n,2),e=t[0],o=t[1],f=(0,a.useState)(!1),p=(0,r.Z)(f,2),d=p[0],l=p[1],h=(0,c.UO)().movieId;(0,a.useEffect)((function(){l(!0),h&&(0,u.OX)(h).then((function(n){o(n.cast),l(!1)}))}),[h]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Suspense,{children:!0===d&&(0,i.jsx)(s,{})}),e&&!d&&(0,i.jsx)("ul",{children:e.map((function(n){return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:(t=n.profile_path,"https://image.tmdb.org/t/p/w500".concat(t)),alt:n.name}),(0,i.jsx)("h3",{children:n.name})]},n.id);var t}))})]})}},9568:function(n,t,e){e.d(t,{BG:function(){return p},LI:function(){return f},OX:function(){return d},mo:function(){return l},wr:function(){return o}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1243),i="https://api.themoviedb.org/3/",s="42fa24333ee689285b5f9f8d0d7e86b8",o=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"trending/all/day?language=en-US&api_key=").concat(s));case 2:return t=n.sent,n.next=5,t.data;case 5:return e=n.sent,n.abrupt("return",e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"search/movie?include_adult=false&language=en-US&api_key=").concat(s,"&query=").concat(t,"&page=").concat(e));case 2:return r=n.sent,n.next=5,r.data;case 5:return a=n.sent,n.abrupt("return",a);case 7:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(t,"?api_key=").concat(s));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(s));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(s));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.9e37e78e.chunk.js.map