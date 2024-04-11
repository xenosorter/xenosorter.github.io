dataSetVersion = "2024-04-11"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Character Role",
    key: "role",
    tooltip: "Check this to restrict to certain character roles.",
    checked: true,
    sub: [
      { name: "Protagonist", key: "protag" },
      { name: "Supporting Roles", key: "npc" },
      { name: "Major Antagonist", key: "majant" },
      { name: "Minor Antagonist", key: "minant" },
      { name: "Nopon", key: "nopon" },
      { name: "BLADE (XCX)", key: "xblade" },
      { name: "Blade (XC2)", key: "2blade" },
      { name: "Hero (XC3)", key: "hero" },
      { name: "Moebius", key: "moebius" },
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
      { name: "Future Redeemed", key: "FR" }
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
  // Xenogears
  {
    name: "Fei",
    img: "XG-Fei.png",
    wiki: "https://xenosaga.fandom.com/wiki/Fei_Fong_Wong",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Citan",
    img: "XG-Citan.png",
    wiki: "https://xenosaga.fandom.com/wiki/Citan_Uzuki", 
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Elly",
    img: "XG-Elly.png",
    wiki: "https://xenosaga.fandom.com/wiki/Elehayym_Van_Houten",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Bart",
    img: "XG-Bart.png",
    wiki: "https://xenosaga.fandom.com/wiki/Bartholomew_Fatima",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Billy",
    img: "XG-Billy.png",
    wiki: "https://xenosaga.fandom.com/wiki/Billy_Lee_Black",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Chu-Chu",
    img: "XG-Chu.png",
    wiki: "https://xenosaga.fandom.com/wiki/Chu-Chu",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Emeralda",
    img: "XG-Emeralda.png",
    wiki: "https://xenosaga.fandom.com/wiki/Emeralda_Kasim",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Rico",
    img: "XG-Rico.png",
    wiki: "https://xenosaga.fandom.com/wiki/Ricardo_Banderas",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Maria",
    img: "XG-Maria.png",
    wiki: "https://xenosaga.fandom.com/wiki/Maria_Balthasar",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Id",
    img: "XG-ID.png",
    wiki: "https://xenosaga.fandom.com/wiki/Id",
    opts: {
      role: ["majant"],
      series: ["XG"]
    }
  },
  {
    name: "Grahf",
    img: "XG-Grahf.png",
    wiki: "https://xenosaga.fandom.com/wiki/Grahf",
    opts: {
      role: ["majant"],
      series: ["XG"]
    }
  },
  {
    name: "Wiseman",
    img: "XG-Wiseman.png",
    wiki: "https://xenosaga.fandom.com/wiki/Wiseman",
    opts: {
      role: ["npc"],
      series: ["XG"]
    }
  },
  {
    name: "Miang",
    img: "XG-Miang.png",
    wiki: "https://xenosaga.fandom.com/wiki/Myyah_Hawwa",
    opts: {
      role: ["majant"],
      series: ["XG"]
    }
  },
  {
    name: "Krelian",
    img: "XG-Krelian.png",
    wiki: "https://xenosaga.fandom.com/wiki/Karellen",
    opts: {
      role: ["majant"],
      series: ["XG"]
    }
  },
  {
    name: "Cain",
    img: "XG-Cain.png",
    wiki: "https://xenosaga.fandom.com/wiki/Cain",
    opts: {
      role: ["majant"],
      series: ["XG"]
    }
  },
  {
    name: "Gazel Ministry",
    img: "XG-Gazel Ministry.png",
    wiki: "https://xenosaga.fandom.com/wiki/Gazel_Ministry",
    opts: {
      role: ["majant"],
      series: ["XG"]
    }
  },
  {
    name: "Ramsus",
    img: "XG-Ramsus.png",
    wiki: "https://xenosaga.fandom.com/wiki/Kahran_Ramsus",
    opts: {
      role: ["majant"],
      series: ["XG"]
    }
  },
  {
    name: "Big Joe",
    img: "XG-Big Joe.png",
    wiki: "https://xenosaga.fandom.com/wiki/Big_Joe",
    opts: {
      role: ["npc"],
      series: ["XG"],
    }
  },
  {
    name: "Hammer (XG)",
    img: "XG-Hammer.png",
    wiki: "https://xenosaga.fandom.com/wiki/Hammer_(Xenogears)",
    opts: {
      role: ["npc", "minant"],
      series: ["XG"],
    }
  },
  {
    name: "Dominia",
    img: "XG-Dominia.png",
    wiki: "https://xenosaga.fandom.com/wiki/Dominia_Yizkor",
    opts: {
      role: ["minant"],
      series: ["XG"]
    }
  },
  {
    name: "Tolone",
    img: "XG-Tolone.png",
    wiki: "https://xenosaga.fandom.com/wiki/Tolone",
    opts: {
      role: ["minant"],
      series: ["XG"]
    }
  },
  {
    name: "Seraphita",
    img: "XG-Seraphita.png",
    wiki: "https://xenosaga.fandom.com/wiki/Seraphita",
    opts: {
      role: ["minant"],
      series: ["XG"]
    }
  },
  {
    name: "Kelvena",
    img: "XG-Kelvena.png",
    wiki: "https://xenosaga.fandom.com/wiki/Kelvena",
    opts: {
      role: ["minant"],
      series: ["XG"]
    }
  },
  {
    name: "Jessie",
    img: "XG-Jessie.png",
    wiki: "https://xenosaga.fandom.com/wiki/Jessie_Black",
    opts: {
      role: ["npc"],
      series: ["XG"]
    }
  },
  {
    name: "Margie",
    img: "XG-Margie.png",
    wiki: "https://xenosaga.fandom.com/wiki/Marguerite_Fatima",
    opts: {
      role: ["npc"],
      series: ["XG"]
    }
  },
  {
    name: "Sigurd",
    img: "XG-Sigurd.png",
    wiki: "https://xenosaga.fandom.com/wiki/Sigurd_Harcourt",
    opts: {
      role: ["npc"],
      series: ["XG"]
    }
  },
  {
    name: "Zephyr",
    img: "XG-Zephyr.png",
    wiki: "https://xenosaga.fandom.com/wiki/Zephyr",
    opts: {
      role: ["npc"],
      series: ["XG"]
    }
  },
  {
    name: "Dan",
    img: "XG-Dan.png",
    wiki: "https://xenosaga.fandom.com/wiki/Dan",
    opts: {
      role: ["npc"],
      series: ["XG"]
    }
  },
  {
    name: "Wave Existence",
    img: "XG-Wave Existence.png",
    wiki: "https://xenosaga.fandom.com/wiki/Wave_Existence",
    opts: {
      role: ["npc"],
      series: ["XG"],
      spoiler: true
    }
  },
  // Xenosaga
  {
    name: "Allen",
    img: "XS-Allen.png",
    wiki: "https://xenosaga.fandom.com/wiki/Allen_Ridgeley",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "chaos",
    img: "XS-Chaos.png",
    wiki: "https://xenosaga.fandom.com/wiki/Chaos",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "Jin (XS)",
    img: "XS-Jin.png",
    wiki: "https://xenosaga.fandom.com/wiki/Jin_Uzuki",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "Jr.",
    img: "XS-JR.png",
    wiki: "https://xenosaga.fandom.com/wiki/Gaignun_Kukai_Jr.",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "KOS-MOS (XS)",
    img: "XS-KOS-MOS.png",
    wiki: "https://xenosaga.fandom.com/wiki/KOS-MOS",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "MOMO",
    img: "XS-MOMO.png",
    wiki: "https://xenosaga.fandom.com/wiki/MOMO_Mizrahi",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "Shion",
    img: "XS-Shion.png",
    wiki: "https://xenosaga.fandom.com/wiki/Shion_Uzuki",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "Ziggy",
    img: "XS-Ziggy.png",
    wiki: "https://xenosaga.fandom.com/wiki/Ziggy",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "Canaan",
    img: "XS-Canaan.png",
    wiki: "https://xenosaga.fandom.com/wiki/Canaan",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "Cherenkov",
    img: "XS-Cherenkov.png",
    wiki: "https://xenosaga.fandom.com/wiki/Andrew_Cherenkov",
    opts: {
      role: ["minant"],
      series: ["XS"]
    }
  },
  {
    name: "Febronia",
    img: "XS-Febronia.png",
    wiki: "https://xenosaga.fandom.com/wiki/Febronia",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Matthews",
    img: "XS-Matthews.png",
    wiki: "https://xenosaga.fandom.com/wiki/Matthews",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Miyuki",
    img: "XS-Miyuki.png",
    wiki: "https://xenosaga.fandom.com/wiki/Miyuki_Itsumi",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Nephilim",
    img: "XS-Nephilim.png",
    wiki: "https://xenosaga.fandom.com/wiki/Nephilim_Verum",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Gaignun",
    img: "XS-Gaignun.png",
    wiki: "https://xenosaga.fandom.com/wiki/Gaignun_Kukai",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Albedo",
    img: "XS-Albedo.png",
    wiki: "https://xenosaga.fandom.com/wiki/Albedo_Piazzolla",
    opts: {
      role: ["majant"],
      series: ["XS"]
    }
  },
  {
    name: "Dmitri",
    img: "XS-Dmitri.png",
    wiki: "https://xenosaga.fandom.com/wiki/Dmitri_Yuriev",
    opts: {
      role: ["majant"],
      series: ["XS"]
    }
  },
  {
    name: "Kevin",
    img: "XS-Kevin.png",
    wiki: "https://xenosaga.fandom.com/wiki/Kevin_Winnicot",
    opts: {
      role: ["majant"],
      series: ["XS"]
    }
  },
  {
    name: "Margulis",
    img: "XS-Margulis.png",
    wiki: "https://xenosaga.fandom.com/wiki/Margulis",
    opts: {
      role: ["majant"],
      series: ["XS"]
    }
  },
  {
    name: "Pellegri",
    img: "XS-Pellegri.png",
    wiki: "https://xenosaga.fandom.com/wiki/Pellegri",
    opts: {
      role: ["majant"],
      series: ["XS"]
    }
  },
  {
    name: "Sergius",
    img: "XS-Sergius.png",
    wiki: "https://xenosaga.fandom.com/wiki/Sergius_XVII",
    opts: {
      role: ["minant"],
      series: ["XS"]
    }
  },
  {
    name: "T-elos (XS)",
    img: "XS-T-elos.png",
    wiki: "https://xenosaga.fandom.com/wiki/T-elos",
    opts: {
      role: ["majant"],
      series: ["XS"]
    }
  },
  {
    name: "Wilhelm",
    img: "XS-Wilhelm.png",
    wiki: "https://xenosaga.fandom.com/wiki/Wilhelm",
    opts: {
      role: ["majant"],
      series: ["XS"],
      spoiler: true
    }
  },
  {
    name: "Virgil",
    img: "XS-Virgil.png",
    wiki: "https://xenosaga.fandom.com/wiki/Luis_Virgil",
    opts: {
      role: ["minant"],
      series: ["XS"]
    }
  },
  {
    name: "Voyager",
    img: "XS-Voyager.png",
    wiki: "https://xenosaga.fandom.com/wiki/Erich_Weber",
    opts: {
      role: ["minant"],
      series: ["XS"]
    }
  },
  {
    name: "Assistant Scott",
    img: "XS-Assistant Scott.png",
    wiki: "https://xenosaga.fandom.com/wiki/Scott",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Professor",
    img: "XS-Professor.png",
    wiki: "https://xenosaga.fandom.com/wiki/Professor",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Citrine",
    img: "XS-Citrine.png",
    wiki: "https://xenosaga.fandom.com/wiki/Citrine",
    opts: {
      role: ["minant"],
      series: ["XS"]
    }
  },
  {
    name: "Doctus",
    img: "XS-Doctus.png",
    wiki: "https://xenosaga.fandom.com/wiki/Doctus",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Hammer (XS)",
    img: "XS-Hammer.png",
    wiki: "https://xenosaga.fandom.com/wiki/Hammer",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Tony",
    img: "XS-Tony.png",
    wiki: "https://xenosaga.fandom.com/wiki/Hammer",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Helmer",
    img: "XS-Helmer.png",
    wiki: "https://xenosaga.fandom.com/wiki/Helmer",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Juli Mizrahi",
    img: "XS-Juli.png",
    wiki: "https://xenosaga.fandom.com/wiki/Juli_Mizrahi",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Mary",
    img: "XS-Mary.png",
    wiki: "https://xenosaga.fandom.com/wiki/Mary_Godwin",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Shelley",
    img: "XS-Shelley.png",
    wiki: "https://xenosaga.fandom.com/wiki/Shelley_Godwin",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Abel",
    img: "XS-Abel.png",
    wiki: "https://xenosaga.fandom.com/wiki/Abel",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "U-DO",
    img: "XS-U-DO.gif",
    wiki: "https://xenosaga.fandom.com/wiki/U-DO",
    opts: {
      role: ["npc"],
      series: ["XS"],
      spoiler: true
    }
  },
  // Xenoblade Chronicles 1
  {
    name: "Shulk",
    img: "XC-Shulk.png",
    wiki: "https://xenoblade.fandom.com/wiki/Shulk",
    opts: {
      role: ["protag"],
      series: ["XC", "FC"]
    }
  },
  {
    name: "Fiora",
    img: "XC-Fiora.png",
    wiki: "https://xenoblade.fandom.com/wiki/Fiora",
    opts: {
      role: ["protag"],
      series: ["XC"]
    }
  },
  {
    name: "Mecha Fiora",
    img: "XC-Mecha Fiora.png",
    wiki: "https://xenoblade.fandom.com/wiki/Fiora",
    opts: {
      role: ["protag"],
      series: ["XC"],
      spoiler: true,
      duplicate: true
    }
  },
  {
    name: "Reyn",
    img: "XC-Reyn.png",
    wiki: "https://xenoblade.fandom.com/wiki/Reyn",
    opts: {
      role: ["protag"],
      series: ["XC"]
    }
  },
  {
    name: "Dunban",
    img: "XC-Dunban.png",
    wiki: "https://xenoblade.fandom.com/wiki/Dunban",
    opts: {
      role: ["protag"],
      series: ["XC"]
    }
  },
  {
    name: "Sharla",
    img: "XC-Sharla.png",
    wiki: "https://xenoblade.fandom.com/wiki/Sharla",
    opts: {
      role: ["protag"],
      series: ["XC"]
    }
  },
  {
    name: "Riki",
    img: "XC-Riki.png",
    wiki: "https://xenoblade.fandom.com/wiki/Riki",
    opts: {
      role: ["protag", "nopon"],
      series: ["XC"]
    }
  },
  {
    name: "Melia",
    img: "XC-Melia.png",
    wiki: "https://xenoblade.fandom.com/wiki/Melia",
    opts: {
      role: ["protag"],
      series: ["XC", "FC"]
    }
  },
  {
    name: "Dickson",
    img: "XC-Dickson.png",
    wiki: "https://xenoblade.fandom.com/wiki/Dickson",
    opts: {
      role: ["majant"],
      series: ["XC"]
    }
  },
  {
    name: "Mumkhar",
    img: "XC-Mumkhar.png",
    wiki: "https://xenoblade.fandom.com/wiki/Mumkhar",
    opts: {
      role: ["majant"],
      series: ["XC"]
    }
  },
  {
    name: "Alvis",
    img: "XC-Alvis.png",
    wiki: "https://xenoblade.fandom.com/wiki/Alvis",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Juju",
    img: "XC-Juju.png",
    wiki: "https://xenoblade.fandom.com/wiki/Juju",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Otharon",
    img: "XC-Otharon.png",
    wiki: "https://xenoblade.fandom.com/wiki/Otharon",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Vanea",
    img: "XC-Vanea.png",
    wiki: "https://xenoblade.fandom.com/wiki/Vanea",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Gadolt",
    img: "XC-Gadolt.png",
    wiki: "https://xenoblade.fandom.com/wiki/Gadolt",
    opts: {
      role: ["minant"],
      series: ["XC"]
    }
  },
  {
    name: "Egil",
    img: "XC-Egil.png",
    wiki: "https://xenoblade.fandom.com/wiki/Egil",
    opts: {
      role: ["majant"],
      series: ["XC"]
    }
  },
  {
    name: "Linada",
    img: "XC-Linada.png",
    wiki: "https://xenoblade.fandom.com/wiki/Linada",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Lorithia",
    img: "XC-Lorithia.png",
    wiki: "https://xenoblade.fandom.com/wiki/Lorithia",
    opts: {
      role: ["minant"],
      series: ["XC"]
    }
  },
  {
    name: "Meyneth",
    img: "XC-Meyneth.png",
    wiki: "https://xenoblade.fandom.com/wiki/Meyneth",
    opts: {
      role: ["npc"],
      series: ["XC"],
      spoiler: true
    }
  },
  {
    name: "Tyrea",
    img: "XC-Tyrea.png",
    wiki: "https://xenoblade.fandom.com/wiki/Tyrea",
    opts: {
      role: ["minant", "npc"],
      series: ["XC", "FC"]
    }
  },
  {
    name: "Kallian",
    img: "XC-Kallian.png",
    wiki: "https://xenoblade.fandom.com/wiki/Kallian",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Sorean",
    img: "XC-Sorean.png",
    wiki: "https://xenoblade.fandom.com/wiki/Sorean",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Klaus",
    img: "XC-Klaus.png",
    wiki: "https://xenoblade.fandom.com/wiki/Klaus",
    opts: {
      role: ["npc"],
      series: ["XC", "XC2"],
      spoiler: true
    }
  },
  {
    name: "Galea",
    img: "XC-Galea.png",
    wiki: "https://xenoblade.fandom.com/wiki/Galea",
    opts: {
      role: ["npc"],
      series: ["XC", "XC2"],
      spoiler: true
    }
  },
  {
    name: "Zanza",
    img: "XC-Zanza.png",
    wiki: "https://xenoblade.fandom.com/wiki/Zanza",
    opts: {
      role: ["majant"],
      series: ["XC"],
      spoiler: true
    }
  },
  {
    name: "Teelan",
    img: "XC-Teelan.png",
    wiki: "https://xenoblade.fandom.com/wiki/Teelan",
    opts: {
      role: ["npc"],
      series: ["XC", "FC"]
    }
  },
  {
    name: "Vangarre",
    img: "XC-Vangarre.png",
    wiki: "https://xenoblade.fandom.com/wiki/Vangarre",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Kenny Rohan",
    img: "XC-Kenny Rohan.png",
    wiki: "https://xenoblade.fandom.com/wiki/Kenny_Rohan",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Miqol",
    img: "XC-Miqol.png",
    wiki: "https://xenoblade.fandom.com/wiki/Miqol",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Xord",
    img: "XC-Xord.png",
    wiki: "https://xenoblade.fandom.com/wiki/Xord",
    opts: {
      role: ["minant"],
      series: ["XC"]
    }
  },
  {
    name: "Yumea",
    img: "XC-Yumea.png",
    wiki: "https://xenoblade.fandom.com/wiki/Yumea",
    opts: {
      role: ["minant"],
      series: ["XC"]
    }
  },
  {
    name: "Bana (XC1)",
    img: "XC-Bana.png",
    wiki: "https://xenoblade.fandom.com/wiki/Bana_(XC1)",
    opts: {
      role: ["npc", "nopon"],
      series: ["XC", "FC"]
    }
  },
  // Future Connected
  {
    name: "Nene",
    img: "FC-Nene.png",
    wiki: "https://xenoblade.fandom.com/wiki/Nene",
    opts: {
      role: ["protag", "nopon"],
      series: ["FC"]
    }
  },
  {
    name: "Kino",
    img: "FC-Kino.png",
    wiki: "https://xenoblade.fandom.com/wiki/Kino",
    opts: {
      role: ["protag", "nopon"],
      series: ["FC"]
    }
  },
  {
    name: "Gael'gar",
    img: "FC-Gael'gar.png",
    wiki: "https://xenoblade.fandom.com/wiki/Gael'gar",
    opts: {
      role: ["minant"],
      series: ["FC"]
    }
  },
  {
    name: "Radzam",
    img: "FC-Radzam.png",
    wiki: "https://xenoblade.fandom.com/wiki/Radzam",
    opts: {
      role: ["npc"],
      series: ["FC"]
    }
  },
  {
    name: "Maxis",
    img: "FC-Maxis.png",
    wiki: "https://xenoblade.fandom.com/wiki/Maxis",
    opts: {
      role: ["npc"],
      series: ["FC"]
    }
  },
  // Xenoblade Chronicles X
  {
    name: "Cross M",
    img: "XCX-Cross M.png",
    wiki: "https://xenoblade.fandom.com/wiki/Cross",
    opts: {
      role: ["protag", "xblade"],
      series: ["XCX"]
    }
  },
  {
    name: "Cross F",
    img: "XCX-Cross F.png",
    wiki: "https://xenoblade.fandom.com/wiki/Cross",
    opts: {
      role: ["protag", "xblade"],
      series: ["XCX"]
    }
  },
  {
    name: "Elma",
    img: "XCX-Elma.png",
    wiki: "https://xenoblade.fandom.com/wiki/Elma",
    opts: {
      role: ["protag", "xblade", "2blade"],
      series: ["XCX", "XC2"]
    }
  },
  {
    name: "Lin",
    img: "XCX-Lin.png",
    wiki: "https://xenoblade.fandom.com/wiki/Lin",
    opts: {
      role: ["protag", "xblade"],
      series: ["XCX"]
    }
  },
  {
    name: "Gwin",
    img: "XCX-Gwin.png",
    wiki: "https://xenoblade.fandom.com/wiki/Gwin",
    opts: {
      role: ["xblade"],
      series: ["XCX"]
    }
  },
  {
    name: "Irina",
    img: "XCX-Irina.png",
    wiki: "https://xenoblade.fandom.com/wiki/Irina",
    opts: {
      role: ["xblade"],
      series: ["XCX"]
    }
  },
  {
    name: "Doug",
    img: "XCX-Doug.png",
    wiki: "https://xenoblade.fandom.com/wiki/Doug",
    opts: {
      role: ["xblade"],
      series: ["XCX"]
    }
  },
  {
    name: "Lao",
    img: "XCX-Lao.png",
    wiki: "https://xenoblade.fandom.com/wiki/Lao",
    opts: {
      role: ["xblade", "majant"],
      series: ["XCX"]
    }
  },
  {
    name: "L",
    img: "XCX-L.png",
    wiki: "https://xenoblade.fandom.com/wiki/L%27cirufe",
    opts: {
      role: ["xblade"],
      series: ["XCX"]
    }
  },
  {
    name: "Nagi",
    img: "XCX-Nagi.png",
    wiki: "https://xenoblade.fandom.com/wiki/Nagi",
    opts: {
      role: ["xblade"],
      series: ["XCX"]
    }
  },
  {
    name: "Celica",
    img: "XCX-Celica.png",
    wiki: "https://xenoblade.fandom.com/wiki/Celica",
    opts: {
      role: ["xblade"],
      series: ["XCX"]
    }
  },
  // {
  //   name: "Rock",
  //   img: "XCX-Rock.png",
  //   wiki: "https://xenoblade.fandom.com/wiki/Rock",
  //   opts: {
  //     role: ["xblade", "npc"],
  //     series: ["XCX"]
  //   }
  // },
  {
    name: "Hope",
    img: "XCX-Hope.png",
    wiki: "https://xenoblade.fandom.com/wiki/Hope",
    opts: {
      role: ["xblade"],
      series: ["XCX"]
    }
  },
  {
    name: "Frye",
    img: "XCX-Frye.png",
    wiki: "https://xenoblade.fandom.com/wiki/Frye",
    opts: {
      role: ["xblade"],
      series: ["XCX"]
    }
  },
  {
    name: "Phog",
    img: "XCX-Phog.png",
    wiki: "https://xenoblade.fandom.com/wiki/Phog",
    opts: {
      role: ["xblade"],
      series: ["XCX"]
    }
  },
  {
    name: "Mia",
    img: "XCX-Mia.png",
    wiki: "https://xenoblade.fandom.com/wiki/Mia",
    opts: {
      role: ["xblade"],
      series: ["XCX"]
    }
  },
  {
    name: "Murderess",
    img: "XCX-Murderess.png",
    wiki: "https://xenoblade.fandom.com/wiki/Murderess",
    opts: {
      role: ["xblade"],
      series: ["XCX"]
    }
  },
  {
    name: "Alexa",
    img: "XCX-Alexa.png",
    wiki: "https://xenoblade.fandom.com/wiki/Alexa",
    opts: {
      role: ["xblade"],
      series: ["XCX"]
    }
  },
  {
    name: "H.B.",
    img: "XCX-H.B..png",
    wiki: "https://xenoblade.fandom.com/wiki/H.B.",
    opts: {
      role: ["xblade"],
      series: ["XCX"]
    }
  },
  {
    name: "Bozé",
    img: "XCX-Bozé.png",
    wiki: "https://xenoblade.fandom.com/wiki/Boz%C3%A9?",
    opts: {
      role: ["xblade"],
      series: ["XCX"]
    }
  },
  {
    name: "Yelv",
    img: "XCX-Yelv.png",
    wiki: "https://xenoblade.fandom.com/wiki/Yelv",
    opts: {
      role: ["xblade"],
      series: ["XCX"]
    }
  },
  {
    name: "Vandham (XCX)",
    img: "XCX-Vandham.png",
    wiki: "https://xenoblade.fandom.com/wiki/Vandham_(XCX)",
    opts: {
      role: ["npc"],
      series: ["XCX"]
    }
  },
  {
    name: "Maurice",
    img: "XCX-Maurice.png",
    wiki: "https://xenoblade.fandom.com/wiki/Maurice",
    opts: {
      role: ["npc"],
      series: ["XCX"]
    }
  },
  {
    name: "Tatsu",
    img: "XCX-Tatsu.png",
    wiki: "https://xenoblade.fandom.com/wiki/Tatsu",
    opts: {
      role: ["xblade", "nopon"],
      series: ["XCX"]
    }
  },
  {
    name: "Eleonora",
    img: "XCX-Eleonora.png",
    wiki: "https://xenoblade.fandom.com/wiki/Eleonora",
    opts: {
      role: ["npc"],
      series: ["XCX"]
    }
  },
  {
    name: "Ga Jiarg",
    img: "XCX-Ga Jiarg.png",
    wiki: "https://xenoblade.fandom.com/wiki/Ga_Jiarg",
    opts: {
      role: ["npc"],
      series: ["XCX"]
    }
  },
  {
    name: "Ga Buidhe",
    img: "XCX-Ga Buidhe.png",
    wiki: "https://xenoblade.fandom.com/wiki/Ga_Buidhe",
    opts: {
      role: ["npc"],
      series: ["XCX"]
    }
  },
  {
    name: "Luxaar",
    img: "XCX-Luxaar.png",
    wiki: "https://xenoblade.fandom.com/wiki/Luxaar",
    opts: {
      role: ["majant"],
      series: ["XCX"]
    }
  },
  {
    name: "Goetia",
    img: "XCX-Goetia.png",
    wiki: "https://xenoblade.fandom.com/wiki/Goetia",
    opts: {
      role: ["minant"],
      series: ["XCX"]
    }
  },
  {
    name: "Ryyz",
    img: "XCX-Ryyz.png",
    wiki: "https://xenoblade.fandom.com/wiki/Ryyz",
    opts: {
      role: ["minant"],
      series: ["XCX"]
    }
  },
  {
    name: "Dagahn",
    img: "XCX-Dagahn.png",
    wiki: "https://xenoblade.fandom.com/wiki/Dagahn",
    opts: {
      role: ["minant"],
      series: ["XCX"]
    }
  },
  // Xenoblade Chronicles 2
  {
    name: "Rex",
    img: "XC2-Rex.png",
    overrideimg: "XC2-Rex-Spoiler.png",
    wiki: "https://xenoblade.fandom.com/wiki/Rex",
    opts: {
      role: ["protag"],
      series: ["XC2"]
    }
  },
  {
    name: "Nia",
    img: "XC2-Nia.png",
    wiki: "https://xenoblade.fandom.com/wiki/Nia",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Tora",
    img: "XC2-Tora.png",
    wiki: "https://xenoblade.fandom.com/wiki/Tora_(XC2)",
    opts: {
      role: ["protag", "nopon"],
      series: ["XC2"]
    }
  },
  {
    name: "Vandham (XC2)",
    img: "XC2-Vandham.png",
    wiki: "https://xenoblade.fandom.com/wiki/Vandham_(XC2)",
    opts: {
      role: ["protag"],
      series: ["XC2"]
    }
  },
  {
    name: "Mòrag",
    img: "XC2-Mòrag.png",
    wiki: "https://xenoblade.fandom.com/wiki/Mòrag",
    opts: {
      role: ["protag"],
      series: ["XC2"]
    }
  },
  {
    name: "Zeke",
    img: "XC2-Zeke.png",
    wiki: "https://xenoblade.fandom.com/wiki/Zeke",
    opts: {
      role: ["protag"],
      series: ["XC2"]
    }
  },
  {
    name: "Pyra",
    img: "XC2-Pyra.png",
    wiki: "https://xenoblade.fandom.com/wiki/Pyra",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Mythra",
    img: "XC2-Mythra.png",
    wiki: "https://xenoblade.fandom.com/wiki/Mythra",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Pneuma",
    img: "XC2-Pneuma.png",
    wiki: "https://xenoblade.fandom.com/wiki/Pneuma",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"],
      spoiler: true
    }
  },
  {
    name: "Roc",
    img: "XC2-Roc.png",
    wiki: "https://xenoblade.fandom.com/wiki/Roc",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Blade Nia",
    img: "XC2-Blade Nia.png",
    wiki: "https://xenoblade.fandom.com/wiki/Nia#As_a_Blade_2",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"],
      spoiler: true,
      duplicate: true
    }
  },
  {
    name: "Dromarch",
    img: "XC2-Dromarch.png",
    wiki: "https://xenoblade.fandom.com/wiki/Dromarch",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Poppi α",
    img: "XC2-Poppi α.png",
    wiki: "https://xenoblade.fandom.com/wiki/Poppi_%CE%B1",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Poppi QT",
    img: "XC2-Poppi QT.png",
    wiki: "https://xenoblade.fandom.com/wiki/Poppi_QT",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Poppi QTπ",
    img: "XC2-Poppi QTπ.png",
    wiki: "https://xenoblade.fandom.com/wiki/Poppi_QT%CF%80",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Brighid",
    img: "XC2-Brighid.png",
    wiki: "https://xenoblade.fandom.com/wiki/Brighid",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Aegaeon",
    img: "XC2-Aegaeon.png",
    wiki: "https://xenoblade.fandom.com/wiki/Aegaeon",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Pandoria",
    img: "XC2-Pandoria.png",
    wiki: "https://xenoblade.fandom.com/wiki/Pandoria",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Adenine",
    img: "XC2-Adenine.png",
    wiki: "https://xenoblade.fandom.com/wiki/Adenine",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Agate",
    img: "XC2-Agate.png",
    wiki: "https://xenoblade.fandom.com/wiki/Agate",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Azami",
    img: "XC2-Azami.png",
    wiki: "https://xenoblade.fandom.com/wiki/Azami",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Boreas",
    img: "XC2-Boreas.png",
    wiki: "https://xenoblade.fandom.com/wiki/Boreas",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Dagas",
    img: "XC2-Dagas.png",
    wiki: "https://xenoblade.fandom.com/wiki/Dagas",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Dahlia",
    img: "XC2-Dahlia.png",
    wiki: "https://xenoblade.fandom.com/wiki/Dahlia",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Electra",
    img: "XC2-Electra.png",
    wiki: "https://xenoblade.fandom.com/wiki/Electra",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Finch",
    img: "XC2-Finch.png",
    wiki: "https://xenoblade.fandom.com/wiki/Finch",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Floren",
    img: "XC2-Floren.png",
    wiki: "https://xenoblade.fandom.com/wiki/Floren",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Godfrey",
    img: "XC2-Godfrey.png",
    wiki: "https://xenoblade.fandom.com/wiki/Godfrey",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Gorg",
    img: "XC2-Gorg.png",
    wiki: "https://xenoblade.fandom.com/wiki/Gorg",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Herald",
    img: "XC2-Herald.png",
    wiki: "https://xenoblade.fandom.com/wiki/Herald",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Kasandra",
    img: "XC2-Kasandra.png",
    wiki: "https://xenoblade.fandom.com/wiki/Kasandra",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Kora",
    img: "XC2-Kora.png",
    wiki: "https://xenoblade.fandom.com/wiki/Kora",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "KOS-MOS (XC2)",
    img: "XC2-KOS-MOS.png",
    wiki: "https://xenoblade.fandom.com/wiki/KOS-MOS",
    opts: {
      role: ["2blade"],
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Newt",
    img: "XC2-Newt.png",
    wiki: "https://xenoblade.fandom.com/wiki/Newt",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Nim",
    img: "XC2-Nim.png",
    wiki: "https://xenoblade.fandom.com/wiki/Nim",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Perceval",
    img: "XC2-Perceval.png",
    wiki: "https://xenoblade.fandom.com/wiki/Perceval",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Perun",
    img: "XC2-Perun.png",
    wiki: "https://xenoblade.fandom.com/wiki/Perun",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Praxis",
    img: "XC2-Praxis.png",
    wiki: "https://xenoblade.fandom.com/wiki/Praxis",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Sheba",
    img: "XC2-Sheba.png",
    wiki: "https://xenoblade.fandom.com/wiki/Sheba",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Theory",
    img: "XC2-Theory.png",
    wiki: "https://xenoblade.fandom.com/wiki/Theory",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Ursula",
    img: "XC2-Ursula.png",
    wiki: "https://xenoblade.fandom.com/wiki/Ursula",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Vale",
    img: "XC2-Vale.png",
    wiki: "https://xenoblade.fandom.com/wiki/Vale",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Vess",
    img: "XC2-Vess.png",
    wiki: "https://xenoblade.fandom.com/wiki/Vess",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Wulfric",
    img: "XC2-Wulfric.png",
    wiki: "https://xenoblade.fandom.com/wiki/Wulfric",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Zenobia",
    img: "XC2-Zenobia.png",
    wiki: "https://xenoblade.fandom.com/wiki/Zenobia",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Poppibuster",
    img: "XC2-Poppibuster.png",
    wiki: "https://xenoblade.fandom.com/wiki/Poppibuster",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "T-elos (XC2)",
    img: "XC2-T-elos.png",
    wiki: "https://xenoblade.fandom.com/wiki/T-elos",
    opts: {
      role: ["2blade"],
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Shulk (XC2)",
    img: "XC2-Shulk.png",
    wiki: "https://xenoblade.fandom.com/wiki/Shulk#In_Xenoblade_Chronicles_2_2",
    opts: {
      role: ["2blade"],
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Fiora (XC2)",
    img: "XC2-Fiora.png",
    wiki: "https://xenoblade.fandom.com/wiki/Fiora#In_Xenoblade_Chronicles_2",
    opts: {
      role: ["2blade"],
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Elma (XC2)",
    img: "XC2-Elma.png",
    wiki: "https://xenoblade.fandom.com/wiki/Elma#In_Xenoblade_Chronicles_2",
    opts: {
      role: ["2blade"],
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Akhos",
    img: "XC2-Akhos.png",
    wiki: "https://xenoblade.fandom.com/wiki/Akhos",
    opts: {
      role: ["majant", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Cressidus",
    img: "XC2-Cressidus.png",
    wiki: "https://xenoblade.fandom.com/wiki/Cressidus",
    opts: {
      role: ["minant", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Mikhail",
    img: "XC2-Mikhail.png",
    wiki: "https://xenoblade.fandom.com/wiki/Mikhail",
    opts: {
      role: ["majant", "2blade"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Obrona",
    img: "XC2-Obrona.png",
    wiki: "https://xenoblade.fandom.com/wiki/Obrona",
    opts: {
      role: ["minant", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Patroka",
    img: "XC2-Patroka.png",
    wiki: "https://xenoblade.fandom.com/wiki/Patroka",
    opts: {
      role: ["majant", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Perdido",
    img: "XC2-Perdido.png",
    wiki: "https://xenoblade.fandom.com/wiki/Perdido",
    opts: {
      role: ["minant", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Sever",
    img: "XC2-Sever.png",
    wiki: "https://xenoblade.fandom.com/wiki/Sever",
    opts: {
      role: ["minant", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Jin (XC2)",
    img: "XC2-Jin.png",
    wiki: "https://xenoblade.fandom.com/wiki/Jin",
    opts: {
      role: ["protag", "majant", "2blade"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Malos",
    img: "XC2-Malos.png",
    wiki: "https://xenoblade.fandom.com/wiki/Malos",
    opts: {
      role: ["majant", "2blade"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Amalthus",
    img: "XC2-Amalthus.png",
    wiki: "https://xenoblade.fandom.com/wiki/Amalthus",
    opts: {
      role: ["majant"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Bana (XC2)",
    img: "XC2-Bana.png",
    wiki: "https://xenoblade.fandom.com/wiki/Bana_(XC2)",
    opts: {
      role: ["minant", "nopon"],
      series: ["XC2"],
    }
  },
  {
    name: "Muimui",
    img: "XC2-Muimui.png",
    wiki: "https://xenoblade.fandom.com/wiki/Muimui_(XC2)",
    opts: {
      role: ["minant", "npc", "nopon"],
      series: ["XC2"],
    }
  },
  {
    name: "Niranira",
    img: "XC2-Niranira.png",
    wiki: "https://xenoblade.fandom.com/wiki/Niranira_(XC2)",
    opts: {
      role: ["npc", "nopon"],
      series: ["XC2"],
    }
  },
  {
    name: "Niall",
    img: "XC2-Niall.png",
    wiki: "https://xenoblade.fandom.com/wiki/Niall",
    opts: {
      role: ["npc"],
      series: ["XC2"],
    }
  },
  {
    name: "Raqura",
    img: "XC2-Raqura.png",
    wiki: "https://xenoblade.fandom.com/wiki/Raqura",
    opts: {
      role: ["npc"],
      series: ["XC2"],
    }
  },
  {
    name: "Eulogimenos",
    img: "XC2-Eulogimenos.png",
    wiki: "https://xenoblade.fandom.com/wiki/Eulogimenos",
    opts: {
      role: ["npc"],
      series: ["XC2"],
    }
  },
  {
    name: "Captain Padraig",
    img: "XC2-Padraig.png",
    wiki: "https://xenoblade.fandom.com/wiki/Padraig",
    opts: {
      role: ["minant"],
      series: ["XC2"],
    }
  },
  {
    name: "Dughall",
    img: "XC2-Dughall.png",
    wiki: "https://xenoblade.fandom.com/wiki/Dughall",
    opts: {
      role: ["minant"],
      series: ["XC2"],
    }
  },
  {
    name: "Dolmes",
    img: "XC2-Dolmes.png",
    wiki: "https://xenoblade.fandom.com/wiki/Dolmes",
    opts: {
      role: ["minant", "2blade"],
      series: ["XC2"],
    }
  },
  {
    name: "Azurda",
    img: "XC2-Azurda.png",
    wiki: "https://xenoblade.fandom.com/wiki/Azurda",
    opts: {
      role: ["npc"],
      series: ["XC2", "TGC"],
    }
  },
  {
    name: "Corvin",
    img: "XC2-Corvin.png",
    wiki: "https://xenoblade.fandom.com/wiki/Corvin",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Crossette",
    img: "XC2-Crossette.png",
    wiki: "https://xenoblade.fandom.com/wiki/Crossette",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  // The Golden Country
  {
    name: "Addam",
    img: "TGC-Addam.png",
    wiki: "https://xenoblade.fandom.com/wiki/Addam",
    opts: {
      role: ["protag"],
      series: ["TGC"]
    }
  },
  {
    name: "Gort",
    img: "TGC-Gort.png",
    wiki: "https://xenoblade.fandom.com/wiki/Gort",
    opts: {
      role: ["minant"],
      series: ["TGC"]
    }
  },
  {
    name: "Haze",
    img: "TGC-Haze.png",
    wiki: "https://xenoblade.fandom.com/wiki/Haze",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Hugo",
    img: "TGC-Hugo.png",
    wiki: "https://xenoblade.fandom.com/wiki/Hugo_(TTGC)",
    opts: {
      role: ["protag"],
      series: ["TGC"]
    }
  },
  {
    name: "Lora",
    img: "TGC-Lora.png",
    wiki: "https://xenoblade.fandom.com/wiki/Lora",
    opts: {
      role: ["protag"],
      series: ["TGC"]
    }
  },
  {
    name: "Minoth",
    img: "TGC-Minoth.png",
    wiki: "https://xenoblade.fandom.com/wiki/Minoth",
    opts: {
      role: ["protag", "2blade"],
      series: ["TGC"]
    }
  },
  {
    name: "Milton",
    img: "TGC-Milton.png",
    wiki: "https://xenoblade.fandom.com/wiki/Milton",
    opts: {
      role: ["npc"],
      series: ["TGC"]
    }
  },
  {
    name: "Zettar",
    img: "TGC-Zettar.png",
    wiki: "https://xenoblade.fandom.com/wiki/Zettar",
    opts: {
      role: ["minant"],
      series: ["TGC"],
    }
  },
  {
    name: "Tornan King",
    img: "TGC-Tornan King.png",
    wiki: "https://xenoblade.fandom.com/wiki/Tornan_King",
    opts: {
      role: ["npc"],
      series: ["TGC"],
    }
  },
  // Xenoblade Chronicles 3
  {
    name: "Noah",
    img: "XC3-Noah.png",
    wiki: "https://xenoblade.fandom.com/wiki/Noah",
    opts: {
      role: ["protag"],
      series: ["XC3"]
    }
  },
  {
    name: "Mio",
    img: "XC3-Mio.png",
    wiki: "https://xenoblade.fandom.com/wiki/Mio",
    opts: {
      role: ["protag"],
      series: ["XC3"]
    }
  },
  {
    name: "Eunie",
    img: "XC3-Eunie.png",
    wiki: "https://xenoblade.fandom.com/wiki/Eunie",
    opts: {
      role: ["protag"],
      series: ["XC3"]
    }
  },
  {
    name: "Taion",
    img: "XC3-Taion.png",
    wiki: "https://xenoblade.fandom.com/wiki/Taion",
    opts: {
      role: ["protag"],
      series: ["XC3"]
    }
  },
  {
    name: "Lanz",
    img: "XC3-Lanz.png",
    wiki: "https://xenoblade.fandom.com/wiki/Lanz",
    opts: {
      role: ["protag"],
      series: ["XC3"]
    }
  },
  {
    name: "Sena",
    img: "XC3-Sena.png",
    wiki: "https://xenoblade.fandom.com/wiki/Sena",
    opts: {
      role: ["protag"],
      series: ["XC3"]
    }
  },
  {
    name: "Riku",
    img: "XC3-Riku.png",
    wiki: "https://xenoblade.fandom.com/wiki/Riku",
    opts: {
      role: ["protag", "nopon"],
      series: ["XC3", "FR"],
    }
  },
  {
    name: "Manana",
    img: "XC3-Manana.png",
    wiki: "https://xenoblade.fandom.com/wiki/Manana",
    opts: {
      role: ["protag", "nopon"],
      series: ["XC3"],
    }
  },
  {
    name: "Alexandria",
    img: "XC3-Alexandria.png",
    wiki: "https://xenoblade.fandom.com/wiki/Alexandria",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Ashera",
    img: "XC3-Ashera.png",
    wiki: "https://xenoblade.fandom.com/wiki/Ashera",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Cammuravi",
    img: "XC3-Cammuravi.png",
    wiki: "https://xenoblade.fandom.com/wiki/Cammuravi",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Ethel",
    img: "XC3-Ethel.png",
    wiki: "https://xenoblade.fandom.com/wiki/Ethel",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Fiona",
    img: "XC3-Fiona.png",
    wiki: "https://xenoblade.fandom.com/wiki/Fiona",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Ghondor (XC3)",
    img: "XC3-Ghondor.png",
    wiki: "https://xenoblade.fandom.com/wiki/Ghondor",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Gray",
    img: "XC3-Gray.png",
    wiki: "https://xenoblade.fandom.com/wiki/Gray",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Isurd",
    img: "XC3-Isurd.png",
    wiki: "https://xenoblade.fandom.com/wiki/Isurd",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Juniper",
    img: "XC3-Juniper.png",
    wiki: "https://xenoblade.fandom.com/wiki/Juniper",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Miyabi",
    img: "XC3-Miyabi.png",
    wiki: "https://xenoblade.fandom.com/wiki/Miyabi",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Monica",
    img: "XC3-Monica.png",
    wiki: "https://xenoblade.fandom.com/wiki/Monica_Vandham",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Segiri",
    img: "XC3-Segiri.png",
    wiki: "https://xenoblade.fandom.com/wiki/Segiri",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Teach",
    img: "XC3-Teach.png",
    wiki: "https://xenoblade.fandom.com/wiki/Teach",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Triton",
    img: "XC3-Triton.png",
    wiki: "https://xenoblade.fandom.com/wiki/Triton",
    opts: {
      role: ["hero", "moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Valdi",
    img: "XC3-Valdi.png",
    wiki: "https://xenoblade.fandom.com/wiki/Valdi",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Zeon",
    img: "XC3-Zeon.png",
    wiki: "https://xenoblade.fandom.com/wiki/Zeon",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Guernica Vandham",
    img: "XC3-Vandham.png",
    wiki: "https://xenoblade.fandom.com/wiki/Guernica_Vandham",
    opts: {
      role: ["npc"],
      series: ["XC3"],
    }
  },
  {
    name: "Melia (XC3)",
    img: "XC3-Melia.png",
    wiki: "https://xenoblade.fandom.com/wiki/Melia#In_Xenoblade_Chronicles_3",
    opts: {
      role: ["hero"],
      series: ["XC3"],
      duplicate: true,
    }
  },
  {
    name: "Nia (XC3)",
    img: "XC3-Nia.png",
    wiki: "https://xenoblade.fandom.com/wiki/Nia#In_Xenoblade_Chronicles_3_2",
    opts: {
      role: ["hero"],
      series: ["XC3"],
      duplicate: true,
    }
  },
  {
    name: "Bolearis",
    img: "XC3-Bolearis.png",
    wiki: "https://xenoblade.fandom.com/wiki/Bolearis",
    opts: {
      role: ["npc"],
      series: ["XC3"],
    }
  },
  {
    name: "Mwamba",
    img: "XC3-Mwamba.png",
    wiki: "https://xenoblade.fandom.com/wiki/Mwamba",
    opts: {
      role: ["npc"],
      series: ["XC3"],
    }
  },
  {
    name: "Hackt",
    img: "XC3-Hackt.png",
    wiki: "https://xenoblade.fandom.com/wiki/Hackt",
    opts: {
      role: ["npc"],
      series: ["XC3"],
    }
  },
  {
    name: "Samon",
    img: "XC3-Samon.png",
    wiki: "https://xenoblade.fandom.com/wiki/Samon",
    opts: {
      role: ["npc", "nopon"],
      series: ["XC3"],
    }
  },
  {
    name: "Nimue",
    img: "XC3-Nimue.png",
    wiki: "https://xenoblade.fandom.com/wiki/Nimue",
    opts: {
      role: ["npc"],
      series: ["XC3"],
    }
  },
  {
    name: "Garrett",
    img: "XC3-Garrett.png",
    wiki: "https://xenoblade.fandom.com/wiki/Garrett",
    opts: {
      role: ["npc"],
      series: ["XC3"],
    }
  },
  {
    name: "Garvel",
    img: "XC3-Garvel.png",
    wiki: "https://xenoblade.fandom.com/wiki/Garvel",
    opts: {
      role: ["npc", "minant"],
      series: ["XC3"],
    }
  },
  {
    name: "Kite",
    img: "XC3-Kite.png",
    wiki: "https://xenoblade.fandom.com/wiki/Kite",
    opts: {
      role: ["npc"],
      series: ["XC3"],
    }
  },
  {
    name: "Travis",
    img: "XC3-Travis.png",
    wiki: "https://xenoblade.fandom.com/wiki/Travis",
    opts: {
      role: ["npc"],
      series: ["XC3"],
    }
  },
  {
    name: "Pulipuli",
    img: "XC3-Pulipuli.png",
    wiki: "https://xenoblade.fandom.com/wiki/Pulipuli",
    opts: {
      role: ["npc", "nopon"],
      series: ["XC3"]
    }
  },
  {
    name: "Mechafriend",
    img: "XC3-Mechafriend.png",
    wiki: "https://xenoblade.fandom.com/wiki/Mechafriend",
    opts: {
      role: ["npc"],
      series: ["XC3"]
    }
  },
  {
    name: "Moebius B",
    img: "XC3-B.png",
    wiki: "https://xenoblade.fandom.com/wiki/B",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Crys",
    img: "XC3-Crys.png",
    wiki: "https://xenoblade.fandom.com/wiki/Crys",
    opts: {
      role: ["npc", "moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius D",
    img: "XC3-D.png",
    wiki: "https://xenoblade.fandom.com/wiki/D",
    opts: {
      role: ["majant", "moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius E",
    img: "XC3-E.png",
    wiki: "https://xenoblade.fandom.com/wiki/E",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius F",
    img: "XC3-F.png",
    wiki: "https://xenoblade.fandom.com/wiki/F",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius G",
    img: "XC3-G.png",
    wiki: "https://xenoblade.fandom.com/wiki/G",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius H",
    img: "XC3-H.png",
    wiki: "https://xenoblade.fandom.com/wiki/H",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Irma",
    img: "XC3-Irma.png",
    wiki: "https://xenoblade.fandom.com/wiki/Irma",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Joran",
    img: "XC3-Joran.png",
    wiki: "https://xenoblade.fandom.com/wiki/Joran",
    opts: {
      role: ["majant", "moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius K",
    img: "XC3-K.png",
    wiki: "https://xenoblade.fandom.com/wiki/K",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius L",
    img: "XC3-L.png",
    wiki: "https://xenoblade.fandom.com/wiki/L",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius M",
    img: "XC3-M.png",
    wiki: "https://xenoblade.fandom.com/wiki/M",
    opts: {
      role: ["majant", "moebius"],
      series: ["XC3"],
      spoiler: true
    }
  },
  {
    name: "Moebius N",
    img: "XC3-N.png",
    wiki: "https://xenoblade.fandom.com/wiki/N",
    opts: {
      role: ["majant", "moebius"],
      series: ["XC3", "FR"],
    }
  },
  {
    name: "Moebius O",
    img: "XC3-O.png",
    wiki: "https://xenoblade.fandom.com/wiki/O",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius P",
    img: "XC3-P.png",
    wiki: "https://xenoblade.fandom.com/wiki/P",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius Q (XC3)",
    img: "XC3-Q.png",
    wiki: "https://xenoblade.fandom.com/wiki/Q",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius R (XC3)",
    img: "XC3-R.png",
    wiki: "https://xenoblade.fandom.com/wiki/R",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Shania",
    img: "XC3-Shania.png",
    wiki: "https://xenoblade.fandom.com/wiki/Shania",
    opts: {
      role: ["majant", "moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius U",
    img: "XC3-U.png",
    wiki: "https://xenoblade.fandom.com/wiki/U",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius V",
    img: "XC3-V.png",
    wiki: "https://xenoblade.fandom.com/wiki/V",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius W (XC3)",
    img: "XC3-W.png",
    wiki: "https://xenoblade.fandom.com/wiki/W",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius X",
    img: "XC3-X.png",
    wiki: "https://xenoblade.fandom.com/wiki/X",
    opts: {
      role: ["minant", "moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius Y",
    img: "XC3-Y.png",
    wiki: "https://xenoblade.fandom.com/wiki/Y",
    opts: {
      role: ["minant", "moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Z",
    img: "XC3-Z.png",
    wiki: "https://xenoblade.fandom.com/wiki/Z",
    opts: {
      role: ["majant", "moebius"],
      series: ["XC3", "FR"],
    }
  },
  {
    name: "Ino",
    img: "XC3-Ino.png",
    wiki: "https://xenoblade.fandom.com/wiki/Ino",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Masha",
    img: "XC3-Masha.png",
    wiki: "https://xenoblade.fandom.com/wiki/Masha",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  // Future Redeemed
  {
    name: "Matthew",
    img: "FR-Matthew.png",
    wiki: "https://xenoblade.fandom.com/wiki/Matthew_(FR)",
    opts: {
      role: ["protag"],
      series: ["FR"],
    }
  },
  {
    name: "Na'el",
    img: "FR-Na'el.png",
    wiki: "https://xenoblade.fandom.com/wiki/Na%27el",
    opts: {
      role: ["protag"],
      series: ["FR"],
    }
  },
  {
    name: "A",
    img: "FR-A.png",
    wiki: "https://xenoblade.fandom.com/wiki/A",
    opts: {
      role: ["protag"],
      series: ["FR"],
    }
  },
  {
    name: "Nikol",
    img: "FR-Nikol.png",
    wiki: "https://xenoblade.fandom.com/wiki/Nikol",
    opts: {
      role: ["protag"],
      series: ["FR"],
    }
  },
  {
    name: "Glimmer",
    img: "FR-Glimmer.png",
    wiki: "https://xenoblade.fandom.com/wiki/Glimmer",
    opts: {
      role: ["protag"],
      series: ["FR"],
    }
  },
  {
    name: "Shulk (FR)",
    img: "FR-Shulk.png",
    wiki: "https://xenoblade.fandom.com/wiki/Shulk#Future_Redeemed",
    opts: {
      role: ["protag", "hero"],
      series: ["FR"],
      duplicate: true,
    }
  },
  {
    name: "Rex (FR)",
    img: "FR-Rex.png",
    wiki: "https://xenoblade.fandom.com/wiki/Rex#Xenoblade_Chronicles_3:_Future_Redeemed",
    opts: {
      role: ["protag", "hero"],
      series: ["FR"],
      duplicate: true,
    }
  },
  {
    name: "Panacea",
    img: "FR-Panacea.png",
    wiki: "https://xenoblade.fandom.com/wiki/Panacea",
    opts: {
      role: ["npc"],
      series: ["FR"],
    }
  },
  {
    name: "Linka",
    img: "FR-Linka.png",
    wiki: "https://xenoblade.fandom.com/wiki/Linka",
    opts: {
      role: ["npc"],
      series: ["FR"],
    }
  },
  {
    name: "Alpha",
    img: "FR-Alpha.png",
    wiki: "https://xenoblade.fandom.com/wiki/Alvis?so=search#Xenoblade_Chronicles_3:_Future_Redeemed",
    opts: {
      role: ["majant"],
      series: ["FR"],
    }
  },
  {
    name: "Ghondor (FR)",
    img: "FR-Ghondor.png",
    wiki: "https://xenoblade.fandom.com/wiki/Ghondor_(FR)",
    opts: {
      role: ["npc"],
      series: ["FR"],
    }
  },
  {
    name: "Moebius Q (FR)",
    img: "FR-Q.png",
    wiki: "https://xenoblade.fandom.com/wiki/Q_(FR)",
    opts: {
      role: ["moebius"],
      series: ["FR"],
    }
  },
  {
    name: "Moebius R (FR)",
    img: "FR-R.png",
    wiki: "https://xenoblade.fandom.com/wiki/R_(FR)",
    opts: {
      role: ["moebius"],
      series: ["FR"],
    }
  },
  {
    name: "Moebius W (FR)",
    img: "FR-W.png",
    wiki: "https://xenoblade.fandom.com/wiki/W_(FR)",
    opts: {
      role: ["moebius"],
      series: ["FR"],
    }
  },
];
