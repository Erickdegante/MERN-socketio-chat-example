webpackHotUpdate(0,{52:function(e,t,n){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),i=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(i),c=function(e){function t(e){l(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r="";return e.hasOwnProperty("forall")||(r=window.localStorage.getItem("userid")),n.state={userid:r,posts:[]},n}return r(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/getmyposts",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state)}).then(function(e){return e.json()}).then(function(t){e.setState({posts:t.posts})})}},{key:"postlitsing",value:function(e){return e.map(function(e){return u.default.createElement("div",{className:"well",key:e._id},u.default.createElement("h4",{className:"media-heading"},e.title),u.default.createElement("hr",null),u.default.createElement("p",{className:"text-right"},"By :"),u.default.createElement("p",{dangerouslySetInnerHTML:{__html:e.body}}),u.default.createElement("hr",null),u.default.createElement("ul",{className:"list-inline list-unstyled"},u.default.createElement("li",null,u.default.createElement("span",null,u.default.createElement("i",{className:"glyphicon glyphicon-calendar"}),new Date(e.date).toLocaleString("en-US",{hour:"numeric",day:"2-digit",month:"numeric",year:"numeric",hour12:!0,minute:"numeric"})," ")),u.default.createElement("li",null,"|"),u.default.createElement("span",null,u.default.createElement("i",{className:"glyphicon glyphicon-comment"})," 0 comments"),u.default.createElement("li",null,u.default.createElement("span",{className:"glyphicon glyphicon-tags"}," "),"Tags : ",e.tags)))})}},{key:"render",value:function(){return u.default.createElement("div",null," ",this.postlitsing(this.state.posts)," ")}}]),t}(i.Component);t.default=c}});