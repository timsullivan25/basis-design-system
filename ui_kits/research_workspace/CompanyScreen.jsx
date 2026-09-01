const { Card, DataTable, DeltaValue, Sparkline, LineChart, BarChart, ChartLegend, DonutChart, MetricCard, Tabs, Breadcrumb, Button, IconButton, Badge, Tag, Accordion, Popover, Tooltip, Icon, SegmentedControl, BarMeter, Alert } = window.BasisDesignSystem_6e7350;

function CompanyScreen({ company, onBack }){
  const [tab,setTab]=React.useState('summary');
  const [open,setOpen]=React.useState(['thesis']);
  const toggle=k=>setOpen(o=>o.includes(k)?o.filter(x=>x!==k):[...o,k]);
  const c=company||CANDIDATES[0];
  return (
    <>
      <div style={{marginBottom:'var(--space-6)'}}>
        <Breadcrumb onNavigate={onBack} items={[{value:'screens',label:'Screens',icon:'filter'},{value:'screen',label:'Refining margin torque'},{label:c.ticker}]} />
      </div>
      <PageHeader title={c.name} meta={c.ticker+' · '+c.sector+' · $'+c.mcap+'bn market cap · reported in USD'}
        actions={<>
          {c.held?<Badge tone="info" icon="briefcase">Held 4.2% NAV</Badge>:null}
          <Button size="sm" iconLeft="star">Watch</Button>
          <Button size="sm" iconLeft="file-plus">New note</Button>
          <Button size="sm" variant="primary" iconLeft="plus">Add to book</Button>
        </>} />
      <Tabs value={tab} onChange={setTab} size="sm" style={{marginBottom:'var(--space-8)'}} tabs={[
        {value:'summary',label:'Summary',icon:'layout-dashboard'},
        {value:'model',label:'Model',count:4},
        {value:'ownership',label:'Ownership'},
        {value:'notes',label:'Notes',count:3},
      ]} />
      <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:'var(--space-6)',marginBottom:'var(--space-8)'}}>
        <MetricCard label="EV/EBITDA" value={c.ev.toFixed(1)} unit="×" delta={-0.4} deltaUnit="×" deltaLabel="3m" invertDelta icon="scale" />
        <MetricCard label="FCF yield" value={c.fcf.toFixed(1)} unit="%" delta={1.2} deltaLabel="3m" tone="positive" icon="banknote" />
        <MetricCard label="ROIC" value={c.roic.toFixed(1)} unit="%" delta={0.8} deltaLabel="1y" icon="target" />
        <MetricCard label="EPS revisions" value={(c.rev>0?'+':'−')+Math.abs(c.rev).toFixed(1)} unit="%" delta={c.rev} deltaLabel="3m" icon="trending-up" />
        <MetricCard label="Composite score" value={String(c.score)} unit="/100" icon="gauge" footnote="rank in screen: 2" />
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1.5fr 1fr',gap:'var(--space-6)',marginBottom:'var(--space-6)'}}>
        <Card dense title="Price and consensus target" subtitle="24 months" icon="line-chart" padding="sm"
          actions={<SegmentedControl size="sm" value="2y" onChange={()=>{}} options={[{value:'6m',label:'6M'},{value:'2y',label:'2Y'},{value:'5y',label:'5Y'}]} />}
          footer={<span>Consensus from 24 contributing brokers · updated daily</span>}>
          <ChartLegend style={{marginBottom:'var(--space-6)'}} series={[
            {key:'px',label:'Price',color:'var(--chart-1)',value:'$118.40'},
            {key:'tgt',label:'Consensus target',color:'var(--chart-2)',dashed:true,value:'$131.00'}]} />
          <LineChart height={190} labels={['Q1','Q2','Q3','Q4','Q1','Q2','Q3','Q4']} formatY={v=>'$'+v.toFixed(0)} series={[
            {key:'px',data:rwave(24,1.4,4,2).map(v=>92+v),color:'var(--chart-1)'},
            {key:'tgt',data:rwave(24,1.1,1.6,6).map(v=>104+v),color:'var(--chart-2)',dashed:true}]} />
        </Card>
        <Card dense title="Segment mix" subtitle="EBITDA, last 12 months" icon="pie-chart" padding="sm">
          <div style={{display:'flex',alignItems:'center',gap:'var(--space-8)',padding:'var(--space-4) 0'}}>
            <DonutChart size={124} thickness={14} total="$41.2B" label="EBITDA" data={[
              {label:'Upstream',value:52,color:'var(--chart-1)'},{label:'Products',value:28,color:'var(--chart-2)'},
              {label:'Chemicals',value:14,color:'var(--chart-3)'},{label:'Other',value:6,color:'var(--chart-10)'}]} />
            <ChartLegend size="sm" direction="column" series={[
              {key:'u',label:'Upstream',color:'var(--chart-1)',value:'52%'},{key:'p',label:'Products',color:'var(--chart-2)',value:'28%'},
              {key:'c',label:'Chemicals',color:'var(--chart-3)',value:'14%'},{key:'o',label:'Other',color:'var(--chart-10)',value:'6%'}]} />
          </div>
        </Card>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-6)'}}>
        <Card dense title="Thesis" subtitle="Owned by A. Kessler" icon="notebook-pen" padding="sm">
          <Accordion dense openKeys={open} onToggle={toggle} items={[
            {key:'thesis',label:'Why we own it',summary:<Badge tone="positive" size="sm">High conviction</Badge>,content:(
              <p className="prose-serif" style={{margin:0,fontSize:'var(--text-sm)'}}>Mid-cycle crack spreads are structurally wider than the 2015–19 window and the capex cycle has not responded. The company converts that into buybacks at roughly 8% of market cap a year.</p>)},
            {key:'risk',label:'What breaks it',summary:<span style={{fontSize:'var(--text-2xs)'}}>3 risks</span>,content:(
              <ul style={{margin:0,paddingLeft:16,fontSize:'var(--text-xs)',color:'var(--text-body)',lineHeight:1.7}}>
                <li>Spreads compress to 2019 levels for two consecutive quarters</li>
                <li>Buyback pauses in favour of an acquisition</li>
                <li>Refinery outage above 30 days at the Gulf complex</li>
              </ul>)},
            {key:'levels',label:'Levels',summary:<span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-2xs)'}}>96 / 131 / 158</span>,content:(
              <div style={{display:'flex',gap:'var(--space-10)',fontSize:'var(--text-xs)'}}>
                {[['Downside','$96','var(--text-negative)'],['Base','$131','var(--text-primary)'],['Upside','$158','var(--text-positive)']].map(([l,v,col])=>(
                  <div key={l} style={{display:'flex',flexDirection:'column',gap:2}}>
                    <span style={{fontSize:'var(--text-3xs)',fontWeight:600,letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-tertiary)'}}>{l}</span>
                    <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-lg)',color:col}}>{v}</span>
                  </div>))}
              </div>)},
          ]} />
        </Card>
        <Card padding="none" dense title="Model summary" subtitle="Firm estimates vs consensus" icon="table-2"
          footer={<span>Firm model last updated 8 Aug by A. Kessler</span>}>
          <DataTable dense rows={[
            {id:'m1',line:'Revenue ($bn)',fy24:344.6,fy25:352.1,cons:349.0,diff:0.9},
            {id:'m2',line:'EBITDA ($bn)',fy24:41.2,fy25:44.8,cons:42.1,diff:6.4},
            {id:'m3',line:'EPS ($)',fy24:8.42,fy25:9.61,cons:8.98,diff:7.0},
            {id:'m4',line:'FCF ($bn)',fy24:28.4,fy25:32.9,cons:30.1,diff:9.3},
            {id:'m5',line:'Buyback ($bn)',fy24:17.5,fy25:20.0,cons:18.2,diff:9.9},
          ]} columns={[
            {key:'line',label:'Line',emphasis:true,maxWidth:150},
            {key:'fy24',label:'FY24',numeric:true,width:88},
            {key:'fy25',label:'FY25E',numeric:true,width:88},
            {key:'cons',label:'Consensus',numeric:true,width:104,muted:true},
            {key:'diff',label:'vs cons',numeric:true,width:96,render:v=><DeltaValue value={v} glyph="none" size="xs" />},
          ]} />
        </Card>
      </div>
    </>
  );
}
Object.assign(window,{CompanyScreen});