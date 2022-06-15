dataSetVersion = "2022-05-07"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
      { name: "Blade", key: "blade" },
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
    name: "Filter out Spoilers?",
    key: "spoiler",
    tooltip: "Check this to restrict spoilers."
  },
  {
    name: "Filter out Duplicates?",
    key: "duplicate",
    tooltip: "Check this to restrict duplicates."
  }
];

dataSet[dataSetVersion].characterData = [
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
      role: ["nonplayable"],
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
  {
    name: "Rex",
    img: "XC2-Rex.png",
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
      role: ["playable"],
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
      spoiler: true
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
      spoiler: true
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
      role: ["playable"],
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
  {
    name: "Nene",
    img: "FC-Nene.png",
    opts: {
      role: ["playable"],
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
    name: "Melia (XC3)",
    img: "XC3-Melia.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC3"],
      duplicate: true,
      spoiler: true
    }
  },
  {
    name: "Nia (XC3)",
    img: "XC3-Nia.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC3"],
      duplicate: true,
      spoiler: true
    }
  },
];
