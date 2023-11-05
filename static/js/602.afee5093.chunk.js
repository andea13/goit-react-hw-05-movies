"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[602],{7602:function(e,n,t){t.r(n);var r=t(9439),a=t(2791),c=t(9568),s=t(7689),i=t(1087),o=t(184),u=(0,a.lazy)((function(){return Promise.all([t.e(727),t.e(854)]).then(t.bind(t,854))}));n.default=function(){var e,n=(0,s.UO)().movieId,t=(0,s.TH)(),p=(null===t||void 0===t||null===(e=t.state)||void 0===e?void 0:e.from)||"/",l=(0,a.useState)(null),d=(0,r.Z)(l,2),f=d[0],h=d[1],v=(0,a.useState)(!1),m=(0,r.Z)(v,2),x=m[0],g=m[1],_=(0,a.useState)(null),j=(0,r.Z)(_,2),w=j[0],b=j[1];(0,a.useEffect)((function(){g(!0),n&&(g(!0),(0,c.BG)(n).then((function(e){h(e)})).catch((function(e){b(e.message),console.log(w)})).finally((function(){g(!1)})))}),[n,w]);var k,y=function(e){return"https://image.tmdb.org/t/p/w500".concat(e)};return(0,o.jsx)("main",{children:(0,o.jsxs)("section",{children:[(0,o.jsx)(a.Suspense,{children:x&&(0,o.jsx)(u,{})}),!x&&f&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.rU,{to:p,className:"return_button",children:"Go back"}),(0,o.jsxs)("div",{className:"section_container",children:[(0,o.jsxs)("div",{className:"image_container",children:[f.backdrop_path&&(0,o.jsx)("img",{src:y(f.backdrop_path),alt:f.title||f.name}),!f.backdrop_path&&f.poster_path&&(0,o.jsx)("img",{src:y(f.poster_path),alt:f.title||f.name}),!f.backdrop_path&&!f.poster_path&&(0,o.jsx)("p",{children:"Sorry, we were unable to locate to corresponding image"})]}),(0,o.jsxs)("div",{className:"info_container",children:[(0,o.jsxs)("h1",{children:[f.title||f.name,","," ",function(e){if(e)return e.slice(0,4)}(f.release_date)]}),(0,o.jsxs)("p",{children:["User Score: ",(k=f.vote_average,k?"".concat(Math.round(10*k),"%"):"This movie has not been rated yet")]}),(0,o.jsx)("h2",{children:"Overview"}),(0,o.jsx)("p",{children:f.overview}),(0,o.jsx)("h2",{children:"Genres"}),(0,o.jsx)("p",{children:function(e){if(e&&e.length)return e.map((function(e){return e.name})).join(", ")}(f.genres)})]})]}),(0,o.jsx)("p",{children:"Additional information: "}),(0,o.jsx)(i.rU,{to:"cast",children:"Cast"}),(0,o.jsx)(i.rU,{to:"reviews",children:"Reviews"}),(0,o.jsx)(a.Suspense,{children:(0,o.jsx)(s.j3,{})})]})]})})}},9568:function(e,n,t){t.d(n,{BG:function(){return l},LI:function(){return p},OX:function(){return d},mo:function(){return f},wr:function(){return u}});var r=t(5861),a=t(4687),c=t.n(a),s=t(1243),i="https://api.themoviedb.org/3/",o="42fa24333ee689285b5f9f8d0d7e86b8",u=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"trending/all/day?language=en-US&api_key=").concat(o));case 2:return n=e.sent,e.next=5,n.data;case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"search/movie?include_adult=false&language=en-US&api_key=").concat(o,"&query=").concat(n,"&page=").concat(t));case 2:return r=e.sent,e.next=5,r.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"movie/").concat(n,"?api_key=").concat(o));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(o));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(o));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=602.afee5093.chunk.js.map