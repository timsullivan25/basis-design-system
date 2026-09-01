const { Card, DataTable, DeltaValue, Sparkline, Button, IconButton, Badge, Tag, Input, Select, SegmentedControl, Checkbox, Popover, Icon, Tooltip, LineChart, ChartLegend, BarMeter, Alert, Toast } = window.BasisDesignSystem_6e7350;

const fmtN=v=>(v<0?'−':'')+Math.abs(v/1e6).toFixed(1)+'mm';

function PositionDetail({ row }){
  return (
    <div style={{display:'grid',gridTemplateColumns:'1.3fr 1fr',gap:'var(--space-9)'}}>
      <div>
        <div style={{display:'flex',alignItems:'center',gap:'var(--space-6)',marginBottom:'var(--space-6)'}}>
          <span style={{fontSize:'var(--text-2xs)',fontWeight:600,letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-secondary)'}}>Price · 30 sessions</span>
          <Badge tone="neutral" size="sm">{row.strategy}</Badge>
          <Badge tone={row.side==='Long'?'info':'caution'} size="sm">{row.side}</Badge>
        </div>
        <LineChart height={120} labels={['','','','','','']} formatY={v=>v.toFixed(0)}
          series={[{key:'px',data:wave(30,row.ret,2.2,4),color:row.ret>=0?'var(--chart-3)':'var(--chart-4)'}]} />
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-6) var(--space-8)',alignContent:'start'}}>
        {[['Sleeve',row.sleeve],['Beta (60d)',row.beta.toFixed(2)],['ADV to exit',row.liq.toFixed(1)+' days'],
          ['Notional',fmtN(row.notional)],['Weight',row.wgt.toFixed(1)+'% NAV'],['MTD contribution',(row.pnl>0?'+':'−')+Math.abs(row.pnl)+' bps']].map(([l,v])=>(
          <div key={l} style={{display:'flex',flexDirection:'column',gap:2}}>
            <span style={{fontSize:'var(--text-3xs)',fontWeight:600,letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-tertiary)'}}>{l}</span>
            <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-sm)',fontVariantNumeric:'tabular-nums',color:'var(--text-primary)'}}>{v}</span>
          </div>
        ))}
        <div style={{gridColumn:'1 / -1',display:'flex',gap:'var(--space-5)',marginTop:'var(--space-4)'}}>
          <Button size="sm" iconLeft="file-text">Open note</Button>
          <Button size="sm" variant="ghost" iconLeft="git-compare">Compare sleeve</Button>
        </div>
      </div>
    </div>
  );
}

