webpackHotUpdate(0,{95:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),r=a(0),u=n(r),c=a(96),f=n(c),d=function(t){function e(t){s(this,e);var a=l(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));a.postId="";var n=!1,o="Save";return t.match.params.hasOwnProperty("id")&&(n=!0,a.postId=t.match.params.id,o="Update"),a.state={content:"",title:"",tags:"",userid:window.localStorage.getItem("userid"),flag:"s",edit:n,savebutton:o,postid:a.postId,isnotify:"dn",alertmessage:""},a.onChange=a.onChange.bind(a),a.titlechange=a.titlechange.bind(a),a.tagchange=a.tagchange.bind(a),a.cancelPost=a.cancelPost.bind(a),a.submitPost=a.submitPost.bind(a),a.onInstanceReady=a.onInstanceReady.bind(a),a}return o(e,t),i(e,[{key:"setDatainform",value:function(t){this.refs.posttitle.value=t[0].title,this.refs.tags.value=t[0].tags,this.setState({flag:t[0].flag})}},{key:"onInstanceReady",value:function(t){var e=this;this.state.edit&&fetch("/api/getmyposts",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userid:this.state.userid,postid:this.postId})}).then(function(t){return t.json()}).then(function(a){e.setDatainform(a.posts),t.editor.setData(a.posts[0].body)})}},{key:"submitPost",value:function(t){if(""!==this.state.content&&""!==this.refs.posttitle.value){var e={content:this.state.content,title:this.refs.posttitle.value,tags:this.refs.tags.value,userid:this.state.userid,flag:t,postid:this.postId};this.callNewUserApi(e)}else this.setState({alertmessage:"Please fill Title and Content!!",isnotify:"alert alert-danger bd"},function(){})}},{key:"callNewUserApi",value:function(t){var e=this;fetch("/api/savepost",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(t){return t.json()}).then(function(t){e.setState({alertmessage:t.message,isnotify:"alert alert-success bd"})})}},{key:"cancelPost",value:function(){this.refs.posttitle.value="",this.refs.tags.value="",this.refs.posttitle.value="",this.refs.tags.value="",this.state.edit&&this.props.history.push("/posts/listing")}},{key:"tagchange",value:function(t){this.setState({tags:t})}},{key:"titlechange",value:function(t){this.setState({title:t})}},{key:"onChange",value:function(t){var e=t.editor.getData();this.setState({content:e})}},{key:"onBlur",value:function(t){}},{key:"afterPaste",value:function(t){}},{key:"render",value:function(){var t=this;return u.default.createElement("div",null,u.default.createElement("div",{className:" "+this.state.isnotify+" "},u.default.createElement("strong",null,this.state.alertmessage)),u.default.createElement("div",{className:"panel panel-default"},u.default.createElement("div",{className:"panel-heading clearfix"},u.default.createElement("h3",{className:"panel-title pull-left"},"New Post")),u.default.createElement("div",{className:"panel-body"},u.default.createElement("div",{className:"form-group"},u.default.createElement("label",null,"Post Title"),u.default.createElement("input",{type:"input",ref:"posttitle",onChange:function(e){t.titlechange(e.target.value)},className:"form-control",placeholder:"Title"})),u.default.createElement("div",{className:"form-group"},u.default.createElement("label",null,"Content"),u.default.createElement(f.default,{ref:"editor",activeClass:"p10",config:{language:"en",isScriptLoaded:!0,toolbarCanCollapse:!1},content:this.state.content,placeholder:"Trying ...",events:{blur:this.onBlur,afterPaste:this.afterPaste,change:this.onChange,instanceReady:this.onInstanceReady}})),u.default.createElement("div",{className:"form-group"},u.default.createElement("label",null,"Tags"),u.default.createElement("input",{type:"input",ref:"tags",onChange:function(e){t.tagchange(e.target.value)},className:"form-control",placeholder:"Separate Tags with Comma "})),u.default.createElement("button",{type:"button",onClick:function(e){t.submitPost("s")},className:"btn btn-success"},this.state.savebutton)," ",u.default.createElement("button",{type:"button",onClick:function(e){t.submitPost("p")},className:"btn btn-primary"},"Publish")," ",u.default.createElement("button",{type:"button",onClick:function(e){t.cancelPost()},className:"btn"},"Cancel"))))}}]),e}(r.Component);e.default=d}});