const { Card, DataTable, BarMeter, Badge, Button, IconButton, Alert, MetricCard, DeltaValue, LineChart, ChartLegend, BarChart, SegmentedControl, Popover, Dialog, Field, Input, Select, Icon, Tooltip } = window.BasisDesignSystem_6e7350;

function RiskScreen(){
  const [horizon,setHorizon]=React.useState('1d');
  const [dialog,setDialog]=React.useState(false);
  const breaches=LIMITS.filter(l=>l.value>l.limit);
  return (
    <>
      <PageHeader title="Risk & limits" meta="Firm risk engine · 16:00 ET snapshot · 99% confidence unless stated"
        actions={<>
          <SegmentedControl size="sm" value={horizon} onChange={setHorizon} options={[{value:'1d',label:'1D'},{value:'10d',label:'10D'},{value:'stress',label:'Stress'}]} />
          <Button size="sm" iconLeft="bell-plus" onClick={()=>setDialog(true)}>New alert</Button>
        </>} />
      {breaches.map(b=>(
        <Alert key={b.name} tone="negative" title={b.name+' limit breached'} style={{marginBottom:'var(--space-6)'}}
          actions={<><Button size="sm" variant="ghost" iconLeft="history">Breach log</Button><Button size="sm" iconLeft="eye">Review</Button></>}>
          {b.value.toFixed(1)}% against a {b.limit}% {b.owner.toLowerCase()} limit. Opened 14:32 ET, 1h 32m outstanding. Notify risk committee before 17:00 ET.
        </Alert>
      ))}
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'var(--space-6)',marginBottom:'var(--space-8)'}}>
        <MetricCard label="VaR (99%, 1d)" value="−1.86" unit="% NAV" delta={-0.12} invertDelta deltaLabel="1D" icon="gauge" spark={wave(30,-.2,1.4,3)} />
        <MetricCard label="Expected shortfall" value="−2.74" unit="% NAV" delta={-0.08} invertDelta deltaLabel="1D" icon="trending-down" />
        <MetricCard label="Beta-adjusted net" value="31.2" unit="% NAV" delta={0.9} deltaLabel="1D" icon="scale" />
        <MetricCard label="Stress: 2020 Feb–Mar" value="−9.4" unit="% NAV" tone="caution" icon="zap" footnote="repriced daily" />
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-6)',marginBottom:'var(--space-6)'}}>
        <Card dense title="Rolling VaR vs limit" subtitle="% NAV, 99% 1-day" icon="activity" padding="sm"
          footer={<span>Historical simulation · 2-year lookback · Source: firm risk engine</span>}>
          <ChartLegend style={{marginBottom:'var(--space-6)'}} series={[
            {key:'var',label:'VaR',color:'var(--chart-1)',value:'1.86%'},
            {key:'limit',label:'Limit',color:'var(--chart-4)',dashed:true,value:'2.50%'}]} />
          <LineChart height={168} labels={MONTHS} formatY={v=>v.toFixed(1)} series={[
            {key:'var',data:wave(12,.06,.35,2).map(v=>1.8+v),color:'var(--chart-1)'},
            {key:'limit',data:Array(12).fill(2.5),color:'var(--chart-4)',dashed:true}]} />
        </Card>
        <Card dense title="Factor exposure" subtitle="Standardised beta to firm factor model" icon="git-fork" padding="sm"
          actions={<Popover placement="bottom-end" title="Factor model" trigger={<IconButton icon="info" label="Model" size="sm" />}>
            Firm 14-factor model, weekly re-estimation, exposures standardised to a 1-sigma move in each factor.
          </Popover>}>
          <BarChart orientation="horizontal" signed barSize={14} gap={6} formatValue={v=>(v/100).toFixed(2)} data={ATTRIB_FACTOR.slice(0,5).concat([{label:'Crowding',value:-31}])} />
        </Card>
      </div>
      <Card padding="none" dense title="Limit register" subtitle="All mandate, committee and PM limits" icon="list-checks"
        actions={<Badge tone={breaches.length?'negative':'positive'} size="sm" icon={breaches.length?'alert-triangle':'check'}>{breaches.length} breach{breaches.length===1?'':'es'}</Badge>}
        footer={<span>Limits reviewed monthly by the risk committee · Last change 28 Jul</span>}>
        <DataTable dense rows={LIMITS.map((l,i)=>({id:'l'+i,...l}))} columns={[
          {key:'name',label:'Limit',emphasis:true,maxWidth:230},
          {key:'owner',label:'Owner',muted:true,width:150},
          {key:'value',label:'Current',numeric:true,width:96,render:(v,r)=>v.toFixed(1)+(r.unit==='% NAV'?'%':'')},
          {key:'limit',label:'Limit',numeric:true,width:88,render:v=>v.toFixed(1)+'%'},
          {key:'util',label:'Utilisation',sortable:false,width:250,render:(v,r)=><BarMeter value={r.value} limit={r.limit} max={r.max} showValue formatValue={x=>((x/r.limit)*100).toFixed(0)+'%'} />},
          {key:'status',label:'Status',sortable:false,width:110,render:(v,r)=>r.value>r.limit
            ?<Badge tone="negative" size="sm" icon="alert-triangle">Breach</Badge>
            :r.value>r.limit*0.85?<Badge tone="caution" size="sm">Near</Badge>:<Badge tone="positive" size="sm" dot>Within</Badge>},
        ]} />
      </Card>
      <Dialog open={dialog} onClose={()=>setDialog(false)} title="New limit alert" icon="bell-plus" subtitle="Notifies you and the risk desk"
        footer={<><Button size="sm" onClick={()=>setDialog(false)}>Cancel</Button><Button size="sm" variant="primary" onClick={()=>setDialog(false)}>Create alert</Button></>}>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-8)'}}>
          <Field label="Measure"><Select options={LIMITS.map(l=>({value:l.name,label:l.name}))} /></Field>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-8)'}}>
            <Field label="Trigger at" hint="Percentage of the limit"><Input mono suffix="% of limit" defaultValue="90" /></Field>
            <Field label="Channel"><Select options={[{value:'app',label:'In app'},{value:'email',label:'In app + email'},{value:'desk',label:'In app + risk desk'}]} /></Field>
          </div>
        </div>
      </Dialog>
    </>
  );
}
Object.assign(window,{RiskScreen});