(this["webpackJsonpreact-letters"]=this["webpackJsonpreact-letters"]||[]).push([[0],{12:function(e,t,r){e.exports={item:"LetterItem_item__1zVwS",image:"LetterItem_image__306fs",content:"LetterItem_content__1ExNv",actions:"LetterItem_actions__26LUw"}},13:function(e,t,r){e.exports={header:"MainNavigation_header__32smD",logo:"MainNavigation_logo__1lQv2",active:"MainNavigation_active__2fOID",badge:"MainNavigation_badge__3Oqnj"}},19:function(e,t,r){e.exports={card:"Card_card__2NOtI"}},20:function(e,t,r){e.exports={list:"LetterList_list__2AJAi"}},23:function(e,t,r){e.exports={main:"Layout_main__3aayt"}},29:function(e,t,r){},36:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(18),i=r.n(c),a=r(7),s=(r(29),r(2)),j=r(24),o=r(11),d=r(19),l=r.n(d),b=r(0);var u=function(e){return Object(b.jsx)("div",{className:l.a.card,children:e.children})},x=r(12),O=r.n(x),h=Object(n.createContext)({favorites:[],totalFavorites:0,addFavorite:function(e){},removeFavorite:function(e){},itemIsFavorite:function(e){}});function v(e){var t=Object(n.useState)([]),r=Object(o.a)(t,2),c=r[0],i=r[1];var a={favorites:c,totalFavorites:c.length,addFavorite:function(e){i((function(t){return t.concat(e)}))},removeFavorite:function(e){i((function(t){return t.filter((function(t){return t.id!==e}))}))},itemIsFavorite:function(e){return c.some((function(t){return t.id===e}))}};return Object(b.jsx)(h.Provider,{value:a,children:e.children})}var f=h;var m=function(e){var t=Object(n.useContext)(f),r=t.itemIsFavorite(e.id);return Object(b.jsx)("li",{className:O.a.item,children:Object(b.jsxs)(u,{children:[Object(b.jsx)("div",{className:O.a.image,children:Object(b.jsx)("img",{src:e.image,alt:e.recipient})}),Object(b.jsxs)("div",{className:O.a.content,children:[Object(b.jsxs)("h3",{children:["Recipient: ",e.recipient]}),Object(b.jsxs)("sender",{children:["Sender: ",e.sender]}),Object(b.jsx)("p",{children:e.text})]}),Object(b.jsx)("div",{className:O.a.actions,children:Object(b.jsx)("button",{onClick:function(){r?t.removeFavorite(e.id):t.addFavorite({id:e.id,recipient:e.recipient,text:e.text,image:e.image,sender:e.sender})},children:r?"\ud83e\udde1":"\ud83e\udd0d"})})]})})},p=r(20),_=r.n(p);var g=function(e){return Object(b.jsx)("ul",{className:_.a.list,children:e.letters.map((function(e){return Object(b.jsx)(m,{id:e.id,image:e.image,recipient:e.recipient,sender:e.sender,text:e.text},e.id)}))})},N="https://react-f5da6-default-rtdb.firebaseio.com/letters.json";var F=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),r=t[0],c=t[1],i=Object(n.useState)([]),a=Object(o.a)(i,2),s=a[0],d=a[1];return Object(n.useEffect)((function(){c(!0),fetch(N).then((function(e){return e.json()})).then((function(e){var t=[];for(var r in e){var n=Object(j.a)({id:r},e[r]);t.push(n)}c(!1),d(t)}))}),[]),r?Object(b.jsx)("section",{children:Object(b.jsx)("p",{children:"Loading..."})}):Object(b.jsxs)("section",{children:[Object(b.jsx)("h1",{children:"All Letters"}),Object(b.jsx)(g,{letters:s})]})},L=r(9),w=r.n(L);var y=function(e){var t=Object(n.useRef)(),r=Object(n.useRef)(),c=Object(n.useRef)(),i=Object(n.useRef)();return Object(b.jsx)(u,{children:Object(b.jsxs)("form",{className:w.a.form,onSubmit:function(n){n.preventDefault();var a={recipient:t.current.value,image:r.current.value,sender:c.current.value,text:i.current.value};e.onAddLetter(a)},children:[Object(b.jsxs)("div",{className:w.a.control,children:[Object(b.jsx)("label",{htmlFor:"recipient",children:"Letter Recipient"}),Object(b.jsx)("input",{type:"text",required:!0,id:"recipient",ref:t})]}),Object(b.jsxs)("div",{className:w.a.control,children:[Object(b.jsx)("label",{htmlFor:"image",children:"Letter Image"}),Object(b.jsx)("input",{type:"url",required:!0,id:"image",ref:r})]}),Object(b.jsxs)("div",{className:w.a.control,children:[Object(b.jsx)("label",{htmlFor:"sender",children:"Sender"}),Object(b.jsx)("input",{type:"text",required:!0,id:"sender",ref:c})]}),Object(b.jsxs)("div",{className:w.a.control,children:[Object(b.jsx)("label",{htmlFor:"text",children:"Text"}),Object(b.jsx)("textarea",{id:"text",required:!0,rows:"5",ref:i})]}),Object(b.jsx)("div",{className:w.a.actions,children:Object(b.jsx)("button",{children:"Add Letter"})})]})})};var I=function(){var e=Object(s.f)();return Object(b.jsxs)("section",{children:[Object(b.jsx)("h1",{children:"Add New Letter"}),Object(b.jsx)(y,{onAddLetter:function(t){fetch(N,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e.replace("/")}))}})]})};var S=function(){var e,t=Object(n.useContext)(f);return e=0===t.totalFavorites?Object(b.jsx)("p",{children:"You got no favorites yet. Start adding some?"}):Object(b.jsx)(g,{letters:t.favorites}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h1",{children:"My Favorites"}),e]})},R=r(13),A=r.n(R);var C=function(){var e=Object(n.useContext)(f);return Object(b.jsxs)("header",{className:A.a.header,children:[Object(b.jsx)("div",{className:A.a.logo,children:"React Letters"}),Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(a.b,{to:"/",children:"\ud83d\udcec"})}),Object(b.jsx)("li",{children:Object(b.jsx)(a.b,{to:"/new-letter",children:"\ud83d\udcdd"})}),Object(b.jsx)("li",{children:Object(b.jsxs)(a.b,{to:"/favorites",children:["\ud83e\udde1",Object(b.jsx)("span",{className:A.a.badge,children:e.totalFavorites})]})})]})})]})},M=r(23),q=r.n(M);var J=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)(C,{}),Object(b.jsx)("main",{className:q.a.main,children:e.children})]})};var k=function(){return Object(b.jsx)(J,{children:Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{path:"/",exact:!0,children:Object(b.jsx)(F,{})}),Object(b.jsx)(s.a,{path:"/new-letter",children:Object(b.jsx)(I,{})}),Object(b.jsx)(s.a,{path:"/favorites",children:Object(b.jsx)(S,{})})]})})};i.a.render(Object(b.jsx)(v,{children:Object(b.jsx)(a.a,{children:Object(b.jsx)(k,{})})}),document.getElementById("root"))},9:function(e,t,r){e.exports={form:"NewLetterForm_form__i1NRh",control:"NewLetterForm_control__29hMx",actions:"NewLetterForm_actions__2Mdha"}}},[[36,1,2]]]);
//# sourceMappingURL=main.e3b7a47f.chunk.js.map