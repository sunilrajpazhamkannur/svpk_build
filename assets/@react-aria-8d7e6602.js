import{r as u,R as d}from"./react-684569b2.js";const l={prefix:String(Math.round(Math.random()*1e10)),current:0,isSSR:!1},s=d.createContext(l);let f=!!(typeof window<"u"&&window.document&&window.document.createElement),i=new WeakMap;function $(r=!1){let e=u.useContext(s),n=u.useRef(null);if(n.current===null&&!r){var c,o;let t=(c=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||c===void 0||(o=c.ReactCurrentOwner)===null||o===void 0?void 0:o.current;if(t){let a=i.get(t);a==null?i.set(t,{id:e.current,state:t.memoizedState}):t.memoizedState!==a.state&&(e.current=a.id,i.delete(t))}n.current=++e.current}return n.current}function v(r){let e=u.useContext(s);e===l&&!f&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=$(!!r);return r||`react-aria${e.prefix}-${n}`}export{v as $};