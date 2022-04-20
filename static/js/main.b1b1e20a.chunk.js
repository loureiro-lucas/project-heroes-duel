(this["webpackJsonpproject-heroes"]=this["webpackJsonpproject-heroes"]||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(27),a=n.n(c),i=n(42),s=n(47),l=n(81),h=n(26),u="GET_HEROES",d="SEARCH_HEROES",j={heroes:[],searchHeroes:[]},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.heroes,o=t.heroName;switch(n){case u:return Object(h.a)(Object(h.a)({},e),{},{heroes:r});case d:return Object(h.a)(Object(h.a)({},e),{},{searchHeroes:e.heroes.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}))});default:return e}},p=Object(s.b)({heroesList:b}),O=Object(s.c)(p,Object(s.a)(l.a)),x=n(37),m=n(38),f=n(60),g=n(58),v=n(6),y=n(7),C=n(145),H=n(159),w=n(158),k=n(160),L=n(155),D=n(87),S=n.n(D),E=function(){return function(e){return fetch("http://homologacao3.azapfy.com.br/api/ps/metahumans").then((function(e){return e.json()})).then((function(t){return e(function(e){return{type:u,heroes:e}}(t))}))}},R=n(1),M=Object(y.a)("div")((function(e){var t=e.theme;return Object(v.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(C.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(C.a)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),B=Object(y.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),I=Object(y.a)(L.a)((function(e){var t,n=e.theme;return{color:"inherit","& .MuiInputBase-input":(t={padding:n.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(n.spacing(4),")"),transition:n.transitions.create("width"),width:"100%"},Object(v.a)(t,n.breakpoints.up("md"),{width:"20ch"}),Object(v.a)(t,"placeholder","test"),t)}})),A=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(x.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).handleSearch=function(t){var n=t.target;(0,e.props.search)(n.value)},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(R.jsx)(w.a,{sx:{flexGrow:1},children:Object(R.jsx)(H.a,{position:"static",children:Object(R.jsx)(k.a,{children:Object(R.jsxs)(M,{onChange:this.handleSearch,children:[Object(R.jsx)(B,{children:Object(R.jsx)(S.a,{})}),Object(R.jsx)(I,{placeholder:"Encontre seu heroi",inputProps:{"aria-label":"search"}})]})})})})}}]),n}(r.Component),F=Object(i.b)(null,(function(e){return{search:function(t){return e({type:d,heroName:t})}}}))(A),z=n(15),N=n(30),P=n(157),T=n(168),G=n(162),J=n(165),_=n(164),V=n(122),W=n(163);function q(e){var t=e.hero,n=e.onClick;return Object(R.jsx)(G.a,{sx:{maxWidth:345},elevation:2,children:Object(R.jsxs)(W.a,{onClick:function(){return n(t)},children:[Object(R.jsx)(_.a,{component:"img",height:"300",image:t.images.sm,alt:"".concat(t.name," picture")}),Object(R.jsxs)(J.a,{children:[Object(R.jsx)(V.a,{gutterBottom:!0,variant:"h5",component:"div",color:"text.secondary",children:t.name}),Object(R.jsx)(V.a,{variant:"body2",color:"primary",children:t.biography.publisher})]})]})})}var K=n(88),Q=n(153),U=n(151),X=n(167),Y=n(166),Z=n(89),$=n.n(Z),ee=["children","onClose"],te=Object(y.a)(Q.a)((function(e){var t=e.theme;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}})),ne=function(e){var t=e.children,n=e.onClose,r=Object(K.a)(e,ee);return Object(R.jsxs)(U.a,Object(h.a)(Object(h.a)({sx:{m:0,p:2}},r),{},{children:[t,n?Object(R.jsx)(Y.a,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(R.jsx)($.a,{})}):null]}))};function re(e){var t=e.open,n=e.close,r=e.hero1,o=e.hero2,c=e.winner;return Object(R.jsx)("div",{children:Object(R.jsxs)(te,{onClose:n,"aria-labelledby":"customized-dialog-title",open:t,sx:{display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"1px 1px 1px 1px gray"},children:[Object(R.jsxs)(ne,{id:"customized-dialog-title",onClose:n,color:"primary",children:["Vencedor: ",c.name]}),Object(R.jsxs)(X.a,{dividers:!0,sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",boxShadow:"1px 1px 1px 1px gray",width:"500px"},children:[Object(R.jsxs)("div",{children:[Object(R.jsx)(V.a,{gutterBottom:!0,color:"text.secondary",children:r.name}),Object(R.jsx)(_.a,{component:"img",height:"300",image:r.images.sm,alt:"".concat(r.name," picture"),sx:{borderRadius:"3px"}})]}),Object(R.jsxs)("div",{children:[Object(R.jsx)(V.a,{gutterBottom:!0,color:"text.secondary",children:o.name}),Object(R.jsx)(_.a,{component:"img",height:"300",image:o.images.sm,alt:"".concat(o.name," picture"),sx:{borderRadius:"3px"}})]})]})]})})}var oe=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(e){var r;return Object(x.a)(this,n),(r=t.call(this,e)).state={choosenHeroes:[],isModalOpen:!0},r.handleClickHero=r.handleClickHero.bind(Object(N.a)(r)),r.renderDuel=r.renderDuel.bind(Object(N.a)(r)),r.handleCloseDuel=r.handleCloseDuel.bind(Object(N.a)(r)),r.renderHeroesList=r.renderHeroesList.bind(Object(N.a)(r)),r}return Object(m.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.fetchHeroes)()}},{key:"handleClickHero",value:function(e){this.state.choosenHeroes.some((function(t){return t===e}))?this.setState((function(t){return{choosenHeroes:t.choosenHeroes.filter((function(t){return t!==e}))}})):this.setState((function(t){return{choosenHeroes:[].concat(Object(z.a)(t.choosenHeroes),[e])}}))}},{key:"handleCloseDuel",value:function(){this.setState({choosenHeroes:[]})}},{key:"renderHeroesList",value:function(e){var t=this;return e.map((function(e,n){return Object(R.jsx)(P.a,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2,children:Object(R.jsx)(q,{hero:e,onClick:t.handleClickHero})},n)}))}},{key:"renderDuel",value:function(){var e=this.state,t=e.choosenHeroes,n=e.isModalOpen,r=t[0],o=t[1],c=t.reduce((function(e,t){return Object.values(t.powerstats).reduce((function(e,t){return e+t}),0)>Object.values(e.powerstats).reduce((function(e,t){return e+t}),0)?t:e}),t[0]);return Object(R.jsx)(re,{open:n,close:this.handleCloseDuel,hero1:r,hero2:o,winner:c})}},{key:"render",value:function(){var e=this.props,t=e.heroes,n=e.searchHeroes,r=this.state.choosenHeroes;return Object(R.jsxs)(T.a,{children:[2===r.length&&this.renderDuel(),Object(R.jsx)(P.a,{container:!0,spacing:2,margin:.25,children:0===n.length?this.renderHeroesList(t):this.renderHeroesList(n)})]})}}]),n}(o.a.Component),ce=Object(i.b)((function(e){var t=e.heroesList;return{heroes:t.heroes,searchHeroes:t.searchHeroes}}),(function(e){return{fetchHeroes:function(){return e(E())}}}))(oe),ae=n(152),ie=n(10);function se(){return Object(R.jsxs)("div",{className:"App",children:[Object(R.jsx)(ae.a,{}),Object(R.jsx)(F,{}),Object(R.jsx)(ie.c,{children:Object(R.jsx)(ie.a,{path:"/",element:Object(R.jsx)(ce,{})})})]})}var le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,169)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),c(e),a(e)}))},he=n(67);a.a.render(Object(R.jsx)(o.a.StrictMode,{children:Object(R.jsx)(he.a,{children:Object(R.jsx)(i.a,{store:O,children:Object(R.jsx)(se,{})})})}),document.getElementById("root")),le()}},[[115,1,2]]]);
//# sourceMappingURL=main.b1b1e20a.chunk.js.map