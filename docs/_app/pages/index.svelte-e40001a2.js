import{S as ue,i as de,s as ve,e as i,k,t as P,w as fe,c,a as d,d as a,m as M,h as A,x as _e,b as s,f as K,N as be,g as F,M as e,O as re,y as pe,P as ye,Q as Ee,q as me,o as he,B as ge,G as je,R as Oe,T as we,U as $e,V as oe,E as Ie}from"../chunks/index-680183b4.js";import{_ as Se}from"../chunks/preload-helper-aee239c2.js";import{R as Te}from"../chunks/Root-86ab0037.js";import{w as ie,r as xe,d as Pe}from"../chunks/index-b07d0fc0.js";var Ae=`{
    name: "svelte-json-tree",
    license: "MIT",
    elements: ["svelte", 123, false, true, null, undefined, 456n],
    nested: {
      taglines: [
        { name: 'svelte', feature: 'write less code' },
        { name: 'svelte', feature: 'no virtual dom' },
        { name: 'svelte', feature: 'truly reactive' }
      ],
      tutorials: [
        {
          type: 'category',
          label: '1. Introduction',
          items: [
            { id: 'basics', label: 'a. Basics' },
            { id: 'adding-data', label: 'b. Adding data' },
            { id: 'dynamic-attributes', label: 'c. Dynamic attributes' },
          ],
        },
        {
          type: 'category',
          label: '18. Debugging',
          items: [{ id: 'debug', label: 'a. The @debug tag' }],
        },
      ]
    }
  }`,De=`new Map([
    ["name", "svelte-json-tree"],
    ["license", "MIT"],
    ["elements", new Set(["svelte", 123, false, true, null, undefined, 456n])],
    ["nested", new Map([
      ["taglines", new Set([
        { name: 'svelte', feature: 'write less code' },
        { name: 'svelte', feature: 'no virtual dom' },
        { name: 'svelte', feature: 'truly reactive' }
      ])],
      ["tutorials", new Set([
        {
          type: 'category',
          label: '1. Introduction',
          items: [
            { id: 'basics', label: 'a. Basics' },
            { id: 'adding-data', label: 'b. Adding data' },
          ],
        },
        {
          type: 'category',
          label: '2. Reactivity',
          items: [
            { id: 'reactive-assignments', label: 'a. Assignments' },
            { id: 'reactive-declarations', label: 'b. Declarations' },
          ],
        },
      ])],
    ])]
  ])`,Ne=`{
    regex: /^[a-z0-9]+/g,
    case_insensitive: /^(?:[a-z0-9]+)foo.*?/i,
  }`,Ve=`[
    function sum (a, b) { return a + b },
    async (promises) => await Promise.all(promises),
    function *generator (a) {
      while (a--) {
        yield a;
      }
    }
  ]`,Re="new Error('Error')",ke=`[
    writable(1),
    readable({ a: 1 }),
    derived(writable(1), $a => $a * 2),
  ]`,Me=`{
    message: 'hello world',
    item: [1, 2, 3],
  }`;function Ce(y){let l,p,u,r,v,m,j,O,_,h,o,g,E,b,t,n,w,f,D,I,z,S,J,T,U,W,C,H,G,N,L,Q,X;return N=new Te({props:{value:y[1],defaultExpandedLevel:1}}),{c(){l=i("div"),p=i("div"),u=i("div"),r=i("span"),v=i("span"),m=k(),j=i("span"),O=k(),_=i("span"),h=k(),o=i("select"),g=i("option"),E=P("Getting Started"),b=i("option"),t=P("Objects and Arrays"),n=i("option"),w=P("Maps and Sets"),f=i("option"),D=P("RegExps"),I=i("option"),z=P("Functions"),S=i("option"),J=P("Svelte Store"),T=i("option"),U=P("Errors"),W=k(),C=i("div"),H=k(),G=i("div"),fe(N.$$.fragment),this.h()},l($){l=c($,"DIV",{class:!0});var x=d(l);p=c(x,"DIV",{class:!0});var R=d(p);u=c(R,"DIV",{class:!0});var q=d(u);r=c(q,"SPAN",{class:!0});var B=d(r);v=c(B,"SPAN",{class:!0,style:!0}),d(v).forEach(a),m=M(B),j=c(B,"SPAN",{class:!0,style:!0}),d(j).forEach(a),O=M(B),_=c(B,"SPAN",{class:!0,style:!0}),d(_).forEach(a),B.forEach(a),h=M(q),o=c(q,"SELECT",{class:!0});var V=d(o);g=c(V,"OPTION",{class:!0});var Y=d(g);E=A(Y,"Getting Started"),Y.forEach(a),b=c(V,"OPTION",{class:!0});var Z=d(b);t=A(Z,"Objects and Arrays"),Z.forEach(a),n=c(V,"OPTION",{class:!0});var ee=d(n);w=A(ee,"Maps and Sets"),ee.forEach(a),f=c(V,"OPTION",{class:!0});var te=d(f);D=A(te,"RegExps"),te.forEach(a),I=c(V,"OPTION",{class:!0});var se=d(I);z=A(se,"Functions"),se.forEach(a),S=c(V,"OPTION",{class:!0});var ae=d(S);J=A(ae,"Svelte Store"),ae.forEach(a),T=c(V,"OPTION",{class:!0});var ne=d(T);U=A(ne,"Errors"),ne.forEach(a),V.forEach(a),q.forEach(a),W=M(R),C=c(R,"DIV",{class:!0}),d(C).forEach(a),R.forEach(a),H=M(x),G=c(x,"DIV",{class:!0});var le=d(G);_e(N.$$.fragment,le),le.forEach(a),x.forEach(a),this.h()},h(){s(v,"class","dot svelte-1fsdj1l"),K(v,"background","#fe5f56"),s(j,"class","dot svelte-1fsdj1l"),K(j,"background","#ffbd2f"),s(_,"class","dot svelte-1fsdj1l"),K(_,"background","#28c93f"),s(r,"class","dots svelte-1fsdj1l"),g.__value="simple",g.value=g.__value,s(g,"class","svelte-1fsdj1l"),b.__value="objects-arrays",b.value=b.__value,s(b,"class","svelte-1fsdj1l"),n.__value="maps-sets",n.value=n.__value,s(n,"class","svelte-1fsdj1l"),f.__value="regexps",f.value=f.__value,s(f,"class","svelte-1fsdj1l"),I.__value="functions",I.value=I.__value,s(I,"class","svelte-1fsdj1l"),S.__value="stores",S.value=S.__value,s(S,"class","svelte-1fsdj1l"),T.__value="errors",T.value=T.__value,s(T,"class","svelte-1fsdj1l"),s(o,"class","svelte-1fsdj1l"),y[0]===void 0&&be(()=>y[4].call(o)),s(u,"class","controls svelte-1fsdj1l"),s(C,"class","codemirror svelte-1fsdj1l"),s(p,"class","editor svelte-1fsdj1l"),s(G,"class","preview svelte-1fsdj1l"),s(l,"class","playground svelte-1fsdj1l")},m($,x){F($,l,x),e(l,p),e(p,u),e(u,r),e(r,v),e(r,m),e(r,j),e(r,O),e(r,_),e(u,h),e(u,o),e(o,g),e(g,E),e(o,b),e(b,t),e(o,n),e(n,w),e(o,f),e(f,D),e(o,I),e(I,z),e(o,S),e(S,J),e(o,T),e(T,U),re(o,y[0]),e(p,W),e(p,C),e(l,H),e(l,G),pe(N,G,null),L=!0,Q||(X=[ye(o,"change",y[4]),Ee(y[3].call(null,C))],Q=!0)},p($,[x]){x&1&&re(o,$[0]);const R={};x&2&&(R.value=$[1]),N.$set(R)},i($){L||(me(N.$$.fragment,$),L=!0)},o($){he(N.$$.fragment,$),L=!1},d($){$&&a(l),ge(N),Q=!1,je(X)}}}function ce(y,l){const u=l.slice(0,y).split(`
`);return{line:u.length-1,ch:u[u.length-1].length}}function Ge(y,l,p){let u;const r=ie({});Oe(y,r,t=>p(1,u=t));let v,m,j=!0,O;const _={simple:Me,"objects-arrays":Ae,"maps-sets":De,regexps:Ne,functions:Ve,stores:ke,errors:Re},h=["<script>",'  import JsonTree from "svelte-json-tree";',"  let value = "].join(`
`),o=`;
<\/script>

<JsonTree {value} defaultExpandedLevel={1} />`;function g(t){return(async()=>{const n=(await Se(()=>import("../chunks/codemirror-4d4bac58.js"),["chunks/codemirror-4d4bac58.js","assets/codemirror-09a423fc.css"])).default;!j||(v=n(t,{value:h+"{}"+o,mode:{name:"handlebars",base:"text/html"},autoCloseBrackets:!0,autoCloseTags:!0,lineWrapping:!0,indentWithTabs:!0,indentUnit:2,tabSize:2,foldGutter:!0,theme:"dracula"}),m=v.getDoc(),m.markText({line:0,ch:0},{line:2,ch:14},{readOnly:!0}),m.markText({line:2,ch:16},{line:6,ch:0},{readOnly:!0}),v.on("change",w=>{try{const f=w.getValue(),D=f.slice(f.indexOf(h)+h.length,f.indexOf(o));we(r,u=new Function("{ writable, readable, derived }",`return ${D};`)({writable:ie,readable:xe,derived:Pe}),u)}catch(f){console.log(f)}}),E(_[O]))})(),{destroy(){j=!1}}}function E(t){if(!j||!v||!m||!t)return;const n=v.getValue(),w=ce(n.indexOf(h)+h.length,n),f=ce(n.indexOf(o),n);m.replaceRange(t,w,f)}function b(){O=$e(this),p(0,O)}return y.$$.update=()=>{y.$$.dirty&1&&E(_[O])},[O,u,r,g,b]}class Be extends ue{constructor(l){super();de(this,l,Ge,Ce,ve,{})}}function Fe(y){let l,p,u,r,v,m,j,O,_,h,o,g,E,b;return E=new Be({}),{c(){l=i("h1"),p=P("svelte-json-tree"),u=k(),r=i("div"),v=i("a"),m=i("img"),O=P(`
  \xA0
  `),_=i("a"),h=i("img"),g=k(),fe(E.$$.fragment),this.h()},l(t){l=c(t,"H1",{class:!0});var n=d(l);p=A(n,"svelte-json-tree"),n.forEach(a),u=M(t),r=c(t,"DIV",{class:!0});var w=d(r);v=c(w,"A",{target:!0,href:!0});var f=d(v);m=c(f,"IMG",{alt:!0,src:!0}),f.forEach(a),O=A(w,`
  \xA0
  `),_=c(w,"A",{target:!0,href:!0});var D=d(_);h=c(D,"IMG",{alt:!0,src:!0}),D.forEach(a),w.forEach(a),g=M(t),_e(E.$$.fragment,t),this.h()},h(){s(l,"class","svelte-oywdx"),s(m,"alt","npm-version"),oe(m.src,j="https://img.shields.io/npm/v/svelte-json-tree.svg")||s(m,"src",j),s(v,"target","_blank"),s(v,"href","https://npmjs.com/svelte-json-tree"),s(h,"alt","github"),oe(h.src,o="https://img.shields.io/github/stars/tanhauhau/svelte-json-tree?style=social")||s(h,"src",o),s(_,"target","_blank"),s(_,"href","https://github.com/tanhauhau/svelte-json-tree"),s(r,"class","svelte-oywdx")},m(t,n){F(t,l,n),e(l,p),F(t,u,n),F(t,r,n),e(r,v),e(v,m),e(r,O),e(r,_),e(_,h),F(t,g,n),pe(E,t,n),b=!0},p:Ie,i(t){b||(me(E.$$.fragment,t),b=!0)},o(t){he(E.$$.fragment,t),b=!1},d(t){t&&a(l),t&&a(u),t&&a(r),t&&a(g),ge(E,t)}}}class Ue extends ue{constructor(l){super();de(this,l,null,Fe,ve,{})}}export{Ue as default};
