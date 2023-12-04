"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{9736:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,a,c=e(9439),u=e(2791),o=e(7689),i=e(9568),s=e(168),p=e(5706),f=p.Z.ul(r||(r=(0,s.Z)(["\n  list-style: none;\n  display: grid;\n  grid-template-columns: auto auto;\n  row-gap: 20px;\n"]))),l=p.Z.li(a||(a=(0,s.Z)(["\n  background-color: rgba(255, 255, 255, 0.8);\n  font-size: 20px;\n  text-align: center;\n"]))),d=e(184),h=(0,u.lazy)((function(){return Promise.all([e.e(727),e.e(854)]).then(e.bind(e,854))})),v=function(){var n=(0,u.useState)(null),t=(0,c.Z)(n,2),e=t[0],r=t[1],a=(0,u.useState)(!1),s=(0,c.Z)(a,2),p=s[0],v=s[1],m=(0,o.UO)().movieId;(0,u.useEffect)((function(){v(!0),m&&(0,i.OX)(m).then((function(n){r(n.cast),v(!1)}))}),[m]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u.Suspense,{children:!0===p&&(0,d.jsx)(h,{})}),e&&!p&&(0,d.jsx)(f,{children:e.map((function(n){return(0,d.jsxs)(l,{children:[(0,d.jsx)("img",{src:(t=n.profile_path,"https://image.tmdb.org/t/p/w500".concat(t)),alt:n.name}),(0,d.jsx)("h3",{children:n.name})]},n.id);var t}))}),e&&0===e.length&&(0,d.jsx)("p",{children:"We do not have any information about the cast in this movie"})]})}},9568:function(n,t,e){e.d(t,{BG:function(){return f},LI:function(){return p},OX:function(){return l},mo:function(){return d},wr:function(){return s}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1243),o="https://api.themoviedb.org/3/",i="42fa24333ee689285b5f9f8d0d7e86b8",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"trending/all/day?language=en-US&api_key=").concat(i));case 2:return t=n.sent,n.next=5,t.data;case 5:return e=n.sent,n.abrupt("return",e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"search/movie?include_adult=false&language=en-US&api_key=").concat(i,"&query=").concat(t,"&page=").concat(e));case 2:return r=n.sent,n.next=5,r.data;case 5:return a=n.sent,n.abrupt("return",a);case 7:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.f1d96f66.chunk.js.map