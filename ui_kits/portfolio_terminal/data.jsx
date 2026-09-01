const wave=(n,drift,amp,seed=1)=>Array.from({length:n},(_,i)=>Math.sin((i+seed)/2.7)*amp+Math.cos((i+seed)/1.6)*amp*0.4+i*drift);
const MONTHS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const KPIS=[
  {key:'nav',label:'NAV',value:'4,218.4',unit:'$mm',delta:0.42,deltaLabel:'1D',icon:'wallet',spark:wave(30,.9,3,2)},
  {key:'mtd',label:'MTD return',value:'+2.41',unit:'%',delta:38,deltaUnit:'bps',deltaLabel:'1D',tone:'positive',icon:'trending-up',spark:wave(30,1.1,2.2,5)},
  {key:'net',label:'Net exposure',value:'42.8',unit:'% NAV',delta:-1.4,deltaLabel:'vs prior close',icon:'scale',spark:wave(30,.2,4,9)},
  {key:'gross',label:'Gross exposure',value:'182.0',unit:'% NAV',delta:3.1,deltaLabel:'vs prior close',tone:'caution',icon:'layers',footnote:'limit 175'},
  {key:'var',label:'VaR (99%, 1d)',value:'−1.86',unit:'% NAV',delta:-0.12,invertDelta:true,icon:'gauge',spark:wave(30,-.2,1.6,3)},
];

const STRATEGIES=[
  {key:'quant',label:'Quant',icon:'cpu',nav:38.2,mtd:0.84,color:'var(--chart-1)',sleeves:[
    {name:'Stat arb',nav:14.1,mtd:0.41,util:72,names:412},
    {name:'Cross-sectional momentum',nav:12.6,mtd:0.28,util:58,names:288},
    {name:'Vol carry',nav:11.5,mtd:0.15,util:44,names:36}]},
  {key:'fundamental',label:'Fundamental',icon:'search',nav:31.4,mtd:-0.22,color:'var(--chart-2)',sleeves:[
    {name:'Energy & materials',nav:11.2,mtd:0.64,util:66,names:24},
    {name:'Technology',nav:10.9,mtd:-0.51,util:71,names:31},
    {name:'Consumer',nav:9.3,mtd:-0.35,util:49,names:29}]},
  {key:'macro',label:'Macro',icon:'globe',nav:19.0,mtd:0.31,color:'var(--chart-3)',sleeves:[
    {name:'Rates',nav:8.8,mtd:0.22,util:61,names:14},
    {name:'FX',nav:6.1,mtd:0.09,util:38,names:11},
    {name:'Commodities',nav:4.1,mtd:0.00,util:27,names:9}]},
  {key:'credit',label:'Credit',icon:'landmark',nav:11.4,mtd:0.12,color:'var(--chart-5)',sleeves:[
    {name:'IG relative value',nav:7.0,mtd:0.08,util:52,names:41},
    {name:'Event',nav:4.4,mtd:0.04,util:33,names:12}]},
];

