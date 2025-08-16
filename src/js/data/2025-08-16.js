dataSetVersion = "2025-08-16"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
      { name: "BLADE (XCXDE)", key: "xblade" },
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
      { name: "Future Redeemed", key: "FR" },
      { name: "Xenoblade Chronicles X: Definitive Edition", key: "XCXDE" }
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
    imgUrls: ["XG-Fei.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Fei_Fong_Wong",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Citan",
    imgUrls: ["XG-Citan.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Citan_Uzuki", 
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Elly",
    imgUrls: ["XG-Elly.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Elehayym_Van_Houten",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Bart",
    imgUrls: ["XG-Bart.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Bartholomew_Fatima",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Billy",
    imgUrls: ["XG-Billy.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Billy_Lee_Black",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Chu-Chu",
    imgUrls: ["XG-Chu.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Chu-Chu",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Emeralda",
    imgUrls: ["XG-Emeralda.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Emeralda_Kasim",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Rico",
    imgUrls: ["XG-Rico.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Ricardo_Banderas",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Maria",
    imgUrls: ["XG-Maria.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Maria_Balthasar",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Id",
    imgUrls: ["XG-ID.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Id",
    opts: {
      role: ["majant"],
      series: ["XG"]
    }
  },
  {
    name: "Grahf",
    imgUrls: ["XG-Grahf.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Grahf",
    opts: {
      role: ["majant"],
      series: ["XG"]
    }
  },
  {
    name: "Wiseman",
    imgUrls: ["XG-Wiseman.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Wiseman",
    opts: {
      role: ["npc"],
      series: ["XG"]
    }
  },
  {
    name: "Miang",
    imgUrls: ["XG-Miang.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Myyah_Hawwa",
    opts: {
      role: ["majant"],
      series: ["XG"]
    }
  },
  {
    name: "Krelian",
    imgUrls: ["XG-Krelian.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Karellen",
    opts: {
      role: ["majant"],
      series: ["XG"]
    }
  },
  {
    name: "Cain",
    imgUrls: ["XG-Cain.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Cain",
    opts: {
      role: ["majant"],
      series: ["XG"]
    }
  },
  {
    name: "Gazel Ministry",
    imgUrls: ["XG-Gazel Ministry.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Gazel_Ministry",
    opts: {
      role: ["majant"],
      series: ["XG"]
    }
  },
  {
    name: "Ramsus",
    imgUrls: ["XG-Ramsus.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Kahran_Ramsus",
    opts: {
      role: ["majant"],
      series: ["XG"]
    }
  },
  {
    name: "Big Joe",
    imgUrls: ["XG-Big Joe.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Big_Joe",
    opts: {
      role: ["npc"],
      series: ["XG"],
    }
  },
  {
    name: "Hammer (XG)",
    imgUrls: ["XG-Hammer.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Hammer_(XG)",
    opts: {
      role: ["npc", "minant"],
      series: ["XG"],
    }
  },
  {
    name: "Dominia",
    imgUrls: ["XG-Dominia.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Dominia_Yizkor",
    opts: {
      role: ["minant"],
      series: ["XG"]
    }
  },
  {
    name: "Tolone",
    imgUrls: ["XG-Tolone.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Tolone",
    opts: {
      role: ["minant"],
      series: ["XG"]
    }
  },
  {
    name: "Seraphita",
    imgUrls: ["XG-Seraphita.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Seraphita",
    opts: {
      role: ["minant"],
      series: ["XG"]
    }
  },
  {
    name: "Kelvena",
    imgUrls: ["XG-Kelvena.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Kelvena",
    opts: {
      role: ["minant"],
      series: ["XG"]
    }
  },
  {
    name: "Jessie",
    imgUrls: ["XG-Jessie.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Jessie_Black",
    opts: {
      role: ["npc"],
      series: ["XG"]
    }
  },
  {
    name: "Margie",
    imgUrls: ["XG-Margie.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Marguerite_Fatima",
    opts: {
      role: ["npc"],
      series: ["XG"]
    }
  },
  {
    name: "Sigurd",
    imgUrls: ["XG-Sigurd.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Sigurd_Harcourt",
    opts: {
      role: ["npc"],
      series: ["XG"]
    }
  },
  {
    name: "Zephyr",
    imgUrls: ["XG-Zephyr.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Zephyr_(XG)",
    opts: {
      role: ["npc"],
      series: ["XG"]
    }
  },
  {
    name: "Dan",
    imgUrls: ["XG-Dan.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Dan",
    opts: {
      role: ["npc"],
      series: ["XG"]
    }
  },
  {
    name: "Wave Existence",
    imgUrls: ["XG-Wave Existence.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Wave_Existence",
    opts: {
      role: ["npc"],
      series: ["XG"],
      spoiler: true
    }
  },
  // Xenosaga
  {
    name: "Allen",
    imgUrls: ["XS-Allen.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Allen_Ridgeley",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "chaos",
    imgUrls: ["XS-Chaos.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Chaos",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "Jin (XS)",
    imgUrls: ["XS-Jin.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Jin_Uzuki",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "Jr.",
    imgUrls: ["XS-JR.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Gaignun_Kukai_Jr.",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "KOS-MOS (XS)",
    imgUrls: ["XS-KOS-MOS.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/KOS-MOS",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "MOMO",
    imgUrls: ["XS-MOMO.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/MOMO_Mizrahi",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "Shion",
    imgUrls: ["XS-Shion.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Shion_Uzuki",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "Ziggy",
    imgUrls: ["XS-Ziggy.png", "PP-Jan.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Ziggy",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "Canaan",
    imgUrls: ["XS-Canaan.png", "PP-Lactis.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Canaan",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "Cherenkov",
    imgUrls: ["XS-Cherenkov.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Andrew_Cherenkov",
    opts: {
      role: ["minant"],
      series: ["XS"]
    }
  },
  {
    name: "Febronia",
    imgUrls: ["XS-Febronia.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Febronia",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Matthews",
    imgUrls: ["XS-Matthews.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Matthews",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Miyuki",
    imgUrls: ["XS-Miyuki.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Miyuki_Itsumi",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Nephilim",
    imgUrls: ["XS-Nephilim.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Nephilim",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Gaignun",
    imgUrls: ["XS-Gaignun.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Gaignun_Kukai",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Albedo",
    imgUrls: ["XS-Albedo.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Albedo_Piazzolla",
    opts: {
      role: ["majant"],
      series: ["XS"]
    }
  },
  {
    name: "Dmitri",
    imgUrls: ["XS-Dmitri.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Dmitri_Yuriev",
    opts: {
      role: ["majant"],
      series: ["XS"]
    }
  },
  {
    name: "Kevin",
    imgUrls: ["XS-Kevin.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Kevin_Winnicot",
    opts: {
      role: ["majant"],
      series: ["XS"]
    }
  },
  {
    name: "Margulis",
    imgUrls: ["XS-Margulis.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Margulis",
    opts: {
      role: ["majant"],
      series: ["XS"]
    }
  },
  {
    name: "Pellegri",
    imgUrls: ["XS-Pellegri.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Pellegri",
    opts: {
      role: ["majant"],
      series: ["XS"]
    }
  },
  {
    name: "Sergius",
    imgUrls: ["XS-Sergius.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Sergius_XVII",
    opts: {
      role: ["minant"],
      series: ["XS"]
    }
  },
  {
    name: "T-elos (XS)",
    imgUrls: ["XS-T-elos.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/T-elos",
    opts: {
      role: ["majant"],
      series: ["XS"]
    }
  },
  {
    name: "Wilhelm",
    imgUrls: ["XS-Wilhelm.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Wilhelm",
    opts: {
      role: ["majant"],
      series: ["XS"],
      spoiler: true
    }
  },
  {
    name: "Virgil",
    imgUrls: ["XS-Virgil.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Luis_Virgil",
    opts: {
      role: ["minant"],
      series: ["XS"]
    }
  },
  {
    name: "Voyager",
    imgUrls: ["XS-Voyager.png", "PP-Erich.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Erich_Weber",
    opts: {
      role: ["minant"],
      series: ["XS"]
    }
  },
  {
    name: "Assistant Scott",
    imgUrls: ["XS-Assistant Scott.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Scott",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Professor",
    imgUrls: ["XS-Professor.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Professor",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Citrine",
    imgUrls: ["XS-Citrine.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Citrine",
    opts: {
      role: ["minant"],
      series: ["XS"]
    }
  },
  {
    name: "Doctus",
    imgUrls: ["XS-Doctus.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Doctus",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Hammer (XS)",
    imgUrls: ["XS-Hammer.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Hammer",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Tony",
    imgUrls: ["XS-Tony.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Tony",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Helmer",
    imgUrls: ["XS-Helmer.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Helmer",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Juli Mizrahi",
    imgUrls: ["XS-Juli.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Juli_Mizrahi",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Mary",
    imgUrls: ["XS-Mary.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Mary_Godwin",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Shelley",
    imgUrls: ["XS-Shelley.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Shelley_Godwin",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Abel",
    imgUrls: ["XS-Abel.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Abel_(XS)",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "U-DO",
    imgUrls: ["XS-U-DO.gif"],
    wiki: "https://www.xenoserieswiki.org/wiki/U-DO",
    opts: {
      role: ["npc"],
      series: ["XS"],
      spoiler: true
    }
  },
  {
    name: "Alexei",
    imgUrls: ["PP-Alexei.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Alexei_Tsiolkovskyi",
    opts: {
      role: ["npc"],
      series: ["XS"],
    }
  },
  {
    name: "Bugs",
    imgUrls: ["PP-Bugs.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Bugs",
    opts: {
      role: ["protag"],
      series: ["XS"],
    }
  },
  {
    name: "Klaus Torres",
    imgUrls: ["PP-Klaus.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Klaus_Torres",
    opts: {
      role: ["npc"],
      series: ["XS"],
    }
  },
  {
    name: "Melisse",
    imgUrls: ["PP-Melisse.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Melisse_Ortus",
    opts: {
      role: ["protag"],
      series: ["XS"],
    }
  },
  {
    name: "Mikhail Ortmann",
    imgUrls: ["PP-Mikhail.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Mikhail_Ortmann",
    opts: {
      role: ["npc"],
      series: ["XS"],
    }
  },
  {
    name: "Sharon",
    imgUrls: ["PP-Sharon.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Sharon",
    opts: {
      role: ["npc"],
      series: ["XS"],
    }
  },
  {
    name: "Almadel",
    imgUrls: ["AMY-Almadel.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Almadel",
    opts: {
      role: ["npc"],
      series: ["XS"],
    }
  },
  {
    name: "Grimoire",
    imgUrls: ["AMY-Grimoire.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Grimoire_Verum",
    opts: {
      role: ["majant"],
      series: ["XS"],
    }
  },
  // Xenoblade Chronicles 1
  {
    name: "Shulk",
    imgUrls: ["XC-Shulk.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Shulk",
    opts: {
      role: ["protag"],
      series: ["XC", "FC"]
    }
  },
  {
    name: "Fiora",
    imgUrls: ["XC-Fiora.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Fiora",
    opts: {
      role: ["protag"],
      series: ["XC"]
    }
  },
  {
    name: "Mecha Fiora",
    imgUrls: ["XC-Mecha Fiora.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Fiora",
    opts: {
      role: ["protag"],
      series: ["XC"],
      spoiler: true,
      duplicate: true
    }
  },
  {
    name: "Reyn",
    imgUrls: ["XC-Reyn.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Reyn",
    opts: {
      role: ["protag"],
      series: ["XC"]
    }
  },
  {
    name: "Dunban",
    imgUrls: ["XC-Dunban.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Dunban",
    opts: {
      role: ["protag"],
      series: ["XC"]
    }
  },
  {
    name: "Sharla",
    imgUrls: ["XC-Sharla.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Sharla",
    opts: {
      role: ["protag"],
      series: ["XC"]
    }
  },
  {
    name: "Riki",
    imgUrls: ["XC-Riki.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Riki",
    opts: {
      role: ["protag", "nopon"],
      series: ["XC"]
    }
  },
  {
    name: "Melia",
    imgUrls: ["XC-Melia.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Melia",
    opts: {
      role: ["protag"],
      series: ["XC", "FC"]
    }
  },
  {
    name: "Dickson",
    imgUrls: ["XC-Dickson.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Dickson",
    opts: {
      role: ["majant"],
      series: ["XC"]
    }
  },
  {
    name: "Mumkhar",
    imgUrls: ["XC-Mumkhar.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Mumkhar",
    opts: {
      role: ["majant"],
      series: ["XC"]
    }
  },
  {
    name: "Alvis",
    imgUrls: ["XC-Alvis.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Alvis",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Juju",
    imgUrls: ["XC-Juju.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Juju",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Otharon",
    imgUrls: ["XC-Otharon.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Otharon",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Vanea",
    imgUrls: ["XC-Vanea.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Vanea",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Gadolt",
    imgUrls: ["XC-Gadolt.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Gadolt",
    opts: {
      role: ["minant"],
      series: ["XC"]
    }
  },
  {
    name: "Egil",
    imgUrls: ["XC-Egil.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Egil",
    opts: {
      role: ["majant"],
      series: ["XC"]
    }
  },
  {
    name: "Linada",
    imgUrls: ["XC-Linada.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Linada",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Lorithia",
    imgUrls: ["XC-Lorithia.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Lorithia",
    opts: {
      role: ["minant"],
      series: ["XC"]
    }
  },
  {
    name: "Meyneth",
    imgUrls: ["XC-Meyneth.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Meyneth",
    opts: {
      role: ["npc"],
      series: ["XC"],
      spoiler: true
    }
  },
  {
    name: "Tyrea",
    imgUrls: ["XC-Tyrea.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Tyrea",
    opts: {
      role: ["minant", "npc"],
      series: ["XC", "FC"]
    }
  },
  {
    name: "Kallian",
    imgUrls: ["XC-Kallian.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Kallian",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Sorean",
    imgUrls: ["XC-Sorean.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Sorean",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Klaus",
    imgUrls: ["XC-Klaus.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Klaus",
    opts: {
      role: ["npc"],
      series: ["XC", "XC2"],
      spoiler: true
    }
  },
  {
    name: "Galea",
    imgUrls: ["XC-Galea.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Galea",
    opts: {
      role: ["npc"],
      series: ["XC", "XC2"],
      spoiler: true
    }
  },
  {
    name: "Zanza",
    imgUrls: ["XC-Zanza.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Zanza",
    opts: {
      role: ["majant"],
      series: ["XC"],
      spoiler: true
    }
  },
  {
    name: "Teelan",
    imgUrls: ["XC-Teelan.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Teelan",
    opts: {
      role: ["npc"],
      series: ["XC", "FC"]
    }
  },
  {
    name: "Vangarre",
    imgUrls: ["XC-Vangarre.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Vangarre",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Kenny Rohan",
    imgUrls: ["XC-Kenny Rohan.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Kenny_Rohan",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Miqol",
    imgUrls: ["XC-Miqol.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Miqol",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Xord",
    imgUrls: ["XC-Xord.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Xord",
    opts: {
      role: ["minant"],
      series: ["XC"]
    }
  },
  {
    name: "Yumea",
    imgUrls: ["XC-Yumea.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Yumea",
    opts: {
      role: ["minant"],
      series: ["XC"]
    }
  },
  {
    name: "Bana (XC1)",
    imgUrls: ["XC-Bana.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Bana_(XC1)",
    opts: {
      role: ["npc", "nopon"],
      series: ["XC", "FC"]
    }
  },
  // Future Connected
  {
    name: "Nene",
    imgUrls: ["FC-Nene.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Nene",
    opts: {
      role: ["protag", "nopon"],
      series: ["FC"]
    }
  },
  {
    name: "Kino",
    imgUrls: ["FC-Kino.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Kino",
    opts: {
      role: ["protag", "nopon"],
      series: ["FC"]
    }
  },
  {
    name: "Gael'gar",
    imgUrls: ["FC-Gael'gar.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Gael'gar",
    opts: {
      role: ["minant"],
      series: ["FC"]
    }
  },
  {
    name: "Radzam",
    imgUrls: ["FC-Radzam.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Radzam",
    opts: {
      role: ["npc"],
      series: ["FC"]
    }
  },
  {
    name: "Maxis",
    imgUrls: ["FC-Maxis.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Maxis",
    opts: {
      role: ["npc"],
      series: ["FC"]
    }
  },
  // Xenoblade Chronicles X
  // {
  //   name: "Cross M",
  //   imgUrls: ["XCXDE-Cross M.png"],
  //   wiki: "https://www.xenoserieswiki.org/wiki/Cross",
  //   opts: {
  //     role: ["protag", "xblade"],
  //     series: ["XCX", "XCXDE"]
  //   }
  // },
  // {
  //   name: "Cross F",
  //   imgUrls: ["XCXDE-Cross F.png"],
  //   wiki: "https://www.xenoserieswiki.org/wiki/Cross",
  //   opts: {
  //     role: ["protag", "xblade"],
  //     series: ["XCX", "XCXDE"]
  //   }
  // },
  {
    name: "Cross",
    imgUrls: ["XCX-Cross M.png", "XCX-Cross F.png", "XCXDE-Cross M.png", "XCXDE-Cross F.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Cross",
    opts: {
      role: ["protag", "xblade"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Elma",
    imgUrls: ["XCX-Elma.png", "XCXDE-Elma.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Elma",
    opts: {
      role: ["protag", "xblade", "2blade"],
      series: ["XCX", "XC2", "XCXDE"]
    }
  },
  {
    name: "Lin",
    imgUrls: ["XCX-Lin.png", "XCXDE-Lin.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Lin",
    opts: {
      role: ["protag", "xblade"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Gwin",
    imgUrls: ["XCX-Gwin.png", "XCXDE-Gwin.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Gwin",
    opts: {
      role: ["xblade"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Irina",
    imgUrls: ["XCX-Irina.png", "XCXDE-Irina.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Irina",
    opts: {
      role: ["xblade"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Doug",
    imgUrls: ["XCX-Doug.png", "XCXDE-Doug.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Doug",
    opts: {
      role: ["xblade"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Lao",
    imgUrls: ["XCX-Lao.png", "XCXDE-Lao.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Lao",
    opts: {
      role: ["xblade", "majant"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "L",
    imgUrls: ["XCX-L.png", "XCXDE-L.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/L%27cirufe",
    opts: {
      role: ["xblade"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Nagi",
    imgUrls: ["XCX-Nagi.png", "XCXDE-Nagi.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Nagi",
    opts: {
      role: ["xblade"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Celica",
    imgUrls: ["XCX-Celica.png", "XCXDE-Celica.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Celica",
    opts: {
      role: ["xblade"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Rock",
    imgUrls: ["XCX-Rock.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Rock",
    opts: {
      role: ["npc"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Hope",
    imgUrls: ["XCX-Hope.png", "XCXDE-Hope.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Hope",
    opts: {
      role: ["xblade"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Frye",
    imgUrls: ["XCX-Frye.png", "XCXDE-Frye.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Frye",
    opts: {
      role: ["xblade"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Phog",
    imgUrls: ["XCX-Phog.png", "XCXDE-Phog.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Phog",
    opts: {
      role: ["xblade"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Mia",
    imgUrls: ["XCX-Mia.png", "XCXDE-Mia.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Mia",
    opts: {
      role: ["xblade"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Murderess",
    imgUrls: ["XCX-Murderess.png", "XCXDE-Murderess.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Murderess",
    opts: {
      role: ["xblade"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Alexa",
    imgUrls: ["XCX-Alexa.png", "XCXDE-Alexa.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Alexa",
    opts: {
      role: ["xblade"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "H.B.",
    imgUrls: ["XCX-H.B..png", "XCXDE-H.B..png"],
    wiki: "https://www.xenoserieswiki.org/wiki/H.B.",
    opts: {
      role: ["xblade"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Bozé",
    imgUrls: ["XCX-Bozé.png", "XCXDE-Bozé.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Bozé",
    opts: {
      role: ["xblade"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Yelv",
    imgUrls: ["XCX-Yelv.png", "XCXDE-Yelv.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Yelv",
    opts: {
      role: ["xblade"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Vandham (XCX)",
    imgUrls: ["XCX-Vandham.png", "XCXDE-Vandham.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Vandham_(XCX)",
    opts: {
      role: ["npc"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Maurice",
    imgUrls: ["XCX-Maurice.png", "XCXDE-Maurice.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Maurice",
    opts: {
      role: ["npc"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Tatsu",
    imgUrls: ["XCX-Tatsu.png", "XCXDE-Tatsu.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Tatsu",
    opts: {
      role: ["xblade", "nopon"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Eleonora",
    imgUrls: ["XCX-Eleonora.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Eleonora",
    opts: {
      role: ["npc"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Ga Jiarg",
    imgUrls: ["XCX-Ga Jiarg.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Ga_Jiarg",
    opts: {
      role: ["npc"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Ga Buidhe",
    imgUrls: ["XCX-Ga Buidhe.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Ga_Buidhe",
    opts: {
      role: ["npc"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Luxaar",
    imgUrls: ["XCX-Luxaar.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Luxaar",
    opts: {
      role: ["majant"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Goetia",
    imgUrls: ["XCX-Goetia.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Goetia",
    opts: {
      role: ["minant"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Ryyz",
    imgUrls: ["XCX-Ryyz.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Ryyz",
    opts: {
      role: ["minant"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Dagahn",
    imgUrls: ["XCX-Dagahn.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Dagahn",
    opts: {
      role: ["minant"],
      series: ["XCX", "XCXDE"]
    }
  },
  {
    name: "Neilnail",
    imgUrls: ["XCXDE-Neilnail.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Neilnail_(character)",
    opts: {
      role: ["xblade"],
      series: ["XCXDE"]
    }
  },
  {
    name: "Liesel",
    imgUrls: ["XCXDE-Liesel.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Liesel",
    opts: {
      role: ["xblade"],
      series: ["XCXDE"]
    }
  },
  {
    name: "Al",
    imgUrls: ["XCXDE-Al.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Al",
    opts: {
      role: ["xblade"],
      series: ["XCXDE"],
      spoiler: true,
    }
  },
  {
    name: "Void",
    imgUrls: ["XCXDE-Void.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Void",
    opts: {
      role: ["majant"],
      series: ["XCXDE"],
      spoiler: true,
    }
  },
  // Xenoblade Chronicles 2
  {
    name: "Rex",
    imgUrls: ["XC2-Rex.png"],
    overrideimgUrls: ["XC2-Rex-Spoiler.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Rex",
    opts: {
      role: ["protag"],
      series: ["XC2"]
    }
  },
  {
    name: "Nia",
    imgUrls: ["XC2-Nia.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Nia",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Tora",
    imgUrls: ["XC2-Tora.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Tora_(XC2)",
    opts: {
      role: ["protag", "nopon"],
      series: ["XC2"]
    }
  },
  {
    name: "Vandham (XC2)",
    imgUrls: ["XC2-Vandham.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Vandham_(XC2)",
    opts: {
      role: ["protag"],
      series: ["XC2"]
    }
  },
  {
    name: "Mòrag",
    imgUrls: ["XC2-Mòrag.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Mòrag",
    opts: {
      role: ["protag"],
      series: ["XC2"]
    }
  },
  {
    name: "Zeke",
    imgUrls: ["XC2-Zeke.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Zeke",
    opts: {
      role: ["protag"],
      series: ["XC2"]
    }
  },
  {
    name: "Pyra",
    imgUrls: ["XC2-Pyra.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Pyra",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Mythra",
    imgUrls: ["XC2-Mythra.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Mythra",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Pneuma",
    imgUrls: ["XC2-Pneuma.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Pneuma",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"],
      spoiler: true
    }
  },
  {
    name: "Roc",
    imgUrls: ["XC2-Roc.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Roc",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Blade Nia",
    imgUrls: ["XC2-Blade Nia.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Nia#As_a_Blade_2",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"],
      spoiler: true,
      duplicate: true
    }
  },
  {
    name: "Dromarch",
    imgUrls: ["XC2-Dromarch.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Dromarch",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Poppi α",
    imgUrls: ["XC2-Poppi α.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Poppi_%CE%B1",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Poppi QT",
    imgUrls: ["XC2-Poppi QT.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Poppi_QT",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Poppi QTπ",
    imgUrls: ["XC2-Poppi QTπ.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Poppi_QT%CF%80",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Brighid",
    imgUrls: ["XC2-Brighid.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Brighid",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Aegaeon",
    imgUrls: ["XC2-Aegaeon.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Aegaeon",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Pandoria",
    imgUrls: ["XC2-Pandoria.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Pandoria",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Adenine",
    imgUrls: ["XC2-Adenine.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Adenine",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Agate",
    imgUrls: ["XC2-Agate.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Agate",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Azami",
    imgUrls: ["XC2-Azami.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Azami",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Boreas",
    imgUrls: ["XC2-Boreas.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Boreas",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Dagas",
    imgUrls: ["XC2-Dagas.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Dagas",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Dahlia",
    imgUrls: ["XC2-Dahlia.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Dahlia",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Electra",
    imgUrls: ["XC2-Electra.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Electra",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Finch",
    imgUrls: ["XC2-Finch.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Finch",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Floren",
    imgUrls: ["XC2-Floren.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Floren",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Godfrey",
    imgUrls: ["XC2-Godfrey.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Godfrey",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Gorg",
    imgUrls: ["XC2-Gorg.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Gorg",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Herald",
    imgUrls: ["XC2-Herald.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Herald",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Kasandra",
    imgUrls: ["XC2-Kasandra.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Kasandra",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Kora",
    imgUrls: ["XC2-Kora.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Kora",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "KOS-MOS (XC2)",
    imgUrls: ["XC2-KOS-MOS.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/KOS-MOS",
    opts: {
      role: ["2blade"],
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Newt",
    imgUrls: ["XC2-Newt.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Newt",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Nim",
    imgUrls: ["XC2-Nim.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Nim",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Perceval",
    imgUrls: ["XC2-Perceval.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Perceval",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Perun",
    imgUrls: ["XC2-Perun.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Perun",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Praxis",
    imgUrls: ["XC2-Praxis.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Praxis",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Sheba",
    imgUrls: ["XC2-Sheba.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Sheba",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Theory",
    imgUrls: ["XC2-Theory.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Theory",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Ursula",
    imgUrls: ["XC2-Ursula.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Ursula",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Vale",
    imgUrls: ["XC2-Vale.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Vale",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Vess",
    imgUrls: ["XC2-Vess.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Vess",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Wulfric",
    imgUrls: ["XC2-Wulfric.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Wulfric",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Zenobia",
    imgUrls: ["XC2-Zenobia.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Zenobia",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Poppibuster",
    imgUrls: ["XC2-Poppibuster.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Poppibuster",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "T-elos (XC2)",
    imgUrls: ["XC2-T-elos.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/T-elos",
    opts: {
      role: ["2blade"],
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Shulk (XC2)",
    imgUrls: ["XC2-Shulk.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Shulk#In_Xenoblade_Chronicles_2_2",
    opts: {
      role: ["2blade"],
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Fiora (XC2)",
    imgUrls: ["XC2-Fiora.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Fiora#In_Xenoblade_Chronicles_2",
    opts: {
      role: ["2blade"],
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Elma (XC2)",
    imgUrls: ["XC2-Elma.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Elma#In_Xenoblade_Chronicles_2",
    opts: {
      role: ["2blade"],
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Akhos",
    imgUrls: ["XC2-Akhos.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Akhos",
    opts: {
      role: ["majant", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Cressidus",
    imgUrls: ["XC2-Cressidus.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Cressidus",
    opts: {
      role: ["minant", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Mikhail",
    imgUrls: ["XC2-Mikhail.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Mikhail",
    opts: {
      role: ["majant", "2blade"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Obrona",
    imgUrls: ["XC2-Obrona.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Obrona",
    opts: {
      role: ["minant", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Patroka",
    imgUrls: ["XC2-Patroka.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Patroka",
    opts: {
      role: ["majant", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Perdido",
    imgUrls: ["XC2-Perdido.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Perdido",
    opts: {
      role: ["minant", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Sever",
    imgUrls: ["XC2-Sever.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Sever",
    opts: {
      role: ["minant", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Jin (XC2)",
    imgUrls: ["XC2-Jin.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Jin_(XC2)",
    opts: {
      role: ["protag", "majant", "2blade"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Malos",
    imgUrls: ["XC2-Malos.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Malos",
    opts: {
      role: ["majant", "2blade"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Amalthus",
    imgUrls: ["XC2-Amalthus.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Amalthus",
    opts: {
      role: ["majant"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Bana (XC2)",
    imgUrls: ["XC2-Bana.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Bana_(XC2)",
    opts: {
      role: ["minant", "nopon"],
      series: ["XC2"],
    }
  },
  {
    name: "Muimui",
    imgUrls: ["XC2-Muimui.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Muimui_(XC2)",
    opts: {
      role: ["minant", "npc", "nopon"],
      series: ["XC2"],
    }
  },
  {
    name: "Niranira",
    imgUrls: ["XC2-Niranira.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Niranira_(XC2)",
    opts: {
      role: ["npc", "nopon"],
      series: ["XC2"],
    }
  },
  {
    name: "Niall",
    imgUrls: ["XC2-Niall.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Niall",
    opts: {
      role: ["npc"],
      series: ["XC2"],
    }
  },
  {
    name: "Raqura",
    imgUrls: ["XC2-Raqura.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Raqura",
    opts: {
      role: ["npc"],
      series: ["XC2"],
    }
  },
  {
    name: "Eulogimenos",
    imgUrls: ["XC2-Eulogimenos.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Eulogimenos",
    opts: {
      role: ["npc"],
      series: ["XC2"],
    }
  },
  {
    name: "Captain Padraig",
    imgUrls: ["XC2-Padraig.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Padraig",
    opts: {
      role: ["minant"],
      series: ["XC2"],
    }
  },
  {
    name: "Dughall",
    imgUrls: ["XC2-Dughall.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Dughall",
    opts: {
      role: ["minant"],
      series: ["XC2"],
    }
  },
  {
    name: "Dolmes",
    imgUrls: ["XC2-Dolmes.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Dolmes",
    opts: {
      role: ["minant", "2blade"],
      series: ["XC2"],
    }
  },
  {
    name: "Azurda",
    imgUrls: ["XC2-Azurda.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Azurda",
    opts: {
      role: ["npc"],
      series: ["XC2", "TGC"],
    }
  },
  {
    name: "Corvin",
    imgUrls: ["XC2-Corvin.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Corvin",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Crossette",
    imgUrls: ["XC2-Crossette.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Crossette",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  // The Golden Country
  {
    name: "Addam",
    imgUrls: ["TGC-Addam.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Addam",
    opts: {
      role: ["protag"],
      series: ["TGC"]
    }
  },
  {
    name: "Gort",
    imgUrls: ["TGC-Gort.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Gort",
    opts: {
      role: ["minant"],
      series: ["TGC"]
    }
  },
  {
    name: "Haze",
    imgUrls: ["TGC-Haze.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Haze",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Hugo",
    imgUrls: ["TGC-Hugo.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Hugo_(TTGC)",
    opts: {
      role: ["protag"],
      series: ["TGC"]
    }
  },
  {
    name: "Lora",
    imgUrls: ["TGC-Lora.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Lora",
    opts: {
      role: ["protag"],
      series: ["TGC"]
    }
  },
  {
    name: "Minoth",
    imgUrls: ["TGC-Minoth.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Minoth",
    opts: {
      role: ["protag", "2blade"],
      series: ["TGC"]
    }
  },
  {
    name: "Milton",
    imgUrls: ["TGC-Milton.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Milton",
    opts: {
      role: ["npc"],
      series: ["TGC"]
    }
  },
  {
    name: "Zettar",
    imgUrls: ["TGC-Zettar.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Zettar",
    opts: {
      role: ["minant"],
      series: ["TGC"],
    }
  },
  {
    name: "Tornan King",
    imgUrls: ["TGC-Tornan King.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Tornan_King",
    opts: {
      role: ["npc"],
      series: ["TGC"],
    }
  },
  // Xenoblade Chronicles 3
  {
    name: "Noah",
    imgUrls: ["XC3-Noah.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Noah",
    opts: {
      role: ["protag"],
      series: ["XC3"]
    }
  },
  {
    name: "Mio",
    imgUrls: ["XC3-Mio.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Mio",
    opts: {
      role: ["protag"],
      series: ["XC3"]
    }
  },
  {
    name: "Eunie",
    imgUrls: ["XC3-Eunie.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Eunie",
    opts: {
      role: ["protag"],
      series: ["XC3"]
    }
  },
  {
    name: "Taion",
    imgUrls: ["XC3-Taion.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Taion",
    opts: {
      role: ["protag"],
      series: ["XC3"]
    }
  },
  {
    name: "Lanz",
    imgUrls: ["XC3-Lanz.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Lanz",
    opts: {
      role: ["protag"],
      series: ["XC3"]
    }
  },
  {
    name: "Sena",
    imgUrls: ["XC3-Sena.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Sena",
    opts: {
      role: ["protag"],
      series: ["XC3"]
    }
  },
  {
    name: "Riku",
    imgUrls: ["XC3-Riku.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Riku",
    opts: {
      role: ["protag", "nopon"],
      series: ["XC3", "FR"],
    }
  },
  {
    name: "Manana",
    imgUrls: ["XC3-Manana.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Manana",
    opts: {
      role: ["protag", "nopon"],
      series: ["XC3"],
    }
  },
  {
    name: "Alexandria",
    imgUrls: ["XC3-Alexandria.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Alexandria",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Ashera",
    imgUrls: ["XC3-Ashera.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Ashera",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Cammuravi",
    imgUrls: ["XC3-Cammuravi.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Cammuravi",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Ethel",
    imgUrls: ["XC3-Ethel.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Ethel",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Fiona",
    imgUrls: ["XC3-Fiona.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Fiona",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Ghondor (XC3)",
    imgUrls: ["XC3-Ghondor.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Ghondor",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Gray",
    imgUrls: ["XC3-Gray.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Gray",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Isurd",
    imgUrls: ["XC3-Isurd.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Isurd",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Juniper",
    imgUrls: ["XC3-Juniper.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Juniper",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Miyabi",
    imgUrls: ["XC3-Miyabi.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Miyabi",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Monica",
    imgUrls: ["XC3-Monica.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Monica_Vandham",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Segiri",
    imgUrls: ["XC3-Segiri.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Segiri",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Teach",
    imgUrls: ["XC3-Teach.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Teach",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Triton",
    imgUrls: ["XC3-Triton.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Triton",
    opts: {
      role: ["hero", "moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Valdi",
    imgUrls: ["XC3-Valdi.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Valdi",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Zeon",
    imgUrls: ["XC3-Zeon.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Zeon",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Guernica Vandham",
    imgUrls: ["XC3-Vandham.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Guernica_Vandham",
    opts: {
      role: ["npc"],
      series: ["XC3"],
    }
  },
  {
    name: "Melia (XC3)",
    imgUrls: ["XC3-Melia.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Melia#In_Xenoblade_Chronicles_3",
    opts: {
      role: ["hero"],
      series: ["XC3"],
      duplicate: true,
    }
  },
  {
    name: "Nia (XC3)",
    imgUrls: ["XC3-Nia.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Nia#In_Xenoblade_Chronicles_3_2",
    opts: {
      role: ["hero"],
      series: ["XC3"],
      duplicate: true,
    }
  },
  {
    name: "Bolearis",
    imgUrls: ["XC3-Bolearis.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Bolearis",
    opts: {
      role: ["npc"],
      series: ["XC3"],
    }
  },
  {
    name: "Mwamba",
    imgUrls: ["XC3-Mwamba.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Mwamba",
    opts: {
      role: ["npc"],
      series: ["XC3"],
    }
  },
  {
    name: "Hackt",
    imgUrls: ["XC3-Hackt.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Hackt",
    opts: {
      role: ["npc"],
      series: ["XC3"],
    }
  },
  {
    name: "Samon",
    imgUrls: ["XC3-Samon.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Samon",
    opts: {
      role: ["npc", "nopon"],
      series: ["XC3"],
    }
  },
  {
    name: "Nimue",
    imgUrls: ["XC3-Nimue.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Nimue",
    opts: {
      role: ["npc"],
      series: ["XC3"],
    }
  },
  {
    name: "Garrett",
    imgUrls: ["XC3-Garrett.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Garrett",
    opts: {
      role: ["npc"],
      series: ["XC3"],
    }
  },
  {
    name: "Garvel",
    imgUrls: ["XC3-Garvel.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Garvel",
    opts: {
      role: ["npc", "minant"],
      series: ["XC3"],
    }
  },
  {
    name: "Kite",
    imgUrls: ["XC3-Kite.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Kite",
    opts: {
      role: ["npc"],
      series: ["XC3"],
    }
  },
  {
    name: "Travis",
    imgUrls: ["XC3-Travis.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Travis",
    opts: {
      role: ["npc"],
      series: ["XC3"],
    }
  },
  // {
  //   name: "Pulipuli",
  //   imgUrls: ["XC3-Pulipuli.png",
  //   wiki: "https://www.xenoserieswiki.org/wiki/Pulipuli",
  //   opts: {
  //     role: ["npc", "nopon"],
  //     series: ["XC3"]
  //   }
  // },
  {
    name: "Mechafriend",
    imgUrls: ["XC3-Mechafriend.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Mechafriend",
    opts: {
      role: ["npc"],
      series: ["XC3"]
    }
  },
  {
    name: "Moebius B",
    imgUrls: ["XC3-B.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/B",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Crys",
    imgUrls: ["XC3-Crys.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Crys",
    opts: {
      role: ["npc", "moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius D",
    imgUrls: ["XC3-D.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/D",
    opts: {
      role: ["majant", "moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius E",
    imgUrls: ["XC3-E.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/E",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius F",
    imgUrls: ["XC3-F.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/F",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius G",
    imgUrls: ["XC3-G.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/G",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius H",
    imgUrls: ["XC3-H.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/H",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Irma",
    imgUrls: ["XC3-Irma.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Irma",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Joran",
    imgUrls: ["XC3-Joran.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Joran",
    opts: {
      role: ["majant", "moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius K",
    imgUrls: ["XC3-K.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/K",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius L",
    imgUrls: ["XC3-L.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Consul_L",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius M",
    imgUrls: ["XC3-M.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/M",
    opts: {
      role: ["majant", "moebius"],
      series: ["XC3"],
      spoiler: true
    }
  },
  {
    name: "Moebius N",
    imgUrls: ["XC3-N.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/N",
    opts: {
      role: ["majant", "moebius"],
      series: ["XC3", "FR"],
    }
  },
  {
    name: "Moebius O",
    imgUrls: ["XC3-O.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/O",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius P",
    imgUrls: ["XC3-P.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/P",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius Q (XC3)",
    imgUrls: ["XC3-Q.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Q",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius R (XC3)",
    imgUrls: ["XC3-R.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/R",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Shania",
    imgUrls: ["XC3-Shania.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Shania",
    opts: {
      role: ["majant", "moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius U",
    imgUrls: ["XC3-U.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/U",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius V",
    imgUrls: ["XC3-V.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/V",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius W (XC3)",
    imgUrls: ["XC3-W.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/W",
    opts: {
      role: ["moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius X",
    imgUrls: ["XC3-X.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/X",
    opts: {
      role: ["minant", "moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius Y",
    imgUrls: ["XC3-Y.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Y",
    opts: {
      role: ["minant", "moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Z",
    imgUrls: ["XC3-Z.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Z",
    opts: {
      role: ["majant", "moebius"],
      series: ["XC3", "FR"],
    }
  },
  {
    name: "Ino",
    imgUrls: ["XC3-Ino.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Ino",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Masha",
    imgUrls: ["XC3-Masha.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Masha",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  // Future Redeemed
  {
    name: "Matthew",
    imgUrls: ["FR-Matthew.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Matthew",
    opts: {
      role: ["protag"],
      series: ["FR"],
    }
  },
  {
    name: "Na'el",
    imgUrls: ["FR-Na'el.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Na%27el",
    opts: {
      role: ["protag"],
      series: ["FR"],
    }
  },
  {
    name: "A",
    imgUrls: ["FR-A.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/A",
    opts: {
      role: ["protag"],
      series: ["FR"],
    }
  },
  {
    name: "Nikol",
    imgUrls: ["FR-Nikol.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Nikol",
    opts: {
      role: ["protag"],
      series: ["FR"],
    }
  },
  {
    name: "Glimmer",
    imgUrls: ["FR-Glimmer.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Glimmer",
    opts: {
      role: ["protag"],
      series: ["FR"],
    }
  },
  {
    name: "Shulk (FR)",
    imgUrls: ["FR-Shulk.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Shulk#Future_Redeemed",
    opts: {
      role: ["protag", "hero"],
      series: ["FR"],
      duplicate: true,
    }
  },
  {
    name: "Rex (FR)",
    imgUrls: ["FR-Rex.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Rex#Xenoblade_Chronicles_3:_Future_Redeemed",
    opts: {
      role: ["protag", "hero"],
      series: ["FR"],
      duplicate: true,
    }
  },
  {
    name: "Panacea",
    imgUrls: ["FR-Panacea.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Panacea",
    opts: {
      role: ["npc"],
      series: ["FR"],
    }
  },
  {
    name: "Linka",
    imgUrls: ["FR-Linka.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Linka",
    opts: {
      role: ["npc"],
      series: ["FR"],
    }
  },
  {
    name: "Alpha",
    imgUrls: ["FR-Alpha.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Alvis?so=search#Xenoblade_Chronicles_3:_Future_Redeemed",
    opts: {
      role: ["majant"],
      series: ["FR"],
    }
  },
  {
    name: "Ghondor (FR)",
    imgUrls: ["FR-Ghondor.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Ghondor_(FR)",
    opts: {
      role: ["npc"],
      series: ["FR"],
    }
  },
  {
    name: "Moebius Q (FR)",
    imgUrls: ["FR-Q.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Q_(FR)",
    opts: {
      role: ["moebius"],
      series: ["FR"],
    }
  },
  {
    name: "Moebius R (FR)",
    imgUrls: ["FR-R.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/R_(FR)",
    opts: {
      role: ["moebius"],
      series: ["FR"],
    }
  },
  {
    name: "Moebius W (FR)",
    imgUrls: ["FR-W.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/W_(FR)",
    opts: {
      role: ["moebius"],
      series: ["FR"],
    }
  },
];
