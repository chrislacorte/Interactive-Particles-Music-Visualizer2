var Qp=Object.defineProperty;var em=(i,e,t)=>e in i?Qp(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var _i=(i,e,t)=>em(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const il="158",tm=0,Jl=1,nm=2,yh=1,im=2,ii=3,Ui=0,jt=1,Hn=2,Pi=0,$r=1,Ql=2,eu=3,tu=4,rm=5,sr=100,sm=101,om=102,nu=103,iu=104,am=200,cm=201,lm=202,um=203,xc=204,yc=205,dm=206,hm=207,fm=208,pm=209,mm=210,_m=211,gm=212,vm=213,xm=214,ym=0,Mm=1,Sm=2,qo=3,Em=4,bm=5,Tm=6,wm=7,Mh=0,Am=1,Cm=2,Li=0,Rm=1,Pm=2,Lm=3,Dm=4,Nm=5,Sh=300,Qr=301,es=302,Mc=303,Sc=304,pa=306,Ec=1e3,Dn=1001,bc=1002,Wt=1003,ru=1004,Na=1005,Mn=1006,Im=1007,ks=1008,Di=1009,Um=1010,Om=1011,rl=1012,Eh=1013,bi=1014,Ti=1015,zs=1016,bh=1017,Th=1018,cr=1020,Fm=1021,Nn=1023,Bm=1024,km=1025,lr=1026,ts=1027,zm=1028,wh=1029,Vm=1030,Ah=1031,Ch=1033,Ia=33776,Ua=33777,Oa=33778,Fa=33779,su=35840,ou=35841,au=35842,cu=35843,Hm=36196,lu=37492,uu=37496,du=37808,hu=37809,fu=37810,pu=37811,mu=37812,_u=37813,gu=37814,vu=37815,xu=37816,yu=37817,Mu=37818,Su=37819,Eu=37820,bu=37821,Ba=36492,Tu=36494,wu=36495,Gm=36283,Au=36284,Cu=36285,Ru=36286,Rh=3e3,ur=3001,Wm=3200,Xm=3201,qm=0,Ym=1,En="",Pt="srgb",li="srgb-linear",sl="display-p3",ma="display-p3-linear",Yo="linear",et="srgb",$o="rec709",jo="p3",Er=7680,Pu=519,$m=512,jm=513,Zm=514,Km=515,Jm=516,Qm=517,e_=518,t_=519,Lu=35044,Du="300 es",Tc=1035,ai=2e3,Zo=2001;class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nu=1234567;const Ls=Math.PI/180,Vs=180/Math.PI;function ds(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Xt(i,e,t){return Math.max(e,Math.min(t,i))}function ol(i,e){return(i%e+e)%e}function n_(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function i_(i,e,t){return i!==e?(t-i)/(e-i):0}function Ds(i,e,t){return(1-t)*i+t*e}function r_(i,e,t,n){return Ds(i,e,1-Math.exp(-t*n))}function s_(i,e=1){return e-Math.abs(ol(i,e*2)-e)}function o_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function a_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function c_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function l_(i,e){return i+Math.random()*(e-i)}function u_(i){return i*(.5-Math.random())}function d_(i){i!==void 0&&(Nu=i);let e=Nu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function h_(i){return i*Ls}function f_(i){return i*Vs}function wc(i){return(i&i-1)===0&&i!==0}function p_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ko(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function m_(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),h=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*d,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*d,o*l);break;case"ZXZ":i.set(c*d,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function zr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ke={DEG2RAD:Ls,RAD2DEG:Vs,generateUUID:ds,clamp:Xt,euclideanModulo:ol,mapLinear:n_,inverseLerp:i_,lerp:Ds,damp:r_,pingpong:s_,smoothstep:o_,smootherstep:a_,randInt:c_,randFloat:l_,randFloatSpread:u_,seededRandom:d_,degToRad:h_,radToDeg:f_,isPowerOfTwo:wc,ceilPowerOfTwo:p_,floorPowerOfTwo:Ko,setQuaternionFromProperEuler:m_,normalize:Ht,denormalize:zr};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,n,r,s,a,o,c,l){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],p=r[0],m=r[3],_=r[6],E=r[1],y=r[4],M=r[7],v=r[2],T=r[5],b=r[8];return s[0]=a*p+o*E+c*v,s[3]=a*m+o*y+c*T,s[6]=a*_+o*M+c*b,s[1]=l*p+u*E+d*v,s[4]=l*m+u*y+d*T,s[7]=l*_+u*M+d*b,s[2]=h*p+f*E+g*v,s[5]=h*m+f*y+g*T,s[8]=h*_+f*M+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,h=o*c-u*s,f=l*s-a*c,g=t*d+n*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=d*p,e[1]=(r*l-u*n)*p,e[2]=(o*n-r*a)*p,e[3]=h*p,e[4]=(u*t-r*c)*p,e[5]=(r*s-o*t)*p,e[6]=f*p,e[7]=(n*c-l*t)*p,e[8]=(a*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ka.makeScale(e,t)),this}rotate(e){return this.premultiply(ka.makeRotation(-e)),this}translate(e,t){return this.premultiply(ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ka=new Fe;function Ph(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Jo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function __(){const i=Jo("canvas");return i.style.display="block",i}const Iu={};function Ns(i){i in Iu||(Iu[i]=!0,console.warn(i))}const Uu=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ou=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),uo={[li]:{transfer:Yo,primaries:$o,toReference:i=>i,fromReference:i=>i},[Pt]:{transfer:et,primaries:$o,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ma]:{transfer:Yo,primaries:jo,toReference:i=>i.applyMatrix3(Ou),fromReference:i=>i.applyMatrix3(Uu)},[sl]:{transfer:et,primaries:jo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ou),fromReference:i=>i.applyMatrix3(Uu).convertLinearToSRGB()}},g_=new Set([li,ma]),$e={enabled:!0,_workingColorSpace:li,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!g_.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=uo[e].toReference,r=uo[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return uo[i].primaries},getTransfer:function(i){return i===En?Yo:uo[i].transfer}};function jr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function za(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let br;class Lh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{br===void 0&&(br=Jo("canvas")),br.width=e.width,br.height=e.height;const n=br.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=br}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=jr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jr(t[n]/255)*255):t[n]=jr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let v_=0;class Dh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=ds(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Va(r[a].image)):s.push(Va(r[a]))}else s=Va(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let x_=0;class fn extends hi{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,n=Dn,r=Dn,s=Mn,a=ks,o=Nn,c=Di,l=fn.DEFAULT_ANISOTROPY,u=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=ds(),this.name="",this.source=new Dh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ur?Pt:En),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ec:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ec:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pt?ur:Rh}set encoding(e){Ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ur?Pt:En}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Sh;fn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,n=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],p=c[2],m=c[6],_=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+p)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,M=(f+1)/2,v=(_+1)/2,T=(u+h)/4,b=(d+p)/4,w=(g+m)/4;return y>M&&y>v?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=T/n,s=b/n):M>v?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=T/r,s=w/r):v<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(v),n=b/s,r=w/s),this.set(n,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(d-p)*(d-p)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-p)/E,this.z=(h-u)/E,this.w=Math.acos((l+f+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class y_ extends hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ns("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ur?Pt:En),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new fn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mr extends y_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Nh extends fn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class M_ extends fn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],d=n[r+3];const h=s[a+0],f=s[a+1],g=s[a+2],p=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=p;return}if(d!==p||c!==h||l!==f||u!==g){let m=1-o;const _=c*h+l*f+u*g+d*p,E=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const v=Math.sqrt(y),T=Math.atan2(v,_*E);m=Math.sin(m*T)/v,o=Math.sin(o*T)/v}const M=o*E;if(c=c*m+h*M,l=l*m+f*M,u=u*m+g*M,d=d*m+p*M,m===1-o){const v=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=v,l*=v,u*=v,d*=v}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],d=s[a],h=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-o*f,e[t+2]=l*g+u*f+o*h-c*d,e[t+3]=u*g-o*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),d=o(s/2),h=c(n/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+c*l+a*d-o*u,this.y=n+c*u+o*l-s*d,this.z=r+c*d+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ha.copy(this).projectOnVector(e),this.sub(Ha)}reflect(e){return this.sub(Ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ha=new G,Fu=new hs;class Js{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(s,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ho.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ho.copy(n.boundingBox)),ho.applyMatrix4(e.matrixWorld),this.union(ho)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),fo.subVectors(this.max,ys),Tr.subVectors(e.a,ys),wr.subVectors(e.b,ys),Ar.subVectors(e.c,ys),gi.subVectors(wr,Tr),vi.subVectors(Ar,wr),Yi.subVectors(Tr,Ar);let t=[0,-gi.z,gi.y,0,-vi.z,vi.y,0,-Yi.z,Yi.y,gi.z,0,-gi.x,vi.z,0,-vi.x,Yi.z,0,-Yi.x,-gi.y,gi.x,0,-vi.y,vi.x,0,-Yi.y,Yi.x,0];return!Ga(t,Tr,wr,Ar,fo)||(t=[1,0,0,0,1,0,0,0,1],!Ga(t,Tr,wr,Ar,fo))?!1:(po.crossVectors(gi,vi),t=[po.x,po.y,po.z],Ga(t,Tr,wr,Ar,fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new G,new G,new G,new G,new G,new G,new G,new G],Cn=new G,ho=new Js,Tr=new G,wr=new G,Ar=new G,gi=new G,vi=new G,Yi=new G,ys=new G,fo=new G,po=new G,$i=new G;function Ga(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){$i.fromArray(i,s);const o=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),c=e.dot($i),l=t.dot($i),u=n.dot($i);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const S_=new Js,Ms=new G,Wa=new G;class _a{constructor(e=new G,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):S_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ms,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(Wa)),this.expandByPoint(Ms.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new G,Xa=new G,mo=new G,xi=new G,qa=new G,_o=new G,Ya=new G;class Ih{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Xa.copy(e).add(t).multiplyScalar(.5),mo.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(Xa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(mo),o=xi.dot(this.direction),c=-xi.dot(mo),l=xi.lengthSq(),u=Math.abs(1-a*a);let d,h,f,g;if(u>0)if(d=a*c-o,h=a*o-c,g=s*u,d>=0)if(h>=-g)if(h<=g){const p=1/u;d*=p,h*=p,f=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Xa).addScaledVector(mo,h),f}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const n=Jn.dot(this.direction),r=Jn.dot(Jn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,r,s){qa.subVectors(t,e),_o.subVectors(n,e),Ya.crossVectors(qa,_o);let a=this.direction.dot(Ya),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xi.subVectors(this.origin,e);const c=o*this.direction.dot(_o.crossVectors(xi,_o));if(c<0)return null;const l=o*this.direction.dot(qa.cross(xi));if(l<0||c+l>a)return null;const u=-o*xi.dot(Ya);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,n,r,s,a,o,c,l,u,d,h,f,g,p,m){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,d,h,f,g,p,m)}set(e,t,n,r,s,a,o,c,l,u,d,h,f,g,p,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=l,_[6]=u,_[10]=d,_[14]=h,_[3]=f,_[7]=g,_[11]=p,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Cr.setFromMatrixColumn(e,0).length(),s=1/Cr.setFromMatrixColumn(e,1).length(),a=1/Cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,g=o*u,p=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-p*l,t[9]=-o*c,t[2]=p-h*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,f=c*d,g=l*u,p=l*d;t[0]=h+p*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=p+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,f=c*d,g=l*u,p=l*d;t[0]=h-p*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=p-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,f=a*d,g=o*u,p=o*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+p,t[1]=c*d,t[5]=p*l+h,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,f=a*l,g=o*c,p=o*l;t[0]=c*u,t[4]=p-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-p*d}else if(e.order==="XZY"){const h=a*c,f=a*l,g=o*c,p=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+p,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=p*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(E_,e,b_)}lookAt(e,t,n){const r=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),yi.crossVectors(n,on),yi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),yi.crossVectors(n,on)),yi.normalize(),go.crossVectors(on,yi),r[0]=yi.x,r[4]=go.x,r[8]=on.x,r[1]=yi.y,r[5]=go.y,r[9]=on.y,r[2]=yi.z,r[6]=go.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],p=n[6],m=n[10],_=n[14],E=n[3],y=n[7],M=n[11],v=n[15],T=r[0],b=r[4],w=r[8],x=r[12],S=r[1],D=r[5],L=r[9],O=r[13],R=r[2],U=r[6],F=r[10],B=r[14],Z=r[3],X=r[7],Y=r[11],N=r[15];return s[0]=a*T+o*S+c*R+l*Z,s[4]=a*b+o*D+c*U+l*X,s[8]=a*w+o*L+c*F+l*Y,s[12]=a*x+o*O+c*B+l*N,s[1]=u*T+d*S+h*R+f*Z,s[5]=u*b+d*D+h*U+f*X,s[9]=u*w+d*L+h*F+f*Y,s[13]=u*x+d*O+h*B+f*N,s[2]=g*T+p*S+m*R+_*Z,s[6]=g*b+p*D+m*U+_*X,s[10]=g*w+p*L+m*F+_*Y,s[14]=g*x+p*O+m*B+_*N,s[3]=E*T+y*S+M*R+v*Z,s[7]=E*b+y*D+M*U+v*X,s[11]=E*w+y*L+M*F+v*Y,s[15]=E*x+y*O+M*B+v*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],p=e[7],m=e[11],_=e[15];return g*(+s*c*d-r*l*d-s*o*h+n*l*h+r*o*f-n*c*f)+p*(+t*c*f-t*l*h+s*a*h-r*a*f+r*l*u-s*c*u)+m*(+t*l*d-t*o*f-s*a*d+n*a*f+s*o*u-n*l*u)+_*(-r*o*u-t*c*d+t*o*h+r*a*d-n*a*h+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],p=e[13],m=e[14],_=e[15],E=d*m*l-p*h*l+p*c*f-o*m*f-d*c*_+o*h*_,y=g*h*l-u*m*l-g*c*f+a*m*f+u*c*_-a*h*_,M=u*p*l-g*d*l+g*o*f-a*p*f-u*o*_+a*d*_,v=g*d*c-u*p*c-g*o*h+a*p*h+u*o*m-a*d*m,T=t*E+n*y+r*M+s*v;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=E*b,e[1]=(p*h*s-d*m*s-p*r*f+n*m*f+d*r*_-n*h*_)*b,e[2]=(o*m*s-p*c*s+p*r*l-n*m*l-o*r*_+n*c*_)*b,e[3]=(d*c*s-o*h*s-d*r*l+n*h*l+o*r*f-n*c*f)*b,e[4]=y*b,e[5]=(u*m*s-g*h*s+g*r*f-t*m*f-u*r*_+t*h*_)*b,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*_-t*c*_)*b,e[7]=(a*h*s-u*c*s+u*r*l-t*h*l-a*r*f+t*c*f)*b,e[8]=M*b,e[9]=(g*d*s-u*p*s-g*n*f+t*p*f+u*n*_-t*d*_)*b,e[10]=(a*p*s-g*o*s+g*n*l-t*p*l-a*n*_+t*o*_)*b,e[11]=(u*o*s-a*d*s-u*n*l+t*d*l+a*n*f-t*o*f)*b,e[12]=v*b,e[13]=(u*p*r-g*d*r+g*n*h-t*p*h-u*n*m+t*d*m)*b,e[14]=(g*o*r-a*p*r-g*n*c+t*p*c+a*n*m-t*o*m)*b,e[15]=(a*d*r-u*o*r+u*n*c-t*d*c-a*n*h+t*o*h)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,d=o+o,h=s*l,f=s*u,g=s*d,p=a*u,m=a*d,_=o*d,E=c*l,y=c*u,M=c*d,v=n.x,T=n.y,b=n.z;return r[0]=(1-(p+_))*v,r[1]=(f+M)*v,r[2]=(g-y)*v,r[3]=0,r[4]=(f-M)*T,r[5]=(1-(h+_))*T,r[6]=(m+E)*T,r[7]=0,r[8]=(g+y)*b,r[9]=(m-E)*b,r[10]=(1-(h+p))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Cr.set(r[0],r[1],r[2]).length();const a=Cr.set(r[4],r[5],r[6]).length(),o=Cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const l=1/s,u=1/a,d=1/o;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,t.setFromRotationMatrix(Rn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=ai){const c=this.elements,l=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),h=(n+r)/(n-r);let f,g;if(o===ai)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Zo)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=ai){const c=this.elements,l=1/(t-e),u=1/(n-r),d=1/(a-s),h=(t+e)*l,f=(n+r)*u;let g,p;if(o===ai)g=(a+s)*d,p=-2*d;else if(o===Zo)g=s*d,p=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=p,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Cr=new G,Rn=new wt,E_=new G(0,0,0),b_=new G(1,1,1),yi=new G,go=new G,on=new G,Bu=new wt,ku=new hs;class ga{constructor(e=0,t=0,n=0,r=ga.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ku.setFromEuler(this),this.setFromQuaternion(ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ga.DEFAULT_ORDER="XYZ";class Uh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let T_=0;const zu=new G,Rr=new hs,Qn=new wt,vo=new G,Ss=new G,w_=new G,A_=new hs,Vu=new G(1,0,0),Hu=new G(0,1,0),Gu=new G(0,0,1),C_={type:"added"},R_={type:"removed"};class yt extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new G,t=new ga,n=new hs,r=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new Fe}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Uh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(Vu,e)}rotateY(e){return this.rotateOnAxis(Hu,e)}rotateZ(e){return this.rotateOnAxis(Gu,e)}translateOnAxis(e,t){return zu.copy(e).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vu,e)}translateY(e){return this.translateOnAxis(Hu,e)}translateZ(e){return this.translateOnAxis(Gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vo.copy(e):vo.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Ss,vo,this.up):Qn.lookAt(vo,Ss,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),Rr.setFromRotationMatrix(Qn),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(C_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(R_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,w_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,A_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}yt.DEFAULT_UP=new G(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new G,ei=new G,$a=new G,ti=new G,Pr=new G,Lr=new G,Wu=new G,ja=new G,Za=new G,Ka=new G;let xo=!1;class Ln{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pn.subVectors(e,t),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Pn.subVectors(r,t),ei.subVectors(n,t),$a.subVectors(e,t);const a=Pn.dot(Pn),o=Pn.dot(ei),c=Pn.dot($a),l=ei.dot(ei),u=ei.dot($a),d=a*l-o*o;if(d===0)return s.set(-2,-1,-1);const h=1/d,f=(l*c-o*u)*h,g=(a*u-o*c)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ti),ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,t,n,r,s,a,o,c){return xo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xo=!0),this.getInterpolation(e,t,n,r,s,a,o,c)}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,ti),c.setScalar(0),c.addScaledVector(s,ti.x),c.addScaledVector(a,ti.y),c.addScaledVector(o,ti.z),c}static isFrontFacing(e,t,n,r){return Pn.subVectors(n,t),ei.subVectors(e,t),Pn.cross(ei).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Pn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return xo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xo=!0),Ln.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Ln.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Pr.subVectors(r,n),Lr.subVectors(s,n),ja.subVectors(e,n);const c=Pr.dot(ja),l=Lr.dot(ja);if(c<=0&&l<=0)return t.copy(n);Za.subVectors(e,r);const u=Pr.dot(Za),d=Lr.dot(Za);if(u>=0&&d<=u)return t.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Pr,a);Ka.subVectors(e,s);const f=Pr.dot(Ka),g=Lr.dot(Ka);if(g>=0&&f<=g)return t.copy(s);const p=f*l-c*g;if(p<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Lr,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Wu.subVectors(s,r),o=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(Wu,o);const _=1/(m+p+h);return a=p*_,o=h*_,t.copy(n).addScaledVector(Pr,a).addScaledVector(Lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},yo={h:0,s:0,l:0};function Ja(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}let Ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=$e.workingColorSpace){if(e=ol(e,1),t=Xt(t,0,1),n=Xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ja(a,s,e+1/3),this.g=Ja(a,s,e),this.b=Ja(a,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,t=Pt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=Oh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}copyLinearToSRGB(e){return this.r=za(e.r),this.g=za(e.g),this.b=za(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return $e.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Xt(Ut.r*255,0,255))*65536+Math.round(Xt(Ut.g*255,0,255))*256+Math.round(Xt(Ut.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Ut.copy(this),t);const n=Ut.r,r=Ut.g,s=Ut.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Pt){$e.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,r=Ut.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(yo);const n=Ds(Mi.h,yo.h,t),r=Ds(Mi.s,yo.s,t),s=Ds(Mi.l,yo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ut=new Ge;Ge.NAMES=Oh;let P_=0;class Qs extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=$r,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xc,this.blendDst=yc,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(n.blending=this.blending),this.side!==Ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xc&&(n.blendSrc=this.blendSrc),this.blendDst!==yc&&(n.blendDst=this.blendDst),this.blendEquation!==sr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fh extends Qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new G,Mo=new qe;class Xn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lu,this.updateRange={offset:0,count:-1},this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mo.fromBufferAttribute(this,t),Mo.applyMatrix3(e),this.setXY(t,Mo.x,Mo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Bh extends Xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kh extends Xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qn extends Xn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let L_=0;const vn=new wt,Qa=new yt,Dr=new G,an=new Js,Es=new Js,Tt=new G;class fi extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ph(e)?kh:Bh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return Qa.lookAt(e),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(an.min,Es.min),an.expandByPoint(Tt),Tt.addVectors(an.max,Es.max),an.expandByPoint(Tt)):(an.expandByPoint(Es.min),an.expandByPoint(Es.max))}an.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Tt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Tt.fromBufferAttribute(o,l),c&&(Dr.fromBufferAttribute(e,l),Tt.add(Dr)),r=Math.max(r,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let S=0;S<o;S++)l[S]=new G,u[S]=new G;const d=new G,h=new G,f=new G,g=new qe,p=new qe,m=new qe,_=new G,E=new G;function y(S,D,L){d.fromArray(r,S*3),h.fromArray(r,D*3),f.fromArray(r,L*3),g.fromArray(a,S*2),p.fromArray(a,D*2),m.fromArray(a,L*2),h.sub(d),f.sub(d),p.sub(g),m.sub(g);const O=1/(p.x*m.y-m.x*p.y);isFinite(O)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(O),E.copy(f).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(O),l[S].add(_),l[D].add(_),l[L].add(_),u[S].add(E),u[D].add(E),u[L].add(E))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let S=0,D=M.length;S<D;++S){const L=M[S],O=L.start,R=L.count;for(let U=O,F=O+R;U<F;U+=3)y(n[U+0],n[U+1],n[U+2])}const v=new G,T=new G,b=new G,w=new G;function x(S){b.fromArray(s,S*3),w.copy(b);const D=l[S];v.copy(D),v.sub(b.multiplyScalar(b.dot(D))).normalize(),T.crossVectors(w,D);const O=T.dot(u[S])<0?-1:1;c[S*4]=v.x,c[S*4+1]=v.y,c[S*4+2]=v.z,c[S*4+3]=O}for(let S=0,D=M.length;S<D;++S){const L=M[S],O=L.start,R=L.count;for(let U=O,F=O+R;U<F;U+=3)x(n[U+0]),x(n[U+1]),x(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const r=new G,s=new G,a=new G,o=new G,c=new G,l=new G,u=new G,d=new G;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),p=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let p=0,m=c.length;p<m;p++){o.isInterleavedBufferAttribute?f=c[p]*o.data.stride+o.offset:f=c[p]*u;for(let _=0;_<u;_++)h[g++]=l[f++]}return new Xn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fi,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=e(h,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xu=new wt,ji=new Ih,So=new _a,qu=new G,Nr=new G,Ir=new G,Ur=new G,ec=new G,Eo=new G,bo=new qe,To=new qe,wo=new qe,Yu=new G,$u=new G,ju=new G,Ao=new G,Co=new G;class wi extends yt{constructor(e=new fi,t=new Fh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Eo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],d=s[c];u!==0&&(ec.fromBufferAttribute(d,e),a?Eo.addScaledVector(ec,u):Eo.addScaledVector(ec.sub(t),u))}t.add(Eo)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(s),ji.copy(e.ray).recast(e.near),!(So.containsPoint(ji.origin)===!1&&(ji.intersectSphere(So,qu)===null||ji.origin.distanceToSquared(qu)>(e.far-e.near)**2))&&(Xu.copy(s).invert(),ji.copy(e.ray).applyMatrix4(Xu),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,p=h.length;g<p;g++){const m=h[g],_=a[m.materialIndex],E=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=E,v=y;M<v;M+=3){const T=o.getX(M),b=o.getX(M+1),w=o.getX(M+2);r=Ro(this,_,e,n,l,u,d,T,b,w),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),p=Math.min(o.count,f.start+f.count);for(let m=g,_=p;m<_;m+=3){const E=o.getX(m),y=o.getX(m+1),M=o.getX(m+2);r=Ro(this,a,e,n,l,u,d,E,y,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,p=h.length;g<p;g++){const m=h[g],_=a[m.materialIndex],E=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=E,v=y;M<v;M+=3){const T=M,b=M+1,w=M+2;r=Ro(this,_,e,n,l,u,d,T,b,w),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),p=Math.min(c.count,f.start+f.count);for(let m=g,_=p;m<_;m+=3){const E=m,y=m+1,M=m+2;r=Ro(this,a,e,n,l,u,d,E,y,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function D_(i,e,t,n,r,s,a,o){let c;if(e.side===jt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Ui,o),c===null)return null;Co.copy(o),Co.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Co);return l<t.near||l>t.far?null:{distance:l,point:Co.clone(),object:i}}function Ro(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Nr),i.getVertexPosition(c,Ir),i.getVertexPosition(l,Ur);const u=D_(i,e,t,n,Nr,Ir,Ur,Ao);if(u){r&&(bo.fromBufferAttribute(r,o),To.fromBufferAttribute(r,c),wo.fromBufferAttribute(r,l),u.uv=Ln.getInterpolation(Ao,Nr,Ir,Ur,bo,To,wo,new qe)),s&&(bo.fromBufferAttribute(s,o),To.fromBufferAttribute(s,c),wo.fromBufferAttribute(s,l),u.uv1=Ln.getInterpolation(Ao,Nr,Ir,Ur,bo,To,wo,new qe),u.uv2=u.uv1),a&&(Yu.fromBufferAttribute(a,o),$u.fromBufferAttribute(a,c),ju.fromBufferAttribute(a,l),u.normal=Ln.getInterpolation(Ao,Nr,Ir,Ur,Yu,$u,ju,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new G,materialIndex:0};Ln.getNormal(Nr,Ir,Ur,d.normal),u.face=d}return u}class fs extends fi{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new qn(l,3)),this.setAttribute("normal",new qn(u,3)),this.setAttribute("uv",new qn(d,2));function g(p,m,_,E,y,M,v,T,b,w,x){const S=M/b,D=v/w,L=M/2,O=v/2,R=T/2,U=b+1,F=w+1;let B=0,Z=0;const X=new G;for(let Y=0;Y<F;Y++){const N=Y*D-O;for(let z=0;z<U;z++){const le=z*S-L;X[p]=le*E,X[m]=N*y,X[_]=R,l.push(X.x,X.y,X.z),X[p]=0,X[m]=0,X[_]=T>0?1:-1,u.push(X.x,X.y,X.z),d.push(z/b),d.push(1-Y/w),B+=1}}for(let Y=0;Y<w;Y++)for(let N=0;N<b;N++){const z=h+N+U*Y,le=h+N+U*(Y+1),oe=h+(N+1)+U*(Y+1),Q=h+(N+1)+U*Y;c.push(z,le,Q),c.push(le,oe,Q),Z+=6}o.addGroup(f,Z,x),f+=Z,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ns(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Gt(i){const e={};for(let t=0;t<i.length;t++){const n=ns(i[t]);for(const r in n)e[r]=n[r]}return e}function N_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zh(i){return i.getRenderTarget()===null?i.outputColorSpace:$e.workingColorSpace}const I_={clone:ns,merge:Gt};var U_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U_,this.fragmentShader=O_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.uniformsGroups=N_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let Vh=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Sn extends Vh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Or=-90,Fr=1;class F_ extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(Or,Fr,e,t);r.layers=this.layers,this.add(r);const s=new Sn(Or,Fr,e,t);s.layers=this.layers,this.add(s);const a=new Sn(Or,Fr,e,t);a.layers=this.layers,this.add(a);const o=new Sn(Or,Fr,e,t);o.layers=this.layers,this.add(o);const c=new Sn(Or,Fr,e,t);c.layers=this.layers,this.add(c);const l=new Sn(Or,Fr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Hh extends fn{constructor(e,t,n,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Qr,super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class B_ extends mr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ns("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ur?Pt:En),this.texture=new Hh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fs(5,5,5),s=new Oi({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Pi});s.uniforms.tEquirect.value=t;const a=new wi(r,s),o=t.minFilter;return t.minFilter===ks&&(t.minFilter=Mn),new F_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const tc=new G,k_=new G,z_=new Fe;class tr{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=tc.subVectors(n,t).cross(k_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(tc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||z_.getNormalMatrix(e),r=this.coplanarPoint(tc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new _a,Po=new G;class Gh{constructor(e=new tr,t=new tr,n=new tr,r=new tr,s=new tr,a=new tr){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],f=r[8],g=r[9],p=r[10],m=r[11],_=r[12],E=r[13],y=r[14],M=r[15];if(n[0].setComponents(c-s,h-l,m-f,M-_).normalize(),n[1].setComponents(c+s,h+l,m+f,M+_).normalize(),n[2].setComponents(c+a,h+u,m+g,M+E).normalize(),n[3].setComponents(c-a,h-u,m-g,M-E).normalize(),n[4].setComponents(c-o,h-d,m-p,M-y).normalize(),t===ai)n[5].setComponents(c+o,h+d,m+p,M+y).normalize();else if(t===Zo)n[5].setComponents(o,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Po.x=r.normal.x>0?e.max.x:e.min.x,Po.y=r.normal.y>0?e.max.y:e.min.y,Po.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wh(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function V_(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,u){const d=l.array,h=l.usage,f=i.createBuffer();i.bindBuffer(u,f),i.bufferData(u,d,h),l.onUploadCallback();let g;if(d instanceof Float32Array)g=i.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=i.SHORT;else if(d instanceof Uint32Array)g=i.UNSIGNED_INT;else if(d instanceof Int32Array)g=i.INT;else if(d instanceof Int8Array)g=i.BYTE;else if(d instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,d){const h=u.array,f=u.updateRange;i.bindBuffer(d,l),f.count===-1?i.bufferSubData(d,0,h):(t?i.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):i.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,r(l,u)):d.version<l.version&&(s(d.buffer,l,u),d.version=l.version)}return{get:a,remove:o,update:c}}class al extends fi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,d=e/o,h=t/c,f=[],g=[],p=[],m=[];for(let _=0;_<u;_++){const E=_*h-a;for(let y=0;y<l;y++){const M=y*d-s;g.push(M,-E,0),p.push(0,0,1),m.push(y/o),m.push(1-_/c)}}for(let _=0;_<c;_++)for(let E=0;E<o;E++){const y=E+l*_,M=E+l*(_+1),v=E+1+l*(_+1),T=E+1+l*_;f.push(y,M,T),f.push(M,v,T)}this.setIndex(f),this.setAttribute("position",new qn(g,3)),this.setAttribute("normal",new qn(p,3)),this.setAttribute("uv",new qn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.widthSegments,e.heightSegments)}}var H_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,W_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Y_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,j_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Q_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ug=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_g="gl_FragColor = linearToOutputTexel( gl_FragColor );",gg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Eg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ag=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ng=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ug=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Og=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,kg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ev=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,tv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,nv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,iv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,av=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_v=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Sv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ev=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Av=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Iv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Yv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$v=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qv=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,r0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,o0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,u0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,g0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:H_,alphahash_pars_fragment:G_,alphamap_fragment:W_,alphamap_pars_fragment:X_,alphatest_fragment:q_,alphatest_pars_fragment:Y_,aomap_fragment:$_,aomap_pars_fragment:j_,begin_vertex:Z_,beginnormal_vertex:K_,bsdfs:J_,iridescence_fragment:Q_,bumpmap_pars_fragment:eg,clipping_planes_fragment:tg,clipping_planes_pars_fragment:ng,clipping_planes_pars_vertex:ig,clipping_planes_vertex:rg,color_fragment:sg,color_pars_fragment:og,color_pars_vertex:ag,color_vertex:cg,common:lg,cube_uv_reflection_fragment:ug,defaultnormal_vertex:dg,displacementmap_pars_vertex:hg,displacementmap_vertex:fg,emissivemap_fragment:pg,emissivemap_pars_fragment:mg,colorspace_fragment:_g,colorspace_pars_fragment:gg,envmap_fragment:vg,envmap_common_pars_fragment:xg,envmap_pars_fragment:yg,envmap_pars_vertex:Mg,envmap_physical_pars_fragment:Ng,envmap_vertex:Sg,fog_vertex:Eg,fog_pars_vertex:bg,fog_fragment:Tg,fog_pars_fragment:wg,gradientmap_pars_fragment:Ag,lightmap_fragment:Cg,lightmap_pars_fragment:Rg,lights_lambert_fragment:Pg,lights_lambert_pars_fragment:Lg,lights_pars_begin:Dg,lights_toon_fragment:Ig,lights_toon_pars_fragment:Ug,lights_phong_fragment:Og,lights_phong_pars_fragment:Fg,lights_physical_fragment:Bg,lights_physical_pars_fragment:kg,lights_fragment_begin:zg,lights_fragment_maps:Vg,lights_fragment_end:Hg,logdepthbuf_fragment:Gg,logdepthbuf_pars_fragment:Wg,logdepthbuf_pars_vertex:Xg,logdepthbuf_vertex:qg,map_fragment:Yg,map_pars_fragment:$g,map_particle_fragment:jg,map_particle_pars_fragment:Zg,metalnessmap_fragment:Kg,metalnessmap_pars_fragment:Jg,morphcolor_vertex:Qg,morphnormal_vertex:ev,morphtarget_pars_vertex:tv,morphtarget_vertex:nv,normal_fragment_begin:iv,normal_fragment_maps:rv,normal_pars_fragment:sv,normal_pars_vertex:ov,normal_vertex:av,normalmap_pars_fragment:cv,clearcoat_normal_fragment_begin:lv,clearcoat_normal_fragment_maps:uv,clearcoat_pars_fragment:dv,iridescence_pars_fragment:hv,opaque_fragment:fv,packing:pv,premultiplied_alpha_fragment:mv,project_vertex:_v,dithering_fragment:gv,dithering_pars_fragment:vv,roughnessmap_fragment:xv,roughnessmap_pars_fragment:yv,shadowmap_pars_fragment:Mv,shadowmap_pars_vertex:Sv,shadowmap_vertex:Ev,shadowmask_pars_fragment:bv,skinbase_vertex:Tv,skinning_pars_vertex:wv,skinning_vertex:Av,skinnormal_vertex:Cv,specularmap_fragment:Rv,specularmap_pars_fragment:Pv,tonemapping_fragment:Lv,tonemapping_pars_fragment:Dv,transmission_fragment:Nv,transmission_pars_fragment:Iv,uv_pars_fragment:Uv,uv_pars_vertex:Ov,uv_vertex:Fv,worldpos_vertex:Bv,background_vert:kv,background_frag:zv,backgroundCube_vert:Vv,backgroundCube_frag:Hv,cube_vert:Gv,cube_frag:Wv,depth_vert:Xv,depth_frag:qv,distanceRGBA_vert:Yv,distanceRGBA_frag:$v,equirect_vert:jv,equirect_frag:Zv,linedashed_vert:Kv,linedashed_frag:Jv,meshbasic_vert:Qv,meshbasic_frag:e0,meshlambert_vert:t0,meshlambert_frag:n0,meshmatcap_vert:i0,meshmatcap_frag:r0,meshnormal_vert:s0,meshnormal_frag:o0,meshphong_vert:a0,meshphong_frag:c0,meshphysical_vert:l0,meshphysical_frag:u0,meshtoon_vert:d0,meshtoon_frag:h0,points_vert:f0,points_frag:p0,shadow_vert:m0,shadow_frag:_0,sprite_vert:g0,sprite_frag:v0},ue={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Vn={basic:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Gt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Gt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Gt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Gt([ue.points,ue.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Gt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Gt([ue.common,ue.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Gt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Gt([ue.sprite,ue.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Gt([ue.common,ue.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Gt([ue.lights,ue.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Vn.physical={uniforms:Gt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Lo={r:0,b:0,g:0};function x0(i,e,t,n,r,s,a){const o=new Ge(0);let c=s===!0?0:1,l,u,d=null,h=0,f=null;function g(m,_){let E=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y===null?p(o,c):y&&y.isColor&&(p(y,1),E=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===pa)?(u===void 0&&(u=new wi(new fs(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:ns(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(v,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=$e.getTransfer(y.colorSpace)!==et,(d!==y||h!==y.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=y,h=y.version,f=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new wi(new al(2,2),new Oi({name:"BackgroundMaterial",uniforms:ns(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=$e.getTransfer(y.colorSpace)!==et,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,h=y.version,f=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function p(m,_){m.getRGB(Lo,zh(i)),n.buffers.color.setClear(Lo.r,Lo.g,Lo.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,p(o,c)},render:g}}function y0(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=m(null);let l=c,u=!1;function d(R,U,F,B,Z){let X=!1;if(a){const Y=p(B,F,U);l!==Y&&(l=Y,f(l.object)),X=_(R,B,F,Z),X&&E(R,B,F,Z)}else{const Y=U.wireframe===!0;(l.geometry!==B.id||l.program!==F.id||l.wireframe!==Y)&&(l.geometry=B.id,l.program=F.id,l.wireframe=Y,X=!0)}Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(X||u)&&(u=!1,w(R,U,F,B),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function f(R){return n.isWebGL2?i.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?i.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R,U,F){const B=F.wireframe===!0;let Z=o[R.id];Z===void 0&&(Z={},o[R.id]=Z);let X=Z[U.id];X===void 0&&(X={},Z[U.id]=X);let Y=X[B];return Y===void 0&&(Y=m(h()),X[B]=Y),Y}function m(R){const U=[],F=[],B=[];for(let Z=0;Z<r;Z++)U[Z]=0,F[Z]=0,B[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:B,object:R,attributes:{},index:null}}function _(R,U,F,B){const Z=l.attributes,X=U.attributes;let Y=0;const N=F.getAttributes();for(const z in N)if(N[z].location>=0){const oe=Z[z];let Q=X[z];if(Q===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),oe===void 0||oe.attribute!==Q||Q&&oe.data!==Q.data)return!0;Y++}return l.attributesNum!==Y||l.index!==B}function E(R,U,F,B){const Z={},X=U.attributes;let Y=0;const N=F.getAttributes();for(const z in N)if(N[z].location>=0){let oe=X[z];oe===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor));const Q={};Q.attribute=oe,oe&&oe.data&&(Q.data=oe.data),Z[z]=Q,Y++}l.attributes=Z,l.attributesNum=Y,l.index=B}function y(){const R=l.newAttributes;for(let U=0,F=R.length;U<F;U++)R[U]=0}function M(R){v(R,0)}function v(R,U){const F=l.newAttributes,B=l.enabledAttributes,Z=l.attributeDivisors;F[R]=1,B[R]===0&&(i.enableVertexAttribArray(R),B[R]=1),Z[R]!==U&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,U),Z[R]=U)}function T(){const R=l.newAttributes,U=l.enabledAttributes;for(let F=0,B=U.length;F<B;F++)U[F]!==R[F]&&(i.disableVertexAttribArray(F),U[F]=0)}function b(R,U,F,B,Z,X,Y){Y===!0?i.vertexAttribIPointer(R,U,F,Z,X):i.vertexAttribPointer(R,U,F,B,Z,X)}function w(R,U,F,B){if(n.isWebGL2===!1&&(R.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const Z=B.attributes,X=F.getAttributes(),Y=U.defaultAttributeValues;for(const N in X){const z=X[N];if(z.location>=0){let le=Z[N];if(le===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),le!==void 0){const oe=le.normalized,Q=le.itemSize,Se=t.get(le);if(Se===void 0)continue;const Be=Se.buffer,ee=Se.type,we=Se.bytesPerElement,Je=n.isWebGL2===!0&&(ee===i.INT||ee===i.UNSIGNED_INT||le.gpuType===Eh);if(le.isInterleavedBufferAttribute){const Re=le.data,V=Re.stride,nn=le.offset;if(Re.isInstancedInterleavedBuffer){for(let ve=0;ve<z.locationSize;ve++)v(z.location+ve,Re.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let ve=0;ve<z.locationSize;ve++)M(z.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let ve=0;ve<z.locationSize;ve++)b(z.location+ve,Q/z.locationSize,ee,oe,V*we,(nn+Q/z.locationSize*ve)*we,Je)}else{if(le.isInstancedBufferAttribute){for(let Re=0;Re<z.locationSize;Re++)v(z.location+Re,le.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Re=0;Re<z.locationSize;Re++)M(z.location+Re);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Re=0;Re<z.locationSize;Re++)b(z.location+Re,Q/z.locationSize,ee,oe,Q*we,Q/z.locationSize*Re*we,Je)}}else if(Y!==void 0){const oe=Y[N];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(z.location,oe);break;case 3:i.vertexAttrib3fv(z.location,oe);break;case 4:i.vertexAttrib4fv(z.location,oe);break;default:i.vertexAttrib1fv(z.location,oe)}}}}T()}function x(){L();for(const R in o){const U=o[R];for(const F in U){const B=U[F];for(const Z in B)g(B[Z].object),delete B[Z];delete U[F]}delete o[R]}}function S(R){if(o[R.id]===void 0)return;const U=o[R.id];for(const F in U){const B=U[F];for(const Z in B)g(B[Z].object),delete B[Z];delete U[F]}delete o[R.id]}function D(R){for(const U in o){const F=o[U];if(F[R.id]===void 0)continue;const B=F[R.id];for(const Z in B)g(B[Z].object),delete B[Z];delete F[R.id]}}function L(){O(),u=!0,l!==c&&(l=c,f(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:L,resetDefaultState:O,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:M,disableUnusedAttributes:T}}function M0(i,e,t,n){const r=n.isWebGL2;let s;function a(l){s=l}function o(l,u){i.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,d){if(d===0)return;let h,f;if(r)h=i,f="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[f](s,l,u,d),t.update(u,s,d)}this.setMode=a,this.render=o,this.renderInstances=c}function S0(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,M=a||e.has("OES_texture_float"),v=y&&M,T=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:E,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:v,maxSamples:T}}function E0(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new tr,o=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,p=d.clipIntersection,m=d.clipShadows,_=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const E=s?0:n,y=E*4;let M=_.clippingState||null;c.value=M,M=u(g,h,y,f);for(let v=0;v!==y;++v)M[v]=t[v];_.clippingState=M,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){const p=d!==null?d.length:0;let m=null;if(p!==0){if(m=c.value,g!==!0||m===null){const _=f+p*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<_)&&(m=new Float32Array(_));for(let y=0,M=f;y!==p;++y,M+=4)a.copy(d[y]).applyMatrix4(E,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function b0(i){let e=new WeakMap;function t(a,o){return o===Mc?a.mapping=Qr:o===Sc&&(a.mapping=es),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Mc||o===Sc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new B_(c.height/2);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class T0 extends Vh{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gr=4,Zu=[.125,.215,.35,.446,.526,.582],or=20,nc=new T0,Ku=new Ge;let ic=null,rc=0,sc=0;const nr=(1+Math.sqrt(5))/2,Br=1/nr,Ju=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,nr,Br),new G(0,nr,-Br),new G(Br,0,nr),new G(-Br,0,nr),new G(nr,Br,0),new G(-nr,Br,0)];class Qu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ic=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ic,rc,sc),e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qr||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ic=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:zs,format:Nn,colorSpace:li,depthBuffer:!1},r=ed(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ed(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=w0(s)),this._blurMaterial=A0(s,e,t)}return r}_compileMaterial(e){const t=new wi(this._lodPlanes[0],e);this._renderer.compile(t,nc)}_sceneToCubeUV(e,t,n,r){const o=new Sn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Ku),u.toneMapping=Li,u.autoClear=!1;const f=new Fh({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new wi(new fs,f);let p=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Ku),p=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(o.up.set(0,c[_],0),o.lookAt(l[_],0,0)):E===1?(o.up.set(0,0,c[_]),o.lookAt(0,l[_],0)):(o.up.set(0,c[_],0),o.lookAt(0,0,l[_]));const y=this._cubeSize;Do(r,E*y,_>2?y:0,y,y),u.setRenderTarget(r),p&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Qr||e.mapping===es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=td());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new wi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Do(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,nc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ju[(r-1)%Ju.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new wi(this._lodPlanes[r],l),h=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*or-1),p=s/g,m=isFinite(s)?1+Math.floor(u*p):or;m>or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${or}`);const _=[];let E=0;for(let b=0;b<or;++b){const w=b/p,x=Math.exp(-w*w/2);_.push(x),b===0?E+=x:b<m&&(E+=2*x)}for(let b=0;b<_.length;b++)_[b]=_[b]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=_,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;const M=this._sizeLods[r],v=3*M*(r>y-Gr?r-y+Gr:0),T=4*(this._cubeSize-M);Do(t,v,T,3*M,2*M),c.setRenderTarget(t),c.render(d,nc)}}function w0(i){const e=[],t=[],n=[];let r=i;const s=i-Gr+1+Zu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-Gr?c=Zu[a-i+Gr-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,p=3,m=2,_=1,E=new Float32Array(p*g*f),y=new Float32Array(m*g*f),M=new Float32Array(_*g*f);for(let T=0;T<f;T++){const b=T%3*2/3-1,w=T>2?0:-1,x=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];E.set(x,p*g*T),y.set(h,m*g*T);const S=[T,T,T,T,T,T];M.set(S,_*g*T)}const v=new fi;v.setAttribute("position",new Xn(E,p)),v.setAttribute("uv",new Xn(y,m)),v.setAttribute("faceIndex",new Xn(M,_)),e.push(v),r>Gr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ed(i,e,t){const n=new mr(i,e,t);return n.texture.mapping=pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function A0(i,e,t){const n=new Float32Array(or),r=new G(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function td(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function nd(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function cl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function C0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Mc||c===Sc,u=c===Qr||c===es;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Qu(i)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(l&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new Qu(i));const h=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function R0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function P0(i,e,t,n){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const p=h.morphAttributes[g];for(let m=0,_=p.length;m<_;m++)e.remove(p[m])}h.removeEventListener("dispose",a),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const p=f[g];for(let m=0,_=p.length;m<_;m++)e.update(p[m],i.ARRAY_BUFFER)}}function l(d){const h=[],f=d.index,g=d.attributes.position;let p=0;if(f!==null){const E=f.array;p=f.version;for(let y=0,M=E.length;y<M;y+=3){const v=E[y+0],T=E[y+1],b=E[y+2];h.push(v,T,T,b,b,v)}}else if(g!==void 0){const E=g.array;p=g.version;for(let y=0,M=E.length/3-1;y<M;y+=3){const v=y+0,T=y+1,b=y+2;h.push(v,T,T,b,b,v)}}else return;const m=new(Ph(h)?kh:Bh)(h,1);m.version=p;const _=s.get(d);_&&e.remove(_),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function L0(i,e,t,n){const r=n.isWebGL2;let s;function a(h){s=h}let o,c;function l(h){o=h.type,c=h.bytesPerElement}function u(h,f){i.drawElements(s,f,o,h*c),t.update(f,s,1)}function d(h,f,g){if(g===0)return;let p,m;if(r)p=i,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,f,o,h*c,g),t.update(f,s,g)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=d}function D0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function N0(i,e){return i[0]-e[0]}function I0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function U0(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new Lt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,d){const h=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==p){let U=function(){O.dispose(),s.delete(u),u.removeEventListener("dispose",U)};var f=U;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let x=0;y===!0&&(x=1),M===!0&&(x=2),v===!0&&(x=3);let S=u.attributes.position.count*x,D=1;S>e.maxTextureSize&&(D=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const L=new Float32Array(S*D*4*p),O=new Nh(L,S,D,p);O.type=Ti,O.needsUpdate=!0;const R=x*4;for(let F=0;F<p;F++){const B=T[F],Z=b[F],X=w[F],Y=S*D*4*F;for(let N=0;N<B.count;N++){const z=N*R;y===!0&&(a.fromBufferAttribute(B,N),L[Y+z+0]=a.x,L[Y+z+1]=a.y,L[Y+z+2]=a.z,L[Y+z+3]=0),M===!0&&(a.fromBufferAttribute(Z,N),L[Y+z+4]=a.x,L[Y+z+5]=a.y,L[Y+z+6]=a.z,L[Y+z+7]=0),v===!0&&(a.fromBufferAttribute(X,N),L[Y+z+8]=a.x,L[Y+z+9]=a.y,L[Y+z+10]=a.z,L[Y+z+11]=X.itemSize===4?a.w:1)}}m={count:p,texture:O,size:new qe(S,D)},s.set(u,m),u.addEventListener("dispose",U)}let _=0;for(let y=0;y<h.length;y++)_+=h[y];const E=u.morphTargetsRelative?1:1-_;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",h),d.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let p=n[u.id];if(p===void 0||p.length!==g){p=[];for(let M=0;M<g;M++)p[M]=[M,0];n[u.id]=p}for(let M=0;M<g;M++){const v=p[M];v[0]=M,v[1]=h[M]}p.sort(I0);for(let M=0;M<8;M++)M<g&&p[M][1]?(o[M][0]=p[M][0],o[M][1]=p[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(N0);const m=u.morphAttributes.position,_=u.morphAttributes.normal;let E=0;for(let M=0;M<8;M++){const v=o[M],T=v[0],b=v[1];T!==Number.MAX_SAFE_INTEGER&&b?(m&&u.getAttribute("morphTarget"+M)!==m[T]&&u.setAttribute("morphTarget"+M,m[T]),_&&u.getAttribute("morphNormal"+M)!==_[T]&&u.setAttribute("morphNormal"+M,_[T]),r[M]=b,E+=b):(m&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),_&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const y=u.morphTargetsRelative?1:1-E;d.getUniforms().setValue(i,"morphTargetBaseInfluence",y),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function O0(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Xh=new fn,qh=new Nh,Yh=new M_,$h=new Hh,id=[],rd=[],sd=new Float32Array(16),od=new Float32Array(9),ad=new Float32Array(4);function ps(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=id[r];if(s===void 0&&(s=new Float32Array(r),id[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function va(i,e){let t=rd[e];t===void 0&&(t=new Int32Array(e),rd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function F0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function B0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function k0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function z0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function V0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;ad.set(n),i.uniformMatrix2fv(this.addr,!1,ad),St(t,n)}}function H0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;od.set(n),i.uniformMatrix3fv(this.addr,!1,od),St(t,n)}}function G0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;sd.set(n),i.uniformMatrix4fv(this.addr,!1,sd),St(t,n)}}function W0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function X0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function Y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function $0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function j0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function Z0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function K0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function J0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Xh,r)}function Q0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Yh,r)}function ex(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||$h,r)}function tx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||qh,r)}function nx(i){switch(i){case 5126:return F0;case 35664:return B0;case 35665:return k0;case 35666:return z0;case 35674:return V0;case 35675:return H0;case 35676:return G0;case 5124:case 35670:return W0;case 35667:case 35671:return X0;case 35668:case 35672:return q0;case 35669:case 35673:return Y0;case 5125:return $0;case 36294:return j0;case 36295:return Z0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return J0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return tx}}function ix(i,e){i.uniform1fv(this.addr,e)}function rx(i,e){const t=ps(e,this.size,2);i.uniform2fv(this.addr,t)}function sx(i,e){const t=ps(e,this.size,3);i.uniform3fv(this.addr,t)}function ox(i,e){const t=ps(e,this.size,4);i.uniform4fv(this.addr,t)}function ax(i,e){const t=ps(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cx(i,e){const t=ps(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lx(i,e){const t=ps(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ux(i,e){i.uniform1iv(this.addr,e)}function dx(i,e){i.uniform2iv(this.addr,e)}function hx(i,e){i.uniform3iv(this.addr,e)}function fx(i,e){i.uniform4iv(this.addr,e)}function px(i,e){i.uniform1uiv(this.addr,e)}function mx(i,e){i.uniform2uiv(this.addr,e)}function _x(i,e){i.uniform3uiv(this.addr,e)}function gx(i,e){i.uniform4uiv(this.addr,e)}function vx(i,e,t){const n=this.cache,r=e.length,s=va(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Xh,s[a])}function xx(i,e,t){const n=this.cache,r=e.length,s=va(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Yh,s[a])}function yx(i,e,t){const n=this.cache,r=e.length,s=va(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||$h,s[a])}function Mx(i,e,t){const n=this.cache,r=e.length,s=va(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||qh,s[a])}function Sx(i){switch(i){case 5126:return ix;case 35664:return rx;case 35665:return sx;case 35666:return ox;case 35674:return ax;case 35675:return cx;case 35676:return lx;case 5124:case 35670:return ux;case 35667:case 35671:return dx;case 35668:case 35672:return hx;case 35669:case 35673:return fx;case 5125:return px;case 36294:return mx;case 36295:return _x;case 36296:return gx;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return yx;case 36289:case 36303:case 36311:case 36292:return Mx}}class Ex{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=nx(t.type)}}class bx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Sx(t.type)}}class Tx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const oc=/(\w+)(\])?(\[|\.)?/g;function cd(i,e){i.seq.push(e),i.map[e.id]=e}function wx(i,e,t){const n=i.name,r=n.length;for(oc.lastIndex=0;;){const s=oc.exec(n),a=oc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){cd(t,l===void 0?new Ex(o,i,e):new bx(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Tx(o),cd(t,d)),t=d}}}class Vo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);wx(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function ld(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ax=37297;let Cx=0;function Rx(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Px(i){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(i);let n;switch(e===t?n="":e===jo&&t===$o?n="LinearDisplayP3ToLinearSRGB":e===$o&&t===jo&&(n="LinearSRGBToLinearDisplayP3"),i){case li:case ma:return[n,"LinearTransferOETF"];case Pt:case sl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ud(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Rx(i.getShaderSource(e),a)}else return r}function Lx(i,e){const t=Px(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Dx(i,e){let t;switch(e){case Rm:t="Linear";break;case Pm:t="Reinhard";break;case Lm:t="OptimizedCineon";break;case Dm:t="ACESFilmic";break;case Nm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Nx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(As).join(`
`)}function Ix(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ux(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function As(i){return i!==""}function dd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(i){return i.replace(Ox,Bx)}const Fx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Bx(i,e){let t=Ne[e];if(t===void 0){const n=Fx.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ac(t)}const kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fd(i){return i.replace(kx,zx)}function zx(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pd(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===im?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Hx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qr:case es:e="ENVMAP_TYPE_CUBE";break;case pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function Wx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Mh:e="ENVMAP_BLENDING_MULTIPLY";break;case Am:e="ENVMAP_BLENDING_MIX";break;case Cm:e="ENVMAP_BLENDING_ADD";break}return e}function Xx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qx(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Vx(t),l=Hx(t),u=Gx(t),d=Wx(t),h=Xx(t),f=t.isWebGL2?"":Nx(t),g=Ix(s),p=r.createProgram();let m,_,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(As).join(`
`),m.length>0&&(m+=`
`),_=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(As).join(`
`),_.length>0&&(_+=`
`)):(m=[pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),_=[f,pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Li?Dx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Lx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),a=Ac(a),a=dd(a,t),a=hd(a,t),o=Ac(o),o=dd(o,t),o=hd(o,t),a=fd(a),o=fd(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=E+m+a,M=E+_+o,v=ld(r,r.VERTEX_SHADER,y),T=ld(r,r.FRAGMENT_SHADER,M);r.attachShader(p,v),r.attachShader(p,T),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function b(D){if(i.debug.checkShaderErrors){const L=r.getProgramInfoLog(p).trim(),O=r.getShaderInfoLog(v).trim(),R=r.getShaderInfoLog(T).trim();let U=!0,F=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,v,T);else{const B=ud(r,v,"vertex"),Z=ud(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+L+`
`+B+`
`+Z)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(O===""||R==="")&&(F=!1);F&&(D.diagnostics={runnable:U,programLog:L,vertexShader:{log:O,prefix:m},fragmentShader:{log:R,prefix:_}})}r.deleteShader(v),r.deleteShader(T),w=new Vo(r,p),x=Ux(r,p)}let w;this.getUniforms=function(){return w===void 0&&b(this),w};let x;this.getAttributes=function(){return x===void 0&&b(this),x};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(p,Ax)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cx++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=T,this}let Yx=0;class $x{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jx(e),t.set(e,n)),n}}class jx{constructor(e){this.id=Yx++,this.code=e,this.usedTimes=0}}function Zx(i,e,t,n,r,s,a){const o=new Uh,c=new $x,l=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return x===0?"uv":`uv${x}`}function m(x,S,D,L,O){const R=L.fog,U=O.geometry,F=x.isMeshStandardMaterial?L.environment:null,B=(x.isMeshStandardMaterial?t:e).get(x.envMap||F),Z=B&&B.mapping===pa?B.image.height:null,X=g[x.type];x.precision!==null&&(f=r.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const Y=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,N=Y!==void 0?Y.length:0;let z=0;U.morphAttributes.position!==void 0&&(z=1),U.morphAttributes.normal!==void 0&&(z=2),U.morphAttributes.color!==void 0&&(z=3);let le,oe,Q,Se;if(X){const mt=Vn[X];le=mt.vertexShader,oe=mt.fragmentShader}else le=x.vertexShader,oe=x.fragmentShader,c.update(x),Q=c.getVertexShaderID(x),Se=c.getFragmentShaderID(x);const Be=i.getRenderTarget(),ee=O.isInstancedMesh===!0,we=!!x.map,Je=!!x.matcap,Re=!!B,V=!!x.aoMap,nn=!!x.lightMap,ve=!!x.bumpMap,Ce=!!x.normalMap,Ae=!!x.displacementMap,at=!!x.emissiveMap,Ue=!!x.metalnessMap,Oe=!!x.roughnessMap,je=x.anisotropy>0,Et=x.clearcoat>0,Nt=x.iridescence>0,P=x.sheen>0,A=x.transmission>0,W=je&&!!x.anisotropyMap,ie=Et&&!!x.clearcoatMap,te=Et&&!!x.clearcoatNormalMap,re=Et&&!!x.clearcoatRoughnessMap,_e=Nt&&!!x.iridescenceMap,ce=Nt&&!!x.iridescenceThicknessMap,he=P&&!!x.sheenColorMap,Ee=P&&!!x.sheenRoughnessMap,We=!!x.specularMap,ne=!!x.specularColorMap,Ye=!!x.specularIntensityMap,Pe=A&&!!x.transmissionMap,be=A&&!!x.thicknessMap,xe=!!x.gradientMap,me=!!x.alphaMap,He=x.alphaTest>0,I=!!x.alphaHash,de=!!x.extensions,se=!!U.attributes.uv1,K=!!U.attributes.uv2,ae=!!U.attributes.uv3;let ye=Li;return x.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(ye=i.toneMapping),{isWebGL2:u,shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:le,fragmentShader:oe,defines:x.defines,customVertexShaderID:Q,customFragmentShaderID:Se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,instancing:ee,instancingColor:ee&&O.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Be===null?i.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:li,map:we,matcap:Je,envMap:Re,envMapMode:Re&&B.mapping,envMapCubeUVHeight:Z,aoMap:V,lightMap:nn,bumpMap:ve,normalMap:Ce,displacementMap:h&&Ae,emissiveMap:at,normalMapObjectSpace:Ce&&x.normalMapType===Ym,normalMapTangentSpace:Ce&&x.normalMapType===qm,metalnessMap:Ue,roughnessMap:Oe,anisotropy:je,anisotropyMap:W,clearcoat:Et,clearcoatMap:ie,clearcoatNormalMap:te,clearcoatRoughnessMap:re,iridescence:Nt,iridescenceMap:_e,iridescenceThicknessMap:ce,sheen:P,sheenColorMap:he,sheenRoughnessMap:Ee,specularMap:We,specularColorMap:ne,specularIntensityMap:Ye,transmission:A,transmissionMap:Pe,thicknessMap:be,gradientMap:xe,opaque:x.transparent===!1&&x.blending===$r,alphaMap:me,alphaTest:He,alphaHash:I,combine:x.combine,mapUv:we&&p(x.map.channel),aoMapUv:V&&p(x.aoMap.channel),lightMapUv:nn&&p(x.lightMap.channel),bumpMapUv:ve&&p(x.bumpMap.channel),normalMapUv:Ce&&p(x.normalMap.channel),displacementMapUv:Ae&&p(x.displacementMap.channel),emissiveMapUv:at&&p(x.emissiveMap.channel),metalnessMapUv:Ue&&p(x.metalnessMap.channel),roughnessMapUv:Oe&&p(x.roughnessMap.channel),anisotropyMapUv:W&&p(x.anisotropyMap.channel),clearcoatMapUv:ie&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:he&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&p(x.sheenRoughnessMap.channel),specularMapUv:We&&p(x.specularMap.channel),specularColorMapUv:ne&&p(x.specularColorMap.channel),specularIntensityMapUv:Ye&&p(x.specularIntensityMap.channel),transmissionMapUv:Pe&&p(x.transmissionMap.channel),thicknessMapUv:be&&p(x.thicknessMap.channel),alphaMapUv:me&&p(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Ce||je),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:se,vertexUv2s:K,vertexUv3s:ae,pointsUvs:O.isPoints===!0&&!!U.attributes.uv&&(we||me),fog:!!R,useFog:x.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:z,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,useLegacyLights:i._useLegacyLights,decodeVideoTexture:we&&x.map.isVideoTexture===!0&&$e.getTransfer(x.map.colorSpace)===et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Hn,flipSided:x.side===jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:de&&x.extensions.derivatives===!0,extensionFragDepth:de&&x.extensions.fragDepth===!0,extensionDrawBuffers:de&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function _(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)S.push(D),S.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(E(S,x),y(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function E(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function y(x,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),x.push(o.mask)}function M(x){const S=g[x.type];let D;if(S){const L=Vn[S];D=I_.clone(L.uniforms)}else D=x.uniforms;return D}function v(x,S){let D;for(let L=0,O=l.length;L<O;L++){const R=l[L];if(R.cacheKey===S){D=R,++D.usedTimes;break}}return D===void 0&&(D=new qx(i,S,x,s),l.push(D)),D}function T(x){if(--x.usedTimes===0){const S=l.indexOf(x);l[S]=l[l.length-1],l.pop(),x.destroy()}}function b(x){c.remove(x)}function w(){c.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:M,acquireProgram:v,releaseProgram:T,releaseShaderCache:b,programs:l,dispose:w}}function Kx(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Jx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function md(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _d(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d,h,f,g,p,m){let _=i[e];return _===void 0?(_={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:p,group:m},i[e]=_):(_.id=d.id,_.object=d,_.geometry=h,_.material=f,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=p,_.group=m),e++,_}function o(d,h,f,g,p,m){const _=a(d,h,f,g,p,m);f.transmission>0?n.push(_):f.transparent===!0?r.push(_):t.push(_)}function c(d,h,f,g,p,m){const _=a(d,h,f,g,p,m);f.transmission>0?n.unshift(_):f.transparent===!0?r.unshift(_):t.unshift(_)}function l(d,h){t.length>1&&t.sort(d||Jx),n.length>1&&n.sort(h||md),r.length>1&&r.sort(h||md)}function u(){for(let d=e,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Qx(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new _d,i.set(n,[a])):r>=s.length?(a=new _d,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ey(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Ge};break;case"SpotLight":t={position:new G,direction:new G,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function ty(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ny=0;function iy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ry(i,e){const t=new ey,n=ty(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new G);const s=new G,a=new wt,o=new wt;function c(u,d){let h=0,f=0,g=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let p=0,m=0,_=0,E=0,y=0,M=0,v=0,T=0,b=0,w=0,x=0;u.sort(iy);const S=d===!0?Math.PI:1;for(let L=0,O=u.length;L<O;L++){const R=u[L],U=R.color,F=R.intensity,B=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=U.r*F*S,f+=U.g*F*S,g+=U.b*F*S;else if(R.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(R.sh.coefficients[X],F);x++}else if(R.isDirectionalLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity*S),R.castShadow){const Y=R.shadow,N=n.get(R);N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,r.directionalShadow[p]=N,r.directionalShadowMap[p]=Z,r.directionalShadowMatrix[p]=R.shadow.matrix,M++}r.directional[p]=X,p++}else if(R.isSpotLight){const X=t.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(U).multiplyScalar(F*S),X.distance=B,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,r.spot[_]=X;const Y=R.shadow;if(R.map&&(r.spotLightMap[b]=R.map,b++,Y.updateMatrices(R),R.castShadow&&w++),r.spotLightMatrix[_]=Y.matrix,R.castShadow){const N=n.get(R);N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,r.spotShadow[_]=N,r.spotShadowMap[_]=Z,T++}_++}else if(R.isRectAreaLight){const X=t.get(R);X.color.copy(U).multiplyScalar(F),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),r.rectArea[E]=X,E++}else if(R.isPointLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity*S),X.distance=R.distance,X.decay=R.decay,R.castShadow){const Y=R.shadow,N=n.get(R);N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,N.shadowCameraNear=Y.camera.near,N.shadowCameraFar=Y.camera.far,r.pointShadow[m]=N,r.pointShadowMap[m]=Z,r.pointShadowMatrix[m]=R.shadow.matrix,v++}r.point[m]=X,m++}else if(R.isHemisphereLight){const X=t.get(R);X.skyColor.copy(R.color).multiplyScalar(F*S),X.groundColor.copy(R.groundColor).multiplyScalar(F*S),r.hemi[y]=X,y++}}E>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=f,r.ambient[2]=g;const D=r.hash;(D.directionalLength!==p||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==E||D.hemiLength!==y||D.numDirectionalShadows!==M||D.numPointShadows!==v||D.numSpotShadows!==T||D.numSpotMaps!==b||D.numLightProbes!==x)&&(r.directional.length=p,r.spot.length=_,r.rectArea.length=E,r.point.length=m,r.hemi.length=y,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=v,r.pointShadowMap.length=v,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=v,r.spotLightMatrix.length=T+b-w,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=w,r.numLightProbes=x,D.directionalLength=p,D.pointLength=m,D.spotLength=_,D.rectAreaLength=E,D.hemiLength=y,D.numDirectionalShadows=M,D.numPointShadows=v,D.numSpotShadows=T,D.numSpotMaps=b,D.numLightProbes=x,r.version=ny++)}function l(u,d){let h=0,f=0,g=0,p=0,m=0;const _=d.matrixWorldInverse;for(let E=0,y=u.length;E<y;E++){const M=u[E];if(M.isDirectionalLight){const v=r.directional[h];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),h++}else if(M.isSpotLight){const v=r.spot[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),g++}else if(M.isRectAreaLight){const v=r.rectArea[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(_),o.identity(),a.copy(M.matrixWorld),a.premultiply(_),o.extractRotation(a),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){const v=r.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(_),f++}else if(M.isHemisphereLight){const v=r.hemi[m];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(_),m++}}}return{setup:c,setupView:l,state:r}}function gd(i,e){const t=new ry(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(d){n.push(d)}function o(d){r.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function sy(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let c;return o===void 0?(c=new gd(i,e),t.set(s,[c])):a>=o.length?(c=new gd(i,e),o.push(c)):c=o[a],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class oy extends Qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ay extends Qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ly=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uy(i,e,t){let n=new Gh;const r=new qe,s=new qe,a=new Lt,o=new oy({depthPacking:Xm}),c=new ay,l={},u=t.maxTextureSize,d={[Ui]:jt,[jt]:Ui,[Hn]:Hn},h=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:cy,fragmentShader:ly}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new fi;g.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new wi(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yh;let _=this.type;this.render=function(v,T,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const w=i.getRenderTarget(),x=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Pi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const L=_!==ii&&this.type===ii,O=_===ii&&this.type!==ii;for(let R=0,U=v.length;R<U;R++){const F=v[R],B=F.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const Z=B.getFrameExtents();if(r.multiply(Z),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,B.mapSize.y=s.y)),B.map===null||L===!0||O===!0){const Y=this.type!==ii?{minFilter:Wt,magFilter:Wt}:{};B.map!==null&&B.map.dispose(),B.map=new mr(r.x,r.y,Y),B.map.texture.name=F.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const X=B.getViewportCount();for(let Y=0;Y<X;Y++){const N=B.getViewport(Y);a.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),D.viewport(a),B.updateMatrices(F,Y),n=B.getFrustum(),M(T,b,B.camera,F,this.type)}B.isPointLightShadow!==!0&&this.type===ii&&E(B,b),B.needsUpdate=!1}_=this.type,m.needsUpdate=!1,i.setRenderTarget(w,x,S)};function E(v,T){const b=e.update(p);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new mr(r.x,r.y)),h.uniforms.shadow_pass.value=v.map.texture,h.uniforms.resolution.value=v.mapSize,h.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(T,null,b,h,p,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(T,null,b,f,p,null)}function y(v,T,b,w){let x=null;const S=b.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(S!==void 0)x=S;else if(x=b.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const D=x.uuid,L=T.uuid;let O=l[D];O===void 0&&(O={},l[D]=O);let R=O[L];R===void 0&&(R=x.clone(),O[L]=R),x=R}if(x.visible=T.visible,x.wireframe=T.wireframe,w===ii?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:d[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,b.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const D=i.properties.get(x);D.light=b}return x}function M(v,T,b,w,x){if(v.visible===!1)return;if(v.layers.test(T.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&x===ii)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,v.matrixWorld);const L=e.update(v),O=v.material;if(Array.isArray(O)){const R=L.groups;for(let U=0,F=R.length;U<F;U++){const B=R[U],Z=O[B.materialIndex];if(Z&&Z.visible){const X=y(v,Z,w,x);i.renderBufferDirect(b,null,L,X,v,B)}}}else if(O.visible){const R=y(v,O,w,x);i.renderBufferDirect(b,null,L,R,v,null)}}const D=v.children;for(let L=0,O=D.length;L<O;L++)M(D[L],T,b,w,x)}}function dy(i,e,t){const n=t.isWebGL2;function r(){let I=!1;const de=new Lt;let se=null;const K=new Lt(0,0,0,0);return{setMask:function(ae){se!==ae&&!I&&(i.colorMask(ae,ae,ae,ae),se=ae)},setLocked:function(ae){I=ae},setClear:function(ae,ye,Xe,mt,gn){gn===!0&&(ae*=mt,ye*=mt,Xe*=mt),de.set(ae,ye,Xe,mt),K.equals(de)===!1&&(i.clearColor(ae,ye,Xe,mt),K.copy(de))},reset:function(){I=!1,se=null,K.set(-1,0,0,0)}}}function s(){let I=!1,de=null,se=null,K=null;return{setTest:function(ae){ae?we(i.DEPTH_TEST):Je(i.DEPTH_TEST)},setMask:function(ae){de!==ae&&!I&&(i.depthMask(ae),de=ae)},setFunc:function(ae){if(se!==ae){switch(ae){case ym:i.depthFunc(i.NEVER);break;case Mm:i.depthFunc(i.ALWAYS);break;case Sm:i.depthFunc(i.LESS);break;case qo:i.depthFunc(i.LEQUAL);break;case Em:i.depthFunc(i.EQUAL);break;case bm:i.depthFunc(i.GEQUAL);break;case Tm:i.depthFunc(i.GREATER);break;case wm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=ae}},setLocked:function(ae){I=ae},setClear:function(ae){K!==ae&&(i.clearDepth(ae),K=ae)},reset:function(){I=!1,de=null,se=null,K=null}}}function a(){let I=!1,de=null,se=null,K=null,ae=null,ye=null,Xe=null,mt=null,gn=null;return{setTest:function(Qe){I||(Qe?we(i.STENCIL_TEST):Je(i.STENCIL_TEST))},setMask:function(Qe){de!==Qe&&!I&&(i.stencilMask(Qe),de=Qe)},setFunc:function(Qe,zt,Bn){(se!==Qe||K!==zt||ae!==Bn)&&(i.stencilFunc(Qe,zt,Bn),se=Qe,K=zt,ae=Bn)},setOp:function(Qe,zt,Bn){(ye!==Qe||Xe!==zt||mt!==Bn)&&(i.stencilOp(Qe,zt,Bn),ye=Qe,Xe=zt,mt=Bn)},setLocked:function(Qe){I=Qe},setClear:function(Qe){gn!==Qe&&(i.clearStencil(Qe),gn=Qe)},reset:function(){I=!1,de=null,se=null,K=null,ae=null,ye=null,Xe=null,mt=null,gn=null}}}const o=new r,c=new s,l=new a,u=new WeakMap,d=new WeakMap;let h={},f={},g=new WeakMap,p=[],m=null,_=!1,E=null,y=null,M=null,v=null,T=null,b=null,w=null,x=new Ge(0,0,0),S=0,D=!1,L=null,O=null,R=null,U=null,F=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,X=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=X>=2);let N=null,z={};const le=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),Q=new Lt().fromArray(le),Se=new Lt().fromArray(oe);function Be(I,de,se,K){const ae=new Uint8Array(4),ye=i.createTexture();i.bindTexture(I,ye),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<se;Xe++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(de,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(de+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return ye}const ee={};ee[i.TEXTURE_2D]=Be(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=Be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ee[i.TEXTURE_2D_ARRAY]=Be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=Be(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),we(i.DEPTH_TEST),c.setFunc(qo),Ue(!1),Oe(Jl),we(i.CULL_FACE),Ae(Pi);function we(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Je(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Re(I,de){return f[I]!==de?(i.bindFramebuffer(I,de),f[I]=de,n&&(I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=de),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=de)),!0):!1}function V(I,de){let se=p,K=!1;if(I)if(se=g.get(de),se===void 0&&(se=[],g.set(de,se)),I.isWebGLMultipleRenderTargets){const ae=I.texture;if(se.length!==ae.length||se[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,Xe=ae.length;ye<Xe;ye++)se[ye]=i.COLOR_ATTACHMENT0+ye;se.length=ae.length,K=!0}}else se[0]!==i.COLOR_ATTACHMENT0&&(se[0]=i.COLOR_ATTACHMENT0,K=!0);else se[0]!==i.BACK&&(se[0]=i.BACK,K=!0);K&&(t.isWebGL2?i.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function nn(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const ve={[sr]:i.FUNC_ADD,[sm]:i.FUNC_SUBTRACT,[om]:i.FUNC_REVERSE_SUBTRACT};if(n)ve[nu]=i.MIN,ve[iu]=i.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(ve[nu]=I.MIN_EXT,ve[iu]=I.MAX_EXT)}const Ce={[am]:i.ZERO,[cm]:i.ONE,[lm]:i.SRC_COLOR,[xc]:i.SRC_ALPHA,[mm]:i.SRC_ALPHA_SATURATE,[fm]:i.DST_COLOR,[dm]:i.DST_ALPHA,[um]:i.ONE_MINUS_SRC_COLOR,[yc]:i.ONE_MINUS_SRC_ALPHA,[pm]:i.ONE_MINUS_DST_COLOR,[hm]:i.ONE_MINUS_DST_ALPHA,[_m]:i.CONSTANT_COLOR,[gm]:i.ONE_MINUS_CONSTANT_COLOR,[vm]:i.CONSTANT_ALPHA,[xm]:i.ONE_MINUS_CONSTANT_ALPHA};function Ae(I,de,se,K,ae,ye,Xe,mt,gn,Qe){if(I===Pi){_===!0&&(Je(i.BLEND),_=!1);return}if(_===!1&&(we(i.BLEND),_=!0),I!==rm){if(I!==E||Qe!==D){if((y!==sr||T!==sr)&&(i.blendEquation(i.FUNC_ADD),y=sr,T=sr),Qe)switch(I){case $r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ql:i.blendFunc(i.ONE,i.ONE);break;case eu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case $r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ql:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case eu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,v=null,b=null,w=null,x.set(0,0,0),S=0,E=I,D=Qe}return}ae=ae||de,ye=ye||se,Xe=Xe||K,(de!==y||ae!==T)&&(i.blendEquationSeparate(ve[de],ve[ae]),y=de,T=ae),(se!==M||K!==v||ye!==b||Xe!==w)&&(i.blendFuncSeparate(Ce[se],Ce[K],Ce[ye],Ce[Xe]),M=se,v=K,b=ye,w=Xe),(mt.equals(x)===!1||gn!==S)&&(i.blendColor(mt.r,mt.g,mt.b,gn),x.copy(mt),S=gn),E=I,D=!1}function at(I,de){I.side===Hn?Je(i.CULL_FACE):we(i.CULL_FACE);let se=I.side===jt;de&&(se=!se),Ue(se),I.blending===$r&&I.transparent===!1?Ae(Pi):Ae(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),o.setMask(I.colorWrite);const K=I.stencilWrite;l.setTest(K),K&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Et(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?we(i.SAMPLE_ALPHA_TO_COVERAGE):Je(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(I){L!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),L=I)}function Oe(I){I!==tm?(we(i.CULL_FACE),I!==O&&(I===Jl?i.cullFace(i.BACK):I===nm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Je(i.CULL_FACE),O=I}function je(I){I!==R&&(Z&&i.lineWidth(I),R=I)}function Et(I,de,se){I?(we(i.POLYGON_OFFSET_FILL),(U!==de||F!==se)&&(i.polygonOffset(de,se),U=de,F=se)):Je(i.POLYGON_OFFSET_FILL)}function Nt(I){I?we(i.SCISSOR_TEST):Je(i.SCISSOR_TEST)}function P(I){I===void 0&&(I=i.TEXTURE0+B-1),N!==I&&(i.activeTexture(I),N=I)}function A(I,de,se){se===void 0&&(N===null?se=i.TEXTURE0+B-1:se=N);let K=z[se];K===void 0&&(K={type:void 0,texture:void 0},z[se]=K),(K.type!==I||K.texture!==de)&&(N!==se&&(i.activeTexture(se),N=se),i.bindTexture(I,de||ee[I]),K.type=I,K.texture=de)}function W(){const I=z[N];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function We(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ye(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(I){Q.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Q.copy(I))}function be(I){Se.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Se.copy(I))}function xe(I,de){let se=d.get(de);se===void 0&&(se=new WeakMap,d.set(de,se));let K=se.get(I);K===void 0&&(K=i.getUniformBlockIndex(de,I.name),se.set(I,K))}function me(I,de){const K=d.get(de).get(I);u.get(de)!==K&&(i.uniformBlockBinding(de,K,I.__bindingPointIndex),u.set(de,K))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},N=null,z={},f={},g=new WeakMap,p=[],m=null,_=!1,E=null,y=null,M=null,v=null,T=null,b=null,w=null,x=new Ge(0,0,0),S=0,D=!1,L=null,O=null,R=null,U=null,F=null,Q.set(0,0,i.canvas.width,i.canvas.height),Se.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:we,disable:Je,bindFramebuffer:Re,drawBuffers:V,useProgram:nn,setBlending:Ae,setMaterial:at,setFlipSided:Ue,setCullFace:Oe,setLineWidth:je,setPolygonOffset:Et,setScissorTest:Nt,activeTexture:P,bindTexture:A,unbindTexture:W,compressedTexImage2D:ie,compressedTexImage3D:te,texImage2D:ne,texImage3D:Ye,updateUBOMapping:xe,uniformBlockBinding:me,texStorage2D:Ee,texStorage3D:We,texSubImage2D:re,texSubImage3D:_e,compressedTexSubImage2D:ce,compressedTexSubImage3D:he,scissor:Pe,viewport:be,reset:He}}function hy(i,e,t,n,r,s,a){const o=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,A){return _?new OffscreenCanvas(P,A):Jo("canvas")}function y(P,A,W,ie){let te=1;if((P.width>ie||P.height>ie)&&(te=ie/Math.max(P.width,P.height)),te<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const re=A?Ko:Math.floor,_e=re(te*P.width),ce=re(te*P.height);p===void 0&&(p=E(_e,ce));const he=W?E(_e,ce):p;return he.width=_e,he.height=ce,he.getContext("2d").drawImage(P,0,0,_e,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+_e+"x"+ce+")."),he}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function M(P){return wc(P.width)&&wc(P.height)}function v(P){return o?!1:P.wrapS!==Dn||P.wrapT!==Dn||P.minFilter!==Wt&&P.minFilter!==Mn}function T(P,A){return P.generateMipmaps&&A&&P.minFilter!==Wt&&P.minFilter!==Mn}function b(P){i.generateMipmap(P)}function w(P,A,W,ie,te=!1){if(o===!1)return A;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let re=A;if(A===i.RED&&(W===i.FLOAT&&(re=i.R32F),W===i.HALF_FLOAT&&(re=i.R16F),W===i.UNSIGNED_BYTE&&(re=i.R8)),A===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(re=i.R8UI),W===i.UNSIGNED_SHORT&&(re=i.R16UI),W===i.UNSIGNED_INT&&(re=i.R32UI),W===i.BYTE&&(re=i.R8I),W===i.SHORT&&(re=i.R16I),W===i.INT&&(re=i.R32I)),A===i.RG&&(W===i.FLOAT&&(re=i.RG32F),W===i.HALF_FLOAT&&(re=i.RG16F),W===i.UNSIGNED_BYTE&&(re=i.RG8)),A===i.RGBA){const _e=te?Yo:$e.getTransfer(ie);W===i.FLOAT&&(re=i.RGBA32F),W===i.HALF_FLOAT&&(re=i.RGBA16F),W===i.UNSIGNED_BYTE&&(re=_e===et?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function x(P,A,W){return T(P,W)===!0||P.isFramebufferTexture&&P.minFilter!==Wt&&P.minFilter!==Mn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function S(P){return P===Wt||P===ru||P===Na?i.NEAREST:i.LINEAR}function D(P){const A=P.target;A.removeEventListener("dispose",D),O(A),A.isVideoTexture&&g.delete(A)}function L(P){const A=P.target;A.removeEventListener("dispose",L),U(A)}function O(P){const A=n.get(P);if(A.__webglInit===void 0)return;const W=P.source,ie=m.get(W);if(ie){const te=ie[A.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(P),Object.keys(ie).length===0&&m.delete(W)}n.remove(P)}function R(P){const A=n.get(P);i.deleteTexture(A.__webglTexture);const W=P.source,ie=m.get(W);delete ie[A.__cacheKey],a.memory.textures--}function U(P){const A=P.texture,W=n.get(P),ie=n.get(A);if(ie.__webglTexture!==void 0&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(W.__webglFramebuffer[te]))for(let re=0;re<W.__webglFramebuffer[te].length;re++)i.deleteFramebuffer(W.__webglFramebuffer[te][re]);else i.deleteFramebuffer(W.__webglFramebuffer[te]);W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer[te])}else{if(Array.isArray(W.__webglFramebuffer))for(let te=0;te<W.__webglFramebuffer.length;te++)i.deleteFramebuffer(W.__webglFramebuffer[te]);else i.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&i.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let te=0;te<W.__webglColorRenderbuffer.length;te++)W.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(W.__webglColorRenderbuffer[te]);W.__webglDepthRenderbuffer&&i.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let te=0,re=A.length;te<re;te++){const _e=n.get(A[te]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(A[te])}n.remove(A),n.remove(P)}let F=0;function B(){F=0}function Z(){const P=F;return P>=c&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+c),F+=1,P}function X(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function Y(P,A){const W=n.get(P);if(P.isVideoTexture&&Et(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){const ie=P.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(W,P,A);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+A)}function N(P,A){const W=n.get(P);if(P.version>0&&W.__version!==P.version){we(W,P,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+A)}function z(P,A){const W=n.get(P);if(P.version>0&&W.__version!==P.version){we(W,P,A);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+A)}function le(P,A){const W=n.get(P);if(P.version>0&&W.__version!==P.version){Je(W,P,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+A)}const oe={[Ec]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[bc]:i.MIRRORED_REPEAT},Q={[Wt]:i.NEAREST,[ru]:i.NEAREST_MIPMAP_NEAREST,[Na]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[Im]:i.LINEAR_MIPMAP_NEAREST,[ks]:i.LINEAR_MIPMAP_LINEAR},Se={[$m]:i.NEVER,[t_]:i.ALWAYS,[jm]:i.LESS,[Km]:i.LEQUAL,[Zm]:i.EQUAL,[e_]:i.GEQUAL,[Jm]:i.GREATER,[Qm]:i.NOTEQUAL};function Be(P,A,W){if(W?(i.texParameteri(P,i.TEXTURE_WRAP_S,oe[A.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,oe[A.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,oe[A.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Q[A.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Q[A.minFilter])):(i.texParameteri(P,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(P,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==Dn||A.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,i.TEXTURE_MAG_FILTER,S(A.magFilter)),i.texParameteri(P,i.TEXTURE_MIN_FILTER,S(A.minFilter)),A.minFilter!==Wt&&A.minFilter!==Mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Se[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Wt||A.minFilter!==Na&&A.minFilter!==ks||A.type===Ti&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===zs&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(P,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function ee(P,A){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",D));const ie=A.source;let te=m.get(ie);te===void 0&&(te={},m.set(ie,te));const re=X(A);if(re!==P.__cacheKey){te[re]===void 0&&(te[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),te[re].usedTimes++;const _e=te[P.__cacheKey];_e!==void 0&&(te[P.__cacheKey].usedTimes--,_e.usedTimes===0&&R(A)),P.__cacheKey=re,P.__webglTexture=te[re].texture}return W}function we(P,A,W){let ie=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ie=i.TEXTURE_3D);const te=ee(P,A),re=A.source;t.bindTexture(ie,P.__webglTexture,i.TEXTURE0+W);const _e=n.get(re);if(re.version!==_e.__version||te===!0){t.activeTexture(i.TEXTURE0+W);const ce=$e.getPrimaries($e.workingColorSpace),he=A.colorSpace===En?null:$e.getPrimaries(A.colorSpace),Ee=A.colorSpace===En||ce===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const We=v(A)&&M(A.image)===!1;let ne=y(A.image,We,!1,u);ne=Nt(A,ne);const Ye=M(ne)||o,Pe=s.convert(A.format,A.colorSpace);let be=s.convert(A.type),xe=w(A.internalFormat,Pe,be,A.colorSpace,A.isVideoTexture);Be(ie,A,Ye);let me;const He=A.mipmaps,I=o&&A.isVideoTexture!==!0,de=_e.__version===void 0||te===!0,se=x(A,ne,Ye);if(A.isDepthTexture)xe=i.DEPTH_COMPONENT,o?A.type===Ti?xe=i.DEPTH_COMPONENT32F:A.type===bi?xe=i.DEPTH_COMPONENT24:A.type===cr?xe=i.DEPTH24_STENCIL8:xe=i.DEPTH_COMPONENT16:A.type===Ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===lr&&xe===i.DEPTH_COMPONENT&&A.type!==rl&&A.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=bi,be=s.convert(A.type)),A.format===ts&&xe===i.DEPTH_COMPONENT&&(xe=i.DEPTH_STENCIL,A.type!==cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=cr,be=s.convert(A.type))),de&&(I?t.texStorage2D(i.TEXTURE_2D,1,xe,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,xe,ne.width,ne.height,0,Pe,be,null));else if(A.isDataTexture)if(He.length>0&&Ye){I&&de&&t.texStorage2D(i.TEXTURE_2D,se,xe,He[0].width,He[0].height);for(let K=0,ae=He.length;K<ae;K++)me=He[K],I?t.texSubImage2D(i.TEXTURE_2D,K,0,0,me.width,me.height,Pe,be,me.data):t.texImage2D(i.TEXTURE_2D,K,xe,me.width,me.height,0,Pe,be,me.data);A.generateMipmaps=!1}else I?(de&&t.texStorage2D(i.TEXTURE_2D,se,xe,ne.width,ne.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,Pe,be,ne.data)):t.texImage2D(i.TEXTURE_2D,0,xe,ne.width,ne.height,0,Pe,be,ne.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){I&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,xe,He[0].width,He[0].height,ne.depth);for(let K=0,ae=He.length;K<ae;K++)me=He[K],A.format!==Nn?Pe!==null?I?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,me.width,me.height,ne.depth,Pe,me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,xe,me.width,me.height,ne.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,me.width,me.height,ne.depth,Pe,be,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,xe,me.width,me.height,ne.depth,0,Pe,be,me.data)}else{I&&de&&t.texStorage2D(i.TEXTURE_2D,se,xe,He[0].width,He[0].height);for(let K=0,ae=He.length;K<ae;K++)me=He[K],A.format!==Nn?Pe!==null?I?t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,me.width,me.height,Pe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,K,xe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage2D(i.TEXTURE_2D,K,0,0,me.width,me.height,Pe,be,me.data):t.texImage2D(i.TEXTURE_2D,K,xe,me.width,me.height,0,Pe,be,me.data)}else if(A.isDataArrayTexture)I?(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,xe,ne.width,ne.height,ne.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Pe,be,ne.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,ne.width,ne.height,ne.depth,0,Pe,be,ne.data);else if(A.isData3DTexture)I?(de&&t.texStorage3D(i.TEXTURE_3D,se,xe,ne.width,ne.height,ne.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Pe,be,ne.data)):t.texImage3D(i.TEXTURE_3D,0,xe,ne.width,ne.height,ne.depth,0,Pe,be,ne.data);else if(A.isFramebufferTexture){if(de)if(I)t.texStorage2D(i.TEXTURE_2D,se,xe,ne.width,ne.height);else{let K=ne.width,ae=ne.height;for(let ye=0;ye<se;ye++)t.texImage2D(i.TEXTURE_2D,ye,xe,K,ae,0,Pe,be,null),K>>=1,ae>>=1}}else if(He.length>0&&Ye){I&&de&&t.texStorage2D(i.TEXTURE_2D,se,xe,He[0].width,He[0].height);for(let K=0,ae=He.length;K<ae;K++)me=He[K],I?t.texSubImage2D(i.TEXTURE_2D,K,0,0,Pe,be,me):t.texImage2D(i.TEXTURE_2D,K,xe,Pe,be,me);A.generateMipmaps=!1}else I?(de&&t.texStorage2D(i.TEXTURE_2D,se,xe,ne.width,ne.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pe,be,ne)):t.texImage2D(i.TEXTURE_2D,0,xe,Pe,be,ne);T(A,Ye)&&b(ie),_e.__version=re.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Je(P,A,W){if(A.image.length!==6)return;const ie=ee(P,A),te=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);const re=n.get(te);if(te.version!==re.__version||ie===!0){t.activeTexture(i.TEXTURE0+W);const _e=$e.getPrimaries($e.workingColorSpace),ce=A.colorSpace===En?null:$e.getPrimaries(A.colorSpace),he=A.colorSpace===En||_e===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ee=A.isCompressedTexture||A.image[0].isCompressedTexture,We=A.image[0]&&A.image[0].isDataTexture,ne=[];for(let K=0;K<6;K++)!Ee&&!We?ne[K]=y(A.image[K],!1,!0,l):ne[K]=We?A.image[K].image:A.image[K],ne[K]=Nt(A,ne[K]);const Ye=ne[0],Pe=M(Ye)||o,be=s.convert(A.format,A.colorSpace),xe=s.convert(A.type),me=w(A.internalFormat,be,xe,A.colorSpace),He=o&&A.isVideoTexture!==!0,I=re.__version===void 0||ie===!0;let de=x(A,Ye,Pe);Be(i.TEXTURE_CUBE_MAP,A,Pe);let se;if(Ee){He&&I&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,me,Ye.width,Ye.height);for(let K=0;K<6;K++){se=ne[K].mipmaps;for(let ae=0;ae<se.length;ae++){const ye=se[ae];A.format!==Nn?be!==null?He?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,0,0,ye.width,ye.height,be,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,me,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,0,0,ye.width,ye.height,be,xe,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,me,ye.width,ye.height,0,be,xe,ye.data)}}}else{se=A.mipmaps,He&&I&&(se.length>0&&de++,t.texStorage2D(i.TEXTURE_CUBE_MAP,de,me,ne[0].width,ne[0].height));for(let K=0;K<6;K++)if(We){He?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ne[K].width,ne[K].height,be,xe,ne[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,me,ne[K].width,ne[K].height,0,be,xe,ne[K].data);for(let ae=0;ae<se.length;ae++){const Xe=se[ae].image[K].image;He?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,0,0,Xe.width,Xe.height,be,xe,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,me,Xe.width,Xe.height,0,be,xe,Xe.data)}}else{He?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,be,xe,ne[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,me,be,xe,ne[K]);for(let ae=0;ae<se.length;ae++){const ye=se[ae];He?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,0,0,be,xe,ye.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,me,be,xe,ye.image[K])}}}T(A,Pe)&&b(i.TEXTURE_CUBE_MAP),re.__version=te.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Re(P,A,W,ie,te,re){const _e=s.convert(W.format,W.colorSpace),ce=s.convert(W.type),he=w(W.internalFormat,_e,ce,W.colorSpace);if(!n.get(A).__hasExternalTextures){const We=Math.max(1,A.width>>re),ne=Math.max(1,A.height>>re);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,re,he,We,ne,A.depth,0,_e,ce,null):t.texImage2D(te,re,he,We,ne,0,_e,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),je(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,te,n.get(W).__webglTexture,0,Oe(A)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,te,n.get(W).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function V(P,A,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let ie=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(W||je(A)){const te=A.depthTexture;te&&te.isDepthTexture&&(te.type===Ti?ie=i.DEPTH_COMPONENT32F:te.type===bi&&(ie=i.DEPTH_COMPONENT24));const re=Oe(A);je(A)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,ie,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,re,ie,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,ie,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){const ie=Oe(A);W&&je(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,A.width,A.height):je(A)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{const ie=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0;te<ie.length;te++){const re=ie[te],_e=s.convert(re.format,re.colorSpace),ce=s.convert(re.type),he=w(re.internalFormat,_e,ce,re.colorSpace),Ee=Oe(A);W&&je(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,he,A.width,A.height):je(A)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,he,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,he,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function nn(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Y(A.depthTexture,0);const ie=n.get(A.depthTexture).__webglTexture,te=Oe(A);if(A.depthTexture.format===lr)je(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(A.depthTexture.format===ts)je(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ve(P){const A=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");nn(A.__webglFramebuffer,P)}else if(W){A.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ie]),A.__webglDepthbuffer[ie]=i.createRenderbuffer(),V(A.__webglDepthbuffer[ie],P,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),V(A.__webglDepthbuffer,P,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(P,A,W){const ie=n.get(P);A!==void 0&&Re(ie.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&ve(P)}function Ae(P){const A=P.texture,W=n.get(P),ie=n.get(A);P.addEventListener("dispose",L),P.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=A.version,a.memory.textures++);const te=P.isWebGLCubeRenderTarget===!0,re=P.isWebGLMultipleRenderTargets===!0,_e=M(P)||o;if(te){W.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(o&&A.mipmaps&&A.mipmaps.length>0){W.__webglFramebuffer[ce]=[];for(let he=0;he<A.mipmaps.length;he++)W.__webglFramebuffer[ce][he]=i.createFramebuffer()}else W.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){W.__webglFramebuffer=[];for(let ce=0;ce<A.mipmaps.length;ce++)W.__webglFramebuffer[ce]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(re)if(r.drawBuffers){const ce=P.texture;for(let he=0,Ee=ce.length;he<Ee;he++){const We=n.get(ce[he]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&je(P)===!1){const ce=re?A:[A];W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let he=0;he<ce.length;he++){const Ee=ce[he];W.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[he]);const We=s.convert(Ee.format,Ee.colorSpace),ne=s.convert(Ee.type),Ye=w(Ee.internalFormat,We,ne,Ee.colorSpace,P.isXRRenderTarget===!0),Pe=Oe(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,Ye,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,W.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),V(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),Be(i.TEXTURE_CUBE_MAP,A,_e);for(let ce=0;ce<6;ce++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let he=0;he<A.mipmaps.length;he++)Re(W.__webglFramebuffer[ce][he],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,he);else Re(W.__webglFramebuffer[ce],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);T(A,_e)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const ce=P.texture;for(let he=0,Ee=ce.length;he<Ee;he++){const We=ce[he],ne=n.get(We);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),Be(i.TEXTURE_2D,We,_e),Re(W.__webglFramebuffer,P,We,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),T(We,_e)&&b(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?ce=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,ie.__webglTexture),Be(ce,A,_e),o&&A.mipmaps&&A.mipmaps.length>0)for(let he=0;he<A.mipmaps.length;he++)Re(W.__webglFramebuffer[he],P,A,i.COLOR_ATTACHMENT0,ce,he);else Re(W.__webglFramebuffer,P,A,i.COLOR_ATTACHMENT0,ce,0);T(A,_e)&&b(ce),t.unbindTexture()}P.depthBuffer&&ve(P)}function at(P){const A=M(P)||o,W=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ie=0,te=W.length;ie<te;ie++){const re=W[ie];if(T(re,A)){const _e=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ce=n.get(re).__webglTexture;t.bindTexture(_e,ce),b(_e),t.unbindTexture()}}}function Ue(P){if(o&&P.samples>0&&je(P)===!1){const A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],W=P.width,ie=P.height;let te=i.COLOR_BUFFER_BIT;const re=[],_e=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(P),he=P.isWebGLMultipleRenderTargets===!0;if(he)for(let Ee=0;Ee<A.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Ee=0;Ee<A.length;Ee++){re.push(i.COLOR_ATTACHMENT0+Ee),P.depthBuffer&&re.push(_e);const We=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(We===!1&&(P.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),he&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[Ee]),We===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[_e]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_e])),he){const ne=n.get(A[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,W,ie,0,0,W,ie,te,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Ee=0;Ee<A.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,ce.__webglColorRenderbuffer[Ee]);const We=n.get(A[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Oe(P){return Math.min(d,P.samples)}function je(P){const A=n.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Et(P){const A=a.render.frame;g.get(P)!==A&&(g.set(P,A),P.update())}function Nt(P,A){const W=P.colorSpace,ie=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Tc||W!==li&&W!==En&&($e.getTransfer(W)===et?o===!1?e.has("EXT_sRGB")===!0&&ie===Nn?(P.format=Tc,P.minFilter=Mn,P.generateMipmaps=!1):A=Lh.sRGBToLinear(A):(ie!==Nn||te!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),A}this.allocateTextureUnit=Z,this.resetTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=N,this.setTexture3D=z,this.setTextureCube=le,this.rebindTextures=Ce,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=je}function fy(i,e,t){const n=t.isWebGL2;function r(s,a=En){let o;const c=$e.getTransfer(a);if(s===Di)return i.UNSIGNED_BYTE;if(s===bh)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Th)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Um)return i.BYTE;if(s===Om)return i.SHORT;if(s===rl)return i.UNSIGNED_SHORT;if(s===Eh)return i.INT;if(s===bi)return i.UNSIGNED_INT;if(s===Ti)return i.FLOAT;if(s===zs)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Fm)return i.ALPHA;if(s===Nn)return i.RGBA;if(s===Bm)return i.LUMINANCE;if(s===km)return i.LUMINANCE_ALPHA;if(s===lr)return i.DEPTH_COMPONENT;if(s===ts)return i.DEPTH_STENCIL;if(s===Tc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===zm)return i.RED;if(s===wh)return i.RED_INTEGER;if(s===Vm)return i.RG;if(s===Ah)return i.RG_INTEGER;if(s===Ch)return i.RGBA_INTEGER;if(s===Ia||s===Ua||s===Oa||s===Fa)if(c===et)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ia)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ia)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ua)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===su||s===ou||s===au||s===cu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===su)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ou)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===au)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===cu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===lu||s===uu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===lu)return c===et?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===uu)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===du||s===hu||s===fu||s===pu||s===mu||s===_u||s===gu||s===vu||s===xu||s===yu||s===Mu||s===Su||s===Eu||s===bu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===du)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hu)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fu)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pu)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mu)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_u)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gu)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vu)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xu)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yu)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Mu)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Su)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Eu)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bu)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ba||s===Tu||s===wu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Ba)return c===et?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Tu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===wu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Gm||s===Au||s===Cu||s===Ru)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ba)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Au)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Cu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ru)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===cr?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class py extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class No extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const my={type:"move"};class ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new No,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new No,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new No,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n),_=this._getHandJoint(l,p);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(my)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new No;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class _y extends fn{constructor(e,t,n,r,s,a,o,c,l,u){if(u=u!==void 0?u:lr,u!==lr&&u!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===lr&&(n=bi),n===void 0&&u===ts&&(n=cr),super(null,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wt,this.minFilter=c!==void 0?c:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gy extends hi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const p=t.getContextAttributes();let m=null,_=null;const E=[],y=[],M=new Sn;M.layers.enable(1),M.viewport=new Lt;const v=new Sn;v.layers.enable(2),v.viewport=new Lt;const T=[M,v],b=new py;b.layers.enable(1),b.layers.enable(2);let w=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let z=E[N];return z===void 0&&(z=new ac,E[N]=z),z.getTargetRaySpace()},this.getControllerGrip=function(N){let z=E[N];return z===void 0&&(z=new ac,E[N]=z),z.getGripSpace()},this.getHand=function(N){let z=E[N];return z===void 0&&(z=new ac,E[N]=z),z.getHandSpace()};function S(N){const z=y.indexOf(N.inputSource);if(z===-1)return;const le=E[z];le!==void 0&&(le.update(N.inputSource,N.frame,l||a),le.dispatchEvent({type:N.type,data:N.inputSource}))}function D(){r.removeEventListener("select",S),r.removeEventListener("selectstart",S),r.removeEventListener("selectend",S),r.removeEventListener("squeeze",S),r.removeEventListener("squeezestart",S),r.removeEventListener("squeezeend",S),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",L);for(let N=0;N<E.length;N++){const z=y[N];z!==null&&(y[N]=null,E[N].disconnect(z))}w=null,x=null,e.setRenderTarget(m),f=null,h=null,d=null,r=null,_=null,Y.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",S),r.addEventListener("selectstart",S),r.addEventListener("selectend",S),r.addEventListener("squeeze",S),r.addEventListener("squeezestart",S),r.addEventListener("squeezeend",S),r.addEventListener("end",D),r.addEventListener("inputsourceschange",L),p.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,z),r.updateRenderState({baseLayer:f}),_=new mr(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let z=null,le=null,oe=null;p.depth&&(oe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,z=p.stencil?ts:lr,le=p.stencil?cr:bi);const Q={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Q),r.updateRenderState({layers:[h]}),_=new mr(h.textureWidth,h.textureHeight,{format:Nn,type:Di,depthTexture:new _y(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Se=e.properties.get(_);Se.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Y.setContext(r),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(N){for(let z=0;z<N.removed.length;z++){const le=N.removed[z],oe=y.indexOf(le);oe>=0&&(y[oe]=null,E[oe].disconnect(le))}for(let z=0;z<N.added.length;z++){const le=N.added[z];let oe=y.indexOf(le);if(oe===-1){for(let Se=0;Se<E.length;Se++)if(Se>=y.length){y.push(le),oe=Se;break}else if(y[Se]===null){y[Se]=le,oe=Se;break}if(oe===-1)break}const Q=E[oe];Q&&Q.connect(le)}}const O=new G,R=new G;function U(N,z,le){O.setFromMatrixPosition(z.matrixWorld),R.setFromMatrixPosition(le.matrixWorld);const oe=O.distanceTo(R),Q=z.projectionMatrix.elements,Se=le.projectionMatrix.elements,Be=Q[14]/(Q[10]-1),ee=Q[14]/(Q[10]+1),we=(Q[9]+1)/Q[5],Je=(Q[9]-1)/Q[5],Re=(Q[8]-1)/Q[0],V=(Se[8]+1)/Se[0],nn=Be*Re,ve=Be*V,Ce=oe/(-Re+V),Ae=Ce*-Re;z.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ae),N.translateZ(Ce),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const at=Be+Ce,Ue=ee+Ce,Oe=nn-Ae,je=ve+(oe-Ae),Et=we*ee/Ue*at,Nt=Je*ee/Ue*at;N.projectionMatrix.makePerspective(Oe,je,Et,Nt,at,Ue),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function F(N,z){z===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(z.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;b.near=v.near=M.near=N.near,b.far=v.far=M.far=N.far,(w!==b.near||x!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,x=b.far);const z=N.parent,le=b.cameras;F(b,z);for(let oe=0;oe<le.length;oe++)F(le[oe],z);le.length===2?U(b,M,v):b.projectionMatrix.copy(M.projectionMatrix),B(N,b,z)};function B(N,z,le){le===null?N.matrix.copy(z.matrixWorld):(N.matrix.copy(le.matrixWorld),N.matrix.invert(),N.matrix.multiply(z.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(z.projectionMatrix),N.projectionMatrixInverse.copy(z.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Vs*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(N){c=N,h!==null&&(h.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)};let Z=null;function X(N,z){if(u=z.getViewerPose(l||a),g=z,u!==null){const le=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let oe=!1;le.length!==b.cameras.length&&(b.cameras.length=0,oe=!0);for(let Q=0;Q<le.length;Q++){const Se=le[Q];let Be=null;if(f!==null)Be=f.getViewport(Se);else{const we=d.getViewSubImage(h,Se);Be=we.viewport,Q===0&&(e.setRenderTargetTextures(_,we.colorTexture,h.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(_))}let ee=T[Q];ee===void 0&&(ee=new Sn,ee.layers.enable(Q),ee.viewport=new Lt,T[Q]=ee),ee.matrix.fromArray(Se.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Se.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Be.x,Be.y,Be.width,Be.height),Q===0&&(b.matrix.copy(ee.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),oe===!0&&b.cameras.push(ee)}}for(let le=0;le<E.length;le++){const oe=y[le],Q=E[le];oe!==null&&Q!==void 0&&Q.update(oe,z,l||a)}Z&&Z(N,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),g=null}const Y=new Wh;Y.setAnimationLoop(X),this.setAnimationLoop=function(N){Z=N},this.dispose=function(){}}}function vy(i,e){function t(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,zh(i)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function r(m,_,E,y,M){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(m,_):_.isMeshToonMaterial?(s(m,_),d(m,_)):_.isMeshPhongMaterial?(s(m,_),u(m,_)):_.isMeshStandardMaterial?(s(m,_),h(m,_),_.isMeshPhysicalMaterial&&f(m,_,M)):_.isMeshMatcapMaterial?(s(m,_),g(m,_)):_.isMeshDepthMaterial?s(m,_):_.isMeshDistanceMaterial?(s(m,_),p(m,_)):_.isMeshNormalMaterial?s(m,_):_.isLineBasicMaterial?(a(m,_),_.isLineDashedMaterial&&o(m,_)):_.isPointsMaterial?c(m,_,E,y):_.isSpriteMaterial?l(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,t(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===jt&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,t(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===jt&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,t(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,t(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);const E=e.get(_).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap){m.lightMap.value=_.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=_.lightMapIntensity*y,t(_.lightMap,m.lightMapTransform)}_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,m.aoMapTransform))}function a(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform))}function o(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function c(m,_,E,y){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*E,m.scale.value=y*.5,_.map&&(m.map.value=_.map,t(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function l(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function u(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function d(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function h(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,m.roughnessMapTransform)),e.get(_).envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function f(m,_,E){m.ior.value=_.ior,_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===jt&&m.clearcoatNormalScale.value.negate())),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,_){_.matcap&&(m.matcap.value=_.matcap)}function p(m,_){const E=e.get(_).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function xy(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,y){const M=y.program;n.uniformBlockBinding(E,M)}function l(E,y){let M=r[E.id];M===void 0&&(g(E),M=u(E),r[E.id]=M,E.addEventListener("dispose",m));const v=y.program;n.updateUBOMapping(E,v);const T=e.render.frame;s[E.id]!==T&&(h(E),s[E.id]=T)}function u(E){const y=d();E.__bindingPointIndex=y;const M=i.createBuffer(),v=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,v,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const y=r[E.id],M=E.uniforms,v=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,b=M.length;T<b;T++){const w=M[T];if(f(w,T,v)===!0){const x=w.__offset,S=Array.isArray(w.value)?w.value:[w.value];let D=0;for(let L=0;L<S.length;L++){const O=S[L],R=p(O);typeof O=="number"?(w.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,x+D,w.__data)):O.isMatrix3?(w.__data[0]=O.elements[0],w.__data[1]=O.elements[1],w.__data[2]=O.elements[2],w.__data[3]=O.elements[0],w.__data[4]=O.elements[3],w.__data[5]=O.elements[4],w.__data[6]=O.elements[5],w.__data[7]=O.elements[0],w.__data[8]=O.elements[6],w.__data[9]=O.elements[7],w.__data[10]=O.elements[8],w.__data[11]=O.elements[0]):(O.toArray(w.__data,D),D+=R.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,x,w.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,y,M){const v=E.value;if(M[y]===void 0){if(typeof v=="number")M[y]=v;else{const T=Array.isArray(v)?v:[v],b=[];for(let w=0;w<T.length;w++)b.push(T[w].clone());M[y]=b}return!0}else if(typeof v=="number"){if(M[y]!==v)return M[y]=v,!0}else{const T=Array.isArray(M[y])?M[y]:[M[y]],b=Array.isArray(v)?v:[v];for(let w=0;w<T.length;w++){const x=T[w];if(x.equals(b[w])===!1)return x.copy(b[w]),!0}}return!1}function g(E){const y=E.uniforms;let M=0;const v=16;let T=0;for(let b=0,w=y.length;b<w;b++){const x=y[b],S={boundary:0,storage:0},D=Array.isArray(x.value)?x.value:[x.value];for(let L=0,O=D.length;L<O;L++){const R=D[L],U=p(R);S.boundary+=U.boundary,S.storage+=U.storage}if(x.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=M,b>0){T=M%v;const L=v-T;T!==0&&L-S.boundary<0&&(M+=v-T,x.__offset=M)}M+=S.storage}return T=M%v,T>0&&(M+=v-T),E.__size=M,E.__cache={},this}function p(E){const y={boundary:0,storage:0};return typeof E=="number"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function _(){for(const E in r)i.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:c,update:l,dispose:_}}class jh{constructor(e={}){const{canvas:t=__(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;const f=new Uint32Array(4),g=new Int32Array(4);let p=null,m=null;const _=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this._useLegacyLights=!1,this.toneMapping=Li,this.toneMappingExposure=1;const y=this;let M=!1,v=0,T=0,b=null,w=-1,x=null;const S=new Lt,D=new Lt;let L=null;const O=new Ge(0);let R=0,U=t.width,F=t.height,B=1,Z=null,X=null;const Y=new Lt(0,0,U,F),N=new Lt(0,0,U,F);let z=!1;const le=new Gh;let oe=!1,Q=!1,Se=null;const Be=new wt,ee=new qe,we=new G,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return b===null?B:1}let V=n;function nn(C,k){for(let q=0;q<C.length;q++){const $=C[q],j=t.getContext($,k);if(j!==null)return j}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${il}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",de,!1),V===null){const k=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&k.shift(),V=nn(k,C),V===null)throw nn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ve,Ce,Ae,at,Ue,Oe,je,Et,Nt,P,A,W,ie,te,re,_e,ce,he,Ee,We,ne,Ye,Pe,be;function xe(){ve=new R0(V),Ce=new S0(V,ve,e),ve.init(Ce),Ye=new fy(V,ve,Ce),Ae=new dy(V,ve,Ce),at=new D0(V),Ue=new Kx,Oe=new hy(V,ve,Ae,Ue,Ce,Ye,at),je=new b0(y),Et=new C0(y),Nt=new V_(V,Ce),Pe=new y0(V,ve,Nt,Ce),P=new P0(V,Nt,at,Pe),A=new O0(V,P,Nt,at),Ee=new U0(V,Ce,Oe),_e=new E0(Ue),W=new Zx(y,je,Et,ve,Ce,Pe,_e),ie=new vy(y,Ue),te=new Qx,re=new sy(ve,Ce),he=new x0(y,je,Et,Ae,A,h,c),ce=new uy(y,A,Ce),be=new xy(V,at,Ce,Ae),We=new M0(V,ve,at,Ce),ne=new L0(V,ve,at,Ce),at.programs=W.programs,y.capabilities=Ce,y.extensions=ve,y.properties=Ue,y.renderLists=te,y.shadowMap=ce,y.state=Ae,y.info=at}xe();const me=new gy(y,V);this.xr=me,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=ve.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ve.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(C){C!==void 0&&(B=C,this.setSize(U,F,!1))},this.getSize=function(C){return C.set(U,F)},this.setSize=function(C,k,q=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,F=k,t.width=Math.floor(C*B),t.height=Math.floor(k*B),q===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(U*B,F*B).floor()},this.setDrawingBufferSize=function(C,k,q){U=C,F=k,B=q,t.width=Math.floor(C*q),t.height=Math.floor(k*q),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(Y)},this.setViewport=function(C,k,q,$){C.isVector4?Y.set(C.x,C.y,C.z,C.w):Y.set(C,k,q,$),Ae.viewport(S.copy(Y).multiplyScalar(B).floor())},this.getScissor=function(C){return C.copy(N)},this.setScissor=function(C,k,q,$){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,k,q,$),Ae.scissor(D.copy(N).multiplyScalar(B).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(C){Ae.setScissorTest(z=C)},this.setOpaqueSort=function(C){Z=C},this.setTransparentSort=function(C){X=C},this.getClearColor=function(C){return C.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(C=!0,k=!0,q=!0){let $=0;if(C){let j=!1;if(b!==null){const fe=b.texture.format;j=fe===Ch||fe===Ah||fe===wh}if(j){const fe=b.texture.type,ge=fe===Di||fe===bi||fe===rl||fe===cr||fe===bh||fe===Th,Me=he.getClearColor(),Te=he.getClearAlpha(),Ie=Me.r,Le=Me.g,De=Me.b;ge?(f[0]=Ie,f[1]=Le,f[2]=De,f[3]=Te,V.clearBufferuiv(V.COLOR,0,f)):(g[0]=Ie,g[1]=Le,g[2]=De,g[3]=Te,V.clearBufferiv(V.COLOR,0,g))}else $|=V.COLOR_BUFFER_BIT}k&&($|=V.DEPTH_BUFFER_BIT),q&&($|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",de,!1),te.dispose(),re.dispose(),Ue.dispose(),je.dispose(),Et.dispose(),A.dispose(),Pe.dispose(),be.dispose(),W.dispose(),me.dispose(),me.removeEventListener("sessionstart",gn),me.removeEventListener("sessionend",Qe),Se&&(Se.dispose(),Se=null),zt.stop()};function He(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const C=at.autoReset,k=ce.enabled,q=ce.autoUpdate,$=ce.needsUpdate,j=ce.type;xe(),at.autoReset=C,ce.enabled=k,ce.autoUpdate=q,ce.needsUpdate=$,ce.type=j}function de(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function se(C){const k=C.target;k.removeEventListener("dispose",se),K(k)}function K(C){ae(C),Ue.remove(C)}function ae(C){const k=Ue.get(C).programs;k!==void 0&&(k.forEach(function(q){W.releaseProgram(q)}),C.isShaderMaterial&&W.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,q,$,j,fe){k===null&&(k=Je);const ge=j.isMesh&&j.matrixWorld.determinant()<0,Me=jp(C,k,q,$,j);Ae.setMaterial($,ge);let Te=q.index,Ie=1;if($.wireframe===!0){if(Te=P.getWireframeAttribute(q),Te===void 0)return;Ie=2}const Le=q.drawRange,De=q.attributes.position;let ht=Le.start*Ie,rn=(Le.start+Le.count)*Ie;fe!==null&&(ht=Math.max(ht,fe.start*Ie),rn=Math.min(rn,(fe.start+fe.count)*Ie)),Te!==null?(ht=Math.max(ht,0),rn=Math.min(rn,Te.count)):De!=null&&(ht=Math.max(ht,0),rn=Math.min(rn,De.count));const bt=rn-ht;if(bt<0||bt===1/0)return;Pe.setup(j,$,Me,q,Te);let Zn,ct=We;if(Te!==null&&(Zn=Nt.get(Te),ct=ne,ct.setIndex(Zn)),j.isMesh)$.wireframe===!0?(Ae.setLineWidth($.wireframeLinewidth*Re()),ct.setMode(V.LINES)):ct.setMode(V.TRIANGLES);else if(j.isLine){let ze=$.linewidth;ze===void 0&&(ze=1),Ae.setLineWidth(ze*Re()),j.isLineSegments?ct.setMode(V.LINES):j.isLineLoop?ct.setMode(V.LINE_LOOP):ct.setMode(V.LINE_STRIP)}else j.isPoints?ct.setMode(V.POINTS):j.isSprite&&ct.setMode(V.TRIANGLES);if(j.isInstancedMesh)ct.renderInstances(ht,bt,j.count);else if(q.isInstancedBufferGeometry){const ze=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ra=Math.min(q.instanceCount,ze);ct.renderInstances(ht,bt,Ra)}else ct.render(ht,bt)};function ye(C,k,q){C.transparent===!0&&C.side===Hn&&C.forceSinglePass===!1?(C.side=jt,C.needsUpdate=!0,lo(C,k,q),C.side=Ui,C.needsUpdate=!0,lo(C,k,q),C.side=Hn):lo(C,k,q)}this.compile=function(C,k,q=null){q===null&&(q=C),m=re.get(q),m.init(),E.push(m),q.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),C!==q&&C.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(y._useLegacyLights);const $=new Set;return C.traverse(function(j){const fe=j.material;if(fe)if(Array.isArray(fe))for(let ge=0;ge<fe.length;ge++){const Me=fe[ge];ye(Me,q,j),$.add(Me)}else ye(fe,q,j),$.add(fe)}),E.pop(),m=null,$},this.compileAsync=function(C,k,q=null){const $=this.compile(C,k,q);return new Promise(j=>{function fe(){if($.forEach(function(ge){Ue.get(ge).currentProgram.isReady()&&$.delete(ge)}),$.size===0){j(C);return}setTimeout(fe,10)}ve.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Xe=null;function mt(C){Xe&&Xe(C)}function gn(){zt.stop()}function Qe(){zt.start()}const zt=new Wh;zt.setAnimationLoop(mt),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(C){Xe=C,me.setAnimationLoop(C),C===null?zt.stop():zt.start()},me.addEventListener("sessionstart",gn),me.addEventListener("sessionend",Qe),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(k),k=me.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,k,b),m=re.get(C,E.length),m.init(),E.push(m),Be.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),le.setFromProjectionMatrix(Be),Q=this.localClippingEnabled,oe=_e.init(this.clippingPlanes,Q),p=te.get(C,_.length),p.init(),_.push(p),Bn(C,k,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(Z,X),this.info.render.frame++,oe===!0&&_e.beginShadows();const q=m.state.shadowsArray;if(ce.render(q,C,k),oe===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),he.render(p,C),m.setupLights(y._useLegacyLights),k.isArrayCamera){const $=k.cameras;for(let j=0,fe=$.length;j<fe;j++){const ge=$[j];ql(p,C,ge,ge.viewport)}}else ql(p,C,k);b!==null&&(Oe.updateMultisampleRenderTarget(b),Oe.updateRenderTargetMipmap(b)),C.isScene===!0&&C.onAfterRender(y,C,k),Pe.resetDefaultState(),w=-1,x=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function Bn(C,k,q,$){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||le.intersectsSprite(C)){$&&we.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Be);const ge=A.update(C),Me=C.material;Me.visible&&p.push(C,ge,Me,q,we.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||le.intersectsObject(C))){const ge=A.update(C),Me=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),we.copy(C.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),we.copy(ge.boundingSphere.center)),we.applyMatrix4(C.matrixWorld).applyMatrix4(Be)),Array.isArray(Me)){const Te=ge.groups;for(let Ie=0,Le=Te.length;Ie<Le;Ie++){const De=Te[Ie],ht=Me[De.materialIndex];ht&&ht.visible&&p.push(C,ge,ht,q,we.z,De)}}else Me.visible&&p.push(C,ge,Me,q,we.z,null)}}const fe=C.children;for(let ge=0,Me=fe.length;ge<Me;ge++)Bn(fe[ge],k,q,$)}function ql(C,k,q,$){const j=C.opaque,fe=C.transmissive,ge=C.transparent;m.setupLightsView(q),oe===!0&&_e.setGlobalState(y.clippingPlanes,q),fe.length>0&&$p(j,fe,k,q),$&&Ae.viewport(S.copy($)),j.length>0&&co(j,k,q),fe.length>0&&co(fe,k,q),ge.length>0&&co(ge,k,q),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function $p(C,k,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const fe=Ce.isWebGL2;Se===null&&(Se=new mr(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?zs:Di,minFilter:ks,samples:fe?4:0})),y.getDrawingBufferSize(ee),fe?Se.setSize(ee.x,ee.y):Se.setSize(Ko(ee.x),Ko(ee.y));const ge=y.getRenderTarget();y.setRenderTarget(Se),y.getClearColor(O),R=y.getClearAlpha(),R<1&&y.setClearColor(16777215,.5),y.clear();const Me=y.toneMapping;y.toneMapping=Li,co(C,q,$),Oe.updateMultisampleRenderTarget(Se),Oe.updateRenderTargetMipmap(Se);let Te=!1;for(let Ie=0,Le=k.length;Ie<Le;Ie++){const De=k[Ie],ht=De.object,rn=De.geometry,bt=De.material,Zn=De.group;if(bt.side===Hn&&ht.layers.test($.layers)){const ct=bt.side;bt.side=jt,bt.needsUpdate=!0,Yl(ht,q,$,rn,bt,Zn),bt.side=ct,bt.needsUpdate=!0,Te=!0}}Te===!0&&(Oe.updateMultisampleRenderTarget(Se),Oe.updateRenderTargetMipmap(Se)),y.setRenderTarget(ge),y.setClearColor(O,R),y.toneMapping=Me}function co(C,k,q){const $=k.isScene===!0?k.overrideMaterial:null;for(let j=0,fe=C.length;j<fe;j++){const ge=C[j],Me=ge.object,Te=ge.geometry,Ie=$===null?ge.material:$,Le=ge.group;Me.layers.test(q.layers)&&Yl(Me,k,q,Te,Ie,Le)}}function Yl(C,k,q,$,j,fe){C.onBeforeRender(y,k,q,$,j,fe),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(y,k,q,$,C,fe),j.transparent===!0&&j.side===Hn&&j.forceSinglePass===!1?(j.side=jt,j.needsUpdate=!0,y.renderBufferDirect(q,k,$,j,C,fe),j.side=Ui,j.needsUpdate=!0,y.renderBufferDirect(q,k,$,j,C,fe),j.side=Hn):y.renderBufferDirect(q,k,$,j,C,fe),C.onAfterRender(y,k,q,$,j,fe)}function lo(C,k,q){k.isScene!==!0&&(k=Je);const $=Ue.get(C),j=m.state.lights,fe=m.state.shadowsArray,ge=j.state.version,Me=W.getParameters(C,j.state,fe,k,q),Te=W.getProgramCacheKey(Me);let Ie=$.programs;$.environment=C.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(C.isMeshStandardMaterial?Et:je).get(C.envMap||$.environment),Ie===void 0&&(C.addEventListener("dispose",se),Ie=new Map,$.programs=Ie);let Le=Ie.get(Te);if(Le!==void 0){if($.currentProgram===Le&&$.lightsStateVersion===ge)return jl(C,Me),Le}else Me.uniforms=W.getUniforms(C),C.onBuild(q,Me,y),C.onBeforeCompile(Me,y),Le=W.acquireProgram(Me,Te),Ie.set(Te,Le),$.uniforms=Me.uniforms;const De=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(De.clippingPlanes=_e.uniform),jl(C,Me),$.needsLights=Kp(C),$.lightsStateVersion=ge,$.needsLights&&(De.ambientLightColor.value=j.state.ambient,De.lightProbe.value=j.state.probe,De.directionalLights.value=j.state.directional,De.directionalLightShadows.value=j.state.directionalShadow,De.spotLights.value=j.state.spot,De.spotLightShadows.value=j.state.spotShadow,De.rectAreaLights.value=j.state.rectArea,De.ltc_1.value=j.state.rectAreaLTC1,De.ltc_2.value=j.state.rectAreaLTC2,De.pointLights.value=j.state.point,De.pointLightShadows.value=j.state.pointShadow,De.hemisphereLights.value=j.state.hemi,De.directionalShadowMap.value=j.state.directionalShadowMap,De.directionalShadowMatrix.value=j.state.directionalShadowMatrix,De.spotShadowMap.value=j.state.spotShadowMap,De.spotLightMatrix.value=j.state.spotLightMatrix,De.spotLightMap.value=j.state.spotLightMap,De.pointShadowMap.value=j.state.pointShadowMap,De.pointShadowMatrix.value=j.state.pointShadowMatrix),$.currentProgram=Le,$.uniformsList=null,Le}function $l(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Vo.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function jl(C,k){const q=Ue.get(C);q.outputColorSpace=k.outputColorSpace,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function jp(C,k,q,$,j){k.isScene!==!0&&(k=Je),Oe.resetTextureUnits();const fe=k.fog,ge=$.isMeshStandardMaterial?k.environment:null,Me=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:li,Te=($.isMeshStandardMaterial?Et:je).get($.envMap||ge),Ie=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Le=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),De=!!q.morphAttributes.position,ht=!!q.morphAttributes.normal,rn=!!q.morphAttributes.color;let bt=Li;$.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(bt=y.toneMapping);const Zn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ct=Zn!==void 0?Zn.length:0,ze=Ue.get($),Ra=m.state.lights;if(oe===!0&&(Q===!0||C!==x)){const sn=C===x&&$.id===w;_e.setState($,C,sn)}let _t=!1;$.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Ra.state.version||ze.outputColorSpace!==Me||j.isInstancedMesh&&ze.instancing===!1||!j.isInstancedMesh&&ze.instancing===!0||j.isSkinnedMesh&&ze.skinning===!1||!j.isSkinnedMesh&&ze.skinning===!0||j.isInstancedMesh&&ze.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ze.instancingColor===!1&&j.instanceColor!==null||ze.envMap!==Te||$.fog===!0&&ze.fog!==fe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==_e.numPlanes||ze.numIntersection!==_e.numIntersection)||ze.vertexAlphas!==Ie||ze.vertexTangents!==Le||ze.morphTargets!==De||ze.morphNormals!==ht||ze.morphColors!==rn||ze.toneMapping!==bt||Ce.isWebGL2===!0&&ze.morphTargetsCount!==ct)&&(_t=!0):(_t=!0,ze.__version=$.version);let Xi=ze.currentProgram;_t===!0&&(Xi=lo($,k,j));let Zl=!1,xs=!1,Pa=!1;const Vt=Xi.getUniforms(),qi=ze.uniforms;if(Ae.useProgram(Xi.program)&&(Zl=!0,xs=!0,Pa=!0),$.id!==w&&(w=$.id,xs=!0),Zl||x!==C){Vt.setValue(V,"projectionMatrix",C.projectionMatrix),Vt.setValue(V,"viewMatrix",C.matrixWorldInverse);const sn=Vt.map.cameraPosition;sn!==void 0&&sn.setValue(V,we.setFromMatrixPosition(C.matrixWorld)),Ce.logarithmicDepthBuffer&&Vt.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Vt.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),x!==C&&(x=C,xs=!0,Pa=!0)}if(j.isSkinnedMesh){Vt.setOptional(V,j,"bindMatrix"),Vt.setOptional(V,j,"bindMatrixInverse");const sn=j.skeleton;sn&&(Ce.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),Vt.setValue(V,"boneTexture",sn.boneTexture,Oe),Vt.setValue(V,"boneTextureSize",sn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const La=q.morphAttributes;if((La.position!==void 0||La.normal!==void 0||La.color!==void 0&&Ce.isWebGL2===!0)&&Ee.update(j,q,Xi),(xs||ze.receiveShadow!==j.receiveShadow)&&(ze.receiveShadow=j.receiveShadow,Vt.setValue(V,"receiveShadow",j.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(qi.envMap.value=Te,qi.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),xs&&(Vt.setValue(V,"toneMappingExposure",y.toneMappingExposure),ze.needsLights&&Zp(qi,Pa),fe&&$.fog===!0&&ie.refreshFogUniforms(qi,fe),ie.refreshMaterialUniforms(qi,$,B,F,Se),Vo.upload(V,$l(ze),qi,Oe)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Vo.upload(V,$l(ze),qi,Oe),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Vt.setValue(V,"center",j.center),Vt.setValue(V,"modelViewMatrix",j.modelViewMatrix),Vt.setValue(V,"normalMatrix",j.normalMatrix),Vt.setValue(V,"modelMatrix",j.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const sn=$.uniformsGroups;for(let Da=0,Jp=sn.length;Da<Jp;Da++)if(Ce.isWebGL2){const Kl=sn[Da];be.update(Kl,Xi),be.bind(Kl,Xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xi}function Zp(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Kp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,k,q){Ue.get(C.texture).__webglTexture=k,Ue.get(C.depthTexture).__webglTexture=q;const $=Ue.get(C);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,k){const q=Ue.get(C);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,q=0){b=C,v=k,T=q;let $=!0,j=null,fe=!1,ge=!1;if(C){const Te=Ue.get(C);Te.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(V.FRAMEBUFFER,null),$=!1):Te.__webglFramebuffer===void 0?Oe.setupRenderTarget(C):Te.__hasExternalTextures&&Oe.rebindTextures(C,Ue.get(C.texture).__webglTexture,Ue.get(C.depthTexture).__webglTexture);const Ie=C.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ge=!0);const Le=Ue.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Le[k])?j=Le[k][q]:j=Le[k],fe=!0):Ce.isWebGL2&&C.samples>0&&Oe.useMultisampledRTT(C)===!1?j=Ue.get(C).__webglMultisampledFramebuffer:Array.isArray(Le)?j=Le[q]:j=Le,S.copy(C.viewport),D.copy(C.scissor),L=C.scissorTest}else S.copy(Y).multiplyScalar(B).floor(),D.copy(N).multiplyScalar(B).floor(),L=z;if(Ae.bindFramebuffer(V.FRAMEBUFFER,j)&&Ce.drawBuffers&&$&&Ae.drawBuffers(C,j),Ae.viewport(S),Ae.scissor(D),Ae.setScissorTest(L),fe){const Te=Ue.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te.__webglTexture,q)}else if(ge){const Te=Ue.get(C.texture),Ie=k||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Te.__webglTexture,q||0,Ie)}w=-1},this.readRenderTargetPixels=function(C,k,q,$,j,fe,ge){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){Ae.bindFramebuffer(V.FRAMEBUFFER,Me);try{const Te=C.texture,Ie=Te.format,Le=Te.type;if(Ie!==Nn&&Ye.convert(Ie)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Le===zs&&(ve.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Le!==Di&&Ye.convert(Le)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===Ti&&(Ce.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-$&&q>=0&&q<=C.height-j&&V.readPixels(k,q,$,j,Ye.convert(Ie),Ye.convert(Le),fe)}finally{const Te=b!==null?Ue.get(b).__webglFramebuffer:null;Ae.bindFramebuffer(V.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(C,k,q=0){const $=Math.pow(2,-q),j=Math.floor(k.image.width*$),fe=Math.floor(k.image.height*$);Oe.setTexture2D(k,0),V.copyTexSubImage2D(V.TEXTURE_2D,q,0,0,C.x,C.y,j,fe),Ae.unbindTexture()},this.copyTextureToTexture=function(C,k,q,$=0){const j=k.image.width,fe=k.image.height,ge=Ye.convert(q.format),Me=Ye.convert(q.type);Oe.setTexture2D(q,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment),k.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,$,C.x,C.y,j,fe,ge,Me,k.image.data):k.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,$,C.x,C.y,k.mipmaps[0].width,k.mipmaps[0].height,ge,k.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,$,C.x,C.y,ge,Me,k.image),$===0&&q.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(C,k,q,$,j=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=C.max.x-C.min.x+1,ge=C.max.y-C.min.y+1,Me=C.max.z-C.min.z+1,Te=Ye.convert($.format),Ie=Ye.convert($.type);let Le;if($.isData3DTexture)Oe.setTexture3D($,0),Le=V.TEXTURE_3D;else if($.isDataArrayTexture)Oe.setTexture2DArray($,0),Le=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,$.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,$.unpackAlignment);const De=V.getParameter(V.UNPACK_ROW_LENGTH),ht=V.getParameter(V.UNPACK_IMAGE_HEIGHT),rn=V.getParameter(V.UNPACK_SKIP_PIXELS),bt=V.getParameter(V.UNPACK_SKIP_ROWS),Zn=V.getParameter(V.UNPACK_SKIP_IMAGES),ct=q.isCompressedTexture?q.mipmaps[0]:q.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,ct.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ct.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,C.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,C.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,C.min.z),q.isDataTexture||q.isData3DTexture?V.texSubImage3D(Le,j,k.x,k.y,k.z,fe,ge,Me,Te,Ie,ct.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Le,j,k.x,k.y,k.z,fe,ge,Me,Te,ct.data)):V.texSubImage3D(Le,j,k.x,k.y,k.z,fe,ge,Me,Te,Ie,ct),V.pixelStorei(V.UNPACK_ROW_LENGTH,De),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ht),V.pixelStorei(V.UNPACK_SKIP_PIXELS,rn),V.pixelStorei(V.UNPACK_SKIP_ROWS,bt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Zn),j===0&&$.generateMipmaps&&V.generateMipmap(Le),Ae.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Oe.setTextureCube(C,0):C.isData3DTexture?Oe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Oe.setTexture2DArray(C,0):Oe.setTexture2D(C,0),Ae.unbindTexture()},this.resetState=function(){v=0,T=0,b=null,Ae.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===sl?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===ma?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pt?ur:Rh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ur?Pt:li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class yy extends jh{}yy.prototype.isWebGL1Renderer=!0;class My extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Sy extends Qs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vd=new wt,Cc=new Ih,Io=new _a,Uo=new G;class xd extends yt{constructor(e=new fi,t=new Sy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(r),Io.radius+=s,e.ray.intersectsSphere(Io)===!1)return;vd.copy(r).invert(),Cc.copy(e.ray).applyMatrix4(vd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=h,p=f;g<p;g++){const m=l.getX(g);Uo.fromBufferAttribute(d,m),yd(Uo,m,c,r,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,p=f;g<p;g++)Uo.fromBufferAttribute(d,g),yd(Uo,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function yd(i,e,t,n,r,s,a){const o=Cc.distanceSqToPoint(i);if(o<t){const c=new G;Cc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class ll extends fi{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],f=[];let g=0;const p=[],m=n/2;let _=0;E(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new qn(d,3)),this.setAttribute("normal",new qn(h,3)),this.setAttribute("uv",new qn(f,2));function E(){const M=new G,v=new G;let T=0;const b=(t-e)/n;for(let w=0;w<=s;w++){const x=[],S=w/s,D=S*(t-e)+e;for(let L=0;L<=r;L++){const O=L/r,R=O*c+o,U=Math.sin(R),F=Math.cos(R);v.x=D*U,v.y=-S*n+m,v.z=D*F,d.push(v.x,v.y,v.z),M.set(U,b,F).normalize(),h.push(M.x,M.y,M.z),f.push(O,1-S),x.push(g++)}p.push(x)}for(let w=0;w<r;w++)for(let x=0;x<s;x++){const S=p[x][w],D=p[x+1][w],L=p[x+1][w+1],O=p[x][w+1];u.push(S,D,O),u.push(D,L,O),T+=6}l.addGroup(_,T,0),_+=T}function y(M){const v=g,T=new qe,b=new G;let w=0;const x=M===!0?e:t,S=M===!0?1:-1;for(let L=1;L<=r;L++)d.push(0,m*S,0),h.push(0,S,0),f.push(.5,.5),g++;const D=g;for(let L=0;L<=r;L++){const R=L/r*c+o,U=Math.cos(R),F=Math.sin(R);b.x=x*F,b.y=m*S,b.z=x*U,d.push(b.x,b.y,b.z),h.push(0,S,0),T.x=U*.5+.5,T.y=F*.5*S+.5,f.push(T.x,T.y),g++}for(let L=0;L<r;L++){const O=v+L,R=D+L;M===!0?u.push(R,R+1,O):u.push(R+1,R,O),w+=3}l.addGroup(_,w,M===!0?1:2),_+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Md={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ey{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const by=new Ey;class ul{constructor(e){this.manager=e!==void 0?e:by,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ul.DEFAULT_MATERIAL_NAME="__DEFAULT";const ni={};class Ty extends Error{constructor(e,t){super(e),this.response=t}}class wy extends ul{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Md.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:n,onError:r});return}ni[e]=[],ni[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ni[e],d=l.body.getReader(),h=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=h?parseInt(h):0,g=f!==0;let p=0;const m=new ReadableStream({start(_){E();function E(){d.read().then(({done:y,value:M})=>{if(y)_.close();else{p+=M.byteLength;const v=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:f});for(let T=0,b=u.length;T<b;T++){const w=u[T];w.onProgress&&w.onProgress(v)}_.enqueue(M),E()}})}}});return new Response(m)}else throw new Ty(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Md.add(e,l);const u=ni[e];delete ni[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=ni[e];if(u===void 0)throw this.manager.itemError(e),l;delete ni[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}let Oo;class Zh{static getContext(){return Oo===void 0&&(Oo=new(window.AudioContext||window.webkitAudioContext)),Oo}static setContext(e){Oo=e}}class Kh extends ul{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new wy(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{const l=c.slice(0);Zh.getContext().decodeAudioData(l,function(d){t(d)},o)}catch(l){o(l)}},n,r);function o(c){r?r(c):console.error(c),s.manager.itemError(e)}}}class Ay{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Sd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Sd(){return(typeof performance>"u"?Date:performance).now()}const Ki=new G,Ed=new hs,Cy=new G,Ji=new G;class Jh extends yt{constructor(){super(),this.type="AudioListener",this.context=Zh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Ay}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ki,Ed,Cy),Ji.set(0,0,-1).applyQuaternion(Ed),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ki.x,r),t.positionY.linearRampToValueAtTime(Ki.y,r),t.positionZ.linearRampToValueAtTime(Ki.z,r),t.forwardX.linearRampToValueAtTime(Ji.x,r),t.forwardY.linearRampToValueAtTime(Ji.y,r),t.forwardZ.linearRampToValueAtTime(Ji.z,r),t.upX.linearRampToValueAtTime(n.x,r),t.upY.linearRampToValueAtTime(n.y,r),t.upZ.linearRampToValueAtTime(n.z,r)}else t.setPosition(Ki.x,Ki.y,Ki.z),t.setOrientation(Ji.x,Ji.y,Ji.z,n.x,n.y,n.z)}}let Qh=class extends yt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}};class Ry{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);function ri(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function ef(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},is={duration:.5,overwrite:!1,delay:0},dl,Dt,it,bn=1e8,Ke=1/bn,Rc=Math.PI*2,Py=Rc/4,Ly=0,tf=Math.sqrt,Dy=Math.cos,Ny=Math.sin,Ct=function(e){return typeof e=="string"},ut=function(e){return typeof e=="function"},ui=function(e){return typeof e=="number"},hl=function(e){return typeof e>"u"},Yn=function(e){return typeof e=="object"},Zt=function(e){return e!==!1},fl=function(){return typeof window<"u"},Fo=function(e){return ut(e)||Ct(e)},nf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ft=Array.isArray,Pc=/(?:-?\.?\d|\.)+/gi,rf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Wr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,cc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sf=/[+-]=-?[.\d]+/,of=/[^,'"\[\]\s]+/gi,Iy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,rt,zn,Lc,pl,mn={},Qo={},af,cf=function(e){return(Qo=rs(e,mn))&&tn},ml=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Hs=function(e,t){return!t&&console.warn(e)},lf=function(e,t){return e&&(mn[e]=t)&&Qo&&(Qo[e]=t)||mn},Gs=function(){return 0},Uy={suppressEvents:!0,isStart:!0,kill:!1},Ho={suppressEvents:!0,kill:!1},Oy={suppressEvents:!0},_l={},Ni=[],Dc={},uf,cn={},lc={},bd=30,Go=[],gl="",vl=function(e){var t=e[0],n,r;if(Yn(t)||ut(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Go.length;r--&&!Go[r].targetTest(t););n=Go[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new If(e[r],n)))||e.splice(r,1);return e},dr=function(e){return e._gsap||vl(Tn(e))[0]._gsap},df=function(e,t,n){return(n=e[t])&&ut(n)?e[t]():hl(n)&&e.getAttribute&&e.getAttribute(t)||n},Kt=function(e,t){return(e=e.split(",")).forEach(t)||e},ft=function(e){return Math.round(e*1e5)/1e5||0},xt=function(e){return Math.round(e*1e7)/1e7||0},Zr=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},Fy=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},ea=function(){var e=Ni.length,t=Ni.slice(0),n,r;for(Dc={},Ni.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},xl=function(e){return!!(e._initted||e._startAt||e.add)},hf=function(e,t,n,r){Ni.length&&!Dt&&ea(),e.render(t,n,!!(Dt&&t<0&&xl(e))),Ni.length&&!Dt&&ea()},ff=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(of).length<2?t:Ct(e)?e.trim():e},pf=function(e){return e},_n=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},By=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},rs=function(e,t){for(var n in t)e[n]=t[n];return e},Td=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Yn(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},ta=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Is=function(e){var t=e.parent||rt,n=e.keyframes?By(Ft(e.keyframes)):_n;if(Zt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ky=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},mf=function(e,t,n,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},xa=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Fi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},hr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},zy=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Nc=function(e,t,n,r){return e._startAt&&(Dt?e._startAt.revert(Ho):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Vy=function i(e){return!e||e._ts&&i(e.parent)},wd=function(e){return e._repeat?ss(e._tTime,e=e.duration()+e._rDelay)*e:0},ss=function(e,t){var n=Math.floor(e=xt(e/t));return e&&n===e?n-1:n},na=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ya=function(e){return e._end=xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ke)||0))},Ma=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=xt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ya(e),n._dirty||hr(n,e)),e},_f=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=na(e.rawTime(),t),(!t._dur||eo(0,t.totalDuration(),n)-t._tTime>Ke)&&t.render(n,!0)),hr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ke}},Gn=function(e,t,n,r){return t.parent&&Fi(t),t._start=xt((ui(n)?n:n||e!==rt?xn(e,n,t):e._time)+t._delay),t._end=xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),mf(e,t,"_first","_last",e._sort?"_start":0),Ic(t)||(e._recent=t),r||_f(e,t),e._ts<0&&Ma(e,e._tTime),e},gf=function(e,t){return(mn.ScrollTrigger||ml("scrollTrigger",t))&&mn.ScrollTrigger.create(t,e)},vf=function(e,t,n,r,s){if(Ml(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Dt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&uf!==un.frame)return Ni.push(e),e._lazy=[s,r],1},Hy=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Ic=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Gy=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&Hy(e)&&!(!e._initted&&Ic(e))||(e._ts<0||e._dp._ts<0)&&!Ic(e))?0:1,o=e._rDelay,c=0,l,u,d;if(o&&e._repeat&&(c=eo(0,e._tDur,t),u=ss(c,o),e._yoyo&&u&1&&(a=1-a),u!==ss(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Dt||r||e._zTime===Ke||!t&&e._zTime){if(!e._initted&&vf(e,t,r,n,c))return;for(d=e._zTime,e._zTime=t||(n?Ke:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&Nc(e,t,n,!0),e._onUpdate&&!n&&dn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&dn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Fi(e,1),!n&&!Dt&&(dn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Wy=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},os=function(e,t,n,r){var s=e._repeat,a=xt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:xt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Ma(e,e._tTime=e._tDur*o),e.parent&&ya(e),n||hr(e.parent,e),e},Ad=function(e){return e instanceof qt?hr(e):os(e,e._dur)},Xy={_start:0,endTime:Gs,totalDuration:Gs},xn=function i(e,t,n){var r=e.labels,s=e._recent||Xy,a=e.duration()>=bn?s.endTime(!1):e._dur,o,c,l;return Ct(t)&&(isNaN(t)||t in r)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(Ft(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},Us=function(e,t,n){var r=ui(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,c;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=Zt(c.vars.inherit)&&c.parent;a.immediateRender=Zt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new vt(t[0],a,t[s+1])},zi=function(e,t){return e||e===0?t(e):t},eo=function(e,t,n){return n<e?e:n>t?t:n},Ot=function(e,t){return!Ct(e)||!(t=Iy.exec(e))?"":t[1]},qy=function(e,t,n){return zi(n,function(r){return eo(e,t,r)})},Uc=[].slice,xf=function(e,t){return e&&Yn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Yn(e[0]))&&!e.nodeType&&e!==zn},Yy=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Ct(r)&&!t||xf(r,1)?(s=n).push.apply(s,Tn(r)):n.push(r)})||n},Tn=function(e,t,n){return it&&!t&&it.selector?it.selector(e):Ct(e)&&!n&&(Lc||!as())?Uc.call((t||pl).querySelectorAll(e),0):Ft(e)?Yy(e,n):xf(e)?Uc.call(e,0):e?[e]:[]},Oc=function(e){return e=Tn(e)[0]||Hs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Tn(t,n.querySelectorAll?n:n===e?Hs("Invalid scope")||pl.createElement("div"):e)}},yf=function(e){return e.sort(function(){return .5-Math.random()})},Mf=function(e){if(ut(e))return e;var t=Yn(e)?e:{each:e},n=fr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,c=isNaN(r)||o,l=t.axis,u=r,d=r;return Ct(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!o&&c&&(u=r[0],d=r[1]),function(h,f,g){var p=(g||t).length,m=a[p],_,E,y,M,v,T,b,w,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,bn])[1],!x){for(b=-bn;b<(b=g[x++].getBoundingClientRect().left)&&x<p;);x<p&&x--}for(m=a[p]=[],_=c?Math.min(x,p)*u-.5:r%x,E=x===bn?0:c?p*d/x-.5:r/x|0,b=0,w=bn,T=0;T<p;T++)y=T%x-_,M=E-(T/x|0),m[T]=v=l?Math.abs(l==="y"?M:y):tf(y*y+M*M),v>b&&(b=v),v<w&&(w=v);r==="random"&&yf(m),m.max=b-w,m.min=w,m.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(x>p?p-1:l?l==="y"?p/x:x:Math.max(x,p/x))||0)*(r==="edges"?-1:1),m.b=p<0?s-p:s,m.u=Ot(t.amount||t.each)||0,n=n&&p<0?Lf(n):n}return p=(m[h]-m.min)/m.max||0,xt(m.b+(n?n(p):p)*m.v)+m.u}},Fc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=xt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(ui(n)?0:Ot(n))}},Sf=function(e,t){var n=Ft(e),r,s;return!n&&Yn(e)&&(r=n=e.radius||bn,e.values?(e=Tn(e.values),(s=!ui(e[0]))&&(r*=r)):e=Fc(e.increment)),zi(t,n?ut(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=bn,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-o,f=e[d].y-c,h=h*h+f*f):h=Math.abs(e[d]-o),h<l&&(l=h,u=d);return u=!r||l<=r?e[u]:a,s||u===a||ui(a)?u:u+Ot(a)}:Fc(e))},Ef=function(e,t,n,r){return zi(Ft(e)?!t:n===!0?!!(n=0):!r,function(){return Ft(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},$y=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},jy=function(e,t){return function(n){return e(parseFloat(n))+(t||Ot(n))}},Zy=function(e,t,n){return Tf(e,t,0,1,n)},bf=function(e,t,n){return zi(n,function(r){return e[~~t(r)]})},Ky=function i(e,t,n){var r=t-e;return Ft(e)?bf(e,i(0,e.length),t):zi(n,function(s){return(r+(s-e)%r)%r+e})},Jy=function i(e,t,n){var r=t-e,s=r*2;return Ft(e)?bf(e,i(0,e.length-1),t):zi(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Ws=function(e){for(var t=0,n="",r,s,a,o;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),o=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(o?of:Pc),n+=e.substr(t,r-t)+Ef(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Tf=function(e,t,n,r,s){var a=t-e,o=r-n;return zi(s,function(c){return n+((c-e)/a*o||0)})},Qy=function i(e,t,n,r){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=Ct(e),o={},c,l,u,d,h;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(Ft(e)&&!Ft(t)){for(u=[],d=e.length,h=d-2,l=1;l<d;l++)u.push(i(e[l-1],e[l]));d--,s=function(g){g*=d;var p=Math.min(h,~~g);return u[p](g-p)},n=t}else r||(e=rs(Ft(e)?[]:{},e));if(!u){for(c in t)yl.call(o,e,c,"get",t[c]);s=function(g){return bl(g,o)||(a?e.p:e)}}}return zi(n,s)},Cd=function(e,t,n){var r=e.labels,s=bn,a,o,c;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},dn=function(e,t,n){var r=e.vars,s=r[t],a=it,o=e._ctx,c,l,u;if(s)return c=r[t+"Params"],l=r.callbackScope||e,n&&Ni.length&&ea(),o&&(it=o),u=c?s.apply(l,c):s.call(l),it=a,u},Cs=function(e){return Fi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Dt),e.progress()<1&&dn(e,"onInterrupt"),e},Xr,wf=[],Af=function(e){if(e)if(e=!e.name&&e.default||e,fl()||e.headless){var t=e.name,n=ut(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Gs,render:bl,add:yl,kill:mM,modifier:pM,rawVars:0},a={targetTest:0,get:0,getSetter:El,aliases:{},register:0};if(as(),e!==r){if(cn[t])return;_n(r,_n(ta(e,s),a)),rs(r.prototype,rs(s,ta(e,a))),cn[r.prop=t]=r,e.targetTest&&(Go.push(r),_l[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}lf(t,r),e.register&&e.register(tn,r,Jt)}else wf.push(e)},Ze=255,Rs={aqua:[0,Ze,Ze],lime:[0,Ze,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ze],navy:[0,0,128],white:[Ze,Ze,Ze],olive:[128,128,0],yellow:[Ze,Ze,0],orange:[Ze,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ze,0,0],pink:[Ze,192,203],cyan:[0,Ze,Ze],transparent:[Ze,Ze,Ze,0]},uc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ze+.5|0},Cf=function(e,t,n){var r=e?ui(e)?[e>>16,e>>8&Ze,e&Ze]:0:Rs.black,s,a,o,c,l,u,d,h,f,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Rs[e])r=Rs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ze,r&Ze,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ze,e&Ze]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Pc),!t)c=+r[0]%360/360,l=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(l+1):u+l-u*l,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=uc(c+1/3,s,a),r[1]=uc(c,s,a),r[2]=uc(c-1/3,s,a);else if(~e.indexOf("="))return r=e.match(rf),n&&r.length<4&&(r[3]=1),r}else r=e.match(Pc)||Rs.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Ze,a=r[1]/Ze,o=r[2]/Ze,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?c=l=0:(f=d-h,l=u>.5?f/(2-d-h):f/(d+h),c=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,c*=60),r[0]=~~(c+.5),r[1]=~~(l*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Rf=function(e){var t=[],n=[],r=-1;return e.split(Ii).forEach(function(s){var a=s.match(Wr)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},Rd=function(e,t,n){var r="",s=(e+r).match(Ii),a=t?"hsla(":"rgba(",o=0,c,l,u,d;if(!s)return e;if(s=s.map(function(h){return(h=Cf(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Rf(e),c=n.c,c.join(r)!==u.c.join(r)))for(l=e.replace(Ii,"1").split(Wr),d=l.length-1;o<d;o++)r+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=e.split(Ii),d=l.length-1;o<d;o++)r+=l[o]+s[o];return r+l[d]},Ii=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Rs)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),eM=/hsl[a]?\(/,Pf=function(e){var t=e.join(" "),n;if(Ii.lastIndex=0,Ii.test(t))return n=eM.test(t),e[1]=Rd(e[1],n),e[0]=Rd(e[0],n,Rf(e[1])),!0},Xs,un=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],c,l,u,d,h,f,g=function p(m){var _=i()-r,E=m===!0,y,M,v,T;if((_>e||_<0)&&(n+=_-t),r+=_,v=r-n,y=v-a,(y>0||E)&&(T=++d.frame,h=v-d.time*1e3,d.time=v=v/1e3,a+=y+(y>=s?4:s-y),M=1),E||(c=l(p)),M)for(f=0;f<o.length;f++)o[f](v,h,T,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){af&&(!Lc&&fl()&&(zn=Lc=window,pl=zn.document||{},mn.gsap=tn,(zn.gsapVersions||(zn.gsapVersions=[])).push(tn.version),cf(Qo||zn.GreenSockGlobals||!zn.gsap&&zn||{}),wf.forEach(Af)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&d.sleep(),l=u||function(m){return setTimeout(m,a-d.time*1e3+1|0)},Xs=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Xs=0,l=Gs},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,_,E){var y=_?function(M,v,T,b){m(M,v,T,b),d.remove(y)}:m;return d.remove(m),o[E?"unshift":"push"](y),as(),y},remove:function(m,_){~(_=o.indexOf(m))&&o.splice(_,1)&&f>=_&&f--},_listeners:o},d}(),as=function(){return!Xs&&un.wake()},Ve={},tM=/^[\d.\-M][\d.\-,\s]/,nM=/["']/g,iM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,c,l;s<a;s++)c=n[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[r]=isNaN(l)?l.replace(nM,"").trim():+l,r=c.substr(o+1).trim();return t},rM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},sM=function(e){var t=(e+"").split("("),n=Ve[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[iM(t[1])]:rM(e).split(",").map(ff)):Ve._CE&&tM.test(e)?Ve._CE("",e):n},Lf=function(e){return function(t){return 1-e(1-t)}},Df=function i(e,t){for(var n=e._first,r;n;)n instanceof qt?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},fr=function(e,t){return e&&(ut(e)?e:Ve[e]||sM(e))||t},vr=function(e,t,n,r){n===void 0&&(n=function(c){return 1-t(1-c)}),r===void 0&&(r=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return Kt(e,function(o){Ve[o]=mn[o]=s,Ve[a=o.toLowerCase()]=n;for(var c in s)Ve[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Ve[o+"."+c]=s[c]}),s},Nf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},dc=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Rc*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*Ny((u-a)*s)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:Nf(o);return s=Rc/s,c.config=function(l,u){return i(e,l,u)},c},hc=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Nf(n);return r.config=function(s){return i(e,s)},r};Kt("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;vr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ve.Linear.easeNone=Ve.none=Ve.Linear.easeIn;vr("Elastic",dc("in"),dc("out"),dc());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};vr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);vr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});vr("Circ",function(i){return-(tf(1-i*i)-1)});vr("Sine",function(i){return i===1?1:-Dy(i*Py)+1});vr("Back",hc("in"),hc("out"),hc());Ve.SteppedEase=Ve.steps=mn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-Ke;return function(o){return((r*eo(0,a,o)|0)+s)*n}}};is.ease=Ve["quad.out"];Kt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return gl+=i+","+i+"Params,"});var If=function(e,t){this.id=Ly++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:df,this.set=t?t.getSetter:El},qs=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,os(this,+t.duration,1,1),this.data=t.data,it&&(this._ctx=it,it.data.push(this)),Xs||un.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,os(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(as(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ma(this,n),!s._dp||s.parent||_f(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Gn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ke||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),hf(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+wd(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+wd(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?ss(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Ke?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?na(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ke?0:this._rts,this.totalTime(eo(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),ya(this),zy(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(as(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ke&&(this._tTime-=Ke)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Gn(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Zt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?na(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Oy);var r=Dt;return Dt=n,xl(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Dt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ad(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Ad(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(xn(this,n),Zt(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Zt(r)),this._dur||(this._zTime=-Ke),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ke:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ke,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Ke)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this;return new Promise(function(s){var a=ut(n)?n:pf,o=function(){var l=r.then;r.then=null,ut(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=l),s(a),r.then=l};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){Cs(this)},i}();_n(qs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ke,_prom:0,_ps:!1,_rts:1});var qt=function(i){ef(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Zt(n.sortChildren),rt&&Gn(n.parent||rt,ri(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&gf(ri(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Us(0,arguments,this),this},t.from=function(r,s,a){return Us(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Us(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Is(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new vt(r,s,xn(this,a),1),this},t.call=function(r,s,a){return Gn(this,vt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,c,l,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new vt(r,a,xn(this,c)),this},t.staggerFrom=function(r,s,a,o,c,l,u){return a.runBackwards=1,Is(a).immediateRender=Zt(a.immediateRender),this.staggerTo(r,s,a,o,c,l,u)},t.staggerFromTo=function(r,s,a,o,c,l,u,d){return o.startAt=a,Is(o).immediateRender=Zt(o.immediateRender),this.staggerTo(r,s,o,c,l,u,d)},t.render=function(r,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=r<=0?0:xt(r),d=this._zTime<0!=r<0&&(this._initted||!l),h,f,g,p,m,_,E,y,M,v,T,b;if(this!==rt&&u>c&&r>=0&&(u=c),u!==this._tTime||a||d){if(o!==this._time&&l&&(u+=this._time-o,r+=this._time-o),h=u,M=this._start,y=this._ts,_=!y,d&&(l||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(h=xt(u%m),u===c?(p=this._repeat,h=l):(v=xt(u/m),p=~~v,p&&p===v&&(h=l,p--),h>l&&(h=l)),v=ss(this._tTime,m),!o&&this._tTime&&v!==p&&this._tTime-v*m-this._dur<=0&&(v=p),T&&p&1&&(h=l-h,b=1),p!==v&&!this._lock){var w=T&&v&1,x=w===(T&&p&1);if(p<v&&(w=!w),o=w?0:u%l?l:u,this._lock=1,this.render(o||(b?0:xt(p*m)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&dn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,x&&(this._lock=2,o=w?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Df(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=Wy(this,xt(o),xt(h)),E&&(u-=h-(h=E._start))),this._tTime=u,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&!s&&!v&&(dn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&E!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!_){E=0,g&&(u+=this._zTime=-Ke);break}}f=g}else{f=this._last;for(var S=r<0?r:h;f;){if(g=f._prev,(f._act||S<=f._end)&&f._ts&&E!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(S-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(S-f._start)*f._ts,s,a||Dt&&xl(f)),h!==this._time||!this._ts&&!_){E=0,g&&(u+=this._zTime=S?-Ke:Ke);break}}f=g}}if(E&&!s&&(this.pause(),E.render(h>=o?0:-Ke)._zTime=h>=o?1:-1,this._ts))return this._start=M,ya(this),this.render(r,s,a);this._onUpdate&&!s&&dn(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Fi(this,1),!s&&!(r<0&&!o)&&(u||o||!c)&&(dn(this,u===c&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(ui(s)||(s=xn(this,s,r)),!(r instanceof qs)){if(Ft(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Ct(r))return this.addLabel(r,s);if(ut(r))r=vt.delayedCall(0,r);else return this}return this!==r?Gn(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-bn);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof vt?s&&c.push(l):(a&&c.push(l),r&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Ct(r)?this.removeLabel(r):ut(r)?this.killTweensOf(r):(r.parent===this&&xa(this,r),r===this._recent&&(this._recent=this._last),hr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xt(un.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=xn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=vt.delayedCall(0,s||Gs,a);return o.data="isPause",this._hasPause=1,Gn(this,o,xn(this,r))},t.removePause=function(r){var s=this._first;for(r=xn(this,r);s;)s._start===r&&s.data==="isPause"&&Fi(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),c=o.length;c--;)Ai!==o[c]&&o[c].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=Tn(r),c=this._first,l=ui(s),u;c;)c instanceof vt?Fy(c._targets,o)&&(l?(!Ai||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(u=c.getTweensOf(o,s)).length&&a.push.apply(a,u),c=c._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=xn(a,r),c=s,l=c.startAt,u=c.onStart,d=c.onStartParams,h=c.immediateRender,f,g=vt.to(a,_n({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||Ke,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==m&&os(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,d||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,_n({startAt:{time:xn(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Cd(this,xn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Cd(this,xn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ke)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,c=this.labels,l;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=r);return hr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),hr(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,c=bn,l,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(d=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,Gn(a,o,u-o._delay,1)._lock=0):c=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;os(a,a===rt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(rt._ts&&(hf(rt,na(r,rt)),uf=un.frame),un.frame>=bd){bd+=pn.autoSleep||120;var s=rt._first;if((!s||!s._ts)&&pn.autoSleep&&un._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||un.sleep()}}},e}(qs);_n(qt.prototype,{_lock:0,_hasPause:0,_forcing:0});var oM=function(e,t,n,r,s,a,o){var c=new Jt(this._pt,e,t,0,1,zf,null,s),l=0,u=0,d,h,f,g,p,m,_,E;for(c.b=n,c.e=r,n+="",r+="",(_=~r.indexOf("random("))&&(r=Ws(r)),a&&(E=[n,r],a(E,e,t),n=E[0],r=E[1]),h=n.match(cc)||[];d=cc.exec(r);)g=d[0],p=r.substring(l,d.index),f?f=(f+1)%5:p.substr(-5)==="rgba("&&(f=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,c._pt={_next:c._pt,p:p||u===1?p:",",s:m,c:g.charAt(1)==="="?Zr(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},l=cc.lastIndex);return c.c=l<r.length?r.substring(l,r.length):"",c.fp=o,(sf.test(r)||_)&&(c.e=0),this._pt=c,c},yl=function(e,t,n,r,s,a,o,c,l,u){ut(r)&&(r=r(s||0,e,a));var d=e[t],h=n!=="get"?n:ut(d)?l?e[t.indexOf("set")||!ut(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():d,f=ut(d)?l?dM:Bf:Sl,g;if(Ct(r)&&(~r.indexOf("random(")&&(r=Ws(r)),r.charAt(1)==="="&&(g=Zr(h,r)+(Ot(h)||0),(g||g===0)&&(r=g))),!u||h!==r||Bc)return!isNaN(h*r)&&r!==""?(g=new Jt(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?fM:kf,0,f),l&&(g.fp=l),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(t in e)&&ml(t,r),oM.call(this,e,t,h,r,f,c||pn.stringFilter,l))},aM=function(e,t,n,r,s){if(ut(e)&&(e=Os(e,s,t,n,r)),!Yn(e)||e.style&&e.nodeType||Ft(e)||nf(e))return Ct(e)?Os(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=Os(e[o],s,t,n,r);return a},Uf=function(e,t,n,r,s,a){var o,c,l,u;if(cn[e]&&(o=new cn[e]).init(s,o.rawVars?t[e]:aM(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=c=new Jt(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Xr))for(l=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)l[o._props[u]]=c;return o},Ai,Bc,Ml=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,c=r.lazy,l=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,h=r.keyframes,f=r.autoRevert,g=e._dur,p=e._startAt,m=e._targets,_=e.parent,E=_&&_.data==="nested"?_.vars.targets:m,y=e._overwrite==="auto"&&!dl,M=e.timeline,v,T,b,w,x,S,D,L,O,R,U,F,B;if(M&&(!h||!s)&&(s="none"),e._ease=fr(s,is.ease),e._yEase=d?Lf(fr(d===!0?s:d,is.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!M&&!!r.runBackwards,!M||h&&!r.stagger){if(L=m[0]?dr(m[0]).harness:0,F=L&&r[L.prop],v=ta(r,_l),p&&(p._zTime<0&&p.progress(1),t<0&&u&&o&&!f?p.render(-1,!0):p.revert(u&&g?Ho:Uy),p._lazy=0),a){if(Fi(e._startAt=vt.set(m,_n({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!p&&Zt(c),startAt:null,delay:0,onUpdate:l&&function(){return dn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dt||!o&&!f)&&e._startAt.revert(Ho),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!p){if(t&&(o=!1),b=_n({overwrite:!1,data:"isFromStart",lazy:o&&!p&&Zt(c),immediateRender:o,stagger:0,parent:_},v),F&&(b[L.prop]=F),Fi(e._startAt=vt.set(m,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dt?e._startAt.revert(Ho):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,Ke,Ke);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&Zt(c)||c&&!g,T=0;T<m.length;T++){if(x=m[T],D=x._gsap||vl(m)[T]._gsap,e._ptLookup[T]=R={},Dc[D.id]&&Ni.length&&ea(),U=E===m?T:E.indexOf(x),L&&(O=new L).init(x,F||v,e,U,E)!==!1&&(e._pt=w=new Jt(e._pt,x,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(Z){R[Z]=w}),O.priority&&(S=1)),!L||F)for(b in v)cn[b]&&(O=Uf(b,v,e,U,x,E))?O.priority&&(S=1):R[b]=w=yl.call(e,x,b,"get",v[b],U,E,0,r.stringFilter);e._op&&e._op[T]&&e.kill(x,e._op[T]),y&&e._pt&&(Ai=e,rt.killTweensOf(x,R,e.globalTime(t)),B=!e.parent,Ai=0),e._pt&&c&&(Dc[D.id]=1)}S&&Vf(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!B,h&&t<=0&&M.render(bn,!0,!0)},cM=function(e,t,n,r,s,a,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Bc=1,e.vars[t]="+=0",Ml(e,o),Bc=0,c?Hs(t+" not eligible for reset"):1;l.push(u)}for(f=l.length;f--;)d=l[f],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=ft(n)+Ot(d.e)),d.b&&(d.b=u.s+Ot(d.b))},lM=function(e,t){var n=e[0]?dr(e[0]).harness:0,r=n&&n.aliases,s,a,o,c;if(!r)return t;s=rs({},t);for(a in r)if(a in s)for(c=r[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},uM=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(Ft(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Os=function(e,t,n,r,s){return ut(e)?e.call(t,n,r,s):Ct(e)&&~e.indexOf("random(")?Ws(e):e},Of=gl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ff={};Kt(Of+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Ff[i]=1});var vt=function(i){ef(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:Is(r))||this;var c=o.vars,l=c.duration,u=c.delay,d=c.immediateRender,h=c.stagger,f=c.overwrite,g=c.keyframes,p=c.defaults,m=c.scrollTrigger,_=c.yoyoEase,E=r.parent||rt,y=(Ft(n)||nf(n)?ui(n[0]):"length"in r)?[n]:Tn(n),M,v,T,b,w,x,S,D;if(o._targets=y.length?vl(y):Hs("GSAP target "+n+" not found. https://gsap.com",!pn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||h||Fo(l)||Fo(u)){if(r=o.vars,M=o.timeline=new qt({data:"nested",defaults:p||{},targets:E&&E.data==="nested"?E.vars.targets:y}),M.kill(),M.parent=M._dp=ri(o),M._start=0,h||Fo(l)||Fo(u)){if(b=y.length,S=h&&Mf(h),Yn(h))for(w in h)~Of.indexOf(w)&&(D||(D={}),D[w]=h[w]);for(v=0;v<b;v++)T=ta(r,Ff),T.stagger=0,_&&(T.yoyoEase=_),D&&rs(T,D),x=y[v],T.duration=+Os(l,ri(o),v,x,y),T.delay=(+Os(u,ri(o),v,x,y)||0)-o._delay,!h&&b===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),M.to(x,T,S?S(v,x,y):0),M._ease=Ve.none;M.duration()?l=u=0:o.timeline=0}else if(g){Is(_n(M.vars.defaults,{ease:"none"})),M._ease=fr(g.ease||r.ease||"none");var L=0,O,R,U;if(Ft(g))g.forEach(function(F){return M.to(y,F,">")}),M.duration();else{T={};for(w in g)w==="ease"||w==="easeEach"||uM(w,g[w],T,g.easeEach);for(w in T)for(O=T[w].sort(function(F,B){return F.t-B.t}),L=0,v=0;v<O.length;v++)R=O[v],U={ease:R.e,duration:(R.t-(v?O[v-1].t:0))/100*l},U[w]=R.v,M.to(y,U,L),L+=U.duration;M.duration()<l&&M.to({},{duration:l-M.duration()})}}l||o.duration(l=M.duration())}else o.timeline=0;return f===!0&&!dl&&(Ai=ri(o),rt.killTweensOf(y),Ai=0),Gn(E,ri(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(d||!l&&!g&&o._start===xt(E._time)&&Zt(d)&&Vy(ri(o))&&E.data!=="nested")&&(o._tTime=-Ke,o.render(Math.max(0,-u)||0)),m&&gf(ri(o),m),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,c=this._tDur,l=this._dur,u=r<0,d=r>c-Ke&&!u?c:r<Ke?0:r,h,f,g,p,m,_,E,y,M;if(!l)Gy(this,r,s,a);else if(d!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,y=this.timeline,this._repeat){if(p=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+r,s,a);if(h=xt(d%p),d===c?(g=this._repeat,h=l):(m=xt(d/p),g=~~m,g&&g===m?(h=l,g--):h>l&&(h=l)),_=this._yoyo&&g&1,_&&(M=this._yEase,h=l-h),m=ss(this._tTime,p),h===o&&!a&&this._initted&&g===m)return this._tTime=d,this;g!==m&&(y&&this._yEase&&Df(y,_),this.vars.repeatRefresh&&!_&&!this._lock&&h!==p&&this._initted&&(this._lock=a=1,this.render(xt(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(vf(this,u?r:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(l!==this._dur)return this.render(r,s,a)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(M||this._ease)(h/l),this._from&&(this.ratio=E=1-E),!o&&d&&!s&&!m&&(dn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(E,f.d),f=f._next;y&&y.render(r<0?r:y._dur*y._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Nc(this,r,s,a),dn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&dn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Nc(this,r,!0,!0),(r||!l)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Fi(this,1),!s&&!(u&&!o)&&(d||o||_)&&(dn(this,d===c?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,c){Xs||un.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ml(this,l),u=this._ease(l/this._dur),cM(this,r,s,a,o,u,l,c)?this.resetTo(r,s,a,o,1):(Ma(this,0),this.parent||mf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Cs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Dt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ai&&Ai.vars.overwrite!==!0)._first||Cs(this),this.parent&&a!==this.timeline.totalDuration()&&os(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=r?Tn(r):o,l=this._ptLookup,u=this._pt,d,h,f,g,p,m,_;if((!s||s==="all")&&ky(o,c))return s==="all"&&(this._pt=0),Cs(this);for(d=this._op=this._op||[],s!=="all"&&(Ct(s)&&(p={},Kt(s,function(E){return p[E]=1}),s=p),s=lM(o,s)),_=o.length;_--;)if(~c.indexOf(o[_])){h=l[_],s==="all"?(d[_]=s,g=h,f={}):(f=d[_]=d[_]||{},g=s);for(p in g)m=h&&h[p],m&&((!("kill"in m.d)||m.d.kill(p)===!0)&&xa(this,m,"_pt"),delete h[p]),f!=="all"&&(f[p]=1)}return this._initted&&!this._pt&&u&&Cs(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Us(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Us(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return rt.killTweensOf(r,s,a)},e}(qs);_n(vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Kt("staggerTo,staggerFrom,staggerFromTo",function(i){vt[i]=function(){var e=new qt,t=Uc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Sl=function(e,t,n){return e[t]=n},Bf=function(e,t,n){return e[t](n)},dM=function(e,t,n,r){return e[t](r.fp,n)},hM=function(e,t,n){return e.setAttribute(t,n)},El=function(e,t){return ut(e[t])?Bf:hl(e[t])&&e.setAttribute?hM:Sl},kf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},fM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},zf=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},bl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},pM=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},mM=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?xa(this,t,"_pt"):t.dep||(n=1),t=r;return!n},_M=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Vf=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},Jt=function(){function i(t,n,r,s,a,o,c,l,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||kf,this.d=c||this,this.set=l||Sl,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=_M,this.m=n,this.mt=s,this.tween=r},i}();Kt(gl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return _l[i]=1});mn.TweenMax=mn.TweenLite=vt;mn.TimelineLite=mn.TimelineMax=qt;rt=new qt({sortChildren:!1,defaults:is,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pn.stringFilter=Pf;var pr=[],Wo={},gM=[],Pd=0,vM=0,fc=function(e){return(Wo[e]||gM).map(function(t){return t()})},kc=function(){var e=Date.now(),t=[];e-Pd>2&&(fc("matchMediaInit"),pr.forEach(function(n){var r=n.queries,s=n.conditions,a,o,c,l;for(o in r)a=zn.matchMedia(r[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(n.revert(),c&&t.push(n))}),fc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Pd=e,fc("matchMedia"))},Hf=function(){function i(t,n){this.selector=n&&Oc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=vM++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){ut(n)&&(s=r,r=n,n=ut);var a=this,o=function(){var l=it,u=a.selector,d;return l&&l!==a&&l.data.push(a),s&&(a.selector=Oc(s)),it=a,d=r.apply(a,arguments),ut(d)&&a._r.push(d),it=l,a.selector=u,a.isReverted=!1,d};return a.last=o,n===ut?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},e.ignore=function(n){var r=it;it=null,n(this),it=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof vt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof qt?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof vt)&&l.revert&&l.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=pr.length;a--;)pr[a].id===this.id&&pr.splice(a,1)},e.revert=function(n){this.kill(n||{})},i}(),xM=function(){function i(t){this.contexts=[],this.scope=t,it&&it.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Yn(n)||(n={matches:n});var a=new Hf(0,s||this.scope),o=a.conditions={},c,l,u;it&&!a.selector&&(a.selector=it.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(l in n)l==="all"?u=1:(c=zn.matchMedia(n[l]),c&&(pr.indexOf(a)<0&&pr.push(a),(o[l]=c.matches)&&(u=1),c.addListener?c.addListener(kc):c.addEventListener("change",kc)));return u&&r(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),ia={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Af(r)})},timeline:function(e){return new qt(e)},getTweensOf:function(e,t){return rt.getTweensOf(e,t)},getProperty:function(e,t,n,r){Ct(e)&&(e=Tn(e)[0]);var s=dr(e||{}).get,a=n?pf:ff;return n==="native"&&(n=""),e&&(t?a((cn[t]&&cn[t].get||s)(e,t,n,r)):function(o,c,l){return a((cn[o]&&cn[o].get||s)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=Tn(e),e.length>1){var r=e.map(function(u){return tn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var a=cn[t],o=dr(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(u){var d=new a;Xr._pt=0,d.init(e,n?u+n:u,Xr,0,[e]),d.render(1,d),Xr._pt&&bl(1,Xr)}:o.set(e,c);return a?l:function(u){return l(e,c,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,s=tn.to(e,_n((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(c,l,u){return s.resetTo(t,c,l,u)};return a.tween=s,a},isTweening:function(e){return rt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=fr(e.ease,is.ease)),Td(is,e||{})},config:function(e){return Td(pn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!cn[o]&&!mn[o]&&Hs(t+" effect requires "+o+" plugin.")}),lc[t]=function(o,c,l){return n(Tn(o),_n(c||{},s),l)},a&&(qt.prototype[t]=function(o,c,l){return this.add(lc[t](o,Yn(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){Ve[e]=fr(t)},parseEase:function(e,t){return arguments.length?fr(e,t):Ve},getById:function(e){return rt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new qt(e),r,s;for(n.smoothChildTiming=Zt(e.smoothChildTiming),rt.remove(n),n._dp=0,n._time=n._tTime=rt._time,r=rt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof vt&&r.vars.onComplete===r._targets[0]))&&Gn(n,r,r._start-r._delay),r=s;return Gn(rt,n,0),n},context:function(e,t){return e?new Hf(e,t):it},matchMedia:function(e){return new xM(e)},matchMediaRefresh:function(){return pr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||kc()},addEventListener:function(e,t){var n=Wo[e]||(Wo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Wo[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Ky,wrapYoyo:Jy,distribute:Mf,random:Ef,snap:Sf,normalize:Zy,getUnit:Ot,clamp:qy,splitColor:Cf,toArray:Tn,selector:Oc,mapRange:Tf,pipe:$y,unitize:jy,interpolate:Qy,shuffle:yf},install:cf,effects:lc,ticker:un,updateRoot:qt.updateRoot,plugins:cn,globalTimeline:rt,core:{PropTween:Jt,globals:lf,Tween:vt,Timeline:qt,Animation:qs,getCache:dr,_removeLinkedListItem:xa,reverting:function(){return Dt},context:function(e){return e&&it&&(it.data.push(e),e._ctx=it),it},suppressOverwrites:function(e){return dl=e}}};Kt("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return ia[i]=vt[i]});un.add(qt.updateRoot);Xr=ia.to({},{duration:0});var yM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},MM=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=yM(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},pc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var c,l;if(Ct(s)&&(c={},Kt(s,function(u){return c[u]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}MM(o,s)}}}},tn=ia.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Dt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},pc("roundProps",Fc),pc("modifiers"),pc("snap",Sf))||ia;vt.version=qt.version=tn.version="3.13.0";af=1;fl()&&as();Ve.Power0;Ve.Power1;Ve.Power2;Ve.Power3;Ve.Power4;Ve.Linear;Ve.Quad;Ve.Cubic;Ve.Quart;Ve.Quint;Ve.Strong;Ve.Elastic;Ve.Back;Ve.SteppedEase;Ve.Bounce;Ve.Sine;Ve.Expo;Ve.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ld,Ci,Kr,Tl,ar,Dd,wl,SM=function(){return typeof window<"u"},di={},ir=180/Math.PI,Jr=Math.PI/180,kr=Math.atan2,Nd=1e8,Al=/([A-Z])/g,EM=/(left|right|width|margin|padding|x)/i,bM=/[\s,\(]\S/,Wn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},zc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},TM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},wM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},AM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Gf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Wf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},CM=function(e,t,n){return e.style[t]=n},RM=function(e,t,n){return e.style.setProperty(t,n)},PM=function(e,t,n){return e._gsap[t]=n},LM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},DM=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},NM=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},st="transform",Qt=st+"Origin",IM=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in di&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Wn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=oi(r,o)}):this.tfm[e]=a.x?a[e]:oi(r,e),e===Qt&&(this.tfm.zOrigin=a.zOrigin);else return Wn.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(st)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Qt,t,"")),e=st}(s||t)&&this.props.push(e,t,s[e])},Xf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},UM=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Al,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=wl(),(!s||!s.isStart)&&!n[st]&&(Xf(n),r.zOrigin&&n[Qt]&&(n[Qt]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},qf=function(e,t){var n={target:e,props:[],revert:UM,save:IM};return e._gsap||tn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Yf,Vc=function(e,t){var n=Ci.createElementNS?Ci.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ci.createElement(e);return n&&n.style?n:Ci.createElement(e)},wn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Al,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,cs(t)||t,1)||""},Id="O,Moz,ms,Ms,Webkit".split(","),cs=function(e,t,n){var r=t||ar,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Id[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Id[a]:"")+e},Hc=function(){SM()&&window.document&&(Ld=window,Ci=Ld.document,Kr=Ci.documentElement,ar=Vc("div")||{style:{}},Vc("div"),st=cs(st),Qt=st+"Origin",ar.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Yf=!!cs("perspective"),wl=tn.core.reverting,Tl=1)},Ud=function(e){var t=e.ownerSVGElement,n=Vc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Kr.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Kr.removeChild(n),s},Od=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},$f=function(e){var t,n;try{t=e.getBBox()}catch{t=Ud(e),n=1}return t&&(t.width||t.height)||n||(t=Ud(e)),t&&!t.width&&!t.x&&!t.y?{x:+Od(e,["x","cx","x1"])||0,y:+Od(e,["y","cy","y1"])||0,width:0,height:0}:t},jf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&$f(e))},_r=function(e,t){if(t){var n=e.style,r;t in di&&t!==Qt&&(t=st),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Al,"-$1").toLowerCase())):n.removeAttribute(t)}},Ri=function(e,t,n,r,s,a){var o=new Jt(e._pt,t,n,0,1,a?Wf:Gf);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},Fd={deg:1,rad:1,turn:1},OM={grid:1,flex:1},Bi=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ar.style,c=EM.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),d=100,h=r==="px",f=r==="%",g,p,m,_;if(r===a||!s||Fd[r]||Fd[a])return s;if(a!=="px"&&!h&&(s=i(e,t,n,"px")),_=e.getCTM&&jf(e),(f||a==="%")&&(di[t]||~t.indexOf("adius")))return g=_?e.getBBox()[c?"width":"height"]:e[u],ft(f?s/g*d:s/100*g);if(o[c?"width":"height"]=d+(h?a:r),p=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!l?e:e.parentNode,_&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Ci||!p.appendChild)&&(p=Ci.body),m=p._gsap,m&&f&&m.width&&c&&m.time===un.time&&!m.uncache)return ft(s/m.width*d);if(f&&(t==="height"||t==="width")){var E=e.style[t];e.style[t]=d+r,g=e[u],E?e.style[t]=E:_r(e,t)}else(f||a==="%")&&!OM[wn(p,"display")]&&(o.position=wn(e,"position")),p===e&&(o.position="static"),p.appendChild(ar),g=ar[u],p.removeChild(ar),o.position="absolute";return c&&f&&(m=dr(p),m.time=un.time,m.width=p[u]),ft(h?g*s/d:g&&s?d/g*s:0)},oi=function(e,t,n,r){var s;return Tl||Hc(),t in Wn&&t!=="transform"&&(t=Wn[t],~t.indexOf(",")&&(t=t.split(",")[0])),di[t]&&t!=="transform"?(s=$s(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:sa(wn(e,Qt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ra[t]&&ra[t](e,t,n)||wn(e,t)||df(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Bi(e,t,s,n)+n:s},FM=function(e,t,n,r){if(!n||n==="none"){var s=cs(t,e,1),a=s&&wn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=wn(e,"borderTopColor"))}var o=new Jt(this._pt,e.style,t,0,1,zf),c=0,l=0,u,d,h,f,g,p,m,_,E,y,M,v;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=wn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(p=e.style[t],e.style[t]=r,r=wn(e,t)||r,p?e.style[t]=p:_r(e,t)),u=[n,r],Pf(u),n=u[0],r=u[1],h=n.match(Wr)||[],v=r.match(Wr)||[],v.length){for(;d=Wr.exec(r);)m=d[0],E=r.substring(c,d.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),m!==(p=h[l++]||"")&&(f=parseFloat(p)||0,M=p.substr((f+"").length),m.charAt(1)==="="&&(m=Zr(f,m)+M),_=parseFloat(m),y=m.substr((_+"").length),c=Wr.lastIndex-y.length,y||(y=y||pn.units[t]||M,c===r.length&&(r+=y,o.e+=y)),M!==y&&(f=Bi(e,t,p,y)||0),o._pt={_next:o._pt,p:E||l===1?E:",",s:f,c:_-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=c<r.length?r.substring(c,r.length):""}else o.r=t==="display"&&r==="none"?Wf:Gf;return sf.test(r)&&(o.e=0),this._pt=o,o},Bd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},BM=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Bd[n]||n,t[1]=Bd[r]||r,t.join(" ")},kM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,c,l;if(s==="all"||s===!0)r.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],di[o]&&(c=1,o=o==="transformOrigin"?Qt:st),_r(n,o);c&&(_r(n,st),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",$s(n,1),a.uncache=1,Xf(r)))}},ra={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Jt(e._pt,t,n,0,0,kM);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ys=[1,0,0,1,0,0],Zf={},Kf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},kd=function(e){var t=wn(e,st);return Kf(t)?Ys:t.substr(7).match(rf).map(ft)},Cl=function(e,t){var n=e._gsap||dr(e),r=e.style,s=kd(e),a,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Ys:s):(s===Ys&&!e.offsetParent&&e!==Kr&&!n.svg&&(c=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,Kr.appendChild(e)),s=kd(e),c?r.display=c:_r(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):Kr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Gc=function(e,t,n,r,s,a){var o=e._gsap,c=s||Cl(e,!0),l=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=c[0],g=c[1],p=c[2],m=c[3],_=c[4],E=c[5],y=t.split(" "),M=parseFloat(y[0])||0,v=parseFloat(y[1])||0,T,b,w,x;n?c!==Ys&&(b=f*m-g*p)&&(w=M*(m/b)+v*(-p/b)+(p*E-m*_)/b,x=M*(-g/b)+v*(f/b)-(f*E-g*_)/b,M=w,v=x):(T=$f(e),M=T.x+(~y[0].indexOf("%")?M/100*T.width:M),v=T.y+(~(y[1]||y[0]).indexOf("%")?v/100*T.height:v)),r||r!==!1&&o.smooth?(_=M-l,E=v-u,o.xOffset=d+(_*f+E*p)-_,o.yOffset=h+(_*g+E*m)-E):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=v,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Qt]="0px 0px",a&&(Ri(a,o,"xOrigin",l,M),Ri(a,o,"yOrigin",u,v),Ri(a,o,"xOffset",d,o.xOffset),Ri(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+v)},$s=function(e,t){var n=e._gsap||new If(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=wn(e,Qt)||"0",u,d,h,f,g,p,m,_,E,y,M,v,T,b,w,x,S,D,L,O,R,U,F,B,Z,X,Y,N,z,le,oe,Q;return u=d=h=p=m=_=E=y=M=0,f=g=1,n.svg=!!(e.getCTM&&jf(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(r[st]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[st]!=="none"?c[st]:"")),r.scale=r.rotate=r.translate="none"),b=Cl(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),l=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),Gc(e,B||l,!!B||n.originIsAbsolute,n.smooth!==!1,b)),v=n.xOrigin||0,T=n.yOrigin||0,b!==Ys&&(D=b[0],L=b[1],O=b[2],R=b[3],u=U=b[4],d=F=b[5],b.length===6?(f=Math.sqrt(D*D+L*L),g=Math.sqrt(R*R+O*O),p=D||L?kr(L,D)*ir:0,E=O||R?kr(O,R)*ir+p:0,E&&(g*=Math.abs(Math.cos(E*Jr))),n.svg&&(u-=v-(v*D+T*O),d-=T-(v*L+T*R))):(Q=b[6],le=b[7],Y=b[8],N=b[9],z=b[10],oe=b[11],u=b[12],d=b[13],h=b[14],w=kr(Q,z),m=w*ir,w&&(x=Math.cos(-w),S=Math.sin(-w),B=U*x+Y*S,Z=F*x+N*S,X=Q*x+z*S,Y=U*-S+Y*x,N=F*-S+N*x,z=Q*-S+z*x,oe=le*-S+oe*x,U=B,F=Z,Q=X),w=kr(-O,z),_=w*ir,w&&(x=Math.cos(-w),S=Math.sin(-w),B=D*x-Y*S,Z=L*x-N*S,X=O*x-z*S,oe=R*S+oe*x,D=B,L=Z,O=X),w=kr(L,D),p=w*ir,w&&(x=Math.cos(w),S=Math.sin(w),B=D*x+L*S,Z=U*x+F*S,L=L*x-D*S,F=F*x-U*S,D=B,U=Z),m&&Math.abs(m)+Math.abs(p)>359.9&&(m=p=0,_=180-_),f=ft(Math.sqrt(D*D+L*L+O*O)),g=ft(Math.sqrt(F*F+Q*Q)),w=kr(U,F),E=Math.abs(w)>2e-4?w*ir:0,M=oe?1/(oe<0?-oe:oe):0),n.svg&&(B=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Kf(wn(e,st)),B&&e.setAttribute("transform",B))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(f*=-1,E+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=ft(f),n.scaleY=ft(g),n.rotation=ft(p)+o,n.rotationX=ft(m)+o,n.rotationY=ft(_)+o,n.skewX=E+o,n.skewY=y+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Qt]=sa(l)),n.xOffset=n.yOffset=0,n.force3D=pn.force3D,n.renderTransform=n.svg?VM:Yf?Jf:zM,n.uncache=0,n},sa=function(e){return(e=e.split(" "))[0]+" "+e[1]},mc=function(e,t,n){var r=Ot(t);return ft(parseFloat(t)+parseFloat(Bi(e,"x",n+"px",r)))+r},zM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Jf(e,t)},Qi="0deg",bs="0px",er=") ",Jf=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,g=n.scaleX,p=n.scaleY,m=n.transformPerspective,_=n.force3D,E=n.target,y=n.zOrigin,M="",v=_==="auto"&&e&&e!==1||_===!0;if(y&&(d!==Qi||u!==Qi)){var T=parseFloat(u)*Jr,b=Math.sin(T),w=Math.cos(T),x;T=parseFloat(d)*Jr,x=Math.cos(T),a=mc(E,a,b*x*-y),o=mc(E,o,-Math.sin(T)*-y),c=mc(E,c,w*x*-y+y)}m!==bs&&(M+="perspective("+m+er),(r||s)&&(M+="translate("+r+"%, "+s+"%) "),(v||a!==bs||o!==bs||c!==bs)&&(M+=c!==bs||v?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+er),l!==Qi&&(M+="rotate("+l+er),u!==Qi&&(M+="rotateY("+u+er),d!==Qi&&(M+="rotateX("+d+er),(h!==Qi||f!==Qi)&&(M+="skew("+h+", "+f+er),(g!==1||p!==1)&&(M+="scale("+g+", "+p+er),E.style[st]=M||"translate(0, 0)"},VM=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,g=n.xOrigin,p=n.yOrigin,m=n.xOffset,_=n.yOffset,E=n.forceCSS,y=parseFloat(a),M=parseFloat(o),v,T,b,w,x;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Jr,l*=Jr,v=Math.cos(c)*d,T=Math.sin(c)*d,b=Math.sin(c-l)*-h,w=Math.cos(c-l)*h,l&&(u*=Jr,x=Math.tan(l-u),x=Math.sqrt(1+x*x),b*=x,w*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),v*=x,T*=x)),v=ft(v),T=ft(T),b=ft(b),w=ft(w)):(v=d,w=h,T=b=0),(y&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(y=Bi(f,"x",a,"px"),M=Bi(f,"y",o,"px")),(g||p||m||_)&&(y=ft(y+g-(g*v+p*b)+m),M=ft(M+p-(g*T+p*w)+_)),(r||s)&&(x=f.getBBox(),y=ft(y+r/100*x.width),M=ft(M+s/100*x.height)),x="matrix("+v+","+T+","+b+","+w+","+y+","+M+")",f.setAttribute("transform",x),E&&(f.style[st]=x)},HM=function(e,t,n,r,s){var a=360,o=Ct(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?ir:1),l=c-r,u=r+l+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),d==="cw"&&l<0?l=(l+a*Nd)%a-~~(l/a)*a:d==="ccw"&&l>0&&(l=(l-a*Nd)%a-~~(l/a)*a)),e._pt=h=new Jt(e._pt,t,n,r,l,TM),h.e=u,h.u="deg",e._props.push(n),h},zd=function(e,t){for(var n in t)e[n]=t[n];return e},GM=function(e,t,n){var r=zd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,u,d,h,f,g;r.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[st]=t,o=$s(n,1),_r(n,st),n.setAttribute("transform",l)):(l=getComputedStyle(n)[st],a[st]=t,o=$s(n,1),a[st]=l);for(c in di)l=r[c],u=o[c],l!==u&&s.indexOf(c)<0&&(f=Ot(l),g=Ot(u),d=f!==g?Bi(n,c,l,g):parseFloat(l),h=parseFloat(u),e._pt=new Jt(e._pt,o,c,d,h-d,zc),e._pt.u=g||0,e._props.push(c));zd(o,r)};Kt("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});ra[e>1?"border"+i:i]=function(o,c,l,u,d){var h,f;if(arguments.length<4)return h=a.map(function(g){return oi(o,g,l)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(g,p){return f[g]=h[p]=h[p]||h[(p-1)/2|0]}),o.init(c,f,d)}});var Qf={name:"css",register:Hc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,c=n.vars.startAt,l,u,d,h,f,g,p,m,_,E,y,M,v,T,b,w;Tl||Hc(),this.styles=this.styles||qf(e),w=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(u=t[p],!(cn[p]&&Uf(p,t,n,r,e,s)))){if(f=typeof u,g=ra[p],f==="function"&&(u=u.call(n,r,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Ws(u)),g)g(this,e,p,u,n)&&(b=1);else if(p.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",Ii.lastIndex=0,Ii.test(l)||(m=Ot(l),_=Ot(u)),_?m!==_&&(l=Bi(e,p,l,_)+_):m&&(u+=m),this.add(o,"setProperty",l,u,r,s,0,0,p),a.push(p),w.push(p,0,o[p]);else if(f!=="undefined"){if(c&&p in c?(l=typeof c[p]=="function"?c[p].call(n,r,e,s):c[p],Ct(l)&&~l.indexOf("random(")&&(l=Ws(l)),Ot(l+"")||l==="auto"||(l+=pn.units[p]||Ot(oi(e,p))||""),(l+"").charAt(1)==="="&&(l=oi(e,p))):l=oi(e,p),h=parseFloat(l),E=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),d=parseFloat(u),p in Wn&&(p==="autoAlpha"&&(h===1&&oi(e,"visibility")==="hidden"&&d&&(h=0),w.push("visibility",0,o.visibility),Ri(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),p!=="scale"&&p!=="transform"&&(p=Wn[p],~p.indexOf(",")&&(p=p.split(",")[0]))),y=p in di,y){if(this.styles.save(p),f==="string"&&u.substring(0,6)==="var(--"&&(u=wn(e,u.substring(4,u.indexOf(")"))),d=parseFloat(u)),M||(v=e._gsap,v.renderTransform&&!t.parseTransform||$s(e,t.parseTransform),T=t.smoothOrigin!==!1&&v.smooth,M=this._pt=new Jt(this._pt,o,st,0,1,v.renderTransform,v,0,-1),M.dep=1),p==="scale")this._pt=new Jt(this._pt,v,"scaleY",v.scaleY,(E?Zr(v.scaleY,E+d):d)-v.scaleY||0,zc),this._pt.u=0,a.push("scaleY",p),p+="X";else if(p==="transformOrigin"){w.push(Qt,0,o[Qt]),u=BM(u),v.svg?Gc(e,u,0,T,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==v.zOrigin&&Ri(this,v,"zOrigin",v.zOrigin,_),Ri(this,o,p,sa(l),sa(u)));continue}else if(p==="svgOrigin"){Gc(e,u,1,T,0,this);continue}else if(p in Zf){HM(this,v,p,h,E?Zr(h,E+u):u);continue}else if(p==="smoothOrigin"){Ri(this,v,"smooth",v.smooth,u);continue}else if(p==="force3D"){v[p]=u;continue}else if(p==="transform"){GM(this,u,e);continue}}else p in o||(p=cs(p)||p);if(y||(d||d===0)&&(h||h===0)&&!bM.test(u)&&p in o)m=(l+"").substr((h+"").length),d||(d=0),_=Ot(u)||(p in pn.units?pn.units[p]:m),m!==_&&(h=Bi(e,p,l,_)),this._pt=new Jt(this._pt,y?v:o,p,h,(E?Zr(h,E+d):d)-h,!y&&(_==="px"||p==="zIndex")&&t.autoRound!==!1?AM:zc),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=l,this._pt.r=wM);else if(p in o)FM.call(this,e,p,l,E?E+u:u);else if(p in e)this.add(e,p,l||e[p],E?E+u:u,r,s);else if(p!=="parseTransform"){ml(p,u);continue}y||(p in o?w.push(p,0,o[p]):typeof e[p]=="function"?w.push(p,2,e[p]()):w.push(p,1,l||e[p])),a.push(p)}}b&&Vf(this)},render:function(e,t){if(t.tween._time||!wl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:oi,aliases:Wn,getSetter:function(e,t,n){var r=Wn[t];return r&&r.indexOf(",")<0&&(t=r),t in di&&t!==Qt&&(e._gsap.x||oi(e,"x"))?n&&Dd===n?t==="scale"?LM:PM:(Dd=n||{})&&(t==="scale"?DM:NM):e.style&&!hl(e.style[t])?CM:~t.indexOf("-")?RM:El(e,t)},core:{_removeProperty:_r,_getMatrix:Cl}};tn.utils.checkPrefix=cs;tn.core.getStyleSaver=qf;(function(i,e,t,n){var r=Kt(i+","+e+","+t,function(s){di[s]=1});Kt(e,function(s){pn.units[s]="deg",Zf[s]=1}),Wn[r[13]]=i+","+e,Kt(n,function(s){var a=s.split(":");Wn[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Kt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){pn.units[i]="px"});tn.registerPlugin(Qf);var rr=tn.registerPlugin(Qf)||tn;rr.core.Tween;const WM=`#define GLSLIFY 1
varying float vDistance;uniform float time;uniform float offsetSize;uniform float size;uniform float offsetGain;uniform float amplitude;uniform float frequency;uniform float maxDistance;uniform vec2 u_fingerPosition;uniform float u_paintRadius;uniform float u_paintStrength;uniform float u_conductorY;uniform int u_mode;vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}vec2 mod289(vec2 x){return x-floor(x*(1./289.))*289.;}vec3 permute(vec3 x){return mod289(((x*34.)+1.)*x);}float noise(vec2 v){const vec4 C=vec4(.211324865405187,.366025403784439,-.577350269189626,.024390243902439);vec2 i=floor(v+dot(v,C.yy));vec2 x0=v-i+dot(i,C.xx);vec2 i1;i1=(x0.x>x0.y)?vec2(1.,0.):vec2(0.,1.);vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;i=mod289(i);vec3 p=permute(permute(i.y+vec3(0.,i1.y,1.))+i.x+vec3(0.,i1.x,1.));vec3 m=max(.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.);m=m*m;m=m*m;vec3 x=2.*fract(p*C.www)-1.;vec3 h=abs(x)-.5;vec3 ox=floor(x+.5);vec3 a0=x-ox;m*=1.79284291400159-.85373472095314*(a0*a0+h*h);vec3 g;g.x=a0.x*x0.x+h.x*x0.y;g.yz=a0.yz*x12.xz+h.yz*x12.yw;return 130.*dot(m,g);}vec3 curl(float x,float y,float z){float eps=1.,eps2=2.*eps;float n1,n2,a,b;x+=time*.05;y+=time*.05;z+=time*.05;vec3 curl=vec3(0.);n1=noise(vec2(x,y+eps));n2=noise(vec2(x,y-eps));a=(n1-n2)/eps2;n1=noise(vec2(x,z+eps));n2=noise(vec2(x,z-eps));b=(n1-n2)/eps2;curl.x=a-b;n1=noise(vec2(y,z+eps));n2=noise(vec2(y,z-eps));a=(n1-n2)/eps2;n1=noise(vec2(x+eps,z));n2=noise(vec2(x+eps,z));b=(n1-n2)/eps2;curl.y=a-b;n1=noise(vec2(x+eps,y));n2=noise(vec2(x-eps,y));a=(n1-n2)/eps2;n1=noise(vec2(y+eps,z));n2=noise(vec2(y-eps,z));b=(n1-n2)/eps2;curl.z=a-b;return curl;}void main(){vec3 newpos=position;vec3 target=position+(normal*.1)+curl(newpos.x*frequency,newpos.y*frequency,newpos.z*frequency)*amplitude;if(u_mode==1){vec3 mappedFingerPos=vec3((u_fingerPosition.x-0.5)*4.0,(u_fingerPosition.y-0.5)*-4.0,0.0);float dist=distance(newpos.xy,mappedFingerPos.xy);if(dist<u_paintRadius){vec2 dir=normalize(newpos.xy-mappedFingerPos.xy);newpos.xy+=dir*(u_paintRadius-dist)*u_paintStrength;}}if(u_mode==2){float waveStrength=1.0;float waveFrequency=5.0;float yOffset=(u_conductorY-0.5)*waveStrength;newpos.y+=sin(newpos.x*waveFrequency+time*2.0)*yOffset;}float d=length(newpos-target)/maxDistance;newpos=mix(position,target,pow(d,4.));newpos.z+=sin(time)*(.1*offsetGain);vec4 mvPosition=modelViewMatrix*vec4(newpos,1.);gl_PointSize=size+(pow(d,3.)*offsetSize)*(1./-mvPosition.z);gl_Position=projectionMatrix*mvPosition;vDistance=d;}`,XM=`#define GLSLIFY 1
varying float vDistance;uniform vec3 startColor;uniform vec3 endColor;float circle(in vec2 _st,in float _radius){vec2 dist=_st-vec2(.5);return 1.-smoothstep(_radius-(_radius*.01),_radius+(_radius*.01),dot(dist,dist)*4.);}void main(){float alpha=1.;vec2 uv=vec2(gl_PointCoord.x,1.-gl_PointCoord.y);vec3 circ=vec3(circle(uv,1.));vec3 color=vec3(1.);color=mix(startColor,endColor,vDistance);gl_FragColor=vec4(color,circ.r*vDistance);}`;class qM extends yt{constructor(){super(),this.name="ReactiveParticles",this.time=0,this.currentMode="particles",this.properties={startColor:16711935,endColor:65535,autoMix:!0,autoRotate:!0,paintRadius:.5,paintStrength:.5,conductorWaveStrength:1,conductorWaveFrequency:5}}init(){yn.holder.add(this),this.holderObjects=new yt,this.add(this.holderObjects),this.material=new Oi({side:Hn,vertexShader:WM,fragmentShader:XM,transparent:!0,uniforms:{time:{value:0},offsetSize:{value:2},size:{value:1.1},frequency:{value:2},amplitude:{value:1},offsetGain:{value:0},maxDistance:{value:1.8},startColor:{value:new Ge(this.properties.startColor)},endColor:{value:new Ge(this.properties.endColor)},u_mode:{value:0},u_fingerPosition:{value:new qe(.5,.5)},u_paintRadius:{value:this.properties.paintRadius},u_paintStrength:{value:this.properties.paintStrength},u_conductorY:{value:.5}}}),this.resetMesh()}updateColors(e){const t=new Ge().setHSL((e.getHSL({}).h+.5)%1,1,.5);this.material.uniforms.startColor.value=e,this.material.uniforms.endColor.value=t}updateStartColor(e){this.material.uniforms.startColor.value=e}updateEndColor(e){this.material.uniforms.endColor.value=e}updateFingerPosition(e,t){this.material&&this.material.uniforms&&this.material.uniforms.u_fingerPosition&&(this.material.uniforms.u_fingerPosition.value.set(e,t),this.material.uniformsNeedUpdate=!0)}updateConductorY(e){this.material&&this.material.uniforms&&this.material.uniforms.u_conductorY&&(this.material.uniforms.u_conductorY.value=e,this.material.uniformsNeedUpdate=!0)}setMode(e){this.currentMode=e,console.log("Setting mode to:",e);const n={particles:0,circles:0,lines:0,anomaly:0,waves:0,spiral:0,paint:1,conductor:2}[e]||0;console.log("Mode value for shader:",n),this.material&&this.material.uniforms&&this.material.uniforms.u_mode&&(this.material.uniforms.u_mode.value=n,this.material.uniformsNeedUpdate=!0),this.resetMesh()}createBoxMesh(){let e,t,n;switch(this.currentMode){case"particles":e=Math.floor(ke.randInt(5,20)),t=Math.floor(ke.randInt(1,40)),n=Math.floor(ke.randInt(5,80));break;case"circles":e=20,t=20,n=20;break;case"lines":e=1,t=Math.floor(ke.randInt(20,60)),n=1;break;case"anomaly":e=Math.floor(ke.randInt(1,5)),t=Math.floor(ke.randInt(1,5)),n=Math.floor(ke.randInt(50,100));break;case"waves":e=Math.floor(ke.randInt(30,50)),t=1,n=Math.floor(ke.randInt(30,50));break;case"spiral":e=Math.floor(ke.randInt(10,15)),t=Math.floor(ke.randInt(10,15)),n=Math.floor(ke.randInt(10,15));break;default:e=Math.floor(ke.randInt(5,20)),t=Math.floor(ke.randInt(1,40)),n=Math.floor(ke.randInt(5,80))}this.geometry=new fs(1,1,1,e,t,n);const r=this.currentMode==="lines"?Math.floor(ke.randInt(10,30)):Math.floor(ke.randInt(30,60));this.material.uniforms.offsetSize.value=r,this.material.needsUpdate=!0,this.pointsMesh=new yt,this.pointsMesh.rotateX(Math.PI/2),this.holderObjects.add(this.pointsMesh);const s=new xd(this.geometry,this.material);this.pointsMesh.add(s),rr.to(this.pointsMesh.rotation,{duration:3,x:Math.random()*Math.PI,z:Math.random()*Math.PI*2,ease:"none"}),rr.to(this.position,{duration:.6,z:ke.randInt(9,11),ease:"elastic.out(0.8)"})}createCylinderMesh(){let e,t;switch(this.currentMode){case"particles":e=Math.floor(ke.randInt(1,3)),t=Math.floor(ke.randInt(1,5));break;case"circles":e=4,t=1;break;case"lines":e=1,t=Math.floor(ke.randInt(8,15));break;case"anomaly":e=Math.floor(ke.randInt(1,2)),t=Math.floor(ke.randInt(10,20));break;case"waves":e=Math.floor(ke.randInt(3,6)),t=Math.floor(ke.randInt(2,4));break;case"spiral":e=Math.floor(ke.randInt(2,4)),t=Math.floor(ke.randInt(3,8));break;default:e=Math.floor(ke.randInt(1,3)),t=Math.floor(ke.randInt(1,5))}this.geometry=new ll(1,1,4,64*e,64*t,!0);const n=this.currentMode==="circles"?Math.floor(ke.randInt(50,80)):Math.floor(ke.randInt(30,60));this.material.uniforms.offsetSize.value=n,this.material.uniforms.size.value=this.currentMode==="circles"?3:2,this.material.needsUpdate=!0,this.material.uniforms.needsUpdate=!0,this.pointsMesh=new xd(this.geometry,this.material),this.pointsMesh.rotation.set(Math.PI/2,0,0),this.holderObjects.add(this.pointsMesh);let r=0,s=ke.randInt(9,11);Math.random()<.2&&(r=Math.PI/2,s=ke.randInt(10,11.5)),rr.to(this.holderObjects.rotation,{duration:.2,y:r,ease:"elastic.out(0.2)"}),rr.to(this.position,{duration:.6,z:s,ease:"elastic.out(0.8)"})}onBPMBeat(){const e=yn.bpmManager.getBPMDuration()/1e3;yn.audioManager.isPlaying&&(Math.random()<.3&&this.properties.autoRotate&&rr.to(this.holderObjects.rotation,{duration:Math.random()<.8?15:e,z:Math.random()*Math.PI,ease:"elastic.out(0.2)"}),Math.random()<.3&&this.resetMesh())}resetMesh(){if(this.properties.autoMix){this.destroyMesh(),this.currentMode==="circles"||this.currentMode==="particles"&&Math.random()<.5?this.createCylinderMesh():this.createBoxMesh();const t=this.currentMode==="waves"?[1,4]:this.currentMode==="spiral"?[2,5]:[.5,3];rr.to(this.material.uniforms.frequency,{duration:yn.bpmManager?yn.bpmManager.getBPMDuration()/1e3*2:2,value:ke.randFloat(t[0],t[1]),ease:"expo.easeInOut"})}}destroyMesh(){var e,t;this.pointsMesh&&(this.holderObjects.remove(this.pointsMesh),(e=this.pointsMesh.geometry)==null||e.dispose(),(t=this.pointsMesh.material)==null||t.dispose(),this.pointsMesh=null)}update(){var e;if((e=yn.audioManager)!=null&&e.isPlaying){this.material.uniforms.amplitude.value=.8+ke.mapLinear(yn.audioManager.frequencyData.high,0,.6,-.1,.2),this.material.uniforms.offsetGain.value=yn.audioManager.frequencyData.mid*.6;const t=ke.mapLinear(yn.audioManager.frequencyData.low,.6,1,.2,.5);this.time+=ke.clamp(t,.2,.5)}else this.material.uniforms.frequency.value=.8,this.material.uniforms.amplitude.value=1,this.time+=.2;this.material.uniforms.u_mode.value,this.material.uniforms.u_mode.value,this.material.uniforms.time.value=this.time}}function YM(i){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=i,document.head.appendChild(e),i}}function qr(i,e){var t=i.__state.conversionName.toString(),n=Math.round(i.r),r=Math.round(i.g),s=Math.round(i.b),a=i.a,o=Math.round(i.h),c=i.s.toFixed(1),l=i.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=i.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+n+","+r+","+s+")";if(t==="CSS_RGBA")return"rgba("+n+","+r+","+s+","+a+")";if(t==="HEX")return"0x"+i.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+r+","+s+"]";if(t==="RGBA_ARRAY")return"["+n+","+r+","+s+","+a+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+r+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+r+",b:"+s+",a:"+a+"}";if(t==="HSV_OBJ")return"{h:"+o+",s:"+c+",v:"+l+"}";if(t==="HSVA_OBJ")return"{h:"+o+",s:"+c+",v:"+l+",a:"+a+"}"}return"unknown format"}var Vd=Array.prototype.forEach,Ts=Array.prototype.slice,J={BREAK:{},extend:function(e){return this.each(Ts.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(r){this.isUndefined(t[r])||(e[r]=t[r])}).bind(this))},this),e},defaults:function(e){return this.each(Ts.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(r){this.isUndefined(e[r])&&(e[r]=t[r])}).bind(this))},this),e},compose:function(){var e=Ts.call(arguments);return function(){for(var t=Ts.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(e){if(Vd&&e.forEach&&e.forEach===Vd)e.forEach(t,n);else if(e.length===e.length+0){var r=void 0,s=void 0;for(r=0,s=e.length;r<s;r++)if(r in e&&t.call(n,e[r],r)===this.BREAK)return}else for(var a in e)if(t.call(n,e[a],a)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var r=void 0;return function(){var s=this,a=arguments;function o(){r=null,n||e.apply(s,a)}var c=n||!r;clearTimeout(r),r=setTimeout(o,t),c&&e.apply(s,a)}},toArray:function(e){return e.toArray?e.toArray():Ts.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(i){function e(t){return i.apply(this,arguments)}return e.toString=function(){return i.toString()},e}(function(i){return isNaN(i)}),isArray:Array.isArray||function(i){return i.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},$M=[{litmus:J.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:qr},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:qr},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:qr},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:qr}}},{litmus:J.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:J.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:J.isObject,conversions:{RGBA_OBJ:{read:function(e){return J.isNumber(e.r)&&J.isNumber(e.g)&&J.isNumber(e.b)&&J.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return J.isNumber(e.r)&&J.isNumber(e.g)&&J.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return J.isNumber(e.h)&&J.isNumber(e.s)&&J.isNumber(e.v)&&J.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return J.isNumber(e.h)&&J.isNumber(e.s)&&J.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],ws=void 0,Bo=void 0,Wc=function(){Bo=!1;var e=arguments.length>1?J.toArray(arguments):arguments[0];return J.each($M,function(t){if(t.litmus(e))return J.each(t.conversions,function(n,r){if(ws=n.read(e),Bo===!1&&ws!==!1)return Bo=ws,ws.conversionName=r,ws.conversion=n,J.BREAK}),J.BREAK}),Bo},Hd=void 0,oa={hsv_to_rgb:function(e,t,n){var r=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),a=n*(1-t),o=n*(1-s*t),c=n*(1-(1-s)*t),l=[[n,c,a],[o,n,a],[a,n,c],[a,o,n],[c,a,n],[n,a,o]][r];return{r:l[0]*255,g:l[1]*255,b:l[2]*255}},rgb_to_hsv:function(e,t,n){var r=Math.min(e,t,n),s=Math.max(e,t,n),a=s-r,o=void 0,c=void 0;if(s!==0)c=a/s;else return{h:NaN,s:0,v:0};return e===s?o=(t-n)/a:t===s?o=2+(n-e)/a:o=4+(e-t)/a,o/=6,o<0&&(o+=1),{h:o*360,s:c,v:s/255}},rgb_to_hex:function(e,t,n){var r=this.hex_with_component(0,2,e);return r=this.hex_with_component(r,1,t),r=this.hex_with_component(r,0,n),r},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(Hd=t*8)|e&~(255<<Hd)}},jM=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Un=function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")},On=function(){function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),ki=function i(e,t,n){e===null&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(r===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:i(s,t,n)}else{if("value"in r)return r.value;var a=r.get;return a===void 0?void 0:a.call(n)}},Vi=function(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(i,e):i.__proto__=e)},Hi=function(i,e){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:i},At=function(){function i(){if(Un(this,i),this.__state=Wc.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return On(i,[{key:"toString",value:function(){return qr(this)}},{key:"toHexString",value:function(){return qr(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),i}();function Rl(i,e,t){Object.defineProperty(i,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(At.recalculateRGB(this,e,t),this.__state[e])},set:function(r){this.__state.space!=="RGB"&&(At.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=r}})}function Pl(i,e){Object.defineProperty(i,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(At.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(At.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}At.recalculateRGB=function(i,e,t){if(i.__state.space==="HEX")i.__state[e]=oa.component_from_hex(i.__state.hex,t);else if(i.__state.space==="HSV")J.extend(i.__state,oa.hsv_to_rgb(i.__state.h,i.__state.s,i.__state.v));else throw new Error("Corrupted color state")};At.recalculateHSV=function(i){var e=oa.rgb_to_hsv(i.r,i.g,i.b);J.extend(i.__state,{s:e.s,v:e.v}),J.isNaN(e.h)?J.isUndefined(i.__state.h)&&(i.__state.h=0):i.__state.h=e.h};At.COMPONENTS=["r","g","b","h","s","v","hex","a"];Rl(At.prototype,"r",2);Rl(At.prototype,"g",1);Rl(At.prototype,"b",0);Pl(At.prototype,"h");Pl(At.prototype,"s");Pl(At.prototype,"v");Object.defineProperty(At.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(At.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=oa.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var xr=function(){function i(e,t){Un(this,i),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return On(i,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),i}(),ZM={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},ep={};J.each(ZM,function(i,e){J.each(i,function(t){ep[t]=e})});var KM=/(\d+(\.\d+)?)px/;function kn(i){if(i==="0"||J.isUndefined(i))return 0;var e=i.match(KM);return J.isNull(e)?0:parseFloat(e[1])}var H={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var r=n,s=t;J.isUndefined(s)&&(s=!0),J.isUndefined(r)&&(r=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),r&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,r){var s=n||{},a=ep[t];if(!a)throw new Error("Event type "+t+" not supported.");var o=document.createEvent(a);switch(a){case"MouseEvents":{var c=s.x||s.clientX||0,l=s.y||s.clientY||0;o.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,c,l,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=o.initKeyboardEvent||o.initKeyEvent;J.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{o.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}J.defaults(o,r),e.dispatchEvent(o)},bind:function(e,t,n,r){var s=r||!1;return e.addEventListener?e.addEventListener(t,n,s):e.attachEvent&&e.attachEvent("on"+t,n),H},unbind:function(e,t,n,r){var s=r||!1;return e.removeEventListener?e.removeEventListener(t,n,s):e.detachEvent&&e.detachEvent("on"+t,n),H},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return H},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),r=n.indexOf(t);r!==-1&&(n.splice(r,1),e.className=n.join(" "))}else e.className=void 0;return H},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return kn(t["border-left-width"])+kn(t["border-right-width"])+kn(t["padding-left"])+kn(t["padding-right"])+kn(t.width)},getHeight:function(e){var t=getComputedStyle(e);return kn(t["border-top-width"])+kn(t["border-bottom-width"])+kn(t["padding-top"])+kn(t["padding-bottom"])+kn(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},tp=function(i){Vi(e,i);function e(t,n){Un(this,e);var r=Hi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function a(){s.setValue(!s.__prev)}return H.bind(r.__checkbox,"change",a,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return On(e,[{key:"setValue",value:function(n){var r=ki(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),ki(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(xr),JM=function(i){Vi(e,i);function e(t,n,r){Un(this,e);var s=Hi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=r,o=s;if(s.__select=document.createElement("select"),J.isArray(a)){var c={};J.each(a,function(l){c[l]=l}),a=c}return J.each(a,function(l,u){var d=document.createElement("option");d.innerHTML=u,d.setAttribute("value",l),o.__select.appendChild(d)}),s.updateDisplay(),H.bind(s.__select,"change",function(){var l=this.options[this.selectedIndex].value;o.setValue(l)}),s.domElement.appendChild(s.__select),s}return On(e,[{key:"setValue",value:function(n){var r=ki(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return H.isActive(this.__select)?this:(this.__select.value=this.getValue(),ki(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(xr),QM=function(i){Vi(e,i);function e(t,n){Un(this,e);var r=Hi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=r;function a(){s.setValue(s.__input.value)}function o(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),H.bind(r.__input,"keyup",a),H.bind(r.__input,"change",a),H.bind(r.__input,"blur",o),H.bind(r.__input,"keydown",function(c){c.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return On(e,[{key:"updateDisplay",value:function(){return H.isActive(this.__input)||(this.__input.value=this.getValue()),ki(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(xr);function Gd(i){var e=i.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var np=function(i){Vi(e,i);function e(t,n,r){Un(this,e);var s=Hi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=r||{};return s.__min=a.min,s.__max=a.max,s.__step=a.step,J.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=Gd(s.__impliedStep),s}return On(e,[{key:"setValue",value:function(n){var r=n;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),ki(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Gd(n),this}}]),e}(xr);function eS(i,e){var t=Math.pow(10,e);return Math.round(i*t)/t}var aa=function(i){Vi(e,i);function e(t,n,r){Un(this,e);var s=Hi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,r));s.__truncationSuspended=!1;var a=s,o=void 0;function c(){var g=parseFloat(a.__input.value);J.isNaN(g)||a.setValue(g)}function l(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}function u(){l()}function d(g){var p=o-g.clientY;a.setValue(a.getValue()+p*a.__impliedStep),o=g.clientY}function h(){H.unbind(window,"mousemove",d),H.unbind(window,"mouseup",h),l()}function f(g){H.bind(window,"mousemove",d),H.bind(window,"mouseup",h),o=g.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),H.bind(s.__input,"change",c),H.bind(s.__input,"blur",u),H.bind(s.__input,"mousedown",f),H.bind(s.__input,"keydown",function(g){g.keyCode===13&&(a.__truncationSuspended=!0,this.blur(),a.__truncationSuspended=!1,l())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return On(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():eS(this.getValue(),this.__precision),ki(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(np);function Wd(i,e,t,n,r){return n+(r-n)*((i-e)/(t-e))}var Xc=function(i){Vi(e,i);function e(t,n,r,s,a){Un(this,e);var o=Hi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:r,max:s,step:a})),c=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),H.bind(o.__background,"mousedown",l),H.bind(o.__background,"touchstart",h),H.addClass(o.__background,"slider"),H.addClass(o.__foreground,"slider-fg");function l(p){document.activeElement.blur(),H.bind(window,"mousemove",u),H.bind(window,"mouseup",d),u(p)}function u(p){p.preventDefault();var m=c.__background.getBoundingClientRect();return c.setValue(Wd(p.clientX,m.left,m.right,c.__min,c.__max)),!1}function d(){H.unbind(window,"mousemove",u),H.unbind(window,"mouseup",d),c.__onFinishChange&&c.__onFinishChange.call(c,c.getValue())}function h(p){p.touches.length===1&&(H.bind(window,"touchmove",f),H.bind(window,"touchend",g),f(p))}function f(p){var m=p.touches[0].clientX,_=c.__background.getBoundingClientRect();c.setValue(Wd(m,_.left,_.right,c.__min,c.__max))}function g(){H.unbind(window,"touchmove",f),H.unbind(window,"touchend",g),c.__onFinishChange&&c.__onFinishChange.call(c,c.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return On(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",ki(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(np),ip=function(i){Vi(e,i);function e(t,n,r){Un(this,e);var s=Hi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=s;return s.__button=document.createElement("div"),s.__button.innerHTML=r===void 0?"Fire":r,H.bind(s.__button,"click",function(o){return o.preventDefault(),a.fire(),!1}),H.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return On(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(xr),qc=function(i){Vi(e,i);function e(t,n){Un(this,e);var r=Hi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));r.__color=new At(r.getValue()),r.__temp=new At(0);var s=r;r.domElement=document.createElement("div"),H.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",H.bind(r.__input,"keydown",function(p){p.keyCode===13&&d.call(this)}),H.bind(r.__input,"blur",d),H.bind(r.__selector,"mousedown",function(){H.addClass(this,"drag").bind(window,"mouseup",function(){H.removeClass(s.__selector,"drag")})}),H.bind(r.__selector,"touchstart",function(){H.addClass(this,"drag").bind(window,"touchend",function(){H.removeClass(s.__selector,"drag")})});var a=document.createElement("div");J.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),J.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),J.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),J.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),J.extend(a.style,{width:"100%",height:"100%",background:"none"}),Xd(a,"top","rgba(0,0,0,0)","#000"),J.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),nS(r.__hue_field),J.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),H.bind(r.__saturation_field,"mousedown",o),H.bind(r.__saturation_field,"touchstart",o),H.bind(r.__field_knob,"mousedown",o),H.bind(r.__field_knob,"touchstart",o),H.bind(r.__hue_field,"mousedown",c),H.bind(r.__hue_field,"touchstart",c);function o(p){f(p),H.bind(window,"mousemove",f),H.bind(window,"touchmove",f),H.bind(window,"mouseup",l),H.bind(window,"touchend",l)}function c(p){g(p),H.bind(window,"mousemove",g),H.bind(window,"touchmove",g),H.bind(window,"mouseup",u),H.bind(window,"touchend",u)}function l(){H.unbind(window,"mousemove",f),H.unbind(window,"touchmove",f),H.unbind(window,"mouseup",l),H.unbind(window,"touchend",l),h()}function u(){H.unbind(window,"mousemove",g),H.unbind(window,"touchmove",g),H.unbind(window,"mouseup",u),H.unbind(window,"touchend",u),h()}function d(){var p=Wc(this.value);p!==!1?(s.__color.__state=p,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function h(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}r.__saturation_field.appendChild(a),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function f(p){p.type.indexOf("touch")===-1&&p.preventDefault();var m=s.__saturation_field.getBoundingClientRect(),_=p.touches&&p.touches[0]||p,E=_.clientX,y=_.clientY,M=(E-m.left)/(m.right-m.left),v=1-(y-m.top)/(m.bottom-m.top);return v>1?v=1:v<0&&(v=0),M>1?M=1:M<0&&(M=0),s.__color.v=v,s.__color.s=M,s.setValue(s.__color.toOriginal()),!1}function g(p){p.type.indexOf("touch")===-1&&p.preventDefault();var m=s.__hue_field.getBoundingClientRect(),_=p.touches&&p.touches[0]||p,E=_.clientY,y=1-(E-m.top)/(m.bottom-m.top);return y>1?y=1:y<0&&(y=0),s.__color.h=y*360,s.setValue(s.__color.toOriginal()),!1}return r}return On(e,[{key:"updateDisplay",value:function(){var n=Wc(this.getValue());if(n!==!1){var r=!1;J.each(At.COMPONENTS,function(o){if(!J.isUndefined(n[o])&&!J.isUndefined(this.__color.__state[o])&&n[o]!==this.__color.__state[o])return r=!0,{}},this),r&&J.extend(this.__color.__state,n)}J.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,a=255-s;J.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Xd(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),J.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+a+","+a+","+a+",.7)"})}}]),e}(xr),tS=["-moz-","-o-","-webkit-","-ms-",""];function Xd(i,e,t,n){i.style.background="",J.each(tS,function(r){i.style.cssText+="background: "+r+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function nS(i){i.style.background="",i.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",i.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var iS={load:function(e,t){var n=t||document,r=n.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,n.getElementsByTagName("head")[0].appendChild(r)},inject:function(e,t){var n=t||document,r=document.createElement("style");r.type="text/css",r.innerHTML=e;var s=n.getElementsByTagName("head")[0];try{s.appendChild(r)}catch{}}},rS=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,sS=function(e,t){var n=e[t];return J.isArray(arguments[2])||J.isObject(arguments[2])?new JM(e,t,arguments[2]):J.isNumber(n)?J.isNumber(arguments[2])&&J.isNumber(arguments[3])?J.isNumber(arguments[4])?new Xc(e,t,arguments[2],arguments[3],arguments[4]):new Xc(e,t,arguments[2],arguments[3]):J.isNumber(arguments[4])?new aa(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new aa(e,t,{min:arguments[2],max:arguments[3]}):J.isString(n)?new QM(e,t):J.isFunction(n)?new ip(e,t,""):J.isBoolean(n)?new tp(e,t):null};function oS(i){setTimeout(i,1e3/60)}var aS=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||oS,cS=function(){function i(){Un(this,i),this.backgroundElement=document.createElement("div"),J.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),H.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),J.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;H.bind(this.backgroundElement,"click",function(){e.hide()})}return On(i,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),J.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function r(){t.domElement.style.display="none",t.backgroundElement.style.display="none",H.unbind(t.domElement,"webkitTransitionEnd",r),H.unbind(t.domElement,"transitionend",r),H.unbind(t.domElement,"oTransitionEnd",r)};H.bind(this.domElement,"webkitTransitionEnd",n),H.bind(this.domElement,"transitionend",n),H.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-H.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-H.getHeight(this.domElement)/2+"px"}}]),i}(),lS=YM(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);iS.inject(lS);var qd="dg",Yd=72,$d=20,js="Default",Ps=function(){try{return!!window.localStorage}catch{return!1}}(),Fs=void 0,jd=!0,Vr=void 0,_c=!1,rp=[],tt=function i(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),H.addClass(this.domElement,qd),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=J.defaults(n,{closeOnTop:!1,autoPlace:!0,width:i.DEFAULT_WIDTH}),n=J.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),J.isUndefined(n.load)?n.load={preset:js}:n.preset&&(n.load.preset=n.preset),J.isUndefined(n.parent)&&n.hideable&&rp.push(this),n.resizable=J.isUndefined(n.parent)&&n.resizable,n.autoPlace&&J.isUndefined(n.scrollable)&&(n.scrollable=!0);var r=Ps&&localStorage.getItem(Hr(this,"isLocal"))==="true",s=void 0,a=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(h){t.parent?t.getRoot().preset=h:n.load.preset=h,fS(this),t.revert()}},width:{get:function(){return n.width},set:function(h){n.width=h,jc(t,h)}},name:{get:function(){return n.name},set:function(h){n.name=h,a&&(a.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(h){n.closed=h,n.closed?H.addClass(t.__ul,i.CLASS_CLOSED):H.removeClass(t.__ul,i.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=h?i.TEXT_OPEN:i.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return r},set:function(h){Ps&&(r=h,h?H.bind(window,"unload",s):H.unbind(window,"unload",s),localStorage.setItem(Hr(t,"isLocal"),h))}}}),J.isUndefined(n.parent)){if(this.closed=n.closed||!1,H.addClass(this.domElement,i.CLASS_MAIN),H.makeSelectable(this.domElement,!1),Ps&&r){t.useLocalStorage=!0;var o=localStorage.getItem(Hr(this,"gui"));o&&(n.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=i.TEXT_CLOSED,H.addClass(this.__closeButton,i.CLASS_CLOSE_BUTTON),n.closeOnTop?(H.addClass(this.__closeButton,i.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(H.addClass(this.__closeButton,i.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),H.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var c=document.createTextNode(n.name);H.addClass(c,"controller-name"),a=Ll(t,c);var l=function(h){return h.preventDefault(),t.closed=!t.closed,!1};H.addClass(this.__ul,i.CLASS_CLOSED),H.addClass(a,"title"),H.bind(a,"click",l),n.closed||(this.closed=!1)}n.autoPlace&&(J.isUndefined(n.parent)&&(jd&&(Vr=document.createElement("div"),H.addClass(Vr,qd),H.addClass(Vr,i.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Vr),jd=!1),Vr.appendChild(this.domElement),H.addClass(this.domElement,i.CLASS_AUTO_PLACE)),this.parent||jc(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},H.bind(window,"resize",this.__resizeHandler),H.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),H.bind(this.__ul,"transitionend",this.__resizeHandler),H.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&hS(this),s=function(){Ps&&localStorage.getItem(Hr(t,"isLocal"))==="true"&&localStorage.setItem(Hr(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function u(){var d=t.getRoot();d.width+=1,J.defer(function(){d.width-=1})}n.parent||u()};tt.toggleHide=function(){_c=!_c,J.each(rp,function(i){i.domElement.style.display=_c?"none":""})};tt.CLASS_AUTO_PLACE="a";tt.CLASS_AUTO_PLACE_CONTAINER="ac";tt.CLASS_MAIN="main";tt.CLASS_CONTROLLER_ROW="cr";tt.CLASS_TOO_TALL="taller-than-window";tt.CLASS_CLOSED="closed";tt.CLASS_CLOSE_BUTTON="close-button";tt.CLASS_CLOSE_TOP="close-top";tt.CLASS_CLOSE_BOTTOM="close-bottom";tt.CLASS_DRAG="drag";tt.DEFAULT_WIDTH=245;tt.TEXT_CLOSED="Close Controls";tt.TEXT_OPEN="Open Controls";tt._keydownHandler=function(i){document.activeElement.type!=="text"&&(i.which===Yd||i.keyCode===Yd)&&tt.toggleHide()};H.bind(window,"keydown",tt._keydownHandler,!1);J.extend(tt.prototype,{add:function(e,t){return Bs(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Bs(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;J.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Vr.removeChild(this.domElement);var e=this;J.each(this.__folders,function(t){e.removeFolder(t)}),H.unbind(window,"keydown",tt._keydownHandler,!1),Zd(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new tt(t);this.__folders[e]=n;var r=Ll(this,n.domElement);return H.addClass(r,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Zd(e);var t=this;J.each(e.__folders,function(n){e.removeFolder(n)}),J.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=H.getOffset(e.__ul).top,n=0;J.each(e.__ul.childNodes,function(r){e.autoPlace&&r===e.__save_row||(n+=H.getHeight(r))}),window.innerHeight-t-$d<n?(H.addClass(e.domElement,tt.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-$d+"px"):(H.removeClass(e.domElement,tt.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&J.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:J.debounce(function(){this.onResize()},50),remember:function(){if(J.isUndefined(Fs)&&(Fs=new cS,Fs.domElement.innerHTML=rS),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;J.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&dS(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&jc(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=ko(this)),e.folders={},J.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=ko(this),Yc(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[js]=ko(this,!0)),this.load.remembered[e]=ko(this),this.preset=e,$c(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){J.each(this.__controllers,function(t){this.getRoot().load.remembered?sp(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),J.each(this.__folders,function(t){t.revert(t)}),e||Yc(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&op(this.__listening)},updateDisplay:function(){J.each(this.__controllers,function(e){e.updateDisplay()}),J.each(this.__folders,function(e){e.updateDisplay()})}});function Ll(i,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?i.__ul.insertBefore(n,t):i.__ul.appendChild(n),i.onResize(),n}function Zd(i){H.unbind(window,"resize",i.__resizeHandler),i.saveToLocalStorageIfPossible&&H.unbind(window,"unload",i.saveToLocalStorageIfPossible)}function Yc(i,e){var t=i.__preset_select[i.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function uS(i,e,t){if(t.__li=e,t.__gui=i,J.extend(t,{options:function(a){if(arguments.length>1){var o=t.__li.nextElementSibling;return t.remove(),Bs(i,t.object,t.property,{before:o,factoryArgs:[J.toArray(arguments)]})}if(J.isArray(a)||J.isObject(a)){var c=t.__li.nextElementSibling;return t.remove(),Bs(i,t.object,t.property,{before:c,factoryArgs:[a]})}},name:function(a){return t.__li.firstElementChild.firstElementChild.innerHTML=a,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Xc){var n=new aa(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});J.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var a=t[s],o=n[s];t[s]=n[s]=function(){var c=Array.prototype.slice.call(arguments);return o.apply(n,c),a.apply(t,c)}}),H.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof aa){var r=function(a){if(J.isNumber(t.__min)&&J.isNumber(t.__max)){var o=t.__li.firstElementChild.firstElementChild.innerHTML,c=t.__gui.__listening.indexOf(t)>-1;t.remove();var l=Bs(i,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return l.name(o),c&&l.listen(),l}return a};t.min=J.compose(r,t.min),t.max=J.compose(r,t.max)}else t instanceof tp?(H.bind(e,"click",function(){H.fakeEvent(t.__checkbox,"click")}),H.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof ip?(H.bind(e,"click",function(){H.fakeEvent(t.__button,"click")}),H.bind(e,"mouseover",function(){H.addClass(t.__button,"hover")}),H.bind(e,"mouseout",function(){H.removeClass(t.__button,"hover")})):t instanceof qc&&(H.addClass(e,"color"),t.updateDisplay=J.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=J.compose(function(s){return i.getRoot().__preset_select&&t.isModified()&&Yc(i.getRoot(),!0),s},t.setValue)}function sp(i,e){var t=i.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var r=t.__rememberedObjectIndecesToControllers[n];if(r===void 0&&(r={},t.__rememberedObjectIndecesToControllers[n]=r),r[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,a=void 0;if(s[i.preset])a=s[i.preset];else if(s[js])a=s[js];else return;if(a[n]&&a[n][e.property]!==void 0){var o=a[n][e.property];e.initialValue=o,e.setValue(o)}}}}function Bs(i,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var r=void 0;if(n.color)r=new qc(e,t);else{var s=[e,t].concat(n.factoryArgs);r=sS.apply(i,s)}n.before instanceof xr&&(n.before=n.before.__li),sp(i,r),H.addClass(r.domElement,"c");var a=document.createElement("span");H.addClass(a,"property-name"),a.innerHTML=r.property;var o=document.createElement("div");o.appendChild(a),o.appendChild(r.domElement);var c=Ll(i,o,n.before);return H.addClass(c,tt.CLASS_CONTROLLER_ROW),r instanceof qc?H.addClass(c,"color"):H.addClass(c,jM(r.getValue())),uS(i,c,r),i.__controllers.push(r),r}function Hr(i,e){return document.location.href+"."+e}function $c(i,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,i.__preset_select.appendChild(n),t&&(i.__preset_select.selectedIndex=i.__preset_select.length-1)}function Kd(i,e){e.style.display=i.useLocalStorage?"block":"none"}function dS(i){var e=i.__save_row=document.createElement("li");H.addClass(i.domElement,"has-save"),i.__ul.insertBefore(e,i.__ul.firstChild),H.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",H.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",H.addClass(n,"button"),H.addClass(n,"save");var r=document.createElement("span");r.innerHTML="New",H.addClass(r,"button"),H.addClass(r,"save-as");var s=document.createElement("span");s.innerHTML="Revert",H.addClass(s,"button"),H.addClass(s,"revert");var a=i.__preset_select=document.createElement("select");if(i.load&&i.load.remembered?J.each(i.load.remembered,function(d,h){$c(i,h,h===i.preset)}):$c(i,js,!1),H.bind(a,"change",function(){for(var d=0;d<i.__preset_select.length;d++)i.__preset_select[d].innerHTML=i.__preset_select[d].value;i.preset=this.value}),e.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(s),Ps){var o=document.getElementById("dg-local-explain"),c=document.getElementById("dg-local-storage"),l=document.getElementById("dg-save-locally");l.style.display="block",localStorage.getItem(Hr(i,"isLocal"))==="true"&&c.setAttribute("checked","checked"),Kd(i,o),H.bind(c,"change",function(){i.useLocalStorage=!i.useLocalStorage,Kd(i,o)})}var u=document.getElementById("dg-new-constructor");H.bind(u,"keydown",function(d){d.metaKey&&(d.which===67||d.keyCode===67)&&Fs.hide()}),H.bind(t,"click",function(){u.innerHTML=JSON.stringify(i.getSaveObject(),void 0,2),Fs.show(),u.focus(),u.select()}),H.bind(n,"click",function(){i.save()}),H.bind(r,"click",function(){var d=prompt("Enter a new preset name.");d&&i.saveAs(d)}),H.bind(s,"click",function(){i.revert()})}function hS(i){var e=void 0;i.__resize_handle=document.createElement("div"),J.extend(i.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),i.width+=e-s.clientX,i.onResize(),e=s.clientX,!1}function n(){H.removeClass(i.__closeButton,tt.CLASS_DRAG),H.unbind(window,"mousemove",t),H.unbind(window,"mouseup",n)}function r(s){return s.preventDefault(),e=s.clientX,H.addClass(i.__closeButton,tt.CLASS_DRAG),H.bind(window,"mousemove",t),H.bind(window,"mouseup",n),!1}H.bind(i.__resize_handle,"mousedown",r),H.bind(i.__closeButton,"mousedown",r),i.domElement.insertBefore(i.__resize_handle,i.domElement.firstElementChild)}function jc(i,e){i.domElement.style.width=e+"px",i.__save_row&&i.autoPlace&&(i.__save_row.style.width=e+"px"),i.__closeButton&&(i.__closeButton.style.width=e+"px")}function ko(i,e){var t={};return J.each(i.__rememberedObjects,function(n,r){var s={},a=i.__rememberedObjectIndecesToControllers[r];J.each(a,function(o,c){s[c]=e?o.initialValue:o.getValue()}),t[r]=s}),t}function fS(i){for(var e=0;e<i.__preset_select.length;e++)i.__preset_select[e].value===i.preset&&(i.__preset_select.selectedIndex=e)}function op(i){i.length!==0&&aS.call(window,function(){op(i)}),J.each(i,function(e){e.updateDisplay()})}const pS=i=>(e,t)=>(i.set(e,t),t),Jd=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,ap=536870912,Qd=ap*2,mS=(i,e)=>t=>{const n=e.get(t);let r=n===void 0?t.size:n<Qd?n+1:0;if(!t.has(r))return i(t,r);if(t.size<ap){for(;t.has(r);)r=Math.floor(Math.random()*Qd);return i(t,r)}if(t.size>Jd)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(r);)r=Math.floor(Math.random()*Jd);return i(t,r)},cp=new WeakMap,_S=pS(cp),gS=mS(_S,cp),vS=i=>typeof i.start=="function",eh=new WeakMap,xS=i=>({...i,connect:({call:e})=>async()=>{const{port1:t,port2:n}=new MessageChannel,r=await e("connect",{port:t},[t]);return eh.set(n,r),n},disconnect:({call:e})=>async t=>{const n=eh.get(t);if(n===void 0)throw new Error("The given port is not connected.");await e("disconnect",{portId:n})},isSupported:({call:e})=>()=>e("isSupported")}),gc=new WeakMap,yS=i=>{if(gc.has(i))return gc.get(i);const e=new Map;return gc.set(i,e),e},MS=i=>{const e=xS(i);return t=>{const n=yS(t);t.addEventListener("message",({data:o})=>{const{id:c}=o;if(c!==null&&n.has(c)){const{reject:l,resolve:u}=n.get(c);n.delete(c),o.error===void 0?u(o.result):l(new Error(o.error.message))}}),vS(t)&&t.start();const r=(o,c=null,l=[])=>new Promise((u,d)=>{const h=gS(n);n.set(h,{reject:d,resolve:u}),c===null?t.postMessage({id:h,method:o},l):t.postMessage({id:h,method:o,params:c},l)}),s=(o,c,l=[])=>{t.postMessage({id:null,method:o,params:c},l)};let a={};for(const[o,c]of Object.entries(e))a={...a,[o]:c({call:r,notify:s})};return{...a}}},th=(i,e,t)=>({endTime:e,insertTime:t,type:"exponentialRampToValue",value:i}),nh=(i,e,t)=>({endTime:e,insertTime:t,type:"linearRampToValue",value:i}),Zc=(i,e)=>({startTime:e,type:"setValue",value:i}),lp=(i,e,t)=>({duration:t,startTime:e,type:"setValueCurve",values:i}),up=(i,e,{startTime:t,target:n,timeConstant:r})=>n+(e-n)*Math.exp((t-i)/r),Yr=i=>i.type==="exponentialRampToValue",ca=i=>i.type==="linearRampToValue",Ei=i=>Yr(i)||ca(i),Dl=i=>i.type==="setValue",si=i=>i.type==="setValueCurve",la=(i,e,t,n)=>{const r=i[e];return r===void 0?n:Ei(r)||Dl(r)?r.value:si(r)?r.values[r.values.length-1]:up(t,la(i,e-1,r.startTime,n),r)},ih=(i,e,t,n,r)=>t===void 0?[n.insertTime,r]:Ei(t)?[t.endTime,t.value]:Dl(t)?[t.startTime,t.value]:si(t)?[t.startTime+t.duration,t.values[t.values.length-1]]:[t.startTime,la(i,e-1,t.startTime,r)],Kc=i=>i.type==="cancelAndHold",Jc=i=>i.type==="cancelScheduledValues",Si=i=>Kc(i)||Jc(i)?i.cancelTime:Yr(i)||ca(i)?i.endTime:i.startTime,rh=(i,e,t,{endTime:n,value:r})=>t===r?r:0<t&&0<r||t<0&&r<0?t*(r/t)**((i-e)/(n-e)):0,sh=(i,e,t,{endTime:n,value:r})=>t+(i-e)/(n-e)*(r-t),SS=(i,e)=>{const t=Math.floor(e),n=Math.ceil(e);return t===n?i[t]:(1-(e-t))*i[t]+(1-(n-e))*i[n]},ES=(i,{duration:e,startTime:t,values:n})=>{const r=(i-t)/e*(n.length-1);return SS(n,r)},zo=i=>i.type==="setTarget";class bS{constructor(e){this._automationEvents=[],this._currenTime=0,this._defaultValue=e}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(e){const t=Si(e);if(Kc(e)||Jc(e)){const n=this._automationEvents.findIndex(s=>Jc(e)&&si(s)?s.startTime+s.duration>=t:Si(s)>=t),r=this._automationEvents[n];if(n!==-1&&(this._automationEvents=this._automationEvents.slice(0,n)),Kc(e)){const s=this._automationEvents[this._automationEvents.length-1];if(r!==void 0&&Ei(r)){if(s!==void 0&&zo(s))throw new Error("The internal list is malformed.");const a=s===void 0?r.insertTime:si(s)?s.startTime+s.duration:Si(s),o=s===void 0?this._defaultValue:si(s)?s.values[s.values.length-1]:s.value,c=Yr(r)?rh(t,a,o,r):sh(t,a,o,r),l=Yr(r)?th(c,t,this._currenTime):nh(c,t,this._currenTime);this._automationEvents.push(l)}if(s!==void 0&&zo(s)&&this._automationEvents.push(Zc(this.getValue(t),t)),s!==void 0&&si(s)&&s.startTime+s.duration>t){const a=t-s.startTime,o=(s.values.length-1)/s.duration,c=Math.max(2,1+Math.ceil(a*o)),l=a/(c-1)*o,u=s.values.slice(0,c);if(l<1)for(let d=1;d<c;d+=1){const h=l*d%1;u[d]=s.values[d-1]*(1-h)+s.values[d]*h}this._automationEvents[this._automationEvents.length-1]=lp(u,s.startTime,a)}}}else{const n=this._automationEvents.findIndex(a=>Si(a)>t),r=n===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[n-1];if(r!==void 0&&si(r)&&Si(r)+r.duration>t)return!1;const s=Yr(e)?th(e.value,e.endTime,this._currenTime):ca(e)?nh(e.value,t,this._currenTime):e;if(n===-1)this._automationEvents.push(s);else{if(si(e)&&t+e.duration>Si(this._automationEvents[n]))return!1;this._automationEvents.splice(n,0,s)}}return!0}flush(e){const t=this._automationEvents.findIndex(n=>Si(n)>e);if(t>1){const n=this._automationEvents.slice(t-1),r=n[0];zo(r)&&n.unshift(Zc(la(this._automationEvents,t-2,r.startTime,this._defaultValue),r.startTime)),this._automationEvents=n}}getValue(e){if(this._automationEvents.length===0)return this._defaultValue;const t=this._automationEvents.findIndex(a=>Si(a)>e),n=this._automationEvents[t],r=(t===-1?this._automationEvents.length:t)-1,s=this._automationEvents[r];if(s!==void 0&&zo(s)&&(n===void 0||!Ei(n)||n.insertTime>e))return up(e,la(this._automationEvents,r-1,s.startTime,this._defaultValue),s);if(s!==void 0&&Dl(s)&&(n===void 0||!Ei(n)))return s.value;if(s!==void 0&&si(s)&&(n===void 0||!Ei(n)||s.startTime+s.duration>e))return e<s.startTime+s.duration?ES(e,s):s.values[s.values.length-1];if(s!==void 0&&Ei(s)&&(n===void 0||!Ei(n)))return s.value;if(n!==void 0&&Yr(n)){const[a,o]=ih(this._automationEvents,r,s,n,this._defaultValue);return rh(e,a,o,n)}if(n!==void 0&&ca(n)){const[a,o]=ih(this._automationEvents,r,s,n,this._defaultValue);return sh(e,a,o,n)}return this._defaultValue}}const TS=i=>({cancelTime:i,type:"cancelAndHold"}),wS=i=>({cancelTime:i,type:"cancelScheduledValues"}),AS=(i,e)=>({endTime:e,type:"exponentialRampToValue",value:i}),CS=(i,e)=>({endTime:e,type:"linearRampToValue",value:i}),RS=(i,e,t)=>({startTime:e,target:i,timeConstant:t,type:"setTarget"}),PS=()=>new DOMException("","AbortError"),LS=i=>(e,t,[n,r,s],a)=>{i(e[r],[t,n,s],o=>o[0]===t&&o[1]===n,a)},DS=i=>(e,t,n)=>{const r=[];for(let s=0;s<n.numberOfInputs;s+=1)r.push(new Set);i.set(e,{activeInputs:r,outputs:new Set,passiveInputs:new WeakMap,renderer:t})},NS=i=>(e,t)=>{i.set(e,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:t})},ls=new WeakSet,dp=new WeakMap,hp=new WeakMap,fp=new WeakMap,pp=new WeakMap,mp=new WeakMap,_p=new WeakMap,Qc=new WeakMap,oh=new WeakMap,gp={construct(){return gp}},IS=i=>{try{const e=new Proxy(i,gp);new e}catch{return!1}return!0},ah=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,ch=(i,e)=>{const t=[];let n=i.replace(/^[\s]+/,""),r=n.match(ah);for(;r!==null;){const s=r[1].slice(1,-1),a=r[0].replace(/([\s]+)?;?$/,"").replace(s,new URL(s,e).toString());t.push(a),n=n.slice(r[0].length).replace(/^[\s]+/,""),r=n.match(ah)}return[t.join(";"),n]},lh=i=>{if(i!==void 0&&!Array.isArray(i))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},uh=i=>{if(!IS(i))throw new TypeError("The given value for processorCtor should be a constructor.");if(i.prototype===null||typeof i.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},US=(i,e,t,n,r,s,a,o,c,l,u,d,h)=>{let f=0;return(g,p,m={credentials:"omit"})=>{const _=u.get(g);if(_!==void 0&&_.has(p))return Promise.resolve();const E=l.get(g);if(E!==void 0){const v=E.get(p);if(v!==void 0)return v}const y=s(g),M=y.audioWorklet===void 0?r(p).then(([v,T])=>{const[b,w]=ch(v,T),x=`${b};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${w}
})})(window,'_AWGS')`;return t(x)}).then(()=>{const v=h._AWGS.pop();if(v===void 0)throw new SyntaxError;n(y.currentTime,y.sampleRate,()=>v(class{},void 0,(T,b)=>{if(T.trim()==="")throw e();const w=oh.get(y);if(w!==void 0){if(w.has(T))throw e();uh(b),lh(b.parameterDescriptors),w.set(T,b)}else uh(b),lh(b.parameterDescriptors),oh.set(y,new Map([[T,b]]))},y.sampleRate,void 0,void 0))}):Promise.all([r(p),Promise.resolve(i(d,d))]).then(([[v,T],b])=>{const w=f+1;f=w;const[x,S]=ch(v,T),R=`${x};((AudioWorkletProcessor,registerProcessor)=>{${S}
})(${b?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${b?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${b?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${w}',class extends AudioWorkletProcessor{process(){return !1}})`,U=new Blob([R],{type:"application/javascript; charset=utf-8"}),F=URL.createObjectURL(U);return y.audioWorklet.addModule(F,m).then(()=>{if(o(y))return y;const B=a(y);return B.audioWorklet.addModule(F,m).then(()=>B)}).then(B=>{if(c===null)throw new SyntaxError;try{new c(B,`__sac${w}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL(F))});return E===void 0?l.set(g,new Map([[p,M]])):E.set(p,M),M.then(()=>{const v=u.get(g);v===void 0?u.set(g,new Set([p])):v.add(p)}).finally(()=>{const v=l.get(g);v!==void 0&&v.delete(p)}),M}},Gi=(i,e)=>{const t=i.get(e);if(t===void 0)throw new Error("A value with the given key could not be found.");return t},Sa=(i,e)=>{const t=Array.from(i).filter(e);if(t.length>1)throw Error("More than one element was found.");if(t.length===0)throw Error("No element was found.");const[n]=t;return i.delete(n),n},vp=(i,e,t,n)=>{const r=Gi(i,e),s=Sa(r,a=>a[0]===t&&a[1]===n);return r.size===0&&i.delete(e),s},to=i=>Gi(_p,i),us=i=>{if(ls.has(i))throw new Error("The AudioNode is already stored.");ls.add(i),to(i).forEach(e=>e(!0))},xp=i=>"port"in i,no=i=>{if(!ls.has(i))throw new Error("The AudioNode is not stored.");ls.delete(i),to(i).forEach(e=>e(!1))},el=(i,e)=>{!xp(i)&&e.every(t=>t.size===0)&&no(i)},OS=(i,e,t,n,r,s,a,o,c,l,u,d,h)=>{const f=new WeakMap;return(g,p,m,_,E)=>{const{activeInputs:y,passiveInputs:M}=s(p),{outputs:v}=s(g),T=o(g),b=w=>{const x=c(p),S=c(g);if(w){const D=vp(M,g,m,_);i(y,g,D,!1),!E&&!d(g)&&t(S,x,m,_),h(p)&&us(p)}else{const D=n(y,g,m,_);e(M,_,D,!1),!E&&!d(g)&&r(S,x,m,_);const L=a(p);if(L===0)u(p)&&el(p,y);else{const O=f.get(p);O!==void 0&&clearTimeout(O),f.set(p,setTimeout(()=>{u(p)&&el(p,y)},L*1e3))}}};return l(v,[p,m,_],w=>w[0]===p&&w[1]===m&&w[2]===_,!0)?(T.add(b),u(g)?i(y,g,[m,_,b],!0):e(M,_,[g,m,b],!0),!0):!1}},FS=i=>(e,t,[n,r,s],a)=>{const o=e.get(n);o===void 0?e.set(n,new Set([[r,t,s]])):i(o,[r,t,s],c=>c[0]===r&&c[1]===t,a)},BS=i=>(e,t)=>{const n=i(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});t.connect(n).connect(e.destination);const r=()=>{t.removeEventListener("ended",r),t.disconnect(n),n.disconnect()};t.addEventListener("ended",r)},kS={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},zS=(i,e,t,n,r,s)=>class extends i{constructor(o,c){const l=r(o),u={...kS,...c},d=n(l,u),h=s(l)?e():null;super(o,!1,d,h),this._nativeAnalyserNode=d}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(o){this._nativeAnalyserNode.fftSize=o}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(o){const c=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=o,!(o>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=c,t()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(o){const c=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=o,!(this._nativeAnalyserNode.maxDecibels>o))throw this._nativeAnalyserNode.minDecibels=c,t()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(o){this._nativeAnalyserNode.smoothingTimeConstant=o}getByteFrequencyData(o){this._nativeAnalyserNode.getByteFrequencyData(o)}getByteTimeDomainData(o){this._nativeAnalyserNode.getByteTimeDomainData(o)}getFloatFrequencyData(o){this._nativeAnalyserNode.getFloatFrequencyData(o)}getFloatTimeDomainData(o){this._nativeAnalyserNode.getFloatTimeDomainData(o)}},Yt=(i,e)=>i.context===e,VS=(i,e,t)=>()=>{const n=new WeakMap,r=async(s,a)=>{let o=e(s);if(!Yt(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,fftSize:o.fftSize,maxDecibels:o.maxDecibels,minDecibels:o.minDecibels,smoothingTimeConstant:o.smoothingTimeConstant};o=i(a,l)}return n.set(a,o),await t(s,a,o),o};return{render(s,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):r(s,a)}}},ua=i=>{try{i.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},yr=()=>new DOMException("","IndexSizeError"),Nl=i=>{i.getChannelData=(e=>t=>{try{return e.call(i,t)}catch(n){throw n.code===12?yr():n}})(i.getChannelData)},HS={numberOfChannels:1},GS=(i,e,t,n,r,s,a,o)=>{let c=null;return class yp{constructor(u){if(r===null)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:d,numberOfChannels:h,sampleRate:f}={...HS,...u};c===null&&(c=new r(1,1,44100));const g=n!==null&&e(s,s)?new n({length:d,numberOfChannels:h,sampleRate:f}):c.createBuffer(h,d,f);if(g.numberOfChannels===0)throw t();return typeof g.copyFromChannel!="function"?(a(g),Nl(g)):e(ua,()=>ua(g))||o(g),i.add(g),g}static[Symbol.hasInstance](u){return u!==null&&typeof u=="object"&&Object.getPrototypeOf(u)===yp.prototype||i.has(u)}}},ln=-34028234663852886e22,$t=-ln,ci=i=>ls.has(i),WS={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},XS=(i,e,t,n,r,s,a,o)=>class extends i{constructor(l,u){const d=s(l),h={...WS,...u},f=r(d,h),g=a(d),p=g?e():null;super(l,!1,f,p),this._audioBufferSourceNodeRenderer=p,this._isBufferNullified=!1,this._isBufferSet=h.buffer!==null,this._nativeAudioBufferSourceNode=f,this._onended=null,this._playbackRate=t(this,g,f.playbackRate,$t,ln)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(l){if(this._nativeAudioBufferSourceNode.buffer=l,l!==null){if(this._isBufferSet)throw n();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(l){this._nativeAudioBufferSourceNode.loop=l}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(l){this._nativeAudioBufferSourceNode.loopEnd=l}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(l){this._nativeAudioBufferSourceNode.loopStart=l}get onended(){return this._onended}set onended(l){const u=typeof l=="function"?o(this,l):null;this._nativeAudioBufferSourceNode.onended=u;const d=this._nativeAudioBufferSourceNode.onended;this._onended=d!==null&&d===u?l:d}get playbackRate(){return this._playbackRate}start(l=0,u=0,d){if(this._nativeAudioBufferSourceNode.start(l,u,d),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=d===void 0?[l,u]:[l,u,d]),this.context.state!=="closed"){us(this);const h=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",h),ci(this)&&no(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",h)}}stop(l=0){this._nativeAudioBufferSourceNode.stop(l),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=l)}},qS=(i,e,t,n,r)=>()=>{const s=new WeakMap;let a=null,o=null;const c=async(l,u)=>{let d=t(l);const h=Yt(d,u);if(!h){const f={buffer:d.buffer,channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,loop:d.loop,loopEnd:d.loopEnd,loopStart:d.loopStart,playbackRate:d.playbackRate.value};d=e(u,f),a!==null&&d.start(...a),o!==null&&d.stop(o)}return s.set(u,d),h?await i(u,l.playbackRate,d.playbackRate):await n(u,l.playbackRate,d.playbackRate),await r(l,u,d),d};return{set start(l){a=l},set stop(l){o=l},render(l,u){const d=s.get(u);return d!==void 0?Promise.resolve(d):c(l,u)}}},YS=i=>"playbackRate"in i,$S=i=>"frequency"in i&&"gain"in i,jS=i=>"offset"in i,ZS=i=>!("frequency"in i)&&"gain"in i,KS=i=>"detune"in i&&"frequency"in i&&!("gain"in i),JS=i=>"pan"in i,hn=i=>Gi(dp,i),io=i=>Gi(fp,i),tl=(i,e)=>{const{activeInputs:t}=hn(i);t.forEach(r=>r.forEach(([s])=>{e.includes(i)||tl(s,[...e,i])}));const n=YS(i)?[i.playbackRate]:xp(i)?Array.from(i.parameters.values()):$S(i)?[i.Q,i.detune,i.frequency,i.gain]:jS(i)?[i.offset]:ZS(i)?[i.gain]:KS(i)?[i.detune,i.frequency]:JS(i)?[i.pan]:[];for(const r of n){const s=io(r);s!==void 0&&s.activeInputs.forEach(([a])=>tl(a,e))}ci(i)&&no(i)},QS=i=>{tl(i.destination,[])},eE=(i,e,t,n,r,s,a,o)=>class extends i{constructor(l,u){const d=s(l),h=a(d),f=r(d,u,h),g=h?e(o):null;super(l,!1,f,g),this._isNodeOfNativeOfflineAudioContext=h,this._nativeAudioDestinationNode=f}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();if(l>this._nativeAudioDestinationNode.maxChannelCount)throw t();this._nativeAudioDestinationNode.channelCount=l}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();this._nativeAudioDestinationNode.channelCountMode=l}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},tE=i=>{const e=new WeakMap,t=async(n,r)=>{const s=r.destination;return e.set(r,s),await i(n,r,s),s};return{render(n,r){const s=e.get(r);return s!==void 0?Promise.resolve(s):t(n,r)}}},nE=(i,e,t,n,r,s,a,o)=>(c,l)=>{const u=l.listener,d=()=>{const v=new Float32Array(1),T=e(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),b=a(l);let w=!1,x=[0,0,-1,0,1,0],S=[0,0,0];const D=()=>{if(w)return;w=!0;const U=n(l,256,9,0);U.onaudioprocess=({inputBuffer:F})=>{const B=[s(F,v,0),s(F,v,1),s(F,v,2),s(F,v,3),s(F,v,4),s(F,v,5)];B.some((X,Y)=>X!==x[Y])&&(u.setOrientation(...B),x=B);const Z=[s(F,v,6),s(F,v,7),s(F,v,8)];Z.some((X,Y)=>X!==S[Y])&&(u.setPosition(...Z),S=Z)},T.connect(U)},L=U=>F=>{F!==x[U]&&(x[U]=F,u.setOrientation(...x))},O=U=>F=>{F!==S[U]&&(S[U]=F,u.setPosition(...S))},R=(U,F,B)=>{const Z=t(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:F});Z.connect(T,0,U),Z.start(),Object.defineProperty(Z.offset,"defaultValue",{get(){return F}});const X=i({context:c},b,Z.offset,$t,ln);return o(X,"value",Y=>()=>Y.call(X),Y=>N=>{try{Y.call(X,N)}catch(z){if(z.code!==9)throw z}D(),b&&B(N)}),X.cancelAndHoldAtTime=(Y=>b?()=>{throw r()}:(...N)=>{const z=Y.apply(X,N);return D(),z})(X.cancelAndHoldAtTime),X.cancelScheduledValues=(Y=>b?()=>{throw r()}:(...N)=>{const z=Y.apply(X,N);return D(),z})(X.cancelScheduledValues),X.exponentialRampToValueAtTime=(Y=>b?()=>{throw r()}:(...N)=>{const z=Y.apply(X,N);return D(),z})(X.exponentialRampToValueAtTime),X.linearRampToValueAtTime=(Y=>b?()=>{throw r()}:(...N)=>{const z=Y.apply(X,N);return D(),z})(X.linearRampToValueAtTime),X.setTargetAtTime=(Y=>b?()=>{throw r()}:(...N)=>{const z=Y.apply(X,N);return D(),z})(X.setTargetAtTime),X.setValueAtTime=(Y=>b?()=>{throw r()}:(...N)=>{const z=Y.apply(X,N);return D(),z})(X.setValueAtTime),X.setValueCurveAtTime=(Y=>b?()=>{throw r()}:(...N)=>{const z=Y.apply(X,N);return D(),z})(X.setValueCurveAtTime),X};return{forwardX:R(0,0,L(0)),forwardY:R(1,0,L(1)),forwardZ:R(2,-1,L(2)),positionX:R(6,0,O(0)),positionY:R(7,0,O(1)),positionZ:R(8,0,O(2)),upX:R(3,0,L(3)),upY:R(4,1,L(4)),upZ:R(5,0,L(5))}},{forwardX:h,forwardY:f,forwardZ:g,positionX:p,positionY:m,positionZ:_,upX:E,upY:y,upZ:M}=u.forwardX===void 0?d():u;return{get forwardX(){return h},get forwardY(){return f},get forwardZ(){return g},get positionX(){return p},get positionY(){return m},get positionZ(){return _},get upX(){return E},get upY(){return y},get upZ(){return M}}},da=i=>"context"in i,ro=i=>da(i[0]),Mr=(i,e,t,n)=>{for(const r of i)if(t(r)){if(n)return!1;throw Error("The set contains at least one similar element.")}return i.add(e),!0},dh=(i,e,[t,n],r)=>{Mr(i,[e,t,n],s=>s[0]===e&&s[1]===t,r)},hh=(i,[e,t,n],r)=>{const s=i.get(e);s===void 0?i.set(e,new Set([[t,n]])):Mr(s,[t,n],a=>a[0]===t,r)},ms=i=>"inputs"in i,ha=(i,e,t,n)=>{if(ms(e)){const r=e.inputs[n];return i.connect(r,t,0),[r,t,0]}return i.connect(e,t,n),[e,t,n]},Mp=(i,e,t)=>{for(const n of i)if(n[0]===e&&n[1]===t)return i.delete(n),n;return null},iE=(i,e,t)=>Sa(i,n=>n[0]===e&&n[1]===t),Sp=(i,e)=>{if(!to(i).delete(e))throw new Error("Missing the expected event listener.")},Ep=(i,e,t)=>{const n=Gi(i,e),r=Sa(n,s=>s[0]===t);return n.size===0&&i.delete(e),r},fa=(i,e,t,n)=>{ms(e)?i.disconnect(e.inputs[n],t,0):i.disconnect(e,t,n)},ot=i=>Gi(hp,i),Zs=i=>Gi(pp,i),gr=i=>Qc.has(i),Xo=i=>!ls.has(i),fh=(i,e)=>new Promise(t=>{if(e!==null)t(!0);else{const n=i.createScriptProcessor(256,1,1),r=i.createGain(),s=i.createBuffer(1,2,44100),a=s.getChannelData(0);a[0]=1,a[1]=1;const o=i.createBufferSource();o.buffer=s,o.loop=!0,o.connect(n).connect(i.destination),o.connect(r),o.disconnect(r),n.onaudioprocess=c=>{const l=c.inputBuffer.getChannelData(0);Array.prototype.some.call(l,u=>u===1)?t(!0):t(!1),o.stop(),n.onaudioprocess=null,o.disconnect(n),n.disconnect(i.destination)},o.start()}}),vc=(i,e)=>{const t=new Map;for(const n of i)for(const r of n){const s=t.get(r);t.set(r,s===void 0?1:s+1)}t.forEach((n,r)=>e(r,n))},ph=i=>"context"in i,rE=i=>{const e=new Map;i.connect=(t=>(n,r=0,s=0)=>{const a=ph(n)?t(n,r,s):t(n,r),o=e.get(n);return o===void 0?e.set(n,[{input:s,output:r}]):o.every(c=>c.input!==s||c.output!==r)&&o.push({input:s,output:r}),a})(i.connect.bind(i)),i.disconnect=(t=>(n,r,s)=>{if(t.apply(i),n===void 0)e.clear();else if(typeof n=="number")for(const[a,o]of e){const c=o.filter(l=>l.output!==n);c.length===0?e.delete(a):e.set(a,c)}else if(e.has(n))if(r===void 0)e.delete(n);else{const a=e.get(n);if(a!==void 0){const o=a.filter(c=>c.output!==r&&(c.input!==s||s===void 0));o.length===0?e.delete(n):e.set(n,o)}}for(const[a,o]of e)o.forEach(c=>{ph(a)?i.connect(a,c.output,c.input):i.connect(a,c.output)})})(i.disconnect)},sE=(i,e,t,n)=>{const{activeInputs:r,passiveInputs:s}=io(e),{outputs:a}=hn(i),o=to(i),c=l=>{const u=ot(i),d=Zs(e);if(l){const h=Ep(s,i,t);dh(r,i,h,!1),!n&&!gr(i)&&u.connect(d,t)}else{const h=iE(r,i,t);hh(s,h,!1),!n&&!gr(i)&&u.disconnect(d,t)}};return Mr(a,[e,t],l=>l[0]===e&&l[1]===t,!0)?(o.add(c),ci(i)?dh(r,i,[t,c],!0):hh(s,[i,t,c],!0),!0):!1},oE=(i,e,t,n)=>{const{activeInputs:r,passiveInputs:s}=hn(e),a=Mp(r[n],i,t);return a===null?[vp(s,i,t,n)[2],!1]:[a[2],!0]},aE=(i,e,t)=>{const{activeInputs:n,passiveInputs:r}=io(e),s=Mp(n,i,t);return s===null?[Ep(r,i,t)[1],!1]:[s[2],!0]},Il=(i,e,t,n,r)=>{const[s,a]=oE(i,t,n,r);if(s!==null&&(Sp(i,s),a&&!e&&!gr(i)&&fa(ot(i),ot(t),n,r)),ci(t)){const{activeInputs:o}=hn(t);el(t,o)}},Ul=(i,e,t,n)=>{const[r,s]=aE(i,t,n);r!==null&&(Sp(i,r),s&&!e&&!gr(i)&&ot(i).disconnect(Zs(t),n))},cE=(i,e)=>{const t=hn(i),n=[];for(const r of t.outputs)ro(r)?Il(i,e,...r):Ul(i,e,...r),n.push(r[0]);return t.outputs.clear(),n},lE=(i,e,t)=>{const n=hn(i),r=[];for(const s of n.outputs)s[1]===t&&(ro(s)?Il(i,e,...s):Ul(i,e,...s),r.push(s[0]),n.outputs.delete(s));return r},uE=(i,e,t,n,r)=>{const s=hn(i);return Array.from(s.outputs).filter(a=>a[0]===t&&(n===void 0||a[1]===n)&&(r===void 0||a[2]===r)).map(a=>(ro(a)?Il(i,e,...a):Ul(i,e,...a),s.outputs.delete(a),a[0]))},dE=(i,e,t,n,r,s,a,o,c,l,u,d,h,f,g,p)=>class extends l{constructor(_,E,y,M){super(y),this._context=_,this._nativeAudioNode=y;const v=u(_);d(v)&&t(fh,()=>fh(v,p))!==!0&&rE(y),hp.set(this,y),_p.set(this,new Set),_.state!=="closed"&&E&&us(this),i(this,M,y)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(_){this._nativeAudioNode.channelCount=_}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(_){this._nativeAudioNode.channelCountMode=_}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(_){this._nativeAudioNode.channelInterpretation=_}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(_,E=0,y=0){if(E<0||E>=this._nativeAudioNode.numberOfOutputs)throw r();const M=u(this._context),v=g(M);if(h(_)||f(_))throw s();if(da(_)){const w=ot(_);try{const S=ha(this._nativeAudioNode,w,E,y),D=Xo(this);(v||D)&&this._nativeAudioNode.disconnect(...S),this.context.state!=="closed"&&!D&&Xo(_)&&us(_)}catch(S){throw S.code===12?s():S}if(e(this,_,E,y,v)){const S=c([this],_);vc(S,n(v))}return _}const T=Zs(_);if(T.name==="playbackRate"&&T.maxValue===1024)throw a();try{this._nativeAudioNode.connect(T,E),(v||Xo(this))&&this._nativeAudioNode.disconnect(T,E)}catch(w){throw w.code===12?s():w}if(sE(this,_,E,v)){const w=c([this],_);vc(w,n(v))}}disconnect(_,E,y){let M;const v=u(this._context),T=g(v);if(_===void 0)M=cE(this,T);else if(typeof _=="number"){if(_<0||_>=this.numberOfOutputs)throw r();M=lE(this,T,_)}else{if(E!==void 0&&(E<0||E>=this.numberOfOutputs)||da(_)&&y!==void 0&&(y<0||y>=_.numberOfInputs))throw r();if(M=uE(this,T,_,E,y),M.length===0)throw s()}for(const b of M){const w=c([this],b);vc(w,o)}}},hE=(i,e,t,n,r,s,a,o,c,l,u,d,h)=>(f,g,p,m=null,_=null)=>{const E=p.value,y=new bS(E),M=g?n(y):null,v={get defaultValue(){return E},get maxValue(){return m===null?p.maxValue:m},get minValue(){return _===null?p.minValue:_},get value(){return p.value},set value(T){p.value=T,v.setValueAtTime(T,f.context.currentTime)},cancelAndHoldAtTime(T){if(typeof p.cancelAndHoldAtTime=="function")M===null&&y.flush(f.context.currentTime),y.add(r(T)),p.cancelAndHoldAtTime(T);else{const b=Array.from(y).pop();M===null&&y.flush(f.context.currentTime),y.add(r(T));const w=Array.from(y).pop();p.cancelScheduledValues(T),b!==w&&w!==void 0&&(w.type==="exponentialRampToValue"?p.exponentialRampToValueAtTime(w.value,w.endTime):w.type==="linearRampToValue"?p.linearRampToValueAtTime(w.value,w.endTime):w.type==="setValue"?p.setValueAtTime(w.value,w.startTime):w.type==="setValueCurve"&&p.setValueCurveAtTime(w.values,w.startTime,w.duration))}return v},cancelScheduledValues(T){return M===null&&y.flush(f.context.currentTime),y.add(s(T)),p.cancelScheduledValues(T),v},exponentialRampToValueAtTime(T,b){if(T===0)throw new RangeError;if(!Number.isFinite(b)||b<0)throw new RangeError;const w=f.context.currentTime;return M===null&&y.flush(w),Array.from(y).length===0&&(y.add(l(E,w)),p.setValueAtTime(E,w)),y.add(a(T,b)),p.exponentialRampToValueAtTime(T,b),v},linearRampToValueAtTime(T,b){const w=f.context.currentTime;return M===null&&y.flush(w),Array.from(y).length===0&&(y.add(l(E,w)),p.setValueAtTime(E,w)),y.add(o(T,b)),p.linearRampToValueAtTime(T,b),v},setTargetAtTime(T,b,w){return M===null&&y.flush(f.context.currentTime),y.add(c(T,b,w)),p.setTargetAtTime(T,b,w),v},setValueAtTime(T,b){return M===null&&y.flush(f.context.currentTime),y.add(l(T,b)),p.setValueAtTime(T,b),v},setValueCurveAtTime(T,b,w){const x=T instanceof Float32Array?T:new Float32Array(T);if(d!==null&&d.name==="webkitAudioContext"){const S=b+w,D=f.context.sampleRate,L=Math.ceil(b*D),O=Math.floor(S*D),R=O-L,U=new Float32Array(R);for(let B=0;B<R;B+=1){const Z=(x.length-1)/w*((L+B)/D-b),X=Math.floor(Z),Y=Math.ceil(Z);U[B]=X===Y?x[X]:(1-(Z-X))*x[X]+(1-(Y-Z))*x[Y]}M===null&&y.flush(f.context.currentTime),y.add(u(U,b,w)),p.setValueCurveAtTime(U,b,w);const F=O/D;F<S&&h(v,U[U.length-1],F),h(v,x[x.length-1],S)}else M===null&&y.flush(f.context.currentTime),y.add(u(x,b,w)),p.setValueCurveAtTime(x,b,w);return v}};return t.set(v,p),e.set(v,f),i(v,M),v},fE=i=>({replay(e){for(const t of i)if(t.type==="exponentialRampToValue"){const{endTime:n,value:r}=t;e.exponentialRampToValueAtTime(r,n)}else if(t.type==="linearRampToValue"){const{endTime:n,value:r}=t;e.linearRampToValueAtTime(r,n)}else if(t.type==="setTarget"){const{startTime:n,target:r,timeConstant:s}=t;e.setTargetAtTime(r,n,s)}else if(t.type==="setValue"){const{startTime:n,value:r}=t;e.setValueAtTime(r,n)}else if(t.type==="setValueCurve"){const{duration:n,startTime:r,values:s}=t;e.setValueCurveAtTime(s,r,n)}else throw new Error("Can't apply an unknown automation.")}}),pE=(i,e,t,n,r,s,a,o,c,l,u,d,h,f,g,p,m,_,E,y)=>class extends g{constructor(v,T){super(v,T),this._nativeContext=v,this._audioWorklet=i===void 0?void 0:{addModule:(b,w)=>i(this,b,w)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new e(this)}createBiquadFilter(){return new r(this)}createBuffer(v,T,b){return new t({length:T,numberOfChannels:v,sampleRate:b})}createBufferSource(){return new n(this)}createChannelMerger(v=6){return new s(this,{numberOfInputs:v})}createChannelSplitter(v=6){return new a(this,{numberOfOutputs:v})}createConstantSource(){return new o(this)}createConvolver(){return new c(this)}createDelay(v=1){return new u(this,{maxDelayTime:v})}createDynamicsCompressor(){return new d(this)}createGain(){return new h(this)}createIIRFilter(v,T){return new f(this,{feedback:T,feedforward:v})}createOscillator(){return new p(this)}createPanner(){return new m(this)}createPeriodicWave(v,T,b={disableNormalization:!1}){return new _(this,{...b,imag:T,real:v})}createStereoPanner(){return new E(this)}createWaveShaper(){return new y(this)}decodeAudioData(v,T,b){return l(this._nativeContext,v).then(w=>(typeof T=="function"&&T(w),w),w=>{throw typeof b=="function"&&b(w),w})}},mE={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},_E=(i,e,t,n,r,s,a,o)=>class extends i{constructor(l,u){const d=s(l),h={...mE,...u},f=r(d,h),g=a(d),p=g?t():null;super(l,!1,f,p),this._Q=e(this,g,f.Q,$t,ln),this._detune=e(this,g,f.detune,1200*Math.log2($t),-1200*Math.log2($t)),this._frequency=e(this,g,f.frequency,l.sampleRate/2,0),this._gain=e(this,g,f.gain,40*Math.log10($t),ln),this._nativeBiquadFilterNode=f,o(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(l){this._nativeBiquadFilterNode.type=l}getFrequencyResponse(l,u,d){try{this._nativeBiquadFilterNode.getFrequencyResponse(l,u,d)}catch(h){throw h.code===11?n():h}if(l.length!==u.length||u.length!==d.length)throw n()}},gE=(i,e,t,n,r)=>()=>{const s=new WeakMap,a=async(o,c)=>{let l=t(o);const u=Yt(l,c);if(!u){const d={Q:l.Q.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,detune:l.detune.value,frequency:l.frequency.value,gain:l.gain.value,type:l.type};l=e(c,d)}return s.set(c,l),u?(await i(c,o.Q,l.Q),await i(c,o.detune,l.detune),await i(c,o.frequency,l.frequency),await i(c,o.gain,l.gain)):(await n(c,o.Q,l.Q),await n(c,o.detune,l.detune),await n(c,o.frequency,l.frequency),await n(c,o.gain,l.gain)),await r(o,c,l),l};return{render(o,c){const l=s.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},vE=(i,e)=>(t,n)=>{const r=e.get(t);if(r!==void 0)return r;const s=i.get(t);if(s!==void 0)return s;try{const a=n();return a instanceof Promise?(i.set(t,a),a.catch(()=>!1).then(o=>(i.delete(t),e.set(t,o),o))):(e.set(t,a),a)}catch{return e.set(t,!1),!1}},xE={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},yE=(i,e,t,n,r)=>class extends i{constructor(a,o){const c=n(a),l={...xE,...o},u=t(c,l),d=r(c)?e():null;super(a,!1,u,d)}},ME=(i,e,t)=>()=>{const n=new WeakMap,r=async(s,a)=>{let o=e(s);if(!Yt(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,numberOfInputs:o.numberOfInputs};o=i(a,l)}return n.set(a,o),await t(s,a,o),o};return{render(s,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):r(s,a)}}},SE={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},EE=(i,e,t,n,r,s)=>class extends i{constructor(o,c){const l=n(o),u=s({...SE,...c}),d=t(l,u),h=r(l)?e():null;super(o,!1,d,h)}},bE=(i,e,t)=>()=>{const n=new WeakMap,r=async(s,a)=>{let o=e(s);if(!Yt(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,numberOfOutputs:o.numberOfOutputs};o=i(a,l)}return n.set(a,o),await t(s,a,o),o};return{render(s,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):r(s,a)}}},TE=i=>(e,t,n)=>i(t,e,n),wE=i=>(e,t)=>{const n=i(e,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),r=e.createBuffer(1,2,44100);return n.buffer=r,n.loop=!0,n.connect(t),n.start(),()=>{n.stop(),n.disconnect(t)}},AE={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},CE=(i,e,t,n,r,s,a)=>class extends i{constructor(c,l){const u=r(c),d={...AE,...l},h=n(u,d),f=s(u),g=f?t():null;super(c,!1,h,g),this._constantSourceNodeRenderer=g,this._nativeConstantSourceNode=h,this._offset=e(this,f,h.offset,$t,ln),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?a(this,c):null;this._nativeConstantSourceNode.onended=l;const u=this._nativeConstantSourceNode.onended;this._onended=u!==null&&u===l?c:u}start(c=0){if(this._nativeConstantSourceNode.start(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=c),this.context.state!=="closed"){us(this);const l=()=>{this._nativeConstantSourceNode.removeEventListener("ended",l),ci(this)&&no(this)};this._nativeConstantSourceNode.addEventListener("ended",l)}}stop(c=0){this._nativeConstantSourceNode.stop(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=c)}},RE=(i,e,t,n,r)=>()=>{const s=new WeakMap;let a=null,o=null;const c=async(l,u)=>{let d=t(l);const h=Yt(d,u);if(!h){const f={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,offset:d.offset.value};d=e(u,f),a!==null&&d.start(a),o!==null&&d.stop(o)}return s.set(u,d),h?await i(u,l.offset,d.offset):await n(u,l.offset,d.offset),await r(l,u,d),d};return{set start(l){a=l},set stop(l){o=l},render(l,u){const d=s.get(u);return d!==void 0?Promise.resolve(d):c(l,u)}}},PE=i=>e=>(i[0]=e,i[0]),LE={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},DE=(i,e,t,n,r,s)=>class extends i{constructor(o,c){const l=n(o),u={...LE,...c},d=t(l,u),f=r(l)?e():null;super(o,!1,d,f),this._isBufferNullified=!1,this._nativeConvolverNode=d,u.buffer!==null&&s(this,u.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(o){if(this._nativeConvolverNode.buffer=o,o===null&&this._nativeConvolverNode.buffer!==null){const c=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=c.createBuffer(1,1,c.sampleRate),this._isBufferNullified=!0,s(this,0)}else this._isBufferNullified=!1,s(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(o){this._nativeConvolverNode.normalize=o}},NE=(i,e,t)=>()=>{const n=new WeakMap,r=async(s,a)=>{let o=e(s);if(!Yt(o,a)){const l={buffer:o.buffer,channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,disableNormalization:!o.normalize};o=i(a,l)}return n.set(a,o),ms(o)?await t(s,a,o.inputs[0]):await t(s,a,o),o};return{render(s,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):r(s,a)}}},IE=(i,e)=>(t,n,r)=>{if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new e(t,n,r)}catch(s){throw s.name==="SyntaxError"?i():s}},UE=()=>new DOMException("","DataCloneError"),mh=i=>{const{port1:e,port2:t}=new MessageChannel;return new Promise(n=>{const r=()=>{t.onmessage=null,e.close(),t.close(),n()};t.onmessage=()=>r();try{e.postMessage(i,[i])}catch{}finally{r()}})},OE=(i,e,t,n,r,s,a,o,c,l,u)=>(d,h)=>{const f=a(d)?d:s(d);if(r.has(h)){const g=t();return Promise.reject(g)}try{r.add(h)}catch{}return e(c,()=>c(f))?f.decodeAudioData(h).then(g=>(mh(h).catch(()=>{}),e(o,()=>o(g))||u(g),i.add(g),g)):new Promise((g,p)=>{const m=async()=>{try{await mh(h)}catch{}},_=E=>{p(E),m()};try{f.decodeAudioData(h,E=>{typeof E.copyFromChannel!="function"&&(l(E),Nl(E)),i.add(E),m().then(()=>g(E))},E=>{_(E===null?n():E)})}catch(E){_(E)}})},FE=(i,e,t,n,r,s,a,o)=>(c,l)=>{const u=e.get(c);if(u===void 0)throw new Error("Missing the expected cycle count.");const d=s(c.context),h=o(d);if(u===l){if(e.delete(c),!h&&a(c)){const f=n(c),{outputs:g}=t(c);for(const p of g)if(ro(p)){const m=n(p[0]);i(f,m,p[1],p[2])}else{const m=r(p[0]);f.connect(m,p[1])}}}else e.set(c,u-l)},BE={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},kE=(i,e,t,n,r,s,a)=>class extends i{constructor(c,l){const u=r(c),d={...BE,...l},h=n(u,d),f=s(u),g=f?t(d.maxDelayTime):null;super(c,!1,h,g),this._delayTime=e(this,f,h.delayTime),a(this,d.maxDelayTime)}get delayTime(){return this._delayTime}},zE=(i,e,t,n,r)=>s=>{const a=new WeakMap,o=async(c,l)=>{let u=t(c);const d=Yt(u,l);if(!d){const h={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,delayTime:u.delayTime.value,maxDelayTime:s};u=e(l,h)}return a.set(l,u),d?await i(l,c.delayTime,u.delayTime):await n(l,c.delayTime,u.delayTime),await r(c,l,u),u};return{render(c,l){const u=a.get(l);return u!==void 0?Promise.resolve(u):o(c,l)}}},VE=i=>(e,t,n,r)=>i(e[r],s=>s[0]===t&&s[1]===n),HE=i=>"delayTime"in i,GE=(i,e,t)=>function n(r,s){const a=da(s)?s:t(i,s);if(HE(a))return[];if(r[0]===a)return[r];if(r.includes(a))return[];const{outputs:o}=e(a);return Array.from(o).map(c=>n([...r,a],c[0])).reduce((c,l)=>c.concat(l),[])},WE={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},XE=(i,e,t,n,r,s,a,o)=>class extends i{constructor(l,u){const d=s(l),h={...WE,...u},f=n(d,h),g=a(d),p=g?t():null;super(l,!1,f,p),this._attack=e(this,g,f.attack),this._knee=e(this,g,f.knee),this._nativeDynamicsCompressorNode=f,this._ratio=e(this,g,f.ratio),this._release=e(this,g,f.release),this._threshold=e(this,g,f.threshold),o(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(l){const u=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=l,l>2)throw this._nativeDynamicsCompressorNode.channelCount=u,r()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(l){const u=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=l,l==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=u,r()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},qE=(i,e,t,n,r)=>()=>{const s=new WeakMap,a=async(o,c)=>{let l=t(o);const u=Yt(l,c);if(!u){const d={attack:l.attack.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,knee:l.knee.value,ratio:l.ratio.value,release:l.release.value,threshold:l.threshold.value};l=e(c,d)}return s.set(c,l),u?(await i(c,o.attack,l.attack),await i(c,o.knee,l.knee),await i(c,o.ratio,l.ratio),await i(c,o.release,l.release),await i(c,o.threshold,l.threshold)):(await n(c,o.attack,l.attack),await n(c,o.knee,l.knee),await n(c,o.ratio,l.ratio),await n(c,o.release,l.release),await n(c,o.threshold,l.threshold)),await r(o,c,l),l};return{render(o,c){const l=s.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},YE=()=>new DOMException("","EncodingError"),$E=i=>e=>new Promise((t,n)=>{if(i===null){n(new SyntaxError);return}const r=i.document.head;if(r===null)n(new SyntaxError);else{const s=i.document.createElement("script"),a=new Blob([e],{type:"application/javascript"}),o=URL.createObjectURL(a),c=i.onerror,l=()=>{i.onerror=c,URL.revokeObjectURL(o)};i.onerror=(u,d,h,f,g)=>{if(d===o||d===i.location.href&&h===1&&f===1)return l(),n(g),!1;if(c!==null)return c(u,d,h,f,g)},s.onerror=()=>{l(),n(new SyntaxError)},s.onload=()=>{l(),t()},s.src=o,s.type="module",r.appendChild(s)}}),jE=i=>class{constructor(t){this._nativeEventTarget=t,this._listeners=new WeakMap}addEventListener(t,n,r){if(n!==null){let s=this._listeners.get(n);s===void 0&&(s=i(this,n),typeof n=="function"&&this._listeners.set(n,s)),this._nativeEventTarget.addEventListener(t,s,r)}}dispatchEvent(t){return this._nativeEventTarget.dispatchEvent(t)}removeEventListener(t,n,r){const s=n===null?void 0:this._listeners.get(n);this._nativeEventTarget.removeEventListener(t,s===void 0?null:s,r)}},ZE=i=>(e,t,n)=>{Object.defineProperties(i,{currentFrame:{configurable:!0,get(){return Math.round(e*t)}},currentTime:{configurable:!0,get(){return e}}});try{return n()}finally{i!==null&&(delete i.currentFrame,delete i.currentTime)}},KE=i=>async e=>{try{const t=await fetch(e);if(t.ok)return[await t.text(),t.url]}catch{}throw i()},JE={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},QE=(i,e,t,n,r,s)=>class extends i{constructor(o,c){const l=r(o),u={...JE,...c},d=n(l,u),h=s(l),f=h?t():null;super(o,!1,d,f),this._gain=e(this,h,d.gain,$t,ln)}get gain(){return this._gain}},eb=(i,e,t,n,r)=>()=>{const s=new WeakMap,a=async(o,c)=>{let l=t(o);const u=Yt(l,c);if(!u){const d={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,gain:l.gain.value};l=e(c,d)}return s.set(c,l),u?await i(c,o.gain,l.gain):await n(c,o.gain,l.gain),await r(o,c,l),l};return{render(o,c){const l=s.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},tb=i=>e=>{const t=i(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return t.renderer},nb=i=>e=>{var t;return(t=i.get(e))!==null&&t!==void 0?t:0},ib=i=>e=>{const t=i(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return t.renderer},en=()=>new DOMException("","InvalidStateError"),rb=i=>e=>{const t=i.get(e);if(t===void 0)throw en();return t},sb=(i,e)=>t=>{let n=i.get(t);if(n!==void 0)return n;if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");return n=new e(1,1,44100),i.set(t,n),n},ob=i=>e=>{const t=i.get(e);if(t===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return t},Ea=()=>new DOMException("","InvalidAccessError"),ab=i=>{i.getFrequencyResponse=(e=>(t,n,r)=>{if(t.length!==n.length||n.length!==r.length)throw Ea();return e.call(i,t,n,r)})(i.getFrequencyResponse)},cb={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},lb=(i,e,t,n,r,s)=>class extends i{constructor(o,c){const l=n(o),u=r(l),d={...cb,...c},h=e(l,u?null:o.baseLatency,d),f=u?t(d.feedback,d.feedforward):null;super(o,!1,h,f),ab(h),this._nativeIIRFilterNode=h,s(this,1)}getFrequencyResponse(o,c,l){return this._nativeIIRFilterNode.getFrequencyResponse(o,c,l)}},bp=(i,e,t,n,r,s,a,o,c,l,u)=>{const d=l.length;let h=o;for(let f=0;f<d;f+=1){let g=t[0]*l[f];for(let p=1;p<r;p+=1){const m=h-p&c-1;g+=t[p]*s[m],g-=i[p]*a[m]}for(let p=r;p<n;p+=1)g+=t[p]*s[h-p&c-1];for(let p=r;p<e;p+=1)g-=i[p]*a[h-p&c-1];s[h]=l[f],a[h]=g,h=h+1&c-1,u[f]=g}return h},ub=(i,e,t,n)=>{const r=t instanceof Float64Array?t:new Float64Array(t),s=n instanceof Float64Array?n:new Float64Array(n),a=r.length,o=s.length,c=Math.min(a,o);if(r[0]!==1){for(let g=0;g<a;g+=1)s[g]/=r[0];for(let g=1;g<o;g+=1)r[g]/=r[0]}const l=32,u=new Float32Array(l),d=new Float32Array(l),h=e.createBuffer(i.numberOfChannels,i.length,i.sampleRate),f=i.numberOfChannels;for(let g=0;g<f;g+=1){const p=i.getChannelData(g),m=h.getChannelData(g);u.fill(0),d.fill(0),bp(r,a,s,o,c,u,d,0,l,p,m)}return h},db=(i,e,t,n,r)=>(s,a)=>{const o=new WeakMap;let c=null;const l=async(u,d)=>{let h=null,f=e(u);const g=Yt(f,d);if(d.createIIRFilter===void 0?h=i(d,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):g||(f=d.createIIRFilter(a,s)),o.set(d,h===null?f:h),h!==null){if(c===null){if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");const m=new t(u.context.destination.channelCount,u.context.length,d.sampleRate);c=(async()=>{await n(u,m,m.destination);const _=await r(m);return ub(_,d,s,a)})()}const p=await c;return h.buffer=p,h.start(0),h}return await n(u,d,f),f};return{render(u,d){const h=o.get(d);return h!==void 0?Promise.resolve(h):l(u,d)}}},hb=(i,e,t,n,r,s)=>a=>(o,c)=>{const l=i.get(o);if(l===void 0){if(!a&&s(o)){const u=n(o),{outputs:d}=t(o);for(const h of d)if(ro(h)){const f=n(h[0]);e(u,f,h[1],h[2])}else{const f=r(h[0]);u.disconnect(f,h[1])}}i.set(o,c)}else i.set(o,l+c)},fb=i=>e=>i!==null&&e instanceof i,pb=i=>e=>i!==null&&typeof i.AudioNode=="function"&&e instanceof i.AudioNode,mb=i=>e=>i!==null&&typeof i.AudioParam=="function"&&e instanceof i.AudioParam,_b=(i,e)=>t=>i(t)||e(t),gb=i=>e=>i!==null&&e instanceof i,vb=i=>i!==null&&i.isSecureContext,xb=(i,e,t,n,r,s)=>class extends t{constructor(o,c){super(o),this._nativeContext=o,mp.set(this,o),n(o)&&r.set(o,new Set),this._destination=new i(this,c),this._listener=e(this,o),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(o){const c=typeof o=="function"?s(this,o):null;this._nativeContext.onstatechange=c;const l=this._nativeContext.onstatechange;this._onstatechange=l!==null&&l===c?o:l}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},Ks=i=>{const e=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const t=i.decodeAudioData(e.buffer,()=>{});return t===void 0?!1:(t.catch(()=>{}),!0)}catch{}return!1},yb=(i,e)=>(t,n,r)=>{const s=new Set;return t.connect=(a=>(o,c=0,l=0)=>{const u=s.size===0;if(e(o))return a.call(t,o,c,l),i(s,[o,c,l],d=>d[0]===o&&d[1]===c&&d[2]===l,!0),u&&n(),o;a.call(t,o,c),i(s,[o,c],d=>d[0]===o&&d[1]===c,!0),u&&n()})(t.connect),t.disconnect=(a=>(o,c,l)=>{const u=s.size>0;if(o===void 0)a.apply(t),s.clear();else if(typeof o=="number"){a.call(t,o);for(const h of s)h[1]===o&&s.delete(h)}else{e(o)?a.call(t,o,c,l):a.call(t,o,c);for(const h of s)h[0]===o&&(c===void 0||h[1]===c)&&(l===void 0||h[2]===l)&&s.delete(h)}const d=s.size===0;u&&d&&r()})(t.disconnect),t},nt=(i,e,t)=>{const n=e[t];n!==void 0&&n!==i[t]&&(i[t]=n)},Rt=(i,e)=>{nt(i,e,"channelCount"),nt(i,e,"channelCountMode"),nt(i,e,"channelInterpretation")},_h=i=>typeof i.getFloatTimeDomainData=="function",Mb=i=>{i.getFloatTimeDomainData=e=>{const t=new Uint8Array(e.length);i.getByteTimeDomainData(t);const n=Math.max(t.length,i.fftSize);for(let r=0;r<n;r+=1)e[r]=(t[r]-128)*.0078125;return e}},Sb=(i,e)=>(t,n)=>{const r=t.createAnalyser();if(Rt(r,n),!(n.maxDecibels>n.minDecibels))throw e();return nt(r,n,"fftSize"),nt(r,n,"maxDecibels"),nt(r,n,"minDecibels"),nt(r,n,"smoothingTimeConstant"),i(_h,()=>_h(r))||Mb(r),r},Eb=i=>i===null?null:i.hasOwnProperty("AudioBuffer")?i.AudioBuffer:null,lt=(i,e,t)=>{const n=e[t];n!==void 0&&n!==i[t].value&&(i[t].value=n)},bb=i=>{i.start=(e=>{let t=!1;return(n=0,r=0,s)=>{if(t)throw en();e.call(i,n,r,s),t=!0}})(i.start)},Ol=i=>{i.start=(e=>(t=0,n=0,r)=>{if(typeof r=="number"&&r<0||n<0||t<0)throw new RangeError("The parameters can't be negative.");e.call(i,t,n,r)})(i.start)},Fl=i=>{i.stop=(e=>(t=0)=>{if(t<0)throw new RangeError("The parameter can't be negative.");e.call(i,t)})(i.stop)},Tb=(i,e,t,n,r,s,a,o,c,l,u)=>(d,h)=>{const f=d.createBufferSource();return Rt(f,h),lt(f,h,"playbackRate"),nt(f,h,"buffer"),nt(f,h,"loop"),nt(f,h,"loopEnd"),nt(f,h,"loopStart"),e(t,()=>t(d))||bb(f),e(n,()=>n(d))||c(f),e(r,()=>r(d))||l(f,d),e(s,()=>s(d))||Ol(f),e(a,()=>a(d))||u(f,d),e(o,()=>o(d))||Fl(f),i(d,f),f},wb=i=>i===null?null:i.hasOwnProperty("AudioContext")?i.AudioContext:i.hasOwnProperty("webkitAudioContext")?i.webkitAudioContext:null,Ab=(i,e)=>(t,n,r)=>{const s=t.destination;if(s.channelCount!==n)try{s.channelCount=n}catch{}r&&s.channelCountMode!=="explicit"&&(s.channelCountMode="explicit"),s.maxChannelCount===0&&Object.defineProperty(s,"maxChannelCount",{value:n});const a=i(t,{channelCount:n,channelCountMode:s.channelCountMode,channelInterpretation:s.channelInterpretation,gain:1});return e(a,"channelCount",o=>()=>o.call(a),o=>c=>{o.call(a,c);try{s.channelCount=c}catch(l){if(c>s.maxChannelCount)throw l}}),e(a,"channelCountMode",o=>()=>o.call(a),o=>c=>{o.call(a,c),s.channelCountMode=c}),e(a,"channelInterpretation",o=>()=>o.call(a),o=>c=>{o.call(a,c),s.channelInterpretation=c}),Object.defineProperty(a,"maxChannelCount",{get:()=>s.maxChannelCount}),a.connect(s),a},Cb=i=>i===null?null:i.hasOwnProperty("AudioWorkletNode")?i.AudioWorkletNode:null,Rb=(i,e)=>i===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(i*e))))),Tp=(i,e)=>{const t=i.createBiquadFilter();return Rt(t,e),lt(t,e,"Q"),lt(t,e,"detune"),lt(t,e,"frequency"),lt(t,e,"gain"),nt(t,e,"type"),t},Pb=(i,e)=>(t,n)=>{const r=t.createChannelMerger(n.numberOfInputs);return i!==null&&i.name==="webkitAudioContext"&&e(t,r),Rt(r,n),r},Lb=i=>{const e=i.numberOfOutputs;Object.defineProperty(i,"channelCount",{get:()=>e,set:t=>{if(t!==e)throw en()}}),Object.defineProperty(i,"channelCountMode",{get:()=>"explicit",set:t=>{if(t!=="explicit")throw en()}}),Object.defineProperty(i,"channelInterpretation",{get:()=>"discrete",set:t=>{if(t!=="discrete")throw en()}})},Bl=(i,e)=>{const t=i.createChannelSplitter(e.numberOfOutputs);return Rt(t,e),Lb(t),t},Db=(i,e,t,n,r)=>(s,a)=>{if(s.createConstantSource===void 0)return t(s,a);const o=s.createConstantSource();return Rt(o,a),lt(o,a,"offset"),e(n,()=>n(s))||Ol(o),e(r,()=>r(s))||Fl(o),i(s,o),o},_s=(i,e)=>(i.connect=e.connect.bind(e),i.disconnect=e.disconnect.bind(e),i),Nb=(i,e,t,n)=>(r,{offset:s,...a})=>{const o=r.createBuffer(1,2,44100),c=e(r,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=t(r,{...a,gain:s}),u=o.getChannelData(0);u[0]=1,u[1]=1,c.buffer=o,c.loop=!0;const d={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(g){l.channelCount=g},get channelCountMode(){return l.channelCountMode},set channelCountMode(g){l.channelCountMode=g},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(g){l.channelInterpretation=g},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return c.onended},set onended(g){c.onended=g},addEventListener(...g){return c.addEventListener(g[0],g[1],g[2])},dispatchEvent(...g){return c.dispatchEvent(g[0])},removeEventListener(...g){return c.removeEventListener(g[0],g[1],g[2])},start(g=0){c.start.call(c,g)},stop(g=0){c.stop.call(c,g)}},h=()=>c.connect(l),f=()=>c.disconnect(l);return i(r,c),n(_s(d,l),h,f)},Ib=(i,e)=>(t,n)=>{const r=t.createConvolver();if(Rt(r,n),n.disableNormalization===r.normalize&&(r.normalize=!n.disableNormalization),nt(r,n,"buffer"),n.channelCount>2||(e(r,"channelCount",s=>()=>s.call(r),s=>a=>{if(a>2)throw i();return s.call(r,a)}),n.channelCountMode==="max"))throw i();return e(r,"channelCountMode",s=>()=>s.call(r),s=>a=>{if(a==="max")throw i();return s.call(r,a)}),r},wp=(i,e)=>{const t=i.createDelay(e.maxDelayTime);return Rt(t,e),lt(t,e,"delayTime"),t},Ub=i=>(e,t)=>{const n=e.createDynamicsCompressor();if(Rt(n,t),t.channelCount>2||t.channelCountMode==="max")throw i();return lt(n,t,"attack"),lt(n,t,"knee"),lt(n,t,"ratio"),lt(n,t,"release"),lt(n,t,"threshold"),n},In=(i,e)=>{const t=i.createGain();return Rt(t,e),lt(t,e,"gain"),t},Ob=i=>(e,t,n)=>{if(e.createIIRFilter===void 0)return i(e,t,n);const r=e.createIIRFilter(n.feedforward,n.feedback);return Rt(r,n),r};function Fb(i,e){const t=e[0]*e[0]+e[1]*e[1];return[(i[0]*e[0]+i[1]*e[1])/t,(i[1]*e[0]-i[0]*e[1])/t]}function Bb(i,e){return[i[0]*e[0]-i[1]*e[1],i[0]*e[1]+i[1]*e[0]]}function gh(i,e){let t=[0,0];for(let n=i.length-1;n>=0;n-=1)t=Bb(t,e),t[0]+=i[n];return t}const kb=(i,e,t,n)=>(r,s,{channelCount:a,channelCountMode:o,channelInterpretation:c,feedback:l,feedforward:u})=>{const d=Rb(s,r.sampleRate),h=l instanceof Float64Array?l:new Float64Array(l),f=u instanceof Float64Array?u:new Float64Array(u),g=h.length,p=f.length,m=Math.min(g,p);if(g===0||g>20)throw n();if(h[0]===0)throw e();if(p===0||p>20)throw n();if(f[0]===0)throw e();if(h[0]!==1){for(let w=0;w<p;w+=1)f[w]/=h[0];for(let w=1;w<g;w+=1)h[w]/=h[0]}const _=t(r,d,a,a);_.channelCount=a,_.channelCountMode=o,_.channelInterpretation=c;const E=32,y=[],M=[],v=[];for(let w=0;w<a;w+=1){y.push(0);const x=new Float32Array(E),S=new Float32Array(E);x.fill(0),S.fill(0),M.push(x),v.push(S)}_.onaudioprocess=w=>{const x=w.inputBuffer,S=w.outputBuffer,D=x.numberOfChannels;for(let L=0;L<D;L+=1){const O=x.getChannelData(L),R=S.getChannelData(L);y[L]=bp(h,g,f,p,m,M[L],v[L],y[L],E,O,R)}};const T=r.sampleRate/2;return _s({get bufferSize(){return d},get channelCount(){return _.channelCount},set channelCount(w){_.channelCount=w},get channelCountMode(){return _.channelCountMode},set channelCountMode(w){_.channelCountMode=w},get channelInterpretation(){return _.channelInterpretation},set channelInterpretation(w){_.channelInterpretation=w},get context(){return _.context},get inputs(){return[_]},get numberOfInputs(){return _.numberOfInputs},get numberOfOutputs(){return _.numberOfOutputs},addEventListener(...w){return _.addEventListener(w[0],w[1],w[2])},dispatchEvent(...w){return _.dispatchEvent(w[0])},getFrequencyResponse(w,x,S){if(w.length!==x.length||x.length!==S.length)throw i();const D=w.length;for(let L=0;L<D;L+=1){const O=-Math.PI*(w[L]/T),R=[Math.cos(O),Math.sin(O)],U=gh(f,R),F=gh(h,R),B=Fb(U,F);x[L]=Math.sqrt(B[0]*B[0]+B[1]*B[1]),S[L]=Math.atan2(B[1],B[0])}},removeEventListener(...w){return _.removeEventListener(w[0],w[1],w[2])}},_)},zb=i=>i===null?null:i.hasOwnProperty("OfflineAudioContext")?i.OfflineAudioContext:i.hasOwnProperty("webkitOfflineAudioContext")?i.webkitOfflineAudioContext:null,Vb=(i,e,t,n,r,s)=>(a,o)=>{const c=a.createOscillator();return Rt(c,o),lt(c,o,"detune"),lt(c,o,"frequency"),o.periodicWave!==void 0?c.setPeriodicWave(o.periodicWave):nt(c,o,"type"),e(t,()=>t(a))||Ol(c),e(n,()=>n(a))||s(c,a),e(r,()=>r(a))||Fl(c),i(a,c),c},Hb=i=>(e,t)=>{const n=e.createPanner();return n.orientationX===void 0?i(e,t):(Rt(n,t),lt(n,t,"orientationX"),lt(n,t,"orientationY"),lt(n,t,"orientationZ"),lt(n,t,"positionX"),lt(n,t,"positionY"),lt(n,t,"positionZ"),nt(n,t,"coneInnerAngle"),nt(n,t,"coneOuterAngle"),nt(n,t,"coneOuterGain"),nt(n,t,"distanceModel"),nt(n,t,"maxDistance"),nt(n,t,"panningModel"),nt(n,t,"refDistance"),nt(n,t,"rolloffFactor"),n)},Gb=(i,e,t,n,r,s,a,o,c,l)=>(u,{coneInnerAngle:d,coneOuterAngle:h,coneOuterGain:f,distanceModel:g,maxDistance:p,orientationX:m,orientationY:_,orientationZ:E,panningModel:y,positionX:M,positionY:v,positionZ:T,refDistance:b,rolloffFactor:w,...x})=>{const S=u.createPanner();if(x.channelCount>2||x.channelCountMode==="max")throw a();Rt(S,x);const D={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},L=t(u,{...D,channelInterpretation:"speakers",numberOfInputs:6}),O=n(u,{...x,gain:1}),R=n(u,{...D,gain:1}),U=n(u,{...D,gain:0}),F=n(u,{...D,gain:0}),B=n(u,{...D,gain:0}),Z=n(u,{...D,gain:0}),X=n(u,{...D,gain:0}),Y=r(u,256,6,1),N=s(u,{...D,curve:new Float32Array([1,1]),oversample:"none"});let z=[m,_,E],le=[M,v,T];const oe=new Float32Array(1);Y.onaudioprocess=({inputBuffer:ee})=>{const we=[c(ee,oe,0),c(ee,oe,1),c(ee,oe,2)];we.some((Re,V)=>Re!==z[V])&&(S.setOrientation(...we),z=we);const Je=[c(ee,oe,3),c(ee,oe,4),c(ee,oe,5)];Je.some((Re,V)=>Re!==le[V])&&(S.setPosition(...Je),le=Je)},Object.defineProperty(U.gain,"defaultValue",{get:()=>0}),Object.defineProperty(F.gain,"defaultValue",{get:()=>0}),Object.defineProperty(B.gain,"defaultValue",{get:()=>0}),Object.defineProperty(Z.gain,"defaultValue",{get:()=>0}),Object.defineProperty(X.gain,"defaultValue",{get:()=>0});const Q={get bufferSize(){},get channelCount(){return S.channelCount},set channelCount(ee){if(ee>2)throw a();O.channelCount=ee,S.channelCount=ee},get channelCountMode(){return S.channelCountMode},set channelCountMode(ee){if(ee==="max")throw a();O.channelCountMode=ee,S.channelCountMode=ee},get channelInterpretation(){return S.channelInterpretation},set channelInterpretation(ee){O.channelInterpretation=ee,S.channelInterpretation=ee},get coneInnerAngle(){return S.coneInnerAngle},set coneInnerAngle(ee){S.coneInnerAngle=ee},get coneOuterAngle(){return S.coneOuterAngle},set coneOuterAngle(ee){S.coneOuterAngle=ee},get coneOuterGain(){return S.coneOuterGain},set coneOuterGain(ee){if(ee<0||ee>1)throw e();S.coneOuterGain=ee},get context(){return S.context},get distanceModel(){return S.distanceModel},set distanceModel(ee){S.distanceModel=ee},get inputs(){return[O]},get maxDistance(){return S.maxDistance},set maxDistance(ee){if(ee<0)throw new RangeError;S.maxDistance=ee},get numberOfInputs(){return S.numberOfInputs},get numberOfOutputs(){return S.numberOfOutputs},get orientationX(){return R.gain},get orientationY(){return U.gain},get orientationZ(){return F.gain},get panningModel(){return S.panningModel},set panningModel(ee){S.panningModel=ee},get positionX(){return B.gain},get positionY(){return Z.gain},get positionZ(){return X.gain},get refDistance(){return S.refDistance},set refDistance(ee){if(ee<0)throw new RangeError;S.refDistance=ee},get rolloffFactor(){return S.rolloffFactor},set rolloffFactor(ee){if(ee<0)throw new RangeError;S.rolloffFactor=ee},addEventListener(...ee){return O.addEventListener(ee[0],ee[1],ee[2])},dispatchEvent(...ee){return O.dispatchEvent(ee[0])},removeEventListener(...ee){return O.removeEventListener(ee[0],ee[1],ee[2])}};d!==Q.coneInnerAngle&&(Q.coneInnerAngle=d),h!==Q.coneOuterAngle&&(Q.coneOuterAngle=h),f!==Q.coneOuterGain&&(Q.coneOuterGain=f),g!==Q.distanceModel&&(Q.distanceModel=g),p!==Q.maxDistance&&(Q.maxDistance=p),m!==Q.orientationX.value&&(Q.orientationX.value=m),_!==Q.orientationY.value&&(Q.orientationY.value=_),E!==Q.orientationZ.value&&(Q.orientationZ.value=E),y!==Q.panningModel&&(Q.panningModel=y),M!==Q.positionX.value&&(Q.positionX.value=M),v!==Q.positionY.value&&(Q.positionY.value=v),T!==Q.positionZ.value&&(Q.positionZ.value=T),b!==Q.refDistance&&(Q.refDistance=b),w!==Q.rolloffFactor&&(Q.rolloffFactor=w),(z[0]!==1||z[1]!==0||z[2]!==0)&&S.setOrientation(...z),(le[0]!==0||le[1]!==0||le[2]!==0)&&S.setPosition(...le);const Se=()=>{O.connect(S),i(O,N,0,0),N.connect(R).connect(L,0,0),N.connect(U).connect(L,0,1),N.connect(F).connect(L,0,2),N.connect(B).connect(L,0,3),N.connect(Z).connect(L,0,4),N.connect(X).connect(L,0,5),L.connect(Y).connect(u.destination)},Be=()=>{O.disconnect(S),o(O,N,0,0),N.disconnect(R),R.disconnect(L),N.disconnect(U),U.disconnect(L),N.disconnect(F),F.disconnect(L),N.disconnect(B),B.disconnect(L),N.disconnect(Z),Z.disconnect(L),N.disconnect(X),X.disconnect(L),L.disconnect(Y),Y.disconnect(u.destination)};return l(_s(Q,S),Se,Be)},Wb=i=>(e,{disableNormalization:t,imag:n,real:r})=>{const s=n instanceof Float32Array?n:new Float32Array(n),a=r instanceof Float32Array?r:new Float32Array(r),o=e.createPeriodicWave(a,s,{disableNormalization:t});if(Array.from(n).length<2)throw i();return o},ba=(i,e,t,n)=>i.createScriptProcessor(e,t,n),Xb=(i,e)=>(t,n)=>{const r=n.channelCountMode;if(r==="clamped-max")throw e();if(t.createStereoPanner===void 0)return i(t,n);const s=t.createStereoPanner();return Rt(s,n),lt(s,n,"pan"),Object.defineProperty(s,"channelCountMode",{get:()=>r,set:a=>{if(a!==r)throw e()}}),s},qb=(i,e,t,n,r,s)=>{const o=new Float32Array([1,1]),c=Math.PI/2,l={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},u={...l,oversample:"none"},d=(g,p,m,_)=>{const E=new Float32Array(16385),y=new Float32Array(16385);for(let x=0;x<16385;x+=1){const S=x/16384*c;E[x]=Math.cos(S),y[x]=Math.sin(S)}const M=t(g,{...l,gain:0}),v=n(g,{...u,curve:E}),T=n(g,{...u,curve:o}),b=t(g,{...l,gain:0}),w=n(g,{...u,curve:y});return{connectGraph(){p.connect(M),p.connect(T.inputs===void 0?T:T.inputs[0]),p.connect(b),T.connect(m),m.connect(v.inputs===void 0?v:v.inputs[0]),m.connect(w.inputs===void 0?w:w.inputs[0]),v.connect(M.gain),w.connect(b.gain),M.connect(_,0,0),b.connect(_,0,1)},disconnectGraph(){p.disconnect(M),p.disconnect(T.inputs===void 0?T:T.inputs[0]),p.disconnect(b),T.disconnect(m),m.disconnect(v.inputs===void 0?v:v.inputs[0]),m.disconnect(w.inputs===void 0?w:w.inputs[0]),v.disconnect(M.gain),w.disconnect(b.gain),M.disconnect(_,0,0),b.disconnect(_,0,1)}}},h=(g,p,m,_)=>{const E=new Float32Array(16385),y=new Float32Array(16385),M=new Float32Array(16385),v=new Float32Array(16385),T=Math.floor(16385/2);for(let B=0;B<16385;B+=1)if(B>T){const Z=(B-T)/(16384-T)*c;E[B]=Math.cos(Z),y[B]=Math.sin(Z),M[B]=0,v[B]=1}else{const Z=B/(16384-T)*c;E[B]=1,y[B]=0,M[B]=Math.cos(Z),v[B]=Math.sin(Z)}const b=e(g,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),w=t(g,{...l,gain:0}),x=n(g,{...u,curve:E}),S=t(g,{...l,gain:0}),D=n(g,{...u,curve:y}),L=n(g,{...u,curve:o}),O=t(g,{...l,gain:0}),R=n(g,{...u,curve:M}),U=t(g,{...l,gain:0}),F=n(g,{...u,curve:v});return{connectGraph(){p.connect(b),p.connect(L.inputs===void 0?L:L.inputs[0]),b.connect(w,0),b.connect(S,0),b.connect(O,1),b.connect(U,1),L.connect(m),m.connect(x.inputs===void 0?x:x.inputs[0]),m.connect(D.inputs===void 0?D:D.inputs[0]),m.connect(R.inputs===void 0?R:R.inputs[0]),m.connect(F.inputs===void 0?F:F.inputs[0]),x.connect(w.gain),D.connect(S.gain),R.connect(O.gain),F.connect(U.gain),w.connect(_,0,0),O.connect(_,0,0),S.connect(_,0,1),U.connect(_,0,1)},disconnectGraph(){p.disconnect(b),p.disconnect(L.inputs===void 0?L:L.inputs[0]),b.disconnect(w,0),b.disconnect(S,0),b.disconnect(O,1),b.disconnect(U,1),L.disconnect(m),m.disconnect(x.inputs===void 0?x:x.inputs[0]),m.disconnect(D.inputs===void 0?D:D.inputs[0]),m.disconnect(R.inputs===void 0?R:R.inputs[0]),m.disconnect(F.inputs===void 0?F:F.inputs[0]),x.disconnect(w.gain),D.disconnect(S.gain),R.disconnect(O.gain),F.disconnect(U.gain),w.disconnect(_,0,0),O.disconnect(_,0,0),S.disconnect(_,0,1),U.disconnect(_,0,1)}}},f=(g,p,m,_,E)=>{if(p===1)return d(g,m,_,E);if(p===2)return h(g,m,_,E);throw r()};return(g,{channelCount:p,channelCountMode:m,pan:_,...E})=>{if(m==="max")throw r();const y=i(g,{...E,channelCount:1,channelCountMode:m,numberOfInputs:2}),M=t(g,{...E,channelCount:p,channelCountMode:m,gain:1}),v=t(g,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:_});let{connectGraph:T,disconnectGraph:b}=f(g,p,M,v,y);Object.defineProperty(v.gain,"defaultValue",{get:()=>0}),Object.defineProperty(v.gain,"maxValue",{get:()=>1}),Object.defineProperty(v.gain,"minValue",{get:()=>-1});const w={get bufferSize(){},get channelCount(){return M.channelCount},set channelCount(L){M.channelCount!==L&&(x&&b(),{connectGraph:T,disconnectGraph:b}=f(g,L,M,v,y),x&&T()),M.channelCount=L},get channelCountMode(){return M.channelCountMode},set channelCountMode(L){if(L==="clamped-max"||L==="max")throw r();M.channelCountMode=L},get channelInterpretation(){return M.channelInterpretation},set channelInterpretation(L){M.channelInterpretation=L},get context(){return M.context},get inputs(){return[M]},get numberOfInputs(){return M.numberOfInputs},get numberOfOutputs(){return M.numberOfOutputs},get pan(){return v.gain},addEventListener(...L){return M.addEventListener(L[0],L[1],L[2])},dispatchEvent(...L){return M.dispatchEvent(L[0])},removeEventListener(...L){return M.removeEventListener(L[0],L[1],L[2])}};let x=!1;const S=()=>{T(),x=!0},D=()=>{b(),x=!1};return s(_s(w,y),S,D)}},Yb=(i,e,t,n,r,s,a)=>(o,c)=>{const l=o.createWaveShaper();if(s!==null&&s.name==="webkitAudioContext"&&o.createGain().gain.automationRate===void 0)return t(o,c);Rt(l,c);const u=c.curve===null||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(u!==null&&u.length<2)throw e();nt(l,{curve:u},"curve"),nt(l,c,"oversample");let d=null,h=!1;return a(l,"curve",p=>()=>p.call(l),p=>m=>(p.call(l,m),h&&(n(m)&&d===null?d=i(o,l):!n(m)&&d!==null&&(d(),d=null)),m)),r(l,()=>{h=!0,n(l.curve)&&(d=i(o,l))},()=>{h=!1,d!==null&&(d(),d=null)})},$b=(i,e,t,n,r)=>(s,{curve:a,oversample:o,...c})=>{const l=s.createWaveShaper(),u=s.createWaveShaper();Rt(l,c),Rt(u,c);const d=t(s,{...c,gain:1}),h=t(s,{...c,gain:-1}),f=t(s,{...c,gain:1}),g=t(s,{...c,gain:-1});let p=null,m=!1,_=null;const E={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(v){d.channelCount=v,h.channelCount=v,l.channelCount=v,f.channelCount=v,u.channelCount=v,g.channelCount=v},get channelCountMode(){return l.channelCountMode},set channelCountMode(v){d.channelCountMode=v,h.channelCountMode=v,l.channelCountMode=v,f.channelCountMode=v,u.channelCountMode=v,g.channelCountMode=v},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(v){d.channelInterpretation=v,h.channelInterpretation=v,l.channelInterpretation=v,f.channelInterpretation=v,u.channelInterpretation=v,g.channelInterpretation=v},get context(){return l.context},get curve(){return _},set curve(v){if(v!==null&&v.length<2)throw e();if(v===null)l.curve=v,u.curve=v;else{const T=v.length,b=new Float32Array(T+2-T%2),w=new Float32Array(T+2-T%2);b[0]=v[0],w[0]=-v[T-1];const x=Math.ceil((T+1)/2),S=(T+1)/2-1;for(let D=1;D<x;D+=1){const L=D/x*S,O=Math.floor(L),R=Math.ceil(L);b[D]=O===R?v[O]:(1-(L-O))*v[O]+(1-(R-L))*v[R],w[D]=O===R?-v[T-1-O]:-((1-(L-O))*v[T-1-O])-(1-(R-L))*v[T-1-R]}b[x]=T%2===1?v[x-1]:(v[x-2]+v[x-1])/2,l.curve=b,u.curve=w}_=v,m&&(n(_)&&p===null?p=i(s,d):p!==null&&(p(),p=null))},get inputs(){return[d]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(v){l.oversample=v,u.oversample=v},addEventListener(...v){return d.addEventListener(v[0],v[1],v[2])},dispatchEvent(...v){return d.dispatchEvent(v[0])},removeEventListener(...v){return d.removeEventListener(v[0],v[1],v[2])}};a!==null&&(E.curve=a instanceof Float32Array?a:new Float32Array(a)),o!==E.oversample&&(E.oversample=o);const y=()=>{d.connect(l).connect(f),d.connect(h).connect(u).connect(g).connect(f),m=!0,n(_)&&(p=i(s,d))},M=()=>{d.disconnect(l),l.disconnect(f),d.disconnect(h),h.disconnect(u),u.disconnect(g),g.disconnect(f),m=!1,p!==null&&(p(),p=null)};return r(_s(E,f),y,M)},An=()=>new DOMException("","NotSupportedError"),jb={numberOfChannels:1},Zb=(i,e,t,n,r)=>class extends i{constructor(a,o,c){let l;if(typeof a=="number"&&o!==void 0&&c!==void 0)l={length:o,numberOfChannels:a,sampleRate:c};else if(typeof a=="object")l=a;else throw new Error("The given parameters are not valid.");const{length:u,numberOfChannels:d,sampleRate:h}={...jb,...l},f=n(d,u,h);e(Ks,()=>Ks(f))||f.addEventListener("statechange",(()=>{let g=0;const p=m=>{this._state==="running"&&(g>0?(f.removeEventListener("statechange",p),m.stopImmediatePropagation(),this._waitForThePromiseToSettle(m)):g+=1)};return p})()),super(f,d),this._length=u,this._nativeOfflineAudioContext=f,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(t()):(this._state="running",r(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,QS(this)}))}_waitForThePromiseToSettle(a){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(a):setTimeout(()=>this._waitForThePromiseToSettle(a))}},Kb={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},Jb=(i,e,t,n,r,s,a)=>class extends i{constructor(c,l){const u=r(c),d={...Kb,...l},h=t(u,d),f=s(u),g=f?n():null,p=c.sampleRate/2;super(c,!1,h,g),this._detune=e(this,f,h.detune,153600,-153600),this._frequency=e(this,f,h.frequency,p,-p),this._nativeOscillatorNode=h,this._onended=null,this._oscillatorNodeRenderer=g,this._oscillatorNodeRenderer!==null&&d.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=d.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?a(this,c):null;this._nativeOscillatorNode.onended=l;const u=this._nativeOscillatorNode.onended;this._onended=u!==null&&u===l?c:u}get type(){return this._nativeOscillatorNode.type}set type(c){this._nativeOscillatorNode.type=c,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(c){this._nativeOscillatorNode.setPeriodicWave(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=c)}start(c=0){if(this._nativeOscillatorNode.start(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=c),this.context.state!=="closed"){us(this);const l=()=>{this._nativeOscillatorNode.removeEventListener("ended",l),ci(this)&&no(this)};this._nativeOscillatorNode.addEventListener("ended",l)}}stop(c=0){this._nativeOscillatorNode.stop(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=c)}},Qb=(i,e,t,n,r)=>()=>{const s=new WeakMap;let a=null,o=null,c=null;const l=async(u,d)=>{let h=t(u);const f=Yt(h,d);if(!f){const g={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,detune:h.detune.value,frequency:h.frequency.value,periodicWave:a===null?void 0:a,type:h.type};h=e(d,g),o!==null&&h.start(o),c!==null&&h.stop(c)}return s.set(d,h),f?(await i(d,u.detune,h.detune),await i(d,u.frequency,h.frequency)):(await n(d,u.detune,h.detune),await n(d,u.frequency,h.frequency)),await r(u,d,h),h};return{set periodicWave(u){a=u},set start(u){o=u},set stop(u){c=u},render(u,d){const h=s.get(d);return h!==void 0?Promise.resolve(h):l(u,d)}}},eT={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},tT=(i,e,t,n,r,s,a)=>class extends i{constructor(c,l){const u=r(c),d={...eT,...l},h=t(u,d),f=s(u),g=f?n():null;super(c,!1,h,g),this._nativePannerNode=h,this._orientationX=e(this,f,h.orientationX,$t,ln),this._orientationY=e(this,f,h.orientationY,$t,ln),this._orientationZ=e(this,f,h.orientationZ,$t,ln),this._positionX=e(this,f,h.positionX,$t,ln),this._positionY=e(this,f,h.positionY,$t,ln),this._positionZ=e(this,f,h.positionZ,$t,ln),a(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(c){this._nativePannerNode.coneInnerAngle=c}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(c){this._nativePannerNode.coneOuterAngle=c}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(c){this._nativePannerNode.coneOuterGain=c}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(c){this._nativePannerNode.distanceModel=c}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(c){this._nativePannerNode.maxDistance=c}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(c){this._nativePannerNode.panningModel=c}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(c){this._nativePannerNode.refDistance=c}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(c){this._nativePannerNode.rolloffFactor=c}},nT=(i,e,t,n,r,s,a,o,c,l)=>()=>{const u=new WeakMap;let d=null;const h=async(f,g)=>{let p=null,m=s(f);const _={channelCount:m.channelCount,channelCountMode:m.channelCountMode,channelInterpretation:m.channelInterpretation},E={..._,coneInnerAngle:m.coneInnerAngle,coneOuterAngle:m.coneOuterAngle,coneOuterGain:m.coneOuterGain,distanceModel:m.distanceModel,maxDistance:m.maxDistance,panningModel:m.panningModel,refDistance:m.refDistance,rolloffFactor:m.rolloffFactor},y=Yt(m,g);if("bufferSize"in m)p=n(g,{..._,gain:1});else if(!y){const M={...E,orientationX:m.orientationX.value,orientationY:m.orientationY.value,orientationZ:m.orientationZ.value,positionX:m.positionX.value,positionY:m.positionY.value,positionZ:m.positionZ.value};m=r(g,M)}if(u.set(g,p===null?m:p),p!==null){if(d===null){if(a===null)throw new Error("Missing the native OfflineAudioContext constructor.");const D=new a(6,f.context.length,g.sampleRate),L=e(D,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});L.connect(D.destination),d=(async()=>{const O=await Promise.all([f.orientationX,f.orientationY,f.orientationZ,f.positionX,f.positionY,f.positionZ].map(async(R,U)=>{const F=t(D,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:U===0?1:0});return await o(D,R,F.offset),F}));for(let R=0;R<6;R+=1)O[R].connect(L,0,R),O[R].start(0);return l(D)})()}const M=await d,v=n(g,{..._,gain:1});await c(f,g,v);const T=[];for(let D=0;D<M.numberOfChannels;D+=1)T.push(M.getChannelData(D));let b=[T[0][0],T[1][0],T[2][0]],w=[T[3][0],T[4][0],T[5][0]],x=n(g,{..._,gain:1}),S=r(g,{...E,orientationX:b[0],orientationY:b[1],orientationZ:b[2],positionX:w[0],positionY:w[1],positionZ:w[2]});v.connect(x).connect(S.inputs[0]),S.connect(p);for(let D=128;D<M.length;D+=128){const L=[T[0][D],T[1][D],T[2][D]],O=[T[3][D],T[4][D],T[5][D]];if(L.some((R,U)=>R!==b[U])||O.some((R,U)=>R!==w[U])){b=L,w=O;const R=D/g.sampleRate;x.gain.setValueAtTime(0,R),x=n(g,{..._,gain:0}),S=r(g,{...E,orientationX:b[0],orientationY:b[1],orientationZ:b[2],positionX:w[0],positionY:w[1],positionZ:w[2]}),x.gain.setValueAtTime(1,R),v.connect(x).connect(S.inputs[0]),S.connect(p)}}return p}return y?(await i(g,f.orientationX,m.orientationX),await i(g,f.orientationY,m.orientationY),await i(g,f.orientationZ,m.orientationZ),await i(g,f.positionX,m.positionX),await i(g,f.positionY,m.positionY),await i(g,f.positionZ,m.positionZ)):(await o(g,f.orientationX,m.orientationX),await o(g,f.orientationY,m.orientationY),await o(g,f.orientationZ,m.orientationZ),await o(g,f.positionX,m.positionX),await o(g,f.positionY,m.positionY),await o(g,f.positionZ,m.positionZ)),ms(m)?await c(f,g,m.inputs[0]):await c(f,g,m),m};return{render(f,g){const p=u.get(g);return p!==void 0?Promise.resolve(p):h(f,g)}}},iT={disableNormalization:!1},rT=(i,e,t,n)=>class Ap{constructor(s,a){const o=e(s),c=n({...iT,...a}),l=i(o,c);return t.add(l),l}static[Symbol.hasInstance](s){return s!==null&&typeof s=="object"&&Object.getPrototypeOf(s)===Ap.prototype||t.has(s)}},sT=(i,e)=>(t,n,r)=>(i(n).replay(r),e(n,t,r)),oT=(i,e,t)=>async(n,r,s)=>{const a=i(n);await Promise.all(a.activeInputs.map((o,c)=>Array.from(o).map(async([l,u])=>{const h=await e(l).render(l,r),f=n.context.destination;!t(l)&&(n!==f||!t(n))&&h.connect(s,u,c)})).reduce((o,c)=>[...o,...c],[]))},aT=(i,e,t)=>async(n,r,s)=>{const a=e(n);await Promise.all(Array.from(a.activeInputs).map(async([o,c])=>{const u=await i(o).render(o,r);t(o)||u.connect(s,c)}))},cT=(i,e,t,n)=>r=>i(Ks,()=>Ks(r))?Promise.resolve(i(n,n)).then(s=>{if(!s){const a=t(r,512,0,1);r.oncomplete=()=>{a.onaudioprocess=null,a.disconnect()},a.onaudioprocess=()=>r.currentTime,a.connect(r.destination)}return r.startRendering()}):new Promise(s=>{const a=e(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});r.oncomplete=o=>{a.disconnect(),s(o.renderedBuffer)},a.connect(r.destination),r.startRendering()}),lT=i=>(e,t)=>i.set(e,t),uT=(i,e,t,n,r,s,a,o)=>(c,l)=>t(c).render(c,l).then(()=>Promise.all(Array.from(n(l)).map(u=>t(u).render(u,l)))).then(()=>r(l)).then(u=>(typeof u.copyFromChannel!="function"?(a(u),Nl(u)):e(s,()=>s(u))||o(u),i.add(u),u)),dT={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},hT=(i,e,t,n,r,s)=>class extends i{constructor(o,c){const l=r(o),u={...dT,...c},d=t(l,u),h=s(l),f=h?n():null;super(o,!1,d,f),this._pan=e(this,h,d.pan)}get pan(){return this._pan}},fT=(i,e,t,n,r)=>()=>{const s=new WeakMap,a=async(o,c)=>{let l=t(o);const u=Yt(l,c);if(!u){const d={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,pan:l.pan.value};l=e(c,d)}return s.set(c,l),u?await i(c,o.pan,l.pan):await n(c,o.pan,l.pan),ms(l)?await r(o,c,l.inputs[0]):await r(o,c,l),l};return{render(o,c){const l=s.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},pT=i=>()=>{if(i===null)return!1;try{new i({length:1,sampleRate:44100})}catch{return!1}return!0},mT=(i,e)=>async()=>{if(i===null)return!0;if(e===null)return!1;const t=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new e(1,128,44100),r=URL.createObjectURL(t);let s=!1,a=!1;try{await n.audioWorklet.addModule(r);const o=new i(n,"a",{numberOfOutputs:0}),c=n.createOscillator();o.port.onmessage=()=>s=!0,o.onprocessorerror=()=>a=!0,c.connect(o),c.start(0),await n.startRendering(),await new Promise(l=>setTimeout(l))}catch{}finally{URL.revokeObjectURL(r)}return s&&!a},_T=(i,e)=>()=>{if(e===null)return Promise.resolve(!1);const t=new e(1,1,44100),n=i(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(r=>{t.oncomplete=()=>{n.disconnect(),r(t.currentTime!==0)},t.startRendering()})},gT={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},vT=(i,e,t,n,r,s,a)=>class extends i{constructor(c,l){const u=r(c),d={...gT,...l},h=t(u,d),g=s(u)?n():null;super(c,!0,h,g),this._isCurveNullified=!1,this._nativeWaveShaperNode=h,a(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(c){if(c===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(c.length<2)throw e();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=c}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(c){this._nativeWaveShaperNode.oversample=c}},xT=(i,e,t)=>()=>{const n=new WeakMap,r=async(s,a)=>{let o=e(s);if(!Yt(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,curve:o.curve,oversample:o.oversample};o=i(a,l)}return n.set(a,o),ms(o)?await t(s,a,o.inputs[0]):await t(s,a,o),o};return{render(s,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):r(s,a)}}},yT=()=>typeof window>"u"?null:window,MT=(i,e)=>t=>{t.copyFromChannel=(n,r,s=0)=>{const a=i(s),o=i(r);if(o>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(o),u=n.length;for(let d=a<0?-a:0;d+a<c&&d<u;d+=1)n[d]=l[d+a]},t.copyToChannel=(n,r,s=0)=>{const a=i(s),o=i(r);if(o>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(o),u=n.length;for(let d=a<0?-a:0;d+a<c&&d<u;d+=1)l[d+a]=n[d]}},ST=i=>e=>{e.copyFromChannel=(t=>(n,r,s=0)=>{const a=i(s),o=i(r);if(a<e.length)return t.call(e,n,o,a)})(e.copyFromChannel),e.copyToChannel=(t=>(n,r,s=0)=>{const a=i(s),o=i(r);if(a<e.length)return t.call(e,n,o,a)})(e.copyToChannel)},ET=i=>(e,t)=>{const n=t.createBuffer(1,1,44100);e.buffer===null&&(e.buffer=n),i(e,"buffer",r=>()=>{const s=r.call(e);return s===n?null:s},r=>s=>r.call(e,s===null?n:s))},bT=(i,e)=>(t,n)=>{n.channelCount=1,n.channelCountMode="explicit",Object.defineProperty(n,"channelCount",{get:()=>1,set:()=>{throw i()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:()=>{throw i()}});const r=t.createBufferSource();e(n,()=>{const o=n.numberOfInputs;for(let c=0;c<o;c+=1)r.connect(n,0,c)},()=>r.disconnect(n))},Cp=(i,e,t)=>i.copyFromChannel===void 0?i.getChannelData(t)[0]:(i.copyFromChannel(e,t),e[0]),Rp=i=>{if(i===null)return!1;const e=i.length;return e%2!==0?i[Math.floor(e/2)]!==0:i[e/2-1]+i[e/2]!==0},so=(i,e,t,n)=>{let r=i;for(;!r.hasOwnProperty(e);)r=Object.getPrototypeOf(r);const{get:s,set:a}=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(i,e,{get:t(s),set:n(a)})},TT=i=>({...i,channelCount:i.numberOfOutputs}),wT=i=>{const{imag:e,real:t}=i;return e===void 0?t===void 0?{...i,imag:[0,0],real:[0,0]}:{...i,imag:Array.from(t,()=>0),real:t}:t===void 0?{...i,imag:e,real:Array.from(e,()=>0)}:{...i,imag:e,real:t}},Pp=(i,e,t)=>{try{i.setValueAtTime(e,t)}catch(n){if(n.code!==9)throw n;Pp(i,e,t+1e-7)}},AT=i=>{const e=i.createBufferSource();e.start();try{e.start()}catch{return!0}return!1},CT=i=>{const e=i.createBufferSource(),t=i.createBuffer(1,1,44100);e.buffer=t;try{e.start(0,1)}catch{return!1}return!0},RT=i=>{const e=i.createBufferSource();e.start();try{e.stop()}catch{return!1}return!0},kl=i=>{const e=i.createOscillator();try{e.start(-1)}catch(t){return t instanceof RangeError}return!1},Lp=i=>{const e=i.createBuffer(1,1,44100),t=i.createBufferSource();t.buffer=e,t.start(),t.stop();try{return t.stop(),!0}catch{return!1}},zl=i=>{const e=i.createOscillator();try{e.stop(-1)}catch(t){return t instanceof RangeError}return!1},PT=i=>{i.start=(e=>(t=0,n=0,r)=>{const s=i.buffer,a=s===null?n:Math.min(s.duration,n);s!==null&&a>s.duration-.5/i.context.sampleRate?e.call(i,t,0,0):e.call(i,t,a,r)})(i.start)},Dp=(i,e)=>{const t=e.createGain();i.connect(t);const n=(r=>()=>{r.call(i,t),i.removeEventListener("ended",n)})(i.disconnect);i.addEventListener("ended",n),_s(i,t),i.stop=(r=>{let s=!1;return(a=0)=>{if(s)try{r.call(i,a)}catch{t.gain.setValueAtTime(0,a)}else r.call(i,a),s=!0}})(i.stop)},oo=(i,e)=>t=>{const n={value:i};return Object.defineProperties(t,{currentTarget:n,target:n}),typeof e=="function"?e.call(i,t):e.handleEvent.call(i,t)},LT=LS(Mr),DT=FS(Mr),NT=VE(Sa),Np=new WeakMap,IT=nb(Np),Fn=vE(new Map,new WeakMap),$n=yT(),Ip=Sb(Fn,yr),Vl=tb(hn),Bt=oT(hn,Vl,gr),UT=VS(Ip,ot,Bt),pt=rb(mp),Wi=zb($n),dt=gb(Wi),Up=new WeakMap,Op=jE(oo),Ta=wb($n),Fp=fb(Ta),Bp=pb($n),OT=mb($n),nl=Cb($n),kt=dE(DS(dp),OS(LT,DT,ha,NT,fa,hn,IT,to,ot,Mr,ci,gr,Xo),Fn,hb(Qc,fa,hn,ot,Zs,ci),yr,Ea,An,FE(ha,Qc,hn,ot,Zs,pt,ci,dt),GE(Up,hn,Gi),Op,pt,Fp,Bp,OT,dt,nl),FT=zS(kt,UT,yr,Ip,pt,dt),Hl=new WeakSet,vh=Eb($n),kp=PE(new Uint32Array(1)),Gl=MT(kp,yr),Wl=ST(kp),BT=GS(Hl,Fn,An,vh,Wi,pT(vh),Gl,Wl),wa=BS(In),zp=aT(Vl,io,gr),pi=TE(zp),ao=Tb(wa,Fn,AT,CT,RT,kl,Lp,zl,PT,ET(so),Dp),mi=sT(ib(io),zp),kT=qS(pi,ao,ot,mi,Bt),jn=hE(NS(fp),Up,pp,fE,TS,wS,AS,CS,RS,Zc,lp,Ta,Pp),zT=XS(kt,kT,jn,en,ao,pt,dt,oo),VT=eE(kt,tE,yr,en,Ab(In,so),pt,dt,Bt),HT=gE(pi,Tp,ot,mi,Bt),Sr=lT(Np),GT=_E(kt,jn,HT,Ea,Tp,pt,dt,Sr),gs=yb(Mr,Bp),WT=bT(en,gs),vs=Pb(Ta,WT),XT=ME(vs,ot,Bt),qT=yE(kt,XT,vs,pt,dt),YT=bE(Bl,ot,Bt),$T=EE(kt,YT,Bl,pt,dt,TT),jT=Nb(wa,ao,In,gs),Aa=Db(wa,Fn,jT,kl,zl),ZT=RE(pi,Aa,ot,mi,Bt),KT=CE(kt,jn,ZT,Aa,pt,dt,oo),Vp=Ib(An,so),JT=NE(Vp,ot,Bt),QT=DE(kt,JT,Vp,pt,dt,Sr),ew=zE(pi,wp,ot,mi,Bt),tw=kE(kt,jn,ew,wp,pt,dt,Sr),Hp=Ub(An),nw=qE(pi,Hp,ot,mi,Bt),iw=XE(kt,jn,nw,Hp,An,pt,dt,Sr),rw=eb(pi,In,ot,mi,Bt),sw=QE(kt,jn,rw,In,pt,dt),ow=kb(Ea,en,ba,An),Xl=cT(Fn,In,ba,_T(In,Wi)),aw=db(ao,ot,Wi,Bt,Xl),cw=Ob(ow),lw=lb(kt,cw,aw,pt,dt,Sr),uw=nE(jn,vs,Aa,ba,An,Cp,dt,so),Gp=new WeakMap,dw=xb(VT,uw,Op,dt,Gp,oo),Wp=Vb(wa,Fn,kl,Lp,zl,Dp),hw=Qb(pi,Wp,ot,mi,Bt),fw=Jb(kt,jn,Wp,hw,pt,dt,oo),Xp=wE(ao),pw=$b(Xp,en,In,Rp,gs),Ca=Yb(Xp,en,pw,Rp,gs,Ta,so),mw=Gb(ha,en,vs,In,ba,Ca,An,fa,Cp,gs),qp=Hb(mw),_w=nT(pi,vs,Aa,In,qp,ot,Wi,mi,Bt,Xl),gw=tT(kt,jn,qp,_w,pt,dt,Sr),vw=Wb(yr),xw=rT(vw,pt,new WeakSet,wT),yw=qb(vs,Bl,In,Ca,An,gs),Yp=Xb(yw,An),Mw=fT(pi,Yp,ot,mi,Bt),Sw=hT(kt,jn,Yp,Mw,pt,dt),Ew=xT(Ca,ot,Bt),bw=vT(kt,en,Ca,Ew,pt,dt,Sr),Tw=vb($n),ww=ZE($n),Aw=new WeakMap,Cw=sb(Aw,Wi),Rw=Tw?US(Fn,An,$E($n),ww,KE(PS),pt,Cw,dt,nl,new WeakMap,new WeakMap,mT(nl,Wi),$n):void 0,Pw=_b(Fp,dt),Lw=OE(Hl,Fn,UE,YE,new WeakSet,pt,Pw,ua,Ks,Gl,Wl),Dw=pE(Rw,FT,BT,zT,GT,qT,$T,KT,QT,Lw,tw,iw,sw,lw,dw,fw,gw,xw,Sw,bw),Nw=ob(Gp),Iw=IE(An,Wi),Uw=uT(Hl,Fn,Vl,Nw,Xl,ua,Gl,Wl),Ow=Zb(Dw,Fn,en,Iw,Uw),xh=(i,e,t)=>{const n=new Ow(i.numberOfChannels,Math.round(t*i.sampleRate),i.sampleRate),r=n.createBiquadFilter(),s=n.createBufferSource();return r.frequency.value=240,r.type="lowpass",s.buffer=i,s.connect(r).connect(n.destination),s.start(0,e,t),n.startRendering().then(a=>{const o=a.getChannelData(0),c=a.sampleRate;return{channelData:o,sampleRate:c}})},Fw=MS({analyze:({call:i})=>async(...e)=>{var t;const[n,r,s]=e,a=typeof r=="number"?r:0,o=typeof s=="number"?s:n.duration-a,{channelData:c,sampleRate:l}=await xh(n,a,o),u=typeof r=="object"?r:typeof s=="object"?s:(t=e[3])!==null&&t!==void 0?t:null;return i("analyze",{channelData:c,sampleRate:l,...u===null?u:{tempoSettings:u}},[c.buffer])},guess:({call:i})=>async(...e)=>{var t;const[n,r,s]=e,a=typeof r=="number"?r:0,o=typeof s=="number"?s:n.duration-a,{channelData:c,sampleRate:l}=await xh(n,a,o),u=typeof r=="object"?r:typeof s=="object"?s:(t=e[3])!==null&&t!==void 0?t:null;return i("guess",{channelData:c,sampleRate:l,...u===null?u:{tempoSettings:u}},[c.buffer])}}),Bw=i=>{const e=new Worker(i);return Fw(e)},kw=(i,e)=>{let t=null;return()=>{if(t!==null)return t;const n=new Blob([e],{type:"application/javascript; charset=utf-8"}),r=URL.createObjectURL(n);return t=i(r),setTimeout(()=>URL.revokeObjectURL(r)),t}},zw=`(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,c=r(i),u=a(c,i),l=t(u);e.addUniqueNumber=l,e.generateUniqueNumber=u}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:c}})=>{const u=r[i];try{if(void 0===u)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===c?u():u(c);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const l=r instanceof Promise?await r:r;if(null===a){if(void 0!==l.result)throw s(i)}else{if(void 0===l.result)throw s(i);const{result:e,transferables:r=[]}=l;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const c=new Map,u=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(c);return c.set(o,(()=>{n(),t.close(),c.delete(o)})),{result:o}},disconnect:({portId:e})=>{const r=c.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])}))){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),l=(e,t,r=()=>!0)=>{const n=u(l,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},h=(e,t,r)=>{const n=e.length,o=[];let s=!1;for(let a=0;a<n;a+=1)e[a]>t?s=!0:s&&(s=!1,o.push(a-1),a+=r/4-1);return s&&o.push(n-1),o},d=(e,t,r)=>{const n=(e=>{let t=0;const r=e.length;for(let n=0;n<r;n+=1)e[n]>t&&(t=e[n]);return t})(e),o=.3*n;let s=[],a=n-.05*n;if(n>.25)for(;s.length<30&&a>=o;)s=h(e,a,t),a-=.05*n;const i=(e=>{const t=[];return e.forEach(((r,n)=>{const o=Math.min(e.length-n,10);for(let s=1;s<o;s+=1){const o=e[n+s]-r;t.some((e=>e.interval===o&&(e.peaks.push(r),!0)))||t.push({interval:o,peaks:[r]})}})),t})(s),c=((e,t,r={})=>{var n,o;const s=Math.max(0,null!==(n=r.maxTempo)&&void 0!==n?n:180),a=Math.max(0,null!==(o=r.minTempo)&&void 0!==o?o:90),i=[];return e.forEach((e=>{let r=60/(e.interval/t);for(;r<a;)r*=2;for(;r>s;)r/=2;if(r<a)return;let n=!1,o=e.peaks.length;i.forEach((t=>{if(t.tempo===r&&(t.score+=e.peaks.length,t.peaks=[...t.peaks,...e.peaks],n=!0),t.tempo>r-.5&&t.tempo<r+.5){const n=2*Math.abs(t.tempo-r);o+=(1-n)*t.peaks.length,t.score+=(1-n)*e.peaks.length}})),n||i.push({peaks:e.peaks,score:o,tempo:r})})),i})(i,t,r);return c.sort(((e,t)=>t.score-e.score)),c},p=(e,t,r)=>{const n=d(e,t,r);if(0===n.length)throw new Error("The given channelData does not contain any detectable beats.");return n[0].tempo},f=(e,t,r)=>{const n=d(e,t,r);if(0===n.length)throw new Error("The given channelData does not contain any detectable beats.");const{peaks:o,tempo:s}=n[0],a=Math.round(s),i=60/a;o.sort(((e,t)=>e-t));let c=o[0]/t;for(;c>i;)c-=i;return{bpm:a,offset:c,tempo:s}};l(self,{analyze:({channelData:e,sampleRate:t,tempoSettings:r})=>({result:p(e,t,r)}),guess:({channelData:e,sampleRate:t,tempoSettings:r})=>({result:f(e,t,r)})})})()})();`,Vw=kw(Bw,zw),Hw=(...i)=>Vw().guess(...i);class Gw extends hi{constructor(){super(),this.interval=500,this.intervalId=null,this.bpmValue=0}setBPM(e){this.interval=6e4/e,clearInterval(this.intervalId),this.intervalId=setInterval(this.updateBPM.bind(this),this.interval)}updateBPM(){this.dispatchEvent({type:"beat"})}async detectBPM(e){const{bpm:t}=await Hw(e);this.setBPM(t),console.log(`BPM detected: ${t}`)}getBPMDuration(){return this.interval}}class Ww{constructor(){this.frequencyArray=[],this.frequencyData={low:0,mid:0,high:0},this.isPlaying=!1,this.lowFrequency=10,this.midFrequency=150,this.highFrequency=9e3,this.smoothedLowFrequency=0,this.audioContext=null,this.song={url:"https://p.scdn.co/mp3-preview/3be3fb77f5b2945c95e86d4c40ceceac20e5108f?cid=b62f0af3b0d54eca9bb49b99a2fc5820"}}async loadAudioBuffer(){return new Promise(async(t,n)=>{const r=new Jh;this.audio=new Qh(r),new Kh().load(this.song.url,a=>{this.audio.setBuffer(a),this.audio.setLoop(!0),this.audio.setVolume(.5),this.audioContext=this.audio.context,this.bufferLength=this.audioAnalyser.data.length,t()}),this.audioAnalyser=new Ry(this.audio,1024)})}play(){this.audio.play(),this.isPlaying=!0}pause(){this.audio.pause(),this.isPlaying=!1}collectAudioData(){this.frequencyArray=this.audioAnalyser.getFrequencyData()}analyzeFrequency(){const e=Math.floor(this.lowFrequency*this.bufferLength/this.audioContext.sampleRate),t=Math.floor(this.midFrequency*this.bufferLength/this.audioContext.sampleRate),n=Math.floor(this.midFrequency*this.bufferLength/this.audioContext.sampleRate),r=Math.floor(this.highFrequency*this.bufferLength/this.audioContext.sampleRate),s=Math.floor(this.highFrequency*this.bufferLength/this.audioContext.sampleRate),a=this.bufferLength-1,o=this.normalizeValue(this.calculateAverage(this.frequencyArray,e,t)),c=this.normalizeValue(this.calculateAverage(this.frequencyArray,n,r)),l=this.normalizeValue(this.calculateAverage(this.frequencyArray,s,a));this.frequencyData={low:o,mid:c,high:l}}calculateAverage(e,t,n){let r=0;for(let s=t;s<=n;s++)r+=e[s];return r/(n-t+1)}normalizeValue(e){return e/256}update(){this.isPlaying&&(this.collectAudioData(),this.analyzeFrequency())}}class Xw extends hi{constructor(){super(),this.hands=null,this.camera=null,this.videoElement=null,this.canvasElement=null,this.isActive=!1,this.previousHandY=null,this.conductorIntensity=0,this.previousZoomDistance=null,this.smoothedConductor=0,this.smoothedZoom=1,this.handTrackingCanvas=null,this.handTrackingCtx=null,this.showHandTracking=!1,this.conductorThreshold=.02,this.zoomSensitivity=2,this.smoothingFactor=.1}async init(){try{if(this.videoElement=document.getElementById("webcam"),this.canvasElement=document.getElementById("handCanvas"),this.handTrackingCanvas=document.getElementById("handTrackingOverlay"),!this.videoElement||!this.canvasElement||!this.handTrackingCanvas)throw new Error("Required elements not found");return this.handTrackingCtx=this.handTrackingCanvas.getContext("2d"),this.resizeHandTrackingCanvas(),window.addEventListener("resize",()=>this.resizeHandTrackingCanvas()),this.hands=new Hands({locateFile:e=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${e}`}),this.hands.setOptions({maxNumHands:2,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5}),this.hands.onResults(this.onResults.bind(this)),await this.hands.initialize(),console.log("HandTrackingManager initialized successfully"),!0}catch(e){return console.error("Failed to initialize HandTrackingManager:",e),!1}}resizeHandTrackingCanvas(){this.handTrackingCanvas&&(this.handTrackingCanvas.width=window.innerWidth,this.handTrackingCanvas.height=window.innerHeight)}setShowHandTracking(e){this.showHandTracking=e,this.handTrackingCanvas&&(this.handTrackingCanvas.style.display=e?"block":"none"),!e&&this.handTrackingCtx&&this.handTrackingCtx.clearRect(0,0,this.handTrackingCanvas.width,this.handTrackingCanvas.height)}async start(){if(!this.isActive)try{const e=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480}});this.videoElement.srcObject=e,await this.videoElement.play(),this.camera=new Camera(this.videoElement,{onFrame:async()=>{this.hands&&await this.hands.send({image:this.videoElement})},width:640,height:480}),this.camera.start(),this.isActive=!0,console.log("Hand tracking started"),this.dispatchEvent({type:"started"})}catch(e){console.error("Failed to start hand tracking:",e),this.dispatchEvent({type:"error",error:e})}}stop(){if(this.isActive)try{this.camera&&(this.camera.stop(),this.camera=null),this.videoElement&&this.videoElement.srcObject&&(this.videoElement.srcObject.getTracks().forEach(t=>t.stop()),this.videoElement.srcObject=null),this.isActive=!1,this.previousHandY=null,this.previousZoomDistance=null,console.log("Hand tracking stopped"),this.dispatchEvent({type:"stopped"})}catch(e){console.error("Failed to stop hand tracking:",e)}}onResults(e){if(this.showHandTracking&&this.handTrackingCtx&&this.handTrackingCtx.clearRect(0,0,this.handTrackingCanvas.width,this.handTrackingCanvas.height),!e.multiHandLandmarks||e.multiHandLandmarks.length===0)return;const t=e.multiHandLandmarks;this.showHandTracking&&this.drawHandTracking(t),this.processConductorGesture(t),this.processFingerPaintGesture(t),this.processZoomGesture(t)}processConductorGesture(e){if(e.length===0)return;const r=e[0][0].y;this.smoothedConductorY===void 0&&(this.smoothedConductorY=r),this.smoothedConductorY=this.lerp(this.smoothedConductorY,r,this.smoothingFactor),this.dispatchEvent({type:"conductorGesture",y:this.smoothedConductorY,intensity:this.previousHandY!==null?Math.abs(r-this.previousHandY)*10:0,direction:this.previousHandY!==null?r-this.previousHandY>0?"down":"up":"none"}),this.previousHandY=r}processFingerPaintGesture(e){if(e.length===0)return;const n=e[0][8];this.dispatchEvent({type:"fingerPaintGesture",x:n.x,y:n.y,debug:{rawX:n.x,rawY:n.y,handDetected:!0}})}processZoomGesture(e){if(e.length===0)return;const t=e[0],n=t[4],r=t[8],s=Math.sqrt(Math.pow(n.x-r.x,2)+Math.pow(n.y-r.y,2));if(this.previousZoomDistance!==null){const a=s-this.previousZoomDistance,o=1+a*this.zoomSensitivity;this.smoothedZoom=this.lerp(this.smoothedZoom,o,this.smoothingFactor),Math.abs(a)>.01&&this.dispatchEvent({type:"zoomGesture",factor:this.smoothedZoom,distance:s,delta:a})}this.previousZoomDistance=s}drawHandTracking(e){this.handTrackingCtx&&(this.handTrackingCtx.clearRect(0,0,this.handTrackingCanvas.width,this.handTrackingCanvas.height),e.forEach((t,n)=>{t.forEach((s,a)=>{const o=s.x*this.handTrackingCanvas.width,c=s.y*this.handTrackingCanvas.height;this.handTrackingCtx.beginPath(),this.handTrackingCtx.arc(o,c,4,0,2*Math.PI),this.handTrackingCtx.fillStyle=n===0?"#00ff00":"#ff0000",this.handTrackingCtx.fill(),(a===4||a===8)&&(this.handTrackingCtx.beginPath(),this.handTrackingCtx.arc(o,c,8,0,2*Math.PI),this.handTrackingCtx.strokeStyle="#ffffff",this.handTrackingCtx.lineWidth=2,this.handTrackingCtx.stroke())});const r=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]];this.handTrackingCtx.strokeStyle=n===0?"#00ff0080":"#ff000080",this.handTrackingCtx.lineWidth=2,r.forEach(([s,a])=>{if(t[s]&&t[a]){const o=t[s].x*this.handTrackingCanvas.width,c=t[s].y*this.handTrackingCanvas.height,l=t[a].x*this.handTrackingCanvas.width,u=t[a].y*this.handTrackingCanvas.height;this.handTrackingCtx.beginPath(),this.handTrackingCtx.moveTo(o,c),this.handTrackingCtx.lineTo(l,u),this.handTrackingCtx.stroke()}})}))}lerp(e,t,n){return e+(t-e)*n}isHandTrackingActive(){return this.isActive}}class qw extends hi{constructor(){super(),this.uploadedFiles=[],this.currentFile=null,this.maxFileSize=50*1024*1024,this.allowedFormats=["mp3","wav","flac","aac","m4a","ogg"],this.uploadFolder="uploads/music/",this.loadSavedFiles()}init(){this.setupUploadInterface(),this.setupEventListeners()}setupUploadInterface(){this.createUploadModal(),this.addUploadButton()}createUploadModal(){const e=document.createElement("div");e.id="uploadModal",e.className="upload-modal",e.innerHTML=`
      <div class="upload-modal-content">
        <div class="upload-header">
          <h2>Upload Your Music</h2>
          <button class="close-upload" id="closeUpload">&times;</button>
        </div>
        
        <div class="upload-area" id="uploadArea">
          <div class="upload-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7,10 12,15 17,10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </div>
          <p class="upload-text">Drag & drop your music files here</p>
          <p class="upload-subtext">or click to browse</p>
          <input type="file" id="fileInput" multiple accept=".mp3,.wav,.flac,.aac,.m4a,.ogg" style="display: none;">
          <button class="browse-btn" id="browseBtn">Browse Files</button>
        </div>
        
        <div class="upload-info">
          <p>Supported formats: MP3, WAV, FLAC, AAC, M4A, OGG</p>
          <p>Maximum file size: 50MB per file</p>
        </div>
        
        <div class="upload-progress" id="uploadProgress" style="display: none;">
          <div class="progress-bar">
            <div class="progress-fill" id="progressFill"></div>
          </div>
          <span class="progress-text" id="progressText">0%</span>
        </div>
        
        <div class="uploaded-files" id="uploadedFilesList">
          <h3>Your Music Library</h3>
          <div class="files-list" id="filesList"></div>
        </div>
      </div>
    `,document.body.appendChild(e)}addUploadButton(){const e=document.querySelector(".playback-controls");if(e){const t=document.createElement("div");t.className="upload-section",t.innerHTML=`
        <button class="upload-btn" id="uploadBtn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7,10 12,15 17,10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>Upload Music</span>
        </button>
      `,e.appendChild(t)}}setupEventListeners(){var t,n,r,s,a;(t=document.getElementById("uploadBtn"))==null||t.addEventListener("click",()=>{this.showUploadModal()}),(n=document.getElementById("closeUpload"))==null||n.addEventListener("click",()=>{this.hideUploadModal()}),(r=document.getElementById("browseBtn"))==null||r.addEventListener("click",()=>{document.getElementById("fileInput").click()}),(s=document.getElementById("fileInput"))==null||s.addEventListener("change",o=>{this.handleFileSelection(o.target.files)});const e=document.getElementById("uploadArea");e&&(e.addEventListener("dragover",o=>{o.preventDefault(),e.classList.add("drag-over")}),e.addEventListener("dragleave",()=>{e.classList.remove("drag-over")}),e.addEventListener("drop",o=>{o.preventDefault(),e.classList.remove("drag-over"),this.handleFileSelection(o.dataTransfer.files)})),(a=document.getElementById("uploadModal"))==null||a.addEventListener("click",o=>{o.target.id==="uploadModal"&&this.hideUploadModal()})}showUploadModal(){const e=document.getElementById("uploadModal");e&&(e.style.display="flex",this.updateFilesList())}hideUploadModal(){const e=document.getElementById("uploadModal");e&&(e.style.display="none")}async handleFileSelection(e){const t=[];for(let n of e)this.validateFile(n)&&t.push(n);t.length>0&&await this.uploadFiles(t)}validateFile(e){const t=e.name.split(".").pop().toLowerCase();return this.allowedFormats.includes(t)?e.size>this.maxFileSize?(this.showError(`File too large: ${e.name}. Maximum size: ${this.maxFileSize/(1024*1024)}MB`),!1):this.uploadedFiles.some(n=>n.name===e.name)?(this.showError(`File already exists: ${e.name}`),!1):!0:(this.showError(`Invalid file format: ${e.name}. Supported formats: ${this.allowedFormats.join(", ")}`),!1)}async uploadFiles(e){const t=document.getElementById("uploadProgress"),n=document.getElementById("progressFill"),r=document.getElementById("progressText");t.style.display="block";for(let s=0;s<e.length;s++){const a=e[s],o=(s+1)/e.length*100;try{await this.processFile(a),n.style.width=`${o}%`,r.textContent=`${Math.round(o)}%`;const c={id:Date.now()+Math.random(),name:a.name,size:a.size,type:a.type,url:URL.createObjectURL(a),uploadDate:new Date().toISOString(),duration:await this.getAudioDuration(a)};this.uploadedFiles.push(c)}catch(c){this.showError(`Failed to upload ${a.name}: ${c.message}`)}}setTimeout(()=>{t.style.display="none",n.style.width="0%",r.textContent="0%",this.updateFilesList(),this.saveFiles(),this.showSuccess(`Successfully uploaded ${e.length} file(s)`)},500)}async processFile(e){return new Promise(t=>{setTimeout(t,1e3)})}async getAudioDuration(e){return new Promise(t=>{const n=new Audio;n.addEventListener("loadedmetadata",()=>{t(n.duration)}),n.addEventListener("error",()=>{t(0)}),n.src=URL.createObjectURL(e)})}updateFilesList(){const e=document.getElementById("filesList");if(e){if(this.uploadedFiles.length===0){e.innerHTML='<p class="no-files">No music files uploaded yet</p>';return}e.innerHTML=this.uploadedFiles.map(t=>`
      <div class="file-item" data-file-id="${t.id}">
        <div class="file-info">
          <div class="file-name">${t.name}</div>
          <div class="file-details">
            ${this.formatFileSize(t.size)} • ${this.formatDuration(t.duration)}
          </div>
        </div>
        <div class="file-actions">
          <button class="play-btn" onclick="window.fileUploadManager.playFile('${t.id}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="5,3 19,12 5,21"></polygon>
            </svg>
          </button>
          <button class="delete-btn" onclick="window.fileUploadManager.deleteFile('${t.id}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3,6 5,6 21,6"></polyline>
              <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"></path>
            </svg>
          </button>
        </div>
      </div>
    `).join("")}}playFile(e){const t=this.uploadedFiles.find(n=>n.id==e);t&&(this.currentFile=t,this.dispatchEvent({type:"fileSelected",file:t}),this.hideUploadModal())}deleteFile(e){confirm("Are you sure you want to delete this file?")&&(this.uploadedFiles=this.uploadedFiles.filter(t=>t.id!=e),this.updateFilesList(),this.saveFiles(),this.showSuccess("File deleted successfully"))}formatFileSize(e){if(e===0)return"0 Bytes";const t=1024,n=["Bytes","KB","MB","GB"],r=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,r)).toFixed(2))+" "+n[r]}formatDuration(e){if(!e||e===0)return"0:00";const t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n.toString().padStart(2,"0")}`}saveFiles(){try{const e=this.uploadedFiles.map(t=>({...t,url:null}));localStorage.setItem("uploadedMusicFiles",JSON.stringify(e))}catch(e){console.error("Failed to save files:",e)}}loadSavedFiles(){try{const e=localStorage.getItem("uploadedMusicFiles");e&&(this.uploadedFiles=JSON.parse(e))}catch(e){console.error("Failed to load saved files:",e),this.uploadedFiles=[]}}showError(e){this.showNotification(e,"error")}showSuccess(e){this.showNotification(e,"success")}showNotification(e,t="info"){const n=document.createElement("div");n.className=`notification notification-${t}`,n.textContent=e,document.body.appendChild(n),setTimeout(()=>{n.classList.add("show")},100),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>{document.body.removeChild(n)},300)},3e3)}getCurrentFile(){return this.currentFile}getUploadedFiles(){return this.uploadedFiles}}class Yw{constructor(){this.currentPosition="top-right",this.currentSize="medium",this.webcamElement=null,this.isVisible=!1,this.positions={"top-left":{top:"20px",left:"20px",right:"auto",bottom:"auto"},"top-right":{top:"20px",right:"20px",left:"auto",bottom:"auto"},"bottom-left":{bottom:"20px",left:"20px",right:"auto",top:"auto"},"bottom-right":{bottom:"20px",right:"20px",left:"auto",top:"auto"}},this.sizes={small:{width:"120px",height:"90px"},medium:{width:"160px",height:"120px"},large:{width:"200px",height:"150px"}}}init(){this.createWebcamElement(),this.setupEventListeners()}createWebcamElement(){this.webcamElement=document.createElement("div"),this.webcamElement.id="webcamPreview",this.webcamElement.className="webcam-preview",this.webcamElement.innerHTML=`
      <video id="webcamVideo" autoplay muted playsinline></video>
      <div class="webcam-controls">
        <button class="webcam-settings-btn" id="webcamSettingsBtn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="m12 1 1.27 2.76L16 2l2 2-1.76 2.73L19 8l-1 1.73-2.76-1.27L16 11l-2.73-1.27L12 12l-1.27-2.73L8 11l-2-2 1.76-2.73L5 8l1-1.73 2.76 1.27L8 5l2.73 1.27z"></path>
          </svg>
        </button>
      </div>
    `,document.body.appendChild(this.webcamElement),this.updateWebcamStyle()}setupEventListeners(){const e=document.getElementById("webcamSettingsBtn");e&&e.addEventListener("click",t=>{t.stopPropagation(),this.togglePositionMenu()})}togglePositionMenu(){const e=document.getElementById("webcamPositionMenu");if(e){e.remove();return}this.createPositionMenu()}createPositionMenu(){const e=document.createElement("div");e.id="webcamPositionMenu",e.className="webcam-position-menu",e.innerHTML=`
      <div class="webcam-menu-content">
        <div class="webcam-menu-section">
          <div class="webcam-menu-label">Position</div>
          <div class="position-grid">
            <button class="position-btn ${this.currentPosition==="top-left"?"active":""}" data-position="top-left">
              <div class="position-icon">
                <div class="screen-frame">
                  <div class="webcam-indicator top-left"></div>
                </div>
              </div>
            </button>
            <button class="position-btn ${this.currentPosition==="top-right"?"active":""}" data-position="top-right">
              <div class="position-icon">
                <div class="screen-frame">
                  <div class="webcam-indicator top-right"></div>
                </div>
              </div>
            </button>
            <button class="position-btn ${this.currentPosition==="bottom-left"?"active":""}" data-position="bottom-left">
              <div class="position-icon">
                <div class="screen-frame">
                  <div class="webcam-indicator bottom-left"></div>
                </div>
              </div>
            </button>
            <button class="position-btn ${this.currentPosition==="bottom-right"?"active":""}" data-position="bottom-right">
              <div class="position-icon">
                <div class="screen-frame">
                  <div class="webcam-indicator bottom-right"></div>
                </div>
              </div>
            </button>
          </div>
        </div>
        
        <div class="webcam-menu-section">
          <div class="webcam-menu-label">Size</div>
          <div class="size-options">
            <button class="size-btn ${this.currentSize==="small"?"active":""}" data-size="small">
              <div class="size-icon">
                <div class="size-indicator small"></div>
              </div>
            </button>
            <button class="size-btn ${this.currentSize==="medium"?"active":""}" data-size="medium">
              <div class="size-icon">
                <div class="size-indicator medium"></div>
              </div>
            </button>
            <button class="size-btn ${this.currentSize==="large"?"active":""}" data-size="large">
              <div class="size-icon">
                <div class="size-indicator large"></div>
              </div>
            </button>
          </div>
        </div>
        
        <div class="webcam-menu-section">
          <div class="webcam-menu-label">Background</div>
          <div class="background-options">
            <div class="toggle-container">
              <label class="toggle-switch">
                <input type="checkbox" id="transparentBackgroundToggle" ${this.isTransparentBackground?"checked":""}>
                <span class="toggle-slider"></span>
              </label>
              <span class="toggle-label">Transparent</span>
            </div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(e),this.positionMenu(e),this.setupMenuEventListeners(e),setTimeout(()=>{document.addEventListener("click",t=>{e.contains(t.target)||e.remove()},{once:!0})},100)}positionMenu(e){const t=this.webcamElement.getBoundingClientRect(),n=280,r=200;let s=t.right+10,a=t.top;s+n>window.innerWidth&&(s=t.left-n-10),a+r>window.innerHeight&&(a=window.innerHeight-r-20),e.style.left=`${Math.max(20,s)}px`,e.style.top=`${Math.max(20,a)}px`}setupMenuEventListeners(e){const t=e.querySelectorAll(".position-btn");t.forEach(s=>{s.addEventListener("click",a=>{a.stopPropagation();const o=s.dataset.position;this.setPosition(o),t.forEach(c=>c.classList.remove("active")),s.classList.add("active")})});const n=e.querySelectorAll(".size-btn");n.forEach(s=>{s.addEventListener("click",a=>{a.stopPropagation();const o=s.dataset.size;this.setSize(o),n.forEach(c=>c.classList.remove("active")),s.classList.add("active")})});const r=e.querySelector("#transparentBackgroundToggle");r&&r.addEventListener("change",s=>{this.toggleTransparentBackground(s.target.checked)})}setPosition(e){this.currentPosition=e,this.updateWebcamStyle()}setSize(e){this.currentSize=e,this.updateWebcamStyle()}updateWebcamStyle(){if(!this.webcamElement)return;const e=this.positions[this.currentPosition],t=this.sizes[this.currentSize];Object.assign(this.webcamElement.style,{...e,...t})}toggleTransparentBackground(e){this.isTransparentBackground=e;const t=document.getElementById("webcamVideo");t&&(e?t.classList.add("transparent-background"):t.classList.remove("transparent-background"))}async startWebcam(){try{const e=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480}}),t=document.getElementById("webcamVideo");t&&(t.srcObject=e,await t.play(),this.isTransparentBackground&&t.classList.add("transparent-background")),this.isVisible=!0,this.webcamElement.style.display="block"}catch(e){console.error("Failed to start webcam:",e)}}stopWebcam(){const e=document.getElementById("webcamVideo");e&&e.srcObject&&(e.srcObject.getTracks().forEach(n=>n.stop()),e.srcObject=null),this.isVisible=!1,this.webcamElement.style.display="none"}toggleWebcam(){this.isVisible?this.stopWebcam():this.startWebcam()}}const pe=class pe{constructor(){this.onClickBinder=()=>this.init(),document.addEventListener("click",this.onClickBinder),this.mediaRecorder=null,this.recordedChunks=[],this.isRecording=!1,this.isMouseTrackingActive=!1,this.onMouseMoveBinder=e=>this.onMouseMove(e),this.onMouseWheelBinder=e=>this.onMouseWheel(e),this.onClickInteractionBinder=e=>this.onClickInteraction(e)}init(){document.removeEventListener("click",this.onClickBinder),this.renderer=new jh({antialias:!0,alpha:!0}),this.renderer.setClearColor(0,0),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.autoClear=!1,document.querySelector(".content").appendChild(this.renderer.domElement),this.camera=new Sn(70,window.innerWidth/window.innerHeight,.1,1e4),this.camera.position.z=12,this.camera.frustumCulled=!1,this.scene=new My,this.scene.add(this.camera),pe.holder=new yt,pe.holder.name="holder",this.scene.add(pe.holder),pe.holder.sortObjects=!1,this.createManagers(),this.resize(),window.addEventListener("resize",()=>this.resize())}async createManagers(){pe.audioManager=new Ww,await pe.audioManager.loadAudioBuffer(),pe.fileUploadManager=new qw,pe.fileUploadManager.init(),window.fileUploadManager=pe.fileUploadManager,pe.fileUploadManager.addEventListener("fileSelected",e=>{this.loadUserAudio(e.file)}),pe.bpmManager=new Gw,pe.bpmManager.addEventListener("beat",()=>{this.particles.onBPMBeat()}),await pe.bpmManager.detectBPM(pe.audioManager.audio.buffer),document.querySelector(".user_interaction").remove(),pe.handTrackingManager=new Xw,await pe.handTrackingManager.init(),pe.webcamPositionManager=new Yw,pe.webcamPositionManager.init(),pe.handTrackingManager.addEventListener("conductorGesture",e=>{this.onConductorGesture(e)}),pe.handTrackingManager.addEventListener("zoomGesture",e=>{this.onZoomGesture(e)}),pe.handTrackingManager.addEventListener("fingerPaintGesture",e=>{this.onFingerPaintGesture(e)}),pe.audioManager.play(),this.particles=new qM,this.particles.init(),this.enableMouseTracking(),this.initBottomMenu(),this.initTopMenu(),this.update()}async loadUserAudio(e){try{if(pe.audioManager.isPlaying&&pe.audioManager.pause(),!e.url&&!(e instanceof File))throw new Error("Audio data not available. Please re-upload the file.");const t=new Jh,n=new Qh(t),r=new Kh,s=await e.url?fetch(e.url).then(o=>o.arrayBuffer()):new Promise(o=>{const c=new FileReader;c.onload=l=>o(l.target.result),c.readAsArrayBuffer(e)}),a=await pe.audioManager.audioContext.decodeAudioData(s);pe.audioManager.audio.setBuffer(a),pe.audioManager.audio.setLoop(!0),pe.audioManager.audio.setVolume(.5),await pe.bpmManager.detectBPM(a),pe.audioManager.play(),console.log(`Now playing: ${e.name}`)}catch(t){console.error("Failed to load user audio:",t),pe.fileUploadManager.showError("Failed to load audio file. Please try again.")}}initTopMenu(){const e=document.getElementById("topMenu"),t=document.getElementById("webcamBtn");e.style.display="block",t.addEventListener("click",()=>{this.toggleWebcam()})}async toggleWebcam(){const e=document.getElementById("webcamBtn"),t=e.querySelector("span");if(pe.handTrackingManager.isHandTrackingActive())pe.handTrackingManager.stop(),e.classList.remove("active"),t.textContent="Activate Webcam",this.enableMouseTracking(),pe.webcamPositionManager&&pe.webcamPositionManager.stopWebcam(),console.log("Hand tracking deactivated");else{e.disabled=!0,t.textContent="Starting...";try{await pe.handTrackingManager.start(),e.classList.add("active"),t.textContent="Webcam Active",this.disableMouseTracking(),pe.webcamPositionManager&&await pe.webcamPositionManager.startWebcam(),console.log("Hand tracking activated")}catch(n){console.error("Failed to start webcam:",n),t.textContent="Failed to Start",setTimeout(()=>{t.textContent="Activate Webcam"},2e3)}e.disabled=!1}}enableMouseTracking(){this.isMouseTrackingActive||(window.addEventListener("mousemove",this.onMouseMoveBinder),window.addEventListener("wheel",this.onMouseWheelBinder),window.addEventListener("click",this.onClickInteractionBinder),this.isMouseTrackingActive=!0,console.log("Mouse tracking enabled"))}disableMouseTracking(){this.isMouseTrackingActive&&(window.removeEventListener("mousemove",this.onMouseMoveBinder),window.removeEventListener("wheel",this.onMouseWheelBinder),window.removeEventListener("click",this.onClickInteractionBinder),this.isMouseTrackingActive=!1,console.log("Mouse tracking disabled"))}onMouseMove(e){if(this.particles&&this.particles.material){const t=e.clientX/window.innerWidth,n=e.clientY/window.innerHeight;this.particles.updateFingerPosition(t,n),this.particles.updateConductorY(n)}}onMouseWheel(e){if(e.preventDefault(),this.camera){const s=e.deltaY>0?1:-1;let a=this.camera.position.z+s*.5;a=Math.max(5,Math.min(20,a)),this.camera.position.z=a,console.log("Mouse wheel zoom:",a)}}onClickInteraction(e){if(!this.particles||!this.particles.material)return;const t=e.clientX/window.innerWidth,n=e.clientY/window.innerHeight;if(this.particles.currentMode==="paint"){this.particles.updateFingerPosition(t,n),console.log("Click paint interaction at:",t,n);const r=this.particles.material.uniforms.u_paintStrength.value;this.particles.material.uniforms.u_paintStrength.value=Math.min(r*2,1),setTimeout(()=>{this.particles&&this.particles.material&&(this.particles.material.uniforms.u_paintStrength.value=r)},200)}else if(this.particles.currentMode==="conductor"){this.particles.updateConductorY(n),console.log("Click conductor interaction at Y:",n);const r=this.particles.material.uniforms.amplitude.value;this.particles.material.uniforms.amplitude.value=Math.min(r*1.5,2),setTimeout(()=>{this.particles&&this.particles.material&&(this.particles.material.uniforms.amplitude.value=r)},300)}}onConductorGesture(e){var t;if(this.particles&&this.particles.material&&(this.particles.updateConductorY(e.y),this.particles.currentMode==="conductor"&&console.log("Conductor gesture Y:",e.y),(t=pe.audioManager)!=null&&t.isPlaying)){const n=Math.min(e.intensity,2),r=.8+pe.audioManager.frequencyData.high*.2;this.particles.material.uniforms.amplitude.value=r+n*.5;const s=pe.audioManager.frequencyData.mid*.6;this.particles.material.uniforms.offsetGain.value=s+n*.3}}onFingerPaintGesture(e){this.particles&&this.particles.material&&(this.particles.updateFingerPosition(e.x,e.y),this.particles.currentMode==="paint"&&console.log("Paint gesture:",e.x,e.y))}onZoomGesture(e){if(this.camera){let s=this.camera.position.z;e.delta>0?s-=.5:e.delta<0&&(s+=.5),s=Math.max(5,Math.min(20,s)),this.camera.position.z=s}}initBottomMenu(){const e=document.getElementById("bottomMenu");e.style.display="block";const t=document.getElementById("hideToggle"),n=document.getElementById("topMenu");t.addEventListener("change",S=>{S.target.checked?(e.classList.add("hidden"),n.classList.add("hidden"),document.getElementById("showUIBtn").style.display="flex"):(e.classList.remove("hidden"),n.classList.remove("hidden"),document.getElementById("showUIBtn").style.display="none")});const r=document.getElementById("showUIBtn");r.addEventListener("click",()=>{e.classList.remove("hidden"),n.classList.remove("hidden"),r.style.display="none",t.checked=!1}),document.querySelectorAll("#uploadBtn").forEach(S=>{S.addEventListener("click",()=>{pe.fileUploadManager&&pe.fileUploadManager.showUploadModal()})}),document.getElementById("gestureInfoBtn").addEventListener("click",()=>{document.getElementById("gestureSlideout").classList.toggle("open")}),document.getElementById("closeGesture").addEventListener("click",()=>{document.getElementById("gestureSlideout").classList.remove("open")}),document.addEventListener("click",S=>{const D=document.getElementById("gestureSlideout"),L=document.getElementById("gestureInfoBtn");!D.contains(S.target)&&!L.contains(S.target)&&D.classList.remove("open")});const c=document.getElementById("colorSlider1"),l=document.getElementById("colorIndicator1"),u=document.getElementById("colorSlider2"),d=document.getElementById("colorIndicator2"),h=(S,D,L=!0)=>{const O=new Ge().setHSL(S/360,1,.5);D.style.background="#"+O.getHexString(),this.particles&&(L?this.particles.updateStartColor(O):this.particles.updateEndColor(O))};c.addEventListener("input",S=>{h(parseInt(S.target.value),l,!0)}),u.addEventListener("input",S=>{h(parseInt(S.target.value),d,!1)});const f=document.getElementById("hexTooltip"),g=document.getElementById("hexInput"),p=document.getElementById("applyHex"),m=document.getElementById("cancelHex");let _=null,E=!0;const y=(S,D)=>{_=S,E=D;const L=S.getBoundingClientRect();f.style.left=L.left+"px",f.style.top=L.top-f.offsetHeight-10+"px",f.style.display="flex",S.style.background,g.value="",g.focus()},M=()=>{f.style.display="none",_=null},v=()=>{const S=g.value.trim();if(S.match(/^#[0-9A-Fa-f]{6}$/)){const D=new Ge(S);_.style.background=S,this.particles&&(E?this.particles.updateStartColor(D):this.particles.updateEndColor(D));const L={};D.getHSL(L);const O=E?c:u;O.value=Math.round(L.h*360),M()}else g.style.borderColor="#ff4444",setTimeout(()=>{g.style.borderColor="rgba(255, 255, 255, 0.3)"},1e3)};l.addEventListener("click",S=>{S.stopPropagation(),y(l,!0)}),d.addEventListener("click",S=>{S.stopPropagation(),y(d,!1)}),p.addEventListener("click",v),m.addEventListener("click",M),g.addEventListener("keydown",S=>{S.key==="Enter"?v():S.key==="Escape"&&M()}),document.addEventListener("click",S=>{!f.contains(S.target)&&!l.contains(S.target)&&!d.contains(S.target)&&M()});const T=document.querySelectorAll(".mode-btn");T.forEach(S=>{S.addEventListener("click",()=>{T.forEach(L=>L.classList.remove("active")),S.classList.add("active");const D=S.dataset.mode;this.particles&&this.particles.setMode(D)})}),h(300,l,!0),h(180,d,!1);const b=document.getElementById("playBtn"),w=document.getElementById("stopBtn");b.addEventListener("click",()=>{pe.audioManager&&!pe.audioManager.isPlaying?(pe.audioManager.play(),b.querySelector("span").textContent="Pause",b.querySelector("svg").innerHTML=`
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        `):pe.audioManager&&pe.audioManager.isPlaying&&(pe.audioManager.pause(),b.querySelector("span").textContent="Play",b.querySelector("svg").innerHTML=`
          <polygon points="5,3 19,12 5,21"></polygon>
        `)}),w.addEventListener("click",()=>{pe.audioManager&&(pe.audioManager.pause(),pe.audioManager.audio&&pe.audioManager.audio.source&&(pe.audioManager.audio.stop(),pe.audioManager.audio.play(),pe.audioManager.audio.pause()),b.querySelector("span").textContent="Play",b.querySelector("svg").innerHTML=`
          <polygon points="5,3 19,12 5,21"></polygon>
        `)}),document.getElementById("recordBtn").addEventListener("click",()=>{this.isRecording?this.stopRecording():this.startRecording()})}resize(){this.width=window.innerWidth,this.height=window.innerHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}update(){var e;requestAnimationFrame(()=>this.update()),(e=this.particles)==null||e.update(),pe.audioManager.update(),this.renderer.render(this.scene,this.camera)}startRecording(){try{const e=this.renderer.domElement.captureStream(60);this.mediaRecorder=new MediaRecorder(e,{mimeType:"video/webm; codecs=vp8"}),this.recordedChunks=[],this.mediaRecorder.ondataavailable=t=>{t.data.size>0&&this.recordedChunks.push(t.data)},this.mediaRecorder.onstop=()=>{const t=new Blob(this.recordedChunks,{type:"video/webm"}),n=URL.createObjectURL(t),r=document.createElement("a");r.href=n,r.download=`visualizer-recording-${Date.now()}.webm`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n),this.recordedChunks=[]},this.mediaRecorder.start(),this.isRecording=!0,this.updateRecordButtonState(),console.log("Recording started")}catch(e){console.error("Failed to start recording:",e),alert("Recording failed. Your browser may not support this feature.")}}stopRecording(){this.mediaRecorder&&this.isRecording&&(this.mediaRecorder.stop(),this.isRecording=!1,this.updateRecordButtonState(),console.log("Recording stopped"))}updateRecordButtonState(){const e=document.getElementById("recordBtn"),t=e.querySelector("span");this.isRecording?(e.classList.add("recording"),t.textContent="Recording..."):(e.classList.remove("recording"),t.textContent="Record")}};_i(pe,"holder",null),_i(pe,"gui",null),_i(pe,"audioManager",null),_i(pe,"bpmManager",null),_i(pe,"handTrackingManager",null),_i(pe,"fileUploadManager",null),_i(pe,"webcamPositionManager",null);let yn=pe;new yn;
