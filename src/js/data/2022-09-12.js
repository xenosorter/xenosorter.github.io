dataSetVersion = "2022-09-12"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Character Role",
    key: "role",
    tooltip: "Check this to restrict to certain character roles.",
    checked: true,
    sub: [
      { name: "Playable", key: "playable" },
      { name: "Non-Playable", key: "nonplayable" },
      { name: "Antagonist", key: "antagonist" },
      { name: "Nopon", key: "nopon" },
      { name: "Blade", key: "blade" },
      { name: "Hero", key: "hero" },
      { name: "Consul", key: "consul" },
    ]
  },
  {
    name: "Filter by Series",
    key: "series",
    tooltip: "Check this to restrict to series.",
    checked: true,
    sub: [
      { name: "Xenogears", key: "XG" },
      { name: "Xenosaga", key: "XS" },
      { name: "Xenoblade Chronicles", key: "XC" },
      { name: "Future Connected", key: "FC" },
      { name: "Xenoblade Chronicles X", key: "XCX" },
      { name: "Xenoblade Chronicles 2", key: "XC2" },
      { name: "The Golden Country", key: "TGC" },
      { name: "Xenoblade Chronicles 3", key: "XC3" },
    ]
  },
  {
    name: "Restrict Spoilers",
    key: "spoiler",
    tooltip: "Check this to restrict spoilers.",
    checked: false
  },
  {
    name: "Restrict Duplicates",
    key: "duplicate",
    tooltip: "Check this to restrict duplicates.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  // Xenoblade Chronicles X
  {
    name: "Cross M",
    img: "XCX-Cross M.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Cross F",
    img: "XCX-Cross F.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Elma",
    img: "XCX-Elma.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Lin",
    img: "XCX-Lin.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Gwin",
    img: "XCX-Gwin.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Irina",
    img: "XCX-Irina.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Doug",
    img: "XCX-Doug.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Lao",
    img: "XCX-Lao.png",
    opts: {
      role: ["playable", "antagonist"],
      series: ["XCX"]
    }
  },
  {
    name: "L",
    img: "XCX-L.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Nagi",
    img: "XCX-Nagi.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Celica",
    img: "XCX-Celica.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Hope",
    img: "XCX-Hope.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Frye",
    img: "XCX-Frye.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Phog",
    img: "XCX-Phog.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Mia",
    img: "XCX-Mia.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Murderess",
    img: "XCX-Murderess.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Alexa",
    img: "XCX-Alexa.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "H.B.",
    img: "XCX-H.B..png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Bozé",
    img: "XCX-Bozé.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Yelv",
    img: "XCX-Yelv.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Vandham (XCX)",
    img: "XCX-Vandham.png",
    opts: {
      role: ["nonplayable"],
      series: ["XCX"]
    }
  },
  {
    name: "Maurice",
    img: "XCX-Maurice.png",
    opts: {
      role: ["nonplayable"],
      series: ["XCX"]
    }
  },
  {
    name: "Tatsu",
    img: "XCX-Tatsu.png",
    opts: {
      role: ["nonplayable", "nopon"],
      series: ["XCX"]
    }
  },
  {
    name: "Eleonora",
    img: "XCX-Eleonora.png",
    opts: {
      role: ["nonplayable"],
      series: ["XCX"]
    }
  },
  {
    name: "Ga Jiarg",
    img: "XCX-Ga Jiarg.png",
    opts: {
      role: ["antagonist", "nonplayable"],
      series: ["XCX"]
    }
  },
  {
    name: "Ga Buidhe",
    img: "XCX-Ga Buidhe.png",
    opts: {
      role: ["antagonist", "nonplayable"],
      series: ["XCX"]
    }
  },
  {
    name: "Luxaar",
    img: "XCX-Luxaar.png",
    opts: {
      role: ["antagonist", "nonplayable"],
      series: ["XCX"]
    }
  },
  {
    name: "Goetia",
    img: "XCX-Goetia.png",
    opts: {
      role: ["antagonist", "nonplayable"],
      series: ["XCX"]
    }
  },
  {
    name: "Ryyz",
    img: "XCX-Ryyz.png",
    opts: {
      role: ["antagonist", "nonplayable"],
      series: ["XCX"]
    }
  },
  {
    name: "Dagahn",
    img: "XCX-Dagahn.png",
    opts: {
      role: ["antagonist", "nonplayable"],
      series: ["XCX"]
    }
  },
  // Xenoblade Chronicles 2
  {
    name: "Rex",
    img: "XC2-Rex.png",
    overrideimg: "XC2-Rex-Spoiler.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Nia",
    img: "XC2-Nia.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Tora",
    img: "XC2-Tora.png",
    opts: {
      role: ["playable", "nopon"],
      series: ["XC2"]
    }
  },
  {
    name: "Vandham (XC2)",
    img: "XC2-Vandham.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Mòrag",
    img: "XC2-Mòrag.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Zeke",
    img: "XC2-Zeke.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Pyra",
    img: "XC2-Pyra.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Mythra",
    img: "XC2-Mythra.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Pneuma",
    img: "XC2-Pneuma.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"],
      spoiler: true
    }
  },
  {
    name: "Roc",
    img: "XC2-Roc.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Blade Nia",
    img: "XC2-Blade Nia.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"],
      spoiler: true,
      duplicate: true
    }
  },
  {
    name: "Dromarch",
    img: "XC2-Dromarch.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Poppi",
    img: "XC2-Poppi.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Poppi QT",
    img: "XC2-Poppi QT.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Poppi QTpi",
    img: "XC2-Poppi QTpi.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Brighid",
    img: "XC2-Brighid.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Aegaeon",
    img: "XC2-Aegaeon.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Pandoria",
    img: "XC2-Pandoria.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Adenine",
    img: "XC2-Adenine.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Agate",
    img: "XC2-Agate.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Azami",
    img: "XC2-Azami.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Boreas",
    img: "XC2-Boreas.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Dagas",
    img: "XC2-Dagas.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Dahlia",
    img: "XC2-Dahlia.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Electra",
    img: "XC2-Electra.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Finch",
    img: "XC2-Finch.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Floren",
    img: "XC2-Floren.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Godfrey",
    img: "XC2-Godfrey.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Gorg",
    img: "XC2-Gorg.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Herald",
    img: "XC2-Herald.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Kasandra",
    img: "XC2-Kasandra.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Kora",
    img: "XC2-Kora.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "KOS-MOS",
    img: "XC2-KOS-MOS.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Newt",
    img: "XC2-Newt.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Nim",
    img: "XC2-Nim.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Perceval",
    img: "XC2-Perceval.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Perun",
    img: "XC2-Perun.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Praxis",
    img: "XC2-Praxis.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Sheba",
    img: "XC2-Sheba.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Theory",
    img: "XC2-Theory.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Ursula",
    img: "XC2-Ursula.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Vale",
    img: "XC2-Vale.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Vess",
    img: "XC2-Vess.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Wulfric",
    img: "XC2-Wulfric.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Zenobia",
    img: "XC2-Zenobia.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Poppibuster",
    img: "XC2-Poppibuster.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "T-elos",
    img: "XC2-T-elos.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Shulk (XC2)",
    img: "XC2-Shulk.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Fiora (XC2)",
    img: "XC2-Fiora.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Akhos",
    img: "XC2-Akhos.png",
    opts: {
      role: ["playable", "antagonist", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Cressidus",
    img: "XC2-Cressidus.png",
    opts: {
      role: ["playable", "antagonist", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Mikhail",
    img: "XC2-Mikhail.png",
    opts: {
      role: ["playable", "antagonist", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Obrona",
    img: "XC2-Obrona.png",
    opts: {
      role: ["playable", "antagonist", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Patroka",
    img: "XC2-Patroka.png",
    opts: {
      role: ["playable", "antagonist", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Perdido",
    img: "XC2-Perdido.png",
    opts: {
      role: ["playable", "antagonist", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Sever",
    img: "XC2-Sever.png",
    opts: {
      role: ["playable", "antagonist", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Jin (XC2)",
    img: "XC2-Jin.png",
    opts: {
      role: ["nonplayable", "antagonist", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Malos",
    img: "XC2-Malos.png",
    opts: {
      role: ["nonplayable", "antagonist", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Amalthus",
    img: "XC2-Amalthus.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XC2"]
    }
  },
  {
    name: "Bana",
    img: "XC2-Bana.png",
    opts: {
      role: ["nonplayable", "antagonist", "nopon"],
      series: ["XC2"],
    }
  },
  {
    name: "Muimui",
    img: "XC2-Muimui.png",
    opts: {
      role: ["nonplayable", "antagonist", "nopon"],
      series: ["XC2"],
    }
  },
  {
    name: "Niranira",
    img: "XC2-Niranira.png",
    opts: {
      role: ["nonplayable", "nopon"],
      series: ["XC2"],
    }
  },
  {
    name: "Niall",
    img: "XC2-Niall.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC2"],
    }
  },
  {
    name: "Raqura",
    img: "XC2-Raqura.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC2"],
    }
  },
  {
    name: "Azurda",
    img: "XC2-Azurda.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC2"],
    }
  },
  {
    name: "Corvin",
    img: "XC2-Corvin.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Crossette",
    img: "XC2-Crossette.png",
    opts: {
      role: ["playable", "blade"],
      series: ["XC2"]
    }
  },
  // The Golden Country
  {
    name: "Addam",
    img: "TGC-Addam.png",
    opts: {
      role: ["playable"],
      series: ["TGC"]
    }
  },
  {
    name: "Gort",
    img: "TGC-Gort.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["TGC"]
    }
  },
  {
    name: "Haze",
    img: "TGC-Haze.png",
    opts: {
      role: ["playable", "blade"],
      series: ["TGC"]
    }
  },
  {
    name: "Hugo",
    img: "TGC-Hugo.png",
    opts: {
      role: ["playable"],
      series: ["TGC"]
    }
  },
  {
    name: "Lora",
    img: "TGC-Lora.png",
    opts: {
      role: ["playable"],
      series: ["TGC"]
    }
  },
  {
    name: "Minoth",
    img: "TGC-Minoth.png",
    opts: {
      role: ["playable", "blade"],
      series: ["TGC"]
    }
  },
  {
    name: "Milton",
    img: "TGC-Milton.png",
    opts: {
      role: ["nonplayable"],
      series: ["TGC"]
    }
  },
  {
    name: "Zettar",
    img: "TGC-Zettar.png",
    opts: {
      role: ["nonplayable"],
      series: ["TGC"],
    }
  },
  {
    name: "Tornan King",
    img: "TGC-Tornan King.png",
    opts: {
      role: ["nonplayable"],
      series: ["TGC"],
    }
  },
  // Xenoblade Chronicles 1
  {
    name: "Shulk",
    img: "XC-Shulk.png",
    opts: {
      role: ["playable"],
      series: ["XC"]
    }
  },
  {
    name: "Fiora",
    img: "XC-Fiora.png",
    opts: {
      role: ["playable"],
      series: ["XC"]
    }
  },
  {
    name: "Mecha Fiora",
    img: "XC-Mecha Fiora.png",
    opts: {
      role: ["playable"],
      series: ["XC"],
      spoiler: true,
      duplicate: true
    }
  },
  {
    name: "Reyn",
    img: "XC-Reyn.png",
    opts: {
      role: ["playable"],
      series: ["XC"]
    }
  },
  {
    name: "Dunban",
    img: "XC-Dunban.png",
    opts: {
      role: ["playable"],
      series: ["XC"]
    }
  },
  {
    name: "Sharla",
    img: "XC-Sharla.png",
    opts: {
      role: ["playable"],
      series: ["XC"]
    }
  },
  {
    name: "Riki",
    img: "XC-Riki.png",
    opts: {
      role: ["playable", "nopon"],
      series: ["XC"]
    }
  },
  {
    name: "Melia",
    img: "XC-Melia.png",
    opts: {
      role: ["playable"],
      series: ["XC"]
    }
  },
  {
    name: "Dickson",
    img: "XC-Dickson.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XC"]
    }
  },
  {
    name: "Mumkhar",
    img: "XC-Mumkhar.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XC"]
    }
  },
  {
    name: "Alvis",
    img: "XC-Alvis.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC"]
    }
  },
  {
    name: "Juju",
    img: "XC-Juju.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC"]
    }
  },
  {
    name: "Otharon",
    img: "XC-Otharon.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC"]
    }
  },
  {
    name: "Vanea",
    img: "XC-Vanea.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC"]
    }
  },
  {
    name: "Gadolt",
    img: "XC-Gadolt.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XC"]
    }
  },
  {
    name: "Egil",
    img: "XC-Egil.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XC"]
    }
  },
  {
    name: "Linada",
    img: "XC-Linada.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC"]
    }
  },
  {
    name: "Lorithia",
    img: "XC-Lorithia.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XC"]
    }
  },
  {
    name: "Meyneth",
    img: "XC-Meyneth.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC"]
    }
  },
  {
    name: "Tyrea",
    img: "XC-Tyrea.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XC"]
    }
  },
  {
    name: "Kallian",
    img: "XC-Kallian.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC"]
    }
  },
  {
    name: "Sorean",
    img: "XC-Sorean.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC"]
    }
  },
  {
    name: "Klaus",
    img: "XC-Klaus.PNG",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XC"]
    }
  },
  {
    name: "Zanza",
    img: "XC-Zanza.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XC"],
      spoiler: true
    }
  },
  {
    name: "Teelan",
    img: "XC-Teelan.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC"]
    }
  },
  {
    name: "Vangarre",
    img: "XC-Vangarre.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC"]
    }
  },
  {
    name: "Miqol",
    img: "XC-Miqol.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC"]
    }
  },
  {
    name: "Xord",
    img: "XC-Xord.png",
    opts: {
      role: ["nonplayable"],
      series: ["Xord"]
    }
  },
  {
    name: "Yumea",
    img: "XC-Yumea.png",
    opts: {
      role: ["playable"],
      series: ["XC"]
    }
  },
  // Future Connected
  {
    name: "Nene",
    img: "FC-Nene.png",
    opts: {
      role: ["playable", "nopon"],
      series: ["FC"]
    }
  },
  {
    name: "Kino",
    img: "FC-Kino.png",
    opts: {
      role: ["playable", "nopon"],
      series: ["FC"]
    }
  },
  {
    name: "Gael'gar",
    img: "FC-Gael'gar.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["FC"]
    }
  },
  // Xenogears
  {
    name: "Fei",
    img: "XG-Fei.png",
    opts: {
      role: ["playable"],
      series: ["XG"]
    }
  },
  {
    name: "Citan",
    img: "XG-Citan.png",
    opts: {
      role: ["playable"],
      series: ["XG"]
    }
  },
  {
    name: "Elly",
    img: "XG-Elly.png",
    opts: {
      role: ["playable"],
      series: ["XG"]
    }
  },
  {
    name: "Bart",
    img: "XG-Bart.png",
    opts: {
      role: ["playable"],
      series: ["XG"]
    }
  },
  {
    name: "Billy",
    img: "XG-Billy.png",
    opts: {
      role: ["playable"],
      series: ["XG"]
    }
  },
  {
    name: "Chu",
    img: "XG-Chu.png",
    opts: {
      role: ["playable"],
      series: ["XG"]
    }
  },
  {
    name: "Emeralda",
    img: "XG-Emeralda.png",
    opts: {
      role: ["playable"],
      series: ["XG"]
    }
  },
  {
    name: "Rico",
    img: "XG-Rico.png",
    opts: {
      role: ["playable"],
      series: ["XG"]
    }
  },
  {
    name: "ID",
    img: "XG-ID.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XG"]
    }
  },
  {
    name: "Grahf",
    img: "XG-Grahf.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XG"]
    }
  },
  {
    name: "Wiseman",
    img: "XG-Wiseman.png",
    opts: {
      role: ["nonplayable"],
      series: ["XG"]
    }
  },
  {
    name: "Miang",
    img: "XG-Miang.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XG"]
    }
  },
  {
    name: "Krelian",
    img: "XG-Krelian.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XG"]
    }
  },
  {
    name: "Cain",
    img: "XG-Cain.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XG"]
    }
  },
  {
    name: "Ramsus",
    img: "XG-Ramsus.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XG"]
    }
  },
  {
    name: "Big Joe",
    img: "XG-Big Joe.png",
    opts: {
      role: ["nonplayable"],
      series: ["XG"],
    }
  },
  {
    name: "Hammer (XG)",
    img: "XG-Hammer.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XG"],
    }
  },
  {
    name: "Dominia",
    img: "XG-Dominia.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XG"]
    }
  },
  {
    name: "Tolone",
    img: "XG-Tolone.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XG"]
    }
  },
  {
    name: "Seraphita",
    img: "XG-Seraphita.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XG"]
    }
  },
  {
    name: "Kelvena",
    img: "XG-Kelvena.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XG"]
    }
  },
  {
    name: "Jessie",
    img: "XG-Jessie.png",
    opts: {
      role: ["nonplayable"],
      series: ["XG"]
    }
  },
  {
    name: "Margie",
    img: "XG-Margie.png",
    opts: {
      role: ["nonplayable"],
      series: ["XG"]
    }
  },
  {
    name: "Sigurd",
    img: "XG-Sigurd.png",
    opts: {
      role: ["nonplayable"],
      series: ["XG"]
    }
  },
  {
    name: "Maria",
    img: "XG-Maria.png",
    opts: {
      role: ["nonplayable"],
      series: ["XG"]
    }
  },
  // Xenosaga
  {
    name: "Allen",
    img: "XS-Allen.png",
    opts: {
      role: ["playable"],
      series: ["XS"]
    }
  },
  {
    name: "chaos",
    img: "XS-Chaos.png",
    opts: {
      role: ["playable"],
      series: ["XS"]
    }
  },
  {
    name: "Jin (XS)",
    img: "XS-Jin.png",
    opts: {
      role: ["playable"],
      series: ["XS"]
    }
  },
  {
    name: "JR",
    img: "XS-JR.png",
    opts: {
      role: ["playable"],
      series: ["XS"]
    }
  },
  {
    name: "KOS-MOS",
    img: "XS-KOS-MOS.png",
    opts: {
      role: ["playable"],
      series: ["XS"]
    }
  },
  {
    name: "MOMO",
    img: "XS-MOMO.png",
    opts: {
      role: ["playable"],
      series: ["XS"]
    }
  },
  {
    name: "Shion",
    img: "XS-Shion.png",
    opts: {
      role: ["playable"],
      series: ["XS"]
    }
  },
  {
    name: "Ziggy",
    img: "XS-Ziggy.png",
    opts: {
      role: ["playable"],
      series: ["XS"]
    }
  },
  {
    name: "Canaan",
    img: "XS-Canaan.png",
    opts: {
      role: ["nonplayable"],
      series: ["XS"]
    }
  },
  {
    name: "Cherenkov",
    img: "XS-Cherenkov.png",
    opts: {
      role: ["nonplayable"],
      series: ["XS"]
    }
  },
  {
    name: "Febronia",
    img: "XS-Febronia.png",
    opts: {
      role: ["nonplayable"],
      series: ["XS"]
    }
  },
  {
    name: "Matthews",
    img: "XS-Matthews.png",
    opts: {
      role: ["nonplayable"],
      series: ["XS"]
    }
  },
  {
    name: "Miyuki",
    img: "XS-Miyuki.png",
    opts: {
      role: ["nonplayable"],
      series: ["XS"]
    }
  },
  {
    name: "Nephilim",
    img: "XS-Nephilim.png",
    opts: {
      role: ["nonplayable"],
      series: ["XS"]
    }
  },
  {
    name: "Nigredo",
    img: "XS-Nigredo.png",
    opts: {
      role: ["nonplayable"],
      series: ["XS"]
    }
  },
  {
    name: "Albedo",
    img: "XS-Albedo.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XS"]
    }
  },
  {
    name: "Dmitri",
    img: "XS-Dmitri.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XS"]
    }
  },
  {
    name: "Kevin",
    img: "XS-Kevin.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XS"]
    }
  },
  {
    name: "Margulis",
    img: "XS-Margulis.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XS"]
    }
  },
  {
    name: "Pellegri",
    img: "XS-Pellegri.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XS"]
    }
  },
  {
    name: "Sergius",
    img: "XS-Sergius.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XS"]
    }
  },
  {
    name: "T-elos",
    img: "XS-T-elos.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XS"]
    }
  },
  {
    name: "Wilhelm",
    img: "XS-Wilhelm.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XS"]
    }
  },
  {
    name: "Virgil",
    img: "XS-Virgil.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XS"]
    }
  },
  {
    name: "Voyager",
    img: "XS-Voyager.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XS"]
    }
  },
  {
    name: "Assistant Scott",
    img: "XS-Assistant Scott.png",
    opts: {
      role: ["nonplayable"],
      series: ["XS"],
    }
  },
  {
    name: "Professor",
    img: "XS-Professor.png",
    opts: {
      role: ["nonplayable"],
      series: ["XS"],
    }
  },
  {
    name: "Citrine",
    img: "XS-Citrine.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XS"],
    }
  },
  {
    name: "Doctis",
    img: "XS-Doctis.png",
    opts: {
      role: ["nonplayable"],
      series: ["XS"],
    }
  },
  {
    name: "Hammer (XS)",
    img: "XS-Hammer.png",
    opts: {
      role: ["nonplayable"],
      series: ["XS"],
    }
  },
  {
    name: "Tony",
    img: "XS-Tony.png",
    opts: {
      role: ["nonplayable"],
      series: ["XS"],
    }
  },
  {
    name: "Helmer",
    img: "XS-Helmer.png",
    opts: {
      role: ["nonplayable"],
      series: ["XS"],
    }
  },
  {
    name: "Juli Mizrahi",
    img: "XS-Juli.png",
    opts: {
      role: ["nonplayable"],
      series: ["XS"],
    }
  },
  {
    name: "Mary",
    img: "XS-Mary.png",
    opts: {
      role: ["nonplayable"],
      series: ["XS"],
    }
  },
  {
    name: "Shelley",
    img: "XS-Shelley.png",
    opts: {
      role: ["nonplayable"],
      series: ["XS"],
    }
  },
  // Xenoblade Chronicles 3
  {
    name: "Noah",
    img: "XC3-Noah.png",
    opts: {
      role: ["playable"],
      series: ["XC3"]
    }
  },
  {
    name: "Mio",
    img: "XC3-Mio.png",
    opts: {
      role: ["playable"],
      series: ["XC3"]
    }
  },
  {
    name: "Eunie",
    img: "XC3-Eunie.png",
    opts: {
      role: ["playable"],
      series: ["XC3"]
    }
  },
  {
    name: "Taion",
    img: "XC3-Taion.png",
    opts: {
      role: ["playable"],
      series: ["XC3"]
    }
  },
  {
    name: "Lanz",
    img: "XC3-Lanz.png",
    opts: {
      role: ["playable"],
      series: ["XC3"]
    }
  },
  {
    name: "Sena",
    img: "XC3-Sena.png",
    opts: {
      role: ["playable"],
      series: ["XC3"]
    }
  },
  {
    name: "Riku",
    img: "XC3-Riku.png",
    opts: {
      role: ["nonplayable", "hero", "nopon"],
      series: ["XC3"],
    }
  },
  {
    name: "Manana",
    img: "XC3-Manana.png",
    opts: {
      role: ["nonplayable", "hero", "nopon"],
      series: ["XC3"],
    }
  },
  {
    name: "Alexandria",
    img: "XC3-Alexandria.png",
    opts: {
      role: ["nonplayable", "hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Ashera",
    img: "XC3-Ashera.png",
    opts: {
      role: ["nonplayable", "hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Cammuravi",
    img: "XC3-Cammuravi.png",
    opts: {
      role: ["nonplayable", "hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Ethel",
    img: "XC3-Ethel.png",
    opts: {
      role: ["nonplayable", "hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Fiona",
    img: "XC3-Fiona.png",
    opts: {
      role: ["nonplayable", "hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Ghondor",
    img: "XC3-Ghondor.png",
    opts: {
      role: ["nonplayable", "hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Gray",
    img: "XC3-Gray.png",
    opts: {
      role: ["nonplayable", "hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Isurd",
    img: "XC3-Isurd.png",
    opts: {
      role: ["nonplayable", "hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Juniper",
    img: "XC3-Juniper.png",
    opts: {
      role: ["nonplayable", "hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Miyabi",
    img: "XC3-Miyabi.png",
    opts: {
      role: ["nonplayable", "hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Monica",
    img: "XC3-Monica.png",
    opts: {
      role: ["nonplayable", "hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Segiri",
    img: "XC3-Segiri.png",
    opts: {
      role: ["nonplayable", "hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Teach",
    img: "XC3-Teach.png",
    opts: {
      role: ["nonplayable", "hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Triton",
    img: "XC3-Triton.png",
    opts: {
      role: ["nonplayable", "hero", "consul"],
      series: ["XC3"],
    }
  },
  {
    name: "Valdi",
    img: "XC3-Valdi.png",
    opts: {
      role: ["nonplayable", "hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Zeon",
    img: "XC3-Zeon.png",
    opts: {
      role: ["nonplayable", "hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Guernica Vandham",
    img: "XC3-Vandham.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC3"],
    }
  },
  {
    name: "Melia (XC3)",
    img: "XC3-Melia.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XC3"],
      duplicate: true,
    }
  },
  {
    name: "Nia (XC3)",
    img: "XC3-Nia.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XC3"],
      duplicate: true,
    }
  },
  {
    name: "Bolearis",
    img: "XC3-Bolearis.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC3"],
    }
  },
  {
    name: "Mwamba",
    img: "XC3-Mwamba.png",
    opts: {
      role: ["nonplayable", "hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Hackt",
    img: "XC3-Hackt.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC3"],
    }
  },
  {
    name: "Samon",
    img: "XC3-Samon.png",
    opts: {
      role: ["nonplayable", "nopon"],
      series: ["XC3"],
    }
  },
  {
    name: "Nimue",
    img: "XC3-Nimue.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC3"],
    }
  },
  {
    name: "Garrett",
    img: "XC3-Garrett.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC3"],
    }
  },
  {
    name: "Garvel",
    img: "XC3-Garvel.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC3"],
    }
  },
  {
    name: "Jeremy",
    img: "XC3-Jemery.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC3"],
    }
  },
  {
    name: "Kite",
    img: "XC3-Kite.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC3"],
    }
  },
  {
    name: "Travis",
    img: "XC3-Travis.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC3"],
    }
  },
  {
    name: "Consul B",
    img: "XC3-B.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
    }
  },
  {
    name: "Crys",
    img: "XC3-Crys.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
    }
  },
  {
    name: "Consul D",
    img: "XC3-D.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
    }
  },
  {
    name: "Consul E",
    img: "XC3-E.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
    }
  },
  {
    name: "Consul F",
    img: "XC3-F.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
    }
  },
  {
    name: "Consul G",
    img: "XC3-G.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
    }
  },
  {
    name: "Consul H",
    img: "XC3-H.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
    }
  },
  {
    name: "Irma",
    img: "XC3-Irma.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
    }
  },
  {
    name: "Joran",
    img: "XC3-Joran.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
    }
  },
  {
    name: "Consul K",
    img: "XC3-K.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
    }
  },
  {
    name: "Consul L",
    img: "XC3-L.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
    }
  },
  {
    name: "Consul M",
    img: "XC3-M.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
      spoiler: true
    }
  },
  {
    name: "Consul N",
    img: "XC3-N.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
    }
  },
  {
    name: "Consul O",
    img: "XC3-O.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
    }
  },
  {
    name: "Consul P",
    img: "XC3-P.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
    }
  },
  {
    name: "Consul Q",
    img: "XC3-Q.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
    }
  },
  {
    name: "Consul R",
    img: "XC3-R.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
    }
  },
  {
    name: "Shania",
    img: "XC3-Shania.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
    }
  },
  {
    name: "Consul U",
    img: "XC3-U.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
    }
  },
  {
    name: "Consul V",
    img: "XC3-V.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
    }
  },
  {
    name: "Consul W",
    img: "XC3-W.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
    }
  },
  {
    name: "Consul X",
    img: "XC3-X.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
    }
  },
  {
    name: "Consul Y",
    img: "XC3-Y.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
    }
  },
  {
    name: "Z",
    img: "XC3-Z.png",
    opts: {
      role: ["nonplayable", "antagonist", "consul"],
      series: ["XC3"],
    }
  },
];
