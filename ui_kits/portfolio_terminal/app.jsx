const { SideNav, Badge, Icon, Button } = window.BasisDesignSystem_6e7350;

const NAV=[
  {section:'Portfolio'},
  {value:'overview',label:'Overview',icon:'layout-dashboard'},
  {value:'positions',label:'Positions',icon:'table-2',badge:214,children:[{value:'positions',label:'All'},{value:'positions',label:'Longs'},{value:'positions',label:'Shorts'}]},
  {value:'attribution',label:'Attribution',icon:'bar-chart-3'},
  {value:'risk',label:'Risk & limits',icon:'gauge',badge:'1'},
  {section:'Research'},
  {value:'screens',label:'Screens',icon:'filter',badge:8},
  {value:'notes',label:'Notes',icon:'file-text'},
];

const TABS={
  overview:[{value:'overview',label:'Summary',icon:'layout-dashboard'},{value:'positions',label:'Positions',count:214},{value:'attribution',label:'Attribution'},{value:'risk',label:'Risk'}],
};

function App(){
  const [screen,setScreen]=React.useState('overview');
  const [fund,setFund]=React.useState('Global L/S Master');
  const [dark,setDark]=React.useState(false);
  React.useEffect(()=>{document.documentElement.setAttribute('data-theme',dark?'dark':'light');},[dark]);

  const crumbs=[{value:'fund',label:fund,icon:'briefcase'},
    {label:{overview:'Overview',positions:'Positions',risk:'Risk & limits',attribution:'Attribution',screens:'Screens',notes:'Notes'}[screen]}];

  const body=screen==='positions'?<PositionsScreen />
    :screen==='risk'?<RiskScreen />
    :screen==='attribution'?<AttributionScreen />
    :screen==='screens'||screen==='notes'?(
      <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'var(--space-6)',maxWidth:520,padding:'var(--space-11) 0'}}>
        <h1 style={{fontSize:'var(--text-2xl)',fontWeight:600,letterSpacing:'var(--tracking-display)'}}>{screen==='screens'?'Screens':'Notes'}</h1>
        <p style={{fontSize:'var(--text-sm)',color:'var(--text-secondary)',margin:0}}>This module lives in the Research Workspace kit. Open <a href="../research_workspace/index.html">research_workspace</a> to see it.</p>
        <Button size="sm" iconLeft="arrow-left" onClick={()=>setScreen('overview')}>Back to overview</Button>
      </div>
    ):<OverviewScreen onDrill={setScreen} />;

  return (
    <div style={{display:'flex',height:'100vh',minHeight:0,background:'var(--surface-app)'}}>
      <SideNav value={screen} onChange={setScreen} items={NAV} header={<Wordmark />}
        footer={<div style={{display:'flex',alignItems:'center',gap:'var(--space-5)',fontSize:'var(--text-2xs)',color:'var(--text-secondary)'}}>
          <Badge tone="positive" size="sm" dot>Live</Badge><span style={{fontFamily:'var(--font-mono)'}}>16:04 ET</span></div>} />
      <div style={{display:'flex',flexDirection:'column',flex:'1 1 auto',minWidth:0}}>
        <TopBar fund={fund} onFundChange={setFund} dark={dark} onDarkChange={setDark}
          tab={screen} onTabChange={setScreen} tabs={TABS.overview} crumbs={crumbs} onCrumb={()=>setScreen('overview')} />
        <main style={{flex:'1 1 auto',minHeight:0,overflow:'auto',padding:'var(--space-9) var(--space-8) var(--space-11)'}}>
          <div style={{maxWidth:'var(--page-max)',margin:'0 auto'}}>{body}</div>
        </main>
      </div>
    </div>
  );
}
Object.assign(window,{App});