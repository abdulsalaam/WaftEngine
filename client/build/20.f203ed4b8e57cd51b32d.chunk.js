(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"599579f215975a9eecde":function(e,t,a){"use strict";a.r(t),a.d(t,"BlogManagePage",function(){return X});var n,o=a("8af190b70a6bc55c6f1b"),r=a.n(o),i=(a("8a2d1b95e05b6a321e74"),a("d7dd51e1bf6bfc2c9c3d")),l=a("e95a63b25fb92ed15721"),c=a("a28fc3c963a1d4d1a2e5"),d=a("ab4cb61bcb2dc161defb"),u=a("da010f21fea25912dd9e"),f=a.n(u),b=a("3aced5b508e7389026da"),s=a("4a683f0a5e64e66a8eb9"),p=a.n(s),h=a("c233babf320cd068509e"),y=a.n(h),g=a("29df10ef1bee6d38fd67"),m=a.n(g),v=a("e799c547a20a503b338f"),O=a.n(v),w=a("e68eb59aa96fc65ab714"),j=a.n(w),P=a("9095151026da8c51dd60"),A=a.n(P),S=a("ab7ebb4f5c369f043e8f"),_=a.n(S),k=a("e96e82762cfd5fe3a589"),C=a.n(k),M=a("0d939196e59ed73c94e6"),E=a("bc75856162e63311fb97"),D=a.n(E),q=a("73bb0e359204f9566244"),B=a("adc20f99e57c573c589c"),R=a("d95b0cf107403b178365"),N=a("68bfce8539a0ed94bb41"),x=a("797a411e82468422676e"),I=a("64c586dd964fbec8015b"),T=a("7fd77973b2d82993bd9d"),Y=a("d733903be61208652859"),Q=a("5932430beb0c05240602");function z(e){return(z="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t,a,o){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),d=0;d<i;d++)c[d]=arguments[d+3];t.children=c}return{$$typeof:n,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function J(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var G=F(Y.a,{},void 0,"Blog Manage"),K=F(A.a,{}),L=F("br",{}),U=F(y.a,{}),X=function(e){function t(){var e,a,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return n=this,o=(e=$(t)).call.apply(e,[this].concat(i)),a=!o||"object"!==z(o)&&"function"!==typeof o?H(n):o,W(H(a),"handleAdd",function(){a.props.clearOne(),a.props.push("/admin/blog-manage/add")}),W(H(a),"handleEdit",function(e){a.props.push("/admin/blog-manage/edit/".concat(e))}),W(H(a),"handleDelete",function(e){}),W(H(a),"handleQueryChange",function(e){e.persist(),a.props.setQueryValue({key:e.target.name,value:e.target.value})}),W(H(a),"handleSearch",function(){a.props.loadAllRequest(a.props.query)}),W(H(a),"handlePagination",function(e){a.props.loadAllRequest(e)}),a}var a,n,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(t,r.a.Component),a=t,(n=[{key:"componentDidMount",value:function(){this.props.loadAllRequest(this.props.query)}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.props,n=a.all,o=n.data,i=n.page,l=n.size,c=n.totaldata,d=a.query,u={page:i,size:l,totaldata:c},b=o.map(function(a){var n=a.title,o=a.category,i=a.image,l=a.published_on,c=a.added_at,d=a.is_published,u=a.is_active,b=a.tags,s=a.author,p=a._id;return[n,o&&o.title||"No",i&&i.fieldname||null,f()(l).format("MMM Do YY"),f()(c).format("MMM Do YY"),""+d,""+u,b.join(","),s||"",F(r.a.Fragment,{},void 0,F(m.a,{id:"tooltip-top",title:"Edit Task",placement:"top",classes:{tooltip:t.tooltip}},void 0,F(O.a,{"aria-label":"Edit",className:t.tableActionButton,onClick:function(){return e.handleEdit(p)}},void 0,F(j.a,{className:t.tableActionButtonIcon+" "+t.edit}))),F(m.a,{id:"tooltip-top-start",title:"Remove",placement:"top",classes:{tooltip:t.tooltip}},void 0,F(O.a,{"aria-label":"Close",className:t.tableActionButton,onClick:function(){return e.handleDelete(p)}},void 0,F(_.a,{className:t.tableActionButtonIcon+" "+t.close}))))]});return r.a.createElement(r.a.Fragment,null,G,F(Q.a,{},void 0,F(M.Paper,{style:{padding:20,overflow:"auto",display:"flex"}},void 0,F(D.a,{name:"find_title",id:"blog-title",fullWidth:!0,placeholder:"Search Blogs",value:d.find_title,onChange:this.handleQueryChange}),F(M.Divider,{style:{width:1,height:40,margin:4}}),F(O.a,{"aria-label":"Search",onClick:this.handleSearch},void 0,K)),L,F(M.Paper,{style:{padding:0,overflow:"auto",borderRadius:4,boxShadow:"0 0 0 1px rgba(0,0,0,.2)",display:"flex"},elevation:0}),F(q.a,{tableHead:["Title","Category","Image","Published On","Added At","Is Published","Is Active","Tags","Author","Actions",""],tableData:b,pagination:u,handlePagination:this.handlePagination}),F(C.a,{color:"primary","aria-label":"Add",className:t.fab,round:"true",onClick:this.handleAdd,elevation:0},void 0,U)))}}])&&J(a.prototype,n),o&&J(a,o),t}(),Z=Object(c.b)({all:Object(T.a)(),query:Object(T.e)()}),ee=Object(i.connect)(Z,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){W(e,t,a[t])})}return e}({},I,{push:b.push})),te=Object(R.a)({key:"blogManagePage",reducer:N.a}),ae=Object(B.a)({key:"blogManagePage",saga:x.a}),ne=p()(function(e){return{button:{margin:e.spacing.unit},fab:{position:"absolute",bottom:3*e.spacing.unit,right:4*e.spacing.unit}}});t.default=Object(d.compose)(l.withRouter,ne,te,ae,ee)(X)}}]);