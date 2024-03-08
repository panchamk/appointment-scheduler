(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[338],{3519:function(e,t,n){Promise.resolve().then(n.bind(n,3381))},3381:function(e,t,n){"use strict";n.r(t),n.d(t,{Chat:function(){return z}});var s=n(3827),r=n(1657),a=n(4090),o=n(1014);let i=a.forwardRef((e,t)=>{let{className:n,orientation:a="horizontal",decorative:i=!0,...l}=e;return(0,s.jsx)(o.f,{ref:t,decorative:i,orientation:a,className:(0,r.cn)("shrink-0 bg-border","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",n),...l})});i.displayName=o.f.displayName;var l=n(1557),c=n(5754);function u(e){let{message:t,className:n,...o}=e,{isCopied:i,copyToClipboard:u}=function(e){let{timeout:t=2e3}=e,[n,s]=a.useState(!1);return{isCopied:n,copyToClipboard:e=>{var n;(null===(n=navigator.clipboard)||void 0===n?void 0:n.writeText)&&e&&navigator.clipboard.writeText(e).then(()=>{s(!0),setTimeout(()=>{s(!1)},t)})}}}({timeout:2e3});return(0,s.jsx)("div",{className:(0,r.cn)("flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-10 md:-top-2 md:opacity-0",n),...o,children:(0,s.jsxs)(c.z,{variant:"ghost",size:"icon",onClick:()=>{i||u(t.content)},children:[i?(0,s.jsx)(l.IconCheck,{}):(0,s.jsx)(l.IconCopy,{}),(0,s.jsx)("span",{className:"sr-only",children:"Copy message"})]})})}function d(e){let{message:t,...n}=e;return(0,s.jsxs)("div",{className:(0,r.cn)("group relative mb-4 flex items-start md:-ml-12"),...n,children:[(0,s.jsx)("div",{className:(0,r.cn)("flex size-8 shrink-0 select-none items-center justify-center rounded-md border shadow","user"===t.role?"bg-background":"bg-primary text-primary-foreground"),children:"user"===t.role?(0,s.jsx)(l.IconUser,{}):(0,s.jsx)(l.IconOpenAI,{})}),(0,s.jsxs)("div",{className:"flex-1 px-1 ml-4 space-y-2 overflow-hidden",children:[t.content,(0,s.jsx)(u,{message:t})]})]})}function m(e){let{messages:t}=e;return t.length?(0,s.jsx)("div",{className:"relative mx-auto max-w-2xl px-4",children:t.map((e,n)=>(0,s.jsxs)("div",{children:[(0,s.jsx)(d,{message:e}),n<t.length-1&&(0,s.jsx)(i,{className:"my-4 md:my-8"})]},n))}):null}var p=n(5229),h=n(5322),x=n(7907);function f(e){let{onSubmit:t,input:n,setInput:o,reload:i}=e,{formRef:u,onKeyDown:d}=function(){let e=(0,a.useRef)(null);return{formRef:e,onKeyDown:t=>{if("Enter"===t.key&&!t.shiftKey&&!t.nativeEvent.isComposing){var n;null===(n=e.current)||void 0===n||n.requestSubmit(),t.preventDefault()}}}}(),m=a.useRef(null),f=(0,x.useRouter)();return a.useEffect(()=>{m.current&&m.current.focus()},[]),(0,s.jsx)("form",{onSubmit:async e=>{e.preventDefault(),(null==n?void 0:n.trim())&&(o(""),await t(n))},ref:u,children:(0,s.jsxs)("div",{className:"relative flex flex-col w-full px-8 overflow-hidden max-h-60 grow bg-background sm:rounded-md sm:border sm:px-12",children:[(0,s.jsxs)(h.u,{children:[(0,s.jsx)(h.aJ,{asChild:!0,children:(0,s.jsxs)("button",{onClick:async e=>{e.preventDefault(),console.log("initiating session"),await i(),console.log("initiated session"),f.refresh(),f.push("/")},className:(0,r.cn)((0,c.d)({size:"sm",variant:"outline"}),"absolute left-0 top-4 size-8 rounded-full bg-background p-0 sm:left-4"),children:[(0,s.jsx)(l.IconPlus,{}),(0,s.jsx)("span",{className:"sr-only",children:"New Chat"})]})}),(0,s.jsx)(h._v,{children:"New Chat"})]}),(0,s.jsx)(p.Z,{ref:m,tabIndex:0,onKeyDown:d,rows:1,value:n,onChange:e=>o(e.target.value),placeholder:"Send a message.",spellCheck:!1,className:"min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"}),(0,s.jsx)("div",{className:"absolute right-0 top-4 sm:right-4",children:(0,s.jsxs)(h.u,{children:[(0,s.jsx)(h.aJ,{asChild:!0,children:(0,s.jsxs)(c.z,{type:"submit",size:"icon",disabled:""===n,children:[(0,s.jsx)(l.IconArrowElbow,{}),(0,s.jsx)("span",{className:"sr-only",children:"Send message"})]})}),(0,s.jsx)(h._v,{children:"Send message"})]})})]})})}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,[t,n]=a.useState(!1);return a.useEffect(()=>{let t=()=>{n(window.innerHeight+window.scrollY>=document.body.offsetHeight-e)};return window.addEventListener("scroll",t,{passive:!0}),t(),()=>{window.removeEventListener("scroll",t)}},[e]),t}function b(e){let{className:t,...n}=e,a=g();return(0,s.jsxs)(c.z,{variant:"outline",size:"icon",className:(0,r.cn)("absolute right-4 top-1 z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-2",a?"opacity-0":"opacity-100",t),onClick:()=>window.scrollTo({top:document.body.offsetHeight,behavior:"smooth"}),...n,children:[(0,s.jsx)(l.IconArrowDown,{}),(0,s.jsx)("span",{className:"sr-only",children:"Scroll to bottom"})]})}function j(e){let{className:t,...n}=e;return(0,s.jsx)("p",{className:(0,r.cn)("px-2 text-center text-xs leading-normal text-muted-foreground",t),...n})}function v(e){let{id:t,append:n,isLoading:r,reload:a,input:o,setInput:i}=e;return(0,s.jsxs)("div",{className:"fixed inset-x-0 bottom-0 w-full bg-gradient-to-b from-muted/30 from-0% to-muted/30 to-50% animate-in duration-300 ease-in-out dark:from-background/10 dark:from-10% dark:to-background/80 peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]",children:[(0,s.jsx)(b,{}),(0,s.jsxs)("div",{className:"mx-auto sm:max-w-2xl sm:px-4",children:[(0,s.jsx)("div",{className:"flex items-center justify-center h-12",children:r?(0,s.jsxs)(c.z,{variant:"outline",onClick:()=>stop(),className:"bg-background",children:[(0,s.jsx)(l.IconStop,{className:"mr-2"}),"Stop generating"]}):(0,s.jsx)(s.Fragment,{})}),(0,s.jsxs)("div",{className:"px-4 py-2 space-y-4 border-t shadow-lg bg-background sm:rounded-t-xl sm:border md:py-4",children:[(0,s.jsx)(f,{onSubmit:async e=>{await n({id:t,content:e,role:"user"})},input:o,setInput:i,reload:a}),(0,s.jsx)(j,{className:"hidden sm:block"})]})]})]})}let y=[{heading:"I want to book an appointment for today",message:"I want to book an appointment for today"}];function w(e){let{setInput:t}=e;return(0,s.jsx)("div",{className:"mx-auto max-w-2xl px-4",children:(0,s.jsxs)("div",{className:"rounded-lg border bg-background p-8",children:[(0,s.jsx)("h1",{className:"mb-2 text-lg font-semibold",children:"Welcome to Doctor Archie clinic!"}),(0,s.jsx)("p",{className:"mb-2 leading-normal text-muted-foreground",children:"This is an interactive bot curated to help you book appointments"}),(0,s.jsx)("p",{className:"leading-normal text-muted-foreground",children:"You can start a conversation here or try the following examples:"}),(0,s.jsx)("div",{className:"mt-4 flex flex-col items-start space-y-2",children:y.map((e,n)=>(0,s.jsxs)(c.z,{variant:"link",className:"h-auto p-0 text-base",onClick:()=>t(e.message),children:[(0,s.jsx)(l.IconArrowRight,{className:"mr-2 text-muted-foreground"}),e.heading]},n))})]})})}var N=n(7110);function k(e){let{trackVisibility:t}=e,n=g(),{ref:r,entry:o,inView:i}=(0,N.YD)({trackVisibility:t,delay:100,rootMargin:"0px 0px -150px 0px"});return a.useEffect(()=>{n&&t&&!i&&(null==o||o.target.scrollIntoView({block:"start"}))},[i,o,n,t]),(0,s.jsx)("div",{ref:r,className:"h-px w-full"})}var C=n(7809);async function S(){let e=await fetch("/v1/appointment/init",{method:"POST",body:JSON.stringify({doctorName:"Archie",doctorEmail:"DrArchie@gmail.com",specialization:"dentist"}),headers:{"Content-Type":"application/JSON"}}).catch(e=>{throw e});if(!e.ok)throw Error(await e.text()||"Failed to fetch the chat response.");if(!e.body)throw Error("The response body is empty.");return e.json()}async function I(e){let{session:t,userQuery:n,headers:s,appendMessage:r}=e;if(null===t)throw Error("No active session found");let a=await fetch("/v1/appointment/"+t.doctorId+"/query",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/JSON","X-appt-session-id":t["X-appt-session-id"],...s}}).catch(e=>{throw e});if(!a.ok)throw Error(await a.text()||"Failed to fetch the chat response.");if(!a.body)throw Error("The response body is empty.");let o=new Date,i=await a.json();return r({id:n.id,createdAt:o,...i}),i}async function E(e,t){}function z(e){let{id:t,initialMessages:n,className:o}=e;(0,x.usePathname)();let{messages:i,append:l,isLoading:c,reload:u,stop:d,input:p,setInput:h,sessionRef:f}=function(){let{api:e="/v1/appointment",initialMessages:t,initialInput:n="",onFinish:s,onError:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=(0,a.useRef)(null),i=(0,a.useRef)(null),l=[e,(0,a.useId)()],[c]=(0,a.useState)([]),{data:u,mutate:d}=(0,C.ZP)([l,"messages"],null,{fallbackData:null!=t?t:c}),m=(0,a.useRef)(u||[]),{data:p=!1,mutate:h}=(0,C.ZP)([l,"loading"],null),x=(0,a.useCallback)(()=>Math.random().toString(36).substring(7),[]),[f,g]=(0,a.useState)(n),[b,j]=(0,a.useState)(null),v=(0,a.useCallback)(async()=>(null!=i.current&&await E(i.current.doctorId,{"X-appt-session-id":i.current["X-appt-session-id"]}),i.current=await S(),m.current=[],d([]),i.current),[S]),y=(0,a.useCallback)(async()=>null==i.current?await v():i.current,[v]),w=(0,a.useCallback)(async e=>{try{let t=await y();return m.current=[...m.current,e],h(!0),d(m.current,!1),(await I({session:t,userQuery:{message:e.content,id:x()},appendMessage(e){m.current=[...m.current,e],d(m.current,!1)},onFinish:s})).content}catch(e){if("AbortError"===e.name)return o.current=null,null;r&&e instanceof Error&&r(e),j(e)}finally{h(!1)}},[I]),N=(0,a.useCallback)(()=>{o.current&&(o.current.abort(),o.current=null,i.current=null)},[]),k=(0,a.useCallback)(e=>{e.preventDefault(),f&&(w({content:f}),g(""))},[f,w,x]),z=(0,a.useCallback)(e=>{g(e.target.value)},[]);return{messages:u||[],error:b,append:w,reload:v,stop:N,input:f,setInput:g,handleInputChange:z,handleSubmit:k,sessionRef:i,isLoading:p}}({initialMessages:n,id:t});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:(0,r.cn)("pb-[200px] pt-4 md:pt-10",o),children:i.length?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m,{messages:i}),(0,s.jsx)(k,{trackVisibility:c})]}):(0,s.jsx)(w,{setInput:h})}),(0,s.jsx)(v,{id:t,isLoading:c,stop:d,append:l,reload:u,messages:i,input:p,setInput:h})]})}}},function(e){e.O(0,[97,48,843,971,69,744],function(){return e(e.s=3519)}),_N_E=e.O()}]);