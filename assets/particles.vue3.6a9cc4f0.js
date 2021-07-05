import{O as t,V as e}from"./vue-class-component.dee61d69.js";import{t as i}from"./tsparticles.55abd272.js";import{W as r,e as s,n as o}from"./@vue.1d6716c2.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */let n=class extends e{mounted(){o((()=>{var t;if(!this.id)throw new Error("Prop 'id' is required!");i.init(),this.particlesInit&&this.particlesInit(i);const e=t=>{this.container=t,this.particlesLoaded&&t&&this.particlesLoaded(t)};this.url?i.loadJSON(this.id,this.url).then(e):i.load(this.id,null!==(t=this.options)&&void 0!==t?t:{}).then(e)}))}beforeDestroy(){this.container&&this.container.destroy()}};n=function(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}([t({props:{id:{type:String,required:!0},options:{type:Object},url:{type:String},particlesLoaded:{type:Object},particlesInit:{type:Function}}})],n);var c=n;c.render=function(t,e,i,o,n,c){return r(),s("div",{id:t.id},null,8,["id"])},c.__file="src/Particles/Particles.vue";const a=(t,e)=>{t.component("Particles",c)};export{a as V};
