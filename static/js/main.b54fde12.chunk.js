(this.webpackJsonpGSIV20_SURENDER_SHARMA=this.webpackJsonpGSIV20_SURENDER_SHARMA||[]).push([[0],{44:function(e,t,a){e.exports=a(78)},49:function(e,t,a){},50:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),o=a.n(r),i=(a(49),a(10)),s=a(11),l=a(13),m=a(12),u=(a(50),a(3)),E=a(8),d=(a(55),a(24)),v=a(20),p=(a(56),a(14)),f=a.n(p),h=a(17),g=a(41),_=a.n(g).a.create({baseURL:"https://api.themoviedb.org/"}),b="f274c2a93384510e35da50f38e1e97fe",S=function(){return function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_REQUEST"}),e.next=3,_.get("3/list/1?api_key=".concat(b)).then((function(e){console.log(e),200===e.status&&t({type:"GET_MOVIE_LIST_REQUEST",payload:e.data.items})})).catch((function(e){console.log(e.response.data.message),t({type:"REQUEST_FAILURE",payload:e.response.data.message})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onsearchMovie=function(e){var t=e.target,a=t.id,c=t.value;n.setState(Object(d.a)({},a,c)),c.length<2&&n.props.GetMovieList()},n.onSearchClick=function(e){e.preventDefault(),n.props.GetMovieListBySearching(n.state.movieName)},n.state={movieName:""},n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-light bg-light justify-content-between"},this.props.searchBar&&c.a.createElement("form",{className:"form-inline"},c.a.createElement("input",{className:"form-control mr-sm-2",type:"search",id:"movieName",value:this.state.movieName,onChange:this.onsearchMovie,placeholder:"Search","aria-label":"Search"}),c.a.createElement("button",{onClick:this.onSearchClick,className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search")),c.a.createElement(v.a,{to:"#",className:"navbar-brand"},this.props.title),c.a.createElement(v.a,{to:"".concat("/GSIV20_SURENDER_SHARMA","/"),className:"navbar-brand"},"Home")))}}]),a}(n.Component),N=Object(E.c)((function(e){return console.log(e),{movieList:e.movie.movieList}}),(function(e){return{GetMovieList:function(){return e(S())},GetMovieListBySearching:function(t){return e(function(e){return function(){var t=Object(h.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"FETCH_REQUEST"}),t.next=3,_.get("3/search/movie?api_key=".concat(b,"&language=en-US&query=").concat(e)).then((function(e){console.log(e),200===e.status&&a({type:"GET_MOVIE_LIST_REQUEST",payload:e.data.results})})).catch((function(e){console.log(e.response.data.message),a({type:"REQUEST_FAILURE",payload:e.response.data.message})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(y),O=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.GetMovieDetailById(sessionStorage.getItem("movieId"))}},{key:"render",value:function(){console.log(this.props.movieList);var e=this.props.movieDetail;return c.a.createElement("div",null,c.a.createElement("div",{className:"container-fluid"},c.a.createElement(N,{searchBar:!1,title:"Movie Details"}),e&&c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"main_card"},c.a.createElement("div",{className:"card_right"},c.a.createElement("div",{className:"img_container"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w440_and_h660_face".concat(e.poster_path),alt:""}))),c.a.createElement("div",{className:"card_datails"},c.a.createElement("h1",null,e.title," (",e.vote_average,")"),c.a.createElement("div",{className:"card_cat"},c.a.createElement("p",{className:"genre"},e.release_date," | ",e.runtime," | Director ")),c.a.createElement("p",{className:"genre1"},"Cast: Actor1,Actor3,Actor3 "),c.a.createElement("p",{className:"disc"},e.overview))))))}}]),a}(n.Component),R=Object(E.c)((function(e){return console.log(e),{movieDetail:e.movie.movieDetail}}),(function(e){return{GetMovieDetailById:function(t){return e(function(e){return function(){var t=Object(h.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"FETCH_REQUEST"}),t.next=3,_.get("3/movie/".concat(e,"?api_key=").concat(b,"&language=en-US")).then((function(e){console.log(e),200===e.status&&a({type:"GET_MOVIE_DETAIL_REQUEST",payload:e.data})})).catch((function(e){console.log(e.response.data.message),a({type:"REQUEST_FAILURE",payload:e.response.data.message})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(O),j=(a(76),a(16)),I=a(43),k=a(6),L=a(39),T=a(18),U=a(21),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoader:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_REQUEST":return Object(U.a)({},e,{isLoader:!0});case"GET_MOVIE_LIST_REQUEST":return Object(U.a)({},e,{movieList:t.payload,isLoader:!1});case"GET_MOVIE_DETAIL_REQUEST":return Object(U.a)({},e,{movieDetail:t.payload});case"REQUEST_FAILURE":return Object(U.a)({},e,{error:t.payload,isLoader:!1});default:return e}},w=function(e){return Object(j.c)({movie:M,router:Object(T.b)(e)})},A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.d,D=Object(k.a)();console.log(D);var C=Object(j.e)(w(D),A(Object(j.a)(I.a,Object(L.a)(D)))),G=function(e){return c.a.createElement("div",{className:"movie-card",key:e.id,onClick:function(){return e.onClick(e.id)}},c.a.createElement("div",{className:"movie-header ",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/w440_and_h660_face'.concat(e.image_path,'")')}}),c.a.createElement("div",{className:"movie-content"},c.a.createElement("div",{className:"movie-content-header"},c.a.createElement(v.a,{style:{display:"inline"},to:"#"},c.a.createElement("h3",{className:"movie-title"},e.title)),c.a.createElement("div",{className:"imax-logo"},e.rating)),c.a.createElement("div",{className:"movie-info"},c.a.createElement("div",{className:"info-section"},c.a.createElement("span",null,e.description.substring(0,80),e.description.length>80&&c.a.createElement("span",null,"....."))))))},H=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({loader:!0}),e.next=3,n.props.getMovieList();case 3:n.setState({loader:!1});case 4:case"end":return e.stop()}}),e)}))),n.onClickDetail=function(e){console.log(e),sessionStorage.setItem("movieId",e),D.push("/GSIV20_SURENDER_SHARMA/movie")},n.state={loader:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;console.log(this.props.movieList);var t=this.props.movieList;return this.state.loader?c.a.createElement("div",{className:"loader"}):c.a.createElement("div",null,c.a.createElement("div",{className:"container-fluid"},c.a.createElement(N,{searchBar:!0}),c.a.createElement("div",{className:"container1"},t&&t.map((function(t,a){return c.a.createElement("span",{key:t.id},c.a.createElement(G,{id:t.id,image_path:t.poster_path,title:t.title,rating:t.vote_average,description:t.overview,onClick:e.onClickDetail}))})))))}}]),a}(n.Component),V=Object(E.c)((function(e){return console.log(e),{movieList:e.movie.movieList}}),(function(e){return{getMovieList:function(){return e(S())}}}))(H),x=(a(77),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-2"},c.a.createElement("div",{className:"card"},"Notification")),c.a.createElement("div",{className:"col-md-7"},"   ",c.a.createElement("div",{className:"card"},"Notification")),c.a.createElement("div",{className:"col-md-3"},"   ",c.a.createElement("div",{className:"card"},"Notification"))),"Home")}}]),a}(n.Component)),Q=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return console.log("/GSIV20_SURENDER_SHARMA"),c.a.createElement(n.Fragment,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"".concat("/GSIV20_SURENDER_SHARMA","/movie")},c.a.createElement(R,null)),c.a.createElement(u.a,{exact:!0,path:"".concat("/GSIV20_SURENDER_SHARMA","/home")},c.a.createElement(x,null)),c.a.createElement(u.a,{exact:!0,path:"".concat("/GSIV20_SURENDER_SHARMA","/")},c.a.createElement(V,null))))}}]),a}(n.Component),B=Object(E.c)((function(e){return{}}),(function(e){return{}}))(Q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(E.a,{store:C},c.a.createElement(T.a,{history:D},c.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.b54fde12.chunk.js.map