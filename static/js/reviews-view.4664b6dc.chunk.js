(this["webpackJsonpmovies-gallery-finder"]=this["webpackJsonpmovies-gallery-finder"]||[]).push([[5],{109:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));var c=n(0),r=n(6),o=n(16),i=n(23),s=n.n(i),a=n(15),l=n(62),j=n(69),b=n(3);function u(t){var e=t.content,n=t.onClose;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{children:e}),Object(b.jsx)(j.a,{onClick:n,type:"button",children:"Close"})]})}function d(t){var e=t.content,n=t.onOpen,c=t.showMoreContent;return e.length>800?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{children:"".concat(e.slice(0,800),"...")}),Object(b.jsx)(j.a,{type:"button",onClick:n,children:c?"Close":"Read more"})]}):Object(b.jsx)("p",{children:e})}var h=Object(a.a)({container:{backgroundColor:"black",border:"2px solid white",padding:15},title:{marginTop:0}});function O(t){var e=t.author,n=t.content,r=Object(c.useState)(!1),o=Object(l.a)(r,2),i=o[0],s=o[1],a=function(){return s(!i)},j=h();return Object(b.jsxs)("div",{className:j.container,children:[Object(b.jsx)("h3",{className:j.title,children:"author:"}),Object(b.jsx)("p",{children:e}),i?Object(b.jsx)(u,{content:n,onClose:a}):Object(b.jsx)(d,{content:n,onOpen:a,showMoreContent:i})]})}var p=n(64),m=n(18),f=n(63),x=Object(a.a)({list:{listStyle:"none",padding:0,width:1e3,marginLeft:"auto",marginRight:"auto"},item:{marginBottom:20}});function v(){var t=x(),e=Object(r.i)().movieId,n=Object(o.c)(f.d),i=Object(o.c)(f.b),a=Object(o.b)();return Object(c.useEffect)((function(){return a(Object(p.d)(e)),function(){return a(Object(m.l)([]))}}),[e,a]),i?Object(b.jsx)(s.a,{type:"Oval",color:"#00BFFF",height:100,width:100}):(null===n||void 0===n?void 0:n.length)>0?Object(b.jsx)("ul",{className:t.list,children:n.map((function(e){var n=e.id,c=e.author,r=e.content;return Object(b.jsx)("li",{className:t.item,children:Object(b.jsx)(O,{author:c,content:r})},n)}))}):Object(b.jsx)("p",{children:"Sorry, not found any reviews for this movie"})}}}]);
//# sourceMappingURL=reviews-view.4664b6dc.chunk.js.map