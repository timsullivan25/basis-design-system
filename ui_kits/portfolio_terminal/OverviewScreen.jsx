const { Card, MetricCard, DeltaValue, Sparkline, LineChart, BarChart, DonutChart, ChartLegend, Accordion, Alert, Button, IconButton, Badge, SegmentedControl, BarMeter, Popover, Icon, DataTable } = window.BasisDesignSystem_6e7350;

function OverviewScreen({ onDrill }){
  const [period,setPeriod]=React.useState('ytd');
  const [hidden,setHidden]=React.useState([]);
  const [open,setOpen]=React.useState(['quant']);
  const toggleSeries=k=>setHidden(h=>h.includes(k)?h.filter(x=>x!==k):[...h,k]);
  const toggle=k=>setOpen(o=>o.includes(k)?o.filter(x=>x!==k):[...o,k]);
  return (
    <>
      <PageHeader title="Overview" meta="Global L/S Master · NAV as of 16:00 ET · P&L T+0 estimate"
        actions={<>
          <SegmentedControl size="sm" value={period} onChange={setPeriod} options={[{value:'1d',label:'1D'},{value:'1w',label:'1W'},{value:'mtd',label:'MTD'},{value:'qtd',label:'QTD'},{value:'ytd',label:'YTD'}]} />
          <Button size="sm" iconLeft="refresh-cw">Refresh</Button>
        </>} />
      <Alert tone="caution" compact title="Gross exposure is 182% against a 175% mandate limit"
        actions={<Button variant="link" size="xs" onClick={()=>onDrill('risk')}>Open risk</Button>} style={{marginBottom:'var(--space-8)'}} />
      <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:'var(--space-6)',marginBottom:'var(--space-8)'}}>
        {KPIS.map(k=>(
          <MetricCard key={k.key} label={k.label} value={k.value} unit={k.unit} delta={k.delta} deltaUnit={k.deltaUnit}
            deltaLabel={k.deltaLabel} icon={k.icon} spark={k.spark} tone={k.tone} invertDelta={k.invertDelta}
            footnote={k.footnote} onDrill={()=>onDrill(k.key==='var'?'risk':'positions')} />
        ))}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1.55fr 1fr',gap:'var(--space-6)',marginBottom:'var(--space-6)'}}>
        <Card dense title="Cumulative return" subtitle="Net of fees, YTD" icon="line-chart" padding="sm"
          actions={<Popover placement="bottom-end" title="How this is calculated" trigger={<IconButton icon="info" label="Methodology" size="sm" />}>
            Time-weighted, net of management and performance fees, geometrically linked daily. Benchmark is unhedged total return.
          </Popover>}
          footer={<span>Source: middle office · T+1 reconciled through 11 Aug</span>}>
          <ChartLegend hidden={hidden} onToggle={toggleSeries} style={{marginBottom:'var(--space-6)'}} series={[
            {key:'fund',label:'Fund',color:'var(--chart-1)',value:'+12.4%'},
            {key:'bench',label:'S&P 500',color:'var(--chart-benchmark)',dashed:true,value:'+9.1%'},
            {key:'peer',label:'HFRI Equity Hedge',color:'var(--chart-2)',value:'+6.8%'}]} />
          <LineChart height={196} zeroLine labels={MONTHS} hidden={hidden} formatY={v=>v.toFixed(0)+'%'} series={[
            {key:'fund',data:wave(12,1.15,2.4,1),color:'var(--chart-1)'},
            {key:'bench',data:wave(12,.82,1.5,3),color:'var(--chart-benchmark)',dashed:true},
            {key:'peer',data:wave(12,.62,1.1,6),color:'var(--chart-2)'}]} />
        </Card>
        <Card dense title="Capital by strategy" subtitle="% NAV" icon="pie-chart" padding="sm"
          footer={<span>4 strategies · 11 sleeves</span>}>
          <div style={{display:'flex',alignItems:'center',gap:'var(--space-9)',padding:'var(--space-4) 0'}}>
            <DonutChart size={132} thickness={15} total="$4.2B" label="AUM"
              data={STRATEGIES.map(s=>({label:s.label,value:s.nav,color:s.color}))} />
            <ChartLegend direction="column" series={STRATEGIES.map(s=>({key:s.key,label:s.label,color:s.color,value:s.nav.toFixed(1)+'%'}))} />
          </div>
        </Card>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-6)',marginBottom:'var(--space-6)'}}>
        <Card dense title="MTD attribution by sector" subtitle="bps of NAV" icon="bar-chart-3" padding="sm"
          actions={<Button size="xs" variant="ghost" iconRight="chevron-right" onClick={()=>onDrill('attribution')}>All factors</Button>}>
          <BarChart orientation="horizontal" signed barSize={15} gap={6} formatValue={v=>(v>0?'+':'−')+Math.abs(v)+' bps'} data={ATTRIB_SECTOR} />
        </Card>
        <Card dense title="Limit utilisation" subtitle="Against mandate and committee limits" icon="gauge" padding="sm"
          actions={<Badge tone="negative" size="sm" icon="alert-triangle">1 breach</Badge>}>
          <div style={{display:'flex',flexDirection:'column',gap:'var(--space-6)'}}>
            {LIMITS.slice(0,5).map(l=>(
              <div key={l.name}>
                <div style={{display:'flex',justifyContent:'space-between',fontSize:'var(--text-2xs)',color:'var(--text-secondary)',marginBottom:3}}>
                  <span>{l.name}</span><span style={{fontFamily:'var(--font-mono)',color:'var(--text-tertiary)'}}>limit {l.limit}{l.unit==='% NAV'?'%':''}</span>
                </div>
                <BarMeter value={l.value} limit={l.limit} max={l.max} showValue formatValue={v=>v.toFixed(1)+'%'} />
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Card dense title="Strategy detail" subtitle="Expand a strategy to see its sleeves" icon="layers" padding="none"
        actions={<Button size="xs" variant="ghost" iconRight="chevron-right" onClick={()=>onDrill('positions')}>All positions</Button>}>
        <div style={{padding:'var(--space-6)'}}>
          <Accordion openKeys={open} onToggle={toggle} items={STRATEGIES.map(s=>({
            key:s.key,label:s.label,icon:s.icon,
            summary:(<>
              <span style={{fontFamily:'var(--font-mono)',fontVariantNumeric:'tabular-nums',color:'var(--text-body)'}}>{s.nav.toFixed(1)}% NAV</span>
              <span style={{width:64,display:'inline-flex',justifyContent:'flex-end'}}><DeltaValue value={s.mtd} size="xs" /></span>
              <Sparkline data={wave(20,s.mtd*2,1.4,3)} width={64} height={16} />
            </>),
            content:(
              <DataTable dense rows={s.sleeves.map((x,i)=>({id:s.key+i,...x}))} columns={[
                {key:'name',label:'Sleeve',emphasis:true,maxWidth:260},
                {key:'names',label:'Positions',numeric:true,width:90},
                {key:'nav',label:'% NAV',numeric:true,width:90,render:v=>v.toFixed(1)+'%'},
                {key:'mtd',label:'MTD',numeric:true,width:100,render:v=><DeltaValue value={v} glyph="none" size="xs" />},
                {key:'util',label:'Risk budget used',numeric:true,width:200,render:v=><BarMeter value={v} limit={80} showValue formatValue={x=>x+'%'} />},
              ]} />)
          }))} />
        </div>
      </Card>
    </>
  );
}
Object.assign(window,{OverviewScreen});