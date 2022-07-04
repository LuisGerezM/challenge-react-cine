"use strict";(self.webpackChunkchallenge_react_cine=self.webpackChunkchallenge_react_cine||[]).push([[954],{4954:function(e,t,a){a.r(t),a.d(t,{default:function(){return Y}});var n=a(4384),r=a(3108),i=a(184),s=function(e){var t=e.subtitle;return(0,i.jsx)(r.YV,{className:"text-center",from:"movie-details",children:t})},o=function(e){var t=e.text;return(0,i.jsx)(r.xv,{className:"text-center",from:"movie-details",children:t})},c=a(9743),l=a(2677),u=function(e){var t=e.showItemsMovieSelected;return(0,i.jsx)(c.Z,{className:"my-3",children:null===t||void 0===t?void 0:t.map((function(e,t){var a;return(0,i.jsxs)(l.Z,{className:"d-flex flex-column justify-content-center",children:[(0,i.jsx)(s,{subtitle:e.subtitle}),!Array.isArray(e.element)&&(0,i.jsx)(o,{text:e.element}),Array.isArray(e.element)&&(0,i.jsx)(l.Z,{className:"d-flex justify-content-between",children:null===(a=e.element)||void 0===a?void 0:a.map((function(e,t){return(0,i.jsx)(o,{text:e.name},"".concat(t.toString(),"-c"))}))})]},"".concat(t.toString(),"-b"))}))})},d=a(168),v=a(1413),m=a(5987),p=a(1694),f=a.n(p),x=a(2791),h=(a(2391),a(239)),b=a(1561),g=a(162),j=a(885),Z=a(9007),y=a(4787),N=a(8633),_=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],w=x.forwardRef((function(e,t){var a=e.bsPrefix,n=e.active,r=e.disabled,s=e.eventKey,o=e.className,c=e.variant,l=e.action,u=e.as,d=(0,m.Z)(e,_);a=(0,g.vE)(a,"list-group-item");var p=(0,y.v)((0,v.Z)({key:(0,N.h)(s,d.href),active:n},d)),x=(0,j.Z)(p,2),h=x[0],b=x[1],w=(0,Z.Z)((function(e){if(r)return e.preventDefault(),void e.stopPropagation();h.onClick(e)}));r&&void 0===d.tabIndex&&(d.tabIndex=-1,d["aria-disabled"]=!0);var D=u||(l?d.href?"a":"button":"div");return(0,i.jsx)(D,(0,v.Z)((0,v.Z)((0,v.Z)({ref:t},d),h),{},{onClick:w,className:f()(o,a,b.isActive&&"active",r&&"disabled",c&&"".concat(a,"-").concat(c),l&&"".concat(a,"-action"))}))}));w.displayName="ListGroupItem";var D=w,I=["className","bsPrefix","variant","horizontal","numbered","as"],M=x.forwardRef((function(e,t){var a,n=(0,h.Ch)(e,{activeKey:"onSelect"}),r=n.className,s=n.bsPrefix,o=n.variant,c=n.horizontal,l=n.numbered,u=n.as,d=void 0===u?"div":u,p=(0,m.Z)(n,I),x=(0,g.vE)(s,"list-group");return c&&(a=!0===c?"horizontal":"horizontal-".concat(c)),(0,i.jsx)(b.Z,(0,v.Z)((0,v.Z)({ref:t},p),{},{as:d,className:f()(r,x,o&&"".concat(x,"-").concat(o),a&&"".concat(x,"-").concat(a),l&&"".concat(x,"-numbered"))}))}));M.displayName="ListGroup";var k,C,S=Object.assign(M,{Item:D}),E=a(6031),P=(0,E.ZP)(S)(k||(k=(0,d.Z)(["\n  outline: 2px outset ",";\n\n  &:hover {\n    outline: 2px inset ",";\n  }\n"])),r.h1.secondaryColor,r.h1.secondaryColor),R=(0,E.ZP)(S.Item)(C||(C=(0,d.Z)(["\n  background-color: ",";\n"])),r.h1.VeryDarkBlue),A=function(e){var t=e.manyMovieItems,a=e.movieData;return(0,i.jsx)(P,{children:(0,i.jsxs)(R,{className:"py-4",children:[(0,i.jsx)(u,{showItemsMovieSelected:t.first}),(0,i.jsxs)(c.Z,{className:"py-4 justify-content-center",children:[(0,i.jsx)(s,{subtitle:"Rese\xf1a"}),(0,i.jsx)(o,{text:a.overview})]}),(0,i.jsx)(u,{showItemsMovieSelected:t.second})]})})},z=a(4165),G=a(5861),K=a(7500),O=a(1614),V=a(9793),L="https://api.themoviedb.org/3",T="cf70626a13ad05928380a381ff52cdb3",$=function(){var e=(0,G.Z)((0,z.Z)().mark((function e(t){var a,n;return(0,z.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.movieId,e.prev=1,e.next=4,(0,O.k)({url:"".concat(L,"/movie/").concat(a,"?api_key=").concat(T,"&language=es-ES"),method:"GET"});case 4:if((n=e.sent).id){e.next=7;break}throw new Error(n.status_message);case 7:return e.abrupt("return",{status:"success",pageNumber:n.page,adaptedMovieDetails:(r=n,{title:r.title,poster_path:r.poster_path,release_date:r.release_date,popularity:r.popularity,genres:r.genres,vote_average:r.vote_average,vote_count:r.vote_count,production_companies:r.production_companies,overview:r.overview})});case 10:e.prev=10,e.t0=e.catch(1),console.log("error",{error:e.t0}),(0,V.a)({title:"ERROR",text:e.t0.message});case 14:case"end":return e.stop()}var r}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),B=a(6871),F=a(7098),U=a(7349),Y=function(){var e=function(){var e=(0,x.useContext)(K.m).handlerIsInDetails,t=(0,B.s0)(),a=(0,x.useState)({}),n=(0,j.Z)(a,2),r=n[0],i=n[1],s=(0,x.useState)({}),o=(0,j.Z)(s,2),c=o[0],l=o[1],u=(0,x.useState)(!0),d=(0,j.Z)(u,2),v=d[0],m=d[1],p=(0,B.UO)().movieId,f=function(){var e=(0,G.Z)((0,z.Z)().mark((function e(){var a,n;return(0,z.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$({movieId:p});case 2:if(a=e.sent){e.next=5;break}return e.abrupt("return",t("/",{replace:!0}));case 5:n={first:[{subtitle:"Fecha Estreno",element:(r=a).adaptedMovieDetails.release_date},{subtitle:"Popularidad",element:r.adaptedMovieDetails.popularity},{subtitle:"G\xe9nero",element:r.adaptedMovieDetails.genres}],second:[{subtitle:"Voto promedio",element:r.adaptedMovieDetails.vote_average},{subtitle:"Cantidad de votos",element:r.adaptedMovieDetails.vote_count},{subtitle:"Compa\xf1\xedas de producci\xf3n",element:r.adaptedMovieDetails.production_companies}]},l(n),i(a.adaptedMovieDetails),m(!1);case 9:case"end":return e.stop()}var r}),e)})));return function(){return e.apply(this,arguments)}}();return(0,x.useEffect)((function(){return e(!0),f(),function(){e(!1),i({})}}),[]),{movieData:r,manyMovieItems:c,loadingMovieDetails:v}}(),t=e.movieData,a=e.manyMovieItems,s=e.loadingMovieDetails,o=(0,F.w)("pageTransition");return s?(0,i.jsx)(r.$i,{children:(0,i.jsx)(r.eN,{children:"Cargando..."})}):(0,i.jsx)(U.E.div,{initial:"out",animate:"in",exit:"out",variants:o,children:(0,i.jsxs)(r.$i,{className:"pb-4",children:[(0,i.jsx)(r.eN,{className:"text-center pt-1",children:t.title}),(0,i.jsx)(l.Z,{className:"m-lg-auto pb-3 pb-lg-0 pb-xl-3",lg:4,children:(0,i.jsx)(n.x,{location:t.poster_path})}),(0,i.jsx)(l.Z,{className:"m-auto",lg:8,children:(0,i.jsx)(A,{movieData:t,manyMovieItems:a})})]})})}}}]);
//# sourceMappingURL=954.ad7d06a3.chunk.js.map