(this["webpackJsonpreact-pics"]=this["webpackJsonpreact-pics"]||[]).push([[0],{15:function(e,t,a){e.exports=a(40)},20:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),s=a.n(i),c=a(2),l=a(3),o=a(5),m=a(4),u=function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement("div",{className:"ui active transition visible dimmer"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"ui indeterminate text loader"},"Connection to a remote server. Please wait a few seconds."))),r.a.createElement("img",{src:"https://react.semantic-ui.com/images/wireframe/short-paragraph.png",className:"ui image",alt:"dimmer"}))},d=function(){return r.a.createElement("div",{className:"ui segment"},r.a.createElement("div",{className:"ui message"},r.a.createElement("div",{className:"header"},"Server is not available"),r.a.createElement("p",null,"Sorry, the service is currently unavailable. Please come back later.")))},v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Image Search"),r.a.createElement("input",{type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}}))))}}]),a}(r.a.Component),h=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).setSpans=function(){var e=n.imageRef.current.clientHeight,t=Math.ceil(e/10);n.setState({spans:t})},n.state={spans:0},n.imageRef=r.a.createRef(),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls;return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},r.a.createElement("a",{href:a.full,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:t,src:a.regular,ref:this.imageRef})))}}]),a}(r.a.Component),p=(a(20),function(e){var t=e.images;return r.a.createElement("div",{className:"image-list"},t.map((function(e){return r.a.createElement(h,{key:e.id,image:e})})))}),f=function(){return r.a.createElement("div",null,"Loading...")},g=a(14),S=a.n(g).a.create({baseURL:"https://erm-node-api-server.herokuapp.com"}),b=(a(39),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={images:[],remoteStatus:"awaiting",imagesLoadStatus:"none"},e.onSearchSubmit=function(t){e.setState({imagesLoadStatus:"awaiting"}),S.get("/request/unsplash",{params:{query:t}}).then((function(t){e.setState({images:t.data.results,imagesLoadStatus:"loaded"})})).catch((function(t){e.setState({remoteStatus:"not available",imagesLoadStatus:"none"})}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;S.get("/").then((function(t){e.setState({remoteStatus:200===t.status?"ready":"not available"})})).catch((function(t){e.setState({remoteStatus:"not available"})}))}},{key:"render",value:function(){var e="awaiting"===this.state.remoteStatus,t="ready"===this.state.remoteStatus,a="not available"===this.state.remoteStatus,n="awaiting"===this.state.imagesLoadStatus,i="loaded"===this.state.imagesLoadStatus,s="none"===this.state.imagesLoadStatus;return r.a.createElement("div",{className:"ui container app"},e&&r.a.createElement(u,null),t&&r.a.createElement("div",{className:"ui container"},r.a.createElement(v,{onSubmit:this.onSearchSubmit}),n&&r.a.createElement(f,null),i&&r.a.createElement(p,{images:this.state.images}),s&&null),a&&r.a.createElement(d,null))}}]),a}(r.a.Component));s.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.14873eb4.chunk.js.map