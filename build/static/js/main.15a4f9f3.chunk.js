(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t(22)},,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),c=t.n(r),o=t(4),i=t(2);t(15);var m=()=>{return l.a.createElement("div",{className:"login-container"},l.a.createElement("div",{className:"login-box"},l.a.createElement("img",{src:"/logo.png",alt:"Reachinbox Logo",className:"logo"}),l.a.createElement("h1",{className:"login-title"},"Create a new account"),l.a.createElement("button",{className:"google-signup",onClick:()=>{window.location.href="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://your-frontend.com/auth"}},l.a.createElement("img",{src:"/google-icon.png",alt:"Google Icon"})," Sign Up with Google"),l.a.createElement("button",{className:"create-account"},"Create an Account"),l.a.createElement("p",{className:"signin-text"},"Already have an account? ",l.a.createElement("a",{href:"/signin"},"Sign In"))),l.a.createElement("footer",{className:"login-footer"},"\xa9 2023 Reachinbox. All rights reserved."))};var s=()=>{const e=Object(i.o)();return Object(n.useEffect)(()=>{const a=new URLSearchParams(window.location.search),t=a.get("token"),n=a.get("email"),l=a.get("name");t?(localStorage.setItem("bearerToken",t),n&&localStorage.setItem("userEmail",n),l&&localStorage.setItem("userName",l),e("/onebox")):alert("Login failed. No token received.")},[e]),l.a.createElement("div",null,"Logging you in...")};t(16);var u=()=>l.a.createElement("div",{className:"sidebar"},l.a.createElement("div",{className:"sidebar-item"},l.a.createElement("img",{src:"/icons/home-icon.png",alt:"Home"})),l.a.createElement("div",{className:"sidebar-item"},l.a.createElement("img",{src:"/icons/inbox-icon.png",alt:"Inbox"})),l.a.createElement("div",{className:"sidebar-item"},l.a.createElement("img",{src:"/icons/sent-icon.png",alt:"Sent"})),l.a.createElement("div",{className:"sidebar-item"},l.a.createElement("img",{src:"/icons/drafts-icon.png",alt:"Drafts"})),l.a.createElement("div",{className:"sidebar-item"},l.a.createElement("img",{src:"/icons/trash-icon.png",alt:"Trash"})));t(17);var d=e=>{let{onSelectEmail:a}=e;const[t,r]=Object(n.useState)([]),[c,o]=Object(n.useState)(null);return Object(n.useEffect)(()=>{(async()=>{const e=localStorage.getItem("bearerToken");if(e)try{const t=await fetch("https://hiring.reachinbox.xyz/api/v1/onebox/list",{headers:{Authorization:`Bearer ${e}`}}),n=await t.json();200===n.status?r(n.data):o("Failed to fetch emails.")}catch(a){o("An error occurred while fetching emails.")}else alert("You're not logged in!")})()},[]),l.a.createElement("div",{className:"email-list"},c&&l.a.createElement("div",{className:"error"},c),t.map(e=>l.a.createElement("div",{key:e.id,className:"email-item",onClick:()=>a(e)},l.a.createElement("p",{className:"email-subject"},e.subject),l.a.createElement("p",{className:"email-from"},e.fromName," - ",new Date(e.sentAt).toLocaleDateString()))))};t(18);var g=e=>{let{email:a}=e;const[t,r]=Object(n.useState)(null),[c,o]=Object(n.useState)(null);return Object(n.useEffect)(()=>{(async()=>{try{const t=await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/${a.threadId}`,{headers:{Authorization:"Bearer YOUR_BEARER_TOKEN"}}),n=await t.json();200===n.status?r(n.data):o("Failed to fetch email details.")}catch(e){o("An error occurred while fetching email details.")}})()},[a.threadId]),c?l.a.createElement("div",{className:"error"},c):l.a.createElement("div",{className:"email-details"},t?l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,t.subject),l.a.createElement("p",null,l.a.createElement("strong",null,"From:")," ",t.fromName," (",t.fromEmail,")"),l.a.createElement("p",null,l.a.createElement("strong",null,"To:")," ",t.toName?t.toName:"You"," (",t.toEmail,")"),l.a.createElement("p",null,l.a.createElement("strong",null,"Sent At:")," ",new Date(t.sentAt).toLocaleString()),l.a.createElement("div",{className:"email-body",dangerouslySetInnerHTML:{__html:t.body}})):l.a.createElement("p",null,"Loading..."))};t(19);var E=e=>{let{email:a,onSendReply:t}=e;const[r,c]=Object(n.useState)(""),o=localStorage.getItem("userEmail"),i=localStorage.getItem("userName");return l.a.createElement("div",{className:"reply-editor"},l.a.createElement("textarea",{value:r,onChange:e=>c(e.target.value),placeholder:"Write your reply here..."}),l.a.createElement("button",{onClick:async()=>{const e={toName:a.fromName,to:a.fromEmail,from:o,fromName:i,subject:`Re: ${a.subject}`,body:r,inReplyTo:a.messageId,references:[a.messageId]};try{const l=await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${a.threadId}`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("bearerToken")}`,"Content-Type":"application/json"},body:JSON.stringify(e)});200===(await l.json()).status?t():alert("Failed to send reply.")}catch(n){alert("An error occurred while sending the reply.")}}},"Send"))};var h=e=>{let{toggleDarkMode:a}=e;return l.a.createElement("div",{className:"dark-mode-toggle"},l.a.createElement("label",null,"Dark Mode",l.a.createElement("input",{type:"checkbox",onChange:a})))};t(20);var p=()=>{const[e,a]=Object(n.useState)(null),[t,r]=Object(n.useState)(!1);return l.a.createElement("div",{className:`onebox-container ${t?"dark":"light"}`},l.a.createElement(u,null),l.a.createElement("div",{className:"main-content"},l.a.createElement("div",{className:"top-bar"},l.a.createElement("div",{className:"workspace-title"},"Onebox"),l.a.createElement(h,{darkMode:t,setDarkMode:r}),l.a.createElement("div",{className:"workspace-name"},"Tim's Workspace")),l.a.createElement("div",{className:"content"},l.a.createElement(d,{onSelectEmail:e=>{a(e)}}),e?l.a.createElement(l.a.Fragment,null,l.a.createElement(g,{email:e}),l.a.createElement(E,{email:e,onSendReply:()=>{a(null)}})):l.a.createElement("div",{className:"no-email-selected"},l.a.createElement("img",{src:"/inbox-empty.png",alt:"No Emails",className:"empty-inbox-image"}),l.a.createElement("p",null,"It's the beginning of a legendary sales pipeline"),l.a.createElement("p",null,"When you have inbound E-mails you'll see them here")))))};var b=function(){return l.a.createElement(o.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",element:l.a.createElement(m,null)}),l.a.createElement(i.a,{path:"/auth",element:l.a.createElement(s,null)}),l.a.createElement(i.a,{path:"/onebox",element:l.a.createElement(p,null)})))};t(21);c.a.createRoot(document.getElementById("root")).render(l.a.createElement(b,null))}],[[7,1,2]]]);
//# sourceMappingURL=main.15a4f9f3.chunk.js.map