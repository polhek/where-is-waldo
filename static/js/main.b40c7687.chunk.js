(this["webpackJsonpwhere-is-waldo"]=this["webpackJsonpwhere-is-waldo"]||[]).push([[0],{23:function(e,t,c){},25:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(3),s=c.n(n),r=c(16),i=c.n(r),o=(c(23),c(10)),l=c.n(o),d=c(17),u=c(15),j=c(5),b=(c(25),c.p+"static/media/wizard.71fddcf0.png"),m=c.p+"static/media/waldo.57fd4972.png",f=c.p+"static/media/wilma.c50c3b08.png",O=c(9),h=function(e){var t=e.name,c=e.index,n=e.timer;return Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:Object(a.jsxs)("b",{children:[c+1,". ",t," -- ",function(e){var t="0".concat(e%60).slice(-2),c="".concat(Math.floor(e/60)),a="0".concat(c%60).slice(-2),n="0".concat(Math.floor(e/3600)).slice(-2);return"".concat(n," : ").concat(a," : ").concat(t)}(n)]})})})},p=function(e){var t=e.usersDB;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Leaderboard"}),Object(a.jsx)("div",{className:"leader",children:Object(a.jsx)("div",{className:"userLeader",children:t.map((function(e,t){return Object(a.jsx)(h,{name:e.name,timer:e.timer,index:t},e.index)}))})})]})},x=function(e){var t=e.waldoFound,c=e.wizardFound,n=e.wilmaFound,s=e.usersDB;return Object(a.jsxs)("div",{className:"sidebar",children:[Object(a.jsxs)("div",{className:"char-lines",children:[Object(a.jsx)("img",{src:b,alt:"wizard",className:"characterImg"}),c?Object(a.jsx)(O.b,{size:40}):Object(a.jsx)(O.a,{size:40})]}),Object(a.jsxs)("div",{className:"char-lines",children:[Object(a.jsx)("img",{src:m,alt:"waldo",className:"characterImg"}),t?Object(a.jsx)(O.b,{size:40}):Object(a.jsx)(O.a,{size:40})]}),Object(a.jsxs)("div",{className:"char-lines",children:[Object(a.jsx)("img",{src:f,alt:"wilma",className:"characterImg"}),n?Object(a.jsx)(O.b,{size:40}):Object(a.jsx)(O.a,{size:40})]}),Object(a.jsx)(p,{usersDB:s})]})},v=c.p+"static/media/wado.6fc61e4f.jpeg",w=function(e){var t=e.setY,c=e.setX,n=e.clickedCharacter,s=e.setMarkerPlaced,r=function(e){var a=window.event,n=a.offsetX?a.offsetX:a.pageX-document.getElementsByClassName("waldo-img").offsetLeft,r=a.offsetY?a.offsetY:a.pageY-document.getElementsByClassName("waldo-img").offsetTop;!function(e,t){var c=document.querySelector(".marker-container");c.classList.remove("hide"),c.style.top="".concat(t-25,"px"),c.style.left="".concat(e-25,"px")}(n,r),s(!0),console.log(n,r),c(n),t(r)};return Object(a.jsxs)("div",{className:"image-container ",children:[Object(a.jsxs)("div",{className:"marker-container hide",children:[Object(a.jsx)("div",{className:"marker"}),Object(a.jsx)("button",{name:"waldo",type:"submit",onClick:function(e){return n(e)},value:"waldo",children:"Waldo"}),Object(a.jsx)("button",{name:"wizard",type:"submit",onClick:function(e){return n(e)},value:"wizard",children:"Wizard"}),Object(a.jsx)("button",{name:"wilma",type:"submit",onClick:function(e){return n(e)},value:"wilma",children:"Wilma"})]}),Object(a.jsx)("img",{onClick:function(e){r()},className:"waldo-img",src:v,alt:"Find Waldo"})]})},g=function(e){var t=e.user,c=e.waldoFound,s=e.wizardFound,r=e.wilmaFound,i=e.saveUser,o=Object(n.useState)(0),l=Object(j.a)(o,2),d=l[0],u=l[1],b=Object(n.useState)(!1),m=Object(j.a)(b,2),f=m[0],O=m[1],h=Object(n.useState)(!1),p=Object(j.a)(h,2),x=(p[0],p[1]),v=Object(n.useRef)(null);Object(n.useEffect)((function(){t.length>0&&!1===f&&w()}),[t]),Object(n.useEffect)((function(){c&&s&&r&&(g(),i(t,d))}),[c,s,r]);var w=function(){O(!0),x(!0),v.current=setInterval((function(){u((function(e){return e+1}))}),1e3)},g=function(){clearInterval(v.current),x(!1)};return Object(a.jsx)("div",{className:"timer",children:Object(a.jsx)("div",{className:"timer-timer",children:Object(a.jsx)("h2",{children:function(e){var t="0".concat(e%60).slice(-2),c="".concat(Math.floor(e/60)),a="0".concat(c%60).slice(-2),n="0".concat(Math.floor(e/3600)).slice(-2);return"".concat(n," : ").concat(a," : ").concat(t)}(d)})})})},y=function(e){var t=e.setUser;return Object(a.jsx)("div",{className:"user-login show",children:Object(a.jsx)("div",{className:"login-container",children:Object(a.jsxs)("form",{onSubmit:function(e){!function(e){e.preventDefault(),document.querySelector(".user-login").classList.toggle("show"),document.querySelector(".user-login").classList.toggle("hide")}(e)},children:[Object(a.jsx)("label",{children:Object(a.jsx)("h2",{children:"Username:"})}),Object(a.jsx)("input",{onChange:function(e){t(e.target.value)},type:"text",placeholder:"Enter Username",name:"uname",required:!0}),Object(a.jsx)("button",{type:"submit",children:"Start playing on submit!"})]})})})},S=c(12);c(26),c(29),c(32);S.a.apps.length||S.a.initializeApp({apiKey:"AIzaSyDI7clzPOlS0Tuf4FuT1GVNwoerT5SC0-I",authDomain:"where-is-waldo-99e1e.firebaseapp.com",databaseURL:"https://where-is-waldo-99e1e.firebaseio.com",projectId:"where-is-waldo-99e1e",storageBucket:"where-is-waldo-99e1e.appspot.com",messagingSenderId:"909475830981",appId:"1:909475830981:web:75eda288d5711c0f8424ac"});var N=S.a.firestore();var k=function(){var e=Object(n.useState)(),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(),i=Object(j.a)(r,2),o=i[0],b=i[1],m=Object(n.useState)(!1),f=Object(j.a)(m,2),O=f[0],h=f[1],p=Object(n.useState)(),v=Object(j.a)(p,2),S=v[0],k=v[1],z=Object(n.useState)(!1),F=Object(j.a)(z,2),C=F[0],I=F[1],E=Object(n.useState)(!1),B=Object(j.a)(E,2),L=B[0],D=B[1],M=Object(n.useState)(!1),U=Object(j.a)(M,2),X=U[0],Y=U[1],W=Object(n.useState)({}),q=Object(j.a)(W,2),T=q[0],A=q[1],P=Object(n.useState)(""),J=Object(j.a)(P,2),R=J[0],G=J[1],K=Object(n.useState)([]),V=Object(j.a)(K,2),H=V[0],Q=V[1],Z=function(){var e=Object(u.a)(l.a.mark((function e(){var t,c,a,n,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=N.collection("characterCoordinates"),e.next=4,t.get();case 4:c=e.sent,a={},n=Object(d.a)(c.docs);try{for(n.s();!(s=n.n()).done;)r=s.value,a[r.id]=r.data()}catch(i){n.e(i)}finally{n.f()}A(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(u.a)(l.a.mark((function e(){var t,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=N.collection("users").orderBy("timer","asc").limit(10),e.next=4,t.get();case 4:c=e.sent,a=[],c.docs.forEach((function(e){a.push(e.data())})),Q(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){Z(),$()}),[]),Object(n.useEffect)((function(){!0===O&&te(c,o)}),[S]);var _=function(){var e=T[S];return c-20<e.cordX&&c+20>e.cordX&&o+20>e.cordY&&o-20<e.cordY},ee=function(){var e=document.createElement("div");e.classList.add("find-marker"),e.style.top="".concat(o-20,"px"),e.style.left="".concat(c-20,"px"),document.querySelector(".image-container").appendChild(e)},te=function(e,t){_()&&("waldo"===S?(I(!0),ee()):"wizard"===S?(Y(!0),ee()):"wilma"===S&&(D(!0),ee()))};return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(y,{setUser:G}),Object(a.jsxs)("div",{className:"app-header",children:[Object(a.jsx)("h1",{children:"Where's Waldo?"}),Object(a.jsx)(g,{user:R,waldoFound:C,wizardFound:X,wilmaFound:L,saveUser:function(e,t){N.collection("users").doc(e).set({name:e,timer:t}).then((function(){console.log("Successfully saved user")})).catch((function(e){console.log("Error saving user",e)}))}})]}),Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)(x,{waldoFound:C,wizardFound:X,wilmaFound:L,usersDB:H}),Object(a.jsx)(w,{setX:s,setY:b,clickedCharacter:function(e){k(e.target.value)},checkClick:te,setMarkerPlaced:h})]})]})})};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.b40c7687.chunk.js.map