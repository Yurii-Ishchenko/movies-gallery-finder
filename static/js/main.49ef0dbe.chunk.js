(this["webpackJsonpmovies-gallery-finder"]=this["webpackJsonpmovies-gallery-finder"]||[]).push([[2],{18:function(e,t,n){"use strict";n.d(t,"n",(function(){return E})),n.d(t,"o",(function(){return r})),n.d(t,"m",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"h",(function(){return O})),n.d(t,"i",(function(){return d})),n.d(t,"g",(function(){return C})),n.d(t,"k",(function(){return I})),n.d(t,"l",(function(){return S})),n.d(t,"j",(function(){return R})),n.d(t,"q",(function(){return T})),n.d(t,"p",(function(){return v}));var _=n(2),E=function(){return{type:_.a.FETCH_POPULAR_MOVIE_REQUEST}},r=function(e){return{type:_.a.FETCH_POPULAR_MOVIE_SUCCESS,payload:e}},a=function(e){return{type:_.a.FETCH_POPULAR_MOVIE_ERROR,payload:e}},c=function(){return{type:_.a.FETCH_MOVIE_BY_ID_REQUEST}},o=function(e){return{type:_.a.FETCH_MOVIE_BY_ID_SUCCESS,payload:e}},i=function(e){return{type:_.a.FETCH_MOVIE_BY_ID_REQUEST,payload:e}},u=function(){return{type:_.a.FETCH_MOVIE_BY_NAME_REQUEST}},s=function(e){return{type:_.a.FETCH_MOVIE_BY_NAME_SUCCESS,payload:e}},l=function(e){return{type:_.a.FETCH_MOVIE_BY_NAME_ERROR,payload:e}},O=function(){return{type:_.a.FETCH_MOVIE_CAST_BY_ID_REQUEST}},d=function(e){return{type:_.a.FETCH_MOVIE_CAST_BY_ID_SUCCESS,payload:e}},C=function(e){return{type:_.a.FETCH_MOVIE_CAST_BY_ID_ERROR,payload:e}},I=function(){return{type:_.a.FETCH_MOVIE_REVIEWS_BY_ID_REQUEST}},S=function(e){return{type:_.a.FETCH_MOVIE_REVIEWS_BY_ID_SUCCESS,payload:e}},R=function(e){return{type:_.a.FETCH_MOVIE_REVIEWS_BY_ID_ERROR,payload:e}},T=function(e){return{type:_.a.NOT_FOUND,payload:e}},v=function(e){return{type:_.a.GET_SEARCH_VALUE,payload:e}}},2:function(e,t,n){"use strict";t.a={FETCH_POPULAR_MOVIE_REQUEST:"movies/fetchPopularMoviesRequest",FETCH_POPULAR_MOVIE_SUCCESS:"movies/fetchPopularMoviesSuccess",FETCH_POPULAR_MOVIE_ERROR:"movies/fetchPopularMoviesError",FETCH_MOVIE_BY_ID_REQUEST:"movies/fetchMovieByIdRequest",FETCH_MOVIE_BY_ID_SUCCESS:"movies/fetchMovieByIdSuccess",FETCH_MOVIE_BY_ID_ERROR:"movies/fetchMovieByIdError",FETCH_MOVIE_BY_NAME_REQUEST:"movies/fetchMovieByNameRequest",FETCH_MOVIE_BY_NAME_SUCCESS:"movies/fetchMovieByNameSuccess",FETCH_MOVIE_BY_NAME_ERROR:"movies/fetchMovieByNameError",FETCH_MOVIE_CAST_BY_ID_REQUEST:"movies/fetchMovieCastByIdRequest",FETCH_MOVIE_CAST_BY_ID_SUCCESS:"movies/fetchMovieCastByIdSuccess",FETCH_MOVIE_CAST_BY_ID_ERROR:"movies/fetchMovieCastByIdError",FETCH_MOVIE_REVIEWS_BY_ID_REQUEST:"movies/fetchMovieReviewsByIdRequest",FETCH_MOVIE_REVIEWS_BY_ID_SUCCESS:"movies/fetchMovieReviewsByIdSuccess",FETCH_MOVIE_REVIEWS_BY_ID_ERROR:"movies/fetchMovieReviewsByIdError",NOT_FOUND:"movies/notFoundPageAction",GET_SEARCH_VALUE:"movies/getSearchValueAction"}},59:function(e,t,n){"use strict";n.r(t);var _=n(0),E=n.n(_),r=n(11),a=n.n(r),c=n(13),o=n(6),i=n(15),u=n(23),s=n.n(u),l=n(25),O=(n(53),n(16)),d=n(18),C=n(3),I=Object(i.a)({container:{display:"flex",alignItems:"center",backgroundColor:"#1f1b2e",height:70,paddingLeft:55},link:{fontSize:20,color:"white",marginLeft:20,textDecoration:"none"},activeLink:{color:"red"}});function S(){var e=I(),t=Object(O.b)();return Object(C.jsx)("header",{children:Object(C.jsxs)("div",{className:e.container,children:[Object(C.jsx)(c.c,{exact:!0,className:e.link,activeClassName:e.activeLink,to:"/",children:"Home"}),Object(C.jsx)(c.c,{className:e.link,activeClassName:e.activeLink,to:"/movies",onClick:function(){t(Object(d.f)([])),t(Object(d.p)(""))},children:"Movies"})]})})}var R=Object(_.lazy)((function(){return n.e(1).then(n.bind(null,107))})),T=Object(_.lazy)((function(){return Promise.all([n.e(8),n.e(4)]).then(n.bind(null,110))})),v=Object(_.lazy)((function(){return Promise.all([n.e(9),n.e(3)]).then(n.bind(null,111))})),f=Object(i.a)({container:{backgroundColor:"#252433"},loading:{textAlign:"center"}});function M(){var e=f();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(S,{}),Object(C.jsx)("div",{className:e.container,children:Object(C.jsxs)(_.Suspense,{fallback:Object(C.jsx)("div",{className:e.loading,children:Object(C.jsx)(s.a,{type:"Oval",color:"#00BFFF",height:100,width:100})}),children:[Object(C.jsx)("hr",{style:{margin:0}}),Object(C.jsxs)(o.d,{children:[Object(C.jsx)(o.b,{exact:!0,path:"/",children:Object(C.jsx)(R,{})}),Object(C.jsx)(o.b,{path:"/movies/:movieId",children:Object(C.jsx)(v,{})}),Object(C.jsx)(o.b,{path:"/movies",children:Object(C.jsx)(T,{})}),Object(C.jsx)(o.a,{to:"/"})]})]})}),Object(C.jsx)(l.a,{})]})}var h=n(14),y=n(27),V=n(2),p=Object(h.combineReducers)({popularMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V.a.FETCH_POPULAR_MOVIE_SUCCESS:return t.payload;default:return e}},movieById:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V.a.FETCH_MOVIE_BY_ID_SUCCESS:return t.payload;default:return e}},moviesByName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V.a.FETCH_MOVIE_BY_NAME_SUCCESS:return t.payload;default:return e}},movieCastById:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V.a.FETCH_MOVIE_CAST_BY_ID_SUCCESS:return t.payload;default:return e}},movieReviewsById:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V.a.FETCH_MOVIE_REVIEWS_BY_ID_SUCCESS:return t.payload;default:return e}},notFound:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V.a.NOT_FOUND:return t.payload;default:return e}},searchValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V.a.GET_SEARCH_VALUE:return t.payload;default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V.a.FETCH_POPULAR_MOVIE_REQUEST:return!0;case V.a.FETCH_POPULAR_MOVIE_SUCCESS:case V.a.FETCH_POPULAR_MOVIE_ERROR:return!1;case V.a.FETCH_MOVIE_BY_ID_REQUEST:return!0;case V.a.FETCH_MOVIE_BY_ID_SUCCESS:case V.a.FETCH_MOVIE_BY_ID_ERROR:return!1;case V.a.FETCH_MOVIE_BY_NAME_REQUEST:return!0;case V.a.FETCH_MOVIE_BY_NAME_SUCCESS:case V.a.FETCH_MOVIE_BY_NAME_ERROR:return!1;case V.a.FETCH_MOVIE_CAST_BY_ID_REQUEST:return!0;case V.a.FETCH_MOVIE_CAST_BY_ID_SUCCESS:case V.a.FETCH_MOVIE_CAST_BY_ID_ERROR:return!1;case V.a.FETCH_MOVIE_REVIEWS_BY_ID_REQUEST:return!0;case V.a.FETCH_MOVIE_REVIEWS_BY_ID_SUCCESS:case V.a.FETCH_MOVIE_REVIEWS_BY_ID_ERROR:return!1;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V.a.FETCH_POPULAR_MOVIE_REQUEST:return null;case V.a.FETCH_POPULAR_MOVIE_ERROR:return t.payload;case V.a.FETCH_MOVIE_BY_ID_REQUEST:return null;case V.a.FETCH_MOVIE_BY_ID_ERROR:return t.payload;case V.a.FETCH_MOVIE_BY_NAME_REQUEST:return null;case V.a.FETCH_MOVIE_BY_NAME_ERROR:return t.payload;case V.a.FETCH_MOVIE_CAST_BY_ID_REQUEST:return null;case V.a.FETCH_MOVIE_CAST_BY_ID_ERROR:return t.payload;case V.a.FETCH_MOVIE_REVIEWS_BY_ID_REQUEST:return null;case V.a.FETCH_MOVIE_REVIEWS_BY_ID_ERROR:return t.payload;default:return e}}}),F=Object(h.createStore)(p,Object(y.composeWithDevTools)(Object(h.applyMiddleware)((function(e){var t=e.dispatch,n=e.getState;return function(e){return function(_){return"function"===typeof _?_(t,n):e(_)}}}))));a.a.render(Object(C.jsx)(E.a.StrictMode,{children:Object(C.jsx)(c.a,{children:Object(C.jsx)(O.a,{store:F,children:Object(C.jsx)(M,{})})})}),document.getElementById("root"))}},[[59,6,7]]]);
//# sourceMappingURL=main.49ef0dbe.chunk.js.map