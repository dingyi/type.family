export interface Foundry {
  id: number;
  name: string;
  description?: string;
  country?: string;
  founded?: string;
  notableFonts?: string[];
  website: string;
  category: 'classic' | 'modern' | 'indie' | 'tech' | 'studio';
  rating?: number;
}

export const foundries: Foundry[] = [
  // === 经典厂商 (Classic) ===
  {
    id: 1,
    name: "Monotype",
    description: "全球最大的字体公司之一，拥有海量经典字体版权",
    country: "美国",
    founded: "1887",
    notableFonts: ["Helvetica", "Times New Roman", "Arial"],
    website: "monotype.com",
    category: "classic"
  },
  {
    id: 2,
    name: "Linotype",
    description: "德国老牌字体厂商，现为 Monotype 旗下",
    country: "德国",
    founded: "1886",
    notableFonts: ["Frutiger", "Univers", "Optima"],
    website: "linotype.com",
    category: "classic"
  },
  {
    id: 3,
    name: "Emigre",
    description: "数字排版先驱，推动了 90 年代字体设计革命",
    country: "美国",
    founded: "1984",
    notableFonts: ["Mrs Eaves", "Filosofia", "Base"],
    website: "emigre.com",
    category: "classic"
  },
  {
    id: 4,
    name: "Hanyi 汉仪",
    description: "中国领先的中文字体设计公司",
    country: "中国",
    founded: "1993",
    notableFonts: ["汉仪旗黑", "汉仪楷体", "汉仪秀英"],
    website: "hanyi.com.cn",
    category: "classic"
  },
  {
    id: 5,
    name: "方正 Founder",
    description: "中国知名字体与排版技术公司",
    country: "中国",
    founded: "1991",
    notableFonts: ["方正黑体", "方正兰亭", "方正悠黑"],
    website: "foundertype.com",
    category: "classic"
  },
  {
    id: 6,
    name: "Morisawa 森泽",
    description: "日本历史最悠久的字体公司",
    country: "日本",
    founded: "1924",
    notableFonts: ["A-OTF 新ゴ", "リュウミン", "見出ゴMB"],
    website: "morisawa.co.jp",
    category: "classic"
  },
  {
    id: 7,
    name: "Sandoll 산돌",
    description: "韩国代表性字体厂商",
    country: "韩国",
    founded: "1984",
    notableFonts: ["Sandoll Gothic", "Sandoll Myungjo"],
    website: "sandoll.co.kr",
    category: "classic"
  },

  // === 科技公司 (Tech) ===
  {
    id: 8,
    name: "Adobe Fonts",
    description: "Adobe 旗下字体服务，收录数千种高质量字体",
    country: "美国",
    founded: "1982",
    notableFonts: ["Adobe Garamond", "Myriad", "Source Sans"],
    website: "fonts.adobe.com",
    category: "tech"
  },
  {
    id: 9,
    name: "Google Fonts",
    description: "全球最大的免费开源字体库",
    country: "美国",
    founded: "2010",
    notableFonts: ["Roboto", "Open Sans", "Noto"],
    website: "fonts.google.com",
    category: "tech"
  },
  {
    id: 10,
    name: "Apple",
    description: "设计了 San Francisco 等系统字体",
    country: "美国",
    founded: "1976",
    notableFonts: ["San Francisco", "New York", "SF Mono"],
    website: "developer.apple.com/fonts",
    category: "tech"
  },
  {
    id: 11,
    name: "JetBrains",
    description: "为开发者设计的等宽编程字体",
    country: "捷克",
    founded: "2000",
    notableFonts: ["JetBrains Mono"],
    website: "jetbrains.com/mono",
    category: "tech"
  },

  // === 现代厂商 (Modern) ===
  {
    id: 12,
    name: "Hoefler&Co",
    description: "高端字体设计工作室，作品广泛用于出版和品牌",
    country: "美国",
    founded: "1989",
    notableFonts: ["Gotham", "Mercury", "Whitney"],
    website: "typography.com",
    category: "modern"
  },
  {
    id: 13,
    name: "Dalton Maag",
    description: "为全球品牌定制字体的英国工作室",
    country: "英国",
    founded: "1991",
    notableFonts: ["Ubuntu", "Nokia Pure", "Rio 2016"],
    website: "daltonmaag.com",
    category: "modern"
  },
  {
    id: 14,
    name: "House Industries",
    description: "以独特装饰性字体闻名的美国厂商",
    country: "美国",
    founded: "1993",
    notableFonts: ["Neutraface", "Eames", "Chalet"],
    website: "houseindustries.com",
    category: "modern"
  },
  {
    id: 15,
    name: "Typotheque",
    description: "unique, high quality fonts for print and screens",
    country: "荷兰",
    founded: "1999",
    notableFonts: ["Fedra", "History", "Greta"],
    website: "typotheque.com",
    category: "modern"
  },
  {
    id: 16,
    name: "Frere-Jones Type",
    description: "由 Tobias Frere-Jones 创立的独立字体工作室",
    country: "美国",
    website: "frerejones.com",
    category: "modern"
  },
  {
    id: 17,
    name: "F37 Foundry",
    description: "Brand font licensing & custom fonts",
    country: "英国",
    website: "f37foundry.com",
    category: "modern"
  },
  {
    id: 18,
    name: "Identity Letters",
    description: "Retail & Custom Typefaces. Easy Licensing.",
    website: "identity-letters.com",
    category: "modern"
  },

  // === 独立厂商 (Indie) ===
  {
    id: 19,
    name: "Dinamo Typefaces",
    description: "a Swiss design practice established by Johannes Breyer and Fabian Harb",
    country: "瑞士",
    founded: "2010",
    notableFonts: ["ABC Diatype", "ABC Favorit", "Prophet"],
    website: "abcdinamo.com",
    category: "indie"
  },
  {
    id: 20,
    name: "Grilli Type",
    description: "Independent Swiss Type Foundry",
    country: "瑞士",
    founded: "2009",
    notableFonts: ["GT Walsheim", "GT America", "GT Sectra"],
    website: "grillitype.com",
    category: "indie"
  },
  {
    id: 21,
    name: "Commercial Type",
    description: "纽约独立字体厂商，作品广泛用于媒体设计",
    country: "美国",
    founded: "2007",
    notableFonts: ["Graphik", "Canela", "Druk"],
    website: "commercialtype.com",
    category: "indie"
  },
  {
    id: 22,
    name: "Klim Type",
    description: "新西兰独立字体设计工作室",
    country: "新西兰",
    founded: "2005",
    notableFonts: ["Founders Grotesk", "Calibre", "Domaine"],
    website: "klim.co.nz",
    category: "indie"
  },
  {
    id: 23,
    name: "Colophon Foundry",
    description: "英国独立字体厂商，以 Aperçu 闻名",
    country: "英国",
    founded: "2009",
    notableFonts: ["Aperçu", "Reader", "Basis Grotesque"],
    website: "colophon-foundry.org",
    category: "indie"
  },
  {
    id: 24,
    name: "Pangram Pangram",
    description: "Free to Try Quality Fonts and Typefaces",
    website: "pangrampangram.com",
    category: "indie"
  },
  {
    id: 25,
    name: "Extraset",
    description: "Independent Swiss Type Foundry",
    country: "瑞士",
    website: "extraset.ch",
    category: "indie"
  },
  {
    id: 26,
    name: "Blaze Type",
    description: "欧洲新锐独立字体厂商",
    website: "blazetype.eu",
    category: "indie"
  },
  {
    id: 27,
    name: "Displaay",
    description: "independent type-foundry and design studio founded by Martin Vácha based in Prague",
    country: "捷克",
    website: "displaay.net",
    category: "indie"
  },
  {
    id: 28,
    name: "MCKL Type Foundry",
    description: "美国独立字体工作室",
    country: "美国",
    founded: "2012",
    notableFonts: ["Roobert", "Obviously", "Right Grotesk"],
    website: "mckltype.com",
    category: "indie"
  },
  {
    id: 29,
    name: "Nouvelle Noire",
    description: "Swiss Type Foundry",
    country: "瑞士",
    website: "nouvellenoire.ch",
    category: "indie"
  },
  {
    id: 30,
    name: "Superior Type",
    description: "czech type design studio offering retail and custom fonts",
    country: "捷克",
    website: "superiortype.com",
    rating: 5,
    category: "indie"
  },
  {
    id: 31,
    name: "Cast Type Foundry",
    description: "In case of type",
    website: "c-a-s-t.com",
    category: "indie"
  },
  {
    id: 32,
    name: "Production Type",
    description: "法国独立字体厂商",
    country: "法国",
    founded: "2015",
    notableFonts: ["Spectral", "Maax", "Pangaia"],
    website: "productiontype.com",
    category: "indie"
  },
  {
    id: 33,
    name: "Connary Fagen",
    description: "a type design studio and foundry",
    website: "connary.com",
    category: "indie"
  },
  {
    id: 34,
    name: "Formist Foundry",
    description: "Typefaces of rigour and invention",
    website: "formistfoundry.co",
    category: "indie"
  },
  {
    id: 35,
    name: "Schick Toikka",
    description: "独立字体设计工作室",
    website: "schick-toikka.com",
    category: "indie"
  },
  {
    id: 36,
    name: "Fontfabric",
    description: "保加利亚独立字体厂商",
    country: "保加利亚",
    founded: "2008",
    notableFonts: ["Mont", "Nexa", "Uni Sans"],
    website: "fontfabric.com",
    category: "indie"
  },

  // === 工作室 (Studio) ===
  {
    id: 37,
    name: "CoType Foundry",
    description: "CoType is the London based type foundry of Mark Bloom and Co.",
    country: "英国",
    website: "cotypefoundry.com",
    category: "studio"
  },
  {
    id: 38,
    name: "General Type Studio",
    description: "a New York based type foundry founded by Stéphane Elbaz",
    country: "美国",
    website: "generaltypestudio.com",
    category: "studio"
  },
  {
    id: 39,
    name: "Family Type",
    description: "Family Type is a digital type foundry based in London and Sydney",
    country: "英国/澳大利亚",
    website: "familytype.co",
    category: "studio"
  },
  {
    id: 40,
    name: "Hot Type",
    description: "type foundry and design studio established by Marko Hrastovec",
    website: "hottype.co",
    category: "studio"
  },
  {
    id: 41,
    name: "Nikolas Type",
    description: "independent type foundry of Nikolas Wrobel, creating retail and bespoke typefaces",
    website: "nikolastype.com",
    category: "studio"
  },
  {
    id: 42,
    name: "Nova Type Foundry",
    description: "independent font foundry by Joana Correia based in Porto",
    country: "葡萄牙",
    website: "novatypefoundry.com",
    category: "studio"
  },
  {
    id: 43,
    name: "Typografische",
    description: "independent typeface design studio led by Fatih Hardal, based in Istanbul",
    country: "土耳其",
    website: "typografische.com",
    category: "studio"
  },
  {
    id: 44,
    name: "Vectro",
    description: "type design studio offering retail fonts, custom typeface design, and font production",
    website: "vectrotype.com",
    category: "studio"
  },
  {
    id: 45,
    name: "Simon Type",
    description: "ongoing typography project by Simon Abranowicz",
    website: "simontype.com",
    category: "studio"
  },
  {
    id: 46,
    name: "Degarism",
    description: "a digital type design and graphic design studio",
    website: "degarism.com",
    category: "studio"
  },
  {
    id: 47,
    name: "HARDAL",
    description: "Typeface studio",
    website: "hardalstudio.com",
    category: "studio"
  },
  {
    id: 48,
    name: "Neunau",
    description: "Berlin based design studio working with international clients in design and typography",
    country: "德国",
    website: "neubauberlin.com",
    category: "studio"
  },
  {
    id: 49,
    name: "Studio Rene Bieder",
    description: "Retail and Custom Type Design",
    website: "renebieder.com",
    category: "studio"
  },
  {
    id: 50,
    name: "Boulevard LAB",
    description: "an experimental design practice and type foundry based in Victoria, Canada",
    country: "加拿大",
    website: "boulevardlab.com",
    category: "studio"
  },
  {
    id: 51,
    name: "KOMETA",
    description: "type foundry from Czech Republic producing high quality typefaces with contemporary finish",
    country: "捷克",
    website: "kometa.xyz",
    category: "studio"
  },
  {
    id: 52,
    name: "iframe",
    description: "production of custom typefaces as integral part of typography exploration",
    website: "iframefonts.com",
    category: "studio"
  },
  {
    id: 53,
    name: "Typeheist",
    description: "independent font foundry focusing on hand-lettered, realistic fonts",
    website: "typeheist.co",
    category: "studio"
  },
  {
    id: 54,
    name: "UNKNOWN",
    description: "Contemporary display typeface designed by Lukas Haider & Alexander Raffl",
    website: "unknown-type.com",
    category: "studio"
  },
  {
    id: 55,
    name: "Contrast Foundry",
    website: "contrastfoundry.com",
    category: "studio"
  },
  {
    id: 56,
    name: "Almarena Foundry",
    description: "Try & Buy Quality Fonts & Typefaces",
    website: "foundry.almarena.fr",
    category: "studio"
  },
  {
    id: 57,
    name: "A is for",
    website: "aisforfonts.com",
    category: "studio"
  },
  {
    id: 58,
    name: "ALT.tf",
    website: "alt-tf.com",
    category: "studio"
  },
  {
    id: 59,
    name: "Arillatype Studio",
    website: "arillatype.studio",
    category: "studio"
  },
  {
    id: 60,
    name: "Basement",
    website: "foundry.basement.studio",
    category: "studio"
  },
  {
    id: 61,
    name: "Emtype Foundry",
    website: "emtype.net",
    category: "studio"
  },
  {
    id: 62,
    name: "Fatype",
    website: "fatype.com",
    category: "studio"
  },
  {
    id: 63,
    name: "Floodfonts",
    website: "floodfonts.com",
    category: "studio"
  },
  {
    id: 64,
    name: "Good Type Foundry",
    website: "goodtypefoundry.com",
    category: "studio"
  },
  {
    id: 65,
    name: "HAL Typefaces",
    website: "type.hanli.eu",
    category: "studio"
  },
  {
    id: 66,
    name: "Interval Type",
    website: "intervaltype.com",
    category: "studio"
  },
  {
    id: 67,
    name: "Kurppa Hosk Type",
    website: "khtype.com",
    category: "studio"
  },
  {
    id: 68,
    name: "Luzi Type",
    website: "luzi-type.ch",
    category: "studio"
  },
  {
    id: 69,
    name: "NBL (Neubau Laden)",
    website: "neubauladen.com",
    category: "studio"
  },
  {
    id: 70,
    name: "Nuform Type",
    website: "nuformtype.com",
    category: "studio"
  },
  {
    id: 71,
    name: "Off Type",
    website: "off-type.com",
    category: "studio"
  },
  {
    id: 72,
    name: "Open Foundry",
    website: "open-foundry.com",
    category: "studio"
  },
  {
    id: 73,
    name: "Order",
    website: "order.design",
    category: "studio"
  },
  {
    id: 74,
    name: "Peregrin Studio",
    website: "peregrinstudio.com",
    category: "studio"
  },
  {
    id: 75,
    name: "Pizza Typefaces",
    website: "typefaces.pizza",
    category: "studio"
  },
  {
    id: 76,
    name: "Power Type",
    website: "power-type.com",
    category: "studio"
  },
  {
    id: 77,
    name: "Faire Type",
    website: "fairetype.com",
    category: "studio"
  },
  {
    id: 78,
    name: "Frost",
    website: "frostype.xyz",
    category: "studio"
  },
  {
    id: 79,
    name: "Joyride",
    website: "joyride.studio",
    category: "studio"
  },
  {
    id: 80,
    name: "Soneritype",
    website: "soneritype.com",
    category: "studio"
  },
  {
    id: 81,
    name: "Typeverything",
    description: "Great fonts by cool designers",
    website: "typeverything.com",
    category: "studio"
  },
  {
    id: 82,
    name: "UNCUT",
    website: "uncut.wtf",
    category: "studio"
  },
  {
    id: 83,
    name: "Velvetyne (VTF)",
    description: "法国开源免费字体集体",
    website: "velvetyne.fr",
    category: "indie"
  },
  {
    id: 84,
    name: "Wise Type",
    website: "wisetype.nl",
    category: "studio"
  },
  {
    id: 85,
    name: "ドットコロン",
    description: "日本独立字体设计",
    website: "dotcolon.net",
    category: "studio"
  },
  {
    id: 86,
    name: "Suva Type Foundry",
    website: "suvatypefoundry.ee",
    category: "studio"
  },
  {
    id: 87,
    name: "Mass-Driver",
    website: "mass-driver.com",
    category: "studio"
  },
  {
    id: 88,
    name: "Studio Feixen",
    website: "fonts.studiofeixen.ch",
    category: "studio"
  },
  {
    id: 89,
    name: "Flavia Zimmerle",
    website: "flaviazim.com",
    category: "studio"
  },
  {
    id: 90,
    name: "VJ Type",
    website: "vj-type.com",
    category: "studio"
  },
  {
    id: 91,
    name: "TypeType",
    website: "typetype.org",
    category: "studio"
  },
  {
    id: 92,
    name: "July Type",
    website: "julytype.com",
    category: "studio"
  },
  {
    id: 93,
    name: "Eliott Grunewald",
    website: "eliottgrunewald.xyz",
    category: "studio"
  },
  {
    id: 94,
    name: "Groteskly",
    website: "groteskly.xyz",
    category: "studio"
  },
  {
    id: 95,
    name: "The Designers Foundry",
    website: "thedesignersfoundry.com",
    category: "studio"
  },
  {
    id: 96,
    name: "Three Dots Type",
    website: "threedotstype.com",
    category: "studio"
  },
  {
    id: 97,
    name: "Otherwhere Collective",
    website: "otherwherecollective.com",
    category: "studio"
  },
  {
    id: 98,
    name: "Camelot Typefaces",
    website: "camelot-typefaces.com",
    category: "studio"
  },
  {
    id: 99,
    name: "Feliciano Type",
    website: "felicianotype.com",
    category: "studio"
  },
  {
    id: 100,
    name: "Socio Type",
    website: "socio-type.com",
    category: "studio"
  },
  {
    id: 101,
    name: "Schrifteria",
    website: "schrifteria.xyz",
    category: "studio"
  },
  {
    id: 102,
    name: "British Standard Type",
    website: "britishstandardtype.xyz",
    category: "studio"
  },
  {
    id: 103,
    name: "Tokotype",
    website: "tokotype.com",
    category: "studio"
  },
  {
    id: 104,
    name: "Laura Meseguer",
    website: "laurameseguer.com",
    category: "studio"
  },
  {
    id: 105,
    name: "Type Department",
    website: "type-department.com",
    category: "studio"
  },
  {
    id: 106,
    name: "Out of the Dark",
    website: "outofthedark.xyz",
    category: "studio"
  },
  {
    id: 107,
    name: "Type of Feeling",
    website: "typeoffeeling.com",
    category: "studio"
  },
  {
    id: 108,
    name: "Yep Type",
    website: "yeptype.com",
    category: "studio"
  },
  {
    id: 109,
    name: "Format",
    website: "format-otf.de",
    category: "studio"
  },
  {
    id: 110,
    name: "Source Type",
    website: "sourcetype.com",
    category: "studio"
  },
  {
    id: 111,
    name: "Kimera Corp",
    website: "kimeracorp.eu",
    category: "studio"
  },
  {
    id: 112,
    name: "Maxi Type",
    website: "maxitype.com",
    category: "studio"
  },
  {
    id: 113,
    name: "Lund Design",
    website: "lunddesign.co",
    category: "studio"
  },
  {
    id: 114,
    name: "That That Type",
    website: "thatthattype.com",
    category: "studio"
  },
  {
    id: 115,
    name: "Florian Karsten",
    website: "fonts.floriankarsten.com",
    category: "studio"
  },
  {
    id: 116,
    name: "Element Type",
    website: "elementtype.co",
    category: "studio"
  },
  {
    id: 117,
    name: "Type Kiosk",
    website: "typekiosk.smuss.studio",
    category: "studio"
  },
  {
    id: 118,
    name: "Shinn Type",
    website: "shinntype.com",
    category: "studio"
  },
  {
    id: 119,
    name: "Cake Type",
    website: "caketype.com",
    category: "studio"
  },
  {
    id: 120,
    name: "Over Type Foundry",
    website: "overtypefoundry.com",
    category: "studio"
  },
  {
    id: 121,
    name: "Matter of Sorts",
    website: "matterofsorts.com",
    category: "studio"
  },
  {
    id: 122,
    name: "Typemates",
    website: "typemates.com",
    category: "studio"
  },
  {
    id: 123,
    name: "Margot Levèque",
    website: "margotleveque.com",
    category: "studio"
  },
  {
    id: 124,
    name: "Studio Muhittin Güneş",
    website: "gunesmuhittin.com",
    category: "studio"
  },
  {
    id: 125,
    name: "Process Type Foundry",
    description: "美国独立字体工作室",
    country: "美国",
    founded: "2002",
    notableFonts: ["Elena", "Colfax", "Bryant"],
    website: "processtypefoundry.com",
    category: "indie"
  },
];
