(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(45),i=n.n(o),c=(n(59),n(3)),l=n(4),u=n(6),s=n(5),p=n(7),f=n(122),h=n(123),m=n(119),E=n(46),d=(n(61),n(121)),O=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).logoutClick=function(e){n.props.logoutFnc()},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(d.a,{className:"active",to:"/",exact:!0},"Home"))))}}]),t}(r.Component),g=n(14),v=n(120),b={LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGIN_FAILURE:"LOGIN_FAILURE",LOGOUT_REQUEST:"LOGOUT_REQUEST",FECTH_PROFILE_SUCCESS:"FECTH_PROFILE_SUCCESS",FETCH_PROFILE_FALURE:"FETCH_PROFILE_FALURE",FILTER_PROFILE_SUCCESS:"FILTER_PROFILE_SUCCESS",FILTER_PROFILE_FAILURE:"FILTER_PROFILE_FAILURE",QUERY_PROFILE_SUCCESS:"QUERY_PROFILE_SUCCESS",QUERY_PROFILE_FAILURE:"QUERY_PROFILE_FAILURE"},S={login:function(e,t){return function(n,r){if("admin"===e&&"123456"===t){var a={username:e,userRole:"SuperAdmin",jwtToken:"thangml"};sessionStorage.setItem("userInfo",JSON.stringify(a)),n({type:b.LOGIN_SUCCESS,data:a})}else if("user"===e&&"123456"===t){var o={username:e,userRole:"User",jwtToken:"thangmc"};sessionStorage.setItem("userInfo",JSON.stringify(o)),n({type:b.LOGIN_SUCCESS,data:o})}else n({type:b.LOGIN_FAILURE,data:{Unauthorize:["Invalid Username or Password"]}})}},logout:function(){return function(e,t){sessionStorage.removeItem("userInfo");e({type:b.LOGOUT_REQUEST,data:{username:"",userRole:"",isRegistered:!1,jwtToken:""}})}}};var j=function(e){function t(e,n){var r;return Object(c.a)(this,t),(r=Object(u.a)(this,Object(s.a)(t).call(this,e))).logoutRequest=function(e){r.props.logout()},r.state={redirectToReferrer:!1},r}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.redirectToReferrer?a.a.createElement(v.a,{to:"/login"}):a.a.createElement("div",null,a.a.createElement(O,{logoutFnc:this.logoutRequest}),this.props.children)}}]),t}(r.Component);var C=Object(g.b)(function(e){return{user:e.user}},S)(j),R=n(52),L=(n(68),function(e){function t(e){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(R.a,{data:this.props.data,columns:this.props.columns,getTrProps:this.props.getTrProps})}}]),t}(r.Component)),y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(E.a)({},e.target.id,e.target.value))},n.handleClick=function(e){e.preventDefault();var t=n.state,r=t.name,a=t.age;n.props.submitForm({name:r,age:a})},n.onRowClick=function(e,t,r,a){return{onClick:function(e){n.props.rowClick(t)}}},n.state={name:"",age:null},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(C,null,a.a.createElement("div",null,a.a.createElement("input",{id:"name",onChange:this.handleChange}),a.a.createElement("input",{id:"age",onChange:this.handleChange}),a.a.createElement("button",{onClick:this.handleClick},"Filter")),a.a.createElement(L,{data:this.props.profilesList,columns:this.props.columns,getTrProps:this.onRowClick}))}}]),t}(r.Component),F=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Loading ..."))}}]),t}(a.a.Component),w=n(12),U=n.n(w),_=n(17),k=n(15),I=Object(k.a)(),T=n(49),P=n.n(T),A="http://localhost:8081";function N(e,t){return x.apply(this,arguments)}function x(){return(x=Object(_.a)(U.a.mark(function e(t,n){var r,a,o;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=3;break}throw new Error("input url not found!");case 3:return r={"Content-Type":"application/json"},n&&"token"in n&&(r.Authorization=n.token),a={},n&&"body"in n&&(a=n.body),o={method:"get",url:"".concat(A,"/").concat(t),headers:r,withCredentials:!1,data:a},e.next=10,D(o);case 10:return e.abrupt("return",e.sent);case 13:throw e.prev=13,e.t0=e.catch(0),e.t0;case 16:case"end":return e.stop()}},e,this,[[0,13]])}))).apply(this,arguments)}function D(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(_.a)(U.a.mark(function e(t){var n;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P()(t);case 3:if(200!==(n=e.sent).status&&201!==n.status){e.next=8;break}if(!n.data.error){e.next=7;break}throw n.data.message;case 7:return e.abrupt("return",n.data);case 8:throw new Error("".concat(n.statusText));case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}},e,this,[[0,11]])}))).apply(this,arguments)}var H=n(50),G=n.n(H),Y=n(22),J=n.n(Y),q={fetchProfile:function(e){return function(){var t=Object(_.a)(U.a.mark(function t(n){var r,a,o,i;return U.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(e){n({type:b.FETCH_PROFILE_FALURE,data:e})},r=function(e){n({type:b.FECTH_PROFILE_SUCCESS,data:e.data})},t.prev=2,o=W("members"),e&&!J()(e)&&(o=W("members",10,1,e)),t.next=7,N(o);case 7:return i=t.sent,t.abrupt("return",r(i));case 11:return t.prev=11,t.t0=t.catch(2),t.abrupt("return",a(t.t0));case 14:case"end":return t.stop()}},t,this,[[2,11]])}));return function(e){return t.apply(this,arguments)}}()},queryProfile:function(e){return function(){var t=Object(_.a)(U.a.mark(function t(n){var r,a,o;return U.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(e){return n({type:b.QUERY_PROFILE_FAILURE,data:e}),!1},r=function(e){return console.log(e,"resppp"),n({type:b.QUERY_PROFILE_SUCCESS,data:e}),!0},t.prev=2,t.next=5,N("members/".concat(e));case 5:return o=t.sent,console.log(o),t.abrupt("return",r(o));case 10:return t.prev=10,t.t0=t.catch(2),t.abrupt("return",a(t.t0));case 13:case"end":return t.stop()}},t,this,[[2,10]])}));return function(e){return t.apply(this,arguments)}}()}};var W=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o="".concat(e,"?page=").concat(n,"&limit=").concat(t);if(r&&!J()(r)){for(var i in r)r[i]||delete r[i];o+="&"+G.a.stringify(r)}return a&&!J()(a)&&(o+="&_sort=".concat("DESC"===a.order?"-":"").concat(a.key)),o},z=function(e){function t(e,n){var r;return Object(c.a)(this,t),(r=Object(u.a)(this,Object(s.a)(t).call(this,e))).onFilter=function(e){var t=e.name,n=e.age,a={};a.Name=t,a.Age=n,r.props.fetchProfile(a)},r.goToProfileDetail=function(e){I.push("/profile/".concat(e.original.id))},r.state={userInfo:JSON.parse(sessionStorage.getItem("userInfo"))||{},profilesList:[]},r.columns=[{Header:"Image",accessor:"image",Cell:function(e){return a.a.createElement("div",null,a.a.createElement("img",{height:34,src:"http://localhost:8081/images/".concat(e.original.image)}))}},{Header:"Name",accessor:"name"},{Header:"Age",id:"age",accessor:function(e){return e.age}}],r}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchProfile()}},{key:"render",value:function(){return this.state.profilesList.length?a.a.createElement(y,{submitForm:this.onFilter,profilesList:this.state.profilesList,columns:this.columns,rowClick:this.goToProfileDetail}):a.a.createElement(F,null)}}],[{key:"getDerivedStateFromProps",value:function(e){return e.profiles.profilesList?{profilesList:e.profiles.profilesList}:null}}]),t}(r.Component);var B=[{path:"/",title:"Home",breadcrumb:"Home",breadcrumb_link:!0,exact:!0,component:Object(g.b)(function(e){return{profiles:e.profiles}},q)(z),requireAuth:!0}],M=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Sorry, this page is unavailable"))}}]),t}(r.Component),$=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.profileDetail;return a.a.createElement(C,null,a.a.createElement("div",{className:"container"},a.a.createElement("table",{className:"table table-bordered"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Avatar"),a.a.createElement("th",null,"CEO Name"),a.a.createElement("th",null,"Age"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("img",{src:"http://localhost:8081/images/".concat(e.image)})),a.a.createElement("td",null,e.name),a.a.createElement("td",null,e.age))))))}}]),t}(r.Component),K=function(e){function t(e,n){var r;return Object(c.a)(this,t),(r=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={profileDetail:{}},r}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.match.params&&"profileId"in this.props.match.params?this.props.queryProfile(this.props.match.params.profileId):I.push("/")}},{key:"render",value:function(){return a.a.createElement($,{profileDetail:this.state.profileDetail})}}],[{key:"getDerivedStateFromProps",value:function(e){return console.log(e),e.profile.profileDetail?{profileDetail:e.profile.profileDetail}:null}}]),t}(r.Component);var V=Object(g.b)(function(e){return{profile:e.profiles}},q)(K),X=(n(53),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(f.a,{history:I},a.a.createElement(h.a,null,B.map(function(e,t){return a.a.createElement(m.a,{key:t,path:e.path,component:e.component,exact:e.exact})}),a.a.createElement(m.a,{path:"/profile/:profileId",component:V,exact:!0}),a.a.createElement(m.a,{component:M})))}}]),t}(r.Component)),Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var te=n(16),ne=n(51),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=JSON.parse(JSON.stringify(e));switch(t.type){case b.START_QUERY:return n;case b.LOGIN_SUCCESS:return n.userInfo=t.data,n;case b.LOGIN_FAILURE:return n.errorText=t.data,n;case b.LOGOUT_REQUEST:return n.userInfo=t.data,n;default:return n}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=JSON.parse(JSON.stringify(e));switch(t.type){case b.START_QUERY:return n;case b.FECTH_PROFILE_SUCCESS:return n.profilesList=t.data,n;case b.FETCH_PROFILE_FALURE:return n.errorText=t.data,n;case b.QUERY_PROFILE_SUCCESS:return n.profileDetail=t.data,n;case b.QUERY_PROFILE_FAILURE:return n.errorText=t.data,n;default:return n}},oe=Object(te.c)({user:re,profiles:ae}),ie=Object(te.d)(oe,Object(te.a)(ne.a));i.a.render(a.a.createElement(g.a,{store:ie},a.a.createElement(X,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");Z?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ee(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):ee(e)})}}()},54:function(e,t,n){e.exports=n(118)},59:function(e,t,n){},61:function(e,t,n){}},[[54,2,1]]]);
//# sourceMappingURL=main.0ca907ca.chunk.js.map