(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(e,t,n){e.exports=n(30)},19:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(10),c=n.n(i),o=(n(19),n(1)),l=n(2);function u(){var e=Object(o.a)(["\n  font-weight: 100;\n  color: rgba(175, 47, 47, 0.15);\n  text-align: center;\n  padding: 10px;\n  font-size: 100px;\n"]);return u=function(){return e},e}var s=l.b.h1(u()),d=function(){return a.a.createElement(s,null,"todos")},f=n(3),p=n(6),h=n.n(p);function b(){var e=Object(o.a)(["\n      border: solid 1px black;\n      box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n    "]);return b=function(){return e},e}function m(){var e=Object(o.a)(["\n  display: block;\n  padding: 16px 0px;\n  padding-right: 16px;\n  padding-left: ",';\n  width: 100%;\n  border: none;\n  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n  font-size: inherit;\n  font-weight: 100;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  ',"\n  ::placeholder {\n    color: #d9d9d9;\n  }\n"]);return m=function(){return e},e}var k=l.b.input.attrs((function(e){return{placeholder:"What needs to be done?",defaultValue:e.fieldFlag?e.text:""}}))(m(),(function(e){return e.fieldFlag?"10px":"60px"}),(function(e){return e.fieldFlag&&Object(l.a)(b())})),x=function(e){var t=e.setTaskItem,n=e.fieldFlag,r=e.taskItems,i=e.text,c=e.setFieldFlag,o=e.taskId;return a.a.createElement(k,{text:i,fieldFlag:n,onKeyUp:function(e){return function(e){if(e.currentTarget.value)if(n&&13===e.keyCode){var a={text:e.currentTarget.value,taskId:o},i=r.map((function(e){return e.taskId===o?a:e}));localStorage.setItem("taskItems",JSON.stringify(i)),c(!1),t(i)}else if(13===e.keyCode){var l=e.currentTarget.value;e.currentTarget.value="";var u=h.a.generate(),s=r.concat({text:l,taskId:u});localStorage.setItem("taskItems",JSON.stringify(s)),t(s)}}(e)}})};function g(){var e=Object(o.a)(["\n  position: relative;\n  width: 50%;\n  height: 23px;\n"]);return g=function(){return e},e}function v(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  width: 10%;\n"]);return v=function(){return e},e}function y(){var e=Object(o.a)(['\n  display: inline-block;\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  &::before {\n    cursor: pointer;\n    content: "";\n    display: block;\n    position: absolute;\n    width: 25px;\n    height: 25px;\n    border: 1px solid #d9d9d9;\n    border-radius: 50%;\n  }\n']);return y=function(){return e},e}function I(){var e=Object(o.a)(['\n  display: none;\n  :checked + label::after {\n    content: "";\n    width: 15px;\n    height: 4px;\n    position: absolute;\n    transform: translateY(9px) translateX(5px) rotate(-52deg);\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: #55d997;\n  }\n  :checked + label::before {\n    border: 1px solid #55d997;\n  }\n']);return I=function(){return e},e}var O=l.b.input.attrs((function(e){return{type:"checkbox",defaultChecked:e.isChecked?"checked":"",id:e.id}}))(I()),w=l.b.label.attrs((function(e){return{htmlFor:e.htmlFor}}))(y()),E=l.b.div(v()),j=l.b.div(g()),A=function(e){var t=e.checkedArray,n=e.setCheckedArray,i=e.isChecked,c=e.taskId,o=Object(r.useRef)(),l=h.a.generate();return a.a.createElement(E,null,a.a.createElement(j,null,a.a.createElement(O,{isChecked:i,ref:o,id:l}),a.a.createElement(w,{onClick:function(){return function(){if(o.current.checked){var e=t.indexOf(c);t.splice(e,1),localStorage.setItem("checkedArray",JSON.stringify(t)),n(t.concat())}else{var r=t.concat(c);localStorage.setItem("checkedArray",JSON.stringify(r)),n(r)}}()},htmlFor:l})))};function C(){var e=Object(o.a)(["\n  transform: translateX(-10px) rotate(45deg);\n"]);return C=function(){return e},e}function S(){var e=Object(o.a)(["\n  display: inline-block;\n  height: 1px;\n  border-radius: 5px;\n  background: #cc9a9a;\n  width: 20px;\n  transform: translateX(10px) rotate(-45deg);\n  transition: all 0.2s;\n  z-index: 3;\n  ",":hover & {\n    background: red;\n  }\n"]);return S=function(){return e},e}function F(){var e=Object(o.a)(["\n  width: 80%;\n  height: 40px;\n  position: absolute;\n  left: 0;\n"]);return F=function(){return e},e}function T(){var e=Object(o.a)(["\n  width: 100%;\n  height: 53px;\n  position: relative;\n  bottom: 0;\n"]);return T=function(){return e},e}var J=l.b.div(T()),N=l.b.div(F()),z=l.b.span(S(),N),H=Object(l.b)(z)(C()),W=function(e){var t=e.index,n=e.setTaskItem,r=e.taskItems,i=e.setCheckedArray,c=e.checkedArray,o=e.taskId;return a.a.createElement(J,null,a.a.createElement(N,{onClick:function(){return function(){var e=r.reduce((function(e,n,r){return r!==t&&e.push(n),e}),[]),a=c.concat(),l=c.indexOf(o);a.splice(l,1),localStorage.setItem("taskItems",JSON.stringify(e)),n(e),-1!==l&&(localStorage.setItem("checkedArray",JSON.stringify(a)),i(a))}()}},a.a.createElement(z,null),a.a.createElement(H,null)))};function X(){var e=Object(o.a)(["\n      color: #d9d9d9;\n      text-decoration: line-through;\n    "]);return X=function(){return e},e}function B(){var e=Object(o.a)(["\n  padding: 16px 16px 16px 10px;\n  width: 100%;\n  position: relative;\n  border: none;\n  word-wrap: break-word;\n  transition: all 0.4s;\n  ","\n"]);return B=function(){return e},e}var D=l.b.div(B(),(function(e){return e.isChecked&&Object(l.a)(X())})),K=function(e){var t=e.text,n=e.isChecked;return a.a.createElement(D,{isChecked:n},t)};function M(){var e=Object(o.a)(["\n  width: 90%;\n  margin-left: ",";\n"]);return M=function(){return e},e}function R(){var e=Object(o.a)(["\n  width: 10%;\n  height: 53px;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  z-index: 9;\n  display: none;\n  ",":hover & {\n    display: block;\n  }\n"]);return R=function(){return e},e}function U(){var e=Object(o.a)(["\n  width: 100%;\n  display: flex;\n  position: relative;\n  margin-bottom: 1px;\n  background-color: white;\n  z-index: 1;\n"]);return U=function(){return e},e}var V=l.b.div(U()),Y=l.b.div(R(),V),$=l.b.div(M(),(function(e){return e.margin?"10%":"0"})),q=function(e){var t=e.text,n=e.index,i=e.isChecked,c=e.checkedArray,o=e.setCheckedArray,l=e.setTaskItem,u=e.taskItems,s=e.taskId,d=Object(r.useState)(!1),p=Object(f.a)(d,2),h=p[0],b=p[1];return a.a.createElement(V,null,h?a.a.createElement($,{margin:!0},a.a.createElement(x,{fieldFlag:h,text:t,setFieldFlag:b,setTaskItem:l,taskItems:u,taskId:s})):a.a.createElement(a.a.Fragment,null,a.a.createElement(A,{isChecked:i,index:n,taskId:s,checkedArray:c,setCheckedArray:o}),a.a.createElement($,{onDoubleClick:function(){b(!h)}},a.a.createElement(K,{text:t,isChecked:i,taskId:s})),a.a.createElement(Y,null,a.a.createElement(W,{setCheckedArray:o,checkedArray:c,taskItems:u,index:n,taskId:s,setTaskItem:l}))))};function G(){var e=Object(o.a)(["\n  font-size: 15px;\n  padding: 10px;\n  color: #4d4d4d;\n  cursor: ",";\n"]);return G=function(){return e},e}function L(){var e=Object(o.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  background-color: white;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);\n  margin-bottom:90px;\n}\n"]);return L=function(){return e},e}var P=l.b.div(L()),Q=l.b.div(G(),(function(e){return e.pointer?"pointer":"default"})),Z=function(e){var t=e.taskArray,n=e.checkedArray,r=e.setCheckedArray,i=e.taskItems,c=e.setTaskItem;return a.a.createElement(P,null,a.a.createElement(Q,null,"".concat(t.length-n.length," items left")),!!n.length&&a.a.createElement(Q,{pointer:!0,onClick:function(){return function(){var e=i.filter((function(e,t){return!n.includes(e.taskId)}));localStorage.removeItem("checkedArray"),localStorage.setItem("taskItems",JSON.stringify(e.concat())),r([]),c(e)}()}},"clear completed"))};function _(){var e=Object(o.a)(["\n  list-style: none;\n"]);return _=function(){return e},e}function ee(){var e=Object(o.a)(['\n  max-width: 550px;\n  min-width: 250px;\n  margin: 0 auto;\n  font: 24px "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 100;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n']);return ee=function(){return e},e}var te=l.b.div(ee()),ne=l.b.li(_()),re=function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)([]),o=Object(f.a)(c,2),l=o[0],u=o[1];Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("taskItems")),t=JSON.parse(localStorage.getItem("checkedArray"));null!==e&&null!==t?(i(e),u(t)):null!==e&&i(e)}),[]);var s=n.map((function(e,t){var r=l.includes(e.taskId);return a.a.createElement(ne,{key:"".concat(t).concat(JSON.stringify(e))},a.a.createElement(q,{text:e.text,index:t,taskId:e.taskId,isChecked:r,checkedArray:l,setCheckedArray:u,setTaskItem:i,taskItems:n}))}));return a.a.createElement(te,null,a.a.createElement(x,{taskItems:n,setTaskItem:i}),a.a.createElement("ul",null,s),!!n.length&&a.a.createElement(Z,{taskArray:s,checkedArray:l,setCheckedArray:u,taskItems:n,setTaskItem:i}))};var ae=function(){return a.a.createElement("div",null,a.a.createElement(d,null),a.a.createElement(re,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.739b237d.chunk.js.map