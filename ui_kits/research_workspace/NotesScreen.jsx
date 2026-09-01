const { Card, Button, IconButton, Badge, Tag, Input, Select, SegmentedControl, Icon, Tooltip, Popover, Alert } = window.BasisDesignSystem_6e7350;

function NotesScreen({ onOpenCompany }){
  const [active,setActive]=React.useState('n1');
  const [type,setType]=React.useState('all');
  const [q,setQ]=React.useState('');
  const list=NOTES.filter(n=>(type==='all'||n.type.toLowerCase()===type)&&(q===''||(n.title+n.body).toLowerCase().includes(q.toLowerCase())));
  const note=NOTES.find(n=>n.id===active)||list[0];
  return (
    <>
      <PageHeader title="Notes" meta="Desk research · 4 notes · shared with 6 people"
        actions={<><Button size="sm" iconLeft="filter">Saved filters</Button><Button size="sm" variant="primary" iconLeft="file-plus">New note</Button></>} />
      <div style={{display:'flex',gap:'var(--space-6)',alignItems:'flex-start'}}>
        <Card padding="none" dense style={{width:320,flex:'0 0 auto'}}
          title={<span>Inbox</span>} icon="inbox"
          actions={<SegmentedControl size="sm" value={type} onChange={setType} options={[{value:'all',label:'All'},{value:'initiation',label:'Init'},{value:'update',label:'Updates'}]} />}>
          <div style={{padding:'var(--space-5) var(--space-6)',borderBottom:'1px solid var(--border-subtle)'}}>
            <Input size="sm" iconLeft="search" placeholder="Search notes" value={q} onChange={e=>setQ(e.target.value)} onClear={()=>setQ('')} />
          </div>
          <div style={{display:'flex',flexDirection:'column',maxHeight:520,overflow:'auto'}}>
            {list.map(n=>{
              const on=n.id===active;
              return (
                <button key={n.id} onClick={()=>setActive(n.id)} style={{display:'flex',flexDirection:'column',gap:4,padding:'var(--space-6)',background:on?'var(--surface-selected)':'transparent',border:'none',borderBottom:'1px solid var(--border-subtle)',borderLeft:'2px solid '+(on?'var(--blue-700)':'transparent'),cursor:'pointer',textAlign:'left'}}>
                  <div style={{display:'flex',alignItems:'center',gap:6,width:'100%'}}>
                    <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-2xs)',color:on?'var(--text-brand)':'var(--text-secondary)'}}>{n.ticker}</span>
                    <Badge tone={n.type==='Initiation'?'info':n.type==='Method'?'neutral':'positive'} size="sm">{n.type}</Badge>
                    <span style={{marginLeft:'auto',fontSize:'var(--text-3xs)',color:'var(--text-tertiary)'}}>{n.date}</span>
                  </div>
                  <span style={{fontSize:'var(--text-sm)',fontWeight:on?600:500,color:'var(--text-primary)',lineHeight:1.3}}>{n.title}</span>
                  <span style={{fontSize:'var(--text-2xs)',color:'var(--text-tertiary)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',maxWidth:260}}>{n.author} · {n.body.slice(0,52)}…</span>
                </button>
              );
            })}
          </div>
        </Card>
        <Card dense style={{flex:'1 1 auto',minWidth:0}} title={note.title} subtitle={note.author+' · '+note.date+' · '+note.type} icon="file-text"
          actions={<>
            <Badge tone={note.conviction==='High'?'positive':note.conviction==='Medium'?'caution':'neutral'} size="sm">{note.conviction==='—'?'No call':note.conviction+' conviction'}</Badge>
            <IconButton icon="link" label="Copy link" size="sm" />
            <IconButton icon="printer" label="Print" size="sm" />
            <IconButton icon="more-horizontal" label="More" size="sm" />
          </>}
          footer={<span>Version 3 · edited 2h ago · visible to Global L/S team</span>}>
          <div style={{display:'flex',alignItems:'center',gap:'var(--space-4)',marginBottom:'var(--space-8)'}}>
            {note.ticker!=='—'?<Tag icon="briefcase" interactive onClick={()=>onOpenCompany(CANDIDATES[0])}>{note.ticker}</Tag>:null}
            <Tag icon="tag">Energy</Tag><Tag icon="tag">Refining</Tag>
          </div>
          <p className="prose-serif" style={{maxWidth:640,marginBottom:'var(--space-9)'}}>{note.body}</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,max-content)',gap:'var(--space-6) var(--space-11)',paddingTop:'var(--space-8)',borderTop:'1px solid var(--border-subtle)'}}>
            {[['Position','4.2% NAV'],['Entry','12 Jun at $101.20'],['Base case','$131'],['Next catalyst','Q3 print, 28 Oct']].map(([l,v])=>(
              <div key={l} style={{display:'flex',flexDirection:'column',gap:2}}>
                <span style={{fontSize:'var(--text-3xs)',fontWeight:600,letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-tertiary)'}}>{l}</span>
                <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-sm)',color:'var(--text-primary)'}}>{v}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
Object.assign(window,{NotesScreen});