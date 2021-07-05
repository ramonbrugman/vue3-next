var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,r=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&o(e,a,t[a]);if(l)for(var a of l(t))n.call(t,a)&&o(e,a,t[a]);return e},i=(e,l)=>t(e,a(l));import{u as c,o as d,b as u}from"./vue-router.ad022958.js";import{W as p,e as m,h,g as f,q as v,d as b,a as g,o as w,t as _,Y as y,F as C,f as k,G as T,p as O,k as L,D as x,c as P,a2 as S,a4 as j,a5 as I,l as A,S as V,r as E,b as D,C as W,w as H,R as M,K as z}from"./@vue.1d6716c2.js";import{u as R}from"./vuex.e08594f9.js";import{_ as $}from"./index.5c6e6504.js";import"./element-plus.c692c62b.js";import"./lodash.4edeadd6.js";import"./resize-observer-polyfill.8deb1e21.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.f672539e.js";import"./dayjs.d6f25934.js";import"./async-validator.1fa0d626.js";import"./@popperjs.20e5d135.js";import"./particles.vue3.6a9cc4f0.js";import"./vue-class-component.dee61d69.js";import"./tsparticles.55abd272.js";function N(e){return/^(https?:|mailto:|tel:)/.test(e)}const B={props:{to:{type:String,required:!0}},computed:{isExternal(){return N(this.to)},type(){return this.isExternal?"a":"router-link"}},methods:{linkProps(e){return this.isExternal?{href:e,target:"_blank",rel:"noopener"}:{to:e}}}};B.render=function(e,t,a,l,s,n){return p(),m(v(n.type),n.linkProps(a.to),{default:h((()=>[f(e.$slots,"default")])),_:3},16)};var q=b({name:"SidebarItem",components:{AppLink:B},props:{item:{type:Object,default:()=>{}},isNest:{type:Boolean,default:!1},basePath:{type:String,default:""}},setup(e){const t=g({onlyOneChild:null});return w((()=>{})),r({resolvePath:function(t){return N(t)?t:N(e.basePath)?e.basePath:t},hasOneShowingChild:function(e=[],a){const l=e.filter((e=>{let a=!1;return e&&e.hidden?a=!1:(t.onlyOneChild=e,a=!0),a}));return 1===l.length||0===l.length&&(t.onlyOneChild=i(r({},a),{noShowingChildren:!0}),!0)}},_(t))}});const Y={key:0};q.render=function(e,t,a,l,s,n){const o=y("el-menu-item"),r=y("app-link"),i=y("sidebar-item",!0),c=y("el-submenu");return e.item.hidden?L("",!0):(p(),m("div",Y,[!e.hasOneShowingChild(e.item.children,e.item)||e.onlyOneChild.children&&!e.onlyOneChild.noShowingChildren||e.item.alwaysShow?(p(),m(c,{key:1,ref:"subMenu",index:e.resolvePath(e.item.path),"popper-append-to-body":""},T({default:h((()=>[(p(!0),m(C,null,x(e.item.children,(t=>(p(),m(i,{key:e.item.path+"/"+t.path,"is-nest":!0,item:t,"base-path":e.resolvePath(e.item.path+"/"+t.path),class:"nest-menu"},null,8,["item","base-path"])))),128))])),_:2},[e.item.meta?{name:"title",fn:h((()=>[k("i",{class:[e.item.meta.icon,"sub-el-icon"]},null,2),k("span",null,O(e.item.meta.title),1)]))}:void 0]),1032,["index"])):(p(),m(C,{key:0},[e.onlyOneChild.meta?(p(),m(r,{key:0,to:e.resolvePath(e.onlyOneChild.path)},{default:h((()=>[k(o,{index:e.resolvePath(e.onlyOneChild.path),class:{"submenu-title-noDropdown":!e.isNest}},T({default:h((()=>[k("i",{class:[e.onlyOneChild.meta.icon||e.item.meta&&e.item.meta.icon,"sub-el-icon"]},null,2)])),_:2},[e.item.meta?{name:"title",fn:h((()=>[k("span",null,O(e.onlyOneChild.meta.title),1)]))}:void 0]),1032,["index","class"])])),_:1},8,["to"])):L("",!0)],64))]))};var F=b({name:"Home",components:{sidebarItem:q},setup:()=>{const e=g({}),t=R(),a=c(),l=P((()=>a.currentRoute.value.path)),s=P((()=>{const e=[];return a.options.routes.forEach((t=>{"/"==t.path&&e.push(...t.children)})),e})),n=P((()=>!t.getters["layout/sidebar"].opened));return w((()=>{})),r({router:a,activeMenu:l,permission_routes:s,isCollapse:n},_(e))}});const G=S(),K=G(((e,t,a,l,s,n)=>{const o=y("sidebar-item"),r=y("el-menu");return p(),m(r,{"default-active":e.activeMenu,collapse:e.isCollapse,"unique-opened":!1,"collapse-transition":!1,mode:"vertical","text-color":"#fff","background-color":"#515a6e","active-text-color":"#ffd04b"},{default:G((()=>[(p(!0),m(C,null,x(e.permission_routes,(e=>(p(),m(o,{key:e.path,item:e,"base-path":e.path},null,8,["item","base-path"])))),128))])),_:1},8,["default-active","collapse"])}));F.render=K,F.__scopeId="data-v-95c39878";const J=b({name:"Hamburger",props:{isActive:{type:Number,default:0}},setup:(e,t)=>({toggleClick:function(){t.emit("toggleClick")}})}),Q=S();j("data-v-02c13d35");const U=k("path",{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"},null,-1);I();const X=Q(((e,t,a,l,s,n)=>(p(),m("div",{style:{padding:"0 15px"},onClick:t[1]||(t[1]=(...t)=>e.toggleClick&&e.toggleClick(...t))},[(p(),m("svg",{class:[{"is-active":e.isActive},"hamburger"],viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64"},[U],2))]))));J.render=X,J.__scopeId="data-v-02c13d35";const Z=b({name:"Breadcrumb",setup:()=>{const e=g({levelList:null});d((e=>{e.path.startsWith("/redirect/")||a(e)})),w((()=>{a(t.currentRoute.value)}));const t=c(),a=t=>{let a=t.matched.filter((e=>e.meta&&e.meta.title));const s=a[0];l(s)||(a=[{path:"/dashboard",meta:{title:"首页"}}].concat(a)),e.levelList=a.filter((e=>e.meta&&e.meta.title&&!1!==e.meta.breadcrumb))},l=e=>{const t=e&&e.name;return!!t&&t.trim().toLocaleLowerCase()==="Dashboard".toLocaleLowerCase()};return i(r({},_(e)),{handleLink:e=>{const{redirect:a,path:l}=e;a?t.push(a):t.push(l)}})}}),ee=S();j("data-v-7b04a6f2");const te={key:0,class:"no-redirect"};I();const ae=ee(((e,t,a,l,s,n)=>{const o=y("el-breadcrumb-item"),r=y("el-breadcrumb");return p(),m(r,{class:"app-breadcrumb",separator:"/"},{default:ee((()=>[k(V,{name:"breadcrumb"},{default:ee((()=>[(p(!0),m(C,null,x(e.levelList,((t,a)=>(p(),m(o,{key:t.path},{default:ee((()=>["noRedirect"===t.redirect||a==e.levelList.length-1?(p(),m("span",te,O(t.meta.title),1)):(p(),m("a",{key:1,onClick:A((a=>e.handleLink(t)),["prevent"])},O(t.meta.title),9,["onClick"]))])),_:2},1024)))),128))])),_:1})])),_:1})}));Z.render=ae,Z.__scopeId="data-v-7b04a6f2";var le=b({components:{Hamburger:J,Breadcrumb:Z},setup(){const e=R();return{sidebar:P((()=>e.getters["layout/sidebar"])),toggleSideBar:()=>{e.dispatch("layout/toggleSideBar")}}}});const se=S();j("data-v-fdf5b9f6");const ne={class:"navbar"};I();const oe=se(((e,t,a,l,s,n)=>{const o=y("hamburger"),r=y("breadcrumb");return p(),m("div",ne,[k(o,{id:"hamburger-container","is-active":e.sidebar.opened,class:"hamburger-container",onToggleClick:e.toggleSideBar},null,8,["is-active","onToggleClick"]),k(r,{id:"breadcrumb-container",class:"breadcrumb-container"})])}));le.render=oe,le.__scopeId="data-v-fdf5b9f6";var re=b({emits:["scroll"],setup(e,t){const a=E(null),l=P((()=>a.value.$refs.wrap)),{ctx:s}=W(),n=g({handleScroll:e=>{const t=e.wheelDelta||40*-e.deltaY;l.value.scrollLeft=l.value.scrollLeft+t/4},moveToCurrentTag:e=>{const t=a.value.$el.offsetWidth,n=s.$parent.$refs.tag;let o=null,r=null;if(n.length>0&&(o=n[0],r=n[n.length-1]),o===e)l.value.scrollLeft=0;else if(r===e)l.value.scrollLeft=l.value.scrollWidth-t;else{const a=n.findIndex((t=>t===e)),s=n[a-1],o=n[a+1],r=o.$el.offsetLeft+o.$el.offsetWidth+4,i=s.$el.offsetLeft-4;r>l.value.scrollLeft+t?l.value.scrollLeft=r-t:i<l.value.scrollLeft&&(l.value.scrollLeft=i)}}}),o=()=>{t.emit("scroll")};return w((()=>{l.value.addEventListener("scroll",o,!0)})),D((()=>{l.value.removeEventListener("scroll",o)})),r({scrollContainerRef:a},_(n))}});const ie=S(),ce=ie(((e,t,a,l,s,n)=>{const o=y("el-scrollbar");return p(),m(o,{ref:"scrollContainerRef",class:"scroll-container",onWheel:A(e.handleScroll,["prevent"])},{default:ie((()=>[f(e.$slots,"default",{},void 0,!0)])),_:3},8,["onWheel"])}));re.render=ce,re.__scopeId="data-v-60e9b5c0";var de=b({components:{ScrollPane:re},setup(){const e=R(),t=c(),a=u(),l=E(null),s=(e,a)=>{const l=e.slice(-1)[0];void 0!==l&&void 0!==l.fullPath?t.push(l.fullPath).catch((e=>{console.warn(e)})):"Dashboard"===a.name?t.push({path:a.fullPath}).catch((e=>{console.warn(e)})):t.push("/").catch((e=>{console.warn(e)}))},n=g({visible:!1,top:0,left:0,selectedTag:{fullPath:"",path:"",name:"",meta:{}},affixTags:[],isActive:e=>e.path===a.path,isAffix:e=>e.meta&&e.meta.affix,closeSelectedTag:t=>{"Dashboard"!==t.name&&(e.dispatch("tagViews/ACTION_DEL_VIEW",t),n.isActive(t)&&s(e.state.tagViews.visitedViews,t))},closeSelectedOtherTag:l=>{l.fullPath!==a.path&&void 0!==l.fullPath&&t.push(l.fullPath).catch((e=>{console.log(e)})),e.dispatch("tagViews/ACTION_DEL_OTHER_VIEW",l)},closeSelectedAllTag:()=>{e.dispatch("tagViews/ACTION_DEL_ALL_VIEWS",void 0),n.affixTags.some((e=>e.path===a.path))||s(e.state.tagViews.visitedViews,n.selectedTag)},handleTags:e=>{switch(e){case"now":n.closeSelectedTag(n.selectedTag);break;case"other":n.closeSelectedOtherTag(n.selectedTag);break;case"all":n.closeSelectedAllTag()}}}),o=P((()=>e.state.tagViews.visitedViews)),i=e=>{let t=[];return e.forEach((e=>{if(e.meta&&e.meta.affix){const a=e.path;t.push({fullPath:a,path:a,name:e.name,meta:r({},e.meta)})}if(e.children){const a=i(e.children,e.path);a.length>=1&&(t=t.concat(a))}})),t},d=()=>(a.name&&e.dispatch("tagViews/ACTION_ADD_VIEW",a),n.selectedTag=a,!1);return H((()=>a.name),(()=>{"login"!==a.name&&d()})),M((()=>{(()=>{n.affixTags=i(t.options.routes);for(const t of n.affixTags)t.name&&e.dispatch("tagViews/ACTION_ADD_VISITED_VIEW",t)})(),d()})),r({visitedViews:o,scrollPaneRef:l},_(n))}});const ue=S();j("data-v-13201740");const pe={id:"tags-view-container",class:"tags-view-container"},me={class:"tags-close-box"},he=z(" 标签选项 "),fe=k("i",{class:"el-icon-arrow-down el-icon--right"},null,-1),ve=z("关闭当前"),be=z("关闭其他"),ge=z("关闭所有");I();const we=ue(((e,t,a,l,s,n)=>{const o=y("router-link"),r=y("ScrollPane"),i=y("el-button"),c=y("el-dropdown-item"),d=y("el-dropdown-menu"),u=y("el-dropdown");return p(),m("div",pe,[k(r,{ref:"scrollPaneRef",class:"tags-view-wrapper"},{default:ue((()=>[(p(!0),m(C,null,x(e.visitedViews,(t=>(p(),m(o,{ref:"tag",key:t.path,class:[e.isActive(t)?"active":"","tags-view-item"],to:{path:t.path,query:t.query,fullPath:t.fullPath},tag:"span",onMouseup:A((a=>e.isAffix(t)?"":e.closeSelectedTag(t)),["middle"])},{default:ue((()=>[z(O(t.meta.title)+" ",1),e.isAffix(t)||"Dashboard"===t.name?L("",!0):(p(),m("span",{key:0,class:"el-icon-close",onClick:A((a=>e.closeSelectedTag(t)),["prevent","stop"])},null,8,["onClick"]))])),_:2},1032,["class","to","onMouseup"])))),128))])),_:1},512),k("div",me,[k(u,{onCommand:e.handleTags},{dropdown:ue((()=>[k(d,{size:"small"},{default:ue((()=>["Dashboard"!==e.selectedTag.name?(p(),m(c,{key:0,command:"now"},{default:ue((()=>[ve])),_:1})):L("",!0),k(c,{command:"other"},{default:ue((()=>[be])),_:1}),k(c,{command:"all"},{default:ue((()=>[ge])),_:1})])),_:1})])),default:ue((()=>[k(i,{size:"mini",type:"primary"},{default:ue((()=>[he,fe])),_:1})])),_:1},8,["onCommand"])])])}));de.render=we,de.__scopeId="data-v-13201740";var _e=b({name:"Home",components:{Main:$,Menu:F,Header:le,TagsView:de},setup:()=>{const e=g({sidebar:{}}),t=R();e.sidebar=t.getters["layout/sidebar"];const a=P((()=>({hideSidebar:!e.sidebar.opened,openSidebar:e.sidebar.opened,withoutAnimation:e.sidebar.withoutAnimation})));return w((()=>{})),r({classObj:a},_(e))}});const ye=S();j("data-v-a671f3ae");const Ce={class:"main"};I();const ke=ye(((e,t,a,l,s,n)=>{const o=y("Menu"),r=y("el-aside"),i=y("Header"),c=y("TagsView"),d=y("el-header"),u=y("Main"),h=y("el-main"),f=y("el-container");return p(),m(f,{class:[e.classObj,"app-wrapper"]},{default:ye((()=>[k(r,{width:"200px",style:{background:"#515a6e"}},{default:ye((()=>[k(o)])),_:1}),k(f,{class:"main-box"},{default:ye((()=>[k(d,null,{default:ye((()=>[k(i),k(c)])),_:1}),k(h,null,{default:ye((()=>[k("div",Ce,[k(u)])])),_:1})])),_:1})])),_:1},8,["class"])}));_e.render=ke,_e.__scopeId="data-v-a671f3ae";export default _e;