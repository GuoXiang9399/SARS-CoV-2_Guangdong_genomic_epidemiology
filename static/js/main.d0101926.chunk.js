(this["webpackJsonpSARS-Cov2_Guangdon_genomic_epidemiology"]=this["webpackJsonpSARS-Cov2_Guangdon_genomic_epidemiology"]||[]).push([[0],{103:function(t,e,n){t.exports=n(207)},108:function(t,e,n){},128:function(t,e){},130:function(t,e){},164:function(t,e){},165:function(t,e){},207:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(52),c=n.n(a),i=(n(108),n(9)),l=n(21),s=n(3),u=n(5);function d(){var t=Object(i.a)(["",""]);return d=function(){return t},t}function f(t){return Object(s.b)("div",{css:Object(s.a)(d(),"display: flex; \n                   flex-direction: row;\n                    padding-left: 2%; \n                    padding-right:2%; \n                    padding-top: 5%; \n                    flex-wrap: nowrap; \n                    justify-content: space-around;\n                    align-items: center;")},Object(s.b)(u.InteractionContainer,null,t.children))}var b=n(97),g=n(216),h=n(34),p=n(14);var j=n(215),O=n(214);function m(t){var e=t.colorScale,n=t.colorKey;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.Branches.Coalescent,{filter:function(t){return t.v0.node.children.length>2},attrs:{strokeWidth:1,stroke:function(t){return t.v1.node.annotations[n]?e(t.v1.node.annotations[n]):"#9F9B96"}}}),r.a.createElement(u.Branches.Rectangular,{filter:function(t){return t.v0.node.children.length<=2},attrs:{strokeWidth:1,stroke:function(t){return t.v1.node.annotations[n]?e(t.v1.node.annotations[n]):"#9F9B96"}}}))}var v=n(209),y=n(210);function x(t){var e=t.colorScale,n=t.colorKey,o=t.setTree,a=t.tree,c=u.useFigtreeContext.scales().height,i=Object(v.a)([10,Object(y.a)([2,c/2/Object(u.getTips)(a).length])]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.NodeBackgrounds.Circle,{filter:function(t){return!t.node.children},attrs:{r:i,fill:"white",strokeWidth:1,stroke:function(t){return e(t.node.annotations[n])}},hoveredAttrs:{r:i+4}}),r.a.createElement(u.Nodes.Rectangle,{filter:function(t){return t.node.children&&t.node.children.length>2},attrs:{cursor:"pointer",fill:"none",pointerEvents:"all",width:50,height:20,transform:"translate(0,-".concat(10,")")},interactions:{onClick:function(t){o(t.node)}},hoverKey:null}),r.a.createElement(u.Nodes.Circle,{tooltip:{"data-tip":function(t){return"".concat(t.id.split("|").slice(1).join("|")," [set:").concat(Object(u.getNode)(a,t.id).annotations[n],"]")},"data-for":"tip-label"},filter:function(t){return!t.node.children},attrs:{r:i,fill:function(t){return e(t.node.annotations[n])},strokeWidth:0,opacity:.7},hoveredAttrs:{r:i+4}}))}function w(){var t=Object(i.a)(["font-size:10px"]);return w=function(){return t},t}function k(){return Object(s.b)(h.a,{css:Object(s.a)(w()),className:"toolTip",id:"tip-label",type:"light",effect:"solid",delayHide:200,place:"right",delayUpdate:50})}var E=n(217);function C(t){var e,n,a=t.width,c=t.height,i=t.display,s=t.margins,d=t.setIsTreeLoaded,f=t.colorKey,v=Object(o.useState)(null),y=Object(l.a)(v,2),w=y[0],C=y[1],F=Object(o.useState)(null),K=Object(l.a)(F,2),B=K[0],T=K[1];if(e="/data/MCC_tree_annotated.tree",n=function(t,e){var n=Object(u.collapseNodes)(t,(function(t){return t.annotations.posterior<.5}));C(n),console.log(n),T(n),d(!0)},Object(o.useEffect)((function(){fetch("/SARS-CoV-2_Guangdong_genomic_epidemiology"+e).then((function(t){return t.text()})).then((function(t){var e,o=Object(u.parseNexus)(t,{datePrefix:"|",dateFormat:"%Y-%m-%d"})[0],r=Object(u.getTips)(o),a=Object(p.a)(r);try{for(a.s();!(e=a.n()).done;){var c=e.value,i="Guangdong"===c.name.split("|").reverse()[2]?"Guangdong":"Other";o=Object(u.annotateNode)(o,c.id,{Guangdong:i})}}catch(l){a.e(l)}finally{a.f()}n(o)}))}),[]),Object(o.useEffect)((function(){h.a.rebuild()}),[w]),i){var _=B.annotationTypes[f].values,N=Object(j.a)().domain(Object(u.getDateRange)(w)).range([0,a-s.left-s.right]),A=E.a.slice(0,5).concat("#9F9B96"),G=Object(O.a)().domain(_).range("Guangdong"===f?["#A79D96","#BF0F34"]:A),W=w.annotationTypes[f]?Object(b.a)(w.annotationTypes[f].values):[],L=W.map((function(t){return G(t)})),R=Object(O.a)().domain(W).range(L);return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.FigTree,{width:a,height:c,margins:s,tree:w,pos:{x:s.left,y:s.top},layout:S},r.a.createElement("rect",{width:a,height:c,fill:"none",transform:"translate(".concat(-s.left,",").concat(-s.top,")"),pointerEvents:"all",onClick:function(){C(B)}}),r.a.createElement(u.Axis,{direction:"horizontal",scale:N,gap:10,ticks:{number:10,format:Object(g.a)("%m-%d"),padding:20,style:{},length:6}},r.a.createElement(u.AxisBars,{lift:5})),r.a.createElement(u.Nodes.Coalescent,{filter:function(t){return t.node.children&&t.node.children.length>2},attrs:{fill:function(t){return t.node.annotations[f]?G(t.node.annotations[f]):"#9F9B96"}},interactions:{onClick:function(t){console.log(t),C(t.node)}},startWidth:1,sortFactor:1}),r.a.createElement(m,{colorScale:G,colorKey:f}),r.a.createElement(x,{colorScale:G,colorKey:f,setTree:C,tree:w}),r.a.createElement(u.Legend.Discrete,{height:700,columns:1,width:200,pos:{x:a-200,y:0},swatchSize:8,scale:R,annotation:f})),r.a.createElement(k,{toottipContent:"",tree:w,roottipContent:"",colorKey:f}))}return null}function S(t){return Object(u.highlightedVertices)(t,.4,(function(t){return t.annotations.lineage}))}function F(){var t=Object(i.a)(["",""]);return F=function(){return t},t}function K(){var t=Object(i.a)(["",""]);return K=function(){return t},t}function B(){var t=Object(i.a)(["",""]);return B=function(){return t},t}function T(){var t=Object(i.a)(["",""]);return T=function(){return t},t}function _(){var t=Object(i.a)(["",""]);return _=function(){return t},t}function N(){var t=Object(i.a)(["",""]);return N=function(){return t},t}var A="padding-left:4px;padding-right:4px";function G(t){var e=t.colorKey,n=t.setColorKey;return t.display?Object(s.b)("div",{css:Object(s.a)(N(),"display:flex;flex-direction:row; justify-content:center;align-items:center")},Object(s.b)("p",{css:Object(s.a)(_(),A)},"Lineage"),Object(s.b)("label",{css:Object(s.a)(T(),"position: relative;\n                display: inline-block;\n                width: 60px;\n                height: 34px;\n                    input {opacity: 0;\n                        width: 0;\n                        height: 0;\n                    }")},Object(s.b)("input",{css:Object(s.a)(B(),":checked + span {\n  background-color: #ccc;\n}\n\n:focus + span {\n  box-shadow: 0 0 1px #2196F3;\n}\n\n:checked + span:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}"),type:"checkbox",onClick:function(){return n(function(t){return"lineage"===t?"Guangdong":"lineage"}(e))}}),Object(s.b)("span",{css:Object(s.a)(K(),' position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n\n   :before {\n  position: absolute;\n  content: "";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n')})),Object(s.b)("p",{css:Object(s.a)(F(),A)},"Location")):null}function W(){var t=Object(i.a)(["flex-basis:95%;"]);return W=function(){return t},t}function L(){var t=Object(i.a)(["text-align:center;margin:auto;display:",""]);return L=function(){return t},t}var R=function(){var t=Object(o.useState)(!1),e=Object(l.a)(t,2),n=e[0],r=e[1],a=Object(o.useState)("lineage"),c=Object(l.a)(a,2),i=c[0],u=c[1];return Object(s.b)("div",null,Object(s.b)("div",{css:Object(s.a)(L(),n?"none":"inline")},Object(s.b)("p",null,"Loading data")),Object(s.b)(f,null,Object(s.b)("div",{css:Object(s.a)(W())},Object(s.b)(G,{colorKey:i,setColorKey:u,display:n}),Object(s.b)(C,{display:n,setIsTreeLoaded:r,width:1100,height:500,margins:{top:10,right:210,bottom:40,left:40},colorKey:i}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[103,1,2]]]);
//# sourceMappingURL=main.d0101926.chunk.js.map