/*! For license information please see 886.js.LICENSE.txt */
"use strict";(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[886],{8886:(e,t,l)=>{l.r(t),l.d(t,{salla_conditional_fields:()=>r});var a=l(2704);const r=class{constructor(e){(0,a.r)(this,e)}changeHandler(e){var t;if(salla.log("Received the change event: ",e),!e.target||!["SELECT"].includes(e.target.tagName)&&!["checkbox"].includes(e.target.getAttribute("type")))return void salla.log("Ignore the change because is not support input: "+((null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.tagName)||"N/A"));let l=e.target.name.replace("[]",""),a="checkbox"===e.target.getAttribute("type");salla.log("Trying to find all the element with condation:",`[data-show-when^="${l}"]`),this.host.querySelectorAll(`[data-show-when^="${l}"]`).forEach((t=>{let l,r=!(null==t?void 0:t.dataset.showWhen.includes("!=")),n=null==t?void 0:t.dataset.showWhen.replace(/(.*)(=|!=)(.*)/gm,"$3").trim();l=a?Array.from(this.host.querySelectorAll(`input[name="${e.target.name}"]:checked`),(e=>null==e?void 0:e.value)).includes(n.toString()):n===e.target.value,salla.log("The input is ",a?"Multiple":"Single"," value:",l),r&&l||!r&&!l?(t.classList.remove("hidden"),t.querySelectorAll("[name]").forEach((e=>{e.removeAttribute("disabled"),!["checkbox"].includes(e.getAttribute("type"))&&t.getElementsByClassName("required").length&&e.setAttribute("required","")}))):(t.classList.add("hidden"),t.querySelectorAll("[name]").forEach((e=>{e.setAttribute("disabled",""),e.removeAttribute("required"),["checkbox"].includes(e.getAttribute("type"))&&e.hasOwnProperty("checked")&&(e.checked=!1)})))}))}componentDidRender(){this.host.querySelectorAll("[data-show-when]").forEach((e=>{var t;let l=null===(t=null==e?void 0:e.dataset)||void 0===t?void 0:t.showWhen.replace(/(.*)(=|!=)(.*)/gm,"$1").trim();l&&this.changeHandler({target:this.host.querySelector('[name^="'+l+'"]')})}))}render(){return(0,a.h)(a.H,null,(0,a.h)("slot",null))}get host(){return(0,a.g)(this)}}}}]);