function PositionsScreen(){
  const [sort,setSort]=React.useState({key:'pnl',dir:'desc'});
  const [expanded,setExpanded]=React.useState(null);
  const [selected,setSelected]=React.useState([]);
  const [side,setSide]=React.useState('all');
  const [strategy,setStrategy]=React.useState('all');
  const [q,setQ]=React.useState('');
  const [dense,setDense]=React.useState(true);
  const [toast,setToast]=React.useState(false);

  let rows=POSITIONS.filter(p=>(side==='all'||p.side.toLowerCase()===side)&&(strategy==='all'||p.strategy===strategy)
    &&(q===''||(p.ticker+p.name).toLowerCase().includes(q.toLowerCase())));
  rows=[...rows].sort((a,b)=>{const d=sort.dir==='asc'?1:-1;const av=a[sort.key],bv=b[sort.key];
    return typeof av==='number'?(av-bv)*d:String(av).localeCompare(String(bv))*d;});

  const filters=[side!=='all'&&['side','Side: '+side],strategy!=='all'&&['strategy','Strategy: '+strategy]].filter(Boolean);

  return (
    <>
      <PageHeader title="Positions" meta={rows.length+' of '+POSITIONS.length+' positions · notional in USD · T+1 book'}
        actions={<>
          <Button size="sm" iconLeft="columns-3">Columns</Button>
          <Button size="sm" iconLeft="save" onClick={()=>setToast(true)}>Save view</Button>
          <Button size="sm" variant="primary" iconLeft="download">Export</Button>
        </>} />
      <Card padding="none" style={{marginBottom:'var(--space-6)'}}>
        <div style={{display:'flex',alignItems:'center',gap:'var(--space-6)',padding:'var(--space-5) var(--space-6)',borderBottom:'1px solid var(--border-subtle)'}}>
          <Input size="sm" iconLeft="search" placeholder="Ticker or name" value={q} onChange={e=>setQ(e.target.value)} onClear={()=>setQ('')} fullWidth={false} style={{width:220}} />
          <SegmentedControl size="sm" value={side} onChange={setSide} options={[{value:'all',label:'All'},{value:'long',label:'Long'},{value:'short',label:'Short'}]} />
          <Select size="sm" value={strategy} onChange={e=>setStrategy(e.target.value)} fullWidth={false} style={{width:170}} iconLeft="layers"
            options={[{value:'all',label:'All strategies'},...STRATEGIES.map(s=>({value:s.label,label:s.label}))]} />
          <Popover title="Advanced filters" width={250} trigger={<Button size="sm" iconLeft="sliders-horizontal">More</Button>}>
            <div style={{display:'flex',flexDirection:'column',gap:9}}>
              <Checkbox checked label="Exclude baskets" /><Checkbox label="Only limit-relevant names" />
              <Checkbox label="Illiquid (>1d ADV)" /><Checkbox label="Added in last 5 sessions" />
            </div>
          </Popover>
          <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:'var(--space-6)'}}>
            {selected.length?<Badge tone="info">{selected.length} selected</Badge>:null}
            <SegmentedControl size="sm" value={dense?'dense':'comfortable'} onChange={v=>setDense(v==='dense')}
              options={[{value:'comfortable',icon:'rows-3'},{value:'dense',icon:'rows-4'}]} />
          </div>
        </div>
        {filters.length?(
          <div style={{display:'flex',alignItems:'center',gap:'var(--space-4)',padding:'var(--space-5) var(--space-6)',borderBottom:'1px solid var(--border-subtle)',background:'var(--surface-table-head)'}}>
            {filters.map(([k,l])=><Tag key={k} icon="filter" onRemove={()=>k==='side'?setSide('all'):setStrategy('all')}>{l}</Tag>)}
            <Button variant="link" size="xs" onClick={()=>{setSide('all');setStrategy('all');}}>Clear all</Button>
          </div>
        ):null}
        <DataTable dense={dense} sort={sort} onSortChange={setSort} rows={rows} selectable selected={selected} onSelectedChange={setSelected}
          expandedKey={expanded} onRowClick={r=>setExpanded(expanded===r.id?null:r.id)} renderDetail={r=><PositionDetail row={r} />}
          maxHeight={430}
          columns={[
            {key:'ticker',label:'Ticker',emphasis:true,width:110},
            {key:'name',label:'Name',muted:true,maxWidth:190},
            {key:'strategy',label:'Strategy',width:120,render:v=><Badge tone="neutral" size="sm">{v}</Badge>},
            {key:'side',label:'Side',width:76,render:v=><span style={{color:v==='Long'?'var(--text-body)':'var(--text-caution)'}}>{v}</span>},
            {key:'notional',label:'Notional',numeric:true,width:110,render:fmtN},
            {key:'wgt',label:'% NAV',numeric:true,width:84,render:v=>v.toFixed(1)+'%'},
            {key:'beta',label:'Beta',numeric:true,width:74,description:'60-day rolling regression vs primary benchmark',render:v=>v.toFixed(2)},
            {key:'ret',label:'Return',numeric:true,width:92,render:v=><DeltaValue value={v} glyph="none" size="xs" />},
            {key:'pnl',label:'MTD contrib',numeric:true,width:108,description:'bps of NAV, arithmetic, gross of financing',render:v=><DeltaValue value={v} unit="bps" glyph="none" size="xs" />},
            {key:'spark',label:'30d',sortable:false,width:88,render:v=><Sparkline data={v} width={72} height={18} />},
            {key:'liq',label:'',sortable:false,width:40,render:(v,r)=>(
              <Tooltip content={'Exit in '+v.toFixed(1)+' days at 20% ADV'}>
                <Icon name={v>1.5?'alert-triangle':'droplets'} size={12} color={v>1.5?'var(--text-caution)':'var(--text-tertiary)'} />
              </Tooltip>)},
          ]} />
        <div style={{display:'flex',alignItems:'center',gap:'var(--space-6)',height:'var(--subbar-h)',padding:'0 var(--space-6)',borderTop:'1px solid var(--border-subtle)',background:'var(--surface-table-head)',fontSize:'var(--text-2xs)',color:'var(--text-secondary)'}}>
          <span>Click any row to expand its detail.</span>
          <span style={{marginLeft:'auto',fontFamily:'var(--font-mono)'}}>Gross 182.0% · Net 42.8% · 214 positions in book</span>
        </div>
      </Card>
      {toast?<div style={{position:'fixed',right:24,bottom:24,zIndex:200}}>
        <Toast tone="positive" title="View saved" onDismiss={()=>setToast(false)} action={<Button variant="link" size="xs">Open</Button>}>Filters, sort and column widths kept.</Toast>
      </div>:null}
    </>
  );
}
Object.assign(window,{PositionsScreen,PositionDetail});