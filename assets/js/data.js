/* =========================================================
   SAYT MAZMUNI — barcha matnlar shu faylda.
   Yangi modul, mavzu, test savoli yoki atama qoʻshish uchun
   faqat shu faylni tahrirlang (koddagi boshqa joylarga tegmang).
   ========================================================= */
window.SITE_DATA = {
  site: {
    short: "JI va XIM",
    name: "Jahon iqtisodiyoti va xalqaro iqtisodiy munosabatlar kafedrasi",
    university: "",          // masalan: "Toshkent davlat iqtisodiyot universiteti"
    tagline: "Talabalar uchun interaktiv oʻquv portali",
    email: "",               // kafedra elektron pochtasi (ixtiyoriy)
    telegram: ""             // masalan: "https://t.me/kanal_nomi"
  },

  /* ---------- Muhim sanalar (namuna — oʻzingiznikiga almashtiring) ---------- */
  events: [
    { date: "2026-12-08", title: "Oraliq nazorat", note: "Xalqaro savdo nazariyasi va siyosati, 2-kurs" },
    { date: "2026-12-15", title: "Kurs ishini topshirish muddati", note: "Ilmiy rahbarga elektron shaklda" },
    { date: "2026-12-22", title: "Talabalar ilmiy konferensiyasi", note: "“Globallashuv va Oʻzbekiston” mavzusida" },
    { date: "2027-01-05", title: "Yakuniy nazorat boshlanadi", note: "Kuzgi semestr imtihonlari" }
  ],

  /* ---------- Modullar ---------- */
  modules: [
    {
      id: "jahon-iqtisodiyoti", code: "JI", color: "#2a6c82",
      title: "Jahon iqtisodiyoti", kurs: 1, semestr: 2, kredit: 6,
      desc: "Jahon xoʻjaligining tuzilishi, resurslari, mamlakatlar tipologiyasi va globallashuv jarayonlari.",
      goals: [
        "Jahon xoʻjaligining tuzilmasi va rivojlanish bosqichlarini tushuntira olish",
        "Mamlakatlarni asosiy makroiqtisodiy koʻrsatkichlar boʻyicha taqqoslash",
        "Globallashuvning ijobiy va salbiy oqibatlarini tahlil qilish"
      ],
      topics: [
        { t: "Jahon xoʻjaligi: tushunchasi va shakllanish bosqichlari", d: "Milliy xoʻjaliklardan jahon xoʻjaligiga oʻtish, sanoat inqiloblari va xalqaro aloqalarning kengayishi.", k: ["Globallashuv"] },
        { t: "Jahon iqtisodiyotining resurs salohiyati", d: "Tabiiy, mehnat, kapital va texnologik resurslarning mamlakatlar boʻyicha taqsimlanishi.", k: [] },
        { t: "Xalqaro mehnat taqsimoti", d: "Ixtisoslashuv va kooperatsiya, ularning omillari hamda zamonaviy qiymat zanjirlari.", k: ["Xalqaro mehnat taqsimoti", "Global qiymat zanjiri"] },
        { t: "Mamlakatlar tipologiyasi", d: "Rivojlangan, rivojlanayotgan va oʻtish iqtisodiyotidagi mamlakatlar; Jahon banki daromad guruhlari.", k: ["YaIM"] },
        { t: "Globallashuv va uning iqtisodiy oqibatlari", d: "Savdo, moliya va texnologiyalar globallashuvi; tengsizlik va barqarorlik masalalari.", k: ["Globallashuv"] },
        { t: "Oʻzbekiston jahon xoʻjaligi tizimida", d: "Oʻzbekistonning tashqi savdo tuzilmasi, asosiy hamkorlari va integratsiya yoʻnalishlari.", k: [] }
      ],
      seminars: [
        "Jahon banki maʼlumotlari asosida 3 ta mamlakatni YaIM va aholi jon boshiga YaIM boʻyicha taqqoslang",
        "Munozara: globallashuv kambagʻal mamlakatlarga foyda keltiradimi?",
        "Oʻzbekiston eksport tuzilmasi: 2015 va soʻnggi yil maʼlumotlarini solishtiring"
      ],
      quiz: [
        { q: "Xalqaro mehnat taqsimoti nimani anglatadi?", o: ["Mamlakatlarning muayyan tovar va xizmatlar ishlab chiqarishga ixtisoslashuvi", "Ishchilarning bir mamlakat ichida koʻchishi", "Davlat byudjetining tarmoqlararo taqsimlanishi", "Ish haqining xalqaro miqyosda tenglashtirilishi"], a: 0, e: "XMT — mamlakatlar oʻrtasida ishlab chiqarishning ixtisoslashuvi va natijalarni ayirboshlash." },
        { q: "Mamlakatlarni daromad darajasiga koʻra (past, oʻrtadan past, oʻrtadan yuqori, yuqori) guruhlaydigan tashkilot?", o: ["JST", "Jahon banki", "OPEK", "YuNKTAD"], a: 1, e: "Jahon banki har yili aholi jon boshiga YaMD (Atlas usuli) boʻyicha tasniflaydi." },
        { q: "Globallashuvni tezlashtirgan asosiy omillardan biri:", o: ["Bojxona tariflarining oshishi", "Transport va axborot xarajatlarining keskin pasayishi", "Valyuta nazoratining kuchayishi", "Oltin standartiga qaytish"], a: 1, e: "Konteyner tashish, internet va aloqa arzonlashuvi xalqaro aloqalarni tezlashtirdi." }
      ],
      resources: [
        { t: "World Bank Open Data", type: "Statistika", url: "https://data.worldbank.org/" },
        { t: "IMF World Economic Outlook", type: "Hisobot", url: "https://www.imf.org/en/Publications/WEO" },
        { t: "Oʻzbekiston Milliy statistika qoʻmitasi", type: "Statistika", url: "https://stat.uz/" }
      ]
    },

    {
      id: "xim", code: "XIM", color: "#6a4c93",
      title: "Xalqaro iqtisodiy munosabatlar", kurs: 1, semestr: 1, kredit: 6,
      desc: "XIMning asosiy shakllari: savdo, kapital va ishchi kuchi harakati, valyuta-kredit munosabatlari.",
      goals: [
        "XIM shakllari va ularning oʻzaro bogʻliqligini tushuntirish",
        "Toʻlov balansi tuzilmasini oʻqiy olish",
        "Xalqaro migratsiyaning iqtisodiy taʼsirini baholash"
      ],
      topics: [
        { t: "XIM tushunchasi, subyektlari va shakllari", d: "Davlatlar, TMKlar, xalqaro tashkilotlar va ularning oʻzaro munosabatlari.", k: ["TMK"] },
        { t: "Xalqaro tovar va xizmatlar savdosi", d: "Savdo hajmi, tuzilmasi va geografiyasi; xizmatlar savdosining oʻsishi.", k: ["Savdo balansi"] },
        { t: "Xalqaro kapital harakati", d: "Toʻgʻridan-toʻgʻri va portfel investitsiyalar, kreditlar va rasmiy yordam.", k: ["TTXI", "Portfel investitsiyalar"] },
        { t: "Xalqaro ishchi kuchi migratsiyasi", d: "Migratsiya sabablari, pul oʻtkazmalari va ularning donor hamda qabul qiluvchi mamlakatlarga taʼsiri.", k: [] },
        { t: "Toʻlov balansi", d: "Joriy operatsiyalar, kapital va moliyaviy hisoblar; balans muvozanati.", k: ["Toʻlov balansi"] }
      ],
      seminars: [
        "Oʻzbekiston toʻlov balansini (Markaziy bank) tahlil qiling: joriy hisob qanday shakllanmoqda?",
        "Mehnat migratsiyasi: pul oʻtkazmalarining iqtisodiyotdagi ulushi boʻyicha esse"
      ],
      quiz: [
        { q: "Quyidagilardan qaysi biri XIM shakli emas?", o: ["Xalqaro savdo", "Kapital harakati", "Ishchi kuchi migratsiyasi", "Mahalliy byudjet ijrosi"], a: 3, e: "Mahalliy byudjet — ichki moliya masalasi, XIM shakli emas." },
        { q: "Mehnat migrantlarining pul oʻtkazmalari toʻlov balansining qaysi qismida aks etadi?", o: ["Moliyaviy hisob", "Joriy operatsiyalar hisobi", "Kapital hisobi", "Rezervlar"], a: 1, e: "Shaxsiy transfertlar joriy hisobning ikkilamchi daromadlar boʻlimida qayd etiladi." },
        { q: "Toʻlov balansining asosiy uch hisobi:", o: ["Joriy, kapital, moliyaviy", "Eksport, import, tranzit", "Davlat, xususiy, aralash", "Qisqa, oʻrta, uzoq muddatli"], a: 0, e: "XVFning BPM6 standartiga koʻra: joriy, kapital va moliyaviy hisoblar." }
      ],
      resources: [
        { t: "Oʻzbekiston Markaziy banki — toʻlov balansi", type: "Statistika", url: "https://cbu.uz/" },
        { t: "IMF Balance of Payments Manual (BPM6)", type: "Qoʻllanma", url: "https://www.imf.org/external/pubs/ft/bop/2007/bopman6.htm" }
      ]
    },

    {
      id: "xalqaro-savdo", code: "XS", color: "#c2802a",
      title: "Xalqaro savdo nazariyasi va siyosati", kurs: 2, semestr: 3, kredit: 6,
      desc: "Merkantilizmdan zamonaviy nazariyalargacha; tariflar, kvotalar va savdo siyosati vositalari.",
      goals: [
        "Mutlaq va qiyosiy ustunlik modellarini masalalarda qoʻllash",
        "Tarif va kvotalarning farovonlikka taʼsirini grafikda koʻrsatish",
        "Savdo siyosati vositalarini tasniflash"
      ],
      topics: [
        { t: "Merkantilizm va mutlaq ustunlik (A. Smit)", d: "Savdoga ilk qarashlar, mutlaq ustunlik va mehnat taqsimoti.", k: ["Mutlaq ustunlik", "Merkantilizm"] },
        { t: "Qiyosiy ustunlik (D. Rikardo)", d: "Muqobil xarajatlar, ixtisoslashuv va savdodan yutuq.", k: ["Qiyosiy ustunlik"] },
        { t: "Xeksher–Olin nazariyasi va Leontyev paradoksi", d: "Omillar bilan taʼminlanganlik va uning empirik tekshiruvi.", k: [] },
        { t: "Yangi savdo nazariyalari", d: "Masshtab samarasi, monopolistik raqobat, tarmoq ichidagi savdo.", k: [] },
        { t: "Tarif siyosati", d: "Import boji turlari va ularning kichik hamda katta mamlakatga taʼsiri.", k: ["Tarif", "Protektsionizm"] },
        { t: "Notarif cheklovlar", d: "Kvotalar, ixtiyoriy eksport cheklovi, subsidiyalar, texnik toʻsiqlar va demping.", k: ["Kvota", "Demping"] }
      ],
      seminars: [
        "Vositalar sahifasidagi qiyosiy ustunlik kalkulyatorida 3 ta oʻz misolingizni yeching",
        "Tarifning ichki narx, isteʼmol va import hajmiga taʼsirini grafik bilan tushuntiring",
        "Oʻzbekistonda qoʻllanadigan import bojlari boʻyicha qisqa tahlil"
      ],
      quiz: [
        { q: "Qiyosiy ustunlik nazariyasi muallifi kim?", o: ["Adam Smit", "David Rikardo", "Pol Krugman", "Jon Keyns"], a: 1, e: "D. Rikardo 1817-yilda “Siyosiy iqtisod va soliq solish asoslari” asarida." },
        { q: "Xeksher–Olin nazariyasiga koʻra mamlakat qanday tovarni eksport qiladi?", o: ["Eng arzon transport qilinadigan tovarni", "Nisbatan koʻp boʻlgan omilni intensiv ishlatadigan tovarni", "Davlat subsidiya beradigan tovarni", "Eng yuqori narxdagi tovarni"], a: 1, e: "Mamlakat oʻzida nisbatan koʻp va arzon boʻlgan omilni talab qiluvchi tovarga ixtisoslashadi." },
        { q: "Kichik mamlakat import tarifini joriy qilsa, qisqa muddatda nima boʻladi?", o: ["Ichki narx pasayadi", "Ichki narx ortadi, import kamayadi", "Jahon narxi ortadi", "Hech narsa oʻzgarmaydi"], a: 1, e: "Kichik mamlakat jahon narxiga taʼsir qilmaydi, shuning uchun ichki narx tarif miqdoricha oshadi." },
        { q: "Leontyev paradoksi nimani koʻrsatdi?", o: ["AQSh eksporti kapital-intensiv ekanini", "AQSh eksporti kutilganidan koʻra mehnat-intensiv ekanini", "Savdo foydasiz ekanini", "Tariflar farovonlikni oshirishini"], a: 1, e: "Kapitalga boy AQSh nisbatan mehnat-intensiv tovarlarni eksport qilgani aniqlangan." }
      ],
      resources: [
        { t: "Krugman, Obstfeld, Melitz — International Economics", type: "Darslik", url: "https://www.pearson.com/" },
        { t: "WTO Tariff & Trade Data", type: "Statistika", url: "https://ttd.wto.org/" },
        { t: "UN Comtrade — savdo maʼlumotlari", type: "Statistika", url: "https://comtradeplus.un.org/" }
      ]
    },

    {
      id: "xalqaro-moliya", code: "XVK", color: "#2c7a4c",
      title: "Xalqaro valyuta-kredit munosabatlari", kurs: 2, semestr: 4, kredit: 6,
      desc: "Valyuta tizimlari evolyutsiyasi, valyuta kursi, toʻlov balansi va xalqaro moliya bozorlari.",
      goals: [
        "Valyuta kursi rejimlarini taqqoslash",
        "Kross-kurs va devalvatsiya hisob-kitoblarini bajarish",
        "Xalqaro moliyaviy inqirozlar sabablarini tahlil qilish"
      ],
      topics: [
        { t: "Jahon valyuta tizimi evolyutsiyasi", d: "Oltin standarti, Bretton-Vuds va Yamayka tizimlari.", k: ["Bretton-Vuds"] },
        { t: "Valyuta kursi va uni belgilovchi omillar", d: "Nominal va real kurs, xarid qobiliyati pariteti, foiz pariteti.", k: ["Valyuta kursi", "XQP"] },
        { t: "Valyuta kursi rejimlari", d: "Qatʼiy, suzuvchi va oraliq rejimlar; devalvatsiya va revalvatsiya.", k: ["Devalvatsiya"] },
        { t: "Xalqaro kredit va qarz muammolari", d: "Tashqi qarz koʻrsatkichlari, suveren obligatsiyalar va qayta tuzish.", k: [] },
        { t: "Xalqaro moliya bozorlari va inqirozlar", d: "Valyuta, kapital va derivativlar bozori; 1997 va 2008 inqirozlari.", k: [] }
      ],
      seminars: [
        "Soʻmning AQSh dollari va yevroga nisbatan soʻnggi 5 yillik dinamikasini tahlil qiling",
        "Xarid qobiliyati paritetini “Big Mac indeksi” misolida tekshiring"
      ],
      quiz: [
        { q: "Bretton-Vuds tizimi qachon tashkil etilgan?", o: ["1919", "1944", "1971", "1976"], a: 1, e: "1944-yil iyul oyida Bretton-Vudsda (AQSh) konferensiya oʻtkazilgan." },
        { q: "SDR (maxsus qarz olish huquqi)ni qaysi tashkilot chiqaradi?", o: ["Jahon banki", "JST", "XVF", "Yevropa markaziy banki"], a: 2, e: "SDR — XVF tomonidan 1969-yilda joriy etilgan xalqaro zaxira aktivi." },
        { q: "Milliy valyuta devalvatsiyasi qisqa muddatda odatda nimaga olib keladi?", o: ["Eksportni ragʻbatlantiradi", "Importni arzonlashtiradi", "Tashqi qarzni kamaytiradi", "Inflyatsiyani albatta toʻxtatadi"], a: 0, e: "Milliy tovarlar xorijliklar uchun arzonlashadi, eksport raqobatbardoshligi oshadi." }
      ],
      resources: [
        { t: "IMF — Exchange Rate Arrangements (AREAER)", type: "Hisobot", url: "https://www.imf.org/" },
        { t: "Oʻzbekiston Markaziy banki — valyuta kurslari", type: "Statistika", url: "https://cbu.uz/" },
        { t: "The Economist — Big Mac Index", type: "Maqola", url: "https://www.economist.com/big-mac-index" }
      ]
    },

    {
      id: "investitsiyalar", code: "XI", color: "#b0412e",
      title: "Xalqaro investitsiyalar va TMKlar", kurs: 3, semestr: 5, kredit: 5,
      desc: "TTXI nazariyalari, transmilliy korporatsiyalar strategiyasi va investitsiya muhitini baholash.",
      goals: [
        "TTXI va portfel investitsiyalarni farqlash",
        "Daning OLI paradigmasini qoʻllash",
        "Mamlakat investitsiya muhitini baholash"
      ],
      topics: [
        { t: "Xalqaro investitsiyalar: turlari va tasnifi", d: "TTXI, portfel investitsiyalar, greenfield va M&A.", k: ["TTXI", "Portfel investitsiyalar"] },
        { t: "TTXI nazariyalari", d: "Mahsulot hayot sikli (Vernon), OLI paradigmasi (Daning), internalizatsiya.", k: [] },
        { t: "Transmilliy korporatsiyalar", d: "TMKlarning tuzilishi, global strategiyalari va qabul qiluvchi mamlakatga taʼsiri.", k: ["TMK", "Autsorsing"] },
        { t: "Investitsiya muhiti va maxsus iqtisodiy zonalar", d: "Investitsiya reytinglari, imtiyozlar va EIZlar tajribasi.", k: ["Offshor"] }
      ],
      seminars: [
        "UNCTAD World Investment Report asosida mintaqa boʻyicha TTXI oqimlarini tahlil qiling",
        "Bitta TMK (masalan, avtomobilsozlik) global strategiyasi boʻyicha keys"
      ],
      quiz: [
        { q: "XVF/OECD taʼrifiga koʻra investitsiya qachon TTXI hisoblanadi?", o: ["Ovozli aksiyalarning kamida 10% qismi", "Kamida 50%", "Kamida 1 mln dollar", "Faqat yangi zavod qurilganda"], a: 0, e: "10% chegara investorning boshqaruvga sezilarli taʼsirini bildiradi." },
        { q: "“Greenfield” investitsiya nima?", o: ["Mavjud kompaniyani sotib olish", "Yangi korxonani noldan qurish", "Davlat obligatsiyalarini sotib olish", "Qishloq xoʻjaligiga kredit"], a: 1, e: "Greenfield — xorijda yangi ishlab chiqarish quvvatini barpo etish." },
        { q: "OLI paradigmasi muallifi:", o: ["R. Vernon", "J. Daning", "M. Porter", "B. Olin"], a: 1, e: "Jon Daning: Ownership, Location, Internalization ustunliklari." }
      ],
      resources: [
        { t: "UNCTAD World Investment Report", type: "Hisobot", url: "https://unctad.org/topic/investment/world-investment-report" },
        { t: "Oʻzbekiston Investitsiyalar vazirligi", type: "Rasmiy", url: "https://miit.uz/" }
      ]
    },

    {
      id: "integratsiya", code: "XII", color: "#3b6fb6",
      title: "Xalqaro iqtisodiy integratsiya", kurs: 3, semestr: 6, kredit: 5,
      desc: "Integratsiya bosqichlari, Yevropa Ittifoqi, YeOII, ASEAN, MDH va Markaziy Osiyo hamkorligi.",
      goals: [
        "Balassa boʻyicha integratsiya bosqichlarini ajrata olish",
        "Savdo yaratilishi va savdo burilishi effektlarini tushuntirish",
        "Mintaqaviy birlashmalarni taqqoslash"
      ],
      topics: [
        { t: "Integratsiya nazariyasi va bosqichlari", d: "Erkin savdo hududidan iqtisodiy ittifoqqacha (B. Balassa).", k: ["Erkin savdo hududi", "Bojxona ittifoqi"] },
        { t: "Bojxona ittifoqi nazariyasi (J. Viner)", d: "Savdo yaratilishi va savdo burilishi.", k: [] },
        { t: "Yevropa Ittifoqi", d: "Rim shartnomasidan yevro hududigacha; yagona bozor institutlari.", k: ["Umumiy bozor"] },
        { t: "Postsovet hududidagi integratsiya", d: "MDH, YeOII va Markaziy Osiyo davlatlari hamkorligi.", k: [] },
        { t: "Osiyo va Amerikadagi birlashmalar", d: "ASEAN, RCEP, USMCA, MERCOSUR.", k: [] }
      ],
      seminars: [
        "YeI va YeOII ni integratsiya darajasi boʻyicha taqqoslovchi jadval tuzing",
        "Munozara: Oʻzbekiston uchun qaysi integratsiya formati maqbul?"
      ],
      quiz: [
        { q: "Bojxona ittifoqining erkin savdo hududidan asosiy farqi:", o: ["Ichki tariflar saqlanadi", "Uchinchi mamlakatlarga nisbatan yagona tashqi tarif", "Yagona valyuta", "Ishchi kuchi erkin harakati"], a: 1, e: "EST da har bir aʼzo oʻz tashqi tarifini saqlaydi; bojxona ittifoqida u yagona." },
        { q: "Balassa boʻyicha toʻgʻri ketma-ketlik:", o: ["Umumiy bozor → EST → Bojxona ittifoqi", "EST → Bojxona ittifoqi → Umumiy bozor → Iqtisodiy ittifoq", "Bojxona ittifoqi → EST → Iqtisodiy ittifoq", "Iqtisodiy ittifoq → Umumiy bozor → EST"], a: 1, e: "Har bir keyingi bosqich oldingisining belgilarini oʻz ichiga oladi." },
        { q: "Yevro naqd pul sifatida muomalaga qachon kiritilgan?", o: ["1993", "1999", "2002", "2009"], a: 2, e: "1999-yilda naqdsiz, 2002-yil 1-yanvardan naqd shaklda." }
      ],
      resources: [
        { t: "European Union — official portal", type: "Rasmiy", url: "https://european-union.europa.eu/" },
        { t: "Yevroosiyo iqtisodiy komissiyasi", type: "Rasmiy", url: "https://eec.eaeunion.org/" },
        { t: "ASEAN Secretariat", type: "Rasmiy", url: "https://asean.org/" }
      ]
    },

    {
      id: "xalqaro-tashkilotlar", code: "XIT", color: "#7a6a2a",
      title: "Xalqaro iqtisodiy tashkilotlar", kurs: 3, semestr: 5, kredit: 4,
      desc: "JST, XVF, Jahon banki guruhi, YuNKTAD, OECD va mintaqaviy taraqqiyot banklari faoliyati.",
      goals: [
        "Asosiy tashkilotlarning mandati va tuzilishini bilish",
        "JST tamoyillarini amaliy misollarda tushuntirish",
        "Oʻzbekistonning tashkilotlar bilan hamkorligini tahlil qilish"
      ],
      topics: [
        { t: "GATT va Jahon savdo tashkiloti", d: "Savdo raundlari, JST tamoyillari, nizolarni hal qilish tizimi.", k: ["JST", "MFN"] },
        { t: "Xalqaro valyuta fondi", d: "Kvotalar, kredit dasturlari, monitoring va shartlilik.", k: ["XVF"] },
        { t: "Jahon banki guruhi", d: "XTTB, XTA, XMK, MIGA va ICSID vazifalari.", k: ["Jahon banki"] },
        { t: "BMT tizimidagi iqtisodiy tashkilotlar", d: "YuNKTAD, YuNIDO, BMT TD va Barqaror rivojlanish maqsadlari.", k: [] },
        { t: "Mintaqaviy taraqqiyot banklari", d: "OTB, YeTTB, Osiyo infratuzilma investitsiya banki, Islom taraqqiyot banki.", k: [] }
      ],
      seminars: [
        "Oʻzbekistonning JSTga aʼzo boʻlish jarayoni: afzallik va xatarlar",
        "Bir xalqaro tashkilot boʻyicha 5 daqiqalik taqdimot"
      ],
      quiz: [
        { q: "JST qachon tashkil topgan?", o: ["1947", "1964", "1995", "2001"], a: 2, e: "1995-yil 1-yanvarda GATTning Urugvay raundi natijasida." },
        { q: "JSTning asosiy tamoyillaridan biri:", o: ["Eng koʻp qulaylik yaratilgan millat (MFN) rejimi", "Valyuta kurslarini qatʼiy belgilash", "Qashshoqlikka qarshi grantlar", "Neft narxini belgilash"], a: 0, e: "MFN — bir aʼzoga berilgan imtiyoz barcha aʼzolarga berilishi kerak." },
        { q: "YuNKTAD qachon tashkil etilgan?", o: ["1945", "1964", "1974", "1991"], a: 1, e: "BMT Savdo va taraqqiyot konferensiyasi 1964-yilda Jenevada tashkil etilgan." }
      ],
      resources: [
        { t: "World Trade Organization", type: "Rasmiy", url: "https://www.wto.org/" },
        { t: "International Monetary Fund", type: "Rasmiy", url: "https://www.imf.org/" },
        { t: "UNCTAD", type: "Rasmiy", url: "https://unctad.org/" }
      ]
    },

    {
      id: "tif", code: "TIF", color: "#4a7c74",
      title: "Tashqi iqtisodiy faoliyat va bojxona ishi", kurs: 4, semestr: 7, kredit: 5,
      desc: "Tashqi savdo shartnomalari, Inkoterms, xalqaro toʻlov shakllari va bojxona rasmiylashtiruvi.",
      goals: [
        "Inkoterms 2020 shartlarini toʻgʻri tanlash",
        "Xalqaro toʻlov shakllarining xatarlarini baholash",
        "Bojxona toʻlovlarini hisoblash"
      ],
      topics: [
        { t: "TIFni davlat tomonidan tartibga solish", d: "Litsenziyalash, sertifikatlash, valyuta va bojxona nazorati.", k: [] },
        { t: "Tashqi savdo shartnomasi", d: "Shartnoma tuzilishi, asosiy bandlar, xalqaro huquqiy asoslar (Vena konvensiyasi).", k: [] },
        { t: "Inkoterms 2020", d: "11 ta shart, xatar va xarajatlarning sotuvchi va xaridor oʻrtasida taqsimlanishi.", k: ["Inkoterms"] },
        { t: "Xalqaro hisob-kitob shakllari", d: "Akkreditiv, inkasso, bank oʻtkazmasi, avans; ularning xatarlari.", k: ["Akkreditiv"] },
        { t: "Bojxona toʻlovlari va rasmiylashtiruv", d: "Bojxona qiymati, boj, aksiz, QQS va bojxona rejimlari.", k: ["Tarif"] }
      ],
      seminars: [
        "Vositalar sahifasidagi bojxona kalkulyatorida 3 xil tovar uchun toʻlovlarni hisoblang",
        "Keys: CIF va FOB shartlarida yetkazib berishni solishtiring"
      ],
      quiz: [
        { q: "Inkoterms qoidalarini qaysi tashkilot ishlab chiqadi?", o: ["JST", "Xalqaro savdo palatasi (ICC)", "BMT", "Jahon bojxona tashkiloti"], a: 1, e: "Inkoterms — Parijdagi Xalqaro savdo palatasi (ICC) nashri, oxirgi tahriri 2020." },
        { q: "Sotuvchi uchun eng kam majburiyatli Inkoterms sharti:", o: ["DDP", "CIF", "EXW", "FOB"], a: 2, e: "EXW (Ex Works) — tovar sotuvchining binosida xaridorga topshiriladi." },
        { q: "Eksportyor uchun eng ishonchli toʻlov shakli:", o: ["Ochiq hisob", "Hujjatli akkreditiv", "Inkasso", "Kechiktirilgan toʻlov"], a: 1, e: "Akkreditivda bank hujjatlar taqdim etilganda toʻlash majburiyatini oladi." }
      ],
      resources: [
        { t: "ICC — Incoterms 2020", type: "Qoʻllanma", url: "https://iccwbo.org/business-solutions/incoterms-rules/" },
        { t: "Oʻzbekiston Bojxona qoʻmitasi", type: "Rasmiy", url: "https://customs.uz/" }
      ]
    }
  ],

  /* ---------- Lugʻat ---------- */
  glossary: [
    { t: "Akkreditiv", en: "Letter of credit", d: "Bankning xaridor topshirigʻiga koʻra, belgilangan hujjatlar taqdim etilganda sotuvchiga toʻlash majburiyati.", m: "tif" },
    { t: "Autsorsing", en: "Outsourcing", d: "Kompaniya faoliyatining bir qismini tashqi (koʻpincha xorijiy) ijrochiga topshirish.", m: "investitsiyalar" },
    { t: "Bojxona ittifoqi", en: "Customs union", d: "Aʼzolar oʻrtasida bojlar bekor qilingan va uchinchi mamlakatlarga yagona tashqi tarif qoʻllanadigan birlashma.", m: "integratsiya" },
    { t: "Bretton-Vuds", en: "Bretton Woods system", d: "1944–1971-yillardagi oltin-dollar standartiga asoslangan qatʼiy valyuta kurslari tizimi.", m: "xalqaro-moliya" },
    { t: "Demping", en: "Dumping", d: "Tovarni eksport bozorida ichki narxdan yoki tannarxdan past narxda sotish.", m: "xalqaro-savdo" },
    { t: "Devalvatsiya", en: "Devaluation", d: "Qatʼiy yoki boshqariladigan rejimda milliy valyuta rasmiy kursining pasaytirilishi.", m: "xalqaro-moliya" },
    { t: "Erkin savdo hududi", en: "Free trade area", d: "Aʼzolar oʻzaro bojlarni bekor qiladi, ammo tashqi tariflarni mustaqil belgilaydi.", m: "integratsiya" },
    { t: "Global qiymat zanjiri", en: "Global value chain", d: "Mahsulot ishlab chiqarish bosqichlarining turli mamlakatlarga taqsimlanishi.", m: "jahon-iqtisodiyoti" },
    { t: "Globallashuv", en: "Globalization", d: "Mamlakatlar iqtisodiyotlarining savdo, kapital, texnologiya va axborot orqali oʻzaro bogʻlanishining kuchayishi.", m: "jahon-iqtisodiyoti" },
    { t: "Inkoterms", en: "Incoterms", d: "ICC tomonidan ishlab chiqilgan, yetkazib berishda xarajat va xatarlarni taqsimlovchi xalqaro qoidalar.", m: "tif" },
    { t: "Jahon banki", en: "World Bank", d: "Rivojlanayotgan mamlakatlarga uzoq muddatli kredit va texnik yordam beruvchi xalqaro moliya instituti.", m: "xalqaro-tashkilotlar" },
    { t: "JST", en: "WTO", d: "Jahon savdo tashkiloti — xalqaro savdo qoidalarini belgilovchi va nizolarni hal etuvchi tashkilot (1995).", m: "xalqaro-tashkilotlar" },
    { t: "Kvota", en: "Quota", d: "Muayyan davrda import yoki eksport qilinadigan tovar miqdoriga qoʻyilgan cheklov.", m: "xalqaro-savdo" },
    { t: "Merkantilizm", en: "Mercantilism", d: "Boylikni oltin-kumush jamgʻarish va ijobiy savdo balansi bilan bogʻlovchi XVI–XVIII asr taʼlimoti.", m: "xalqaro-savdo" },
    { t: "MFN", en: "Most-favoured-nation", d: "Eng koʻp qulaylik yaratilgan millat rejimi: bir hamkorga berilgan imtiyoz boshqalarga ham beriladi.", m: "xalqaro-tashkilotlar" },
    { t: "Mutlaq ustunlik", en: "Absolute advantage", d: "Mamlakatning tovarni boshqalarga qaraganda kamroq resurs sarflab ishlab chiqara olishi.", m: "xalqaro-savdo" },
    { t: "Offshor", en: "Offshore", d: "Norezidentlar uchun imtiyozli soliq va yengil tartibga solish rejimiga ega hudud.", m: "investitsiyalar" },
    { t: "Portfel investitsiyalar", en: "Portfolio investment", d: "Boshqaruvni nazorat qilish maqsadisiz qimmatli qogʻozlarga kiritilgan mablagʻlar (10% dan kam ulush).", m: "investitsiyalar" },
    { t: "Protektsionizm", en: "Protectionism", d: "Ichki ishlab chiqaruvchilarni xorijiy raqobatdan himoya qilishga qaratilgan savdo siyosati.", m: "xalqaro-savdo" },
    { t: "Qiyosiy ustunlik", en: "Comparative advantage", d: "Mamlakatning tovarni boshqalarga nisbatan pastroq muqobil xarajat bilan ishlab chiqara olishi.", m: "xalqaro-savdo" },
    { t: "Savdo balansi", en: "Trade balance", d: "Tovar eksporti va importi qiymatlari oʻrtasidagi farq.", m: "xim" },
    { t: "Tarif", en: "Tariff", d: "Import (baʼzan eksport) qilinayotgan tovarlarga solinadigan bojxona boji.", m: "xalqaro-savdo" },
    { t: "TMK", en: "Transnational corporation", d: "Bir necha mamlakatda filial va shoʻba korxonalarga ega boʻlgan yirik kompaniya.", m: "investitsiyalar" },
    { t: "Toʻlov balansi", en: "Balance of payments", d: "Mamlakat rezidentlarining norezidentlar bilan barcha iqtisodiy operatsiyalari hisobi.", m: "xim" },
    { t: "TTXI", en: "FDI", d: "Toʻgʻridan-toʻgʻri xorijiy investitsiyalar: xorijiy korxonada kamida 10% ulush va boshqaruvga taʼsir.", m: "investitsiyalar" },
    { t: "Umumiy bozor", en: "Common market", d: "Bojxona ittifoqi + kapital, ishchi kuchi va xizmatlarning erkin harakati.", m: "integratsiya" },
    { t: "Valyuta kursi", en: "Exchange rate", d: "Bir mamlakat pul birligining boshqa mamlakat pul birligida ifodalangan narxi.", m: "xalqaro-moliya" },
    { t: "XQP", en: "Purchasing power parity", d: "Xarid qobiliyati pariteti: uzoq muddatda kurs narxlar darajalari nisbatiga intiladi degan nazariya.", m: "xalqaro-moliya" },
    { t: "Xalqaro mehnat taqsimoti", en: "International division of labour", d: "Mamlakatlarning muayyan mahsulotlarga ixtisoslashuvi va ular oʻrtasida ayirboshlash.", m: "jahon-iqtisodiyoti" },
    { t: "XVF", en: "IMF", d: "Xalqaro valyuta fondi — valyuta barqarorligi va toʻlov balansini qoʻllab-quvvatlovchi tashkilot (1944).", m: "xalqaro-tashkilotlar" },
    { t: "YaIM", en: "GDP", d: "Yalpi ichki mahsulot: mamlakat hududida bir yilda yaratilgan yakuniy tovar va xizmatlar qiymati.", m: "jahon-iqtisodiyoti" }
  ]
};
