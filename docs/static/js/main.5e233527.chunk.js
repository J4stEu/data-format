(this.webpackJsonpapplication=this.webpackJsonpapplication||[]).push([[0],{71:function(t,e){},73:function(t,e){},84:function(t,e,o){},85:function(t,e,o){},86:function(t,e,o){"use strict";o.r(e);var a=o(2),n=o.n(a),r=o(38),c=o.n(r),s=o(17),i=o(18),l=o(20),d=o(19),h=o(8),u=o(0);var m=function(t){return Object(u.jsx)("option",{children:t.format})},f=[{id:0,format:"..."},{id:1,format:"JSON"},{id:2,format:"XML"},{id:3,format:"YAML"}],g=f.map((function(t){return Object(u.jsx)(m,{format:t.format},t.id)})),j=o(44),v=o(68),b=function(t){Object(l.a)(o,t);var e=Object(d.a)(o);function o(){var t;return Object(s.a)(this,o),(t=e.call(this)).state={formats:f,fromFormat:"...",toFormat:"...",fromData:"",toData:""},t.getFormat=t.getFormat.bind(Object(h.a)(t)),t.getData=t.getData.bind(Object(h.a)(t)),t.format=t.format.bind(Object(h.a)(t)),t}return Object(i.a)(o,[{key:"getFormat",value:function(t,e){t?this.setState((function(){return{fromFormat:e.target.options[e.target.selectedIndex].text}})):this.setState((function(){return{toFormat:e.target.options[e.target.selectedIndex].text}}))}},{key:"getData",value:function(t,e){t?(this.setState((function(){return{fromData:e.target.value}})),console.log("fromData:"+e.target.value)):(this.setState((function(){return{toData:e.target.value}})),console.log("toData:"+e.target.value))}},{key:"format",value:function(t){var e,o,a=this.state.fromFormat,n=this.state.fromData,r=this.state.toFormat;switch(t||(a=this.state.toFormat,n=this.state.toData,r=this.state.fromFormat),a){case"...":return console.log("From format is not defined"),void alert("From format is not defined");case"JSON":e=n;break;case"XML":var c={ignoreDeclaration:!1,compact:!0};try{e=v.xml2json(n,c),console.log(e)}catch(i){try{e=v.xml2json("<root>".concat(n,"</root>"),c)}catch(l){console.log(i),alert(i),console.log(l),alert(l)}}break;case"YAML":try{e=j.load(n)}catch(i){console.log(i),alert(i)}break;default:console.log("Something is wrong"),alert("Something is wrong...")}if("object"!=typeof e)try{e=JSON.parse(e),console.log(e)}catch(i){return console.log(i),void alert(i)}switch(r){case"...":return console.log("To format is not defined"),void alert("To format is not defined");case"JSON":try{o=JSON.stringify(e)}catch(i){console.log(i),alert(i)}break;case"XML":var s={ignoreDeclaration:!1,compact:!0};e.declaration||e._declaration||(s.ignoreDeclaration=!0);try{o=v.js2xml(e,s)}catch(i){console.log(i),alert(i)}break;case"YAML":try{o=j.dump(e)}catch(i){console.log(i),alert(i)}break;default:console.log("Something is wrong"),alert("Something is wrong...")}this.setState((function(){return t?{toData:o}:{fromData:o}}))}},{key:"render",value:function(){var t=this;return Object(u.jsxs)("div",{className:"windowsContainer",children:[Object(u.jsx)("div",{className:"firstWindow",children:Object(u.jsx)("textarea",{className:"textData convFrom",value:this.state.fromData,placeholder:this.state.fromFormat,onChange:function(e){return t.getData(!0,e)}})}),Object(u.jsxs)("div",{className:"controlPanel",children:[Object(u.jsx)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",children:Object(u.jsx)("path",{d:"M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"})}),Object(u.jsx)("select",{className:"convSelect convFromSelect",onChange:function(e){return t.getFormat(!0,e)},children:g}),Object(u.jsx)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",children:Object(u.jsx)("path",{d:"M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"})}),Object(u.jsx)("select",{className:"convSelect convToSelect",onChange:function(e){return t.getFormat(!1,e)},children:g}),Object(u.jsxs)("div",{className:"convButtons",children:[Object(u.jsxs)("div",{className:"convButton rightConvButton",onClick:function(){return t.format(!1)},children:[Object(u.jsx)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",children:Object(u.jsx)("path",{d:"M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"})}),"Convert"]}),Object(u.jsxs)("div",{className:"convButton leftConvButton",onClick:function(){return t.format(!0)},children:["Convert",Object(u.jsx)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",children:Object(u.jsx)("path",{d:"M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"})})]})]})]}),Object(u.jsx)("div",{className:"secondWindow",children:Object(u.jsx)("textarea",{className:"textData convTo",value:this.state.toData,placeholder:this.state.toFormat,onChange:function(e){return t.getData(!1,e)}})})]})}}]),o}(n.a.Component),O=function(t){Object(l.a)(o,t);var e=Object(d.a)(o);function o(){var t;return Object(s.a)(this,o),(t=e.call(this)).state={},t}return Object(i.a)(o,[{key:"render",value:function(){return Object(u.jsx)("div",{id:"MainSection",children:Object(u.jsx)(b,{})})}}]),o}(n.a.Component);o(84),o(85);c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.5e233527.chunk.js.map