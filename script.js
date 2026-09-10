const schools = [
  {name:"SDN 01 Sukamaju", level:"SD", recipients:320, portions:320, status:"Selesai"},
  {name:"SDN 02 Sukamaju", level:"SD", recipients:285, portions:290, status:"Selesai"},
  {name:"SDN 03 Sukamaju", level:"SD", recipients:310, portions:315, status:"Selesai"},
  {name:"SDN 04 Sukamaju", level:"SD", recipients:264, portions:270, status:"Proses"},
  {name:"SDN 05 Sukamaju", level:"SD", recipients:301, portions:305, status:"Selesai"},
  {name:"SMPN 01 Sukamaju", level:"SMP", recipients:410, portions:410, status:"Selesai"},
  {name:"SMPN 02 Sukamaju", level:"SMP", recipients:356, portions:360, status:"Proses"},
  {name:"SMPN 03 Sukamaju", level:"SMP", recipients:398, portions:400, status:"Selesai"},
  {name:"SMAN 01 Sukamaju", level:"SMA", recipients:340, portions:345, status:"Selesai"},
  {name:"SMKN 01 Sukamaju", level:"SMK", recipients:292, portions:295, status:"Menunggu"},
  {name:"TK Aisyiyah 01", level:"TK", recipients:160, portions:160, status:"Selesai"},
  {name:"TK Aisyiyah 02", level:"TK", recipients:350, portions:360, status:"Proses"}
];

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

function statusClass(status){
  return status === "Selesai" ? "done" : status === "Proses" ? "process" : "wait";
}
function schoolRow(s){
  return `<tr><td><b>${s.name}</b></td><td>${s.level}</td><td>${s.recipients.toLocaleString("id-ID")}</td><td>${s.portions.toLocaleString("id-ID")}</td><td><span class="status ${statusClass(s.status)}">${s.status}</span></td></tr>`;
}
function renderTables(){
  $("#dashboardTable").innerHTML = schools.slice(0,6).map(schoolRow).join("");
  renderSchoolTable();
}
function renderSchoolTable(){
  const q = ($("#schoolSearch")?.value || "").toLowerCase();
  const filter = $("#schoolFilter")?.value || "all";
  const rows = schools.filter(s => s.name.toLowerCase().includes(q) && (filter==="all" || s.status===filter));
  $("#schoolTable").innerHTML = rows.length ? rows.map(schoolRow).join("") : `<tr><td colspan="5">Tidak ada data.</td></tr>`;
}
function renderDistribution(){
  $("#distributionCards").innerHTML = schools.map((s,i) => `
    <article class="distribution-card">
      <span class="label">${s.level}</span>
      <h3>${s.name}</h3>
      <p>${s.recipients.toLocaleString("id-ID")} penerima • ${s.portions.toLocaleString("id-ID")} porsi</p>
      <div class="route"><span>Progres pengiriman</span><b>${s.status==="Selesai"?100:s.status==="Proses"?65:10}%</b></div>
      <div class="progress"><i style="width:${s.status==="Selesai"?100:s.status==="Proses"?65:10}%"></i></div>
    </article>`).join("");
}

function showSection(id){
  $$(".section").forEach(x=>x.classList.remove("active-section"));
  $(`#${id}`).classList.add("active-section");
  $$(".nav-item").forEach(x=>x.classList.toggle("active", x.dataset.section===id));
  $("#sidebar").classList.remove("open");
  window.scrollTo({top:0,behavior:"smooth"});
}
$$(".nav-item").forEach(btn => btn.addEventListener("click",()=>showSection(btn.dataset.section)));
$$("[data-go]").forEach(btn => btn.addEventListener("click",()=>showSection(btn.dataset.go)));

$("#menuBtn").addEventListener("click",()=>$("#sidebar").classList.toggle("open"));
$("#schoolSearch").addEventListener("input",renderSchoolTable);
$("#schoolFilter").addEventListener("change",renderSchoolTable);

$("#exportBtn").addEventListener("click",()=>{
  const header = "Sekolah,Jenjang,Penerima,Porsi,Status\n";
  const body = schools.map(s=>[s.name,s.level,s.recipients,s.portions,s.status].join(",")).join("\n");
  const blob = new Blob([header+body],{type:"text/csv;charset=utf-8;"});
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="data-penerima-sppg.csv"; a.click(); URL.revokeObjectURL(a.href);
});

$("#saveSettings").addEventListener("click",()=>{
  localStorage.setItem("sppgName",$("#sppgName").value);
  localStorage.setItem("headName",$("#headName").value);
  localStorage.setItem("location",$("#location").value);
  $("#saveMessage").textContent="✓ Pengaturan tersimpan di browser ini.";
});

["sppgName","headName","location"].forEach(id=>{
  const saved=localStorage.getItem(id);
  if(saved) $("#"+id).value=saved;
});

const now = new Date();
$("#todayChip").textContent = now.toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"});

renderTables();
renderDistribution();
