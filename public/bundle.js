!function(t,a,e){"use strict";const n=t.timeParse("%Y-%m-%d"),r=t=>t.repo,d=window.innerWidth,s=window.innerHeight,c=20,o=0,i=d-o-0,l=s-c-20,p=t=>t.date;t.json("https://gist.githubusercontent.com/curran/18287ef2c4b64ffba32000aad47c292b/raw/eb2dd48d383f09a70b23dc35c3e8eb7b6c7c31ad/all-d3-commits.json").then((g=>{(({data:e,stackedData:n})=>{const r=t.scaleTime().domain(t.extent(e,p)).range([0,i]),g=t.scaleLinear().domain([t.min(n,(a=>t.min(a,(t=>t[0])))),t.max(n,(a=>t.max(a,(t=>t[1]))))]).range([l,0]),m=t.area().x((t=>r(t.data.date))).y0((t=>g(t[0]))).y1((t=>g(t[1]))),f=t.select("body").append("svg").attr("width",d).attr("height",s).append("g").attr("transform",`translate(${o},${c})`),h=t.randomNormal.source(t.randomLcg(.5))(30,10),k=t.scaleOrdinal().range(n.map(((a,e)=>{const r=e/n.length;return t.hcl(360*r,50,h())})));f.append("g").call(t.axisTop(r).tickSize(-l).tickPadding(6).ticks(20)),f.append("g").attr("transform",`translate(0, ${l})`).call(t.axisBottom(r).tickSize(0).tickPadding(5).ticks(20)).selectAll("line").remove(),n.sort(((a,e)=>t.ascending(a.index,e.index)));const u=n[0],b=n[n.length-1],x=u.map(((t,a)=>Object.assign([t[0]-.5,b[a][1]+.5],{data:t.data})));f.append("path").attr("d",m(x)),f.append("g").selectAll("path").data(n).enter().append("a").attr("href",(t=>`https://github.com/d3/${t.key}`)).attr("target","_blank").append("path").attr("class","area").attr("d",m).attr("fill",(t=>k(t.key))).append("title").text((t=>t.key));const y=f.append("g").selectAll("text").data(n);y.enter().append("text").attr("class","area-label").merge(y).text((t=>t.key)).attr("transform",a.areaLabel(m))})((a=>{a.forEach((a=>{a.date=t.utcWeek.floor(n(a.date.split(" ")[0]))}));const d=t.group(a,(t=>t.date),r),s=t.group(a,r),c=Array.from(s.keys()),[o,i]=t.extent(a,(t=>t.date)),l=t.utcWeeks(o,i),p=new Map;for(const t of c){const a=l.map((a=>{const e=d.get(a),n=e?e.get(t):null;return n?n.length:0})),n=e.blur().radius(15)(a);p.set(t,n)}const g=[];return l.forEach(((t,a)=>{const e={date:t};for(let t of c)e[t]=p.get(t)[a];g.push(e)})),{data:a,stackedData:t.stack().offset(t.stackOffsetWiggle).order(t.stackOrderAppearance).keys(c)(g)}})(g))}))}(d3,d3,d3);
//# sourceMappingURL=bundle.js.map