const POSITIONS=[
  {id:'p1',ticker:'XOM US',name:'Exxon Mobil',strategy:'Fundamental',sleeve:'Energy & materials',side:'Long',wgt:4.2,notional:177200000,ret:1.84,pnl:64,beta:0.92,liq:1.2,spark:wave(24,.9,2,1)},
  {id:'p2',ticker:'NVDA US',name:'NVIDIA',strategy:'Fundamental',sleeve:'Technology',side:'Long',wgt:3.8,notional:160300000,ret:3.02,pnl:112,beta:1.64,liq:0.4,spark:wave(24,1.4,3,4)},
  {id:'p3',ticker:'SHEL LN',name:'Shell plc',strategy:'Fundamental',sleeve:'Energy & materials',side:'Short',wgt:-2.1,notional:-88600000,ret:-0.91,pnl:-24,beta:0.81,liq:1.6,spark:wave(24,-.6,2,7)},
  {id:'p4',ticker:'6758 JP',name:'Sony Group',strategy:'Fundamental',sleeve:'Technology',side:'Long',wgt:1.6,notional:67500000,ret:-0.18,pnl:-6,beta:1.12,liq:2.1,spark:wave(24,-.2,1.4,2)},
  {id:'p5',ticker:'QSA-1042',name:'Stat arb basket 1042',strategy:'Quant',sleeve:'Stat arb',side:'Long',wgt:5.4,notional:227800000,ret:0.42,pnl:41,beta:0.06,liq:0.2,spark:wave(24,.5,1,9)},
  {id:'p6',ticker:'QSA-1043',name:'Stat arb basket 1043',strategy:'Quant',sleeve:'Stat arb',side:'Short',wgt:-5.1,notional:-215100000,ret:0.31,pnl:29,beta:-0.04,liq:0.2,spark:wave(24,.4,1,3)},
  {id:'p7',ticker:'QMO-208',name:'Momentum basket 208',strategy:'Quant',sleeve:'Cross-sectional momentum',side:'Long',wgt:6.2,notional:261500000,ret:0.28,pnl:24,beta:0.34,liq:0.3,spark:wave(24,.3,1.2,6)},
  {id:'p8',ticker:'US 10Y',name:'UST 10-year future',strategy:'Macro',sleeve:'Rates',side:'Short',wgt:-8.8,notional:-371200000,ret:0.22,pnl:19,beta:-0.18,liq:0.1,spark:wave(24,.2,1.8,8)},
  {id:'p9',ticker:'EURUSD',name:'EUR/USD forward',strategy:'Macro',sleeve:'FX',side:'Long',wgt:6.1,notional:257300000,ret:0.09,pnl:8,beta:0.02,liq:0.1,spark:wave(24,.1,1.1,5)},
  {id:'p10',ticker:'CDX IG 41',name:'CDX IG series 41',strategy:'Credit',sleeve:'IG relative value',side:'Short',wgt:-7.0,notional:-295200000,ret:0.08,pnl:7,beta:0.09,liq:0.3,spark:wave(24,.1,.9,4)},
  {id:'p11',ticker:'PG US',name:'Procter & Gamble',strategy:'Fundamental',sleeve:'Consumer',side:'Short',wgt:-1.9,notional:-80100000,ret:-1.24,pnl:-37,beta:0.58,liq:1.9,spark:wave(24,-.7,1.6,1)},
  {id:'p12',ticker:'ASML NA',name:'ASML Holding',strategy:'Fundamental',sleeve:'Technology',side:'Long',wgt:2.4,notional:101200000,ret:-0.44,pnl:-14,beta:1.38,liq:0.9,spark:wave(24,-.3,2.1,7)},
];

const LIMITS=[
  {name:'Gross exposure',value:182,limit:175,max:220,unit:'% NAV',owner:'Mandate'},
  {name:'Net exposure',value:42.8,limit:60,max:80,unit:'% NAV',owner:'Mandate'},
  {name:'Single name',value:5.4,limit:7.5,max:10,unit:'% NAV',owner:'Risk committee'},
  {name:'Sector concentration',value:24.1,limit:30,max:40,unit:'% NAV',owner:'Risk committee'},
  {name:'VaR (99%, 1d)',value:1.86,limit:2.5,max:3.5,unit:'% NAV',owner:'Mandate'},
  {name:'Beta-adjusted net',value:31.2,limit:45,max:60,unit:'% NAV',owner:'PM'},
  {name:'Illiquid (>3d ADV)',value:6.4,limit:8,max:12,unit:'% NAV',owner:'Risk committee'},
];

const ATTRIB_SECTOR=[
  {label:'Energy',value:64},{label:'Technology',value:41},{label:'Financials',value:12},
  {label:'Industrials',value:6},{label:'Health care',value:-18},{label:'Staples',value:-37},
];
const ATTRIB_FACTOR=[
  {label:'Momentum',value:52},{label:'Quality',value:28},{label:'Value',value:-9},
  {label:'Size',value:-14},{label:'Low vol',value:-22},{label:'Residual',value:106},
];

Object.assign(window,{wave,MONTHS,KPIS,STRATEGIES,POSITIONS,LIMITS,ATTRIB_SECTOR,ATTRIB_FACTOR});