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
];
