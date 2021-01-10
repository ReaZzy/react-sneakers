(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,A){e.exports={card:"Shoes_card__1WNqt",title:"Shoes_title__3UR_-",price:"Shoes_price__3hX0M",disabled:"Shoes_disabled__19Kcl",moreInfo:"Shoes_moreInfo__2fPSf",info:"Shoes_info__BlO2x"}},125:function(e,t,A){"use strict";A.r(t);var c=A(1),n=A(0),r=A.n(n),a=A(15),i=A.n(a),o=(A(73),A(16)),s=A(129),l=A(130),j=A(36),d=A(19),u=A(17),b=A.n(u),h=A(2),O=function(e){return e.homepage.isLoading},g=function(e){return e.homepage.sneakers},x=function(e){return e.homepage.term},p=function(e){return e.homepage.brand},C=function(e){return e.homepage.gender},m=function(e){return e.homepage.colorway},E=function(e){return e.homepage.totalCount},B=function(e){return e.homepage.currentPage},R=function(e){return e.homepage.cart},f=function(e){return e.homepage.rate},w=function(e){return e.homepage.currentCurrency},y=A(29),S=A.n(y),v=A(42),Q=A(67),k=A(4),I=A(26),D=A.n(I),N=A(62),F=D.a.create({baseURL:"https://api.thesneakerdatabase.com/v1/"}),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",r={};return t&&(r.name=t),A&&(r.brand=A),c&&(r.gender=c),n&&(r.colorway=n),1!==e&&(r.page=e),F.get("sneakers?limit=50&".concat(N.stringify(r)))},G={sneakers:[],isLoading:!0,currentPage:1,totalCount:0,term:"",brand:"",colorway:"",gender:"",cart:[],finalPrice:0,currentCurrency:"USD",currencyRates:{},rate:1},K=function(e){return{type:"SET_SNEAKERS",sneakers:e}},T=function(e){return{type:"SET_LOADING",boolean:e}},J=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},M=function(e){return{type:"ADD_TO_CART",product:e}},P=function(e){return{type:"SET_TOTAL_COUNT",totalCount:e}},L=function(e,t,A,c){return{type:"SET_CURRENT_TERM",currentTerm:{term:e,brand:t,colorway:A,gender:c}}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G.currentPage,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return function(){var r=Object(v.a)(S.a.mark((function r(a){var i;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(T(!0)),r.next=3,U(e,t,A,c,n);case 3:i=r.sent,a(J(e)),a(P(i.data.count)),a(K(i.data)),a(L(t,A,n,c)),a(T(!1));case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},Y=function(){var e=Object(h.b)(),t=Object(h.c)(R),A=Object(n.useState)(0),r=Object(o.a)(A,2),a=r[0],i=r[1];return Object(n.useEffect)((function(){t&&i(t.reduce((function(e,t){return e+t.count}),0))}),[t]),Object(c.jsx)("header",{children:Object(c.jsxs)(s.a,{style:{padding:"15px 0px 15px 0px",backgroundColor:"#0e1111"},children:[Object(c.jsx)(l.a,{style:{textAlign:"center",color:"#F8F8FF"},children:Object(c.jsx)("h2",{className:"unselectable "+b.a.title,children:Object(c.jsx)(d.b,{exact:!0,to:"/",activeClassName:b.a.active,children:"FOOT SHOP"})})}),Object(c.jsxs)(l.a,{className:"d-flex justify-content-center",children:[Object(c.jsxs)("div",{className:"unselectable "+b.a.listStyles,children:[" ",Object(c.jsx)(d.b,{to:"/man",activeClassName:b.a.active,children:"\u041c\u0443\u0436\u0447\u0438\u043d\u0430\u043c"})]}),Object(c.jsxs)("div",{className:"unselectable "+b.a.listStyles,children:[" ",Object(c.jsx)(d.b,{to:"/woman",activeClassName:b.a.active,children:"\u0416\u0435\u043d\u0449\u0438\u043d\u0430\u043c"})]}),Object(c.jsxs)("div",{className:"unselectable "+b.a.listStyles,children:[" ",Object(c.jsx)(d.b,{to:"/child",activeClassName:b.a.active,children:"\u0414\u0435\u0442\u044f\u043c"})]})]}),Object(c.jsxs)(l.a,{style:{textAlign:"center"},children:[Object(c.jsx)(d.b,{to:"/cart",activeClassName:b.a.active,children:Object(c.jsxs)("button",{className:"btn btn-warning",children:[Object(c.jsx)("strong",{children:!!a&&a})," ",Object(c.jsx)(j.b,{size:"25px",color:"#0e1111"})]})}),Object(c.jsxs)("select",{onChange:function(t){e({type:"SET_CURRENT_CURRENCY",currency:t.target.value}),e(function(e){return{type:"SET_RATE",currency:e}}(t.target.value))},id:"currency",name:"currency",className:b.a.select,children:[Object(c.jsx)("option",{value:"USD",children:"USD"}),Object(c.jsx)("option",{value:"CAD",children:"CAD"}),Object(c.jsx)("option",{value:"HKD",children:"HKD"}),Object(c.jsx)("option",{value:"ISK",children:"ISK"}),Object(c.jsx)("option",{value:"PHP",children:"PHP"}),Object(c.jsx)("option",{value:"DKK",children:"DKK"}),Object(c.jsx)("option",{value:"HUF",children:"HUF"}),Object(c.jsx)("option",{value:"CZK",children:"CZK"}),Object(c.jsx)("option",{value:"GBP",children:"GBP"}),Object(c.jsx)("option",{value:"RON",children:"RON"}),Object(c.jsx)("option",{value:"SEK",children:"SEK"}),Object(c.jsx)("option",{value:"IDR",children:"IDR"}),Object(c.jsx)("option",{value:"INR",children:"INR"}),Object(c.jsx)("option",{value:"BRL",children:"BRL"}),Object(c.jsx)("option",{value:"RUB",children:"RUB"}),Object(c.jsx)("option",{value:"HRK",children:"HRK"}),Object(c.jsx)("option",{value:"JPY",children:"JPY"}),Object(c.jsx)("option",{value:"THB",children:"THB"}),Object(c.jsx)("option",{value:"CHF",children:"CHF"}),Object(c.jsx)("option",{value:"EUR",children:"EUR"}),Object(c.jsx)("option",{value:"MYR",children:"MYR"}),Object(c.jsx)("option",{value:"BGN",children:"BGN"}),Object(c.jsx)("option",{value:"TRY",children:"TRY"}),Object(c.jsx)("option",{value:"CNY",children:"CNY"}),Object(c.jsx)("option",{value:"NOK",children:"NOK"}),Object(c.jsx)("option",{value:"NZD",children:"NZD"}),Object(c.jsx)("option",{value:"ZAR",children:"ZAR"}),Object(c.jsx)("option",{value:"MXN",children:"MXN"}),Object(c.jsx)("option",{value:"SGD",children:"SGD"}),Object(c.jsx)("option",{value:"AUD",children:"AUD"}),Object(c.jsx)("option",{value:"ILS",children:"ILS"}),Object(c.jsx)("option",{value:"KRW",children:"KRW"}),Object(c.jsx)("option",{value:"PLN",children:"PLN"})]})]})]})})},W=A(23),q=function(){var e=Object(h.b)(),t=Object(h.c)(x),A=Object(h.c)(p),r=Object(h.c)(m),a=Object(h.c)(C),i=Object(n.useState)(!1),s=Object(o.a)(i,2),l=s[0],d=s[1],u=Object(n.useState)([]),b=Object(o.a)(u,2),O=b[0],g=b[1],E=Object(n.useState)([]),B=Object(o.a)(E,2),R=B[0],f=B[1],w=O.map((function(e,t){return Object(c.jsx)("option",{value:e.toLowerCase(),children:e},t)})),y=R.map((function(e,t){return Object(c.jsx)("option",{value:e.toLowerCase(),children:e},t)}));Object(n.useEffect)((function(){D.a.get("https://api.thesneakerdatabase.com/v1/brands").then((function(e){200===e.status&&g(e.data.results)})),D.a.get("https://api.thesneakerdatabase.com/v1/genders").then((function(e){200===e.status&&f(e.data.results)}))}),[]);return Object(c.jsx)("div",{className:"search",children:Object(c.jsx)(W.c,{initialValues:{search:t,colorway:r,brand:A,gender:a},onSubmit:function(t){t.gender?e(H(1,t.search,t.brand,t.gender,t.colorway)):e(H(1,t.search,t.brand,a,t.colorway)),e(L(t.search,t.brand,t.gender,t.colorway))},children:Object(c.jsxs)(W.b,{style:{width:"100%"},children:[Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)(W.a,{style:{width:"40%",height:"38px",outline:"none",borderRadius:"5px",textAlign:"center",paddingTop:"3px",paddingBottom:"3px",marginRight:"5px"},name:"search",components:"input",type:"search",placeholder:"Search here ..."}),Object(c.jsx)("button",{type:"submit",style:{marginTop:"-3px"},className:"btn btn-warning",children:Object(c.jsx)(j.a,{})})]}),Object(c.jsx)("div",{style:{textAlign:"center"},children:Object(c.jsx)("button",{className:"btn btn-outline-secondary",style:{width:"50%",marginTop:"10px"},onClick:function(){d(!l)},type:"button",children:"Show filters"})}),Object(c.jsx)("div",{style:{width:"30%",margin:"0 auto"},children:l&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("label",{children:"Color"}),Object(c.jsxs)(W.a,{as:"select",name:"colorway",className:"form-control",children:[Object(c.jsx)("option",{value:"",children:"Any"}),Object(c.jsx)("option",{value:"red",style:{color:"#C0392B"},children:"Red"}),Object(c.jsx)("option",{value:"black",style:{color:"#17202A"},children:"Black"}),Object(c.jsx)("option",{value:"purple",style:{color:"#7D3C98"},children:"Purple"}),Object(c.jsx)("option",{value:"orange",style:{color:"#E67E22"},children:"Orange"}),Object(c.jsx)("option",{value:"yellow",style:{color:"#F4D03F"},children:"Yellow"}),Object(c.jsx)("option",{value:"pink",style:{color:"#D7BDE2"},children:"Pink"}),Object(c.jsx)("option",{value:"white",style:{color:"#BDC3C7"},children:"White"}),Object(c.jsx)("option",{value:"brown",style:{color:"#935116"},children:"Brown"}),Object(c.jsx)("option",{value:"grey",style:{color:"#515A5A"},children:"Grey"}),Object(c.jsx)("option",{value:"green",style:{color:"#2ECC71"},children:"Green"}),Object(c.jsx)("option",{value:"blue",style:{color:"#398fe2"},children:"Blue"})]}),Object(c.jsx)("label",{children:"Brand"}),Object(c.jsxs)(W.a,{as:"select",name:"brand",className:"form-control",children:[Object(c.jsx)("option",{value:"",children:"Any"}),w&&w]}),Object(c.jsx)("label",{children:"Gender"}),Object(c.jsxs)(W.a,{as:"select",name:"gender",className:"form-control",children:[Object(c.jsx)("option",{value:"",children:"Any"}),y&&y]})]})})]})})})},z=A(12),Z=A.n(z),V=A(65),_=A.n(V),X=A(37),$=A.n(X),ee=function(){var e=Object(h.b)(),t=Object(h.c)(B),A=Object(h.c)(E),n=Object(h.c)(x),r=Object(h.c)(p),a=Object(h.c)(m),i=Object(h.c)(C);return Object(c.jsx)(_.a,{activePage:t,itemsCountPerPage:50,totalItemsCount:A-50,pageRangeDisplayed:5,onChange:function(t){e(H(t,n,r,i,a))},activeClass:$.a.active,innerClass:$.a.pagination,itemClass:$.a.item,hideFirstLastPages:!0,prevPageText:"<",nextPageText:">"})},te=function(e){var t=e.setShowMoreInfo,A=e.moreInfoShoe,n=e.addToCartById,r=Object(h.c)(f),a=Object(h.c)(w);return A=A[0],Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{onClick:function(){t(!1)},className:"btn close",children:"\xd7"}),Object(c.jsxs)("div",{className:Z.a.moreInfo,children:[Object(c.jsxs)("div",{className:Z.a.main,children:[Object(c.jsx)("img",{className:Z.a.img,style:{height:"250px"},src:A.media.imageUrl?A.media.imageUrl:"https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",alt:"sneaker"}),Object(c.jsx)("h3",{style:{width:"300px"},className:Z.a.title,children:A.title}),Object(c.jsx)("h3",{className:Z.a.price,children:A.retailPrice?(A.retailPrice*r).toFixed(0)+" ".concat(a):"N/A"}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"Brand: "}),A.brand,Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"Gender: "}),A.gender,Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"Colorway: "}),A.colorway,Object(c.jsx)("br",{})]}),Object(c.jsx)("button",{disabled:0===A.retailPrice||!A.retailPrice,onClick:function(){return n(A.id)},style:{width:"100%",height:"50px"},className:"btn btn-outline-warning",children:"Cart"})]}),Object(c.jsxs)("div",{className:Z.a.info,style:{float:"right"},children:[Object(c.jsx)("h3",{children:"More info"}),Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"Release date: "}),A.releaseDate,Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"Shoe: "}),A.shoe,Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"Style id: "}),A.styleId,Object(c.jsx)("br",{})]})]})]})},Ae=A(45),ce=A.n(Ae),ne=r.a.memo((function(e){ce.a.setAppElement("#root");var t=Object(h.c)(f),A=(Object(h.c)(R),Object(h.c)(w)),r=Object(h.b)(),a=Object(n.useState)(!1),i=Object(o.a)(a,2),s=i[0],l=i[1],j=Object(n.useState)({}),d=Object(o.a)(j,2),u=d[0],b=d[1],O=function(t){r(M(p.results.filter((function(e){return e.id===t})))),e.notify(p.results.filter((function(e){return e.id===t}))[0].title)},p=Object(h.c)(g),C=Object(h.c)(x),m=p.results.map((function(e,n){return Object(c.jsxs)("div",{style:{cursor:"pointer"},className:Z.a.card,id:e.id,children:[Object(c.jsxs)("div",{onClick:function(){var t;t=e.id,window.innerWidth>785&&(l((function(e){return!e})),b(p.results.filter((function(e){return e.id===t}))))},className:0!==e.retailPrice&&e.retailPrice?"":Z.a.disabled,children:[Object(c.jsx)("img",{className:Z.a.img,src:e.media.imageUrl?e.media.imageUrl:"https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",alt:"sneaker"}),Object(c.jsx)("h3",{className:Z.a.title,children:e.title}),Object(c.jsx)("h3",{className:Z.a.price,children:0!==e.retailPrice&&e.retailPrice?(e.retailPrice*t).toFixed(0)+" ".concat(A):"N/A"}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"Brand: "}),e.brand,Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"Gender: "}),e.gender,Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"Colorway: "}),e.colorway,Object(c.jsx)("br",{})]})]}),0!==e.retailPrice?Object(c.jsx)("button",{onClick:function(){return O(e.id)},className:"btn btn-outline-warning",children:"Cart"}):""]},n+1)}));return Object(c.jsxs)(c.Fragment,{children:[m.length>=1?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(ee,{}),Object(c.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:m}),Object(c.jsx)(ee,{})]}):Object(c.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:Object(c.jsx)("h1",{style:{margin:"0 auto",marginTop:"20px"},children:"Can't find sneakers with name \"".concat(C,'"')})}),Object(c.jsx)(ce.a,{isOpen:s,onRequestClose:function(){l(!1)},contentLabel:"Example Modal",style:{overlay:{backgroundColor:"rgba(14,17,17,0.5)"},content:{height:"600px",width:"60%",margin:"auto"}},children:Object(c.jsx)(te,{addToCartById:O,moreInfoShoe:u,setShowMoreInfo:l})})]})})),re=function(){return Object(c.jsx)("div",{style:{textAlign:"center",margin:"70px 25px 0 0"},children:Object(c.jsx)("img",{alt:"preloader",src:"data:image/gif;base64,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",style:{width:"50px"}})})},ae=A(5),ie=A(22),oe=A.n(ie),se=(A(59),A(28)),le=function(e){var t=Object(h.b)(),A=Object(h.c)(f),r=Object(h.c)(w),a=Object(h.c)(R),i=function(e){return se.b.error("".concat(e," deleted from cart"),{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},s=Object(n.useState)([]),l=Object(o.a)(s,2),j=l[0],d=l[1];Object(n.useEffect)((function(){d(a.map((function(e){return e[0].retailPrice*e.count})))}),[a]);var u=a.map((function(n,o){return Object(c.jsx)("div",{className:oe.a.cartItems,children:Object(c.jsxs)("div",{className:oe.a.cartItem,children:[Object(c.jsx)("div",{className:oe.a.close,onClick:function(){var e;e=n[0].id,t(function(e){return{type:"DELETE_FROM_CART",id:e}}(e)),i(a.filter((function(t){return t[0].id===e}))[0][0].title),1===a.length&&localStorage.removeItem("cart")},style:{fontSize:"30px",margin:"auto 0 auto 0",marginRight:"20px"},children:"\xd7"}),Object(c.jsx)("h4",{style:{margin:"auto 0 auto 0",marginRight:"20px"},children:o+1}),Object(c.jsx)("img",{src:n[0].media.imageUrl?n[0].media.imageUrl:"https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",alt:"sneaker"}),Object(c.jsxs)("h3",{className:oe.a.title,children:[n[0].title," ",Object(c.jsx)("br",{})," ",n[0].retailPrice?(n[0].retailPrice*A).toFixed(0)+" ".concat(r):"N/A"]}),Object(c.jsxs)("div",{className:oe.a.input,children:[Object(c.jsx)("button",{onClick:function(){var e;e=n[0].id,t(function(e){return{type:"DELETE_ITEM",id:e}}(e)),i(a.filter((function(t){return t[0].id===e}))[0][0].title)},className:"btn btn-outline-warning",children:"-"}),Object(c.jsx)("input",{onChange:function(){},value:n.count,type:"number"}),Object(c.jsx)("button",{onClick:function(){var A;A=n[0].id,t(function(e){return{type:"ADD_ITEM",id:e}}(A)),e.notify(a.filter((function(e){return e[0].id===A}))[0][0].title)},className:"btn btn-outline-warning",children:"+"}),Object(c.jsxs)("div",{style:{marginLeft:"10px",float:"right",textAlign:"center",fontWeight:"bold",fontSize:"25px"},children:[(j[o]*A).toFixed(0)," ",r]})]})]})},o)}));return Object(c.jsxs)("div",{className:oe.a.cart,children:[Object(c.jsx)("h2",{style:{textAlign:"center",marginTop:"10px",width:"100%"},children:"My cart"}),u,Object(c.jsxs)("div",{style:{textAlign:"center",fontSize:"20px"},children:[Object(c.jsxs)("strong",{style:{paddingBottom:"10px",borderBottom:"1px solid"},children:["Total price: ",j&&(j.reduce((function(e,t){return e+t}),0)*A).toFixed(0)," ",r]}),a.map((function(e,t){return Object(c.jsx)("div",{style:{margin:"15px auto"},children:e.count?e[0].title+" x"+e.count:""},t)}))]})]})};var je=function(){var e=function(e){return se.b.warn("".concat(e," added to cart"),{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},t=Object(h.c)(R),A=Object(h.b)(),r=Object(h.c)(O),a=Object(h.c)(x),i=Object(h.c)(m),o=Object(h.c)(p),s=Object(ae.f)();return Object(n.useEffect)((function(){t.length>0&&localStorage.setItem("cart",JSON.stringify(t))}),[t]),Object(n.useEffect)((function(){A(function(){var e=Object(v.a)(S.a.mark((function e(t){var A;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("https://api.exchangeratesapi.io/latest?base=USD").then((function(e){return e.data.rates}));case 2:A=e.sent,t({type:"SET_CURRENCY_RATES",rates:A});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),localStorage.getItem("cart")&&JSON.parse(localStorage.getItem("cart")).map((function(e){for(var t=0;t<e.count;t++)A(M(e))}))}),[]),Object(n.useEffect)((function(){"/man"===s.pathname?A(H(1,a,o,"men",i)):"/woman"===s.pathname?A(H(1,a,o,"women",i)):"/child"===s.pathname?A(H(1,a,o,"child",i)):"/cart"===s.pathname||A(H(1,a,o,"",i))}),[s.pathname]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(Y,{}),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(q,{}),Object(c.jsxs)(ae.c,{children:[Object(c.jsx)(ae.a,{path:"/cart",render:function(){return Object(c.jsx)(le,{notify:e})}}),Object(c.jsx)(ae.a,{path:"/",render:function(){return r?Object(c.jsx)(re,{}):Object(c.jsx)(ne,{notify:e})}})]}),Object(c.jsx)(se.a,{position:"top-right",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,limit:3})]})]})},de=function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,131)).then((function(t){var A=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;A(e),c(e),n(e),r(e),a(e)}))},ue=A(25),be=A(66),he=Object(ue.c)({homepage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SNEAKERS":return Object(k.a)(Object(k.a)({},e),{},{sneakers:t.sneakers});case"SET_LOADING":return Object(k.a)(Object(k.a)({},e),{},{isLoading:t.boolean});case"SET_CURRENT_TERM":return Object(k.a)(Object(k.a)({},e),t.currentTerm);case"SET_CURRENT_PAGE":return Object(k.a)(Object(k.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_COUNT":return Object(k.a)(Object(k.a)({},e),{},{totalCount:t.totalCount});case"ADD_TO_CART":var A=Object(k.a)(Object(k.a)({},t.product),{},{count:1});return e.cart.some((function(e){return e[0].id===t.product[0].id}))?Object(k.a)(Object(k.a)({},e),{},{cart:e.cart.map((function(e){return e[0].id===t.product[0].id&&e.count<10?Object(k.a)(Object(k.a)({},e),{},{count:e.count+1}):e}))}):Object(k.a)(Object(k.a)({},e),{},{cart:[].concat(Object(Q.a)(e.cart),[A])});case"DELETE_FROM_CART":return Object(k.a)(Object(k.a)({},e),{},{cart:e.cart.filter((function(e){return e[0].id!==t.id}))});case"DELETE_ITEM":return Object(k.a)(Object(k.a)({},e),{},{cart:e.cart.map((function(e){return e[0].id===t.id&&e.count>0?Object(k.a)(Object(k.a)({},e),{},{count:e.count-1}):e}))});case"ADD_ITEM":return Object(k.a)(Object(k.a)({},e),{},{cart:e.cart.map((function(e){return e[0].id===t.id&&e.count<10?Object(k.a)(Object(k.a)({},e),{},{count:e.count+1}):e}))});case"SET_CURRENT_CURRENCY":return Object(k.a)(Object(k.a)({},e),{},{currentCurrency:t.currency});case"SET_CURRENCY_RATES":return Object(k.a)(Object(k.a)({},e),{},{currencyRates:t.rates});case"SET_RATE":return Object(k.a)(Object(k.a)({},e),{},{rate:e.currencyRates["".concat(t.currency)]});default:return e}}}),Oe=Object(ue.d)(he,Object(ue.a)(be.a));i.a.render(Object(c.jsx)(d.a,{children:Object(c.jsx)(h.a,{store:Oe,children:Object(c.jsx)(je,{})})}),document.getElementById("root")),de()},17:function(e,t,A){e.exports={listStyles:"header_listStyles__10R1k",active:"header_active__3WU0T",title:"header_title__1dOsR",select:"header_select__1TUbI"}},22:function(e,t,A){e.exports={cartItem:"Cart_cartItem__2HrdF",cartItems:"Cart_cartItems__1JPdP",title:"Cart_title__ad6Za",input:"Cart_input__3RdGl"}},37:function(e,t,A){e.exports={active:"Paginator_active__3GlJt",pagination:"Paginator_pagination__4gfJw",item:"Paginator_item__3eJN1"}},73:function(e,t,A){}},[[125,1,2]]]);
//# sourceMappingURL=main.1c73ebd8.chunk.js.map