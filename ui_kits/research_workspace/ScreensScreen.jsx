const { Card, DataTable, DeltaValue, Sparkline, Button, IconButton, Badge, Tag, Input, Select, SegmentedControl, Checkbox, Field, Popover, Dialog, Icon, Tooltip, Alert, BarMeter } = window.BasisDesignSystem_6e7350;

function ScreensScreen({ onOpenCompany }){
  const [active,setActive]=React.useState('s2');
  const [dialog,setDialog]=React.useState(false);
  const [sort,setSort]=React.useState({key:'score',dir:'desc'});
  const [q,setQ]=React.useState('');
  const def=SCREEN_DEFS.find(s=>s.id===active);
  const rows=CANDIDATES.filter(c=>q===''||(c.ticker+c.name).toLowerCase().includes(q.toLowerCase()));
  const sorted=[...rows].sort((a,b)=>{const d=sort.dir==='asc'?1:-1;const av=a[sort.key],bv=b[sort.key];
    return typeof av==='number'?(av-bv)*d:String(av).localeCompare(String(bv))*d;});
  return (
    <div style={{display:'flex',gap:'var(--space-6)',alignItems:'flex-start'}}>
      <Card padding="none" dense title="Screens" icon="filter" style={{width:268,flex:'0 0 auto'}}
        actions={<IconButton icon="plus" label="New screen" size="sm" onClick={()=>setDialog(true)} />}
        footer={<span>5 screens · 3 shared with the desk</span>}>
        <div style={{display:'flex',flexDirection:'column'}}>
          {SCREEN_DEFS.map(s=>{
            const on=s.id===active;
            return (
              <button key={s.id} onClick={()=>setActive(s.id)} style={{display:'flex',flexDirection:'column',gap:3,padding:'var(--space-6)',background:on?'var(--surface-selected)':'transparent',border:'none',borderBottom:'1px solid var(--border-subtle)',borderLeft:'2px solid '+(on?'var(--blue-700)':'transparent'),cursor:'pointer',textAlign:'left'}}>
                <div style={{display:'flex',alignItems:'center',gap:6,width:'100%'}}>
                  <span style={{fontSize:'var(--text-sm)',fontWeight:on?600:500,color:on?'var(--text-brand)':'var(--text-primary)'}}>{s.name}</span>
                  {s.shared?<Icon name="users" size={11} color="var(--text-tertiary)" />:null}
                  <span style={{marginLeft:'auto',fontFamily:'var(--font-mono)',fontSize:'var(--text-2xs)',fontVariantNumeric:'tabular-nums',color:'var(--text-secondary)'}}>{s.hits}</span>
                </div>
                <span style={{fontSize:'var(--text-2xs)',color:'var(--text-tertiary)'}}>{s.owner} · {s.updated}</span>
              </button>
            );
          })}
        </div>
      </Card>
      <div style={{flex:'1 1 auto',minWidth:0}}>
        <PageHeader title={def.name} meta={def.universe+' · '+def.hits+' names · rebuilt '+def.updated}
          actions={<>
            <Button size="sm" iconLeft="sliders-horizontal">Criteria</Button>
            <Button size="sm" iconLeft="users">Share</Button>
            <Button size="sm" variant="primary" iconLeft="plus">Add to book</Button>
          </>} />
        <div style={{display:'flex',alignItems:'center',gap:'var(--space-4)',marginBottom:'var(--space-6)',flexWrap:'wrap'}}>
          {def.tags.map(t=><Tag key={t} icon="tag">{t}</Tag>)}
          <Tag icon="filter" onRemove={()=>{}}>EV/EBITDA &lt; 9×</Tag>
          <Tag icon="filter" onRemove={()=>{}}>FCF yield &gt; 4%</Tag>
          <Popover title="Add criterion" width={250} trigger={<Button size="xs" variant="ghost" iconLeft="plus">Criterion</Button>}>
            <div style={{display:'flex',flexDirection:'column',gap:9}}>
              <Field label="Metric"><Select size="sm" options={[{value:'roic',label:'ROIC'},{value:'nd',label:'Net debt / EBITDA'},{value:'rev',label:'Revision breadth'}]} /></Field>
              <Field label="Threshold"><Input size="sm" mono defaultValue="12.0" suffix="%" /></Field>
            </div>
          </Popover>
        </div>
        <Card padding="none" dense title="Candidates" subtitle="Ranked by composite score"
          actions={<Input size="sm" iconLeft="search" placeholder="Filter" value={q} onChange={e=>setQ(e.target.value)} onClear={()=>setQ('')} fullWidth={false} style={{width:170}} />}
          footer={<span>Composite score = equal-weight rank of the five criteria · fundamentals as reported, FX-adjusted</span>}>
          <DataTable dense sort={sort} onSortChange={setSort} rows={sorted} onRowClick={r=>onOpenCompany(r)} columns={[
            {key:'ticker',label:'Ticker',emphasis:true,width:106},
            {key:'name',label:'Name',muted:true,maxWidth:180},
            {key:'mcap',label:'Mkt cap',numeric:true,width:96,render:v=>'$'+v+'bn'},
            {key:'ev',label:'EV/EBITDA',numeric:true,width:104,render:v=>v.toFixed(1)+'×'},
            {key:'fcf',label:'FCF yield',numeric:true,width:96,render:v=>v.toFixed(1)+'%'},
            {key:'roic',label:'ROIC',numeric:true,width:88,render:v=>v.toFixed(1)+'%'},
            {key:'rev',label:'Revisions',numeric:true,width:100,description:'3-month change in consensus EPS, %',render:v=><DeltaValue value={v} glyph="none" size="xs" />},
            {key:'score',label:'Score',numeric:true,width:132,render:v=><BarMeter value={v} max={100} showValue formatValue={x=>x.toFixed(0)} />},
            {key:'held',label:'',sortable:false,width:64,render:(v,r)=>(
              <span style={{display:'inline-flex',gap:6}}>
                {v?<Tooltip content="Held in Global L/S"><Icon name="briefcase" size={12} color="var(--text-brand)" /></Tooltip>:null}
                {r.note?<Tooltip content="Has a research note"><Icon name="file-text" size={12} color="var(--text-tertiary)" /></Tooltip>:null}
              </span>)},
          ]} />
        </Card>
      </div>
      <Dialog open={dialog} onClose={()=>setDialog(false)} title="New screen" icon="filter" subtitle="Saved to your workspace"
        footer={<><Button size="sm" onClick={()=>setDialog(false)}>Cancel</Button><Button size="sm" variant="primary" onClick={()=>setDialog(false)}>Create</Button></>}>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-8)'}}>
          <Field label="Name"><Input placeholder="e.g. Post-capex FCF inflection" /></Field>
          <Field label="Universe"><Select options={[{value:'dm',label:'Developed large cap'},{value:'en',label:'Global energy'},{value:'us',label:'US consumer'}]} /></Field>
          <Field label="Extend from" hint="Inherits criteria; you can override any of them">
            <Select options={[{value:'none',label:'Nothing — start empty'},...SCREEN_DEFS.map(s=>({value:s.id,label:s.name}))]} /></Field>
          <Checkbox checked label="Share with the desk" description="Others can read and clone, not edit" />
        </div>
      </Dialog>
    </div>
  );
}
Object.assign(window,{ScreensScreen});