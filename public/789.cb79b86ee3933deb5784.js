/*! For license information please see 789.cb79b86ee3933deb5784.js.LICENSE.txt */
"use strict";(self.webpackChunkTheme_Raed=self.webpackChunkTheme_Raed||[]).push([[789,223],{2789:(e,t,s)=>{s.r(t),s.d(t,{salla_scopes:()=>r});var o,n,i=s(2708),l=s(9223),a=function(e,t,s,o){function n(e){return e instanceof s?e:new s((function(t){t(e)}))}return new(s||(s=Promise))((function(s,i){function l(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){e.done?s(e.value):n(e.value).then(l,a)}c((o=o.apply(e,t||[])).next())}))},c=function(e,t){var s,o,n,i,l={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(e){return function(t){return c([e,t])}}function c(i){if(s)throw new TypeError("Generator is already executing.");for(;l;)try{if(s=1,o&&(n=2&i[0]?o.return:i[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,i[1])).done)return n;switch(o=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,o=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((n=(n=l.trys).length>0&&n[n.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){l.label=i[1];break}if(6===i[0]&&l.label<n[1]){l.label=n[1],n=i;break}if(n&&l.label<n[2]){l.label=n[2],l.ops.push(i);break}n[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],o=0}finally{s=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}};(n=o||(o={})).DEFAULT="default",n.AVAILABILITY="availability";var r=function(){function e(e){var t=this;(0,i.r)(this,e),this.translationLoaded=!1,this.mode=o.DEFAULT,this.scopes=[],this.originalScopesList=[],this.isOpenedBefore=salla.storage.get("branch-choosed-before"),this.hasError=!1,this.selection="optional",this.searchDisplayLimit=6,this.getFormTitle=function(){var e;return(null===(e=t.originalScopesList)||void 0===e?void 0:e.length)<2?"":t.mode===o.DEFAULT?salla.lang.get("blocks.scope.shopping_from_another_branch"):salla.lang.get("blocks.scope.search_for_availability_in_other_branches")},salla.event.on("scopes::open",(function(e){var s=e.mode,o=void 0===s?null:s,n=e.product_id,i=void 0===n?null:n;t.open(o,i)})),salla.lang.onLoaded((function(){t.translationLoaded=!0}))}return e.prototype.close=function(){return a(this,void 0,void 0,(function(){var e;return c(this,(function(t){switch(t.label){case 0:return[4,null===(e=this.modal)||void 0===e?void 0:e.close()];case 1:return[2,t.sent()]}}))}))},e.prototype.open=function(e,t){return void 0===e&&(e=o.DEFAULT),void 0===t&&(t=null),a(this,void 0,void 0,(function(){var s,n=this;return c(this,(function(i){switch(i.label){case 0:return this.setScopeValues([]),void 0!==e&&[o.AVAILABILITY,o.DEFAULT].includes(e)?this.mode=e:this.mode=o.DEFAULT,this.modal.open(),s=function(){return e==o.AVAILABILITY?salla.scope.getProductAvailability(t):salla.scope.get()},[4,salla.api.withoutNotifier(s).then((function(t){if(e==o.AVAILABILITY)return n.setScopeValues(t.data);n.setScopeValues(t.data.scopes)})).catch((function(e){console.log(e),n.hasError=!0})).finally((function(){return n.modal.stopLoading()}))];case 1:return[2,i.sent()]}}))}))},e.prototype.handleSubmit=function(){return a(this,void 0,void 0,(function(){var e,t=this;return c(this,(function(s){switch(s.label){case 0:return e={id:this.current_scope.id},this.changeBtn.load(),[4,salla.scope.change(e).then((function(){salla.storage.set("branch-choosed-before",!0),salla.storage.set("scope",{type:t.current_scope.type,id:t.current_scope.id});var e=new URL(window.location.href);e.searchParams.set("scope",t.current_scope.id),window.location.href=e.toString(),window.location.replace(e.toString())})).catch((function(e){return console.log(e)})).finally((function(){t.changeBtn.stop()}))];case 1:return[2,s.sent()]}}))}))},e.prototype.setScopeValues=function(e){this.scopes=e,this.originalScopesList=e,1==e.length?(this.current_scope=e[0],this.selected_scope=e[0]):(this.current_scope=e.find((function(e){return e.selected})),this.selected_scope=e.find((function(e){return e.selected})))},e.prototype.handleSearchFieldTyping=function(e){var t=e.target.value.toLocaleLowerCase();this.scopes=t?this.originalScopesList.filter((function(e){return e.name.toLowerCase().includes(t)})):this.originalScopesList},e.prototype.handleScopeSelection=function(e){this.current_scope=this.scopes.find((function(t){return t.id==e.target.value}))},e.prototype.placeholderContent=function(){return(0,i.h)("salla-placeholder",{alignment:"center",class:"s-scopes-placeholder"},(0,i.h)("span",{slot:"title"},salla.lang.get("blocks.scope.branch_looking_for_not_found")),(0,i.h)("span",{slot:"description"},salla.lang.get("blocks.scope.our_services_not_available_in_this_branch")))},e.prototype.defaultContent=function(){var e=this;return[(0,i.h)("div",{class:"s-scopes-container s-scrollbar"},this.scopes.map((function(t){return(0,i.h)("div",{class:"s-scopes-input-wrap","data-selection":e.selection},(0,i.h)("input",{id:"".concat(e.selection," + '_scope_' + ").concat(t.id),name:"lang",type:"radio",value:t.id,onChange:function(t){return e.handleScopeSelection(t)},class:"s-scopes-input",checked:!!e.current_scope&&e.current_scope.id==t.id}),(0,i.h)("label",{htmlFor:"".concat(e.selection," + '_scope_' + ").concat(t.id),class:"s-scopes-label s-scopes-clickable"},(0,i.h)("span",null,t.name)))}))),this.footerContent()]},e.prototype.availabilityContent=function(){var e=this;return(0,i.h)("div",{class:"s-scopes-container"},this.scopes.map((function(t){var s,n,l,a,c,r;return(0,i.h)("div",{class:"s-scopes-input-wrap","data-selection":e.selection},(0,i.h)("h2",{class:{"s-scopes-label":!0,"s-scopes-clickable":e.mode===o.DEFAULT}},(0,i.h)("span",null,t.name)),(0,i.h)("h2",{style:{color:null===(n=null===(s=t)||void 0===s?void 0:s.availability)||void 0===n?void 0:n.color},class:"s-scopes-".concat(null===(a=null===(l=t)||void 0===l?void 0:l.availability)||void 0===a?void 0:a.key)},null===(r=null===(c=t)||void 0===c?void 0:c.availability)||void 0===r?void 0:r.label))})))},e.prototype.footerContent=function(){var e=this;return(0,i.h)("div",{class:"s-scopes-footer"},(0,i.h)("slot",{name:"footer"},(0,i.h)("salla-button",{ref:function(t){return e.changeBtn=t},disabled:!this.current_scope,onClick:function(){return e.handleSubmit()},class:"s-scopes-submit","loader-position":"center",width:"wide"},salla.lang.get("common.elements.confirm"))))},e.prototype.render=function(){var e=this;return(0,i.h)(i.H,null,(0,i.h)("salla-modal",{ref:function(t){return e.modal=t},isClosable:!(!this.isOpenedBefore&&"optional"!=this.selection),class:"s-scopes-modal",isLoading:!0,"has-skeleton":!0},(0,i.h)("div",{slot:"loading"},(0,i.h)("div",{class:"s-scopes-skeleton"},(0,i.h)("salla-list-tile",{class:"s-scopes-header"},(0,i.h)("div",{slot:"icon",class:"s-scopes-header-icon"},(0,i.h)("salla-skeleton",{type:"circle"})),(0,i.h)("div",{slot:"title",class:"s-scopes-header-title mb-5"},(0,i.h)("salla-skeleton",{height:"15px",width:"50%"})),(0,i.h)("div",{slot:"subtitle",class:"s-scopes-header-subtitle"},(0,i.h)("salla-skeleton",{height:"10px"}),(0,i.h)("salla-skeleton",{height:"10px",width:"75%"}))),(0,i.h)("div",{class:"s-scopes-skeleton-search"},(0,i.h)("salla-skeleton",{height:"10px",width:"50%"}),(0,i.h)("salla-skeleton",{height:"30px",width:"100%"})),(0,i.h)("div",{class:"s-scopes-skeleton-scopes"},(0,i.h)("salla-skeleton",{height:"10px",width:"30%"}),(0,i.h)("salla-skeleton",{height:"10px",width:"25%"}),(0,i.h)("salla-skeleton",{height:"10px",width:"30%"}),(0,i.h)("salla-skeleton",{height:"10px",width:"25%"}),(0,i.h)("salla-skeleton",{height:"10px",width:"30%"}),(0,i.h)("salla-skeleton",{height:"10px",width:"25%"}),(0,i.h)("salla-skeleton",{height:"10px",width:"30%"}),(0,i.h)("salla-skeleton",{height:"10px",width:"25%"})),(0,i.h)("div",{class:"s-scopes-skeleton-btn"},(0,i.h)("salla-skeleton",{height:"40px",width:"100%"})))),(0,i.h)("salla-list-tile",{class:this.originalScopesList.length?"s-scopes-header block":"s-hidden"},(0,i.h)("div",{slot:"icon",class:"s-scopes-header-icon",innerHTML:'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>store-alt</title>\n<path d="M6.667 24h5.333c0.736 0 1.333-0.596 1.333-1.333s-0.597-1.333-1.333-1.333h-5.333c-0.736 0-1.333 0.596-1.333 1.333s0.597 1.333 1.333 1.333zM31.86 10.071l-4-8c-0.227-0.452-0.688-0.737-1.193-0.737h-21.333c-0.505 0-0.967 0.285-1.193 0.737l-4 8c-0.092 0.184-0.14 0.389-0.14 0.596v18.667c0 0.737 0.597 1.333 1.333 1.333h29.333c0.736 0 1.333-0.596 1.333-1.333v-18.667c0-0.207-0.048-0.412-0.14-0.596zM6.157 4h19.685l3.333 6.667h-26.352zM24 28h-5.333v-9.333h5.333zM29.333 28h-2.667v-10.667c0-0.737-0.597-1.333-1.333-1.333h-8c-0.736 0-1.333 0.596-1.333 1.333v10.667h-13.333v-14.667h26.667zM6.667 18.667h5.333c0.736 0 1.333-0.596 1.333-1.333s-0.597-1.333-1.333-1.333h-5.333c-0.736 0-1.333 0.596-1.333 1.333s0.597 1.333 1.333 1.333z"></path>\n</svg>\n'}),(0,i.h)("div",{slot:"title",class:"s-scopes-header-title"},salla.lang.get("blocks.scope.you_are_browse_store_from")),(0,i.h)("div",{slot:"subtitle",class:"s-scopes-header-subtitle"},this.selected_scope?this.selected_scope.name:"")),(0,i.h)("div",{class:"s-scopes-wrap"},!!this.originalScopesList.length&&(0,i.h)("h4",{class:"s-scopes-title"},this.getFormTitle()),this.originalScopesList.length>this.searchDisplayLimit?(0,i.h)("div",{class:"s-scopes-search-wrapper"},(0,i.h)("div",{class:"s-scopes-search-icon",innerHTML:l.S}),(0,i.h)("input",{type:"text",class:"s-scopes-search-input",onInput:function(t){return e.handleSearchFieldTyping(t)},enterkeyhint:"search",placeholder:salla.lang.get("blocks.scope.searching_for_a_branch")})):"",this.hasError||this.scopes.length<2?this.placeholderContent():this.mode===o.DEFAULT?this.defaultContent():this.availabilityContent())))},e.prototype.componentDidLoad=function(){this.isOpenedBefore||"mandatory"!=this.selection||this.open()},e}();r.style=".s-scopes-availability-content{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.s-scopes-placeholder{-ms-flex:0 0 85%;flex:0 0 85%}"},9223:(e,t,s)=>{s.r(t),s.d(t,{S:()=>o});var o='\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>search</title>\n<path d="M30.276 28.391l-7.576-7.576c1.644-2.053 2.633-4.652 2.633-7.481 0-6.616-5.384-12-12-12s-12 5.384-12 12 5.384 12 12 12c2.829 0 5.428-0.989 7.481-2.633l7.576 7.576c0.26 0.26 0.601 0.391 0.943 0.391s0.683-0.131 0.943-0.391c0.521-0.521 0.521-1.364 0-1.885zM13.333 22.667c-5.147 0-9.333-4.187-9.333-9.333s4.187-9.333 9.333-9.333 9.333 4.187 9.333 9.333-4.187 9.333-9.333 9.333z"></path>\n</svg>\n'}}]);