(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{qQUj:function(t,n,i){"use strict";i.r(n),i.d(n,"ListModule",(function(){return j}));var e=i("PCNd"),o=i("ofXK"),r=i("mrSG"),c=i("fXoL"),a=i("2Vo4"),l=i("AytR"),b=i("lJxs"),s=i("tk/3");let d=(()=>{class t{constructor(t){this._http=t,this._data$=new a.a(null),this.data$=this._data$.asObservable()}load(){return Object(r.a)(this,void 0,void 0,(function*(){const t=yield this._http.get(l.a.url).pipe(Object(b.a)(t=>null==t?void 0:t.additives)).toPromise();this._data$.next(t)}))}getItemById(t){return Object(r.a)(this,void 0,void 0,(function*(){return this._data$.value||(yield this.load()),this._data$.value.find(n=>n.id===t)||alert("no data")}))}}return t.\u0275fac=function(n){return new(n||t)(c.Ob(s.a))},t.\u0275prov=c.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),u=(()=>{class t{constructor(t){this._http=t}getByAddictive(t){return this._http.get("https://fr.wikipedia.org/api/rest_v1/page/summary/e"+t).pipe(Object(b.a)(t=>null==t?void 0:t.extract_html)).toPromise().catch(t=>t)}}return t.\u0275fac=function(n){return new(n||t)(c.Ob(s.a))},t.\u0275prov=c.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var p=i("tyNb"),h=i("TEn/");let f=(()=>{class t{transform(t){let n="#f44336";switch(!0){case"0"===t:n="#4caf50";break;case"1"===t:n="#ffa726";break;case"2"===t:n="#ff7043";break;case"3"===t:n="#f44336"}return n}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=c.Gb({name:"color",type:t,pure:!0}),t})(),m=(()=>{class t{transform(t){let n="rien";switch(!0){case"0"===t:n="acceptable";break;case"1"===t:n="rapports contradictoires";break;case"2"===t:n="\xe0 risque";break;case"3"===t:n="\xe0 \xe9viter"}return null}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=c.Gb({name:"level",type:t,pure:!0}),t})();function g(t,n){if(1&t&&(c.Kb(0,"ion-card"),c.Kb(1,"ion-card-content"),c.Ib(2,"div",9),c.Jb(),c.Jb()),2&t){const t=c.Ub();c.xb(2),c.Zb("innerHTML",t.details,c.dc)}}const v=function(t){return{"background-color":t}},y=function(t){return{color:t}};let k=(()=>{class t{constructor(t,n,i,e){this._api=t,this._wiki=n,this._route=i,this._router=e,this.details=null}ionViewWillEnter(){return Object(r.a)(this,void 0,void 0,(function*(){const{id:t=null}=this._route.snapshot.params;if(!t)return;const n=yield this._api.getItemById(t);if(!n)return this._router.navigate(["../tabs/search"]);this.item=n,this.details=yield this._wiki.getByAddictive(t)}))}}return t.\u0275fac=function(n){return new(n||t)(c.Hb(d),c.Hb(u),c.Hb(p.a),c.Hb(p.e))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-item-page"]],decls:24,vars:18,consts:[["color","dark","slot","start"],["color","dark"],[1,"ion-text-center"],[1,"ion-align-items-center",3,"ngStyle"],["color","light",1,"ion-padding"],[1,"ion-padding"],[1,"ion-padding-start"],[3,"ngStyle"],[4,"ngIf"],[3,"innerHTML"]],template:function(t,n){1&t&&(c.Kb(0,"ion-header"),c.Kb(1,"ion-toolbar"),c.Ib(2,"ion-back-button",0),c.Kb(3,"ion-title",1),c.hc(4),c.Jb(),c.Jb(),c.Jb(),c.Kb(5,"ion-content"),c.Kb(6,"ion-card",2),c.Kb(7,"ion-card-header",3),c.Vb(8,"color"),c.Kb(9,"ion-title",4),c.hc(10),c.Jb(),c.Jb(),c.Kb(11,"ion-card-content"),c.Kb(12,"ion-text",5),c.Kb(13,"h1"),c.hc(14),c.Jb(),c.Kb(15,"p"),c.hc(16),c.Jb(),c.Jb(),c.Ib(17,"hr"),c.Kb(18,"ion-text",6),c.Kb(19,"p",7),c.Vb(20,"color"),c.hc(21),c.Vb(22,"level"),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.gc(23,g,3,1,"ion-card",8),c.Jb()),2&t&&(c.xb(4),c.jc("D\xe9tails E",null==n.item?null:n.item.id,""),c.xb(3),c.Zb("ngStyle",c.ac(14,v,c.Wb(8,8,null==n.item?null:n.item.level))),c.xb(3),c.jc("E",null==n.item?null:n.item.id,""),c.xb(4),c.ic(null==n.item?null:n.item.name),c.xb(2),c.ic(null==n.item?null:n.item.type),c.xb(3),c.Zb("ngStyle",c.ac(16,y,c.Wb(20,10,null==n.item?null:n.item.level))),c.xb(2),c.ic(c.Wb(22,12,null==n.item?null:n.item.level)),c.xb(2),c.Zb("ngIf",n.details))},directives:[h.j,h.w,h.a,h.b,h.v,h.h,h.d,h.f,o.k,h.e,h.t,o.j],pipes:[f,m],styles:["app-item-page[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{background-color:var(--ion-color-light)}"]}),t})();const J=function(t){return{"background-color":t}};function x(t,n){if(1&t&&(c.Kb(0,"ion-item",6),c.Kb(1,"ion-thumbnail",7),c.Vb(2,"color"),c.hc(3),c.Jb(),c.Kb(4,"ion-label",8),c.Kb(5,"ion-text",9),c.Kb(6,"h3"),c.hc(7),c.Jb(),c.Jb(),c.Kb(8,"p"),c.hc(9),c.Jb(),c.Jb(),c.Ib(10,"ion-icon",10),c.Jb()),2&t){const t=n.$implicit;c.Zb("routerLink",t.id),c.xb(1),c.Zb("ngStyle",c.ac(7,J,c.Wb(2,5,null==t?null:t.level))),c.xb(2),c.jc(" E",t.id," "),c.xb(4),c.ic(t.name),c.xb(2),c.ic(t.type)}}function K(t,n){if(1&t&&(c.Kb(0,"ion-list",4),c.gc(1,x,11,9,"ion-item",5),c.Jb()),2&t){const t=n.ngIf,i=c.Ub();c.xb(1),c.Zb("ngForOf",t.slice(0,i.max))}}function w(t,n){if(1&t){const t=c.Lb();c.Kb(0,"ion-button",11),c.Sb("click",(function(){return c.cc(t),c.Ub().loadMore()})),c.hc(1,"+"),c.Jb()}}const _=[{path:"",children:[{path:"",component:(()=>{class t{constructor(t){this._api=t,this.max=10}ngOnInit(){this._api.load(),this.additives$=this._api.data$}loadMore(){this.max=this.max+10}}return t.\u0275fac=function(n){return new(n||t)(c.Hb(d))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-list-page"]],decls:10,vars:6,consts:[["color","light"],["class","ion-no-padding",4,"ngIf"],[1,"ion-text-center","ion-padding"],[3,"click",4,"ngIf"],[1,"ion-no-padding"],["class","ion-no-padding ion-no-margin",3,"routerLink",4,"ngFor","ngForOf"],[1,"ion-no-padding","ion-no-margin",3,"routerLink"],["slot","start",3,"ngStyle"],[1,"ion-text-wrap"],["color","dark"],["color","dark","name","arrow-forward-circle"],[3,"click"]],template:function(t,n){var i;1&t&&(c.Kb(0,"ion-header"),c.Kb(1,"ion-toolbar"),c.Kb(2,"ion-title",0),c.hc(3,"Additives Finder"),c.Jb(),c.Jb(),c.Jb(),c.Kb(4,"ion-content"),c.gc(5,K,2,1,"ion-list",1),c.Vb(6,"async"),c.Kb(7,"div",2),c.gc(8,w,2,0,"ion-button",3),c.Vb(9,"async"),c.Jb(),c.Jb()),2&t&&(c.xb(5),c.Zb("ngIf",c.Wb(6,2,n.additives$)),c.xb(3),c.Zb("ngIf",(null==(i=c.Wb(9,4,n.additives$))?null:i.length)>=n.max))},directives:[h.j,h.w,h.v,h.h,o.j,h.o,o.i,h.m,p.f,h.y,h.u,o.k,h.n,h.t,h.k,h.c],pipes:[o.b,f],styles:[""]}),t})()},{path:":id",component:k}]}];let I=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(n){return new(n||t)},imports:[[p.g.forChild(_)],p.g]}),t})(),j=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(n){return new(n||t)},imports:[[o.c,I,e.a]]}),t})()}}]);