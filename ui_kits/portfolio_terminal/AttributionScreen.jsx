const { Card, DataTable, DeltaValue, BarChart, LineChart, ChartLegend, SegmentedControl, Button, IconButton, Badge, Tabs, Popover, Accordion, Sparkline } = window.BasisDesignSystem_6e7350;

function AttributionScreen(){
  const [basis,setBasis]=React.useState('sector');
  const [period,setPeriod]=React.useState('mtd');
  const data=basis==='sector'?ATTRIB_SECTOR:ATTRIB_FACTOR;
  const total=data.reduce((a,d)=>a+d.value,0);
  const rows=STRATEGIES.map((s,i)=>({id:s.key,strategy:s.label,nav:s.nav,gross:(s.nav*2.1).toFixed(1),
    sel:Math.round(s.mtd*70),alloc:Math.round(s.mtd*22),fx:i===2?-9:i===3?3:0,total:Math.round(s.mtd*100),spark:wave(20,s.mtd*2,1.2,i+1)}));
  return (
    <>
      <PageHeader title="Attribution" meta={'Global L/S Master · '+(period==='mtd'?'month to date':'year to date')+' · bps of NAV, gross of financing'}
        actions={<>
          <SegmentedControl size="sm" value={period} onChange={setPeriod} options={[{value:'mtd',label:'MTD'},{value:'qtd',label:'QTD'},{value:'ytd',label:'YTD'}]} />
          <Button size="sm" iconLeft="download">Export</Button>
        </>} />
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-6)',marginBottom:'var(--space-6)'}}>
        <Card dense title="Contribution" subtitle="bps of NAV" icon="bar-chart-3" padding="sm"
          actions={<SegmentedControl size="sm" value={basis} onChange={setBasis} options={[{value:'sector',label:'Sector'},{value:'factor',label:'Factor'}]} />}
          footer={<span>Residual is the part of return the model does not explain.</span>}>
          <BarChart orientation="horizontal" signed barSize={16} gap={7} formatValue={v=>(v>0?'+':'−')+Math.abs(v)+' bps'} data={data} />
          <div style={{display:'flex',justifyContent:'space-between',marginTop:'var(--space-7)',paddingTop:'var(--space-6)',borderTop:'1px solid var(--border-subtle)',fontSize:'var(--text-2xs)',color:'var(--text-secondary)'}}>
            <span>Total explained</span>
            <DeltaValue value={total} unit="bps" size="sm" />
          </div>
        </Card>
        <Card dense title="Daily contribution" subtitle="Long book vs short book, bps" icon="activity" padding="sm">
          <ChartLegend style={{marginBottom:'var(--space-6)'}} series={[
            {key:'long',label:'Long book',color:'var(--chart-1)',value:'+218 bps'},
            {key:'short',label:'Short book',color:'var(--chart-4)',value:'−37 bps'}]} />
          <LineChart height={188} zeroLine area labels={['1','','5','','10','','15','','20']} formatY={v=>v.toFixed(0)} series={[
            {key:'long',data:wave(20,11,14,1),color:'var(--chart-1)'},
            {key:'short',data:wave(20,-2,9,5),color:'var(--chart-4)'}]} />
        </Card>
      </div>
      <Card padding="none" dense title="By strategy" subtitle="Selection, allocation and currency effects" icon="layers"
        footer={<span>Brinson-Fachler decomposition · daily linked · reconciled through 11 Aug</span>}>
        <DataTable dense rows={rows} columns={[
          {key:'strategy',label:'Strategy',emphasis:true,width:170},
          {key:'nav',label:'% NAV',numeric:true,width:88,render:v=>v.toFixed(1)+'%'},
          {key:'gross',label:'Gross',numeric:true,width:88,render:v=>v+'%'},
          {key:'sel',label:'Selection',numeric:true,width:110,description:'Return from picking names within a sleeve',render:v=><DeltaValue value={v} unit="bps" glyph="none" size="xs" />},
          {key:'alloc',label:'Allocation',numeric:true,width:110,description:'Return from sizing sleeves differently to the benchmark',render:v=><DeltaValue value={v} unit="bps" glyph="none" size="xs" />},
          {key:'fx',label:'Currency',numeric:true,width:100,render:v=><DeltaValue value={v} unit="bps" glyph="none" size="xs" />},
          {key:'total',label:'Total',numeric:true,emphasis:true,width:104,render:v=><DeltaValue value={v} unit="bps" size="xs" />},
          {key:'spark',label:'20d',sortable:false,width:90,render:v=><Sparkline data={v} width={72} height={18} />},
        ]} />
      </Card>
    </>
  );
}
Object.assign(window,{AttributionScreen});