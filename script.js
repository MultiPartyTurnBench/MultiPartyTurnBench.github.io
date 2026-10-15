'use strict';
const AGENTS = [
  ['GPT-Live-1',95.8,54.7],
  ['Gemini-3.8-Live',94.4,51.1],
  ['MiniCPM-o-4.5',90.6,50.7],
  ['Realtime-Venus',86.1,47.7],
  ['Step-Audio3-Realtime',50.0,46.9]
];
const chart=document.getElementById('agent-chart');
if(chart){
  for(const [name,start,stop] of AGENTS){
    const row=document.createElement('div');row.className='chart-row';
    const title=document.createElement('div');title.className='chart-name';title.textContent=name;
    const bars=document.createElement('div');bars.className='chart-bars';
    for(const [type,value] of [['start',start],['stop',stop]]){
      const track=document.createElement('div');track.className='bar-track';
      const bar=document.createElement('div');bar.className='bar '+type;bar.style.width=`${value}%`;
      const num=document.createElement('span');num.textContent=value.toFixed(1);bar.appendChild(num);track.appendChild(bar);bars.appendChild(track);
    }
    row.appendChild(title);row.appendChild(bars);chart.appendChild(row);
  }
  const axis=document.createElement('div');axis.className='chart-axis';axis.innerHTML='<span>0</span><span>25</span><span>50</span><span>75</span><span>100</span>';chart.appendChild(axis);
}
const copyBtn=document.getElementById('copy-btn');
if(copyBtn){copyBtn.addEventListener('click',async()=>{
  const value=document.getElementById('bibtex').textContent;
  try{await navigator.clipboard.writeText(value);copyBtn.textContent='Copied!';}
  catch(err){const selection=window.getSelection();const range=document.createRange();range.selectNodeContents(document.getElementById('bibtex'));selection.removeAllRanges();selection.addRange(range);copyBtn.textContent='Select & copy';}
  window.setTimeout(()=>copyBtn.textContent='Copy',1800);
});}
