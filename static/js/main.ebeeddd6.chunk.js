(this["webpackJsonpstarter-app"]=this["webpackJsonpstarter-app"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(10),i=c.n(a),r=(c(22),c(23),c(24),c(1));var j=function(e){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("i",{class:"material-icons",children:"theater_comedy"})," ",e.title," ",Object(r.jsx)("i",{class:"material-icons",children:"theater_comedy"})]})};c(26);var o=function(e){return Object(r.jsx)("div",{className:"footer",children:e.title})},l=c(11),b=c.n(l),u=c(13),d=c(6),O=(c(28),c(36)),h=c(35),x=c(37);var m=function(e){var t=Object(n.useState)(!1),c=Object(d.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(0),j=Object(d.a)(i,2),o=j[0],l=j[1],m=Object(n.useState)(""),p=Object(d.a)(m,2),v=p[0],f=p[1],g=Object(n.useState)(""),N=Object(d.a)(g,2),y=N[0],S=N[1],w=Object(n.useState)(""),T=Object(d.a)(w,2),C=T[0],B=T[1],k=Object(n.useState)(""),R=Object(d.a)(k,2),P=R[0],I=R[1],D=Object(n.useState)(""),A=Object(d.a)(D,2),F=A[0],M=A[1],E=Object(n.useState)(""),q=Object(d.a)(E,2),G=q[0],L=q[1],U=Object(n.useState)(0),_=Object(d.a)(U,2),J=_[0],K=_[1],X=Object(n.useState)(""),Y=Object(d.a)(X,2),z=Y[0],H=Y[1],Q=Object(n.useState)(""),V=Object(d.a)(Q,2),W=V[0],Z=V[1];function $(){return($=Object(u.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://www.omdbapi.com/?apikey=".concat("84f9df6","&i=").concat(o,"&type=movie&r=json"),e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:c=e.sent,console.log(c),f(c.Title),console.log("Title: "+c.Title),console.log(v),S(c.Poster),B(c.Type),I(c.Released),M(c.Genre),L(c.Runtime),K(c.imdbRating),H(c.Plot),Z(c.Director);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){s&&function(){$.apply(this,arguments)}()}),[o]),Object(r.jsxs)("div",{className:"moviesGrid",children:[e.movies.map((function(e){var t=e.imdbID;return Object(r.jsx)(O.a,{className:"card",children:Object(r.jsxs)("div",{className:"movieContainer",onClick:function(e){var t;t=e.currentTarget,l(t.id),console.log(t.id),a(!0)},id:t,children:[Object(r.jsx)(O.a.Img,{variant:"top",src:"N/A"===e.Poster?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_3eDodAmFjDPaM94OgKXswFEk9lGiClkR8A&usqp=CAU":e.Poster,className:"movieImage"}),Object(r.jsxs)(O.a.Body,{className:"cardBody",children:[Object(r.jsx)(O.a.Title,{children:Object(r.jsx)("h3",{children:Object(r.jsx)("b",{children:e.Title})})}),Object(r.jsx)(O.a.Text,{style:{margin:5},children:Object(r.jsx)("b",{children:e.Year})})]})]})})})),Object(r.jsx)(h.a,{show:s,centered:!0,children:Object(r.jsxs)(O.a,{className:"modalMovieContainer",style:{width:"50rem"},children:[Object(r.jsx)(O.a.Img,{variant:"top",className:"modalMovieImage",src:"N/A"===y?"https://nelowvision.com/wp-content/uploads/2018/11/Picture-Unavailable.jpg":y}),Object(r.jsxs)(O.a.Body,{className:"modalMovieBody",style:{width:"23rem"},children:[Object(r.jsx)(O.a.Title,{children:Object(r.jsx)("h1",{children:Object(r.jsx)("b",{children:v})})}),Object(r.jsx)(O.a.Text,{className:"movieType",children:C}),Object(r.jsxs)(O.a.Text,{className:"movieRelease",children:["Release Date: ",P]}),Object(r.jsx)(O.a.Text,{className:"genreTags",children:F&&F.split(", ").map((function(e){return Object(r.jsx)("span",{children:e})}))}),Object(r.jsxs)(O.a.Text,{children:["Runtime: ",G]}),Object(r.jsx)(O.a.Text,{children:Object(r.jsx)("h4",{children:Object(r.jsxs)("b",{children:["Rating: ",J," / 10 "]})})}),Object(r.jsx)(O.a.Text,{children:z}),Object(r.jsxs)(O.a.Text,{children:["Director: ",W]}),Object(r.jsx)(x.a,{className:"modalBtn",variant:"primary",onClick:function(){a(!1)},children:"Close"})]})]})})]})};var p=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),i=Object(d.a)(a,2),j=i[0],o=i[1],l=Object(n.useState)(!1),O=Object(d.a)(l,2),h=O[0],x=O[1],p=Object(n.useState)(0),v=Object(d.a)(p,2),f=v[0],g=v[1],N=Object(n.useState)(1),y=Object(d.a)(N,2),S=y[0],w=y[1],T=Object(n.useState)(0),C=Object(d.a)(T,2),B=C[0],k=C[1];function R(){return P.apply(this,arguments)}function P(){return(P=Object(u.a)(b.a.mark((function e(){var t,n,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=encodeURIComponent(c),n="https://www.omdbapi.com/?apikey=".concat("84f9df6","&s=").concat(t,"&type=movie&r=json&page=").concat(S),console.log(n),e.next=5,fetch(n);case 5:return s=e.sent,e.next=8,s.json();case 8:s=e.sent,o(s.Search),g(s.totalResults),console.log("Total results: "+s.totalResults),console.log("Total results (state): "+f),k(Math.ceil(s.totalResults/10));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){""!==c&&R()}),[S]),Object(r.jsxs)("div",{className:"movieinfo",children:[Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"api-info",children:["Data provided for free by the ",Object(r.jsx)("a",{href:"http://www.omdbapi.com/",children:"OMDb"})," API."]}),Object(r.jsx)("br",{}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),w(1),R(),x(!0)},children:[Object(r.jsx)("label",{htmlFor:"queryInput"}),Object(r.jsx)("input",{id:"queryInput",placeholder:"Enter movie title",value:c,type:"text",onChange:function(e){return s(e.target.value)}}),Object(r.jsx)("button",{className:"search",children:"Search"})]}),Object(r.jsxs)("div",{className:"navigationBtns",children:[1!==S&&0!==B&&Object(r.jsx)("button",{id:"topLeftBtn",className:"prevBtn",onClick:function(){return w(S-1)},children:"  < Prev"}),0!==B&&Object(r.jsxs)("p",{children:["Showing ",Object(r.jsxs)("b",{children:[f," results"]})," over ",B," pages | Page: ",Object(r.jsx)("b",{children:S})]}),S<B&&Object(r.jsx)("button",{id:"topRightBtn",className:"nextBtn",onClick:function(){return w(S+1)},children:" Next > "})]}),h?Object(r.jsx)(m,{movies:j}):Object(r.jsx)(r.Fragment,{}),Object(r.jsx)("div",{children:0!==B&&Object(r.jsxs)("p",{children:["Showing ",Object(r.jsxs)("b",{children:[f," results"]})," over ",B," pages | Page: ",Object(r.jsx)("b",{children:S})]})}),Object(r.jsxs)("div",{className:"navigationBtns",children:[1!==S&&0!==B&&Object(r.jsx)("button",{className:"prevBtn",onClick:function(){return w(S-1)},children:"  < Prev"}),S<B&&Object(r.jsx)("button",{className:"nextBtn",onClick:function(){return w(S+1)},children:" Next > "})]})]})};var v=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(j,{title:"Movie Search App"}),Object(r.jsx)(p,{}),Object(r.jsx)(o,{title:"2021"})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root")),f()}},[[32,1,2]]]);
//# sourceMappingURL=main.ebeeddd6.chunk.js.map