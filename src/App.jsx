import { useEffect } from 'react';
import './styles.css';

export default function App() {
  useEffect(() => {
    (function(){
    const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
    const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    const WA='919360409252', MAIL='saran2002raj@gmail.com';
    
    /* ---------- counters ---------- */
    function countTo(el,target,suffix,dur){
      if(reduce){el.textContent=target+suffix;return}
      const t0=performance.now();
      el.textContent='0'+suffix;
      (function f(n){const p=Math.min(1,(n-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=Math.round(target*e)+suffix;if(p<1)requestAnimationFrame(f)})(t0);
    }
    setTimeout(()=>countTo($('#heroCount'),300,'+',1800),450);
    if('IntersectionObserver' in window){
      const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){$$('b',e.target).forEach(b=>countTo(b,+b.dataset.n,b.dataset.s,1600));io.disconnect()}})},{threshold:.5});
      io.observe($('#stats'));
    }
    
    /* ---------- hero timecode + parallax ---------- */
    const tc=$('#tc');
    if(!reduce){
      const t0=performance.now(); let last=-1;
      (function loop(n){const f=Math.floor((n-t0)/1000*24);if(f!==last){last=f;const ff=f%24,s=Math.floor(f/24)%60,m=Math.floor(f/1440)%60,h=Math.floor(f/86400);tc.textContent=[h,m,s,ff].map(v=>String(v).padStart(2,'0')).join(':')}requestAnimationFrame(loop)})(t0);
      const stage=$('#stage');
      addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;const r=stage.getBoundingClientRect();const x=(e.clientX-(r.left+r.width/2))/innerWidth*2,y=(e.clientY-(r.top+r.height/2))/innerHeight*2;stage.style.setProperty('--px',x.toFixed(3));stage.style.setProperty('--py',y.toFixed(3))},{passive:true});
    }
    
    /* ---------- map ---------- */
    const MAP={"cols":200,"rows":76,"latTop":78,"latBot":-58,"hex":"0000000060021f07ffffffc0000c00000000000c0000000000000000001f8fff001fffff80000000001c0007ffe000f6000000000001f04d958007ffff000000000030007ffffce030000000000003bfcd3fe007fffe00000000006037fffffff43e0000003ff8141ff587fc03fffe000001f8000077fffffffffff81080fffffff0c7ec5e03ffe0000007ffccfffffffffffffffffff8bffffffffff01fc3ff0110001ffed7ffffffffffffffffff10ffffffffffecdf01f801f0003f7efffffffffffffffffffe00ffffffffff820600f0000000fcffffffffffffffffffffff00ffffffffff00780070000001fcffffffffffffffffffe5f0003e01fffffe00798000000001bc7ffffffffffffffff2c600000a003fffff807fc00000006058ffffffffffffffff801e000020001ffffff07fe00000006030ffffffffffffffff003c000000002ffffffcfff0000001b07fffffffffffffffffc0180000000007fffffefff80000017bffffffffffffffffffd0100000000007fffffffe6800000007ffffffffffffffffffd0000000000000ffffffff1e0000007fffffffffffffffffffc0000000000001ffffffff820000001fffff7f7fffffffffff90000000000001fffffffe800000001feff17cffffffffffff00000000000001fffffff800000001fc37f03c7ffffffffffa30000000000001fffffff000000001f819f39e3ffffffffff020000000000001ffffffe000000001f0019ffe3ffffffffd2020000000000000ffffffc000000001f0109ffe3ffffffffc3040000000000000ffffffc0000000000fc000fffffffffffe30c00000000000003fffff8000000000ffc000fffffffffffe07000000000000001ffffe0000000001fff181fffffffffffe080000000000000017fffe0000000001fffdfffffffffffffe00000000000000000bfe020000000003fffffffeffffffffff000000000000000005fc02000000000ffffffeff2ffffffffe000000000000000000fc00000000000ffffffe7f827ffffffd0000000000000000007c00000000001fffffff7ff83ffffff80000000000000000007c00800000001fffffffbff81ff9ffc00000000000040000007c20180000001fffffff9ff00ff0fe400000000000000000001fe0400000001fffffff9fe007c0fe0100000000000000000007e0000000001fffffffcf800780bf01000000000000000000007c000000003fffffffee0007803f81000000000000000000001c000000001ffffffff80003801f80000000000000000000000c3c0000000ffffffff300030007008000000000000000000001bfc0000007ffffffff000180120400000000000000000000007ff0000007ffffffff000080100040000000000000000000007ffc000001f1fffffe000000080c00000000000000000000007fff000000007ffffc00000028180000000000000000000000ffff000000007ffff80000001c3c0000000000000000000001ffff000000007ffff00000001c780000000000000000000001ffffe00000007fffe00000000c7b0600000000000000000001fffffc0000003fffc0000000061b2bf0800000000000000001ffffff0000001fffc0000000020200f8800000000000000000ffffff8000001fffc000000001e0007c000000000000000000ffffff8000001fffc0000000000540360400000000000000007fffff0000000fffc0000000000000010000000000000000007ffffe0000001fffe0000000000007100000000000000000003ffffc0000001fffe100000000002e100000000000000000001ffffc0000001fffc700000000007f180000000000000000000ffffc0000001fff8e0000000000fff800020000000000000007fffc0000001fff060000000001fffc00000000000000000007fff80000000fff0e000000000ffffe00000000000000000007fff00000000fff0e000000001fffff00000000000000000007ffc00000000ffe0c000000001fffff80000000000000000007ff800000000ffc00000000001fffff8000000000000000000fff8000000007fc00000000000fffff8000000000000000000fff0000000003f800000000000fffff8000000000000000000ffe0000000003f000000000000fe3ff8000000000000000000ffc0000000003c000000000000f817f0000000000000000000ff0000000000000000000000000007f0008000000000000001ff0000000000000000000000000003e0004000000000000001f8000000000000000000000000000000004000000000000001f8000000000000000000000000000080004000000000000000f0000000000000000000000000000040010000000000000001f0000000000000000000000000000000060000000000000003e0000000000000000000000000000000040000000000000003e0000000000000000000000000000000000000000000000003c0000000000000000000000000000000000000000000000003c3000000000000000000000000000000000000000000000001c00000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000000000000000000000000"};
    const cells=[];for(let r=0;r<MAP.rows;r++){const row=[];for(let c=0;c<MAP.cols;c++){const i=r*MAP.cols+c;row.push((parseInt(MAP.hex[i>>2],16)>>(3-(i&3)))&1)}cells.push(row)}
    const cv=$('#mapCanvas'),inner=$('#mapInner');
    function drawMap(){
      const w=inner.clientWidth,h=inner.clientHeight,dpr=Math.min(2,devicePixelRatio||1);
      cv.width=w*dpr;cv.height=h*dpr;const g=cv.getContext('2d');g.scale(dpr,dpr);
      const cw=w/MAP.cols,ch=h/MAP.rows,r=Math.min(cw,ch)*.36;
      g.fillStyle='rgba(160,200,208,.30)';
      for(let y=0;y<MAP.rows;y++)for(let x=0;x<MAP.cols;x++)if(cells[y][x]){g.beginPath();g.arc((x+.5)*cw,(y+.5)*ch,r,0,6.2832);g.fill()}
    }
    const PL=[
     {id:'sg',code:'SG',name:'Singapore',n:'3 Content Creators',lat:1.3,lon:104,cls:'dn',pd:'0s'},
     {id:'my',code:'MY',name:'Malaysia',n:'2 Content Creators',lat:4.4,lon:101.2,cls:'up',pd:'-.6s'},
     {id:'hr',code:'HR',name:'Croatia , Europe',n:'1 Client',lat:45.1,lon:15.2,cls:'',pd:'-1.1s'},
     {id:'uk',code:'UK',name:'United Kingdom',n:'1 Client',lat:54,lon:-2,cls:'left',pd:'-1.6s'},
     {id:'in',code:'IN',name:'India',n:'6 Content Creators',lat:22,lon:78.5,cls:'up',pd:'-.3s'}
    ];
    const BASE={lat:10.8,lon:78.7};
    const px=(lon)=>(lon+180)/360, py=(lat)=>(MAP.latTop-lat)/(MAP.latTop-MAP.latBot);
    const svg=$('#mapSvg'),pins=$('#pins'),regions=$('#regions');
    let arcs='';
    PL.forEach(p=>{
      const bx=px(BASE.lon)*1000,by=py(BASE.lat)*378,tx=px(p.lon)*1000,ty=py(p.lat)*378;
      const d=Math.hypot(tx-bx,ty-by),cx=(bx+tx)/2,cy=Math.min(by,ty)-d*.32;
      arcs+=`<path class="arc" id="arc-${p.id}" d="M${bx.toFixed(1)} ${by.toFixed(1)}Q${cx.toFixed(1)} ${cy.toFixed(1)} ${tx.toFixed(1)} ${ty.toFixed(1)}"/>`;
      const b=document.createElement('button');b.type='button';b.className='pin '+p.cls;b.id='pin-'+p.id;
      b.style.cssText=`--x:${(px(p.lon)*100).toFixed(2)}%;--y:${(py(p.lat)*100).toFixed(2)}%;--pd:${p.pd}`;
      b.setAttribute('aria-label',`${p.name}: ${p.n}`);
      b.innerHTML=`<span class="lab"><em>${p.code}</em>${p.name} <small>${p.n}</small></span>`;
      pins.appendChild(b);
      const r=document.createElement('button');r.type='button';r.className='region';r.id='reg-'+p.id;
      r.innerHTML=`<em>${p.code}</em><b>${p.name}</b><span>${p.n}</span>`;regions.appendChild(r);
      [b,r].forEach(el=>{el.addEventListener('pointerenter',()=>hl(p.id));el.addEventListener('pointerleave',()=>hl(null));el.addEventListener('focus',()=>hl(p.id));el.addEventListener('blur',()=>hl(null));el.addEventListener('click',()=>hl(p.id))});
    });
    svg.innerHTML=arcs;
    const bpin=document.createElement('span');bpin.className='pin base';bpin.style.cssText=`--x:${(px(BASE.lon)*100).toFixed(2)}%;--y:${(py(BASE.lat)*100).toFixed(2)}%;pointer-events:none`;bpin.setAttribute('aria-hidden','true');pins.appendChild(bpin);
    function hl(id){PL.forEach(p=>{const on=p.id===id;$('#pin-'+p.id).classList.toggle('active',on);$('#reg-'+p.id).classList.toggle('active',on);$('#arc-'+p.id).classList.toggle('on',on)})}
    drawMap();addEventListener('resize',drawMap);
    
    /* ---------- work data ---------- */
    const SAMPLE_TAGS=true; /* set false to hide the "Sample" chips once real videos are in */
    /* To use a real video: add src:'videos/your-file.mp4' (and optionally poster) to an item. */
    const WORK=[
     {id:'r1',fmt:'v',title:'wordsofsuba ',client:'Content creator · Singapore',soft:'CapCut',style:'Fast-cut viral short',dur:28,art:0,pal:0,cap:['HOOK','FIRST'],src:'videos/suba.mp4'},
     {id:'r2',fmt:'v',title:'soni_ya_offl ',client:'Content creator  · Singapore',soft:'Premiere Pro, CapCut',style:'Captioned talking-head clip',dur:41,art:3,pal:3,cap:['CLIP','THAT'],src:'videos/soniya.mp4'},
    //  {id:'r3',fmt:'v',title:'withshylu',client:'Content creator · Malaysia',soft:'DaVinci Resolve, Premiere Pro',style:'Cinematic colour grade',dur:19,art:2,pal:2,cap:['NEW','DROP'],src:'videos/shylu.mp4'},
     {id:'r4',fmt:'v',title:'balahari279',client:'Client · Croatia',soft:'Premiere Pro, DaVinci Resolve',style:'Cinematic travel montage',dur:34,art:1,pal:5,cap:['COAST','LINE'],src:'videos/bala.mp4'},
    //  {id:'r5',fmt:'v',title:'Story Time Reel',client:'Content creator · India',soft:'CapCut, AI tools',style:'Retention-focused storytelling',dur:52,art:4,pal:4,cap:['STORY','TIME'],src:''},
    //  {id:'r6',fmt:'v',title:'Motion Text Short',client:'Content creator · Singapore',soft:'Premiere Pro, AI tools',style:'Kinetic typography',dur:23,art:5,pal:1,cap:['SAY','IT','LOUD'],src:''},
    //  {id:'h1',fmt:'h',title:'Brand Commercial',client:'Client · United Kingdom',soft:'Premiere Pro, DaVinci Resolve, Photoshop',style:'Commercial, graded and sound-designed',dur:72,art:2,pal:3,cap:['BRAND','STORY'],src:''},
    //  {id:'h2',fmt:'h',title:'Creator Long-Form',client:'Content creator · Singapore',soft:'Premiere Pro, Photoshop',style:'Long-form storytelling with custom thumbnail',dur:520,art:0,pal:0,cap:['THE 30-SECOND','HOOK'],src:''},
    //  {id:'h3',fmt:'h',title:'Travel Film',client:'Client · Croatia / Europe',soft:'DaVinci Resolve',style:'Cinematic travel film',dur:125,art:1,pal:5,cap:['ADRIATIC','HOURS'],src:''},
    //  {id:'h4',fmt:'h',title:'Explainer Episode',client:'Content creator · India',soft:'Premiere Pro, Photoshop, AI tools',style:'Explainer with motion graphics',dur:270,art:4,pal:4,cap:['HOW IT','REALLY WORKS'],src:''}
    ];
    const PAL=[['#04293a','#19e3ff','#8af3ff'],['#04271f','#1de9a6','#b8ffe8'],['#2b0f1c','#ff4d8d','#ffb36b'],['#150f33','#7c5cff','#19e3ff'],['#2a1d04','#ffc53d','#ff6b3d'],['#0a2333','#4df2c8','#2aa8ff']];
    const fmtT=s=>{s=Math.floor(s);return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')};
    
    function paint(ctx,w,h,t,it){
      const [a,b,c]=PAL[it.pal],u=Math.min(w,h)/100;
      ctx.globalAlpha=1;
      let g=ctx.createLinearGradient(0,0,w*.7,h);g.addColorStop(0,a);g.addColorStop(1,'#0d0d0d');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
      switch(it.art){
        case 0:{const n=it.fmt==='v'?14:34,bw=w/n;for(let i=0;i<n;i++){const v=.2+.8*Math.abs(Math.sin(t*3.1+i*.7)*Math.cos(t*1.7+i*1.3));ctx.globalAlpha=.9;ctx.fillStyle=i%3?b:c;ctx.fillRect(i*bw+bw*.14,h-h*.5*v,bw*.72,h*.5*v)}break}
        case 1:{for(let k=0;k<4;k++){const x=w*(.5+.38*Math.sin(t*.8+k*1.7)),y=h*(.5+.32*Math.cos(t*.6+k*2.1)),r=Math.min(w,h)*(.3+.07*k);const rg=ctx.createRadialGradient(x,y,0,x,y,r);rg.addColorStop(0,k%2?c:b);rg.addColorStop(1,'rgba(0,0,0,0)');ctx.globalAlpha=.6;ctx.fillStyle=rg;ctx.fillRect(0,0,w,h)}break}
        case 2:{const x=w*(.5+.38*Math.sin(t*.9));ctx.globalAlpha=.9;const cg=ctx.createLinearGradient(0,0,w,h);cg.addColorStop(0,b);cg.addColorStop(1,c);ctx.fillStyle=cg;ctx.fillRect(0,0,w,h);ctx.fillStyle='#2a2e2f';ctx.fillRect(0,0,x,h);const gg=ctx.createLinearGradient(0,h,w,0);gg.addColorStop(0,'#101213');gg.addColorStop(1,'#6b7477');ctx.globalAlpha=1;ctx.fillStyle=gg;ctx.fillRect(0,0,x,h);ctx.fillStyle='#fff';ctx.fillRect(x-u*.4,0,u*.8,h);break}
        case 3:{ctx.save();ctx.translate(w/2,h/2);ctx.rotate(-.5);const sw=u*14;for(let i=-14;i<14;i++){const o=((t*u*10)%(sw*2));ctx.globalAlpha=i%2?.35:.12;ctx.fillStyle=i%2?b:c;ctx.fillRect(i*sw+o-w,-h,sw,h*2)}ctx.restore();break}
        case 4:{ctx.lineWidth=u*1.6;for(let k=0;k<7;k++){const p=((t*.28+k/7)%1),r=p*Math.max(w,h)*.8;ctx.globalAlpha=(1-p)*.9;ctx.strokeStyle=k%2?c:b;ctx.beginPath();ctx.arc(w*.5,h*.46,r,0,6.2832);ctx.stroke()}break}
        case 5:{for(let k=0;k<6;k++){const y=((k/6+t*.12)%1)*(h+u*30)-u*15;ctx.globalAlpha=.28;ctx.fillStyle=k%2?b:c;ctx.save();ctx.translate(0,y);ctx.transform(1,-.35,0,1,0,0);ctx.fillRect(-w*.3,0,w*1.6,u*(it.fmt==='v'?9:7));ctx.restore()}break}
      }
      ctx.globalAlpha=1;
      const v=ctx.createLinearGradient(0,h*.35,0,h);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(0,0,0,.72)');ctx.fillStyle=v;ctx.fillRect(0,0,w,h);
      /* caption, designed like a thumbnail overlay */
      ctx.textBaseline='alphabetic';ctx.shadowColor='rgba(0,0,0,.7)';ctx.shadowBlur=u*2;
      const lines=it.cap;let fs=it.fmt==='v'?u*(lines.length>2?15:19):u*20;
      const maxW=it.fmt==='v'?w*.86:w*.56;
      ctx.font=`${fs}px Anton,Impact,sans-serif`;
      const wide=Math.max(...lines.map(l=>ctx.measureText(l).width));
      if(wide>maxW){fs=fs*maxW/wide;ctx.font=`${fs}px Anton,Impact,sans-serif`}ctx.textAlign=it.fmt==='v'?'center':'left';
      const x0=it.fmt==='v'?w/2:w*.06,total=lines.length*fs*.98,yb=it.fmt==='v'?h*.78-total/2+fs:h*.5-total/2+fs*.92;
      lines.forEach((l,i)=>{ctx.fillStyle=i===lines.length-1?c:'#fff';ctx.fillText(l,x0,yb+i*fs*.98,w*.88)});
      ctx.shadowBlur=0;
      if(it.fmt==='h'){ctx.fillStyle=c;ctx.fillRect(w*.06,h*.5+total/2+u*3,w*.18,u*1.4)}
    }
    
    const fontReady=document.fonts&&document.fonts.load?document.fonts.load('40px Anton').catch(()=>{}):Promise.resolve();
    const live=new Map();
    function stopLoop(cv){const s=live.get(cv);if(s){cancelAnimationFrame(s.raf);live.delete(cv)}}
    function loop(cv,it){
      stopLoop(cv);if(reduce)return;const ctx=cv.getContext('2d'),t0=performance.now(),s={};
      (function f(n){paint(ctx,cv.width,cv.height,(n-t0)/1000+.6,it);s.raf=requestAnimationFrame(f)})(t0);live.set(cv,s);
    }
    function poster(cv,it){paint(cv.getContext('2d'),cv.width,cv.height,.6,it)}
    
    const SVGPLAY='<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1.5v13l11-6.5z"/></svg>';
    function card(it){
      const b=document.createElement('button');b.type='button';b.className='card '+it.fmt;b.dataset.id=it.id;
      b.setAttribute('aria-label','Open video: '+it.title);
      const media=it.src?`<video muted loop playsinline preload="metadata" src="${it.src}" ${it.poster?`poster="${it.poster}"`:''}></video>`:`<canvas width="${it.fmt==='v'?360:800}" height="${it.fmt==='v'?640:450}"></canvas>`;
      b.innerHTML=`<div class="frame">${media}${it.src?'':`<span class="chip smp">Sample</span>`}<span class="chip dur">${fmtT(it.dur)}</span><span class="play">${SVGPLAY}</span></div><div class="cmeta"><b>${it.title}</b><span>${it.client}</span></div>`;
      const cv=$('canvas',b),vid=$('video',b);
      b.addEventListener('pointerenter',e=>{if(e.pointerType!=='mouse')return;cv?loop(cv,it):vid.play().catch(()=>{})});
      b.addEventListener('pointerleave',()=>{if(cv){stopLoop(cv);poster(cv,it)}else{vid.pause()}});
      b.addEventListener('click',()=>openModal(it,b));
      it._card=b;return b;
    }
    WORK.forEach(it=>(it.fmt==='v'?$('#gridV'):$('#gridH')).appendChild(card(it)));
    if(!SAMPLE_TAGS)$('#workWrap').classList.add('noSample');
    fontReady.then(()=>WORK.forEach(it=>{const cv=$('canvas',it._card);if(cv)poster(cv,it)}));
    
    /* filter tabs */
    const tabs=$$('.tab');
    function setFilter(f){tabs.forEach(t=>t.setAttribute('aria-selected',String(t.dataset.f===f)));$('#gv').hidden=f==='h';$('#gh').hidden=f==='v'}
    tabs.forEach(t=>{t.addEventListener('click',()=>setFilter(t.dataset.f));t.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){const i=tabs.indexOf(t),n=tabs[(i+(e.key==='ArrowRight'?1:tabs.length-1))%tabs.length];n.focus();n.click()}})});
    
    /* ---------- lightbox ---------- */
    const modal=$('#modal'),sheet=$('#sheet'),screen=$('#screen'),seek=$('#seek'),timeEl=$('#time'),pp=$('#pp'),ppIcon=$('#ppIcon');
    const ICON_PLAY='<path d="M3 1.5v13l11-6.5z"/>',ICON_PAUSE='<path d="M3 1.5h3.5v13H3zM9.5 1.5H13v13H9.5z"/>';
    let cur=null,lastFocus=null,st={t:0,playing:false,raf:0,last:0,cv:null,vid:null};
    function setIcon(){ppIcon.innerHTML=st.playing?ICON_PAUSE:ICON_PLAY;pp.setAttribute('aria-label',st.playing?'Pause':'Play')}
    function ui(){const d=cur.dur,t=st.vid?st.vid.currentTime:st.t;seek.value=Math.round(t/d*1000);timeEl.textContent=fmtT(t)+' / '+fmtT(d);const big=$('.bigplay',screen);if(big)big.hidden=st.playing||t>0.05&&!st.ended}
    function frame(n){
      if(!st.playing)return;
      if(st.vid){ui();st.raf=requestAnimationFrame(frame);return}
      const dt=(n-st.last)/1000;st.last=n;st.t=Math.min(cur.dur,st.t+dt);
      paint(st.cv.getContext('2d'),st.cv.width,st.cv.height,st.t+.6,cur);
      if(st.t>=cur.dur){st.playing=false;st.ended=true;setIcon()}
      ui();if(st.playing)st.raf=requestAnimationFrame(frame);
    }
    function play(){if(st.ended){st.t=0;st.ended=false;if(st.vid)st.vid.currentTime=0}st.playing=true;st.last=performance.now();setIcon();if(st.vid)st.vid.play().catch(()=>{});cancelAnimationFrame(st.raf);st.raf=requestAnimationFrame(frame);ui()}
    function pause(){st.playing=false;if(st.vid)st.vid.pause();cancelAnimationFrame(st.raf);setIcon();ui()}
    function openModal(it,from){
      cur=it;lastFocus=from;st={t:0,playing:false,raf:0,last:0,cv:null,vid:null,ended:false};
      sheet.className='sheet glow-card '+it.fmt;
      screen.innerHTML=it.src?`<video playsinline src="${it.src}" ${it.poster?`poster="${it.poster}"`:''}></video>`:`<canvas width="${it.fmt==='v'?540:1280}" height="${it.fmt==='v'?960:720}"></canvas>`;
      screen.insertAdjacentHTML('beforeend',`<button type="button" class="bigplay" aria-label="Play video"><span>${SVGPLAY}</span></button>`);
      st.cv=$('canvas',screen);st.vid=$('video',screen);
      if(st.cv)paint(st.cv.getContext('2d'),st.cv.width,st.cv.height,.6,it);
      $('#mTitle').textContent=it.title;$('#mClient').textContent=it.client;$('#mSoft').textContent=it.soft;$('#mStyle').textContent=it.style;
      $('#mFmt').textContent=(it.fmt==='v'?'Vertical 9:16 · Reels / Shorts':'Horizontal 16:9 · HD')+' · '+fmtT(it.dur);
      $('#mNote').textContent='Sample slot. Details are placeholders until the real video is added.';
      $('#mNote').hidden=Boolean(it.src)||!SAMPLE_TAGS;
      $('.bigplay',screen).addEventListener('click',play);
      setIcon();ui();modal.hidden=false;document.body.style.overflow='hidden';
      $('.close',modal).focus();
    }
    function closeModal(){pause();modal.hidden=true;document.body.style.overflow='';screen.innerHTML='';if(lastFocus)lastFocus.focus()}
    pp.addEventListener('click',()=>st.playing?pause():play());
    seek.addEventListener('input',()=>{const t=seek.value/1000*cur.dur;st.ended=false;if(st.vid)st.vid.currentTime=t;else{st.t=t;paint(st.cv.getContext('2d'),st.cv.width,st.cv.height,t+.6,cur)}ui()});
    modal.addEventListener('click',e=>{if(e.target.closest('[data-close]'))closeModal()});
    addEventListener('keydown',e=>{
      if(modal.hidden)return;
      if(e.key==='Escape')closeModal();
      if(e.key===' '&&e.target===document.body){e.preventDefault();st.playing?pause():play()}
      if(e.key==='Tab'){const f=$$('button,input,[href]',sheet).filter(x=>!x.hidden&&!x.closest('[hidden]'));if(!f.length)return;const a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}
    });
    
    /* ---------- copy + toast ---------- */
    const toast=$('#toast');let tt;
    function say(m){toast.textContent=m;toast.hidden=false;clearTimeout(tt);tt=setTimeout(()=>toast.hidden=true,2200)}
    async function copyText(text,label){
      try{await navigator.clipboard.writeText(text);say((label||'Copied')+' copied')}
      catch(e){const pre=$('#briefText');if(label==='Brief'&&pre){const r=document.createRange();r.selectNodeContents(pre);const s=getSelection();s.removeAllRanges();s.addRange(r)}say('Select the text and copy it')}
    }
    $$('[data-copy]').forEach(b=>b.addEventListener('click',()=>copyText(b.dataset.copy,b.dataset.copy.includes('@')?'Email':'Number')));
    
    /* ---------- contact form ---------- */
    const form=$('#form');
    function bad(id,msg){const f=$('#f-'+id),e=$('#e-'+id);f.classList.toggle('bad',!!msg);e.textContent=msg||''}
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const v=n=>form.elements[n].value.trim();
      let ok=true;
      bad('name',v('name')?'':'Enter your name.');if(!v('name'))ok=false;
      const em=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v('email'));bad('email',em?'':'Enter a valid email address.');if(!em)ok=false;
      bad('msg',v('msg')?'':'Tell Saran a little about the project.');if(!v('msg'))ok=false;
      if(!ok){const first=$('.fld.bad input,.fld.bad textarea');if(first)first.focus();return}
      const text=`Hi Saran, I'm ${v('name')} (${v('email')}).\n\nProject type: ${v('type')}\nVideo count: ${v('count')||'Not sure yet'}\nBudget: ${v('budget')}\n\n${v('msg')}`;
      $('#briefText').textContent=text;
      $('#sendWa').href=`https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
      $('#sendMail').href=`mailto:${MAIL}?subject=${encodeURIComponent('Video editing project: '+v('type'))}&body=${encodeURIComponent(text)}`;
      const br=$('#brief');br.hidden=false;br.scrollIntoView({behavior:reduce?'auto':'smooth',block:'nearest'});
    });
    $('#copyBrief').addEventListener('click',()=>copyText($('#briefText').textContent,'Brief'));
    ['name','email','msg'].forEach(n=>$('#'+n).addEventListener('input',()=>bad(n,'')));
    })();
  }, []);

  return (
    <>
      {"\n"}
      <title>
      {"Saran Video Editor"}
      </title>
      {"\n"}
      <link rel={"preconnect"} href={"https://fonts.googleapis.com"} />
      {"\n"}
      <link rel={"preconnect"} href={"https://fonts.gstatic.com"} crossOrigin="" />
      {"\n"}
      <link rel={"stylesheet"} href={"https://fonts.googleapis.com/css2?family=Anton&family=JetBrains+Mono:wght@400;500;700&family=Manrope:wght@400;500;600;700;800&display=swap"} />
      {"\n"}
      <style>
      {"\n/* Layout concept: an edit-suite page. Portrait stage with layered type up top, a timeline ruler as the seam between sections, dot-matrix globe for reach, then a player-style gallery. Single committed dark look. */\n:root{\n  --bg:#0D0D0D;\n  --surface:#141717;\n  --surface-2:#1B2021;\n  --line:rgba(190,235,240,.10);\n  --fg:#F2F7F7;\n  --muted:#90A0A3;\n  --accent:#19E3FF;\n  --accent-ink:#021317;\n  --accent-dim:rgba(25,227,255,.14);\n  --accent-glow:rgba(25,227,255,.45);\n  --font-display:\"Anton\",\"Impact\",\"Arial Narrow\",sans-serif;\n  --font-body:\"Manrope\",\"Segoe UI\",system-ui,sans-serif;\n  --font-mono:\"JetBrains Mono\",ui-monospace,\"SFMono-Regular\",Menlo,monospace;\n  color-scheme:dark;\n  background:var(--bg);\n}\n*{box-sizing:border-box}\n[hidden]{display:none!important}\nhtml{scroll-behavior:smooth}\nbody{margin:0;background:var(--bg);color:var(--fg);font-family:var(--font-body);font-size:16px;line-height:1.6;overflow-x:clip;-webkit-font-smoothing:antialiased}\nimg{max-width:100%;display:block}\na{color:inherit}\nbutton,input,select,textarea{font:inherit;color:inherit}\n:focus-visible{outline:2px solid var(--accent);outline-offset:3px}\n.wrap{width:min(1200px,100%);margin-inline:auto;padding-inline:clamp(16px,4vw,40px)}\n.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\nsection{scroll-margin-top:72px}\n\n/* type */\n.eyebrow{font-family:var(--font-mono);font-size:.74rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);display:flex;align-items:center;gap:.7rem}\n.eyebrow::before{content:\"\";width:28px;height:2px;background:var(--accent);box-shadow:0 0 12px var(--accent-glow)}\nh2{font-family:var(--font-display);font-weight:400;text-transform:uppercase;letter-spacing:.01em;line-height:.98;font-size:clamp(2.2rem,5vw,3.9rem);margin:.6rem 0 0;text-wrap:balance}\n.lead{color:var(--muted);max-width:60ch;margin:.9rem 0 0}\n.sec{padding-block:clamp(56px,9vw,110px)}\n.sec-head{display:flex;flex-direction:column;margin-bottom:clamp(28px,4vw,48px)}\n\n/* buttons */\n.btn{display:inline-flex;align-items:center;justify-content:center;gap:.6rem;min-height:50px;padding:0 1.6rem;border-radius:999px;font-weight:800;font-size:.95rem;letter-spacing:.02em;text-decoration:none;border:1.5px solid transparent;cursor:pointer;transition:transform .2s,box-shadow .2s,background .2s,border-color .2s}\n.btn-primary{background:var(--accent);color:var(--accent-ink);box-shadow:0 0 0 0 var(--accent-glow),0 8px 30px -8px var(--accent-glow)}\n.btn-primary:hover{transform:translateY(-2px);box-shadow:0 0 0 6px var(--accent-dim),0 12px 36px -8px var(--accent-glow)}\n.btn-ghost{border-color:rgba(242,247,247,.28);background:transparent}\n.btn-ghost:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-2px)}\n\n/* nav */\n.nav{position:sticky;top:env(safe-area-inset-top,0px);z-index:50;background:rgba(13,13,13,.78);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid var(--line)}\n.nav .wrap{display:flex;align-items:center;justify-content:space-between;gap:1rem;height:64px}\n.logo{font-family:var(--font-display);font-size:1.5rem;letter-spacing:.06em;text-decoration:none;display:flex;align-items:center;gap:.55rem}\n.logo img{width:42px;height:42px;object-fit:cover;border-radius:50%}\n.nav ul{display:flex;gap:1.8rem;list-style:none;margin:0;padding:0}\n.nav ul a{font-size:.88rem;font-weight:600;color:var(--muted);text-decoration:none;transition:color .2s}\n.nav ul a:hover{color:var(--accent)}\n.nav .btn{min-height:42px;padding:0 1.2rem;font-size:.85rem}\n@media(max-width:760px){.nav ul{display:none}}\n\n/* hero */\n.hero{position:relative;overflow:clip;padding-top:clamp(28px,5vw,60px)}\n.hero::before{content:\"\";position:absolute;inset:0;background:radial-gradient(60% 50% at 78% 38%,rgba(25,227,255,.10),transparent 70%),linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px) 0 0/100% 56px;pointer-events:none;mask-image:linear-gradient(#000 60%,transparent)}\n.hero-grid{position:relative;display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:clamp(24px,4vw,56px);align-items:center}\n.rec{font-family:var(--font-mono);font-size:.74rem;letter-spacing:.14em;color:var(--muted);display:flex;align-items:center;gap:.7rem;flex-wrap:wrap;margin-bottom:1.4rem}\n.rec b{color:#ff4d5e;display:inline-flex;align-items:center;gap:.4rem;font-weight:700}\n.rec b::before{content:\"\";width:9px;height:9px;border-radius:50%;background:#ff4d5e;animation:blink 1.2s steps(2,start) infinite}\n.rec .tc{color:var(--accent);min-width:11ch}\n@keyframes blink{50%{opacity:.15}}\nh1{font-family:var(--font-display);font-weight:400;text-transform:uppercase;line-height:.95;letter-spacing:.005em;margin:0;font-size:clamp(2.6rem,6.2vw,5.4rem);text-wrap:balance}\nh1 .name{color:var(--accent);text-shadow:0 0 40px var(--accent-glow)}\nh1 .bar{color:rgba(242,247,247,.35);margin-inline:.12em}\nh1 .rest{display:block;margin-top:.12em}\n.sub{font-size:clamp(1.02rem,1.5vw,1.2rem);color:#C4D0D2;max-width:46ch;margin:1.4rem 0 0}\n.cta{display:flex;flex-wrap:wrap;gap:.9rem;margin-top:2rem}\n\n.stage{container-type:inline-size;position:relative;width:min(100%,540px);margin-inline:auto;aspect-ratio:.9;--px:0;--py:0}\n.glow{position:absolute;left:50%;top:44%;width:96%;aspect-ratio:1;translate:-50% -50%;border-radius:50%;background:radial-gradient(circle,rgba(25,227,255,.55) 0%,rgba(25,227,255,.18) 38%,transparent 68%);filter:blur(6px);animation:breathe 5s ease-in-out infinite}\n@keyframes breathe{50%{scale:1.07;opacity:.85}}\n.bgtype{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-start;padding-top:2cqi;font-family:var(--font-display);text-transform:uppercase;line-height:.84;font-size:34cqi;letter-spacing:.005em;user-select:none;translate:calc(var(--px)*-6px) calc(var(--py)*-4px);transition:translate .25s ease-out}\n.bgtype span{display:block;white-space:nowrap}\n.bgtype .l1{color:rgba(242,247,247,.10);-webkit-text-stroke:1.5px rgba(25,227,255,.55)}\n.bgtype .l2,.bgtype .l3{color:transparent;-webkit-text-stroke:1.5px rgba(242,247,247,.30)}\n.bgtype .l3{font-size:.86em}\n.portrait{position:absolute;left:50%;bottom:0;width:78%;height:auto;translate:calc(-50% + var(--px)*4px) calc(var(--py)*2px);transition:translate .25s ease-out;filter:drop-shadow(0 0 14px rgba(25,227,255,.35)) drop-shadow(0 18px 30px rgba(0,0,0,.6));-webkit-mask-image:linear-gradient(#000 88%,transparent);mask-image:linear-gradient(#000 88%,transparent)}\n.badge{position:absolute;display:flex;flex-direction:column;align-items:center;gap:1.2cqi;translate:calc(var(--px)*var(--d)*10px) calc(var(--py)*var(--d)*8px);transition:translate .25s ease-out;animation:float 6s ease-in-out infinite;animation-delay:var(--delay,0s);z-index:3}\n.badge i{display:grid;place-items:center;width:14.5cqi;aspect-ratio:1;border-radius:26%;font-style:normal;font-family:var(--font-display);font-size:6.2cqi;letter-spacing:.02em;color:var(--accent);background:linear-gradient(145deg,#1d2a2d,#0c1214);border:1.5px solid rgba(25,227,255,.55);box-shadow:0 0 0 1px rgba(0,0,0,.6),0 0 22px rgba(25,227,255,.4),inset 0 2px 0 rgba(255,255,255,.14),0 14px 24px -6px rgba(0,0,0,.8);text-shadow:0 0 14px var(--accent)}\n.badge span{font-family:var(--font-mono);font-size:max(9px,2.4cqi);font-weight:700;letter-spacing:.06em;text-transform:uppercase;white-space:nowrap;padding:.35em .8em;border-radius:99px;background:rgba(13,13,13,.8);border:1px solid var(--line);color:#D6E4E6}\n@keyframes float{0%,100%{transform:perspective(500px) rotateY(-14deg) rotateX(6deg) translateY(0)}50%{transform:perspective(500px) rotateY(14deg) rotateX(-4deg) translateY(-2.4cqi)}}\n.b1{left:-3cqi;top:10cqi}.b2{right:-3cqi;top:18cqi}.b3{left:-5cqi;top:47cqi}.b4{right:-2cqi;top:52cqi}.b5{right:11cqi;bottom:6cqi}\n.counter{position:absolute;left:1cqi;bottom:3cqi;z-index:4;padding:3cqi 4.2cqi 3cqi 4cqi;border-radius:4.5cqi;background:rgba(13,13,13,.82);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1.5px solid rgba(25,227,255,.6);box-shadow:0 0 30px rgba(25,227,255,.35),inset 0 0 24px rgba(25,227,255,.08);animation:aura 2.4s ease-out infinite}\n@keyframes aura{0%{box-shadow:0 0 0 0 rgba(25,227,255,.55),0 0 30px rgba(25,227,255,.35)}100%{box-shadow:0 0 0 4cqi rgba(25,227,255,0),0 0 30px rgba(25,227,255,.35)}}\n.counter b{display:block;font-family:var(--font-display);font-weight:400;font-size:12.5cqi;line-height:.95;color:var(--accent);text-shadow:0 0 22px var(--accent-glow);font-variant-numeric:tabular-nums}\n.counter small{display:block;font-family:var(--font-mono);font-size:max(9px,2.3cqi);letter-spacing:.14em;text-transform:uppercase;color:#C9D6D8;margin-top:1.2cqi}\n\n.ruler{position:relative;height:34px;margin-top:clamp(24px,4vw,48px);border-top:1px solid var(--line);background:repeating-linear-gradient(90deg,rgba(190,235,240,.28) 0 1px,transparent 1px 12px) 0 0/100% 8px no-repeat,repeating-linear-gradient(90deg,rgba(190,235,240,.5) 0 1px,transparent 1px 120px) 0 0/100% 16px no-repeat}\n.ruler::after{content:\"\";position:absolute;left:62%;top:0;bottom:-1px;width:2px;background:var(--accent);box-shadow:0 0 14px var(--accent)}\n.ruler::before{content:\"\";position:absolute;left:calc(62% - 6px);top:-1px;border:6px solid transparent;border-top:9px solid var(--accent)}\n\n@media(max-width:900px){\n  .hero-grid{grid-template-columns:minmax(0,1fr)}\n  .stage{width:min(100%,470px)}\n}\n\n/* about */\n.about{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:clamp(28px,5vw,72px);align-items:center}\n.glow-card{position:relative;border-radius:22px;background:var(--surface);box-shadow:0 0 60px -10px var(--accent-dim),0 0 0 1px rgba(0,0,0,.4)}\n.glow-card::before{content:\"\";position:absolute;inset:0;border-radius:inherit;padding:1.5px;background:linear-gradient(140deg,var(--accent),rgba(25,227,255,.08) 38%,rgba(25,227,255,.08) 62%,var(--accent));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0);pointer-events:none}\n.slot{padding:clamp(16px,2.4vw,24px);aspect-ratio:5/4;display:flex;flex-direction:column;gap:14px}\n.slot-top{display:flex;justify-content:space-between;font-family:var(--font-mono);font-size:.68rem;letter-spacing:.12em;color:var(--muted);text-transform:uppercase;gap:1rem}\n.slot-top b{color:var(--accent);font-weight:500}\n.tl{flex:1;min-height:0;display:grid;grid-template-rows:repeat(5,1fr);gap:6px;position:relative;padding-left:34px}\n.tl .row{position:relative;border-radius:5px;background:rgba(255,255,255,.035)}\n.tl .row::before{content:attr(data-t);position:absolute;left:-34px;top:50%;translate:0 -50%;font-family:var(--font-mono);font-size:.6rem;color:var(--muted)}\n.clip{position:absolute;top:2px;bottom:2px;border-radius:4px;background:linear-gradient(180deg,rgba(25,227,255,.9),rgba(25,227,255,.55));box-shadow:0 0 12px rgba(25,227,255,.25)}\n.clip.g{background:linear-gradient(180deg,#27e0a7,#149c78)}\n.clip.d{background:linear-gradient(180deg,#5b6b70,#3a4649)}\n.clip.w{background:repeating-linear-gradient(90deg,#27e0a7 0 2px,transparent 2px 5px);opacity:.75;top:25%;bottom:25%}\n.playhead{position:absolute;top:-6px;bottom:-6px;left:34px;width:2px;background:#fff;box-shadow:0 0 12px #fff;animation:sweep 9s linear infinite}\n.playhead::before{content:\"\";position:absolute;top:0;left:-5px;border:6px solid transparent;border-top:8px solid #fff}\n@keyframes sweep{from{left:34px}to{left:100%}}\n.slot-cap{font-size:.78rem;color:var(--muted)}\n.story h2{margin-bottom:1.1rem}\n.story p{color:#C4D0D2;margin:0 0 1rem;max-width:58ch}\n.pillars{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:1.8rem}\n.pillar{padding:16px 18px;border-radius:14px;background:var(--surface);border:1px solid var(--line)}\n.pillar h3{margin:0 0 .3rem;font-size:.95rem;display:flex;align-items:center;gap:.55rem}\n.pillar h3::before{content:\"\";width:8px;height:8px;border-radius:2px;background:var(--accent);box-shadow:0 0 10px var(--accent)}\n.pillar p{margin:0;font-size:.88rem;color:var(--muted)}\n@media(max-width:860px){.about{grid-template-columns:minmax(0,1fr)}.pillars{grid-template-columns:minmax(0,1fr)}}\n\n/* toolkit */\n.kit{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:1px;background:var(--line);border:1px solid var(--line);border-radius:20px;overflow:hidden}\n.tool{background:var(--surface);padding:26px 22px;display:flex;flex-direction:column;gap:.9rem;transition:background .25s}\n.tool:hover{background:var(--surface-2)}\n.tool i{display:grid;place-items:center;width:56px;height:56px;border-radius:15px;font-style:normal;font-family:var(--font-display);font-size:1.5rem;color:var(--accent);border:1.5px solid rgba(25,227,255,.5);background:linear-gradient(145deg,#1d2a2d,#0c1214);box-shadow:0 0 18px rgba(25,227,255,.25),inset 0 1px 0 rgba(255,255,255,.12);text-shadow:0 0 12px var(--accent)}\n.tool h3{margin:0;font-size:1.02rem;line-height:1.25}\n.tool p{margin:0;font-size:.85rem;color:var(--muted)}\n@media(max-width:1000px){.kit{grid-template-columns:repeat(2,minmax(0,1fr))}.tool:last-child{grid-column:1/-1}}\n@media(max-width:520px){.kit{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:1px;border-radius:16px}.tool{flex:0 0 72%;scroll-snap-align:start}}\n\n/* map */\n.mapbox{position:relative;border-radius:22px;background:radial-gradient(80% 90% at 70% 40%,#10191b,#0b0e0f);border:1px solid var(--line);padding:clamp(10px,2vw,24px);overflow:hidden}\n.mapbox .inner{position:relative;aspect-ratio:1000/378}\n.mapbox canvas,.mapbox svg{position:absolute;inset:0;width:100%;height:100%}\n.arc{fill:none;stroke:var(--accent);stroke-width:1.4;stroke-dasharray:3 6;opacity:.55;animation:flow 1.6s linear infinite}\n.arc.on{opacity:1;stroke-width:2;filter:drop-shadow(0 0 4px var(--accent))}\n@keyframes flow{to{stroke-dashoffset:-18}}\n.pin{position:absolute;left:var(--x);top:var(--y);translate:-50% -50%;width:34px;height:34px;border:0;background:none;padding:0;cursor:pointer;z-index:2}\n.pin::before,.pin::after{content:\"\";position:absolute;left:50%;top:50%;translate:-50% -50%;border-radius:50%}\n.pin::before{width:9px;height:9px;background:var(--accent);box-shadow:0 0 14px 3px var(--accent-glow)}\n.pin::after{width:9px;height:9px;border:1.5px solid var(--accent);animation:ping 2.2s ease-out infinite;animation-delay:var(--pd,0s)}\n@keyframes ping{to{width:34px;height:34px;opacity:0}}\n.pin.base::before{background:#fff;box-shadow:0 0 14px 3px rgba(255,255,255,.5)}\n.pin.base::after{border-color:#fff}\n.pin .lab{position:absolute;left:var(--lx,26px);top:var(--ly,50%);translate:var(--tx,0) -50%;display:flex;align-items:center;gap:.5rem;white-space:nowrap;padding:.3rem .65rem .3rem .3rem;border-radius:99px;background:rgba(13,13,13,.85);border:1px solid rgba(25,227,255,.4);box-shadow:0 0 16px rgba(25,227,255,.2);font-size:.72rem;font-weight:700;transition:border-color .2s,box-shadow .2s}\n.pin .lab em{font-style:normal;font-family:var(--font-mono);font-size:.62rem;color:var(--accent-ink);background:var(--accent);border-radius:99px;padding:.18rem .45rem;letter-spacing:.06em}\n.pin .lab small{font-size:.66rem;font-weight:500;color:var(--muted)}\n.pin.active .lab,.pin:focus-visible .lab{border-color:var(--accent);box-shadow:0 0 22px rgba(25,227,255,.55)}\n.pin.left .lab{--lx:auto;right:26px;--tx:0}\n.pin.below .lab{--lx:50%;--ly:30px;--tx:-50%}\n.pin.up .lab{--ly:-14px}\n.pin.dn .lab{--ly:calc(50% + 16px)}\n@media(max-width:700px){.pin .lab{display:none}}\n.regions{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px;margin-top:20px}\n.region{display:flex;flex-direction:column;gap:.35rem;text-align:left;padding:16px;border-radius:14px;background:var(--surface);border:1px solid var(--line);cursor:pointer;transition:border-color .2s,box-shadow .2s,transform .2s}\n.region:hover,.region.active{border-color:var(--accent);box-shadow:0 0 24px -4px var(--accent-dim);transform:translateY(-2px)}\n.region em{align-self:flex-start;font-style:normal;font-family:var(--font-mono);font-size:.68rem;font-weight:700;letter-spacing:.08em;padding:.22rem .55rem;border-radius:99px;background:var(--accent-dim);color:var(--accent);border:1px solid rgba(25,227,255,.4)}\n.region b{font-size:.98rem}\n.region span{font-size:.82rem;color:var(--muted)}\n.mapnote{margin:22px 0 0;text-align:center;color:var(--muted)}\n@media(max-width:900px){.regions{grid-template-columns:repeat(2,minmax(0,1fr))}.region:last-child{grid-column:1/-1}}\n\n/* work */\n.tabs{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:clamp(24px,3vw,36px)}\n.tab{min-height:46px;padding:0 1.25rem;border-radius:999px;border:1.5px solid var(--line);background:var(--surface);color:var(--muted);font-weight:700;font-size:.88rem;cursor:pointer;transition:all .2s}\n.tab:hover{color:var(--fg);border-color:rgba(25,227,255,.5)}\n.tab[aria-selected=\"true\"]{background:var(--accent);color:var(--accent-ink);border-color:var(--accent);box-shadow:0 0 24px -4px var(--accent-glow)}\n.group+.group{margin-top:clamp(36px,5vw,64px)}\n.group-h{display:flex;align-items:baseline;justify-content:space-between;gap:1rem;flex-wrap:wrap;margin-bottom:18px}\n.group-h h3{margin:0;font-family:var(--font-display);font-weight:400;text-transform:uppercase;font-size:1.6rem;letter-spacing:.02em}\n.group-h span{font-family:var(--font-mono);font-size:.72rem;color:var(--muted);letter-spacing:.1em;text-transform:uppercase}\n.grid-v{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(8px,2vw,22px)}\n.grid-h{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(14px,2vw,24px)}\n@media(max-width:700px){.grid-h{grid-template-columns:minmax(0,1fr)}}\n.card{display:flex;flex-direction:column;gap:12px;text-align:left;background:none;border:0;padding:0;cursor:pointer;min-width:0}\n.frame{position:relative;border-radius:14px;overflow:hidden;border:1px solid var(--line);background:#000;transition:border-color .25s,box-shadow .25s,transform .25s}\n.card.v .frame{aspect-ratio:9/16}\n.card.h .frame{aspect-ratio:16/9}\n.card:hover .frame,.card:focus-visible .frame{border-color:var(--accent);box-shadow:0 0 34px -6px var(--accent-glow);transform:translateY(-3px)}\n.frame canvas,.frame video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}\n.play{position:absolute;left:50%;top:50%;translate:-50% -50%;width:clamp(38px,22%,64px);aspect-ratio:1;border-radius:50%;display:grid;place-items:center;background:rgba(13,13,13,.55);border:1.5px solid rgba(255,255,255,.8);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);transition:all .25s}\n.card.h .play{width:clamp(48px,11%,68px);left:auto;right:6%;translate:0 -50%}\n.play svg{width:42%;margin-left:6%;fill:#fff}\n.card:hover .play{background:var(--accent);border-color:var(--accent);scale:1.08}\n.card:hover .play svg{fill:var(--accent-ink)}\n.chip{position:absolute;font-family:var(--font-mono);font-size:.62rem;letter-spacing:.1em;padding:.22rem .5rem;border-radius:5px;background:rgba(13,13,13,.78);text-transform:uppercase}\n.chip.dur{right:8px;bottom:8px;color:#fff}\n.chip.smp{left:8px;top:8px;color:var(--accent);border:1px solid rgba(25,227,255,.4)}\n.noSample .chip.smp{display:none}\n@media(max-width:700px){.card.v .chip{font-size:.55rem;padding:.15rem .35rem}.card.v .chip.dur{right:5px;bottom:5px}.card.v .chip.smp{left:5px;top:5px}}\n.cmeta b{display:block;font-size:.98rem;line-height:1.3}\n.cmeta span{display:block;font-size:.8rem;color:var(--muted);margin-top:2px}\n@media(max-width:700px){.card.v .cmeta b{font-size:.78rem}.card.v .cmeta span{font-size:.68rem}}\n\n/* modal */\n.modal{position:fixed;inset:0;z-index:100;display:grid;place-items:center;padding:max(16px,env(safe-area-inset-top,0px)) 16px max(16px,env(safe-area-inset-bottom,0px))}\n.scrim{position:absolute;inset:0;background:rgba(5,7,8,.86);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}\n.sheet{position:relative;max-height:100%;overflow:auto;display:grid;gap:clamp(16px,3vw,32px);padding:clamp(14px,2.4vw,26px);width:min(1080px,100%);grid-template-columns:minmax(0,1.7fr) minmax(0,.8fr);background:var(--surface);animation:pop .22s ease-out}\n.sheet.v{width:min(820px,100%);grid-template-columns:auto minmax(0,1fr)}\n@keyframes pop{from{opacity:0;transform:scale(.97) translateY(10px)}}\n.close{position:absolute;right:12px;top:12px;z-index:3;width:42px;height:42px;border-radius:50%;border:1px solid var(--line);background:rgba(13,13,13,.8);font-size:1.3rem;line-height:1;cursor:pointer}\n.close:hover{border-color:var(--accent);color:var(--accent)}\n.screen{position:relative;border-radius:14px;overflow:hidden;background:#000;border:1px solid var(--line)}\n.sheet.h .screen{aspect-ratio:16/9}\n.sheet.v .screen{aspect-ratio:9/16;height:min(70vh,620px);max-width:100%}\n.screen canvas,.screen video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}\n.bigplay{position:absolute;inset:0;display:grid;place-items:center;background:rgba(0,0,0,.25);border:0;cursor:pointer}\n.bigplay span{width:76px;height:76px;border-radius:50%;display:grid;place-items:center;background:var(--accent);box-shadow:0 0 40px var(--accent-glow)}\n.bigplay svg{width:30px;margin-left:5px;fill:var(--accent-ink)}\n.ctl{display:flex;align-items:center;gap:12px;margin-top:12px;font-family:var(--font-mono);font-size:.75rem;color:var(--muted)}\n.ctl button{flex:none;width:42px;height:42px;border-radius:50%;border:1.5px solid var(--accent);background:none;color:var(--accent);cursor:pointer;display:grid;place-items:center}\n.ctl button svg{width:16px;fill:currentColor}\n.ctl input[type=range]{flex:1;min-width:0;accent-color:var(--accent);height:24px}\n.ctl .t{min-width:11ch;text-align:right;font-variant-numeric:tabular-nums}\n.pcol{min-width:0}\n.mmeta{min-width:0;display:flex;flex-direction:column;justify-content:center;gap:1rem;padding-right:6px}\n.mmeta h3{font-family:var(--font-display);font-weight:400;text-transform:uppercase;font-size:clamp(1.6rem,3vw,2.3rem);line-height:1;margin:0;padding-right:36px}\n.mmeta dl{margin:0;display:grid;gap:12px}\n.mmeta dt{font-family:var(--font-mono);font-size:.66rem;letter-spacing:.14em;text-transform:uppercase;color:var(--accent)}\n.mmeta dd{margin:2px 0 0;font-size:.95rem}\n.mmeta .note{font-size:.78rem;color:var(--muted);padding-top:12px;border-top:1px solid var(--line)}\n@media(max-width:760px){.sheet,.sheet.v{grid-template-columns:minmax(0,1fr)}.sheet.v .screen{height:min(58vh,520px);margin-inline:auto}.sheet.v .pcol{justify-self:center;max-width:100%}.sheet{padding-top:60px}}\n\n/* stats */\n.stats{background:linear-gradient(180deg,#0f1415,#0b0e0f);border-block:1px solid var(--line)}\n.stats .wrap{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));padding-block:clamp(40px,6vw,72px)}\n.stat{padding:0 clamp(8px,3vw,40px);text-align:center;border-left:1px solid var(--line)}\n.stat:first-child{border-left:0}\n.stat b{display:block;font-family:var(--font-display);font-weight:400;font-size:clamp(2.6rem,8vw,6.2rem);line-height:1;color:var(--accent);text-shadow:0 0 36px var(--accent-glow);font-variant-numeric:tabular-nums}\n.stat span{display:block;margin-top:.5rem;font-family:var(--font-mono);font-size:clamp(.62rem,1.6vw,.8rem);letter-spacing:.14em;text-transform:uppercase;color:#C4D0D2}\n\n/* contact */\n.contact-top{display:flex;align-items:center;gap:clamp(16px,3vw,28px);flex-wrap:wrap}\n.avatar{flex:none;width:clamp(84px,12vw,124px);aspect-ratio:1;border-radius:50%;overflow:hidden;background:radial-gradient(circle at 50% 35%,#1d4f58,#0c1214 72%);border:2px solid var(--accent);box-shadow:0 0 0 6px var(--accent-dim),0 0 40px var(--accent-glow)}\n.avatar img{width:100%;height:100%;object-fit:cover;object-position:50% 20%}\n.contact-top h2{margin:0;flex:1 1 320px}\n.quick{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-top:clamp(28px,4vw,44px)}\n.qa{display:flex;flex-direction:column;gap:.7rem;padding:20px;border-radius:16px;background:var(--surface);border:1px solid var(--line);min-width:0}\n.qa .k{font-family:var(--font-mono);font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:var(--accent)}\n.qa .v{font-weight:800;font-size:1.05rem;overflow-wrap:anywhere;user-select:all}\n.qa .row{display:flex;gap:10px;flex-wrap:wrap;margin-top:auto}\n.qa .btn{min-height:42px;padding:0 1.1rem;font-size:.84rem}\n.copy{min-height:42px;padding:0 1rem;border-radius:99px;border:1.5px solid var(--line);background:none;font-weight:700;font-size:.84rem;cursor:pointer}\n.copy:hover{border-color:var(--accent);color:var(--accent)}\n@media(max-width:860px){.quick{grid-template-columns:minmax(0,1fr)}}\n.formcard{margin-top:clamp(24px,3vw,36px);padding:clamp(18px,3vw,36px)}\n.formcard h3{font-family:var(--font-display);font-weight:400;font-size:1.7rem;text-transform:uppercase;margin:0 0 4px}\n.formcard>p{margin:0 0 22px;color:var(--muted);font-size:.9rem}\n.fgrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}\n.fld{display:flex;flex-direction:column;gap:6px;min-width:0}\n.fld.full{grid-column:1/-1}\n.fld label{font-family:var(--font-mono);font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}\n.fld input,.fld select,.fld textarea{width:100%;min-height:50px;padding:.75rem 1rem;border-radius:12px;border:1.5px solid var(--line);background:#0d1112;outline:0;transition:border-color .2s,box-shadow .2s}\n.fld textarea{min-height:130px;resize:vertical}\n.fld input:focus,.fld select:focus,.fld textarea:focus{border-color:var(--accent);box-shadow:0 0 0 4px var(--accent-dim)}\n.fld input::placeholder,.fld textarea::placeholder{color:#5d6b6e}\n.fld.bad input,.fld.bad textarea{border-color:#ff6b7a}\n.err{font-size:.78rem;color:#ff8d99;min-height:0}\n@media(max-width:640px){.fgrid{grid-template-columns:minmax(0,1fr)}}\n.formfoot{display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-top:22px}\n.formfoot small{color:var(--muted);font-size:.8rem;max-width:44ch}\n.brief{margin-top:24px;padding:20px;border-radius:16px;border:1px solid rgba(25,227,255,.45);background:rgba(25,227,255,.05)}\n.brief h4{margin:0 0 4px;font-size:1.05rem}\n.brief p{margin:0 0 14px;color:var(--muted);font-size:.88rem}\n.brief pre{margin:0 0 16px;padding:14px;border-radius:10px;background:#0a0d0e;border:1px solid var(--line);font-family:var(--font-mono);font-size:.78rem;white-space:pre-wrap;overflow-wrap:anywhere;color:#C9D6D8;user-select:all}\n.brief .row{display:flex;gap:10px;flex-wrap:wrap}\nfooter{border-top:1px solid var(--line);padding-block:30px;color:var(--muted);font-size:.86rem}\nfooter .wrap{display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap}\n.toast{position:fixed;left:50%;bottom:calc(24px + env(safe-area-inset-bottom,0px));translate:-50% 0;background:var(--accent);color:var(--accent-ink);font-weight:800;font-size:.85rem;padding:.7rem 1.2rem;border-radius:99px;z-index:200;box-shadow:0 10px 30px -6px var(--accent-glow)}\n\n@media(prefers-reduced-motion:reduce){\n  *,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}\n}\n"}
      </style>
      {"\n\n"}
      <header className={"nav"}>
      {"\n  "}
      <div className={"wrap"}>
      {"\n    "}
      <a className={"logo"} href={"#top"} aria-label={"Saran, home"}>
      <img src={"images/raj.png"} alt="" />
      {"SARAN"}
      </a>
      {"\n    "}
      <nav aria-label={"Main"}>
      <ul>
      {"\n      "}
      <li>
      <a href={"#work"}>
      {"Work"}
      </a>
      </li>
      <li>
      <a href={"#about"}>
      {"About"}
      </a>
      </li>
      <li>
      <a href={"#toolkit"}>
      {"Toolkit"}
      </a>
      </li>
      <li>
      <a href={"#reach"}>
      {"Reach"}
      </a>
      </li>
      <li>
      <a href={"#contact"}>
      {"Contact"}
      </a>
      </li>
      {"\n    "}
      </ul>
      </nav>
      {"\n    "}
      <a className={"btn btn-primary"} href={"https://wa.me/919360409252?text=Hi%20Saran%2C%20I%27d%20like%20to%20talk%20about%20a%20video%20edit."} target={"_blank"} rel={"noopener"}>
      {"Hire Me"}
      </a>
      {"\n  "}
      </div>
      {"\n"}
      </header>
      {"\n\n"}
      <main id={"top"}>
      {"\n"}
      {"\n"}
      <section className={"hero"} aria-labelledby={"h1"}>
      {"\n  "}
      <div className={"wrap"}>
      {"\n    "}
      <div className={"hero-grid"}>
      {"\n      "}
      <div>
      {"\n        "}
      <div className={"rec"} aria-hidden={"true"}>
      <b>
      {"REC"}
      </b>
      <span className={"tc"} id={"tc"}>
      {"00:00:00:00"}
      </span>
      <span>
      {"24 FPS"}
      </span>
      <span>
      {"9:16 / 16:9"}
      </span>
      </div>
      {"\n        "}
      <h1 id={"h1"}>
      <span className={"name"}>
      {"Saran"}
      </span>
      <span className={"bar"}>
      {"|"}
      </span>
      <span className={"rest"}>
      {"High-Impact Video Editor & Visual Storyteller"}
      </span>
      </h1>
      {"\n        "}
      <p className={"sub"}>
      {"Transforming raw footage into viral reels, commercial edits, and engaging content for creators worldwide."}
      </p>
      {"\n        "}
      <div className={"cta"}>
      {"\n          "}
      <a className={"btn btn-primary"} href={"#work"}>
      {"View Work\n            "}
      <svg width={"16"} height={"16"} viewbox={"0 0 16 16"} fill={"none"} stroke={"currentColor"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
      <path d={"M8 2v11M3 8.5 8 13.5l5-5"} />
      </svg>
      </a>
      {"\n          "}
      <a className={"btn btn-ghost"} href={"https://wa.me/919360409252?text=Hi%20Saran%2C%20I%27d%20like%20to%20talk%20about%20a%20video%20edit."} target={"_blank"} rel={"noopener"}>
      {"Hire Me\n            "}
      <svg width={"16"} height={"16"} viewbox={"0 0 16 16"} fill={"none"} stroke={"currentColor"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
      <path d={"M3 13 13 3M5 3h8v8"} />
      </svg>
      </a>
      {"\n        "}
      </div>
      {"\n      "}
      </div>
      {"\n\n      "}
      <div className={"stage"} id={"stage"}>
      {"\n        "}
      <div className={"glow"}>
      </div>
      {"\n        "}
      <div className={"bgtype"} aria-hidden={"true"}>
      <span className={"l1"}>
      {"Saran"}
      </span>
      <span className={"l2"}>
      {"Video"}
      </span>
      <span className={"l3"}>
      {"Editor"}
      </span>
      </div>
      {"\n        "}
      {"\n        "}
      <img className={"portrait"} src={"/images/hero-portrait.webp"} alt={"Saran, video editor, in a navy polo shirt"} width={"760"} height={"925"} fetchpriority={"high"} />
      {"\n        "}
      <div className={"badge b1"} style={{"--d": "1.2", "--delay": "0s"}}>
      <i>
      {"Pr"}
      </i>
      <span>
      {"Premiere Pro"}
      </span>
      </div>
      {"\n        "}
      <div className={"badge b2"} style={{"--d": "1.8", "--delay": "-1.4s"}}>
      <i>
      {"Dv"}
      </i>
      <span>
      {"DaVinci Resolve"}
      </span>
      </div>
      {"\n        "}
      <div className={"badge b3"} style={{"--d": "1.5", "--delay": "-2.8s"}}>
      <i>
      {"Cc"}
      </i>
      <span>
      {"CapCut"}
      </span>
      </div>
      {"\n        "}
      <div className={"badge b4"} style={{"--d": "2", "--delay": "-4.1s"}}>
      <i>
      {"Ps"}
      </i>
      <span>
      {"Photoshop"}
      </span>
      </div>
      {"\n        "}
      <div className={"badge b5"} style={{"--d": "1.3", "--delay": "-5s"}}>
      <i>
      {"AI"}
      </i>
      <span>
      {"AI Tools"}
      </span>
      </div>
      {"\n        "}
      <div className={"counter"} aria-label={"300 plus videos edited"}>
      <b id={"heroCount"}>
      {"300+"}
      </b>
      <small>
      {"Videos Edited"}
      </small>
      </div>
      {"\n      "}
      </div>
      {"\n    "}
      </div>
      {"\n  "}
      </div>
      {"\n  "}
      <div className={"wrap"}>
      <div className={"ruler"} aria-hidden={"true"}>
      </div>
      </div>
      {"\n"}
      </section>
      {"\n\n"}
      {"\n"}
      <section className={"sec"} id={"about"} aria-labelledby={"about-h"}>
      {"\n  "}
      <div className={"wrap about"}>
      {"\n    "}
      <div className={"glow-card slot"} role={"img"} aria-label={"Placeholder for a behind-the-scenes workstation photo, shown as an editing timeline"}>
      {"\n      "}
      <div className={"slot-top"}>
      <span>
      {"Workstation"}
      </span>
      <b>
      {"Slot · replace with BTS photo"}
      </b>
      </div>
      {"\n      "}
      <div className={"tl"}>
      {"\n        "}
      <div className={"row"} data-t={"V3"}>
      <span className={"clip d"} style={{"left": "6%", "width": "22%"}}>
      </span>
      <span className={"clip"} style={{"left": "52%", "width": "30%"}}>
      </span>
      </div>
      {"\n        "}
      <div className={"row"} data-t={"V2"}>
      <span className={"clip g"} style={{"left": "0", "width": "34%"}}>
      </span>
      <span className={"clip d"} style={{"left": "38%", "width": "18%"}}>
      </span>
      <span className={"clip g"} style={{"left": "60%", "width": "36%"}}>
      </span>
      </div>
      {"\n        "}
      <div className={"row"} data-t={"V1"}>
      <span className={"clip"} style={{"left": "0", "width": "24%"}}>
      </span>
      <span className={"clip"} style={{"left": "26%", "width": "40%"}}>
      </span>
      <span className={"clip"} style={{"left": "68%", "width": "28%"}}>
      </span>
      </div>
      {"\n        "}
      <div className={"row"} data-t={"A1"}>
      <span className={"clip w"} style={{"left": "0", "width": "96%"}}>
      </span>
      </div>
      {"\n        "}
      <div className={"row"} data-t={"A2"}>
      <span className={"clip w"} style={{"left": "12%", "width": "70%", "opacity": ".45"}}>
      </span>
      </div>
      {"\n        "}
      <span className={"playhead"}>
      </span>
      {"\n      "}
      </div>
      {"\n      "}
      <div className={"slot-cap"}>
      {"Premiere Pro timeline · DaVinci grade · CapCut cut-downs"}
      </div>
      {"\n    "}
      </div>
      {"\n    "}
      <div className={"story"}>
      {"\n      "}
      <div className={"eyebrow"}>
      {"About Saran"}
      </div>
      {"\n      "}
      <h2 id={"about-h"}>
      {"Fast hands."}
      <br />
      {"Cinematic eye."}
      </h2>
      {"\n      "}
      <p>
      {"I'm Saran, a video editor who turns raw footage into reels, commercial cuts and long-form videos people actually finish watching. Every project runs through one pipeline: story and pacing in Premiere Pro, colour and sound in DaVinci Resolve, quick social cuts in CapCut, thumbnails in Photoshop, and AI tools for the repetitive work."}
      </p>
      {"\n      "}
      <p>
      {"You send footage and a goal. You get back a platform-ready edit and a thumbnail that earns the click."}
      </p>
      {"\n      "}
      <div className={"pillars"}>
      {"\n        "}
      <div className={"pillar"}>
      <h3>
      {"Speed"}
      </h3>
      <p>
      {"Quick turnarounds and every delivery on time."}
      </p>
      </div>
      {"\n        "}
      <div className={"pillar"}>
      <h3>
      {"Cinematic storytelling"}
      </h3>
      <p>
      {"Pacing, sound and colour that serve the story."}
      </p>
      </div>
      {"\n        "}
      <div className={"pillar"}>
      <h3>
      {"Thumbnail design"}
      </h3>
      <p>
      {"Custom Photoshop thumbnails built to get clicks."}
      </p>
      </div>
      {"\n        "}
      <div className={"pillar"}>
      <h3>
      {"End-to-end production"}
      </h3>
      <p>
      {"Raw footage to final export, one editor."}
      </p>
      </div>
      {"\n      "}
      </div>
      {"\n    "}
      </div>
      {"\n  "}
      </div>
      {"\n"}
      </section>
      {"\n\n"}
      {"\n"}
      <section className={"sec"} id={"toolkit"} aria-labelledby={"kit-h"} style={{"paddingTop": "0"}}>
      {"\n  "}
      <div className={"wrap"}>
      {"\n    "}
      <div className={"sec-head"}>
      <div className={"eyebrow"}>
      {"Software & toolkit"}
      </div>
      <h2 id={"kit-h"}>
      {"The edit suite"}
      </h2>
      </div>
      {"\n    "}
      <div className={"kit"}>
      {"\n      "}
      <div className={"tool"}>
      <i>
      {"Pr"}
      </i>
      <h3>
      {"Adobe Premiere Pro"}
      </h3>
      <p>
      {"Timeline & advanced editing"}
      </p>
      </div>
      {"\n      "}
      <div className={"tool"}>
      <i>
      {"Dv"}
      </i>
      <h3>
      {"DaVinci Resolve"}
      </h3>
      <p>
      {"Color grading & audio"}
      </p>
      </div>
      {"\n      "}
      <div className={"tool"}>
      <i>
      {"Cc"}
      </i>
      <h3>
      {"CapCut"}
      </h3>
      <p>
      {"Fast-paced viral shorts and reels"}
      </p>
      </div>
      {"\n      "}
      <div className={"tool"}>
      <i>
      {"Ps"}
      </i>
      <h3>
      {"Adobe Photoshop"}
      </h3>
      <p>
      {"Custom, eye-catching thumbnails"}
      </p>
      </div>
      {"\n      "}
      <div className={"tool"}>
      <i>
      {"AI"}
      </i>
      <h3>
      {"AI Video Tools"}
      </h3>
      <p>
      {"Generative motion & speed enhancement"}
      </p>
      </div>
      {"\n    "}
      </div>
      {"\n  "}
      </div>
      {"\n"}
      </section>
      {"\n\n"}
      {"\n"}
      <section className={"sec"} id={"reach"} aria-labelledby={"reach-h"} style={{"paddingTop": "0"}}>
      {"\n  "}
      <div className={"wrap"}>
      {"\n    "}
      <div className={"sec-head"}>
      <div className={"eyebrow"}>
      {"Client map"}
      </div>
      <h2 id={"reach-h"}>
      {"Global Creator Network"}
      </h2>
      </div>
      {"\n    "}
      <div className={"mapbox"}>
      {"\n      "}
      <div className={"inner"} id={"mapInner"}>
      {"\n        "}
      <canvas id={"mapCanvas"} aria-hidden={"true"}>
      </canvas>
      {"\n        "}
      <svg id={"mapSvg"} viewbox={"0 0 1000 378"} preserveaspectratio={"none"} aria-hidden={"true"}>
      </svg>
      {"\n        "}
      <div id={"pins"}>
      </div>
      {"\n      "}
      </div>
      {"\n    "}
      </div>
      {"\n    "}
      <div className={"regions"} id={"regions"}>
      </div>
      {"\n    "}
      <p className={"mapnote"}>
      {"Collaborating seamlessly across time zones to power creators worldwide."}
      </p>
      {"\n  "}
      </div>
      {"\n"}
      </section>
      {"\n\n"}
      {"\n"}
      <section className={"sec"} id={"work"} aria-labelledby={"work-h"} style={{"paddingTop": "0"}}>
      {"\n  "}
      <div className={"wrap"}>
      {"\n    "}
      <div className={"sec-head"}>
      <div className={"eyebrow"}>
      {"Portfolio"}
      </div>
      <h2 id={"work-h"}>
      {"Selected work"}
      </h2>
      {"\n      "}
      <p className={"lead"}>
      {"Tap any video to open it with the full details. Cards marked Sample are placeholder slots until real video files are added."}
      </p>
      </div>
      {"\n    "}
      <div className={"tabs"} role={"tablist"} aria-label={"Filter work"}>
      {"\n      "}
      <button className={"tab"} role={"tab"} aria-selected={"true"} data-f={"all"} id={"tab-all"}>
      {"All Work"}
      </button>
      {"\n      "}
      <button className={"tab"} role={"tab"} aria-selected={"false"} data-f={"v"} id={"tab-v"}>
      {"Vertical Reels / Shorts (9:16)"}
      </button>
      {"\n      "}
      {"\n    "}
      </div>
      {"\n    "}
      <div id={"workWrap"}>
      {"\n      "}
      <div className={"group"} id={"gv"}>
      <div className={"group-h"}>
      <h3>
      {"Vertical Reels / Shorts"}
      </h3>
      <span>
      {"9:16 · hover to preview"}
      </span>
      </div>
      <div className={"grid-v"} id={"gridV"}>
      </div>
      </div>
      {"\n      "}
      {"\n    "}
      </div>
      {"\n  "}
      </div>
      {"\n"}
      </section>
      {"\n\n"}
      {"\n"}
      <section className={"stats"} aria-label={"Key numbers"}>
      {"\n  "}
      <div className={"wrap"} id={"stats"}>
      {"\n    "}
      <div className={"stat"}>
      <b data-n={"300"} data-s={"+"}>
      {"300+"}
      </b>
      <span>
      {"Videos Delivered"}
      </span>
      </div>
      {"\n    "}
      <div className={"stat"}>
      <b data-n={"5"} data-s={"+"}>
      {"5+"}
      </b>
      <span>
      {"Countries Reached"}
      </span>
      </div>
      {"\n    "}
      <div className={"stat"}>
      <b data-n={"100"} data-s={"%"}>
      {"100%"}
      </b>
      <span>
      {"On-Time Delivery"}
      </span>
      </div>
      {"\n  "}
      </div>
      {"\n"}
      </section>
      {"\n\n"}
      {"\n"}
      <section className={"sec"} id={"contact"} aria-labelledby={"contact-h"}>
      {"\n  "}
      <div className={"wrap"}>
      {"\n    "}
      <div className={"contact-top"}>
      {"\n      "}
      {"\n      "}
      <div className={"avatar"}>
      <img src={"images/saran.PNG"} />
      </div>
      {"\n      "}
      <h2 id={"contact-h"}>
      {"Ready to Upgrade"}
      <br />
      {"Your Content?"}
      </h2>
      {"\n    "}
      </div>
      {"\n\n    "}
      <div className={"quick"}>
      {"\n      "}
      <div className={"qa"}>
      <span className={"k"}>
      {"WhatsApp"}
      </span>
      <span className={"v"}>
      {"Chat via +91 9360409252"}
      </span>
      {"\n        "}
      <div className={"row"}>
      <a className={"btn btn-primary"} href={"https://wa.me/919360409252?text=Hi%20Saran%2C%20I%27d%20like%20to%20talk%20about%20a%20video%20edit."} target={"_blank"} rel={"noopener"}>
      {"Open WhatsApp"}
      </a>
      </div>
      </div>
      {"\n      "}
      <div className={"qa"}>
      <span className={"k"}>
      {"Call"}
      </span>
      <span className={"v"}>
      {"+91 9360409252"}
      </span>
      {"\n        "}
      <div className={"row"}>
      <a className={"btn btn-ghost"} href={"tel:+919360409252"}>
      {"Call now"}
      </a>
      <button className={"copy"} type={"button"} data-copy={"+91 9360409252"}>
      {"Copy number"}
      </button>
      </div>
      </div>
      {"\n      "}
      <div className={"qa"}>
      <span className={"k"}>
      {"Email"}
      </span>
      <span className={"v"}>
      {"saran2002raj@gmail.com"}
      </span>
      {"\n        "}
      <div className={"row"}>
      <a className={"btn btn-ghost"} href={"mailto:saran2002raj@gmail.com"}>
      {"Send email"}
      </a>
      <button className={"copy"} type={"button"} data-copy={"saran2002raj@gmail.com"}>
      {"Copy address"}
      </button>
      </div>
      </div>
      {"\n    "}
      </div>
      {"\n\n    "}
      <div className={"glow-card formcard"}>
      {"\n      "}
      <h3>
      {"Tell me about your project"}
      </h3>
      {"\n      "}
      <p>
      {"Fill this in and you get a ready-to-send brief. Nothing is sent until you choose WhatsApp or email."}
      </p>
      {"\n      "}
      <form id={"form"} noValidate>
      {"\n        "}
      <div className={"fgrid"}>
      {"\n          "}
      <div className={"fld"} id={"f-name"}>
      <label htmlFor={"name"}>
      {"Name"}
      </label>
      <input id={"name"} name={"name"} autoComplete={"name"} placeholder={"Your name"} required />
      <span className={"err"} id={"e-name"}>
      </span>
      </div>
      {"\n          "}
      <div className={"fld"} id={"f-email"}>
      <label htmlFor={"email"}>
      {"Email"}
      </label>
      <input id={"email"} name={"email"} type={"email"} autoComplete={"email"} placeholder={"you@channel.com"} required />
      <span className={"err"} id={"e-email"}>
      </span>
      </div>
      {"\n          "}
      <div className={"fld"}>
      <label htmlFor={"type"}>
      {"Project type"}
      </label>
      {"\n            "}
      <select id={"type"} name={"type"}>
      <option>
      {"Short-form reels / Shorts"}
      </option>
      <option>
      {"YouTube long-form"}
      </option>
      <option>
      {"Commercial / ad edit"}
      </option>
      <option>
      {"Thumbnail design"}
      </option>
      <option>
      {"Full package (edit + thumbnail)"}
      </option>
      </select>
      </div>
      {"\n          "}
      <div className={"fld"}>
      <label htmlFor={"count"}>
      {"Video count"}
      </label>
      <input id={"count"} name={"count"} type={"number"} min={"1"} inputmode={"numeric"} placeholder={"e.g. 12 per month"} />
      </div>
      {"\n          "}
      <div className={"fld full"}>
      <label htmlFor={"budget"}>
      {"Budget"}
      </label>
      {"\n            "}
      <select id={"budget"} name={"budget"}>
      <option>
      {"Let's discuss"}
      </option>
      <option>
      {"Under $100"}
      </option>
      <option>
      {"$100 – $300"}
      </option>
      <option>
      {"$300 – $1,000"}
      </option>
      <option>
      {"$1,000+"}
      </option>
      </select>
      </div>
      {"\n          "}
      <div className={"fld full"} id={"f-msg"}>
      <label htmlFor={"msg"}>
      {"Message"}
      </label>
      <textarea id={"msg"} name={"msg"} placeholder={"Links to footage, reference videos, deadline, platforms\u2026"} required>
      </textarea>
      <span className={"err"} id={"e-msg"}>
      </span>
      </div>
      {"\n        "}
      </div>
      {"\n        "}
      <div className={"formfoot"}>
      <button className={"btn btn-primary"} type={"submit"}>
      {"Build my brief"}
      </button>
      <small>
      {"Your brief opens in WhatsApp or your email app, ready to send to Saran."}
      </small>
      </div>
      {"\n      "}
      </form>
      {"\n      "}
      <div className={"brief"} id={"brief"} hidden aria-live={"polite"}>
      {"\n        "}
      <h4>
      {"Your brief is ready"}
      </h4>
      {"\n        "}
      <p>
      {"Nothing has been sent yet. Choose how to send it."}
      </p>
      {"\n        "}
      <pre id={"briefText"}>
      </pre>
      {"\n        "}
      <div className={"row"}>
      {"\n          "}
      <a className={"btn btn-primary"} id={"sendWa"} href={"#"} target={"_blank"} rel={"noopener"}>
      {"Send on WhatsApp"}
      </a>
      {"\n          "}
      <a className={"btn btn-ghost"} id={"sendMail"} href={"#"}>
      {"Send by email"}
      </a>
      {"\n          "}
      <button className={"copy"} type={"button"} id={"copyBrief"}>
      {"Copy brief"}
      </button>
      {"\n        "}
      </div>
      {"\n      "}
      </div>
      {"\n    "}
      </div>
      {"\n  "}
      </div>
      {"\n"}
      </section>
      {"\n"}
      </main>
      {"\n\n"}
      {"\n\n"}
      <footer>
      <div className={"wrap"}>
      <span>
      </span>
      <span>
      {"I was Created to CREATE."}
      </span>
      </div>
      </footer>
      {"\n"}
      {"\n"}
      <div className={"modal"} id={"modal"} hidden role={"dialog"} aria-modal={"true"} aria-labelledby={"mTitle"}>
      {"\n  "}
      <div className={"scrim"} data-close="">
      </div>
      {"\n  "}
      <div className={"sheet glow-card"} id={"sheet"}>
      {"\n    "}
      <button className={"close"} type={"button"} data-close="" aria-label={"Close video"}>
      {"×"}
      </button>
      {"\n    "}
      <div className={"pcol"}>
      {"\n      "}
      <div className={"screen"} id={"screen"}>
      </div>
      {"\n      "}
      <div className={"ctl"}>
      <button type={"button"} id={"pp"} aria-label={"Play"}>
      <svg viewbox={"0 0 16 16"} id={"ppIcon"}>
      </svg>
      </button>
      <input type={"range"} id={"seek"} min={"0"} max={"1000"} value={"0"} aria-label={"Seek"} />
      <span className={"t"} id={"time"}>
      {"0:00 / 0:00"}
      </span>
      </div>
      {"\n    "}
      </div>
      {"\n    "}
      <div className={"mmeta"}>
      {"\n      "}
      <h3 id={"mTitle"}>
      </h3>
      {"\n      "}
      <dl>
      {"\n        "}
      <div>
      <dt>
      {"Client"}
      </dt>
      <dd id={"mClient"}>
      </dd>
      </div>
      {"\n        "}
      <div>
      <dt>
      {"Software used"}
      </dt>
      <dd id={"mSoft"}>
      </dd>
      </div>
      {"\n        "}
      <div>
      <dt>
      {"Editing style"}
      </dt>
      <dd id={"mStyle"}>
      </dd>
      </div>
      {"\n        "}
      <div>
      <dt>
      {"Format"}
      </dt>
      <dd id={"mFmt"}>
      </dd>
      </div>
      {"\n      "}
      </dl>
      {"\n      "}
      <p className={"note"} id={"mNote"}>
      </p>
      {"\n    "}
      </div>
      {"\n  "}
      </div>
      {"\n"}
      </div>
      {"\n"}
      <div className={"toast"} id={"toast"} hidden role={"status"}>
      </div>
      {"\n\n\n\n"}
    </>
  );
}
