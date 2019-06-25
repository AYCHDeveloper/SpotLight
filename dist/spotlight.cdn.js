/**
 * Spotlight.js v0.6.11 (CDN)
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/spotlight
 */
(function(){'use strict';var aa={};function ba(a){for(var b=a.classList,c={},d=0;d<b.length;d++)c[b[d]]=1;a.a=c;a.c=b}function f(a,b){a=g(a);var c="string"===typeof b;if(a.length)for(var d=0;d<a.length;d++)(c?ca:da)(a[d],b);else(c?ca:da)(a,b)}function da(a,b){for(var c=0;c<b.length;c++)ca(a,b[c])}function ca(a,b){a.a||ba(a);a.a[b]||(a.a[b]=1,a.c.add(b))}function h(a,b){a=g(a);var c="string"===typeof b;if(a.length)for(var d=0;d<a.length;d++)(c?ea:fa)(a[d],b);else(c?ea:fa)(a,b)}
function fa(a,b){for(var c=0;c<b.length;c++)ea(a,b[c])}function ea(a,b){a.a||ba(a);a.a[b]&&(a.a[b]=0,a.c.remove(b))}function k(a,b,c){a=g(a);var d="string"!==typeof b&&Object.keys(b);if(a.length)for(var e=0;e<a.length;e++)(d?ha:ia)(a[e],b,d||c,void 0);else(d?ha:ia)(a,b,d||c,void 0)}function ha(a,b,c,d){for(var e=0;e<c.length;e++){var p=c[e];ia(a,p,b[p],d)}}
function ia(a,b,c,d){var e=a.f;e||(a.f=e={});e[b]!==c&&(e[b]=c,(a.g||(a.g=a.style)).setProperty(aa[b]||(aa[b]=b.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()),c,d?"important":null))}var ja=0;function l(a,b,c){k(a,"transition","none");k(a,b,c);ja||(ja=a.clientTop&&0);k(a,"transition","")}function ka(a,b){b||(b="");a=g(a);if(a.length)for(var c=0;c<a.length;c++){var d=a[c],e=b;d.b!==e&&(d.b=e,d.textContent=e)}else a.b!==b&&(a.b=b,a.textContent=b)}
function g(a){return"string"===typeof a?document.querySelectorAll(a):a};function la(a,b,c,d){ma("add",a,b,c,d)}function na(a,b,c,d){ma("remove",a,b,c,d)}function ma(a,b,c,d,e){b[a+"EventListener"](c||"click",d,"undefined"===typeof e?!0:e)}function m(a,b){a||(a=window.event);a&&(b||a.preventDefault(),a.stopImmediatePropagation(),a.returnValue=!1);return!1};var oa=document.createElement("link");oa.rel="stylesheet";oa.href="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/css/spotlight.css";document.getElementsByTagName("head")[0].appendChild(oa);var n="theme fullscreen autofit zoom-in zoom-out page title description player progress".split(" "),q,r,pa,qa,t,v,y,z,A,B,C,D,E,F,ra,sa,G,H,I,J,ta,ua,K,L,M,N,O,va,wa,xa,ya,za,P,Aa,Ba,Ca,Q,R,Da,S,T,U,Ea;function Fa(a,b,c){this.src=a;this.title=b;this.description=c}
function W(a){return(O||document).getElementsByClassName(a)[0]}
function Ga(a,b){if(H=a.length){M||(M=(O||document).getElementsByClassName("pane"));var c=M.length,d=I.title,e=I.description;U=Array(H);for(var p=0;p<H;p++){var u=a[p],w=u.dataset;if(p>=c){var x=M[0].cloneNode(!1);k(x,"left",100*p+"%");M[0].parentNode.appendChild(x)}x=void 0;U[p]=new Fa(w&&(w.href||w.src)||u.src||u.href,w&&w.title||u.title||(x=(u||document).getElementsByTagName("img")).length&&x[0].alt||d||"",w&&w.description||u.description||e||"")}G=b||1;l(K,"transform","translateX(-"+100*(G-1)+
"%)");Ha()}}function Ia(a,b,c,d){if(d||a[c])I[c]=b&&b[c]||d}
function Ja(a,b){I={};b&&Ka(b);Ka(a);Ia(a,b,"description");Ia(a,b,"title");Ia(a,b,"prefetch",!0);Ia(a,b,"preloader",!0);J=I.infinite;J="undefined"!==typeof J&&"false"!==J;ta="false"!==I.progress;ua=1*I.player||7E3;if((a=I.zoom)||""===a)I["zoom-in"]=I["zoom-out"]=a,delete I.zoom;if((a=I.control)||""===a){a="string"===typeof a?a.split(","):a;for(b=0;b<n.length;b++)I[n[b]]="false";for(b=0;b<a.length;b++){var c=a[b].trim();"zoom"===c?I["zoom-in"]=I["zoom-out"]="true":I[c]="true"}}for(a=0;a<n.length;a++)b=
n[a],k(W(b),"display","false"===I[b]?"none":"");(sa=I.theme)?La():sa="white"}function Ka(a){for(var b=I,c=Object.keys(a),d=0;d<c.length;d++){var e=c[d];b[e]=""+a[e]}}
function Ma(){var a=G;L=M[a-1];N=L.firstElementChild;G=a;if(!N){var b="false"!==I.preloader;N=new Image;N.onload=function(){b&&h(Q,"show");U&&(y=this.width,z=this.height,k(this,{visibility:"visible",opacity:1,transform:""}),"false"!==I.prefetch&&a<H&&((new Image).src=U[a].src))};N.onerror=function(){L.removeChild(this)};L.appendChild(N);N.src=U[a-1].src;b&&f(Q,"show");return!b}return!0}la(document,"",Na);
la(document,"DOMContentLoaded",function(){O=document.createElement("div");O.id="spotlight";O.innerHTML='<div class=preloader></div><div class=scene><div class=pane></div></div><div class=header><div class=page></div><div class="icon fullscreen"></div><div class="icon autofit"></div><div class="icon zoom-out"></div><div class="icon zoom-in"></div><div class="icon theme"></div><div class="icon player"></div><div class="icon close"></div></div><div class=progress></div><div class="arrow arrow-left"></div><div class="arrow arrow-right"></div><div class=footer><div class=title></div><div class=description></div></div>';
k(O,"transition","none");document.body.appendChild(O);K=W("scene");va=W("footer");wa=W("title");xa=W("description");ya=W("arrow-left");za=W("arrow-right");P=W("fullscreen");Aa=W("page");Ba=W("player");Ca=W("progress");Q=W("preloader");T=document.documentElement||document.body;document.cancelFullScreen||(document.cancelFullScreen=document.exitFullscreen||document.webkitCancelFullScreen||document.webkitExitFullscreen||document.mozCancelFullScreen||function(){});T.requestFullScreen||(T.requestFullScreen=
T.webkitRequestFullScreen||T.msRequestFullScreen||T.mozRequestFullScreen||k(P,"display","none")||function(){});Ea=[[window,"keydown",Oa],[window,"wheel",Pa],[window,"hashchange",Qa],[window,"resize",Ra],[Q,"mousedown",Sa],[Q,"mouseleave",Ta],[Q,"mouseup",Ta],[Q,"mousemove",Ua],[Q,"touchstart",Sa,{passive:!1}],[Q,"touchcancel",Ta],[Q,"touchend",Ta],[Q,"touchmove",Ua,{passive:!0}],[P,"",Va],[ya,"",Wa],[za,"",X],[Ba,"",Xa],[W("autofit"),"",Ya],[W("zoom-in"),"",Za],[W("zoom-out"),"",$a],[W("close"),"",
ab],[W("theme"),"",La]]},{once:!0});function Ra(){t=O.clientWidth;v=O.clientHeight;N&&(y=N.width,z=N.height,bb())}function bb(){k(N,"transform","translate(-50%, -50%) scale("+A+")")}function cb(a){for(var b=0;b<Ea.length;b++){var c=Ea[b];(a?la:na)(c[0],c[1],c[2],c[3])}}
function Na(a){var b=db.call(a.target,".spotlight");if(b){var c=db.call(b,".spotlight-group"),d=(c||document).getElementsByClassName("spotlight");Ja(b.dataset,c&&c.dataset);for(c=0;c<d.length;c++)if(d[c]===b){Ga(d,c+1);break}eb();return m(a)}}function Oa(a){if(L)switch(a.keyCode){case 8:Ya();break;case 27:ab();break;case 32:"false"!==I.player&&Xa();break;case 37:Wa();break;case 39:X();break;case 38:case 107:case 187:Za();break;case 40:case 109:case 189:$a()}}
function Pa(a){L&&(a=a.deltaY,0>.5*(0>a?1:a?-1:0)?$a():Za())}function Qa(){L&&"#spotlight"===location.hash&&ab(!0)}function Xa(a){("boolean"===typeof a?a:!R)?R||(R=setInterval(X,ua),f(Ba,"on"),ta&&fb()):R&&(R=clearInterval(R),h(Ba,"on"),ta&&l(Ca,"transform",""));return R}function Y(){S?clearTimeout(S):f(O,"menu");var a=I.autohide;S="false"!==a?setTimeout(function(){h(O,"menu");S=null},1*a||3E3):1}function gb(a){"boolean"===typeof a&&(S=a?S:0);S?(S=clearTimeout(S),h(O,"menu")):Y();return m(a)}
function Sa(a){B=!0;C=!1;var b=hb(a);D=y*A<=t;pa=b.x;qa=b.y;return m(a,!0)}function Ta(a){if(B&&!C)return B=!1,gb(a);D&&C&&(l(K,"transform","translateX("+-(100*(G-1)-q/t*100)+"%)"),q<-(v/10)&&X()||q>v/10&&Wa()||k(K,"transform","translateX(-"+100*(G-1)+"%)"),q=0,D=!1,k(L,"transform",""));B=!1;return m(a)}
function Ua(a){if(B){Da||(Da=requestAnimationFrame(ib));var b=hb(a),c=(y*A-t)/2;C=!0;q-=pa-(pa=b.x);D?E=!0:q>c?q=c:0<t-q-y*A+c?q=t-y*A+c:E=!0;z*A>v&&(c=(z*A-v)/2,r-=qa-(qa=b.y),r>c?r=c:0<v-r-z*A+c?r=v-z*A+c:E=!0)}else Y();return m(a,!0)}function hb(a){var b=a.touches;b&&(b=b[0]);return{x:b?b.clientX:a.pageX,y:b?b.clientY:a.pageY}}function ib(a){E?(a&&(Da=requestAnimationFrame(ib)),k(L,"transform","translate("+q+"px, "+r+"px)")):Da=null;E=!1}
function Va(a){("boolean"===typeof a?a:document.isFullScreen||document.webkitIsFullScreen||document.mozFullScreen)?(document.cancelFullScreen(),h(P,"on")):(T.requestFullScreen(),f(P,"on"))}function Ya(a){"boolean"===typeof a&&(F=!a);F=1===A&&!F;k(N,{maxHeight:F?"none":"",maxWidth:F?"none":"",transform:""});y=N.width;z=N.height;A=1;r=q=0;E=!0;ib();Y()}function Za(a){var b=A/.65;5>=b&&jb(A=b);a||Y()}function jb(a){A=a||1;bb()}function $a(a){var b=.65*A;1<=b&&(jb(A=b),r=q=0,E=!0,ib());a||Y()}
function eb(){location.hash="spotlight";location.hash="show";k(O,"transition","");f(T,"hide-scrollbars");f(O,"show");cb(!0);Ra();Y()}function ab(a){cb(!1);history.go(!0===a?-1:-2);h(T,"hide-scrollbars");h(O,"show");R&&Xa(!1);N.parentNode.removeChild(N);L=N=U=I=null}function Wa(){if(1<G)return Z(G-1);if(R||J)return Z(H)}function X(){if(G<H)return Z(G+1);if(R||J)return Z(1)}function Z(a){if(!(R&&B||a===G)){R||Y();R&&ta&&fb();var b=a>G;G=a;Ha(b);return!0}}
function fb(){l(Ca,{transitionDuration:"",transform:""});k(Ca,{transitionDuration:ua+"ms",transform:"translateX(0)"})}function La(a){"boolean"===typeof a?ra=a:(ra=!ra,Y());ra?f(O,sa):h(O,sa)}
function Ha(a){r=q=0;A=1;var b=I.animation,c=!0,d=!0,e=!0;if(b||""===b){c=d=e=!1;b="string"===typeof b?b.split(","):b;for(var p=0;p<b.length;p++){var u=b[p].trim();if("scale"===u)c=!0;else if("fade"===u)d=!0;else if("slide"===u)e=!0;else if("flip"===u)var w=!0;else if("false"!==u){c=d=e=w=!1;var x=u;break}}}k(K,{transition:e?"":"none",transform:"translateX(-"+100*(G-1)+"%)"});L&&k(L,"transform","");if(N){k(N,{opacity:d?0:1,transform:""});var V=N;setTimeout(function(){V&&N!==V&&V.parentNode&&V.parentNode.removeChild(V)},
800)}e=Ma();x&&f(N,x);l(N,{opacity:d?0:1,transform:"translate(-50%, -50%)"+(c?" scale(0.8)":"")+(w&&"undefined"!==typeof a?" rotateY("+(a?"":"-")+"90deg)":""),maxHeight:"",maxWidth:""});e&&k(N,{visibility:"visible",opacity:1,transform:""});x&&h(N,x);k(L,"transform","");k(ya,"visibility",J||1!==G?"":"hidden");k(za,"visibility",J||G!==H?"":"hidden");a=U[G-1];if(c=a.title||a.description)ka(wa,a.title),ka(xa,a.description);k(va,"visibility",c?"visible":"hidden");ka(Aa,G+" / "+H);I.onchange&&I.onchange(G)}
var db=Element.prototype.closest||function(a){var b=this;for(a=a.substring(1);b&&1===b.nodeType;){if(b.classList.contains(a))return b;b=b.parentElement||b.parentNode}};window.Spotlight={theme:La,fullscreen:Va,autofit:Ya,next:X,prev:Wa,"goto":Z,close:ab,zoom:jb,menu:gb,show:function(a,b){setTimeout(function(){a?(b?Ja(b):b={},Ga(a,b.index)):I={};eb()})},play:Xa};}).call(this);
