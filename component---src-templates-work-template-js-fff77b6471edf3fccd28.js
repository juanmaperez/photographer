(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{177:function(t,e,a){"use strict";a.r(e),a.d(e,"WorkQuery",function(){return m});var n=a(0),o=a.n(n),r=a(191),i=a(181),l=a(199),c=a(195),s=a(196),p=i.a.div.withConfig({displayName:"workTemplate__WorkTemplateView",componentId:"i92cgk-0"})(["background:#fbf9f3;width:100%;.work-template-container{width:60%;margin:0px auto;padding:120px 0px;max-width:1000px;background:#fbf9f3;h1{text-transform:uppercase;font-size:140px;margin-bottom:30px;}.description{font-size:18px;font-weight:lighter;line-height:1.4;margin-bottom:60px;}.work-image{margin-bottom:90px;.element{opacity:0;transition:opacity 300ms linear;&.visible{opacity:1;}}img{max-width:100%;margin-bottom:10px;}h3{text-transform:uppercase;font-size:20px;letter-spacing:1px;}}}@media(max-width:1024px){.work-template-container{width:75%;}}@media(max-width:768px){.work-template-container{width:80%;}}@media(max-width:480px){.work-template-container{width:90%;h1{text-transform:uppercase;font-size:120px;margin-bottom:30px;}.work-image{margin-bottom:50px;}}}"]),m="4156029845";e.default=function(t){var e=t.data,a=t.location,n=e.markdownRemark.frontmatter;return o.a.createElement(r.a,{location:a},o.a.createElement(p,null,o.a.createElement("div",{className:"work-template-container"},o.a.createElement("h1",null,n.title),o.a.createElement("div",{className:"description"},o.a.createElement("p",null,n.description)),n.images.map(function(t){return o.a.createElement("div",{key:t.title,className:"work-image"},o.a.createElement(l.a,null,o.a.createElement(l.b,{classToggle:"visible",triggerHook:.7},o.a.createElement("div",{className:"element"},o.a.createElement(c.a,{key:t.title,imageUrl:t.image.childImageSharp.fluid.src,title:t.title})))),o.a.createElement("h3",null,t.title))})),o.a.createElement(s.a,null)))}},182:function(t,e,a){"use strict";a.d(e,"b",function(){return s});var n=a(0),o=a.n(n),r=a(58),i=a.n(r);a.d(e,"a",function(){return i.a}),a.d(e,"c",function(){return r.navigate});a(184);var l=o.a.createContext({});function c(t){var e=t.staticQueryData,a=t.data,n=t.query,r=t.render,i=a?a.data:e[n]&&e[n].data;return o.a.createElement(o.a.Fragment,null,i&&r(i),!i&&o.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(t){var e=t.data,a=t.query,n=t.render,r=t.children;return o.a.createElement(l.Consumer,null,function(t){return o.a.createElement(c,{data:e,query:a,render:n||r,staticQueryData:t})})}},184:function(t,e,a){var n;t.exports=(n=a(190))&&n.default||n},189:function(t){t.exports={data:{site:{siteMetadata:{title:"Photographer"}}}}},190:function(t,e,a){"use strict";a.r(e);a(16);var n=a(0),o=a.n(n),r=a(85);e.default=function(t){var e=t.location,a=t.pageResources;return a?o.a.createElement(r.a,Object.assign({location:e,pageResources:a},a.json)):null}},191:function(t,e,a){"use strict";var n=a(189),o=a(0),r=a.n(o),i=a(182),l=a(181),c=(a(34),l.a.li.withConfig({displayName:"menuLink__MenuLinkView",componentId:"sc-125ebef-0"})(["cursor:pointer;font-size:18px;display:block;text-align:right;color:#323846;margin-bottom:5px;&.active{text-decoration:line-through;}&:hover{text-decoration:line-through;}"])),s=function(t,e,a){if("/"===t&&t!==e.pathname)Object(i.c)(t);else{var n=document.querySelector(".block-"+a);"undefined"!=typeof window&&window.scroll({top:p(n).y,left:0,behavior:"smooth"})}},p=function(t){for(var e=0,a=0;t;)e+=t.offsetLeft-t.scrollLeft+t.clientLeft,a+=t.offsetTop-t.scrollTop+t.clientTop,t=t.offsetParent;return{x:e,y:a}},m=function(t){return r.a.createElement(c,null,r.a.createElement("span",{onClick:s.bind(null,t.to,t.location,t.name)},r.a.createElement("span",null,"[")," ",t.name," ",r.a.createElement("span",null,"]")))};var d=l.a.div.withConfig({displayName:"menu__MenuView",componentId:"sc-1hara5v-0"})(["position:relative;.menu-list{opacity:0;display:none;transition:all 400ms linear;position:absolute;top:40px;right:5px;width:150px;&.open{display:block;opacity:1;}ul{list-style:none;}}#nav-icon{margin:5px;width:35px;height:20px;position:relative;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:.5s ease-in-out;-moz-transition:.5s ease-in-out;-o-transition:.5s ease-in-out;transition:.5s ease-in-out;cursor:pointer;.bar{display:block;position:absolute;height:2px;width:100%;background:#323846;border-radius:9px;opacity:1;left:0;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:.25s ease-in-out;-moz-transition:.25s ease-in-out;-o-transition:.25s ease-in-out;transition:.25s ease-in-out;&:nth-child(1){top:0px}&:nth-child(2),&:nth-child(3){top:9px}&:nth-child(4){top:18px}}&.open{.bar{&:nth-child(1){top:18px;width:0%;left:50%;opacity:0;}&:nth-child(2){-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);}&:nth-child(3){-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);}&:nth-child(4){top:18px;width:0%;left:50%;opacity:0;}}}}"]),u=function(t){var e,a;function n(){for(var e,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).state={open:!1},e.toggleMenu=function(){var t=e.state.open;e.setState(function(){return{open:!t}})},e}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t=this.state.open;return r.a.createElement(d,null,r.a.createElement("div",{className:t?"open":"",id:"nav-icon",onClick:this.toggleMenu},r.a.createElement("span",{className:"bar"}),r.a.createElement("span",{className:"bar"}),r.a.createElement("span",{className:"bar"}),r.a.createElement("span",{className:"bar"})),r.a.createElement("div",{className:t?"open menu-list":"menu-list"},r.a.createElement("ul",null,r.a.createElement(m,{name:"home",to:"/",location:this.props.location}),r.a.createElement(m,{name:"about",to:"/about",location:this.props.location}),r.a.createElement(m,{name:"works",to:"/works",location:this.props.location}),r.a.createElement(m,{name:"contact",to:"/contact",location:this.props.location}))))},n}(o.Component),f=a(185);a(193),a(194);var h=l.a.header.withConfig({displayName:"header__HeaderView",componentId:"sc-130rxa0-0"})(["position:fixed;top:0;left:0;width:100%;box-sizing:border-box;padding:30px 120px 20px;display:flex;justify-content:space-between;z-index:100;h1{cursor:pointer;a{font-family:'MFred';letter-spacing:1px;font-size:24px;position:relative;text-transform:uppercase;color:#323846;}}nav{a{font-family:'Questrial';font-size:18px;cursor:pointer;text-transform:capitalize;color:#323846;span{transition:opacity 100ms linear;}&:hover{.text{text-decoration:line-through}}}}@media(max-width:480px){padding:30px 20px 20px;}"]),x=function(t){var e,a;function n(){for(var e,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).animation=function(){var t=document.querySelector("header");f.d.fromTo(t,.5,{autoAlpha:0,y:-30},{autoAlpha:1,y:0,ease:f.b.easeOut})},e}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){this.animation()},o.render=function(){var t=this.props,e=t.siteTitle,a=t.location;return console.log(a),r.a.createElement(h,null,r.a.createElement("h1",{className:"web-title","data-text":"Photographer",style:{margin:0}},r.a.createElement(i.a,{"data-text":"Photographer",to:"/"}," ",e," ")),r.a.createElement("nav",null,"/"===a.pathname&&r.a.createElement(u,{location:a}),"/"!==a.pathname&&r.a.createElement(i.a,{to:"/"}," Back ")))},n}(o.Component);x.defaultProps={siteTitle:""};var g=x;e.a=function(t){var e=t.children,a=t.location;return r.a.createElement(i.b,{query:"755544856",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{siteTitle:t.site.siteMetadata.title,location:a}),r.a.createElement("div",{className:"main"},e))},data:n})}},195:function(t,e,a){"use strict";var n=a(0),o=a.n(n);e.a=function(t){var e=t.title,a=t.imageUrl;return o.a.createElement("img",{alt:e,src:a})}},196:function(t,e,a){"use strict";var n=a(0),o=a.n(n),r=a(181),i=a(185),l=a(188),c=a.n(l);a(192);var s=r.a.div.withConfig({displayName:"contact-block__ContactBlockView",componentId:"qp6uq5-0"})(["width:100vw;height:100vh;background:#fbf9f3;position:relative;overflow:hidden;.cover{position:absolute;top:0;left:0;z-index:1;background:#B7C8Cb;width:100%;height:100%;}.content{position:absolute;top:0;left:0;z-index:2;background:transparent;display:flex;flex:2;flex-direction:row;width:100%;height:100%;.left,.right{position:relative;height:100%;display:flex;flex-direction:column;box-sizing:border-box;}.left{flex:.75;justify-content:center;.month,.year{color:#fff;font-size:400px;font-family:'Mfred';text-transform:uppercase;text-align:right;width:100%;display:block;line-height:.85;}}.right{flex:1.25;justify-content:center;padding:50px;color:#fff;font-size:32px;line-height:1.4;.top{letter-spacing:1px;padding:20px 0px;border-bottom:3px solid #fff;}.bottom{padding:20px 0px;span{padding:0px 10px;}i{opacity::.7;font-style:normal;}}}}@media(max-width:1300px){.content{padding:50px;box-sizing:border-box;.left{.month,.year{font-size:320px;}}}}@media(max-width:1024px){.content{flex-direction:column;justify-content:center;.left{flex-direction:row;flex:1;padding:50px 0px 0px;justify-content:flex-start;align-items:flex-end;.month,.year{text-align:left;width:min-content;display:inline;}}.right{flex:1;padding:20px 0;justify-content:flex-start;}}}@media(max-width:480px){.content{padding:50px 20px;.left{padding:50px 0px 10px;.month,.year{font-size:100px;}}.right{padding:0px 0px 30px;font-size:20px;}}}"]),p=function(t){var e,a;function n(){for(var e,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).coverAnimation=function(){var t=new c.a.Controller,e=i.d.fromTo(".block-contact .cover",1,{scaleY:0},{scaleY:1,ease:i.b.easeIn});new c.a.Scene({triggerElement:".block-contact",triggerHook:.9,duration:"70%"}).setTween(e).addTo(t)},e.contentAnimation=function(){var t=new c.a.Controller,e=i.d.fromTo(".block-contact .content",1,{y:100,autoAlpha:0},{y:0,autoAlpha:1,ease:i.b.easeIn});new c.a.Scene({triggerElement:".block-contact",triggerHook:.2,duration:"15%"}).setTween(e).addTo(t)},e}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var r=n.prototype;return r.componentDidMount=function(){this.coverAnimation(),this.contentAnimation()},r.render=function(){return o.a.createElement(s,{className:"block-contact"},o.a.createElement("div",{className:"cover"}),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"left"},o.a.createElement("span",{className:"month"},"Sept"),o.a.createElement("span",{className:"year"},"'19")),o.a.createElement("div",{className:"right"},o.a.createElement("div",{className:"top"},o.a.createElement("p",null,"I'm available for freelance works."),o.a.createElement("p",null,"Say hello hi@ladymadrid.com")),o.a.createElement("div",{className:"bottom"},o.a.createElement("span",null,"Be ")," ",o.a.createElement("i",null,"|")," ",o.a.createElement("span",null," Ig ")," ",o.a.createElement("i",null,"|")," ",o.a.createElement("span",null," Tw ")))))},n}(n.Component);e.a=p}}]);
//# sourceMappingURL=component---src-templates-work-template-js-fff77b6471edf3fccd28.js.map