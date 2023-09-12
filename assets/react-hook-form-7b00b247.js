import{R as m}from"./react-684569b2.js";var ge=e=>e.type==="checkbox",ae=e=>e instanceof Date,M=e=>e==null;const ur=e=>typeof e=="object";var T=e=>!M(e)&&!Array.isArray(e)&&ur(e)&&!ae(e),mr=e=>T(e)&&e.target?ge(e.target)?e.target.checked:e.target.value:e,wr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Sr=(e,i)=>e.has(wr(i)),kr=e=>{const i=e.constructor&&e.constructor.prototype;return T(i)&&i.hasOwnProperty("isPrototypeOf")},Pe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function W(e){let i;const r=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(Pe&&(e instanceof Blob||e instanceof FileList))&&(r||T(e)))if(i=r?[]:{},!Array.isArray(e)&&!kr(e))i=e;else for(const t in e)i[t]=W(e[t]);else return e;return i}var le=e=>Array.isArray(e)?e.filter(Boolean):[],S=e=>e===void 0,d=(e,i,r)=>{if(!i||!T(e))return r;const t=le(i.split(/[,[\].]+?/)).reduce((a,l)=>M(a)?a:a[l],e);return S(t)||t===e?S(e[i])?r:e[i]:t};const Ye={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},H={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Y={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Dr=m.createContext(null),ar=()=>m.useContext(Dr);var Er=(e,i,r,t=!0)=>{const a={defaultValues:i._defaultValues};for(const l in e)Object.defineProperty(a,l,{get:()=>{const f=l;return i._proxyFormState[f]!==H.all&&(i._proxyFormState[f]=!t||H.all),r&&(r[f]=!0),e[f]}});return a},q=e=>T(e)&&!Object.keys(e).length,Cr=(e,i,r,t)=>{r(e);const{name:a,...l}=e;return q(l)||Object.keys(l).length>=Object.keys(i).length||Object.keys(l).find(f=>i[f]===(!t||H.all))},$=e=>Array.isArray(e)?e:[e],Or=(e,i,r)=>r&&i?e===i:!e||!i||e===i||$(e).some(t=>t&&(t.startsWith(i)||i.startsWith(t)));function qe(e){const i=m.useRef(e);i.current=e,m.useEffect(()=>{const r=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var Q=e=>typeof e=="string",nr=(e,i,r,t,a)=>Q(e)?(t&&i.watch.add(e),d(r,e,a)):Array.isArray(e)?e.map(l=>(t&&i.watch.add(l),d(r,l))):(t&&(i.watchAll=!0),r);function zr(e){const i=ar(),{control:r=i.control,name:t,defaultValue:a,disabled:l,exact:f}=e||{},V=m.useRef(t);V.current=t,qe({disabled:l,subject:r._subjects.values,next:I=>{Or(V.current,I.name,f)&&R(W(nr(V.current,r._names,I.values||r._formValues,!1,a)))}});const[v,R]=m.useState(r._getWatch(t,a));return m.useEffect(()=>r._removeUnmounted()),v}var We=e=>/^\w*$/.test(e),lr=e=>le(e.replace(/["|']|\]/g,"").split(/\.|\[/));function w(e,i,r){let t=-1;const a=We(i)?[i]:lr(i),l=a.length,f=l-1;for(;++t<l;){const V=a[t];let v=r;if(t!==f){const R=e[V];v=T(R)||Array.isArray(R)?R:isNaN(+a[t+1])?{}:[]}e[V]=v,e=e[V]}return e}var Tr=(e,i,r,t,a)=>i?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[t]:a||!0}}:{};const _e=(e,i,r)=>{for(const t of r||Object.keys(e)){const a=d(e,t);if(a){const{_f:l,...f}=a;if(l&&i(l.name)){if(l.ref.focus){l.ref.focus();break}else if(l.refs&&l.refs[0].focus){l.refs[0].focus();break}}else T(f)&&_e(f,i)}}};var Z=()=>{const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,i=>{const r=(Math.random()*16+e)%16|0;return(i=="x"?r:r&3|8).toString(16)})},we=(e,i,r={})=>r.shouldFocus||S(r.shouldFocus)?r.focusName||`${e}.${S(r.focusIndex)?i:r.focusIndex}.`:"",Be=e=>({isOnSubmit:!e||e===H.onSubmit,isOnBlur:e===H.onBlur,isOnChange:e===H.onChange,isOnAll:e===H.all,isOnTouch:e===H.onTouched}),Ne=(e,i,r)=>!r&&(i.watchAll||i.watch.has(e)||[...i.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),or=(e,i,r)=>{const t=le(d(e,r));return w(t,"root",i[r]),w(e,r,t),e},ne=e=>typeof e=="boolean",$e=e=>e.type==="file",ee=e=>typeof e=="function",ve=e=>{if(!Pe)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},he=e=>Q(e),je=e=>e.type==="radio",Ae=e=>e instanceof RegExp;const Ze={value:!1,isValid:!1},er={value:!0,isValid:!0};var cr=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!S(e[0].attributes.value)?S(e[0].value)||e[0].value===""?er:{value:e[0].value,isValid:!0}:er:Ze}return Ze};const rr={isValid:!1,value:null};var fr=e=>Array.isArray(e)?e.reduce((i,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:i,rr):rr;function tr(e,i,r="validate"){if(he(e)||Array.isArray(e)&&e.every(he)||ne(e)&&!e)return{type:r,message:he(e)?e:"",ref:i}}var ue=e=>T(e)&&!Ae(e)?e:{value:e,message:""},Ie=async(e,i,r,t,a)=>{const{ref:l,refs:f,required:V,maxLength:v,minLength:R,min:I,max:k,pattern:_,validate:z,name:B,valueAsNumber:oe,mount:se,disabled:ce}=e._f,x=d(i,B);if(!se||ce)return{};const P=f?f[0]:l,K=p=>{t&&P.reportValidity&&(P.setCustomValidity(ne(p)?"":p||""),P.reportValidity())},y={},A=je(l),b=ge(l),O=A||b,U=(oe||$e(l))&&S(l.value)&&S(x)||ve(l)&&l.value===""||x===""||Array.isArray(x)&&!x.length,G=Tr.bind(null,B,r,y),X=(p,F,E,N=Y.maxLength,j=Y.minLength)=>{const J=p?F:E;y[B]={type:p?N:j,message:J,ref:l,...G(p?N:j,J)}};if(a?!Array.isArray(x)||!x.length:V&&(!O&&(U||M(x))||ne(x)&&!x||b&&!cr(f).isValid||A&&!fr(f).isValid)){const{value:p,message:F}=he(V)?{value:!!V,message:V}:ue(V);if(p&&(y[B]={type:Y.required,message:F,ref:P,...G(Y.required,F)},!r))return K(F),y}if(!U&&(!M(I)||!M(k))){let p,F;const E=ue(k),N=ue(I);if(!M(x)&&!isNaN(x)){const j=l.valueAsNumber||x&&+x;M(E.value)||(p=j>E.value),M(N.value)||(F=j<N.value)}else{const j=l.valueAsDate||new Date(x),J=de=>new Date(new Date().toDateString()+" "+de),re=l.type=="time",fe=l.type=="week";Q(E.value)&&x&&(p=re?J(x)>J(E.value):fe?x>E.value:j>new Date(E.value)),Q(N.value)&&x&&(F=re?J(x)<J(N.value):fe?x<N.value:j<new Date(N.value))}if((p||F)&&(X(!!p,E.message,N.message,Y.max,Y.min),!r))return K(y[B].message),y}if((v||R)&&!U&&(Q(x)||a&&Array.isArray(x))){const p=ue(v),F=ue(R),E=!M(p.value)&&x.length>+p.value,N=!M(F.value)&&x.length<+F.value;if((E||N)&&(X(E,p.message,F.message),!r))return K(y[B].message),y}if(_&&!U&&Q(x)){const{value:p,message:F}=ue(_);if(Ae(p)&&!x.match(p)&&(y[B]={type:Y.pattern,message:F,ref:l,...G(Y.pattern,F)},!r))return K(F),y}if(z){if(ee(z)){const p=await z(x,i),F=tr(p,P);if(F&&(y[B]={...F,...G(Y.validate,F.message)},!r))return K(F.message),y}else if(T(z)){let p={};for(const F in z){if(!q(p)&&!r)break;const E=tr(await z[F](x,i),P,F);E&&(p={...E,...G(F,E.message)},K(E.message),r&&(y[B]=p))}if(!q(p)&&(y[B]={ref:P,...p},!r))return y}}return K(!0),y};function Se(e,i){return[...e,...$(i)]}var ke=e=>Array.isArray(e)?e.map(()=>{}):void 0;function De(e,i,r){return[...e.slice(0,i),...$(r),...e.slice(i)]}var Ee=(e,i,r)=>Array.isArray(e)?(S(e[r])&&(e[r]=void 0),e.splice(r,0,e.splice(i,1)[0]),e):[];function Ce(e,i){return[...$(i),...$(e)]}function Lr(e,i){let r=0;const t=[...e];for(const a of i)t.splice(a-r,1),r++;return le(t).length?t:[]}var Oe=(e,i)=>S(i)?[]:Lr(e,$(i).sort((r,t)=>r-t)),Te=(e,i,r)=>{e[i]=[e[r],e[r]=e[i]][0]};function Rr(e,i){const r=i.slice(0,-1).length;let t=0;for(;t<r;)e=S(e)?t++:e[i[t++]];return e}function Ur(e){for(const i in e)if(!S(e[i]))return!1;return!0}function L(e,i){const r=Array.isArray(i)?i:We(i)?[i]:lr(i),t=r.length===1?e:Rr(e,r),a=r.length-1,l=r[a];return t&&delete t[l],a!==0&&(T(t)&&q(t)||Array.isArray(t)&&Ur(t))&&L(e,r.slice(0,-1)),e}var sr=(e,i,r)=>(e[i]=r,e);function Gr(e){const i=ar(),{control:r=i.control,name:t,keyName:a="id",shouldUnregister:l}=e,[f,V]=m.useState(r._getFieldArray(t)),v=m.useRef(r._getFieldArray(t).map(Z)),R=m.useRef(f),I=m.useRef(t),k=m.useRef(!1);I.current=t,R.current=f,r._names.array.add(t),e.rules&&r.register(t,e.rules),qe({next:({values:y,name:A})=>{if(A===I.current||!A){const b=d(y,I.current);Array.isArray(b)&&(V(b),v.current=b.map(Z))}},subject:r._subjects.array});const _=m.useCallback(y=>{k.current=!0,r._updateFieldArray(t,y)},[r,t]),z=(y,A)=>{const b=$(W(y)),O=Se(r._getFieldArray(t),b);r._names.focus=we(t,O.length-1,A),v.current=Se(v.current,b.map(Z)),_(O),V(O),r._updateFieldArray(t,O,Se,{argA:ke(y)})},B=(y,A)=>{const b=$(W(y)),O=Ce(r._getFieldArray(t),b);r._names.focus=we(t,0,A),v.current=Ce(v.current,b.map(Z)),_(O),V(O),r._updateFieldArray(t,O,Ce,{argA:ke(y)})},oe=y=>{const A=Oe(r._getFieldArray(t),y);v.current=Oe(v.current,y),_(A),V(A),r._updateFieldArray(t,A,Oe,{argA:y})},se=(y,A,b)=>{const O=$(W(A)),U=De(r._getFieldArray(t),y,O);r._names.focus=we(t,y,b),v.current=De(v.current,y,O.map(Z)),_(U),V(U),r._updateFieldArray(t,U,De,{argA:y,argB:ke(A)})},ce=(y,A)=>{const b=r._getFieldArray(t);Te(b,y,A),Te(v.current,y,A),_(b),V(b),r._updateFieldArray(t,b,Te,{argA:y,argB:A},!1)},x=(y,A)=>{const b=r._getFieldArray(t);Ee(b,y,A),Ee(v.current,y,A),_(b),V(b),r._updateFieldArray(t,b,Ee,{argA:y,argB:A},!1)},P=(y,A)=>{const b=W(A),O=sr(r._getFieldArray(t),y,b);v.current=[...O].map((U,G)=>!U||G===y?Z():v.current[G]),_(O),V([...O]),r._updateFieldArray(t,O,sr,{argA:y,argB:b},!0,!1)},K=y=>{const A=$(W(y));v.current=A.map(Z),_([...A]),V([...A]),r._updateFieldArray(t,[...A],b=>b,{},!0,!1)};return m.useEffect(()=>{if(r._state.action=!1,Ne(t,r._names)&&r._subjects.state.next({...r._formState}),k.current&&(!Be(r._options.mode).isOnSubmit||r._formState.isSubmitted))if(r._options.resolver)r._executeSchema([t]).then(y=>{const A=d(y.errors,t),b=d(r._formState.errors,t);(b?!A&&b.type:A&&A.type)&&(A?w(r._formState.errors,t,A):L(r._formState.errors,t),r._subjects.state.next({errors:r._formState.errors}))});else{const y=d(r._fields,t);y&&y._f&&Ie(y,r._formValues,r._options.criteriaMode===H.all,r._options.shouldUseNativeValidation,!0).then(A=>!q(A)&&r._subjects.state.next({errors:or(r._formState.errors,A,t)}))}r._subjects.values.next({name:t,values:{...r._formValues}}),r._names.focus&&_e(r._fields,y=>!!y&&y.startsWith(r._names.focus||"")),r._names.focus="",r._updateValid()},[f,t,r]),m.useEffect(()=>(!d(r._formValues,t)&&r._updateFieldArray(t),()=>{(r._options.shouldUnregister||l)&&r.unregister(t)}),[t,r,a,l]),{swap:m.useCallback(ce,[_,t,r]),move:m.useCallback(x,[_,t,r]),prepend:m.useCallback(B,[_,t,r]),append:m.useCallback(z,[_,t,r]),remove:m.useCallback(oe,[_,t,r]),insert:m.useCallback(se,[_,t,r]),update:m.useCallback(P,[_,t,r]),replace:m.useCallback(K,[_,t,r]),fields:m.useMemo(()=>f.map((y,A)=>({...y,[a]:v.current[A]||Z()})),[f,a])}}function Le(){let e=[];return{get observers(){return e},next:a=>{for(const l of e)l.next&&l.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(l=>l!==a)}}),unsubscribe:()=>{e=[]}}}var Ve=e=>M(e)||!ur(e);function te(e,i){if(Ve(e)||Ve(i))return e===i;if(ae(e)&&ae(i))return e.getTime()===i.getTime();const r=Object.keys(e),t=Object.keys(i);if(r.length!==t.length)return!1;for(const a of r){const l=e[a];if(!t.includes(a))return!1;if(a!=="ref"){const f=i[a];if(ae(l)&&ae(f)||T(l)&&T(f)||Array.isArray(l)&&Array.isArray(f)?!te(l,f):l!==f)return!1}}return!0}var dr=e=>e.type==="select-multiple",Mr=e=>je(e)||ge(e),Re=e=>ve(e)&&e.isConnected,yr=e=>{for(const i in e)if(ee(e[i]))return!0;return!1};function xe(e,i={}){const r=Array.isArray(e);if(T(e)||r)for(const t in e)Array.isArray(e[t])||T(e[t])&&!yr(e[t])?(i[t]=Array.isArray(e[t])?[]:{},xe(e[t],i[t])):M(e[t])||(i[t]=!0);return i}function gr(e,i,r){const t=Array.isArray(e);if(T(e)||t)for(const a in e)Array.isArray(e[a])||T(e[a])&&!yr(e[a])?S(i)||Ve(r[a])?r[a]=Array.isArray(e[a])?xe(e[a],[]):{...xe(e[a])}:gr(e[a],M(i)?{}:i[a],r[a]):r[a]=!te(e[a],i[a]);return r}var Ue=(e,i)=>gr(e,i,xe(i)),hr=(e,{valueAsNumber:i,valueAsDate:r,setValueAs:t})=>S(e)?e:i?e===""?NaN:e&&+e:r&&Q(e)?new Date(e):t?t(e):e;function Me(e){const i=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):i.disabled))return $e(i)?i.files:je(i)?fr(e.refs).value:dr(i)?[...i.selectedOptions].map(({value:r})=>r):ge(i)?cr(e.refs).value:hr(S(i.value)?e.ref.value:i.value,e)}var Br=(e,i,r,t)=>{const a={};for(const l of e){const f=d(i,l);f&&w(a,l,f._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:t}},ye=e=>S(e)?e:Ae(e)?e.source:T(e)?Ae(e.value)?e.value.source:e.value:e,Nr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ir(e,i,r){const t=d(e,r);if(t||We(r))return{error:t,name:r};const a=r.split(".");for(;a.length;){const l=a.join("."),f=d(i,l),V=d(e,l);if(f&&!Array.isArray(f)&&r!==l)return{name:r};if(V&&V.type)return{name:l,error:V};a.pop()}return{name:r}}var Ir=(e,i,r,t,a)=>a.isOnAll?!1:!r&&a.isOnTouch?!(i||e):(r?t.isOnBlur:a.isOnBlur)?!e:(r?t.isOnChange:a.isOnChange)?e:!0,Pr=(e,i)=>!le(d(e,i)).length&&L(e,i);const qr={mode:H.onSubmit,reValidateMode:H.onChange,shouldFocusError:!0};function Wr(e={},i){let r={...qr,...e},t={submitCount:0,isDirty:!1,isLoading:ee(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},a={},l=T(r.defaultValues)||T(r.values)?W(r.defaultValues||r.values)||{}:{},f=r.shouldUnregister?{}:W(l),V={action:!1,mount:!1,watch:!1},v={mount:new Set,unMount:new Set,array:new Set,watch:new Set},R,I=0;const k={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},_={values:Le(),array:Le(),state:Le()},z=e.resetOptions&&e.resetOptions.keepDirtyValues,B=Be(r.mode),oe=Be(r.reValidateMode),se=r.criteriaMode===H.all,ce=s=>u=>{clearTimeout(I),I=setTimeout(s,u)},x=async s=>{if(k.isValid||s){const u=r.resolver?q((await U()).errors):await X(a,!0);u!==t.isValid&&_.state.next({isValid:u})}},P=s=>k.isValidating&&_.state.next({isValidating:s}),K=(s,u=[],n,g,c=!0,o=!0)=>{if(g&&n){if(V.action=!0,o&&Array.isArray(d(a,s))){const h=n(d(a,s),g.argA,g.argB);c&&w(a,s,h)}if(o&&Array.isArray(d(t.errors,s))){const h=n(d(t.errors,s),g.argA,g.argB);c&&w(t.errors,s,h),Pr(t.errors,s)}if(k.touchedFields&&o&&Array.isArray(d(t.touchedFields,s))){const h=n(d(t.touchedFields,s),g.argA,g.argB);c&&w(t.touchedFields,s,h)}k.dirtyFields&&(t.dirtyFields=Ue(l,f)),_.state.next({name:s,isDirty:F(s,u),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else w(f,s,u)},y=(s,u)=>{w(t.errors,s,u),_.state.next({errors:t.errors})},A=(s,u,n,g)=>{const c=d(a,s);if(c){const o=d(f,s,S(n)?d(l,s):n);S(o)||g&&g.defaultChecked||u?w(f,s,u?o:Me(c._f)):j(s,o),V.mount&&x()}},b=(s,u,n,g,c)=>{let o=!1,h=!1;const D={name:s};if(!n||g){k.isDirty&&(h=t.isDirty,t.isDirty=D.isDirty=F(),o=h!==D.isDirty);const C=te(d(l,s),u);h=d(t.dirtyFields,s),C?L(t.dirtyFields,s):w(t.dirtyFields,s,!0),D.dirtyFields=t.dirtyFields,o=o||k.dirtyFields&&h!==!C}if(n){const C=d(t.touchedFields,s);C||(w(t.touchedFields,s,n),D.touchedFields=t.touchedFields,o=o||k.touchedFields&&C!==n)}return o&&c&&_.state.next(D),o?D:{}},O=(s,u,n,g)=>{const c=d(t.errors,s),o=k.isValid&&ne(u)&&t.isValid!==u;if(e.delayError&&n?(R=ce(()=>y(s,n)),R(e.delayError)):(clearTimeout(I),R=null,n?w(t.errors,s,n):L(t.errors,s)),(n?!te(c,n):c)||!q(g)||o){const h={...g,...o&&ne(u)?{isValid:u}:{},errors:t.errors,name:s};t={...t,...h},_.state.next(h)}P(!1)},U=async s=>r.resolver(f,r.context,Br(s||v.mount,a,r.criteriaMode,r.shouldUseNativeValidation)),G=async s=>{const{errors:u}=await U();if(s)for(const n of s){const g=d(u,n);g?w(t.errors,n,g):L(t.errors,n)}else t.errors=u;return u},X=async(s,u,n={valid:!0})=>{for(const g in s){const c=s[g];if(c){const{_f:o,...h}=c;if(o){const D=v.array.has(o.name),C=await Ie(c,f,se,r.shouldUseNativeValidation&&!u,D);if(C[o.name]&&(n.valid=!1,u))break;!u&&(d(C,o.name)?D?or(t.errors,C,o.name):w(t.errors,o.name,C[o.name]):L(t.errors,o.name))}h&&await X(h,u,n)}}return n.valid},p=()=>{for(const s of v.unMount){const u=d(a,s);u&&(u._f.refs?u._f.refs.every(n=>!Re(n)):!Re(u._f.ref))&&be(s)}v.unMount=new Set},F=(s,u)=>(s&&u&&w(f,s,u),!te(He(),l)),E=(s,u,n)=>nr(s,v,{...V.mount?f:S(u)?l:Q(s)?{[s]:u}:u},n,u),N=s=>le(d(V.mount?f:l,s,e.shouldUnregister?d(l,s,[]):[])),j=(s,u,n={})=>{const g=d(a,s);let c=u;if(g){const o=g._f;o&&(!o.disabled&&w(f,s,hr(u,o)),c=ve(o.ref)&&M(u)?"":u,dr(o.ref)?[...o.ref.options].forEach(h=>h.selected=c.includes(h.value)):o.refs?ge(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(c)?!!c.find(D=>D===h.value):c===h.value)):o.refs[0]&&(o.refs[0].checked=!!c):o.refs.forEach(h=>h.checked=h.value===c):$e(o.ref)?o.ref.value="":(o.ref.value=c,o.ref.type||_.values.next({name:s,values:{...f}})))}(n.shouldDirty||n.shouldTouch)&&b(s,c,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&de(s)},J=(s,u,n)=>{for(const g in u){const c=u[g],o=`${s}.${g}`,h=d(a,o);(v.array.has(s)||!Ve(c)||h&&!h._f)&&!ae(c)?J(o,c,n):j(o,c,n)}},re=(s,u,n={})=>{const g=d(a,s),c=v.array.has(s),o=W(u);w(f,s,o),c?(_.array.next({name:s,values:{...f}}),(k.isDirty||k.dirtyFields)&&n.shouldDirty&&_.state.next({name:s,dirtyFields:Ue(l,f),isDirty:F(s,o)})):g&&!g._f&&!M(o)?J(s,o,n):j(s,o,n),Ne(s,v)&&_.state.next({...t}),_.values.next({name:s,values:{...f}}),!V.mount&&i()},fe=async s=>{const u=s.target;let n=u.name,g=!0;const c=d(a,n),o=()=>u.type?Me(c._f):mr(s);if(c){let h,D;const C=o(),ie=s.type===Ye.BLUR||s.type===Ye.FOCUS_OUT,br=!Nr(c._f)&&!r.resolver&&!d(t.errors,n)&&!c._f.deps||Ir(ie,d(t.touchedFields,n),t.isSubmitted,oe,B),pe=Ne(n,v,ie);w(f,n,C),ie?(c._f.onBlur&&c._f.onBlur(s),R&&R(0)):c._f.onChange&&c._f.onChange(s);const me=b(n,C,ie,!1),Fr=!q(me)||pe;if(!ie&&_.values.next({name:n,type:s.type,values:{...f}}),br)return k.isValid&&x(),Fr&&_.state.next({name:n,...pe?{}:me});if(!ie&&pe&&_.state.next({...t}),P(!0),r.resolver){const{errors:Qe}=await U([n]),pr=ir(t.errors,a,n),Xe=ir(Qe,a,pr.name||n);h=Xe.error,n=Xe.name,D=q(Qe)}else h=(await Ie(c,f,se,r.shouldUseNativeValidation))[n],g=isNaN(C)||C===d(f,n,C),g&&(h?D=!1:k.isValid&&(D=await X(a,!0)));g&&(c._f.deps&&de(c._f.deps),O(n,D,h,me))}},de=async(s,u={})=>{let n,g;const c=$(s);if(P(!0),r.resolver){const o=await G(S(s)?s:c);n=q(o),g=s?!c.some(h=>d(o,h)):n}else s?(g=(await Promise.all(c.map(async o=>{const h=d(a,o);return await X(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!g&&!t.isValid)&&x()):g=n=await X(a);return _.state.next({...!Q(s)||k.isValid&&n!==t.isValid?{}:{name:s},...r.resolver||!s?{isValid:n}:{},errors:t.errors,isValidating:!1}),u.shouldFocus&&!g&&_e(a,o=>o&&d(t.errors,o),s?c:v.mount),g},He=s=>{const u={...l,...V.mount?f:{}};return S(s)?u:Q(s)?d(u,s):s.map(n=>d(u,n))},Ke=(s,u)=>({invalid:!!d((u||t).errors,s),isDirty:!!d((u||t).dirtyFields,s),isTouched:!!d((u||t).touchedFields,s),error:d((u||t).errors,s)}),_r=s=>{s&&$(s).forEach(u=>L(t.errors,u)),_.state.next({errors:s?t.errors:{}})},vr=(s,u,n)=>{const g=(d(a,s,{_f:{}})._f||{}).ref;w(t.errors,s,{...u,ref:g}),_.state.next({name:s,errors:t.errors,isValid:!1}),n&&n.shouldFocus&&g&&g.focus&&g.focus()},Ar=(s,u)=>ee(s)?_.values.subscribe({next:n=>s(E(void 0,u),n)}):E(s,u,!0),be=(s,u={})=>{for(const n of s?$(s):v.mount)v.mount.delete(n),v.array.delete(n),u.keepValue||(L(a,n),L(f,n)),!u.keepError&&L(t.errors,n),!u.keepDirty&&L(t.dirtyFields,n),!u.keepTouched&&L(t.touchedFields,n),!r.shouldUnregister&&!u.keepDefaultValue&&L(l,n);_.values.next({values:{...f}}),_.state.next({...t,...u.keepDirty?{isDirty:F()}:{}}),!u.keepIsValid&&x()},Fe=(s,u={})=>{let n=d(a,s);const g=ne(u.disabled);return w(a,s,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:s}},name:s,mount:!0,...u}}),v.mount.add(s),n?g&&w(f,s,u.disabled?void 0:d(f,s,Me(n._f))):A(s,!0,u.value),{...g?{disabled:u.disabled}:{},...r.shouldUseNativeValidation?{required:!!u.required,min:ye(u.min),max:ye(u.max),minLength:ye(u.minLength),maxLength:ye(u.maxLength),pattern:ye(u.pattern)}:{},name:s,onChange:fe,onBlur:fe,ref:c=>{if(c){Fe(s,u),n=d(a,s);const o=S(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,h=Mr(o),D=n._f.refs||[];if(h?D.find(C=>C===o):o===n._f.ref)return;w(a,s,{_f:{...n._f,...h?{refs:[...D.filter(Re),o,...Array.isArray(d(l,s))?[{}]:[]],ref:{type:o.type,name:s}}:{ref:o}}}),A(s,!1,void 0,o)}else n=d(a,s,{}),n._f&&(n._f.mount=!1),(r.shouldUnregister||u.shouldUnregister)&&!(Sr(v.array,s)&&V.action)&&v.unMount.add(s)}}},ze=()=>r.shouldFocusError&&_e(a,s=>s&&d(t.errors,s),v.mount),Vr=(s,u)=>async n=>{n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let g=W(f);if(_.state.next({isSubmitting:!0}),r.resolver){const{errors:c,values:o}=await U();t.errors=c,g=o}else await X(a);L(t.errors,"root"),q(t.errors)?(_.state.next({errors:{}}),await s(g,n)):(u&&await u({...t.errors},n),ze(),setTimeout(ze)),_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:q(t.errors),submitCount:t.submitCount+1,errors:t.errors})},xr=(s,u={})=>{d(a,s)&&(S(u.defaultValue)?re(s,d(l,s)):(re(s,u.defaultValue),w(l,s,u.defaultValue)),u.keepTouched||L(t.touchedFields,s),u.keepDirty||(L(t.dirtyFields,s),t.isDirty=u.defaultValue?F(s,d(l,s)):F()),u.keepError||(L(t.errors,s),k.isValid&&x()),_.state.next({...t}))},Ge=(s,u={})=>{const n=s||l,g=W(n),c=s&&!q(s)?g:l;if(u.keepDefaultValues||(l=n),!u.keepValues){if(u.keepDirtyValues||z)for(const o of v.mount)d(t.dirtyFields,o)?w(c,o,d(f,o)):re(o,d(c,o));else{if(Pe&&S(s))for(const o of v.mount){const h=d(a,o);if(h&&h._f){const D=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(ve(D)){const C=D.closest("form");if(C){C.reset();break}}}}a={}}f=e.shouldUnregister?u.keepDefaultValues?W(l):{}:g,_.array.next({values:{...c}}),_.values.next({values:{...c}})}v={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!V.mount&&i(),V.mount=!k.isValid||!!u.keepIsValid,V.watch=!!e.shouldUnregister,_.state.next({submitCount:u.keepSubmitCount?t.submitCount:0,isDirty:u.keepDirty?t.isDirty:!!(u.keepDefaultValues&&!te(s,l)),isSubmitted:u.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:u.keepDirtyValues?t.dirtyFields:u.keepDefaultValues&&s?Ue(l,s):{},touchedFields:u.keepTouched?t.touchedFields:{},errors:u.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Je=(s,u)=>Ge(ee(s)?s(f):s,u);return{control:{register:Fe,unregister:be,getFieldState:Ke,_executeSchema:U,_getWatch:E,_getDirty:F,_updateValid:x,_removeUnmounted:p,_updateFieldArray:K,_getFieldArray:N,_reset:Ge,_resetDefaultValues:()=>ee(r.defaultValues)&&r.defaultValues().then(s=>{Je(s,r.resetOptions),_.state.next({isLoading:!1})}),_updateFormState:s=>{t={...t,...s}},_subjects:_,_proxyFormState:k,get _fields(){return a},get _formValues(){return f},get _state(){return V},set _state(s){V=s},get _defaultValues(){return l},get _names(){return v},set _names(s){v=s},get _formState(){return t},set _formState(s){t=s},get _options(){return r},set _options(s){r={...r,...s}}},trigger:de,register:Fe,handleSubmit:Vr,watch:Ar,setValue:re,getValues:He,reset:Je,resetField:xr,clearErrors:_r,unregister:be,setError:vr,setFocus:(s,u={})=>{const n=d(a,s),g=n&&n._f;if(g){const c=g.refs?g.refs[0]:g.ref;c.focus&&(c.focus(),u.shouldSelect&&c.select())}},getFieldState:Ke}}function Jr(e={}){const i=m.useRef(),[r,t]=m.useState({isDirty:!1,isValidating:!1,isLoading:ee(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:ee(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...Wr(e,()=>t(l=>({...l}))),formState:r});const a=i.current.control;return a._options=e,qe({subject:a._subjects.state,next:l=>{Cr(l,a._proxyFormState,a._updateFormState,!0)&&t({...a._formState})}}),m.useEffect(()=>{e.values&&!te(e.values,a._defaultValues)?a._reset(e.values,a._options.resetOptions):a._resetDefaultValues()},[e.values,a]),m.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),i.current.formState=Er(r,a),i.current}export{Gr as a,zr as b,Jr as u};
