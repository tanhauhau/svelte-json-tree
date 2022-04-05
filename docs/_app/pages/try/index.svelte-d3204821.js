import{S as E,i as $,s as I,e as f,k as j,w as x,c as _,a as m,d,m as T,x as V,b as p,X as y,g as k,M as v,$ as w,y as q,P as z,q as D,o as R,B as S}from"../../chunks/index-680183b4.js";import{R as A}from"../../chunks/Root-86ab0037.js";import"../../chunks/index-b07d0fc0.js";function F(l){let a,r,e,c,n,s,i,h,b;return s=new A({props:{value:l[1]}}),{c(){a=f("div"),r=f("div"),e=f("textarea"),c=j(),n=f("div"),x(s.$$.fragment),this.h()},l(t){a=_(t,"DIV",{class:!0});var o=m(a);r=_(o,"DIV",{class:!0});var u=m(r);e=_(u,"TEXTAREA",{placeholder:!0,class:!0}),m(e).forEach(d),u.forEach(d),c=T(o),n=_(o,"DIV",{class:!0});var g=m(n);V(s.$$.fragment,g),g.forEach(d),o.forEach(d),this.h()},h(){p(e,"placeholder",M),p(e,"class","svelte-179p3bc"),y(e,"error",l[2]),p(r,"class","editor svelte-179p3bc"),p(n,"class","preview svelte-179p3bc"),p(a,"class","container svelte-179p3bc")},m(t,o){k(t,a,o),v(a,r),v(r,e),w(e,l[0]),v(a,c),v(a,n),q(s,n,null),i=!0,h||(b=z(e,"input",l[3]),h=!0)},p(t,[o]){o&1&&w(e,t[0]),o&4&&y(e,"error",t[2]);const u={};o&2&&(u.value=t[1]),s.$set(u)},i(t){i||(D(s.$$.fragment,t),i=!0)},o(t){R(s.$$.fragment,t),i=!1},d(t){t&&d(a),S(s),h=!1,b()}}}const M='Type anything, eg: {"foo": "1"}, function foo(a,b) { return a + b; }, ..."';function O(l,a,r){let e=`{
  z: 1,
  y: '2',
  x: true,
  a: [ 11, 12, { b: 13, c: "d" }, 14, [1, 2] ],
  b: new Set([11, 12, 13]),
  c: new Map([
    ['1', '1'],
    [2, '2'],
    [undefined, undefined],
    [false, false],
    [true, true],
    ['6', '6'],
    [null, null],
    [Infinity, Infinity],
    ['9', '9'],
    ['10', { a: {b:{c:2}}}]
  ]),
  d: { a: 1, b: 2, c: { ca: {caa:4}, cb:{cbb:5}}, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 },
  e: new Error("FOO"),
  f: {
    a: new Error("bar"),
    b: [1,2,3],
    c: [new Error("c").stack, new Error("cc"), new Error("dd")],
  },
  g: /^[a-z]+(b)?$/,
}
`,c,n=null;function s(){e=this.value,r(0,e)}return l.$$.update=()=>{if(l.$$.dirty&1)try{r(1,c=new Function(`return ${e}`)()),r(2,n=null)}catch(i){r(2,n=i)}},[e,c,n,s]}class P extends E{constructor(a){super();$(this,a,O,F,I,{})}}export{P as default};
