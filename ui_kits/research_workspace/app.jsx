const { SideNav, Tabs, Button, IconButton, Badge, Icon, Input, Breadcrumb, Popover, Switch, Tooltip } = window.BasisDesignSystem_6e7350;

function Wordmark(){
  return (
    <div style={{display:'flex',alignItems:'center',gap:8,minWidth:0}}>
      <span style={{fontSize:15,fontWeight:700,letterSpacing:'-0.03em',color:'var(--text-primary)'}}>Basis</span>
      <span style={{fontSize:'var(--text-3xs)',fontWeight:600,letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-tertiary)'}}>Research</span>
    </div>
  );
}

function PageHeader({ title, meta, actions }){
  return (
    <div style={{display:'flex',alignItems:'flex-end',gap:'var(--space-8)',marginBottom:'var(--space-8)'}}>
      <div style={{display:'flex',flexDirection:'column',gap:3,minWidth:0}}>
        <h1 style={{fontSize:'var(--text-2xl)',fontWeight:600,letterSpacing:'var(--tracking-display)',color:'var(--text-primary)'}}>{title}</h1>
        {meta?<span style={{fontSize:'var(--text-2xs)',color:'var(--text-secondary)'}}>{meta}</span>:null}
      </div>
      <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:'var(--space-5)'}}>{actions}</div>
    </div>
  );
}

const NAV=[
  {section:'Research'},
  {value:'screens',label:'Screens',icon:'filter',badge:5},
  {value:'company',label:'Companies',icon:'building-2',badge:42},
  {value:'notes',label:'Notes',icon:'file-text',badge:4},
  {section:'Portfolio'},
  {value:'terminal',label:'Terminal',icon:'layout-dashboard'},
];

function App(){
  const [screen,setScreen]=React.useState('screens');
  const [company,setCompany]=React.useState(null);
  const [dark,setDark]=React.useState(false);
  React.useEffect(()=>{document.documentElement.setAttribute('data-theme',dark?'dark':'light');},[dark]);
  const openCompany=c=>{setCompany(c);setScreen('company');};

  const body=screen==='company'?<CompanyScreen company={company} onBack={()=>setScreen('screens')} />
    :screen==='notes'?<NotesScreen onOpenCompany={openCompany} />
    :screen==='terminal'?(
      <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'var(--space-6)',maxWidth:520,padding:'var(--space-11) 0'}}>
        <h1 style={{fontSize:'var(--text-2xl)',fontWeight:600,letterSpacing:'var(--tracking-display)'}}>Portfolio Terminal</h1>
        <p style={{fontSize:'var(--text-sm)',color:'var(--text-secondary)',margin:0}}>The portfolio modules live in the other kit. Open <a href="../portfolio_terminal/index.html">portfolio_terminal</a>.</p>
        <Button size="sm" iconLeft="arrow-left" onClick={()=>setScreen('screens')}>Back to screens</Button>
      </div>
    ):<ScreensScreen onOpenCompany={openCompany} />;

  return (
    <div style={{display:'flex',height:'100vh',minHeight:0,background:'var(--surface-app)'}}>
      <SideNav value={screen} onChange={setScreen} items={NAV} header={<Wordmark />}
        footer={<div style={{display:'flex',alignItems:'center',gap:'var(--space-5)',fontSize:'var(--text-2xs)',color:'var(--text-secondary)'}}>
          <span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:20,height:20,background:'var(--ink-800)',borderRadius:'var(--radius-pill)',fontSize:9,fontWeight:600,color:'var(--white)'}}>AK</span>A. Kessler</div>} />
      <div style={{display:'flex',flexDirection:'column',flex:'1 1 auto',minWidth:0}}>
        <div style={{flex:'0 0 auto',display:'flex',alignItems:'center',gap:'var(--space-8)',height:'var(--topbar-h)',padding:'0 var(--space-8)',background:'var(--surface-chrome)',borderBottom:'1px solid var(--border-default)'}}>
          <Input size="sm" iconLeft="search" placeholder="Search companies, screens and notes" fullWidth={false} style={{width:340}} />
          <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:'var(--space-6)'}}>
            <Tooltip content="Fundamentals refreshed nightly"><Badge tone="info" icon="database">Data 06:00 ET</Badge></Tooltip>
            <Popover placement="bottom-end" title="Display" width={200} trigger={<IconButton icon="settings-2" label="Display settings" size="sm" />}>
              <Switch size="sm" checked={dark} onChange={setDark} label="Dark mode" />
            </Popover>
            <IconButton icon="bell" label="Alerts" size="sm" />
          </div>
        </div>
        <main style={{flex:'1 1 auto',minHeight:0,overflow:'auto',padding:'var(--space-9) var(--space-8) var(--space-11)'}}>
          <div style={{maxWidth:'var(--page-max)',margin:'0 auto'}}>{body}</div>
        </main>
      </div>
    </div>
  );
}
Object.assign(window,{Wordmark,PageHeader});
Object.assign(window,{App});