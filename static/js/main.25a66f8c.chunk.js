(this["webpackJsonprick-morty"]=this["webpackJsonprick-morty"]||[]).push([[0],{88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(0),r=c(11),s=c.n(r),o=c(30),i=c(7),l=c(47),j="SHOW_CHARACTERS",u="ALL",b="HUMAN",d="HUMANOID",h="ALIEN",O="ROBOT",p="DISEASE",m="ANIMAL",f="POOPYBUTTHOLE",x="ALIVE",y="DEAD",v="UNKNOWN_STATUS",g="MALE",N="FEMALE",S="UNKNOWN_GENDER",k="SHOW_EPISODE",w="SHOW_LOCATIONS",A=[],_={characters:A,episodes:A,locations:A},C=Object(l.b)((function(e,t){switch(t.type){case j:case u:return Object(i.a)(Object(i.a)({},e),{},{characters:t.payload.characters});case b:return Object(i.a)(Object(i.a)({},e),{},{characters:t.payload.characters.filter((function(e){return"Human"===e.species}))});case d:return Object(i.a)(Object(i.a)({},e),{},{characters:t.payload.characters.filter((function(e){return"Humanoid"===e.species}))});case h:return Object(i.a)(Object(i.a)({},e),{},{characters:t.payload.characters.filter((function(e){return"Alien"===e.species}))});case O:return Object(i.a)(Object(i.a)({},e),{},{characters:t.payload.characters.filter((function(e){return"Robot"===e.species}))});case p:return Object(i.a)(Object(i.a)({},e),{},{characters:t.payload.characters.filter((function(e){return"Disease"===e.species}))});case m:return Object(i.a)(Object(i.a)({},e),{},{characters:t.payload.characters.filter((function(e){return"Animal"===e.species}))});case f:return Object(i.a)(Object(i.a)({},e),{},{characters:t.payload.characters.filter((function(e){return"Poopybutthole"===e.species}))});case x:return Object(i.a)(Object(i.a)({},e),{},{characters:t.payload.characters.filter((function(e){return"Alive"===e.status}))});case y:return Object(i.a)(Object(i.a)({},e),{},{characters:t.payload.characters.filter((function(e){return"Dead"===e.status}))});case v:return Object(i.a)(Object(i.a)({},e),{},{characters:t.payload.characters.filter((function(e){return"unknown"===e.status}))});case g:return Object(i.a)(Object(i.a)({},e),{},{characters:t.payload.characters.filter((function(e){return"Male"===e.gender}))});case N:return Object(i.a)(Object(i.a)({},e),{},{characters:t.payload.characters.filter((function(e){return"Female"===e.gender}))});case S:return Object(i.a)(Object(i.a)({},e),{},{characters:t.payload.characters.filter((function(e){return"unknown"===e.gender}))});case k:return Object(i.a)(Object(i.a)({},e),{},{episodes:t.payload.episodes});case w:return Object(i.a)(Object(i.a)({},e),{},{locations:t.payload.locations});default:return e}}),_),E=c(10),L=(c(88),c(89),c(126)),I=c(146),T=c(129),D=c(141),H=Object(L.a)((function(e){return{formControl:{margin:e.spacing(1)},selectEmpty:{marginTop:e.spacing(2)}}})),U=function(e){var t=e.selectedSpecies,c=e.selectSpecies,n=H();return Object(a.jsxs)(T.a,{className:n.formControl,children:[Object(a.jsx)("h3",{className:"species__title",children:"Select filter by species:"}),Object(a.jsxs)(D.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t,onChange:c,children:[Object(a.jsx)(I.a,{value:"ALL",children:"All"}),Object(a.jsx)(I.a,{value:"HUMAN",children:"Human"}),Object(a.jsx)(I.a,{value:"HUMANOID",children:"Humanoid"}),Object(a.jsx)(I.a,{value:"ALIEN",children:"Alien"}),Object(a.jsx)(I.a,{value:"ROBOT",children:"Robot"}),Object(a.jsx)(I.a,{value:"DISEASE",children:"Disease"}),Object(a.jsx)(I.a,{value:"ANIMAL",children:"Animal"}),Object(a.jsx)(I.a,{value:"POOPYBUTTHOLE",children:"Poopybutthole"})]})]})},M=Object(L.a)((function(e){return{formControl:{margin:e.spacing(1)},selectEmpty:{marginTop:e.spacing(2)}}})),R=function(e){var t=e.selectedStatus,c=e.selectStatus,n=M();return Object(a.jsxs)(T.a,{className:n.formControl,children:[Object(a.jsx)("h3",{className:"species__title",children:"Select filter by status:"}),Object(a.jsxs)(D.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t,onChange:c,children:[Object(a.jsx)(I.a,{value:"ALL",children:"All"}),Object(a.jsx)(I.a,{value:"ALIVE",children:"Alive"}),Object(a.jsx)(I.a,{value:"DEAD",children:"Dead"}),Object(a.jsx)(I.a,{value:"UNKNOWN_STATUS",children:"Unknown"})]})]})},G=Object(L.a)((function(e){return{formControl:{margin:e.spacing(1)},selectEmpty:{marginTop:e.spacing(2)}}})),P=function(e){var t=e.selectedGender,c=e.selectGender,n=G();return Object(a.jsxs)(T.a,{className:n.formControl,children:[Object(a.jsx)("h3",{className:"species__title",children:"Select filter by gender:"}),Object(a.jsxs)(D.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t,onChange:c,children:[Object(a.jsx)(I.a,{value:"ALL",children:"All"}),Object(a.jsx)(I.a,{value:"MALE",children:"Male"}),Object(a.jsx)(I.a,{value:"FEMALE",children:"Female"}),Object(a.jsx)(I.a,{value:"UNKNOWN_GENDER",children:"Unknown"})]})]})},F=(c(90),c(142));function W(){return{position:"absolute",top:"50%",right:"50%",transform:"translate(50%,-50%)"}}var B=Object(L.a)((function(e){return{popup:{position:"absolute",width:"550px",fontSize:"18px",backgroundColor:"white",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),outline:0}}})),J=function(e){var t=e.characters,c=Object(n.useState)(!1),r=Object(E.a)(c,2),s=r[0],o=r[1],i=Object(n.useState)(W),l=Object(E.a)(i,1)[0],j=Object(n.useState)({}),u=Object(E.a)(j,2),b=u[0],d=u[1],h=B();return Object(a.jsxs)("ul",{className:"characters__card",children:[t.map((function(e){return Object(a.jsxs)("li",{className:"card",role:"button",onClick:function(){return t=e,o(!0),void d(t);var t},children:[Object(a.jsx)("h3",{children:"Name - ".concat(e.name)}),Object(a.jsx)("p",{children:"Species - ".concat(e.species)}),Object(a.jsx)("p",{children:"Status - ".concat(e.status)}),Object(a.jsx)("p",{children:"Gender - ".concat(e.gender)}),Object(a.jsx)("img",{src:"".concat(e.image),alt:"character"})]},e.id)})),s?Object(a.jsx)("div",{children:Object(a.jsx)(F.a,{open:s,onClose:function(){o(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(a.jsxs)("div",{className:h.popup,style:l,children:[Object(a.jsx)("h2",{children:"Name - ".concat(b.name)}),Object(a.jsx)("p",{children:"Species - ".concat(b.species)}),Object(a.jsx)("p",{children:"Status - ".concat(b.status)}),Object(a.jsx)("p",{children:"Gender - ".concat(b.gender)}),Object(a.jsx)("p",{children:"Location name - ".concat(b.location.name)}),Object(a.jsx)("p",{children:"Location url - ".concat(b.location.url)}),Object(a.jsx)("p",{children:"Origin name - ".concat(b.origin.name)}),Object(a.jsx)("p",{children:"Origin url - ".concat(b.origin.url)}),Object(a.jsx)("img",{src:"".concat(b.image),alt:"character"})]})})}):""]})},K=(c(91),function(e){for(var t=e.paginate,c=e.pages,n=[],r=1;r<=c;r+=1)n.push(r);return Object(a.jsx)("div",{className:"pagination",children:Object(a.jsx)("ul",{className:"pagination__list",children:n.map((function(e){return Object(a.jsx)("li",{className:"pagination__item",children:Object(a.jsx)("button",{type:"button",onClick:function(){return t(e)},className:"ui positive basic button",children:e})},e)}))})})}),z=(c(92),c(25)),V=(c(93),c(135)),Y=c(139),q=c(138),Q=c(134),X=c(136),Z=c(137),$=c(133),ee=Object(L.a)({table:{width:"800px",border:"2px dashed #ccc",margin:"0 auto"}}),te=function(e){var t=e.episodes,c=ee(),r=Object(n.useState)(!1),s=Object(E.a)(r,2),o=s[0],i=s[1],l=Object(n.useState)(t),j=Object(E.a)(l,2),u=j[0],b=j[1];return Object(a.jsx)(Q.a,{component:$.a,children:Object(a.jsxs)(V.a,{className:c.table,size:"small","aria-label":"a dense table",children:[Object(a.jsx)(X.a,{children:Object(a.jsxs)(Z.a,{children:[Object(a.jsx)(q.a,{className:"table__name",onClick:function(){i((function(e){return!e})),b(Object(z.a)(t).sort((function(e,t){return e.name.localeCompare(t.name)})))},children:"Name"}),Object(a.jsx)(q.a,{children:"Episode"})]})}),Object(a.jsx)(Y.a,{children:o?u.map((function(e){return Object(a.jsxs)(Z.a,{children:[Object(a.jsx)(q.a,{component:"th",scope:"row",children:e.name}),Object(a.jsx)(q.a,{component:"th",scope:"row",children:e.episode})]},e.name)})):t.map((function(e){return Object(a.jsxs)(Z.a,{children:[Object(a.jsx)(q.a,{component:"th",scope:"row",children:e.name}),Object(a.jsx)(q.a,{component:"th",scope:"row",children:e.episode})]},e.name)}))})]})})},ce=function(e){var t=e.episodes,c=e.paginate;return Object(a.jsxs)("div",{className:"episodes",children:[void 0===t?Object(a.jsx)("div",{className:"episode__error",children:"There is no data here"}):Object(a.jsx)(te,{episodes:t}),Object(a.jsx)(K,{pages:3,paginate:c})]})},ae=(c(94),function(e){return e.sortedArray.map((function(e){return Object(a.jsxs)(Z.a,{children:[Object(a.jsx)(q.a,{component:"th",scope:"row",children:e.id}),Object(a.jsx)(q.a,{component:"th",scope:"row",children:e.name}),Object(a.jsx)(q.a,{component:"th",scope:"row",children:e.type}),Object(a.jsx)(q.a,{component:"th",scope:"row",children:e.dimension})]},e.name)}))}),ne=function(e){return e.sortedArray.map((function(e){return Object(a.jsxs)(Z.a,{children:[Object(a.jsx)(q.a,{component:"th",scope:"row",children:e.id}),Object(a.jsx)(q.a,{component:"th",scope:"row",children:e.name}),Object(a.jsx)(q.a,{component:"th",scope:"row",children:e.type}),Object(a.jsx)(q.a,{component:"th",scope:"row",children:e.dimension})]},e.name)}))},re=function(e){return e.sortedArray.map((function(e){return Object(a.jsxs)(Z.a,{children:[Object(a.jsx)(q.a,{component:"th",scope:"row",children:e.id}),Object(a.jsx)(q.a,{component:"th",scope:"row",children:e.name}),Object(a.jsx)(q.a,{component:"th",scope:"row",children:e.type}),Object(a.jsx)(q.a,{component:"th",scope:"row",children:e.dimension})]},e.name)}))},se=Object(L.a)({table:{width:"800px",border:"2px dashed #ccc",margin:"0 auto"}}),oe=function(e){var t=e.locations,c=se(),r=Object(n.useState)(!1),s=Object(E.a)(r,2),o=s[0],i=s[1],l=Object(n.useState)(!1),j=Object(E.a)(l,2),u=j[0],b=j[1],d=Object(n.useState)(!1),h=Object(E.a)(d,2),O=h[0],p=h[1],m=Object(n.useState)(t),f=Object(E.a)(m,2),x=f[0],y=f[1],v=Object(n.useState)(t),g=Object(E.a)(v,2),N=g[0],S=g[1],k=Object(n.useState)(t),w=Object(E.a)(k,2),A=w[0],_=w[1];return Object(a.jsx)(Q.a,{component:$.a,children:Object(a.jsxs)(V.a,{className:c.table,size:"small","aria-label":"a dense table",children:[Object(a.jsx)(X.a,{children:Object(a.jsxs)(Z.a,{children:[Object(a.jsx)(q.a,{className:"table__number",children:"\u2116"}),Object(a.jsx)(q.a,{className:"table__name",onClick:function(){S(t),_(t),i((function(e){return!e})),y(Object(z.a)(t).sort((function(e,t){return e.name.localeCompare(t.name)})))},children:"Name"}),Object(a.jsx)(q.a,{className:"table__type",onClick:function(){_(t),y(t),b((function(e){return!e})),S(Object(z.a)(t).sort((function(e,t){return e.type.localeCompare(t.type)})))},children:"Type"}),Object(a.jsx)(q.a,{className:"table__dimension",onClick:function(){y(t),S(t),p((function(e){return!e})),_(Object(z.a)(t).sort((function(e,t){return e.dimension.localeCompare(t.dimension)})))},children:"Dimension"})]})}),Object(a.jsxs)(Y.a,{children:[!1===o&&!1===u&&!1===O&&t.map((function(e){return Object(a.jsxs)(Z.a,{children:[Object(a.jsx)(q.a,{component:"th",scope:"row",children:e.id}),Object(a.jsx)(q.a,{component:"th",scope:"row",children:e.name}),Object(a.jsx)(q.a,{component:"th",scope:"row",children:e.type}),Object(a.jsx)(q.a,{component:"th",scope:"row",children:e.dimension})]},e.name)})),o&&Object(a.jsx)(ae,{sortedArray:x}),u&&Object(a.jsx)(ne,{sortedArray:N}),O&&Object(a.jsx)(re,{sortedArray:A})]})]})})},ie=function(e){var t=e.locations,c=e.paginate;return Object(a.jsxs)("div",{className:"episodes",children:[void 0===t?Object(a.jsx)("div",{className:"episode__error",children:"There is no data here"}):Object(a.jsx)(oe,{locations:t}),Object(a.jsx)(K,{pages:6,paginate:c})]})},le=c(144),je=c(145),ue=c(140);var be=function(e,t){var c=Object(n.useState)((function(){try{var c=window.localStorage.getItem(e);return c?JSON.parse(c):t}catch(a){return t}})),a=Object(E.a)(c,2),r=a[0],s=a[1];return[r,function(t){try{var c=t instanceof Function?t(r):t;s(c),window.localStorage.setItem(e,JSON.stringify(c))}catch(a){console.error(a)}}]},de=(c(95),c(143)),he=function(e){var t=e.list,c=e.removeItem,n=e.handleChange;return Object(a.jsx)("ul",{className:"watch__list",children:t.map((function(e){return Object(a.jsxs)("li",{className:"watch__item",children:[Object(a.jsxs)("label",{htmlFor:"checkbox",className:"watch__label",children:[Object(a.jsx)(de.a,{value:e.title,checked:e.checked,onChange:function(){return n(e.id)},defaultChecked:!0,color:"primary",inputProps:{"aria-label":"secondary checkbox"}}),Object(a.jsx)("p",{className:"watch__name ".concat(e.checked," ? checked : ''"),children:e.title})]}),Object(a.jsx)(ue.a,{variant:"contained",color:"secondary",onClick:function(){return c(e)},children:"Remove"})]},e.id)}))})},Oe=Object(L.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}})),pe=function(){var e=Oe(),t=Object(le.a)(),c=Object(n.useState)(!1),r=Object(E.a)(c,2),s=r[0],o=r[1],i=be("data",[]),l=Object(E.a)(i,2),j=l[0],u=l[1],b=Object(n.useState)(""),d=Object(E.a)(b,2),h=d[0],O=d[1];return Object(a.jsxs)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:[Object(a.jsx)(je.a,{id:"standard-basic",label:"New Episode",value:h,onChange:function(e){var t=e.target;""!==t.value&&O(t.value)}}),Object(a.jsx)(ue.a,{variant:"outlined",onClick:function(){o(!0),""!==h&&(u([].concat(Object(z.a)(j),[{id:t,title:h,checked:!1}])),O(""))},children:"Add"}),s&&Object(a.jsx)(he,{list:j,removeItem:function(e){u(j.filter((function(t){return t!==e})))},handleChange:function(e){o(!0),j.map((function(t){t.id===e&&(t.checked=!0)})),u(j)}})]})},me=function(e,t){return fetch("".concat("https://rickandmortyapi.com/api/").concat(e),t).then((function(e){return e.json()})).then((function(e){return e.results})).catch((function(e){return e}))},fe=function(e){return me("character/?page=".concat(e))},xe=function(e){return me("episode/?page=".concat(e))},ye=function(e){return me("location/?page=".concat(e))};function ve(e){return{type:j,payload:{characters:e}}}function ge(e){return{type:k,payload:{episodes:e}}}function Ne(e){return{type:w,payload:{locations:e}}}function Se(e){return{type:u,payload:{characters:e}}}var ke=function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!1),i=Object(E.a)(s,2),l=i[0],j=i[1],k=Object(n.useState)(!1),w=Object(E.a)(k,2),A=w[0],_=w[1],C=Object(n.useState)(!1),L=Object(E.a)(C,2),I=L[0],T=L[1],D=Object(n.useState)("all"),H=Object(E.a)(D,2),M=H[0],G=H[1],F=Object(n.useState)("all"),W=Object(E.a)(F,2),B=W[0],z=W[1],V=Object(n.useState)("all"),Y=Object(E.a)(V,2),q=Y[0],Q=Y[1],X=Object(n.useState)(1),Z=Object(E.a)(X,2),$=Z[0],ee=Z[1],te=Object(o.c)((function(e){return e.characters})),ae=Object(o.c)((function(e){return e.episodes})),ne=Object(o.c)((function(e){return e.locations})),re=Object(o.b)();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("nav",{className:"ui fluid four item menu",children:[Object(a.jsx)("button",{type:"button",onClick:function(){r(!0),j(!1),_(!1),T(!1),fe($).then((function(e){re(ve(e))}))},className:"item",children:"Characters"}),Object(a.jsx)("button",{type:"button",onClick:function(){j(!0),r(!1),_(!1),T(!1),xe($).then((function(e){re(ge(e))}))},className:"item",children:"Episodes"}),Object(a.jsx)("button",{type:"button",onClick:function(){_(!0),j(!1),r(!1),T(!1),ye($).then((function(e){re(Ne(e))}))},className:"item",children:"Locations"}),Object(a.jsx)("button",{type:"button",onClick:function(){T(!0),_(!1),j(!1),r(!1)},className:"item",children:"My watch list"})]}),c&&Object(a.jsxs)("div",{className:"characters",children:[Object(a.jsxs)("div",{className:"characters__filter",children:[Object(a.jsx)(U,{selectedSpecies:M,selectSpecies:function(e){var t=e.target;G(t.value),z(B),Q(q),fe($).then((function(e){switch(t.value){case u:re(Se(e));break;case b:re(function(e){return{type:b,payload:{characters:e}}}(e));break;case d:re(function(e){return{type:d,payload:{characters:e}}}(e));break;case h:re(function(e){return{type:h,payload:{characters:e}}}(e));break;case O:re(function(e){return{type:O,payload:{characters:e}}}(e));break;case p:re(function(e){return{type:p,payload:{characters:e}}}(e));break;case m:re(function(e){return{type:m,payload:{characters:e}}}(e));break;case f:re(function(e){return{type:f,payload:{characters:e}}}(e));break;default:re(Se(e))}}))}}),Object(a.jsx)(R,{selectedStatus:B,selectStatus:function(e){var t=e.target;z(t.value),G(M),Q(q),fe($).then((function(e){switch(t.value){case u:re(Se(e));break;case x:re(function(e){return{type:x,payload:{characters:e}}}(e));break;case y:re(function(e){return{type:y,payload:{characters:e}}}(e));break;case v:re(function(e){return{type:v,payload:{characters:e}}}(e));break;default:re(Se(e))}}))}}),Object(a.jsx)(P,{selectedGender:q,selectGender:function(e){var t=e.target;Q(t.value),G(M),z(B),fe($).then((function(e){switch(t.value){case u:re(Se(e));break;case g:re(function(e){return{type:g,payload:{characters:e}}}(e));break;case N:re(function(e){return{type:N,payload:{characters:e}}}(e));break;case S:re(function(e){return{type:S,payload:{characters:e}}}(e));break;default:re(Se(e))}}))}})]}),Object(a.jsx)(J,{characters:te}),Object(a.jsx)(K,{pages:34,paginate:function(e){ee(e),z("all"),G("all"),Q("all"),fe($).then((function(e){re(ve(e))}))}})]}),l&&Object(a.jsx)(ce,{episodes:ae,paginate:function(e){ee(e),xe($).then((function(e){re(ge(e))}))}}),A&&Object(a.jsx)(ie,{locations:ne,paginate:function(e){ee(e),ye($).then((function(e){re(Ne(e))}))}}),I&&Object(a.jsx)(pe,{})]})},we=function(){return Object(a.jsx)(ke,{})};s.a.render(Object(a.jsx)(o.a,{store:C,children:Object(a.jsx)(we,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.25a66f8c.chunk.js.map