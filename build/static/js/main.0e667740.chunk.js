(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t.p+"static/media/sun.051e123c.svg"},function(e,a,t){e.exports=t(12)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(3),r=t.n(c),s=(t(10),t(1)),m=t(4),i=t.n(m);t(11);var u=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)([]),m=Object(s.a)(r,2),u=m[0],o=m[1],p=Object(n.useState)(!1),d=Object(s.a)(p,2),E=d[0],b=d[1],h=Object(n.useState)(!1),f=Object(s.a)(h,2),N=f[0],v=f[1],g=Object(n.useState)(""),j=Object(s.a)(g,2),O=j[0],w=j[1];return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),l.a.createElement("h1",null,"Weather App")),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),fetch("https:/api.openweathermap.org/data/2.5/weather?q=".concat(t,"&APPID=").concat("9ea0aeab738bca025e8368d4febab564")).then((function(e){return e.json()})).then((function(e){Object.keys(e).includes("main")?(o(e),b(!0),v(!1)):(w(e.message),v(!0),b(!1),console.log(N,O))}))}},l.a.createElement("input",{type:"text",onChange:function(e){return c(e.target.value)},autoFocus:!0,placeholder:"type the city here..."}),l.a.createElement("button",{type:"submit",className:"searchBtn"},"search")),l.a.createElement("div",{className:"weather-content"},N?O:l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"City: ",t," "),l.a.createElement("div",{className:"info"},l.a.createElement("p",null,"Current temperature:")," ",l.a.createElement("span",{className:"bold"}," ",E?u.main.temp:null," \xb0C ")),l.a.createElement("div",{className:"info"},l.a.createElement("p",null,"Max temperature:")," ",l.a.createElement("span",{className:"bold"}," ",E?u.main.temp_max:null," \xb0C ")),l.a.createElement("div",{className:"info"},l.a.createElement("p",null,"Min temperature:")," ",l.a.createElement("span",{className:"bold"}," ",E?u.main.temp_min:null," \xb0C")),l.a.createElement("div",{className:"info"},l.a.createElement("p",null,"Humidity:")," ",l.a.createElement("span",{className:"bold"}," ",E?u.main.humidity:null," % ")),l.a.createElement("div",{className:"info"},l.a.createElement("p",null,"Weather description:")," ",l.a.createElement("span",{className:"bold"}," ",E?u.weather[0].description:null," ")),l.a.createElement("div",{className:"info"},l.a.createElement("p",null,"Wind deg:")," ",l.a.createElement("span",{className:"bold"}," ",E?u.wind.deg:null," ")),l.a.createElement("div",{className:"info"},l.a.createElement("p",null,"Wind speed:")," ",l.a.createElement("span",{className:"bold"}," ",E?u.wind.speed:null," ")))))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null)),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.0e667740.chunk.js.map