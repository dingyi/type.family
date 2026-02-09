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
    description: "荷兰独立字体厂商，专注高质量印刷与屏幕字体",
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
    description: "英国字体厂商，提供品牌授权与定制字体",
    country: "英国",
    website: "f37foundry.com",
    category: "modern"
  },
  {
    id: 18,
    name: "Identity Letters",
    description: "提供零售与定制字体，授权简便",
    website: "identity-letters.com",
    category: "modern"
  },

  // === 独立厂商 (Indie) ===
  {
    id: 19,
    name: "Dinamo Typefaces",
    description: "瑞士独立设计工作室，由 Breyer 和 Harb 创立",
    country: "瑞士",
    founded: "2010",
    notableFonts: ["ABC Diatype", "ABC Favorit", "Prophet"],
    website: "abcdinamo.com",
    category: "indie"
  },
  {
    id: 20,
    name: "Grilli Type",
    description: "瑞士独立字体厂商",
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
    description: "提供免费试用的高品质字体",
    website: "pangrampangram.com",
    category: "indie"
  },
  {
    id: 25,
    name: "Extraset",
    description: "瑞士独立字体厂商",
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
    description: "布拉格独立字体厂商与设计工作室",
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
    description: "瑞士独立字体厂商",
    country: "瑞士",
    website: "nouvellenoire.ch",
    category: "indie"
  },
  {
    id: 30,
    name: "Superior Type",
    description: "捷克字体设计工作室，提供零售与定制字体",
    country: "捷克",
    website: "superiortype.com",
    rating: 5,
    category: "indie"
  },
  {
    id: 31,
    name: "Cast Type Foundry",
    description: "独立字体厂商",
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
    description: "独立字体设计工作室与厂商",
    website: "connary.com",
    category: "indie"
  },
  {
    id: 34,
    name: "Formist Foundry",
    description: "注重严谨与创新的字体厂商",
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
    description: "伦敦独立字体厂商，由 Mark Bloom 创立",
    country: "英国",
    website: "cotypefoundry.com",
    category: "studio"
  },
  {
    id: 38,
    name: "General Type Studio",
    description: "纽约独立字体厂商，由 Stéphane Elbaz 创立",
    country: "美国",
    website: "generaltypestudio.com",
    category: "studio"
  },
  {
    id: 39,
    name: "Family Type",
    description: "伦敦与悉尼双城数字字体厂商",
    country: "英国/澳大利亚",
    website: "familytype.co",
    category: "studio"
  },
  {
    id: 40,
    name: "Hot Type",
    description: "由 Marko Hrastovec 创立的字体与设计工作室",
    website: "hottype.co",
    category: "studio"
  },
  {
    id: 41,
    name: "Nikolas Type",
    description: "Nikolas Wrobel 的独立字体厂商，提供零售与定制字体",
    website: "nikolastype.com",
    category: "studio"
  },
  {
    id: 42,
    name: "Nova Type Foundry",
    description: "葡萄牙波尔图独立字体厂商，由 Joana Correia 创立",
    country: "葡萄牙",
    website: "novatypefoundry.com",
    category: "studio"
  },
  {
    id: 43,
    name: "Typografische",
    description: "伊斯坦布尔独立字体设计工作室，由 Fatih Hardal 主理",
    country: "土耳其",
    website: "typografische.com",
    category: "studio"
  },
  {
    id: 44,
    name: "Vectro",
    description: "提供零售字体、定制设计与字体制作的工作室",
    website: "vectrotype.com",
    category: "studio"
  },
  {
    id: 45,
    name: "Simon Type",
    description: "Simon Abranowicz 的持续字体项目",
    website: "simontype.com",
    category: "studio"
  },
  {
    id: 46,
    name: "Degarism",
    description: "数字字体与平面设计工作室",
    website: "degarism.com",
    category: "studio"
  },
  {
    id: 47,
    name: "HARDAL",
    description: "字体设计工作室",
    website: "hardalstudio.com",
    category: "studio"
  },
  {
    id: 48,
    name: "Neunau",
    description: "柏林设计工作室，服务国际客户的设计与排版",
    country: "德国",
    website: "neubauberlin.com",
    category: "studio"
  },
  {
    id: 49,
    name: "Studio Rene Bieder",
    description: "提供零售与定制字体设计",
    website: "renebieder.com",
    category: "studio"
  },
  {
    id: 50,
    name: "Boulevard LAB",
    description: "加拿大维多利亚实验性设计与字体厂商",
    country: "加拿大",
    website: "boulevardlab.com",
    category: "studio"
  },
  {
    id: 51,
    name: "KOMETA",
    description: "捷克字体厂商，制作高品质当代字体",
    country: "捷克",
    website: "kometa.xyz",
    category: "studio"
  },
  {
    id: 52,
    name: "iframe",
    description: "以排版探索为核心的定制字体工作室",
    website: "iframefonts.com",
    category: "studio"
  },
  {
    id: 53,
    name: "Typeheist",
    description: "专注手写与拟真风格字体的独立厂商",
    website: "typeheist.co",
    category: "studio"
  },
  {
    id: 54,
    name: "UNKNOWN",
    description: "当代展示字体，由 Haider 和 Raffl 设计",
    website: "unknown-type.com",
    category: "studio"
  },
  {
    id: 55,
    name: "Contrast Foundry",
    description: "俄罗斯独立字体厂商，专注西里尔与拉丁字体",
    country: "俄罗斯",
    website: "contrastfoundry.com",
    category: "studio"
  },
  {
    id: 56,
    name: "Almarena Foundry",
    description: "法国独立字体厂商，提供高质量零售字体",
    country: "法国",
    website: "foundry.almarena.fr",
    category: "studio"
  },
  {
    id: 57,
    name: "A is for",
    description: "独立字体工作室，提供精品零售字体",
    website: "aisforfonts.com",
    category: "studio"
  },
  {
    id: 58,
    name: "ALT.tf",
    description: "独立字体厂商，提供无衬线、衬线与展示字体",
    website: "alt-tf.com",
    category: "studio"
  },
  {
    id: 59,
    name: "Arillatype Studio",
    description: "专注几何与无衬线字体的独立工作室",
    website: "arillatype.studio",
    category: "studio"
  },
  {
    id: 60,
    name: "Basement",
    description: "精心打造的当代字体，注重细节与品质",
    website: "foundry.basement.studio",
    category: "studio"
  },
  {
    id: 61,
    name: "Emtype Foundry",
    description: "巴塞罗那字体与定制字体工作室",
    country: "西班牙",
    website: "emtype.net",
    category: "studio"
  },
  {
    id: 62,
    name: "Fatype",
    description: "独立字体厂商，提供实验性与功能性字体",
    website: "fatype.com",
    category: "studio"
  },
  {
    id: 63,
    name: "Floodfonts",
    description: "德国科隆独立字体设计工作室",
    country: "德国",
    website: "floodfonts.com",
    category: "studio"
  },
  {
    id: 64,
    name: "Good Type Foundry",
    description: "独立字体厂商，提供多种风格零售字体",
    website: "goodtypefoundry.com",
    category: "studio"
  },
  {
    id: 65,
    name: "HAL Typefaces",
    description: "Studio HanLi 旗下字体品牌",
    website: "type.hanli.eu",
    category: "studio"
  },
  {
    id: 66,
    name: "Interval Type",
    description: "独立字体厂商，提供零售与试用字体",
    website: "intervaltype.com",
    category: "studio"
  },
  {
    id: 67,
    name: "Kurppa Hosk Type",
    description: "瑞典设计公司 Kurppa Hosk 旗下字体品牌",
    country: "瑞典",
    website: "khtype.com",
    category: "studio"
  },
  {
    id: 68,
    name: "Luzi Type",
    description: "瑞士创新字体设计工作室",
    country: "瑞士",
    website: "luzi-type.ch",
    category: "studio"
  },
  {
    id: 69,
    name: "NBL (Neubau Laden)",
    description: "柏林 Neubau 旗下字体与数字产品商店",
    country: "德国",
    website: "neubauladen.com",
    category: "studio"
  },
  {
    id: 70,
    name: "Nuform Type",
    description: "由字母艺术家 Erik Marinovich 创立的字体工作室",
    country: "美国",
    website: "nuformtype.com",
    category: "studio"
  },
  {
    id: 71,
    name: "Off Type",
    description: "提供精美非主流字体的独立厂商",
    website: "off-type.com",
    category: "studio"
  },
  {
    id: 72,
    name: "Open Foundry",
    description: "精选高质量开源字体的免费平台",
    website: "open-foundry.com",
    category: "studio"
  },
  {
    id: 73,
    name: "Order",
    description: "纽约设计与字体工作室，注重实用长期字体",
    country: "美国",
    website: "order.design",
    category: "studio"
  },
  {
    id: 74,
    name: "Peregrin Studio",
    description: "探索排版与设计的独立字体工作室",
    website: "peregrinstudio.com",
    category: "studio"
  },
  {
    id: 75,
    name: "Pizza Typefaces",
    description: "法国独立字体厂商，提供多语言字体",
    country: "法国",
    website: "typefaces.pizza",
    category: "studio"
  },
  {
    id: 76,
    name: "Power Type",
    description: "印尼独立数字字体厂商",
    country: "印尼",
    website: "power-type.com",
    category: "studio"
  },
  {
    id: 77,
    name: "Faire Type",
    description: "布鲁克林字体厂商，提供零售与定制字体",
    country: "美国",
    website: "fairetype.com",
    category: "studio"
  },
  {
    id: 78,
    name: "Frost",
    description: "英国字体厂商，融合历史参考与当代设计",
    country: "英国",
    website: "frostype.xyz",
    category: "studio"
  },
  {
    id: 79,
    name: "Joyride",
    description: "实验性字体与刻字设计工作室",
    website: "joyride.studio",
    category: "studio"
  },
  {
    id: 80,
    name: "Soneritype",
    description: "数字字体厂商，为品牌提供商用字体",
    website: "soneritype.com",
    category: "studio"
  },
  {
    id: 81,
    name: "Typeverything",
    description: "汇集优秀设计师的精品字体",
    website: "typeverything.com",
    category: "studio"
  },
  {
    id: 82,
    name: "UNCUT",
    description: "免费当代字体目录，可商用",
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
    description: "荷兰独立字体厂商，提供可变字体",
    country: "荷兰",
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
    description: "爱沙尼亚实验性字体厂商",
    country: "爱沙尼亚",
    website: "suvatypefoundry.ee",
    category: "studio"
  },
  {
    id: 87,
    name: "Mass-Driver",
    description: "海牙独立字体设计与制作工作室",
    country: "荷兰",
    founded: "2020",
    website: "mass-driver.com",
    category: "studio"
  },
  {
    id: 88,
    name: "Studio Feixen",
    description: "由平面设计师为设计师打造的字体",
    country: "瑞士",
    website: "fonts.studiofeixen.ch",
    category: "studio"
  },
  {
    id: 89,
    name: "Flavia Zimmerle",
    description: "巴西裔柏林字体设计师，关注文化遗产与平权",
    country: "德国/巴西",
    website: "flaviazim.com",
    category: "studio"
  },
  {
    id: 90,
    name: "VJ Type",
    description: "独立字体厂商，提供展示与文本字体",
    website: "vj-type.com",
    category: "studio"
  },
  {
    id: 91,
    name: "TypeType",
    description: "专业字体厂商，提供丰富的商用字体库",
    website: "typetype.org",
    category: "studio"
  },
  {
    id: 92,
    name: "July Type",
    description: "独立字体设计工作室",
    website: "julytype.com",
    category: "studio"
  },
  {
    id: 93,
    name: "Eliott Grunewald",
    description: "专注装饰性与标题字体设计",
    website: "eliottgrunewald.xyz",
    category: "studio"
  },
  {
    id: 94,
    name: "Groteskly",
    description: "独立字体厂商，专注现代功能性字体",
    website: "groteskly.xyz",
    category: "studio"
  },
  {
    id: 95,
    name: "The Designers Foundry",
    description: "汇集多位设计师作品的字体平台",
    website: "thedesignersfoundry.com",
    category: "studio"
  },
  {
    id: 96,
    name: "Three Dots Type",
    description: "波兰弗罗茨瓦夫独立字体厂商",
    country: "波兰",
    founded: "2017",
    website: "threedotstype.com",
    category: "studio"
  },
  {
    id: 97,
    name: "Otherwhere Collective",
    description: "创意品牌与字体设计工作室",
    website: "otherwherecollective.com",
    category: "studio"
  },
  {
    id: 98,
    name: "Camelot Typefaces",
    description: "莱比锡独立字体集体，自主出版字体",
    country: "德国",
    website: "camelot-typefaces.com",
    category: "studio"
  },
  {
    id: 99,
    name: "Feliciano Type",
    description: "葡萄牙高品质印刷与屏幕字体厂商",
    country: "葡萄牙",
    founded: "2001",
    website: "felicianotype.com",
    category: "studio"
  },
  {
    id: 100,
    name: "Socio Type",
    description: "伦敦设计驱动的字体厂商",
    country: "英国",
    website: "socio-type.com",
    category: "studio"
  },
  {
    id: 101,
    name: "Schrifteria",
    description: "字体设计工作室，帮助品牌找到独特声音",
    website: "schrifteria.xyz",
    category: "studio"
  },
  {
    id: 102,
    name: "British Standard Type",
    description: "英国独立字体厂商",
    country: "英国",
    founded: "2023",
    website: "britishstandardtype.xyz",
    category: "studio"
  },
  {
    id: 103,
    name: "Tokotype",
    description: "印尼领先的数字字体设计厂商",
    country: "印尼",
    founded: "2015",
    website: "tokotype.com",
    category: "studio"
  },
  {
    id: 104,
    name: "Laura Meseguer",
    description: "西班牙字体设计师，专注定制与零售字体",
    country: "西班牙",
    website: "laurameseguer.com",
    category: "studio"
  },
  {
    id: 105,
    name: "Type Department",
    description: "字体零售平台，汇集多家厂商字体",
    website: "type-department.com",
    category: "studio"
  },
  {
    id: 106,
    name: "Out of the Dark",
    description: "瑞士字体厂商，从历史资料中汲取灵感",
    country: "瑞士",
    website: "outofthedark.xyz",
    category: "studio"
  },
  {
    id: 107,
    name: "Type of Feeling",
    description: "Jessica Walsh 创立的情感字体厂商",
    country: "美国",
    website: "typeoffeeling.com",
    category: "studio"
  },
  {
    id: 108,
    name: "Yep Type",
    description: "里斯本字体厂商，提供实用字体与简易授权",
    country: "葡萄牙",
    website: "yeptype.com",
    category: "studio"
  },
  {
    id: 109,
    name: "Format",
    description: "德国独立字体厂商，提供简化四合一授权",
    country: "德国",
    website: "format-otf.de",
    category: "studio"
  },
  {
    id: 110,
    name: "Source Type",
    description: "半字体厂商、半研究机构、半出版社",
    country: "瑞士",
    website: "sourcetype.com",
    category: "studio"
  },
  {
    id: 111,
    name: "Kimera Corp",
    description: "慕尼黑字体厂商与设计工作室",
    country: "德国",
    website: "kimeracorp.eu",
    category: "studio"
  },
  {
    id: 112,
    name: "Maxi Type",
    description: "瑞士协作独立字体厂商，鼓励字体研究",
    country: "瑞士",
    founded: "2020",
    website: "maxitype.com",
    category: "studio"
  },
  {
    id: 113,
    name: "Lund Design",
    description: "独立设计工作室，专注品牌与字体设计",
    country: "美国",
    website: "lunddesign.co",
    category: "studio"
  },
  {
    id: 114,
    name: "That That Type",
    description: "独立字体厂商，服务 Nike、ESPN 等品牌",
    country: "美国",
    website: "thatthattype.com",
    category: "studio"
  },
  {
    id: 115,
    name: "Florian Karsten",
    description: "独立字体设计师，FK Grotesk 作者",
    website: "fonts.floriankarsten.com",
    category: "studio"
  },
  {
    id: 116,
    name: "Element Type",
    description: "按公司规模定价的独立字体厂商",
    website: "elementtype.co",
    category: "studio"
  },
  {
    id: 117,
    name: "Type Kiosk",
    description: "奥斯陆 Smuss Studio 旗下字体协作平台",
    country: "挪威",
    website: "typekiosk.smuss.studio",
    category: "studio"
  },
  {
    id: 118,
    name: "Shinn Type",
    description: "加拿大资深字体设计师 Nick Shinn 工作室",
    country: "加拿大",
    website: "shinntype.com",
    category: "studio"
  },
  {
    id: 119,
    name: "Cake Type",
    description: "荷兰精品字体厂商，由 Pieter van Rosmalen 创立",
    country: "荷兰",
    founded: "2004",
    website: "caketype.com",
    category: "studio"
  },
  {
    id: 120,
    name: "Over Type Foundry",
    description: "独立字体厂商，提供零售与定制字体",
    website: "overtypefoundry.com",
    category: "studio"
  },
  {
    id: 121,
    name: "Matter of Sorts",
    description: "澳大利亚排版工作室，关注社区与教育",
    country: "澳大利亚",
    website: "matterofsorts.com",
    category: "studio"
  },
  {
    id: 122,
    name: "Typemates",
    description: "德国三人独立字体厂商，注重情感与功能",
    country: "德国",
    founded: "2015",
    website: "typemates.com",
    category: "studio"
  },
  {
    id: 123,
    name: "Margot Levèque",
    description: "法国字体设计师，提供定制字体与艺术指导",
    country: "法国",
    website: "margotleveque.com",
    category: "studio"
  },
  {
    id: 124,
    name: "Studio Muhittin Güneş",
    description: "土耳其独立字体与平面设计工作室",
    country: "土耳其",
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

  // === 来自 type.lol 补充的厂商 ===
  {
    id: 126,
    name: "Sharp Type",
    description: "纽约独立字体厂商，以 Sharp Grotesk 闻名",
    country: "美国",
    website: "sharptype.co",
    category: "indie"
  },
  {
    id: 127,
    name: "Lineto",
    description: "瑞士传奇字体厂商，LL Circular 等经典字体出品方",
    country: "瑞士",
    founded: "1993",
    notableFonts: ["LL Circular", "LL Brown", "Akkurat"],
    website: "lineto.com",
    category: "indie"
  },
  {
    id: 128,
    name: "Underware",
    description: "荷兰独立字体工作室，三位设计师合作创立",
    country: "荷兰",
    founded: "1999",
    notableFonts: ["Liza", "Auto", "Bello"],
    website: "underware.nl",
    category: "indie"
  },
  {
    id: 129,
    name: "A2-Type",
    description: "伦敦独立字体厂商，由 Henrik Kubel 和 Scott Williams 创立",
    country: "英国",
    founded: "2010",
    website: "a2-type.co.uk",
    category: "indie"
  },
  {
    id: 130,
    name: "Atipo Foundry",
    description: "西班牙独立字体厂商，提供免费与商用字体",
    country: "西班牙",
    website: "atipofoundry.com",
    category: "indie"
  },
  {
    id: 131,
    name: "Arrow Type",
    description: "Stephen Nixon 创立的独立字体工作室",
    country: "美国",
    website: "arrowtype.com",
    category: "indie"
  },
  {
    id: 132,
    name: "Huerta Tipográfica",
    description: "阿根廷独立字体厂商，拉丁美洲字体设计先锋",
    country: "阿根廷",
    founded: "2009",
    notableFonts: ["Alegreya", "Temeraire"],
    website: "hfrertipografica.com",
    category: "indie"
  },
  {
    id: 133,
    name: "29LT",
    description: "专注阿拉伯语与拉丁语双文字体设计",
    country: "黎巴嫩",
    founded: "2009",
    website: "29lt.com",
    category: "indie"
  },
  {
    id: 134,
    name: "205TF",
    description: "法国独立字体厂商",
    country: "法国",
    website: "205.tf",
    category: "indie"
  },
  {
    id: 135,
    name: "Collletttivo",
    description: "免费开源字体集体项目",
    website: "collletttivo.it",
    category: "indie"
  },
  {
    id: 136,
    name: "Atlas Font Foundry",
    description: "纽约独立字体厂商，由 Kai Bernau 等创立",
    country: "美国",
    website: "atlasfonts.com",
    category: "indie"
  },
  {
    id: 137,
    name: "ANRT",
    description: "法国南锡国家排版研究工作室",
    country: "法国",
    website: "anrt-nancy.fr",
    category: "studio"
  },
  {
    id: 138,
    name: "Authentic",
    description: "柏林独立字体与品牌设计工作室",
    country: "德国",
    website: "authentic.website",
    category: "studio"
  },
  {
    id: 139,
    name: "Badson",
    description: "波特兰独立字体工作室，由 Lucas Sharp 创立",
    country: "美国",
    website: "badsonstudio.com",
    category: "studio"
  },
  {
    id: 140,
    name: "Blancoletters",
    description: "荷兰字体设计工作室",
    country: "荷兰",
    website: "blancoletters.com",
    category: "studio"
  },
  {
    id: 141,
    name: "Central Type",
    description: "独立字体厂商",
    website: "centraltype.com",
    category: "studio"
  },
  {
    id: 142,
    name: "Character Type",
    description: "独立字体设计工作室",
    website: "charactertype.com",
    category: "studio"
  },
  {
    id: 143,
    name: "Archetype Foundry",
    description: "独立字体厂商，提供当代零售字体",
    website: "archetypefoundry.com",
    category: "studio"
  },
  {
    id: 144,
    name: "Abyme",
    description: "法国独立字体厂商",
    country: "法国",
    website: "abyme-type.com",
    category: "studio"
  },
  {
    id: 145,
    name: "Avondale Type Co",
    description: "美国独立字体厂商",
    country: "美国",
    website: "avondaletypeco.com",
    category: "studio"
  },
  {
    id: 146,
    name: "ATYPICAL",
    description: "实验性独立字体厂商",
    website: "atypicaltype.com",
    category: "studio"
  },
  {
    id: 147,
    name: "Alias",
    description: "独立字体设计工作室",
    website: "alias-type.com",
    category: "studio"
  },
  {
    id: 148,
    name: "Altiplano",
    description: "瑞士独立字体厂商",
    country: "瑞士",
    website: "altiplano.xyz",
    category: "studio"
  },
  {
    id: 149,
    name: "ARS Type",
    description: "独立字体厂商",
    website: "arstype.com",
    category: "studio"
  },
  {
    id: 150,
    name: "Approximate Type",
    description: "独立字体设计厂商",
    website: "approximatetype.com",
    category: "studio"
  },
  {
    id: 151,
    name: "Type-Ø-Tones",
    description: "西班牙巴塞罗那独立字体厂商",
    country: "西班牙",
    founded: "1990",
    website: "type-o-tones.com",
    category: "indie"
  },
  {
    id: 152,
    name: "Swiss Typefaces",
    description: "瑞士独立字体厂商，以 SuisseIntl 闻名",
    country: "瑞士",
    notableFonts: ["Suisse Int'l", "Suisse Works"],
    website: "swisstypefaces.com",
    category: "indie"
  },
  {
    id: 153,
    name: "Okay Type",
    description: "Jackson Cavanaugh 创立的独立字体厂商",
    country: "美国",
    notableFonts: ["Alright Sans", "Harriet"],
    website: "okaytype.com",
    category: "indie"
  },
  {
    id: 154,
    name: "Adotbelow",
    description: "专注越南语排版的字体厂商",
    country: "越南",
    website: "adotbelow.com",
    category: "studio"
  },
  {
    id: 155,
    name: "Aesthetic Type",
    description: "独立字体设计工作室",
    website: "aesthetictype.com",
    category: "studio"
  },
  {
    id: 156,
    name: "Antipixel",
    description: "独立字体厂商",
    website: "antipixel.com",
    category: "studio"
  },
  {
    id: 157,
    name: "Abstract Office",
    description: "独立字体与设计工作室",
    website: "abstractoffice.com",
    category: "studio"
  },
  {
    id: 158,
    name: "Apex Type Foundry",
    description: "独立字体厂商",
    website: "apextypefoundry.com",
    category: "studio"
  },
  {
    id: 159,
    name: "Associated Typographics",
    description: "独立字体厂商，提供零售与定制字体",
    website: "associatedtypographics.com",
    category: "studio"
  },
  {
    id: 160,
    name: "Babelfont",
    description: "多语言字体厂商，支持多种文字系统",
    website: "babelfont.com",
    category: "studio"
  },
  {
    id: 161,
    name: "Comma Type",
    description: "独立字体设计工作室",
    website: "comma-type.com",
    category: "studio"
  },
  {
    id: 162,
    name: "CJ Type",
    description: "独立字体设计工作室",
    website: "cjtype.com",
    category: "studio"
  },
  {
    id: 163,
    name: "ArtyType",
    description: "独立字体设计工作室",
    website: "artytype.com",
    category: "studio"
  },
  {
    id: 164,
    name: "Authentype",
    description: "独立字体厂商",
    website: "authentype.com",
    category: "studio"
  },
  {
    id: 165,
    name: "AllCaps",
    description: "独立字体设计工作室",
    website: "allcaps.co",
    category: "studio"
  },
  {
    id: 166,
    name: "AlfaType",
    description: "独立字体设计工作室",
    website: "alfatype.com",
    category: "studio"
  },

  // === 来自 typefoundry.directory 及其他目录补充 ===
  {
    id: 167,
    name: "Optimo",
    description: "瑞士洛桑传奇字体厂商，Theinhardt 等经典字体出品方",
    country: "瑞士",
    founded: "1999",
    notableFonts: ["Theinhardt", "Hermes", "Gravur Condensed"],
    website: "optimo.ch",
    category: "indie"
  },
  {
    id: 168,
    name: "Indian Type Foundry",
    description: "印度领先的多文字字体厂商，支持多种印度文字",
    country: "印度",
    founded: "2009",
    notableFonts: ["Poppins", "Bespoke Sans"],
    website: "indiantypefoundry.com",
    category: "modern"
  },
  {
    id: 169,
    name: "Fontwerk",
    description: "德国独立字体厂商，由 Ivo Gabrowitsch 等创立",
    country: "德国",
    website: "fontwerk.com",
    category: "indie"
  },
  {
    id: 170,
    name: "CSTM Fonts",
    description: "俄罗斯专业字体厂商，专注西里尔与拉丁多语言字体",
    country: "俄罗斯",
    website: "cstmfonts.com",
    category: "modern"
  },
  {
    id: 171,
    name: "Suitcase Type Foundry",
    description: "捷克老牌字体厂商，提供大量高品质字体家族",
    country: "捷克",
    founded: "2003",
    website: "sfrfrr.com",
    category: "modern"
  },
  {
    id: 172,
    name: "NaN",
    description: "德国实验性字体厂商，以可变字体见长",
    country: "德国",
    website: "nan.xyz",
    category: "indie"
  },
  {
    id: 173,
    name: "Fontshop",
    description: "德国知名字体零售平台，FontFont 系列出品方",
    country: "德国",
    founded: "1990",
    notableFonts: ["FF Meta", "FF Din", "FF Scala"],
    website: "fontshop.com",
    category: "classic"
  },
  {
    id: 174,
    name: "Typofonderie",
    description: "法国独立字体厂商，由 Jean François Porchez 创立",
    country: "法国",
    founded: "1994",
    notableFonts: ["Parisine", "Le Monde"],
    website: "typofonderie.com",
    category: "indie"
  },
  {
    id: 175,
    name: "Tiro Typeworks",
    description: "加拿大字体厂商，专注多文字排版与学术字体",
    country: "加拿大",
    founded: "1994",
    website: "tiro.com",
    category: "modern"
  },
  {
    id: 176,
    name: "Bureau Brut",
    description: "法国独立字体厂商，风格大胆前卫",
    country: "法国",
    founded: "2015",
    website: "bureaubrut.com",
    category: "indie"
  },
  {
    id: 177,
    name: "Retype",
    description: "荷兰独立字体厂商，提供高品质零售与定制字体",
    country: "荷兰",
    founded: "2007",
    website: "re-type.com",
    category: "indie"
  },
  {
    id: 178,
    name: "Tiny Type Co.",
    description: "挪威小型独立字体厂商",
    country: "挪威",
    founded: "2016",
    website: "tinytypeco.com",
    category: "studio"
  },
  {
    id: 179,
    name: "Commercial Classics",
    description: "Commercial Type 旗下经典复刻字体品牌",
    country: "美国",
    website: "commercialclassics.com",
    category: "modern"
  },
  {
    id: 180,
    name: "Space Type",
    description: "纽约实验性字体与刻字工作室，由 Lynne Yun 创立",
    country: "美国",
    website: "spacetypeco.com",
    category: "studio"
  },
  {
    id: 181,
    name: "The Foundry Types",
    description: "英国独立字体厂商，提供定制与零售字体",
    country: "英国",
    founded: "2020",
    website: "thefoundrytypes.com",
    category: "studio"
  },
  {
    id: 182,
    name: "Signal Foundry",
    description: "爱尔兰独立字体厂商",
    country: "爱尔兰",
    founded: "2011",
    website: "signalfoundry.com",
    category: "studio"
  },
  {
    id: 183,
    name: "Nodo Type Foundry",
    description: "阿根廷独立字体厂商",
    country: "阿根廷",
    founded: "2015",
    website: "nodotypefoundry.com",
    category: "studio"
  },
  {
    id: 184,
    name: "3type",
    description: "上海独立字体设计工作室，专注中文与多语言字体",
    country: "中国",
    website: "3type.cn",
    category: "studio"
  },
  {
    id: 185,
    name: "Bye Bye Binary",
    description: "法国非二元性别包容性字体项目",
    country: "法国",
    website: "typotheque.genderfluid.space",
    category: "studio"
  },
  {
    id: 186,
    name: "DizajnDesign",
    description: "斯洛伐克独立字体厂商",
    country: "斯洛伐克",
    website: "dizajndesign.sk",
    category: "studio"
  },
  {
    id: 187,
    name: "Tipofili",
    description: "独立字体设计工作室",
    website: "tipofili.com",
    category: "studio"
  },
  {
    id: 188,
    name: "bb-bureau",
    description: "法国独立字体厂商，由 Benjamin Bousquet 创立",
    country: "法国",
    founded: "2012",
    website: "bb-bureau.fr",
    category: "studio"
  },
  {
    id: 189,
    name: "Brutal Type",
    description: "独立字体厂商，风格硬朗直接",
    website: "brutaltype.com",
    category: "studio"
  },
  {
    id: 190,
    name: "Tandem Type",
    description: "独立字体设计工作室",
    website: "tandemtype.com",
    category: "studio"
  },

  // === 来自 typefoundry.directory HTML 导出补充 ===
  { id: 191, name: "A Practice for Everyday Life", description: "英国设计工作室，提供定制字体", country: "英国", founded: "2003", website: "apracticeforeverydaylife.com", category: "studio" },
  { id: 192, name: "A+", description: "美国独立字体厂商", country: "美国", founded: "2019", website: "a-plus-type.com", category: "studio" },
  { id: 193, name: "Aeiou Tools", description: "法国独立字体工具与字体厂商", country: "法国", founded: "2023", website: "aeiou.tools", category: "studio" },
  { id: 194, name: "Anita Jürgeleit", description: "德国独立字体设计师", country: "德国", founded: "2021", website: "anitajuergeleit.de", category: "studio" },
  { id: 195, name: "Arcane Type Foundry", description: "加拿大独立字体厂商", country: "加拿大", founded: "2020", website: "arcanetype.com", category: "studio" },
  { id: 196, name: "Arkitype", description: "英国独立字体厂商", country: "英国", founded: "2016", website: "arkitype.co", category: "studio" },
  { id: 197, name: "Atelier René Knip", description: "荷兰独立字体与刻字工作室", country: "荷兰", founded: "2012", website: "atelierreneknip.nl", category: "studio" },
  { id: 198, name: "Barnbrook Fonts", description: "英国独立字体厂商", country: "英国", website: "fonts.barnbrook.net", category: "studio" },
  { id: 199, name: "Bastarda Type", description: "独立字体厂商", website: "bastardatype.com", category: "studio" },
  { id: 200, name: "Beasts of England", description: "美英双城独立字体厂商", country: "美国/英国", founded: "2016", website: "beastsofengland.co", category: "studio" },
  { id: 201, name: "Bijou Type", description: "美国独立字体厂商", country: "美国", founded: "2021", website: "bijoutype.com", category: "studio" },
  { id: 202, name: "Binnenland", description: "瑞士/奥地利独立字体厂商", country: "瑞士", founded: "2007", website: "binnenland.ch", category: "studio" },
  { id: 203, name: "Black[Foundry]", description: "法国多文字字体厂商，支持阿拉伯、中日韩等", country: "法国", founded: "2014", website: "black-foundry.com", category: "modern" },
  { id: 204, name: "Blackletra", description: "巴西独立字体厂商", country: "巴西", founded: "2012", website: "blackletra.com", category: "studio" },
  { id: 205, name: "Blast Foundry", description: "荷兰/波兰独立字体厂商", country: "荷兰", founded: "2021", website: "blastfoundry.com", category: "studio" },
  { id: 206, name: "Bloom Type", description: "瑞典独立字体厂商", country: "瑞典", founded: "2021", website: "bloomtype.se", category: "studio" },
  { id: 207, name: "Bold Decisions", description: "荷兰独立字体厂商", country: "荷兰", founded: "2015", website: "bold-decisions.com", category: "studio" },
  { id: 208, name: "Bold Monday", description: "荷兰独立字体厂商，支持阿拉伯等多文字", country: "荷兰", founded: "2008", website: "boldmonday.com", category: "modern" },
  { id: 209, name: "Bold Studio", description: "德国独立字体厂商", country: "德国", website: "bold.studio", category: "studio" },
  { id: 210, name: "Branding with Type", description: "西班牙/英国品牌字体工作室", country: "西班牙", founded: "2014", website: "brandingwithtype.com", category: "studio" },
  { id: 211, name: "Calderón", description: "独立字体设计工作室", founded: "2012", website: "calderon.studio", category: "studio" },
  { id: 212, name: "California Type Foundry", description: "美国加州独立字体厂商", country: "美国", website: "californiatypefoundry.com", category: "studio" },
  { id: 213, name: "Cantrell Type", description: "独立字体厂商", founded: "2023", website: "cantrelltype.com", category: "studio" },
  { id: 214, name: "Cape Arcona", description: "德国独立字体厂商", country: "德国", founded: "2002", website: "cape-arcona.com", category: "studio" },
  { id: 215, name: "Capitalics", description: "独立字体厂商", website: "capitalics.com", category: "studio" },
  { id: 216, name: "Carmel Type Co.", description: "独立字体厂商", founded: "2015", website: "carmeltypeco.com", category: "studio" },
  { id: 217, name: "Charlotte Rohde", description: "独立字体设计师", website: "charlotterohde.com", category: "studio" },
  { id: 218, name: "Coppers & Brasses", description: "独立字体厂商", founded: "2011", website: "coppersandbrasses.com", category: "studio" },
  { id: 219, name: "Corentin Noyer", description: "法国独立字体设计师", country: "法国", founded: "2017", website: "corentinnoyer.com", category: "studio" },
  { id: 220, name: "Counter Forms", description: "独立字体厂商", founded: "2023", website: "counterforms.com", category: "studio" },
  { id: 221, name: "Crown Type", description: "独立字体厂商", founded: "2017", website: "crowntype.co", category: "studio" },
  { id: 222, name: "Darden Studio", description: "美国独立字体设计工作室", country: "美国", founded: "2004", website: "dardenstudio.com", category: "modern" },
  { id: 223, name: "David Einwaller", description: "独立字体设计师", founded: "2022", website: "davideinwaller.com", category: "studio" },
  { id: 224, name: "DDOTT", description: "独立字体厂商", founded: "2017", website: "ddott.co", category: "studio" },
  { id: 225, name: "Delta Bravo Type", description: "独立字体厂商", founded: "2021", website: "deltabravotype.com", category: "studio" },
  { id: 226, name: "Delve Fonts", description: "独立字体厂商", founded: "1996", website: "delvefonts.com", category: "studio" },
  { id: 227, name: "Dennis Grauel", description: "独立字体设计师", website: "dennisgrauel.com", category: "studio" },
  { id: 228, name: "Diorama Type Partners", description: "独立字体合作工作室", founded: "2018", website: "dioramatype.com", category: "studio" },
  { id: 229, name: "DJR", description: "美国独立字体设计师 David Jonathan Ross", country: "美国", founded: "2016", website: "djr.com", category: "indie" },
  { id: 230, name: "Domicile Foundry", description: "独立字体厂商", founded: "2022", website: "domicilefoundry.com", category: "studio" },
  { id: 231, name: "DreamType", description: "独立字体厂商", founded: "2025", website: "dreamtype.co", category: "studio" },
  { id: 232, name: "Dunwich Type", description: "独立字体厂商", website: "dunwichtype.com", category: "studio" },
  { id: 233, name: "E162", description: "独立字体厂商", website: "e162.co", category: "studio" },
  { id: 234, name: "ECAL Typefaces", description: "瑞士洛桑艺术大学字体项目", country: "瑞士", founded: "2016", website: "ecal-typefaces.ch", category: "studio" },
  { id: 235, name: "Edition Studio", description: "独立字体厂商", founded: "2019", website: "editionstudio.com", category: "studio" },
  { id: 236, name: "Ek Type", description: "印度独立字体厂商，专注印度文字", country: "印度", founded: "2009", website: "ektype.in", category: "indie" },
  { id: 237, name: "Elena Schneider", description: "独立字体设计师", website: "elenaschneidertypedesign.com", category: "studio" },
  { id: 238, name: "Epi", description: "独立字体厂商", founded: "2023", website: "epi.type", category: "studio" },
  { id: 239, name: "Erkin Karamemet", description: "土耳其独立字体设计师", country: "土耳其", founded: "2015", website: "erkinkaramemet.com", category: "studio" },
  { id: 240, name: "ETC Foundry", description: "独立字体厂商", website: "etcfoundry.com", category: "studio" },
  { id: 241, name: "Extra Type", description: "独立字体厂商", founded: "1995", website: "extratype.com", category: "studio" },
  { id: 242, name: "FaceType", description: "奥地利独立字体厂商", country: "奥地利", founded: "2008", website: "facetype.org", category: "studio" },
  { id: 243, name: "Familiar Faces", description: "独立字体厂商", founded: "2023", website: "familiarfaces.co", category: "studio" },
  { id: 244, name: "Famira Fonts", description: "独立字体厂商", website: "famirafonts.com", category: "studio" },
  { id: 245, name: "Fantasia Type", description: "独立字体厂商", founded: "2020", website: "fantasiatype.com", category: "studio" },
  { id: 246, name: "G-Type", description: "英国独立字体厂商", country: "英国", founded: "1999", website: "g-type.com", category: "studio" },
  { id: 247, name: "Gradient", description: "独立字体厂商", founded: "2018", website: "gradient.supply", category: "studio" },
  { id: 248, name: "Gruppo Due", description: "独立字体设计集体", founded: "2020", website: "gruppodue.com", category: "studio" },
  { id: 249, name: "Hard Type", description: "独立字体厂商", founded: "2022", website: "hardtype.co", category: "studio" },
  { id: 250, name: "Heavyweight", description: "独立字体厂商", founded: "2013", website: "heavyweight.nl", category: "studio" },
  { id: 251, name: "Herzberg Design Co", description: "独立字体设计工作室", website: "herzbergdesign.co", category: "studio" },
  { id: 252, name: "Hex", description: "独立字体厂商", founded: "2018", website: "hex.xyz", category: "studio" },
  { id: 253, name: "Hipertipo", description: "西班牙独立字体厂商", country: "西班牙", founded: "2009", website: "hipertipo.com", category: "studio" },
  { id: 254, name: "Hungarumlaut", description: "匈牙利独立字体厂商", country: "匈牙利", founded: "2013", website: "hungarumlaut.com", category: "studio" },
  { id: 255, name: "Hurme Design", description: "芬兰独立字体厂商", country: "芬兰", founded: "2019", website: "hurmedesign.com", category: "studio" },
  { id: 256, name: "HvD Fonts", description: "德国独立字体厂商", country: "德国", website: "hvdfonts.com", category: "studio" },
  { id: 257, name: "Hypertype", description: "独立字体厂商", founded: "2020", website: "hypertype.co", category: "studio" },
  { id: 258, name: "In-House Intl Foundry", description: "独立字体厂商", website: "inhouseinternational.com", category: "studio" },
  { id: 259, name: "Inari Type", description: "独立字体厂商", website: "inaritype.com", category: "studio" },
  { id: 260, name: "Itemzero", description: "独立字体厂商", website: "itemzero.com", category: "studio" },
  { id: 261, name: "Ivy Foundry", description: "独立字体厂商", founded: "2016", website: "ivyfoundry.com", category: "studio" },
  { id: 262, name: "J Foundry", description: "独立字体厂商", website: "jfoundry.com", category: "studio" },
  { id: 263, name: "Jamie Clark Type", description: "独立字体设计师", website: "jamieclarktype.com", category: "studio" },
  { id: 264, name: "Jangs Müller", description: "独立字体设计工作室", website: "jangsmuller.com", category: "studio" },
  { id: 265, name: "Jeremy Tankard Typography", description: "英国资深独立字体设计师", country: "英国", founded: "1998", website: "typography.net", category: "modern" },
  { id: 266, name: "Jonas Pelzer Typefaces", description: "独立字体设计师", website: "jonaspelzer.com", category: "studio" },
  { id: 267, name: "JTD Type", description: "独立字体厂商", founded: "2011", website: "jtdtype.com", category: "studio" },
  { id: 268, name: "Jung-Lee Type Foundry", description: "独立字体厂商", website: "jungleetype.com", category: "studio" },
  { id: 269, name: "Kanon Foundry", description: "独立字体厂商", founded: "2019", website: "kanonfoundry.com", category: "studio" },
  { id: 270, name: "Karsten Luecke", description: "德国独立字体设计师", country: "德国", founded: "2005", website: "karstenluecke.com", category: "studio" },
  { id: 271, name: "Kerns & Cairns", description: "独立字体厂商", website: "kernsandcairns.com", category: "studio" },
  { id: 272, name: "Kilotype", description: "独立字体厂商", website: "kilotype.com", category: "studio" },
  { id: 273, name: "Kiosk Fonts", description: "独立字体厂商", founded: "2008", website: "kioskfonts.com", category: "studio" },
  { id: 274, name: "Kirjatehnika", description: "爱沙尼亚独立字体厂商", country: "爱沙尼亚", website: "kirjatehnika.ee", category: "studio" },
  { id: 275, name: "Kostic Type", description: "塞尔维亚独立字体厂商", country: "塞尔维亚", website: "kostictype.com", category: "studio" },
  { id: 276, name: "Kyiv Type Foundry", description: "乌克兰独立字体厂商", country: "乌克兰", founded: "2021", website: "kyivtypefoundry.com", category: "studio" },
  { id: 277, name: "La Bolde Vita", description: "独立字体厂商", founded: "2019", website: "labeldevita.com", category: "studio" },
  { id: 278, name: "La Police", description: "法国独立字体厂商", country: "法国", founded: "2016", website: "lapolice.net", category: "studio" },
  { id: 279, name: "Labor & Wait", description: "独立字体厂商", founded: "2005", website: "laborandwait.co", category: "studio" },
  { id: 280, name: "Laïc", description: "独立字体厂商", founded: "2018", website: "laic.xyz", category: "studio" },
  { id: 281, name: "LangusteFonts", description: "独立字体厂商", website: "langustefonts.com", category: "studio" },
  { id: 282, name: "Latinotype", description: "智利拉丁美洲字体厂商", country: "智利", website: "latinotype.com", category: "indie" },
  { id: 283, name: "Laura Worthington Design", description: "美国独立手写字体设计师", country: "美国", founded: "2010", website: "lauraworthingtontype.com", category: "studio" },
  { id: 284, name: "Lazydogs Typefoundry", description: "独立字体厂商", founded: "2005", website: "lazydogstype.com", category: "studio" },
  { id: 285, name: "League of Moveable Type", description: "开源字体项目", founded: "2009", website: "theleagueofmoveabletype.com", category: "studio" },
  { id: 286, name: "Leinster Type", description: "爱尔兰独立字体厂商", country: "爱尔兰", founded: "2022", website: "leinstertype.com", category: "studio" },
  { id: 287, name: "Lettermatic", description: "独立字体厂商", founded: "2021", website: "lettermatic.com", category: "studio" },
  { id: 288, name: "Lettermin", description: "独立字体厂商", founded: "2017", website: "lettermin.com", category: "studio" },
  { id: 289, name: "LettError", description: "荷兰传奇字体设计二人组", country: "荷兰", founded: "1989", website: "letterror.com", category: "indie" },
  { id: 290, name: "Letters from Sweden", description: "瑞典独立字体厂商", country: "瑞典", founded: "2011", website: "lettersfromsweden.se", category: "indie" },
  { id: 291, name: "LetterSoup", description: "独立字体厂商", founded: "2014", website: "lettersoup.de", category: "studio" },
  { id: 292, name: "Lift Type", description: "独立字体厂商", founded: "2014", website: "lifttype.com", category: "studio" },
  { id: 293, name: "Lo-ol Type", description: "独立字体厂商", website: "lo-ol.com", category: "studio" },
  { id: 294, name: "London Type Foundry", description: "英国伦敦独立字体厂商", country: "英国", founded: "2017", website: "londontypefoundry.com", category: "studio" },
  { id: 295, name: "Lost Type", description: "先付后用模式的独立字体合作社", founded: "2011", website: "losttype.com", category: "indie" },
  { id: 296, name: "Love Letters", description: "独立字体厂商", website: "loveletters.co", category: "studio" },
  { id: 297, name: "LucasFonts", description: "德国独立字体厂商，由 Luc(as) de Groot 创立", country: "德国", website: "lucasfonts.com", category: "modern" },
  { id: 298, name: "Mai Type", description: "独立字体厂商", founded: "2022", website: "maitype.com", category: "studio" },
  { id: 299, name: "Manic Type", description: "独立字体厂商", founded: "2021", website: "manictype.com", category: "studio" },
  { id: 300, name: "Mark Simonson", description: "美国独立字体设计师，Proxima Nova 作者", country: "美国", founded: "2001", website: "marksimonson.com", category: "indie" },
  { id: 301, name: "Marmite Defontes", description: "独立字体厂商", founded: "2023", website: "marmitedefontes.com", category: "studio" },
  { id: 302, name: "MB Type", description: "独立字体厂商", website: "mbtype.com", category: "studio" },
  { id: 303, name: "Metis Foundry", description: "独立字体厂商", founded: "2018", website: "metisfoundry.com", category: "studio" },
  { id: 304, name: "Milk Type Foundry", description: "独立字体厂商", website: "milktypefoundry.com", category: "studio" },
  { id: 305, name: "Mint Type", description: "独立字体厂商", founded: "2004", website: "minttype.com", category: "studio" },
  { id: 306, name: "Modern Type", description: "独立字体厂商", website: "moderntype.co", category: "studio" },
  { id: 307, name: "Monkey Type", description: "独立字体厂商", founded: "2016", website: "monkeytype.co", category: "studio" },
  { id: 308, name: "Monokrom", description: "挪威独立字体厂商", country: "挪威", website: "monokrom.no", category: "indie" },
  { id: 309, name: "Monolith Foundry", description: "独立字体厂商", website: "monolithfoundry.com", category: "studio" },
  { id: 310, name: "MoreType", description: "独立字体厂商", website: "moretype.com", category: "studio" },
  { id: 311, name: "Morning Type", description: "独立字体厂商", founded: "2020", website: "morningtype.com", category: "studio" },
  { id: 312, name: "Mota Italic", description: "独立字体厂商", founded: "2008", website: "motaitalic.com", category: "studio" },
  { id: 313, name: "MuccaTypo", description: "独立字体厂商", website: "muccatypo.com", category: "studio" },
  { id: 314, name: "MuirMcNeil", description: "英国参数化字体设计工作室", country: "英国", founded: "2009", website: "muirmcneil.com", category: "studio" },
  { id: 315, name: "Multiocular Type", description: "独立字体厂商", founded: "2023", website: "multioculartype.com", category: "studio" },
  { id: 316, name: "MVB Fonts", description: "美国独立字体厂商", country: "美国", founded: "1991", website: "mvbfonts.com", category: "modern" },
  { id: 317, name: "Naipe", description: "独立字体厂商", founded: "2018", website: "naipe.xyz", category: "studio" },
  { id: 318, name: "Ndiscover", description: "独立字体厂商", founded: "2011", website: "ndiscover.com", category: "studio" },
  { id: 319, name: "Netvarec Type", description: "独立字体厂商", founded: "2020", website: "netvarectype.com", category: "studio" },
  { id: 320, name: "Newglyph", description: "独立字体厂商", founded: "2020", website: "newglyph.com", category: "studio" },
  { id: 321, name: "Newlyn", description: "独立字体厂商", founded: "2004", website: "newlyn.com", category: "studio" },
  { id: 322, name: "Nguyen Gobber", description: "独立字体设计工作室", founded: "2021", website: "nguyengobber.com", category: "studio" },
  { id: 323, name: "Nice To Type", description: "独立字体厂商", founded: "2017", website: "nicetotype.com", category: "studio" },
  { id: 324, name: "NM Type", description: "独立字体厂商", website: "nmtype.com", category: "studio" },
  { id: 325, name: "Occupant Fonts", description: "美国独立字体厂商", country: "美国", founded: "2015", website: "occupantfonts.com", category: "indie" },
  { id: 326, name: "Oh No Type Co.", description: "美国独立字体厂商，由 James Edmondson 创立", country: "美国", founded: "2015", website: "ohnotype.co", category: "indie" },
  { id: 327, name: "Omnibus-Type", description: "阿根廷独立字体厂商", country: "阿根廷", founded: "2011", website: "omnibus-type.com", category: "studio" },
  { id: 328, name: "Or Type", description: "独立字体厂商", founded: "2013", website: "ortype.is", category: "studio" },
  { id: 329, name: "Original Type", description: "独立字体厂商", founded: "2018", website: "originaltype.com", category: "studio" },
  { id: 330, name: "Ornamental & Title Type", description: "独立字体厂商", founded: "2025", website: "ornamentaltype.com", category: "studio" },
  { id: 331, name: "Our Polite Society", description: "独立字体厂商", founded: "2008", website: "ourpolitesociety.com", category: "studio" },
  { id: 332, name: "Paavola Type", description: "独立字体厂商", website: "paavolatype.fi", category: "studio" },
  { id: 333, name: "PampaType", description: "阿根廷独立字体厂商", country: "阿根廷", founded: "2001", website: "pampatype.com", category: "indie" },
  { id: 334, name: "Peggo Fonts", description: "独立字体厂商", website: "peggofonts.com", category: "studio" },
  { id: 335, name: "PFA Typefaces", description: "独立字体厂商", website: "pfatypefaces.com", category: "studio" },
  { id: 336, name: "Phantom Foundry", description: "独立字体厂商", founded: "2018", website: "phantomfoundry.com", category: "studio" },
  { id: 337, name: "Philatype", description: "独立字体厂商", website: "philatype.com", category: "studio" },
  { id: 338, name: "Plain Form", description: "独立字体厂商", founded: "2022", website: "plainform.co", category: "studio" },
  { id: 339, name: "Plau", description: "巴西独立字体厂商", country: "巴西", website: "plau.co", category: "studio" },
  { id: 340, name: "Playtype", description: "丹麦独立字体厂商", country: "丹麦", website: "playtype.com", category: "indie" },
  { id: 341, name: "Poem", description: "独立字体厂商", website: "poem.supply", category: "studio" },
  { id: 342, name: "Polytype", description: "独立字体厂商", founded: "2016", website: "polytype.co", category: "studio" },
  { id: 343, name: "Positype", description: "独立字体厂商", founded: "2000", website: "positype.com", category: "studio" },
  { id: 344, name: "Pretend Foundry", description: "独立字体厂商", founded: "2019", website: "pretendfoundry.com", category: "studio" },
  { id: 345, name: "Primary Foundry", description: "独立字体厂商", website: "primaryfoundry.com", category: "studio" },
  { id: 346, name: "Prologue Type", description: "独立字体厂商", founded: "2025", website: "prologuetype.com", category: "studio" },
  { id: 347, name: "Schriftlabor", description: "德国独立字体厂商", country: "德国", founded: "2014", website: "schriftlabor.at", category: "studio" },
  { id: 348, name: "SciFiPoetry", description: "独立字体厂商", founded: "2023", website: "scifipoetry.com", category: "studio" },
  { id: 349, name: "Serpentype", description: "独立字体厂商", website: "serpentype.com", category: "studio" },
  { id: 350, name: "Setup", description: "独立字体厂商", founded: "2009", website: "setup.typenetwork.com", category: "studio" },
  { id: 351, name: "Simple Bits", description: "独立字体厂商", website: "simplebits.com", category: "studio" },
  { id: 352, name: "Slanted Hall", description: "独立字体厂商", founded: "2012", website: "slantedhall.com", category: "studio" },
  { id: 353, name: "Smeltery", description: "独立字体厂商", founded: "2002", website: "sfrfrr.com", category: "studio" },
  { id: 354, name: "SpagheType", description: "独立字体厂商", founded: "2018", website: "spaghetype.com", category: "studio" },
  { id: 355, name: "Standard Type Foundry", description: "独立字体厂商", founded: "2024", website: "standardtypefoundry.com", category: "studio" },
  { id: 356, name: "Storm Type", description: "捷克独立字体厂商", country: "捷克", founded: "1993", website: "stormtype.com", category: "modern" },
  { id: 357, name: "Studio Sascha Bente", description: "独立字体设计工作室", founded: "2012", website: "saschabente.com", category: "studio" },
  { id: 358, name: "Sudtipos", description: "阿根廷独立字体厂商", country: "阿根廷", founded: "2002", website: "sudtipos.com", category: "indie" },
  { id: 359, name: "Supercontinente", description: "独立字体厂商", founded: "2020", website: "supercontinente.com", category: "studio" },
  { id: 360, name: "Supertype", description: "独立字体厂商", website: "supertype.co", category: "studio" },
  { id: 361, name: "Synthview", description: "独立字体厂商", website: "synthview.com", category: "studio" },
  { id: 362, name: "Teeline Fonts", description: "独立字体厂商", founded: "2010", website: "teelinefonts.com", category: "studio" },
  { id: 363, name: "TegamiType", description: "独立字体厂商", founded: "2017", website: "tegamitype.com", category: "studio" },
  { id: 364, name: "Temporary State", description: "独立字体厂商", website: "temporarystate.net", category: "studio" },
  { id: 365, name: "Terminal Design", description: "美国独立字体厂商", country: "美国", founded: "1990", website: "terminaldesign.com", category: "modern" },
  { id: 366, name: "The Letters", description: "独立字体厂商", founded: "2024", website: "theletters.co", category: "studio" },
  { id: 367, name: "TighType", description: "独立字体厂商", founded: "2015", website: "tightype.com", category: "studio" },
  { id: 368, name: "Tipografies", description: "独立字体厂商", founded: "2010", website: "tipografies.com", category: "studio" },
  { id: 369, name: "TipoType", description: "独立字体厂商", founded: "2007", website: "tipotype.com", category: "studio" },
  { id: 370, name: "Tofu Type", description: "独立字体厂商", founded: "2023", website: "tofutype.com", category: "studio" },
  { id: 371, name: "Tour de Force", description: "独立字体厂商", founded: "2009", website: "tourdeforce.com", category: "studio" },
  { id: 372, name: "Troisième Type", description: "法国独立字体厂商", country: "法国", founded: "2022", website: "troisiemetype.com", category: "studio" },
  { id: 373, name: "TrulyType", description: "独立字体厂商", founded: "2014", website: "trulytype.com", category: "studio" },
  { id: 374, name: "Tüpokompanii", description: "爱沙尼亚独立字体厂商", country: "爱沙尼亚", founded: "2022", website: "tupokompanii.ee", category: "studio" },
  { id: 375, name: "Type By", description: "独立字体厂商", founded: "2019", website: "typeby.com", category: "studio" },
  { id: 376, name: "Type Culture", description: "独立字体厂商", founded: "2004", website: "typeculture.com", category: "studio" },
  { id: 377, name: "Type Different", description: "独立字体厂商", founded: "1995", website: "typedifferent.com", category: "studio" },
  { id: 378, name: "Type Salon", description: "独立字体厂商", website: "typesalon.com", category: "studio" },
  { id: 379, name: "Type Supply", description: "独立字体厂商", website: "typesupply.com", category: "studio" },
  { id: 380, name: "Typearture", description: "独立字体厂商", website: "typearture.com", category: "studio" },
  { id: 381, name: "TypeJockeys", description: "奥地利独立字体厂商", country: "奥地利", website: "typejockeys.com", category: "indie" },
  { id: 382, name: "Typeland", description: "独立字体厂商", website: "typeland.com", category: "studio" },
  { id: 383, name: "TypeManufactur", description: "独立字体厂商", website: "typemanufactur.com", category: "studio" },
  { id: 384, name: "TypeRepublic", description: "西班牙独立字体厂商", country: "西班牙", founded: "2003", website: "typerepublic.com", category: "indie" },
  { id: 385, name: "TypeTogether", description: "捷克独立字体厂商，专注多语言字体", country: "捷克", founded: "2006", website: "typetogether.com", category: "indie" },
  { id: 386, name: "XYZ Type", description: "美国独立字体厂商", country: "美国", founded: "2017", website: "xyztype.com", category: "indie" },
];
