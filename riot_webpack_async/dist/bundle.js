webpackJsonp([1],{0:/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function(t,e,o){(function(t){"use strict";o(/*! ./RiotControl.js */116),o(/*! ./stores.js */87),o(/*! ./riotTags.js */117),t.mount("app")}).call(e,o(/*! riot */29))},87:/*!***********************!*\
  !*** ./src/stores.js ***!
  \***********************/
function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(/*! ./store/blogstore */118),s=n(i),a={blog:s["default"]};e["default"]=a},116:/*!****************************!*\
  !*** ./src/RiotControl.js ***!
  \****************************/
function(t,e,o){(function(t){"use strict";var e=["on","one","off","trigger"],o={_stores:[],addStore:function(t){this._stores.push(t)}};e.forEach(function(t){o[t]=function(){for(var e=arguments.length,o=Array(e),n=0;n<e;n++)o[n]=arguments[n];this._stores.forEach(function(e){return e[t].apply(null,o)})}}),t.control=o,t.SE={POSTS_CHANGED:"se_posts_changed"},t.VE={RESET_DATA:"ve_reset_data",LIKE_POST:"ve_like_post",LOAD_POSTS:"ve_load_posts"},t.mixin("controlMixin",{onControl:function(e,o){t.control.on(e,o),this.on("unmount",function(){return t.control.off(e,o)})}})}).call(e,o(/*! riot */29))},117:/*!*************************!*\
  !*** ./src/riotTags.js ***!
  \*************************/
function(t,e,o){"use strict";o(/*! ./component/postcell.html */308),o(/*! ./view/posts-view.html */311),o(/*! ./view/categories-view.html */309),o(/*! ./view/detail-view.html */310),o(/*! ./app.html */307)},118:/*!********************************!*\
  !*** ./src/store/blogstore.js ***!
  \********************************/
function(t,e,o){(function(t){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n="riot-webpack-demo",i=function(){function e(){o(this,e),t.observable(this);var i=window.localStorage.getItem(n);i?this._posts=i&&JSON.parse(i)||[]:this.initData()}return e.prototype.getPostById=function(t){return this._posts.filter(function(e){return e.postId===t})[0]},e.prototype.initData=function(){var t=[{postId:1,title:"Best xbox games",content:"Halo, GOW",category:"collection",likes:10},{postId:2,title:"Best ps games",content:"Uncharted, The Last of US",category:"collection",likes:20},{postId:3,title:"Best wii games",content:"Zelda, Mario",category:"collection",likes:16},{postId:4,title:"Review of Halo",content:"yes, cortana",category:"review",likes:11},{postId:5,title:"Review of Titanfall",content:"where is the local game?",category:"review",likes:7},{postId:6,title:"Review of portal",content:"I don't blame you",category:"review",likes:40}];this._posts=t,this.saveToStorage()},e.prototype.saveToStorage=function(){window.localStorage.setItem(n,JSON.stringify(this._posts))},e}(),s=new i;s.on(t.VE.LOAD_POSTS,function(){s.trigger(t.SE.POSTS_CHANGED,s._posts)}),s.on(t.VE.RESET_DATA,function(){s.initData(),s.trigger(t.SE.POSTS_CHANGED,s._posts)}),s.on(t.VE.LIKE_POST,function(e){s._posts.forEach(function(t){t.postId===e&&(t.likes=t.likes+1)}),s.saveToStorage(),s.trigger(t.SE.POSTS_CHANGED,s._posts)}),t.control.addStore(s),e["default"]=s}).call(e,o(/*! riot */29))},307:/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
function(t,e,o){var n=o(/*! riot */29);n.tag2("app",'<section> <header> <nav> <ul> <li><a href="#posts">Posts</a></li> <li><a href="#categories">Categories</a></li> </ul> </nav> </header> <article> <div id="mainview"></div> </article> <footer> <nav> <a onclick="{resetData}">Reset Data</a> </nav> </footer> </section>',"","",function(t){"use strict";var e=this;this._currentView=null,this.resetData=function(){n.control.trigger(n.VE.RESET_DATA)},this.loadView=function(t,o){e._currentView&&e._currentView.unmount(!0),console.log(t),e._currentView=n.mount("div#mainview",t,{data:o})[0]},this.studyRoute=function(t,o){switch(t){case"categories":e.loadView("categories-view");break;case"detail":e.loadView("detail-view",o);break;case"posts":e.loadView("posts-view");break;default:e.loadView("posts-view")}},n.route(this.studyRoute),this.on("mount",function(){n.route.start(!0)})})},308:/*!*************************************!*\
  !*** ./src/component/postcell.html ***!
  \*************************************/
function(t,e,o){var n=o(/*! riot */29);n.tag2("postcell",'<div> <span>Id: {opts.data.postId}</span> <span>Title: <a href="#detail/{opts.data.postId}">{opts.data.title}</a></span> <span>{opts.data.likes} Likes</span> <button onclick="{likePost}">Like</button> </div>',"","",function(t){"use strict";this.likePost=function(){n.control.trigger(n.VE.LIKE_POST,t.data.postId)}})},309:/*!***************************************!*\
  !*** ./src/view/categories-view.html ***!
  \***************************************/
function(t,e,o){var n=o(/*! riot */29);n.tag2("categories-view",'<div each="{category, posts in _postsInCategories}"> <h3>{category}</h3> <postcell each="{posts}" data="{this}"></postcell> <hr> </div>',"","",function(t){"use strict";var e=this;this.mixin("controlMixin"),this._postsInCategories={},this.on("mount",function(){n.control.trigger(n.VE.LOAD_POSTS)}),this.onControl(n.SE.POSTS_CHANGED,function(t){e._postsInCategories=t.reduce(function(t,e){return t[e.category]=t[e.category]||[],t[e.category].push(e),t},{}),e.update()})})},310:/*!***********************************!*\
  !*** ./src/view/detail-view.html ***!
  \***********************************/
function(t,e,o){var n=o(/*! riot */29);n.tag2("detail-view",'<h2>{_post.title}</h2> <p>{_post.content}</p> <p ondblclick="{countWord}">{_post.likes} Likes</p> <p if="{_wordsCount}">{_wordsCount} words</p> <a if="{opts.data > 1}" href="#detail/{opts.data - 1}">Previous Post</a> | <a if="{opts.data < _total}" href="#detail/{opts.data - -1}">Next Post</a>',"","",function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}function i(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,o){function n(i,s){try{var a=e[i](s),r=a.value}catch(c){return void o(c)}return a.done?void t(r):Promise.resolve(r).then(function(t){return n("next",t)},function(t){return n("throw",t)})}return n("next")})}}var s=this,a=o(/*! ../stores */87),r=e(a);this.mixin("controlMixin"),this.onControl(n.SE.POSTS_CHANGED,function(t){s.readData()}),this.readData=function(){s._post=r["default"].blog.getPostById(Number(t.data)),s._total=r["default"].blog._posts.length,s.update()},this.sleep=function(){var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0];return new Promise(function(e){return setTimeout(e,t)})},this.countWord=i(regeneratorRuntime.mark(function c(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.sleep(500);case 2:return s._wordsCount=s._post.content.split(" ").length,t.next=5,s.sleep(500);case 5:s.update();case 6:case"end":return t.stop()}},c,s)})),this.readData()})},311:/*!**********************************!*\
  !*** ./src/view/posts-view.html ***!
  \**********************************/
function(t,e,o){var n=o(/*! riot */29);n.tag2("posts-view",'<postcell each="{_posts}" data="{this}"></postcell>',"","",function(t){"use strict";var e=this;this.mixin("controlMixin"),this._posts=[],this.on("mount",function(){n.control.trigger(n.VE.LOAD_POSTS)}),this.onControl(n.SE.POSTS_CHANGED,function(t){e._posts=t,e.update()})})}});
//# sourceMappingURL=bundle.js.map