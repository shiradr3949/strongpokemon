const body = document.getElementById("body");
const Pnameon = localStorage.getItem("names");
const Srate = Number(localStorage.getItem("scorerate"));
const HPrate = Number(localStorage.getItem("HPrate"));
const Rrate = Number(localStorage.getItem("Rrate"));
const Bresist = Number(localStorage.getItem("resist"));
const PMm = [0,1,2,3,4,5];
PMm[0] = JSON.parse(localStorage.getItem("PK1"));
PMm[1] = JSON.parse(localStorage.getItem("PK2"));
PMm[2] = JSON.parse(localStorage.getItem("PK3"));
PMm[3] = JSON.parse(localStorage.getItem("PK4"));
PMm[4] = JSON.parse(localStorage.getItem("PK5"));
PMm[5] = JSON.parse(localStorage.getItem("PK6"));
const BOSSs = JSON.parse(localStorage.getItem("BOSS"));
let BOSS = {...BOSSs, properties: {...BOSSs.properties}}; //objectを中までコピーする。
let PM = PMm.map(v => ({...v})); //mapは配列の各要素を取り出す。
let Bskilltype = [0,1,2,3];
let typer = [0,1,2,3];
let select = [0,1,2,3];
let Bskiller;
let SNdp;
let PK1;
let PK2;
let status1;
let status2;
let namedp1;
let namedp2;
let type11;
let type12;
let type21;
let type22;
let ARdp1;
let BRdp1;
let CRdp1;
let DRdp1;
let SRdp1;
let ARdp2;
let BRdp2;
let CRdp2;
let DRdp2;
let SRdp2;
let dps;
let Lv;
let name;
let HPdp;
let MHPdp;
let attack;
let change;
let Adp;
let Cdp;
let subPK;
let subPK1;
let subPK2;
let subPK3;
let subPK4;
let subPK5;
let subPK6;
let skill1;
let skill2;
let skill3;
let skill4;
let skill1dp;
let skill2dp;
let skill3dp;
let skill4dp;
let skiller1;
let skiller2;
let PN1;
let PKpic1;
let PKname1;
let F1;
let Fdp11;
let Fdp12;
let skiller;
let skilltype;
let bodytype1;
let bodytype2;
let bodytype11;
let bodytype12;
let bodytype21;
let bodytype22;
let PN2;
let PKpic2;
let PKname2;
let F2;
let Fdp21;
let Fdp22;
let healeder1;
let healeder2;
let MGdp;
let MG;
let MA;
let MAXdp;
let MAX;
let weather = "cansel";
let field = "cansel";
let score = 0;
let turn = 0;
let voice = 1;
let vitalpt = 0;
let plushit1 = 0;
let plushit2 = 0;
let dmg = 2;
let AR1 = 6;
let BR1 = 6;
let CR1 = 6;
let DR1 = 6;
let SR1 = 6;
let KR1 = 6;
let AR2 = 6;
let BR2 = 6;
let CR2 = 6;
let DR2 = 6;
let SR2 = 6;
let KR2 = 6;
let chaos = 0;
let ID = 10;
let minus = 0;
let bothchange = 0;
let firsted = 0;
let dies = 0;
let diept = 6;
let shields = 0;
let WApt = 0;
let pt1 = 0;
let pt2 = 0;
let windpt1 = 0;
let windpt2 = 0;
let healID1 = 0;
let healID2 = 0;
let windrate1 = 1;
let windrate2 = 1;
let unspeedpt = 0;
let weatherpt = 0;
let fieldpt = 0;
let MAXpt = 0;
let futurehp1 = 0;
let futurehp2 = 0;
let PBpt1 = 0;
let SBpt1 = 0;
let OBpt1 = 0;
let PBpt2 = 0;
let SBpt2 = 0;
let OBpt2 = 0;
let shieldpt1 = 0;
let shieldpt2 = 0;
let blessing = 1;
let nosongpt1 = 0;
let nosongpt2 = 0;
let gravitypt = 0;
let tries = 0;
let selected = 0;
let hpbars = 99;
let audioed1 = false;
let audioed2 = false;
let attackstorage = false;
let changestorage = false;
let changer = false;
let nodmg = false;
let first = false;
let down = false;
let chaosdp = false;
let wince1 = false;
let wince2 = false;
let heal1 = false;
let heal2 = false;
let healdp1 = false;
let healdp2 = false;
let highhitrate = false;
let hyperhitrate = false;
let breakarmor = false;
let breakarmored1 = false;
let breakarmored2 = false;
let BA1 = false;
let BA2 = false;
let AH = false;
let afterback1 = false;
let afterback2 = false;
let heatchange = false;
let HC1 = false;
let HC2 = false;
let CR1h1 = false;
let CR1h2 = false;
let outBR0h1 = false;
let outBR0h2 = false;
let Wattack = false;
let Wattacked = false;
let clearbody = false;
let CB1 = false;
let CB2 = false;
let backwind1 = false;
let backwind2 = false;
let suicide1 = false;
let suicide2 = false;
let recoil = false;
let flying1 = false;
let flying2 = false;
let againheal = false;
let MGstart = false;
let MGed = false;
let MAXstart = false;
let MAXed = false;
let formed1 = false;
let formed2 = false;
let resist = false;
let RE1 = false;
let RE2 = false;
let transform1 = false;
let transform2 = false;
let Fdown1 = false;
let Fdown2 = false;
let startdash1 = false;
let startdash2 = false;
let unspeed = false;
let fishes1 = false;
let fishes2 = false;
let scatter = false;
let AR1five1 = false;
let AR1five2 = false;
let snowdown1 = false;
let snowdown2 = false;
let illusion1 = false;
let illusion2 = false;
let vision1 = false;
let vision2 = false;
let sturdy1 = false;
let sturdy2 = false;
let weather1 = false;
let weather2 = false;
let sunny = false;
let rainy = false;
let sandstrom = false;
let snowy = false;
let field1 = false;
let field2 = false;
let phycho = false;
let elec = false;
let mist = false;
let grass = false;
let shield1 = false;
let shield2 = false;
let MAXshield1 = false;
let MAXshield2 = false;
let shielddp1 = false;
let shielddp2 = false;
let onekilloff1 = false;
let onekilloff2 = false;
let firster1 = false;
let firster2 = false;
let skyoff1 = false;
let skyoff2 = false;
let nochaos = false;
let Pbarrier1 = false;
let Pbarrier2 = false;
let Sbarrier1 = false;
let Sbarrier2 = false;
let Obarrier1 = false;
let Obarrier2 = false;
let PBed = false;
let SBed = false;
let OBed = false;
let breakPB1 = false;
let breakPB2 = false;
let breakSB1 = false;
let breakSB2 = false;
let breakOB1 = false;
let breakOB2 = false;
let PBing1 = false;
let PBing2 = false;
let SBing1 = false;
let SBing2 = false;
let OBing1 = false;
let OBing2 = false;
let reaction = false;
let outskin = false;
let drum = false;
let secondattack1 = false;
let secondattack2 = false;
let smog = false;
let dier1 = false;
let dier2 = false;
let speeder1 = false;
let speeder2 = false;
let AH2 = false;
let AMH = false;
let noattack = false;
let noA1 = false;
let noA2 = false;
let nosong1 = false;
let nosong2 = false;
let noAdown = false;
let notAdown = false;
let daruma = false;
let twicevoice = false;
let KAD1 = false;
let KAD2 = false;
let gravity = false;
let gravities = false;
let tryer = false;
let swarm = false;
let swap1 = false;
let swap2 = false;
let recall = false;
let recalled = false;

