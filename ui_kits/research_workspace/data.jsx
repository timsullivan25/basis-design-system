const rwave=(n,drift,amp,seed=1)=>Array.from({length:n},(_,i)=>Math.sin((i+seed)/2.7)*amp+Math.cos((i+seed)/1.6)*amp*0.4+i*drift);

const SCREEN_DEFS=[
  {id:'s1',name:'Quality compounders',owner:'A. Kessler',universe:'Developed large cap',hits:42,updated:'2h ago',shared:true,tags:['Quality','Low leverage']},
  {id:'s2',name:'Refining margin torque',owner:'A. Kessler',universe:'Global energy',hits:11,updated:'Yesterday',shared:false,tags:['Energy','Cyclical']},
  {id:'s3',name:'Short candidates — staples',owner:'M. Duarte',universe:'US consumer',hits:19,updated:'3d ago',shared:true,tags:['Short','Valuation']},
  {id:'s4',name:'Post-capex free cash inflection',owner:'R. Iyer',universe:'Global industrials',hits:27,updated:'1w ago',shared:true,tags:['FCF','Capex']},
  {id:'s5',name:'Crowding decay',owner:'Quant desk',universe:'Global',hits:64,updated:'15m ago',shared:true,tags:['Crowding','Momentum']},
];

const CANDIDATES=[
  {id:'c1',ticker:'XOM US',name:'Exxon Mobil',sector:'Energy',mcap:512,ev:6.4,fcf:8.2,roic:14.1,rev:4.2,score:87,held:true,note:true,spark:rwave(24,.9,2,1)},
  {id:'c2',ticker:'VLO US',name:'Valero Energy',sector:'Energy',mcap:48,ev:5.1,fcf:11.4,roic:17.8,rev:2.1,score:84,held:false,note:true,spark:rwave(24,1.1,2.4,3)},
  {id:'c3',ticker:'SHEL LN',name:'Shell plc',sector:'Energy',mcap:214,ev:5.8,fcf:9.1,roic:12.4,rev:1.4,score:79,held:true,note:false,spark:rwave(24,.4,1.8,5)},
  {id:'c4',ticker:'NESTE FH',name:'Neste Oyj',sector:'Energy',mcap:14,ev:8.9,fcf:4.2,roic:9.1,rev:-6.2,score:61,held:false,note:false,spark:rwave(24,-.5,2.6,7)},
  {id:'c5',ticker:'MPC US',name:'Marathon Petroleum',sector:'Energy',mcap:62,ev:4.8,fcf:12.8,roic:19.2,rev:1.8,score:88,held:false,note:true,spark:rwave(24,1.3,2.2,2)},
  {id:'c6',ticker:'REP SM',name:'Repsol SA',sector:'Energy',mcap:18,ev:3.9,fcf:14.1,roic:10.8,rev:0.4,score:72,held:false,note:false,spark:rwave(24,.2,1.6,9)},
  {id:'c7',ticker:'PBR US',name:'Petrobras',sector:'Energy',mcap:94,ev:3.2,fcf:18.4,roic:22.4,rev:-1.1,score:75,held:false,note:false,spark:rwave(24,.6,3.1,4)},
];

const NOTES=[
  {id:'n1',title:'XOM — refining spreads are doing the work',ticker:'XOM US',author:'A. Kessler',date:'12 Aug',type:'Update',conviction:'High',
   body:'Energy contributed 64 bps, almost all of it from two refiners we added in June. Positioning is unchanged into the print; we would add on any move below 8× mid-cycle. The short book cost 37 bps, concentrated in staples.'},
  {id:'n2',title:'MPC — capital return is the whole thesis',ticker:'MPC US',author:'A. Kessler',date:'8 Aug',type:'Initiation',conviction:'High',
   body:'Marathon converts roughly 12% of market cap into free cash at mid-cycle cracks and has retired a fifth of its shares in three years. The question is not the model, it is whether the buyback survives a compression back to 2019 spreads. Our downside holds 14× on trough earnings.'},
  {id:'n3',title:'Staples shorts — waiting on volume, not price',ticker:'PG US',author:'M. Duarte',date:'5 Aug',type:'Update',conviction:'Medium',
   body:'Price has done the work, volume has not. Elasticity in the last two prints suggests the pricing lever is exhausted. Keeping the position at 1.9% and revisiting after the September scanner data.'},
  {id:'n4',title:'Crowding decay screen — methodology change',ticker:'—',author:'Quant desk',date:'1 Aug',type:'Method',conviction:'—',
   body:'Crowding is now measured on a 20-day change in short interest plus lender utilisation, replacing the 60-day version. The change shortens the signal half-life and reduces overlap with momentum by roughly a third.'},
];

Object.assign(window,{rwave,SCREEN_DEFS,CANDIDATES,NOTES});