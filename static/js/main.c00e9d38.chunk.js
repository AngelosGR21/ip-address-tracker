(this["webpackJsonpip-adress-tracker"]=this["webpackJsonpip-adress-tracker"]||[]).push([[0],{62:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(17),o=a.n(r),c=(a(62),a(13)),s=a(36),p=a.n(s),l=a(49),d=a(50),b=a.n(d),j=function(){var e=Object(l.a)(p.a.mark((function e(t,a,i,n){var r,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),r=/[a-z]\./,e.prev=2,e.next=5,b.a.get(!0===r.test(t)?"https://geo.ipify.org/api/v1?apiKey=at_LKMyv1Cc99C2QJfcq9r4s828Z48rA&domain=".concat(t):"https://geo.ipify.org/api/v1?apiKey=at_LKMyv1Cc99C2QJfcq9r4s828Z48rA&ipAddress=".concat(t));case 5:o=e.sent,a(o.data),i([o.data.location.lat,o.data.location.lng]),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),console.log("Error fetching");case 14:n(!1);case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,a,i,n){return e.apply(this,arguments)}}(),m=a(112),h=a(113),x=a(121),u=a(114),g=a(120),O=a(53),f=a.n(O),v=a(4),A=a(110),k=a.p+"static/media/bgImage.a60a3c85.png",S=Object(A.a)((function(e){var t,a,i,n,r,o;return{containerOfInput:Object(v.a)({display:"flex",flexDirection:"column",alignItems:"center",backgroundImage:"url(".concat(k,")"),backgroundPosition:"cover",backgroundSize:"cover",height:"40%"},e.breakpoints.up("sm"),{height:"30%"}),header:(t={color:"white",marginTop:"10px"},Object(v.a)(t,e.breakpoints.up("md"),{fontSize:"1.7rem",marginTop:"15px"}),Object(v.a)(t,e.breakpoints.up("xl"),{fontSize:"4rem",marginTop:"60px"}),t),form:(a={display:"flex",alignItems:"center",marginTop:"1rem",borderRadius:"10px",fontSize:"0.7rem",width:"300px"},Object(v.a)(a,e.breakpoints.up("sm"),{width:"400px"}),Object(v.a)(a,e.breakpoints.up("md"),{width:"500px"}),Object(v.a)(a,e.breakpoints.up("xl"),{form:"800px"}),a),input:(i={marginLeft:e.spacing(1),flex:1,fontSize:"0.6rem"},Object(v.a)(i,e.breakpoints.up("sm"),{fontSize:"0.8rem"}),Object(v.a)(i,e.breakpoints.up("md"),{fontSize:"0.9rem"}),Object(v.a)(i,e.breakpoints.up("xl"),{fontSize:"1.2rem"}),i),iconButton:{padding:10},divider:{height:28,margin:4},detailsContainer:(n={position:"absolute",flexDirection:"column",justifyContent:"space-evenly",textAlign:"center",zIndex:"1",left:0,right:0,top:"22%",borderRadius:"10px",backgroundColor:"white"},Object(v.a)(n,e.breakpoints.up("sm"),{flexDirection:"row",padding:"20px",textAlign:"start"}),Object(v.a)(n,e.breakpoints.up("xl"),{top:"27%"}),n),statsContainer:Object(v.a)({marginBottom:"8px",marginTop:"8px"},e.breakpoints.up("sm"),{padding:"0 10px"}),divHeaders:(r={color:"hsl(0, 0%, 59%)",fontSize:"0.5rem",fontWeight:"bolder",marginBottom:"5px"},Object(v.a)(r,e.breakpoints.up("sm"),{fontSize:"0.6rem"}),Object(v.a)(r,e.breakpoints.up("md"),{fontSize:"0.9rem"}),Object(v.a)(r,e.breakpoints.up("xl"),{fontSize:"1.4rem"}),r),divData:(o={color:"hsl(0, 0%, 17%)",fontSize:"1.1rem",fontWeight:"bolder"},Object(v.a)(o,e.breakpoints.up("sm"),{fontSize:"1.1rem"}),Object(v.a)(o,e.breakpoints.up("md"),{fontSize:"1.4rem"}),Object(v.a)(o,e.breakpoints.up("xl"),{fontSize:"2rem"}),o),map:Object(v.a)({height:"60%",zIndex:"0"},e.breakpoints.up("sm"),{height:"70%"})}})),z=a(2),C=function(e){var t=e.ipByClient,a=e.handleSubmit,i=S();return Object(z.jsxs)("section",{className:i.containerOfInput,sm:12,children:[Object(z.jsx)(m.a,{variant:"h5",className:i.header,children:"IP Address Tracker"}),Object(z.jsxs)(h.a,{component:"form",className:i.form,onSubmit:a,children:[Object(z.jsx)(x.a,{className:i.input,placeholder:"Search for any IP address or domain",inputRef:t}),Object(z.jsx)(u.a,{orientation:"vertical"}),Object(z.jsx)(g.a,{type:"submit",className:i.iconButton,"aria-label":"search",children:Object(z.jsx)(f.a,{color:"primary"})})]})]})},N=a(115),I=function(e){var t=e.IPData,a=S();return Object(z.jsxs)(N.a,{className:a.detailsContainer,children:[Object(z.jsxs)("div",{className:a.statsContainer,children:[Object(z.jsx)(m.a,{paragraph:!0,className:a.divHeaders,children:"IP ADDRESS"}),Object(z.jsx)(m.a,{variant:"h5",className:a.divData,children:t.ip})]}),Object(z.jsx)(u.a,{orientation:"vertical",flexItem:!0}),Object(z.jsxs)("div",{className:a.statsContainer,children:[Object(z.jsx)(m.a,{paragraph:!0,className:a.divHeaders,children:"LOCATION"}),Object(z.jsxs)(m.a,{variant:"h5",className:a.divData,children:[t.location.city,",",t.location.region," ",t.location.postalCode]})]}),Object(z.jsx)(u.a,{orientation:"vertical",flexItem:!0}),Object(z.jsxs)("div",{className:a.statsContainer,children:[Object(z.jsx)(m.a,{paragraph:!0,className:a.divHeaders,children:"TIMEZONE"}),Object(z.jsx)(m.a,{variant:"h5",className:a.divData,children:t.location.timezone})]}),Object(z.jsx)(u.a,{orientation:"vertical",flexItem:!0}),Object(z.jsxs)("div",{className:a.statsContainer,children:[Object(z.jsx)(m.a,{paragraph:!0,className:a.divHeaders,children:"ISP"}),Object(z.jsx)(m.a,{variant:"h5",className:a.divData,children:t.isp})]})]})},Q=a(116),w=a(122),y=a(117),E=a(118),R=a(14),T=function(e){var t=e.position,a=e.IPData,i=S();return Object(z.jsxs)(Q.a,{className:i.map,center:t,zoom:13,scrollWheelZoom:!0,zoomControl:!1,children:[Object(z.jsx)(w.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(z.jsx)(y.a,{position:t,icon:new R.Icon({iconUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA4CAYAAACCNsqxAAAABmJLR0QA/wD/AP+gvaeTAAADLElEQVRogdXaS6hVVRzH8c89WbfUS91JXUUjsVFNxFFeoQwaNFUuYtBMIhw2KQiLSKPoQd3e+Ehx4GsgOGnQxEdF0EAMIrGSIivp+qhEUUo9Ddbd3N3R7Tl7rX3u3vcHv8F5rP/ve9bee53/2ucwQzVQQY0RPIzleAD3Yxh3Tr7+N/7EDziGL3AYf1SQXVqz8RQO4iraJX0VB7AWd0wH8By8iNMRsEWewHphMvqi1ThZIXCnf8FYlcBD2NFH4E7vNXV9ROtefDeN0Jm/xcJY6Afxaw3QmU8Kq1QpLRTOubqgM/+G+3qFvgvHGwCd+ZhwnXXVzgbAdnpPN+gnGwBZ5CeKoIfwewMAi3xKbpls5cCfw7yiT9UAjeCZ7EHWZM0VVpHhCgKO4CtTTdQ9WIalFdQ+K6wyF7In1kk7jP9iMxbdJHQRtuBKYtbT+aJfJhQ6jRVd52pKy4XzNTbvUFZoPq5FFpnA4hLQmRaL7zCv4W5Yk1DgkQjoTI+Kn7CxFkYjg3fLHbYIHRA6wRiNwmfiPvWSBOhMSyOzP4UTEQN/qgCasBz/HJF/vCVu7T6ajBzUxjcR44Zb4jarVe7QT0WMmdsSdtxlVeXGdk7EmH9aOB8xcEHEmCLFbNEuEnqLshfHJaG/SdUQLkfkf93C9xGBt2NlMjarMBgx7kd4XtxaegK3JUAPCstqTPazhKYnZnAb7yeAf5iQ+xBh1s4lFFmv3M3TAbyQkHcGt2bFNicUagt9y0gP0POE/iQla1O+4GhisbawKxkXOsb8BTco9Ovjk+9JzVnWORspm4kbeWLSVdb8vBMaHq84pB9+7EbgsL8BcEXeVwRN2EH/1QDITp8T7hzfVGMNAO30mm7QmV5tAGzmjb1CE74ktjYA+hMRvwzegu01Qu/CrLLQmVrYVgP0zsmJS9KAtIaorLf6/83YZPgPZhr0dMFv6Qd0Hv69PkBv6id0Hv7dmQadhx+vAPpj1fyDo5QG8E4C9Ed1QOcV0x68rWboTK/oHfqtmhgLtVF36Ddro+uiDYqh36iRqye97Hro12slKqGXTEG/1o+A5A6sQAeFL5VDwg2jyvUfa+jjRQj+tJMAAAAASUVORK5CYII=",iconSize:[30,35],popupAnchor:[0,-13]}),children:Object(z.jsx)(E.a,{children:a.ip})})]})},D=a(54),B=a(119),H=Object(D.a)({overrides:{MuiContainer:{root:{display:"flex",width:"80%",boxSizing:"border-box",marginLeft:"auto",marginRight:"auto",paddingLeft:"16px",paddingRight:"16px"}}}});var P=function(){var e=Object(i.useState)({}),t=Object(c.a)(e,2),a=t[0],n=t[1],r=Object(i.useState)([]),o=Object(c.a)(r,2),s=o[0],p=o[1],l=Object(i.useState)(!0),d=Object(c.a)(l,2),b=d[0],m=d[1],h=Object(i.useRef)(null);return Object(i.useEffect)((function(){try{j("",n,p,m)}catch(e){console.log(e),console.log("Error Fetching")}}),[]),b?Object(z.jsx)("h1",{children:"Loading..."}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(C,{ipByClient:h,handleSubmit:function(e){e.preventDefault();var t=h.current.value;j(t,n,p,m)}}),Object(z.jsx)(B.a,{theme:H,children:Object(z.jsx)(I,{IPData:a})}),Object(z.jsx)(T,{IPData:a,position:s})]})};o.a.render(Object(z.jsx)(n.a.StrictMode,{children:Object(z.jsx)(P,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.c00e9d38.chunk.js.map