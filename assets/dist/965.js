"use strict";(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[965],{132:(e,s,t)=>{t.d(s,{H:()=>r});class a extends salla.AppHelpers{setHost(e){this.host=e}getElement(e){return this.host.querySelector(e)}getAttribute(e,s){var t;return null===(t=this.getElement(e))||void 0===t?void 0:t.getAttribute(s)}val(e){return this.getAttribute(e,"value")}isUser(){return"user"===salla.config.get("user.type")}}const r=new a},42:(e,s,t)=>{t.r(s),t.d(s,{salla_search:()=>l});var a=t(378),r=t(132);const l=class{constructor(e){var s;(0,a.r)(this,e),r.H.setHost(this.host),this.productSlot=(null===(s=r.H.getElement('[slot="product"]'))||void 0===s?void 0:s.innerHTML)||this.getDefaultProductSlot(),salla.event.on("languages::translations.loaded",(()=>{this.placeholder=salla.lang.get("blocks.header.search_placeholder"),this.noResultsText=salla.lang.get("common.elements.no_options")}))}onModalOpen(){this.modal.querySelector(".s-search-input").focus()}onModalClose(){this.modal.querySelector(".s-search-input").value="",this.results=void 0,this.afterSearching()}getDefaultProductSlot(){return'<div class="s-search-product-image-container">  <img class="s-search-product-image" src="{image}" alt="{name}"/></div><div class="s-search-product-details">  <div class="s-search-product-name">{name}</div> <div class="s-search-product-price">{price}</div></div>'}search(e){if(r.H.hideElement(this.noResults),0===e.target.value.length)return this.results=void 0,void this.afterSearching();e.target.value.length<=2||(r.H.toggleElement(this.searchIcon,"s-search-spinner-loader","sicon-search",(()=>!0)),salla.search.api.search(e.target.value).then((e=>this.results=e)).catch((e=>"Query Same As Previous!"!==e?this.results=void 0:null)).finally((()=>this.afterSearching(!1))))}afterSearching(e=!0){var s;this.noResults.style.display=e||(null===(s=this.results)||void 0===s?void 0:s.data.length)>0?"none":"block",r.H.toggleElement(this.container,"s-search-container-open","no-results",(()=>{var e;return null===(e=this.results)||void 0===e?void 0:e.data.length})).toggleElement(this.searchIcon,"s-search-spinner-loader","sicon-search",(()=>!1)),salla.search.api.previousQuery=""}render(){var e;return(0,a.h)("salla-modal",{position:"top",id:"s-search-modal",ref:e=>this.modal=e},(0,a.h)("div",{class:"s-search-container",ref:e=>this.container=e},(0,a.h)("input",{class:"s-search-input",type:"text",placeholder:this.placeholder,onInput:e=>this.search(e)}),(0,a.h)("span",{class:"s-search-icon"},(0,a.h)("i",{class:"sicon-search",ref:e=>this.searchIcon=e})),(0,a.h)("div",{class:"s-search-results"},null===(e=this.results)||void 0===e?void 0:e.data.map((e=>(0,a.h)("a",{href:e.url,class:"s-search-product",innerHTML:this.productSlot.replace(/\{name\}/g,e.name).replace(/\{price\}/g,e.price).replace(/\{image\}/g,e.image_url)}))),(0,a.h)("p",{ref:e=>this.noResults=e,class:"s-search-no-results"},this.noResultsText))))}componentDidLoad(){this.afterSearching()}get host(){return(0,a.g)(this)}};l.style="#s-search-modal .s-modal-wrapper{align-items:flex-start;padding:0}#s-search-modal .s-modal-spacer{display:inline}#s-search-modal .s-modal-body{padding:0;max-width:90%;margin-top:3.2rem;border-radius:0.5rem}#s-search-modal .s-modal-close{top:1rem}"}}]);