const { SideNav, Tabs, Button, IconButton, Badge, Icon, Input, Breadcrumb, Popover, Switch, Tooltip } = window.BasisDesignSystem_6e7350;

function Wordmark(){
  return (
    <div style={{display:'flex',alignItems:'center',gap:8,minWidth:0}}>
      <span style={{fontSize:15,fontWeight:700,letterSpacing:'-0.03em',color:'var(--text-primary)'}}>Basis</span>
      <span style={{fontSize:'var(--text-3xs)',fontWeight:600,letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-tertiary)'}}>Terminal</span>
    </div>
  );
}

function TopBar({ fund, onFundChange, dark, onDarkChange, tab, onTabChange, tabs, crumbs, onCrumb }){
  return (
    <div style={{flex:'0 0 auto',background:'var(--surface-chrome)',borderBottom:'1px solid var(--border-default)'}}>
      <div style={{display:'flex',alignItems:'center',gap:'var(--space-8)',height:'var(--topbar-h)',padding:'0 var(--space-8)'}}>
        <Popover title="Funds" width={240} trigger={
          <Button size="sm" iconLeft="briefcase" iconRight="chevron-down">{fund}</Button>}>
          <div style={{display:'flex',flexDirection:'column',gap:2,margin:'-4px'}}>
            {['Global L/S Master','Quant Multi-Strat','Macro Opportunities','Credit RV'].map(n=>(
              <button key={n} onClick={()=>onFundChange(n)} style={{display:'flex',alignItems:'center',gap:8,height:26,padding:'0 8px',background:n===fund?'var(--surface-selected)':'transparent',border:'none',borderRadius:'var(--radius-sm)',cursor:'pointer',fontFamily:'var(--font-sans)',fontSize:'var(--text-xs)',color:n===fund?'var(--text-brand)':'var(--text-body)',textAlign:'left'}}>
                {n===fund?<Icon name="check" size={12} />:<span style={{width:12}} />}{n}
              </button>
            ))}
          </div>
        </Popover>
        <div style={{width:1,height:20,background:'var(--border-default)'}} />
        <Breadcrumb items={crumbs} onNavigate={onCrumb} />
        <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:'var(--space-6)'}}>
          <Input size="sm" iconLeft="search" placeholder="Ticker, ISIN, sleeve" fullWidth={false} style={{width:210}} />
          <Tooltip content="Streaming from the prime broker feed"><Badge tone="positive" dot>Live</Badge></Tooltip>
          <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-2xs)',fontVariantNumeric:'tabular-nums',color:'var(--text-secondary)'}}>16:04:12 ET</span>
          <div style={{width:1,height:20,background:'var(--border-default)'}} />
          <Popover placement="bottom-end" title="Display" width={210} trigger={<IconButton icon="settings-2" label="Display settings" size="sm" />}>
            <div style={{display:'flex',flexDirection:'column',gap:10}}>
              <Switch size="sm" checked={dark} onChange={onDarkChange} label="Dark mode" />
              <Switch size="sm" checked label="Live prices" />
              <Switch size="sm" checked={false} label="Show short book gross" />
            </div>
          </Popover>
          <IconButton icon="bell" label="Alerts" size="sm" />
          <span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:24,height:24,background:'var(--ink-800)',borderRadius:'var(--radius-pill)',fontSize:'var(--text-3xs)',fontWeight:600,color:'var(--white)'}}>AK</span>
        </div>
      </div>
      <div style={{padding:'0 var(--space-8)'}}>
        <Tabs size="sm" value={tab} onChange={onTabChange} tabs={tabs}
          actions={<><Button size="xs" variant="ghost" iconLeft="download">Export</Button><Button size="xs" variant="ghost" iconLeft="share-2">Share</Button></>} />
      </div>
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

Object.assign(window,{Wordmark,TopBar,PageHeader});