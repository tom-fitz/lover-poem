(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4674:(e,s,o)=>{Promise.resolve().then(o.bind(o,2786))},2786:(e,s,o)=>{"use strict";o.d(s,{PuzzleContent:()=>p});var t=o(5155),n=o(2115),l=o(9006),a=o.n(l);function i(e){let{clue:s,onGuess:o,guess:n,onGuessChange:l,message:i}=e;return(0,t.jsxs)("div",{className:a().tooltip,children:[(0,t.jsx)("p",{className:a().clue,children:s}),(0,t.jsxs)("form",{onSubmit:o,className:a().form,children:[(0,t.jsx)("input",{type:"text",value:n,onChange:e=>l(e.target.value),placeholder:"Enter your answer...",className:a().input}),(0,t.jsx)("button",{type:"submit",className:a().button,children:"Submit"})]}),i&&(0,t.jsx)("p",{className:a().message,children:i})]})}var r=o(5717),u=o.n(r);let d=[{id:1,clue:"In Fourth Wing's pages, Violet's dragon shares a name with this precious stone of purple hue",answer:"amethyst",poemFragment:"Wherever you are, I am always here,",isResolved:!1,position:"full",line:1},{id:2,clue:"Where Montana's peaks touch heaven's door, this mountain range we both adore",answer:"bridger",poemFragment:"There is no need, to live in fear.",isResolved:!1,position:"full",line:2},{id:3,clue:"On page 143, what does Xaden call Violet during their first training session? (2 words)",answer:"little witch",poemFragment:"Though we may seem, apart by miles,",isResolved:!1,position:"full",line:3},{id:4,clue:"The color of Andarna's scales in morning light",answer:"silver",poemFragment:"My heart is filled with many smiles.",isResolved:!1,position:"full",line:4},{id:5,clue:"The name of the mountain pass where Violet first meets her dragon",answer:"basgiath",poemFragment:"I feel you with me, even though,",isResolved:!1,position:"full",line:5},{id:6,clue:"What Montana national park features the Going-to-the-Sun Road?",answer:"glacier",poemFragment:"You feel alone and full of woe.",isResolved:!1,position:"full",line:6},{id:7,clue:"The type of bond that forms between rider and dragon in Chapter 7",answer:"soulbond",poemFragment:"The bond we share is one unique,",isResolved:!1,position:"full",line:7},{id:8,clue:"Find this word on page 256 when Violet describes her connection to her dragon",answer:"unbreakable",poemFragment:"A bond of which we never speak.",isResolved:!1,position:"full",line:8},{id:9,clue:"The famous ski resort near Bozeman where riders would love to soar",answer:"big sky",poemFragment:"Never feel lonely, we are whole,",isResolved:!1,position:"full",line:9},{id:10,clue:"What precious metal creates the binding between dragon and rider?",answer:"gold",poemFragment:"Connected by, heart and soul.",isResolved:!1,position:"full",line:10}],c="poem-puzzle-state";function m(){let e=new Date("2025-03-01T00:00:00").getTime()-new Date().getTime();return{days:Math.floor(e/864e5),hours:Math.floor(e%864e5/36e5),minutes:Math.floor(e%36e5/6e4),seconds:Math.floor(e%6e4/1e3)}}function p(){let[e,s]=(0,n.useState)(!1),[o,l]=(0,n.useState)(d),[a,r]=(0,n.useState)(null),[p,h]=(0,n.useState)(""),[g,_]=(0,n.useState)(""),[f,v]=(0,n.useState)({days:0,hours:0,minutes:0,seconds:0});(0,n.useEffect)(()=>{let e=function(){let e=localStorage.getItem(c);if(!e)return null;try{return JSON.parse(e)}catch(e){return console.error("Failed to parse saved puzzle state:",e),null}}();e&&l(e),s(!0)},[]),(0,n.useEffect)(()=>{e&&function(e){try{localStorage.setItem(c,JSON.stringify(e))}catch(e){console.error("Failed to save puzzle state:",e)}}(o)},[o,e]),(0,n.useEffect)(()=>{if(!e)return;v(m());let s=setInterval(()=>{v(m())},1e3);return()=>clearInterval(s)},[e]);let w=e=>{let s=o.find(s=>s.id===e);s&&!s.isResolved&&(p.toLowerCase().trim()===s.answer.toLowerCase()?(l(s=>s.map(s=>s.id===e?{...s,isResolved:!0}:s)),_("Correct!"),h(""),r(null)):_("Not quite right... Try again!"))},b=o.every(e=>e.isResolved),x=e=>{let s=o.filter(s=>s.line===e);return(0,t.jsx)("div",{className:u().poemLine,children:s.map(e=>(0,t.jsxs)("div",{className:"".concat(u().poemFragment," ").concat(e.isResolved?u().resolved:""),onMouseEnter:()=>!e.isResolved&&r(e.id),onMouseLeave:()=>r(null),children:[e.isResolved?e.poemFragment:"• • • • •",a===e.id&&!e.isResolved&&(0,t.jsx)(i,{clue:e.clue,onGuess:s=>{s.preventDefault(),w(e.id)},guess:p,onGuessChange:h,message:g})]},e.id))},e)};return e?(0,t.jsxs)("div",{className:"flex-1 w-full max-w-5xl mx-auto  bg-[#04080F]/40 backdrop-blur-sm border border-[#DAE3E5]/20 shadow-[0_0_15px_rgba(218,227,229,0.1)] rounded-lg p-4",children:[b&&(0,t.jsxs)("div",{className:u().completionMessage,children:[(0,t.jsx)("p",{children:"You're soooooo smart Lover!!!"}),(0,t.jsxs)("p",{children:["❤️❤️❤️ ",f.days,"d ",f.hours,"h ",f.minutes,"m ",f.seconds,"s ❤️❤️❤️"]})]}),(0,t.jsx)("div",{className:"h-full flex flex-col justify-center",children:[1,2,3,4,5,6,7,8,9,10].map(e=>x(e))}),(0,t.jsx)("div",{className:"flex flex-col justify-center",children:(0,t.jsx)("button",{onClick:()=>{l(d),r(null),h(""),_("")},className:u().resetButton,children:"Reset Puzzle"})})]}):(0,t.jsx)("div",{className:"flex-1 w-full max-w-5xl mx-auto  bg-[#04080F]/40 backdrop-blur-sm border border-[#DAE3E5]/20 shadow-[0_0_15px_rgba(218,227,229,0.1)] rounded-lg p-4",children:(0,t.jsx)("div",{className:"h-full flex flex-col justify-center items-center",children:(0,t.jsx)("div",{className:"animate-pulse",children:"Loading..."})})})}console.log({answers:{1:"Awwwe you're so cute",2:"you figured out my riddle :)",3:"You're still going to need to",4:"figure out the rest of the puzzle"}})},9006:e=>{e.exports={tooltip:"Tooltip_tooltip__ccHQw",clue:"Tooltip_clue__kuRvG",form:"Tooltip_form__U49KV",input:"Tooltip_input__NCJBf",button:"Tooltip_button__Akee2",message:"Tooltip_message__Ztb0y"}},5717:e=>{e.exports={main:"page_main__nw1Wk",puzzleContainer:"page_puzzleContainer__vO_dw",poemSection:"page_poemSection__JyIBt",revealedPoem:"page_revealedPoem__hYqpH",clueSection:"page_clueSection__PYuHp",clue:"page_clue__dHDiM",guessForm:"page_guessForm__vPcky",guessInput:"page_guessInput__mVdjX",submitButton:"page_submitButton__NQB5P",message:"page_message__ymXyd",poemLine:"page_poemLine__BCXId",poemFragment:"page_poemFragment__UaI_I",resolved:"page_resolved__BZsKX",completionMessage:"page_completionMessage__FoOoN",fadeIn:"page_fadeIn__jjObi",resetButton:"page_resetButton__uvLeL"}}},e=>{var s=s=>e(e.s=s);e.O(0,[414,441,517,358],()=>s(4674)),_N_E=e.O()}]);