window.onload = function() {
 setTimeout(start1,50);
};
function start1() {
 PN1 = PM[0].name;
 PN2 = BOSS.name;
 alert(PN2 + "が現れた！");
 if (BOSS.allup === true) {
  AR2 += BOSS.upN;
  BR2 += BOSS.upN;
  CR2 += BOSS.upN;
  DR2 += BOSS.upN;
  SR2 += BOSS.upN;
  if (BOSS.upN === 6) {
   alert(PN2 + "はたくさんのオーラをまとって全ての能力が最大まで上がった！");
  } else {
   alert(PN2 + "はオーラをまとって全ての能力が上がった！");
  };
 };
 PK1 = document.getElementById("PK1");
 PK2 = document.getElementById("PK2");
 status1 = document.getElementById("status1");
 status2 = document.getElementById("status2");
 dps = document.getElementById("dp");
 Lv = document.getElementById("Lv");
 name = document.getElementById("name");
 namedp1 = document.getElementById("namedp1");
 namedp2 = document.getElementById("namedp2");
 type11 = document.getElementById("type11");
 type12 = document.getElementById("type12");
 type21 = document.getElementById("type21");
 type22 = document.getElementById("type22");
 ARdp1 = document.getElementById("ARdp1");
 BRdp1 = document.getElementById("BRdp1");
 CRdp1 = document.getElementById("CRdp1");
 DRdp1 = document.getElementById("DRdp1");
 SRdp1 = document.getElementById("SRdp1");
 ARdp2 = document.getElementById("ARdp2");
 BRdp2 = document.getElementById("BRdp2");
 CRdp2 = document.getElementById("CRdp2");
 DRdp2 = document.getElementById("DRdp2");
 SRdp2 = document.getElementById("SRdp2");
 HPdp = document.getElementById("HP");
 MHPdp = document.getElementById("MHP");
 attack = document.getElementById("attack");
 change = document.getElementById("change");
 Adp = document.getElementById("Adp");
 Cdp = document.getElementById("Cdp");
 skill1 = document.getElementById("skill1");
 skill2 = document.getElementById("skill2");
 skill3 = document.getElementById("skill3");
 skill4 = document.getElementById("skill4");
 skill1dp = document.getElementById("skill1dp");
 skill2dp = document.getElementById("skill2dp");
 skill3dp = document.getElementById("skill3dp");
 skill4dp = document.getElementById("skill4dp");
 subPK = document.getElementById("subPK");
 subPK1 = document.getElementById("subPK1");
 subPK2 = document.getElementById("subPK2");
 subPK3 = document.getElementById("subPK3");
 subPK4 = document.getElementById("subPK4");
 subPK5 = document.getElementById("subPK5");
 subPK6 = document.getElementById("subPK6");
 Fdp11 = document.getElementById("Fdp11");
 Fdp12 = document.getElementById("Fdp12");
 Fdp21 = document.getElementById("Fdp21");
 Fdp22 = document.getElementById("Fdp22");
 MGdp = document.getElementById("MGdp");
 MG = document.getElementById("MG");
 MA = document.getElementById("MA");
 MAXdp = document.getElementById("MAXdp");
 MAX = document.getElementById("MAX");
 MGdp.style.visibility = "hidden";
 MAXdp.style.visibility = "hidden";
 PK1.style.width = 200;
 PK1.src = PM[0].img1;
 PK2.style.width = 200;
 PK2.src = BOSS.img;
 Lv.innerHTML = PM[0].level;
 name.innerHTML = PM[0].name;
 HPdp.innerHTML = PM[0].HP;
 MHPdp.innerHTML = PM[0].MHP;
 subPK1.style.width = 150;
 subPK2.style.width = 150;
 subPK3.style.width = 150;
 subPK4.style.width = 150;
 subPK5.style.width = 150;
 subPK6.style.width = 150;
 subPK1.src = PM[0].img;
 subPK2.src = PM[1].img;
 subPK3.src = PM[2].img;
 subPK4.src = PM[3].img;
 subPK5.src = PM[4].img;
 subPK6.src = PM[5].img;
 Fdp11.style.visibility = "hidden";
 Fdp12.style.visibility = "hidden";
 Fdp21.style.visibility = "hidden";
 Fdp22.style.visibility = "hidden";
 MA.style.visibility = "hidden";
 subPK.style.visibility = "hidden";
 ID = 0;
 F1 = PM[0].F;
 Fdp11.innerHTML = PM[0].name + "の";
 Fdp12.innerHTML = PM[0].F;
 F2 = BOSS.F;
 Fdp21.innerHTML = BOSS.name + "の";
 Fdp22.innerHTML = BOSS.F;
 skill1dp.innerHTML = skill[PM[0].skill1].name;
 skill2dp.innerHTML = skill[PM[0].skill2].name;
 skill3dp.innerHTML = skill[PM[0].skill3].name;
 skill4dp.innerHTML = skill[PM[0].skill4].name;
 skill1.style.backgroundColor = skill[PM[0].skill1].color;
 skill2.style.backgroundColor = skill[PM[0].skill2].color;
 skill3.style.backgroundColor = skill[PM[0].skill3].color;
 skill4.style.backgroundColor = skill[PM[0].skill4].color;
 Bskiller = skill[25];
 if (BOSS.name === "ムゲンダイナ") {
  PK2.style.width = 500;
 };
 if (BOSS.semiMAX === true || BOSS.name === "ネクロズマ") {
  PK2.style.width = 400;
  PK2.style.top = 90;
  PK2.style.right = 150;
 };
 skillclose();
 PK1.style.visibility = "hidden";
 PK2.style.visibility = "hidden";
 attack.style.visibility = "hidden";
 change.style.visibility = "hidden";
 dps.style.visibility = "hidden";
 dps.style.backgroundColor = "#F9F9F6";
 namedp1.innerHTML = PM[0].name;
 namedp2.innerHTML = BOSS.name;
 type11.innerHTML = PM[0].bodytype1;
 type12.innerHTML = PM[0].bodytype2;
 type21.innerHTML = BOSS.bodytype1;
 type22.innerHTML = BOSS.bodytype2;
 type11.style.backgroundColor = PM[0].color1;
 type12.style.backgroundColor = PM[0].color2;
 type21.style.backgroundColor = BOSS.color1;
 type22.style.backgroundColor = BOSS.color2;
 substart();
}
function start2() {
 alert("ゆけ！" + PN1 + "！");
 PK1.style.visibility = "visible";
 dps.style.visibility = "visible";
 setTimeout(start3,100);
}
function start3() {
 PK2.style.visibility = "visible";
 setTimeout(start4,100);
}
function start4() {
 if (F1 === "ぎょぐん") {
  fishes1 = true;
  startdash1 = true;
  Fdp11.style.visibility = "visible";
  Fdp12.style.visibility = "visible";
  setTimeout(plus1,50);
 } else {
  if (F1 === "いかく") {
   Fdown1 = true;
   startdash1 = true;
   Fdp11.style.visibility = "visible";
   Fdp12.style.visibility = "visible";
   setTimeout(plus1,50);
  } else {
   if (F1 === "エレキメイカー" || F1 === "サイコメイカー" || F1 === "ミストメイカー") {
    field1 = true;
    startdash1 = true;
    Fdp11.style.visibility = "visible";
    Fdp12.style.visibility = "visible";
    setTimeout(plus1,50);
   } else {
    if (F1 === "すなおこし") {
     weather1 = true;
     startdash1 = true;
     Fdp11.style.visibility = "visible";
     Fdp12.style.visibility = "visible";
     setTimeout(plus1,50);
    } else {
     setTimeout(start5,250);
    };
   };
  };
 };
}
function start5() {
 if (F2 === "ぎょぐん") {
  fishes2 = true;
  startdash2 = true;
  Fdp21.style.visibility = "visible";
  Fdp22.style.visibility = "visible";
  setTimeout(plus2,50);
 } else {
  if (F2 === "いかく") {
   Fdown2 = true;
   startdash2 = true;
   Fdp21.style.visibility = "visible";
   Fdp22.style.visibility = "visible";
   setTimeout(plus2,50);
  } else {
   if ((F2 === "エレキメイカー" && field !== "elec") || (F2 === "サイコメイカー" && field !== "phycho") || (F2 === "ミストメイカー" && field !== "mist")) {
    field2 = true;
    startdash2 = true;
    Fdp21.style.visibility = "visible";
    Fdp22.style.visibility = "visible";
    setTimeout(plus2,50);
   } else {
    if (F2 === "すなおこし" && weather !== "sandstrom") {
     weather2 = true;
     startdash2 = true;
     Fdp21.style.visibility = "visible";
     Fdp22.style.visibility = "visible";
     setTimeout(plus2,50);
    } else {
     if (F2 === "おわりのだいち" || F2 === "はじまりのうみ") {
      weather2 = true;
      startdash2 = true;
      Fdp21.style.visibility = "visible";
      Fdp22.style.visibility = "visible";
      setTimeout(plus2,50);
     } else {
      setTimeout(start6,250);
     };
    };
   };
  };
 };
}
function start6() {
 alert("バトルスタート！");
 startdash1 = false;
 startdash2 = false;
 attack.style.visibility = "visible";
 change.style.visibility = "visible";
 ARdp1.innerHTML = rank[AR1].dp;
 BRdp1.innerHTML = rank[BR1].dp;
 CRdp1.innerHTML = rank[CR1].dp;
 DRdp1.innerHTML = rank[DR1].dp;
 SRdp1.innerHTML = rank[SR1].dp;
 ARdp2.innerHTML = rank[AR2].dp;
 BRdp2.innerHTML = rank[BR2].dp;
 CRdp2.innerHTML = rank[CR2].dp;
 DRdp2.innerHTML = rank[DR2].dp;
 SRdp2.innerHTML = rank[SR2].dp;
}