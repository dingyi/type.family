export interface Foundry {
  id: number;
  name: string;
  country: string;
  founded: string;
  notableFonts: string[];
  website: string;
  category: 'classic' | 'modern' | 'indie' | 'tech';
}

export const foundries: Foundry[] = [
  {
    id: 1,
    name: "Adobe Fonts",
    country: "美国",
    founded: "1982",
    notableFonts: ["Adobe Garamond", "Myriad", "Source Sans"],
    website: "fonts.adobe.com",
    category: "tech"
  },
  {
    id: 2,
    name: "Monotype",
    country: "美国",
    founded: "1887",
    notableFonts: ["Helvetica", "Times New Roman", "Arial"],
    website: "monotype.com",
    category: "classic"
  },
  {
    id: 3,
    name: "Linotype",
    country: "德国",
    founded: "1886",
    notableFonts: ["Frutiger", "Univers", "Optima"],
    website: "linotype.com",
    category: "classic"
  },
  {
    id: 4,
    name: "Hoefler&Co",
    country: "美国",
    founded: "1989",
    notableFonts: ["Gotham", "Mercury", "Whitney"],
    website: "typography.com",
    category: "modern"
  },
  {
    id: 5,
    name: "Font Bureau",
    country: "美国",
    founded: "1989",
    notableFonts: ["Interstate", "Amplitude", "Bureau Grot"],
    website: "fontbureau.com",
    category: "modern"
  },
  {
    id: 6,
    name: "Dalton Maag",
    country: "英国",
    founded: "1991",
    notableFonts: ["Ubuntu", "Nokia Pure", "Rio 2016"],
    website: "daltonmaag.com",
    category: "modern"
  },
  {
    id: 7,
    name: "Fontsmith",
    country: "英国",
    founded: "1997",
    notableFonts: ["FS Albert", "FS Elliot", "FS Lola"],
    website: "fontsmith.com",
    category: "modern"
  },
  {
    id: 8,
    name: "Commercial Type",
    country: "美国",
    founded: "2007",
    notableFonts: ["Graphik", "Canela", "Druk"],
    website: "commercialtype.com",
    category: "indie"
  },
  {
    id: 9,
    name: "Grilli Type",
    country: "瑞士",
    founded: "2009",
    notableFonts: ["GT Walsheim", "GT America", "GT Sectra"],
    website: "grillitype.com",
    category: "indie"
  },
  {
    id: 10,
    name: "Klim Type",
    country: "新西兰",
    founded: "2005",
    notableFonts: ["Founders Grotesk", "Calibre", "Domaine"],
    website: "klim.co.nz",
    category: "indie"
  },
  {
    id: 11,
    name: "Colophon Foundry",
    country: "英国",
    founded: "2009",
    notableFonts: ["Aperçu", "Reader", "Basis Grotesque"],
    website: "colophon-foundry.org",
    category: "indie"
  },
  {
    id: 12,
    name: "Production Type",
    country: "法国",
    founded: "2015",
    notableFonts: ["Spectral", "Maax", "Pangaia"],
    website: "productiontype.com",
    category: "indie"
  },
  {
    id: 13,
    name: "TypeTogether",
    country: "捷克/阿根廷",
    founded: "2006",
    notableFonts: ["Adelle", "Abril", "Bree"],
    website: "type-together.com",
    category: "indie"
  },
  {
    id: 14,
    name: "Typotheque",
    country: "荷兰",
    founded: "1999",
    notableFonts: ["Fedra", "History", "Greta"],
    website: "typotheque.com",
    category: "modern"
  },
  {
    id: 15,
    name: "Underware",
    country: "荷兰",
    founded: "1999",
    notableFonts: ["Dolly", "Auto", "Liza"],
    website: "underware.nl",
    category: "indie"
  },
  {
    id: 16,
    name: "Fontfabric",
    country: "保加利亚",
    founded: "2008",
    notableFonts: ["Mont", "Nexa", "Uni Sans"],
    website: "fontfabric.com",
    category: "indie"
  },
  {
    id: 17,
    name: "JetBrains",
    country: "捷克",
    founded: "2000",
    notableFonts: ["JetBrains Mono"],
    website: "jetbrains.com/mono",
    category: "tech"
  },
  {
    id: 18,
    name: "Google Fonts",
    country: "美国",
    founded: "2010",
    notableFonts: ["Roboto", "Open Sans", "Noto"],
    website: "fonts.google.com",
    category: "tech"
  },
  {
    id: 19,
    name: "Apple",
    country: "美国",
    founded: "1976",
    notableFonts: ["San Francisco", "New York", "SF Mono"],
    website: "developer.apple.com/fonts",
    category: "tech"
  },
  {
    id: 20,
    name: "Microsoft",
    country: "美国",
    founded: "1975",
    notableFonts: ["Segoe", "Cascadia Code", "Consolas"],
    website: "microsoft.com",
    category: "tech"
  },
  {
    id: 21,
    name: "Emigre",
    country: "美国",
    founded: "1984",
    notableFonts: ["Mrs Eaves", "Filosofia", "Base"],
    website: "emigre.com",
    category: "classic"
  },
  {
    id: 22,
    name: "House Industries",
    country: "美国",
    founded: "1993",
    notableFonts: ["Neutraface", "Eames", "Chalet"],
    website: "houseindustries.com",
    category: "modern"
  },
  {
    id: 23,
    name: "Process Type",
    country: "美国",
    founded: "2002",
    notableFonts: ["Elena", "Colfax", "Bryant"],
    website: "processtypefoundry.com",
    category: "indie"
  },
  {
    id: 24,
    name: "Latinotype",
    country: "智利",
    founded: "2007",
    notableFonts: ["Arquitecta", "Sanchez", "Glober"],
    website: "latinotype.com",
    category: "indie"
  },
  {
    id: 25,
    name: "Hanyi 汉仪",
    country: "中国",
    founded: "1993",
    notableFonts: ["汉仪旗黑", "汉仪楷体", "汉仪秀英"],
    website: "hanyi.com.cn",
    category: "classic"
  },
  {
    id: 26,
    name: "方正 Founder",
    country: "中国",
    founded: "1991",
    notableFonts: ["方正黑体", "方正兰亭", "方正悠黑"],
    website: "foundertype.com",
    category: "classic"
  },
  {
    id: 27,
    name: "Morisawa 森泽",
    country: "日本",
    founded: "1924",
    notableFonts: ["A-OTF 新ゴ", "リュウミン", "見出ゴMB"],
    website: "morisawa.co.jp",
    category: "classic"
  },
  {
    id: 28,
    name: "Sandoll 산돌",
    country: "韩国",
    founded: "1984",
    notableFonts: ["Sandoll Gothic", "Sandoll Myungjo"],
    website: "sandoll.co.kr",
    category: "classic"
  },
  {
    id: 29,
    name: "Dinamo",
    country: "瑞士",
    founded: "2010",
    notableFonts: ["ABC Diatype", "ABC Favorit", "Prophet"],
    website: "abcdinamo.com",
    category: "indie"
  },
  {
    id: 30,
    name: "MCKL",
    country: "美国",
    founded: "2012",
    notableFonts: ["Roobert", "Obviously", "Right Grotesk"],
    website: "mckltype.com",
    category: "indie"
  }
];
