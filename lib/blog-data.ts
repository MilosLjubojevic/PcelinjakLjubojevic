export type BlogSection = {
  icon: string;
  title: string;
  image: { src: string; alt: string };
  content: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  heroImage: string;
  heroAlt: string;
  images: { src: string; alt: string; caption?: string }[];
  content: string[];
  sections?: BlogSection[];
};

export const posts: BlogPost[] = [
  {
    slug: "vodic-za-pcelarstvo",
    title: "Vodič za Pčelarstvo: Kompletni Priručnik",
    excerpt:
      "Pouzdani saveti i smernice za uspešno pčelarenje — od potrebne opreme i odabira lokacije, preko sezonskog upravljanja košnicama, do borbe protiv bolesti i pripreme za zimu.",
    date: "Feb 21, 2026",
    category: "Education",
    heroImage: "/images/pcelinjak/SlikaPcelinjakaUSumi.jpg",
    heroAlt: "Pčelinjak okružen šumom i raznovrsnom florom",
    images: [
      {
        src: "/images/pcelinjak/SlikaLeglaURamu.jpg",
        alt: "Ram sa leglom — zdrave larve u košnici",
        caption: "Zdravo leglo je osnova jake pčelinje zajednice.",
      },
      {
        src: "/images/pcelinjak/SlikaRamaSaMedom.jpg",
        alt: "Ram pun meda spreman za vrcanje",
        caption: "Dovoljne zalihe meda osiguravaju uspešno prezimljavanje.",
      },
    ],
    content: [
      "Pčelarstvo je drevna veština koja i danas ima izuzetan značaj za očuvanje životne sredine i zaštitu oprašivača. Sa preko 40 godina iskustva, donosimo vam sveobuhvatan vodič za uspešno pčelarenje — od samih početaka do naprednih tehnika upravljanja košnicama.",
    ],
    sections: [
      {
        icon: "Wrench",
        title: "Potrebna oprema i alat",
        image: {
          src: "/images/educationBlog/BeeKeeperEquipment.png",
          alt: "Pčelarska oprema — zaštitno odelo, dimilica i alat za košnice",
        },
        content: [
          "Zaštitna oprema podrazumeva pčelarsko odelo ili jaknu, šešir sa mrežicom, rukavice i čizme za zaštitu od uboda.",
          "Osnovni delovi košnice su nastavci (preporučeno LR veličina), zbeg, podnjača, krov i 10 ramova.",
          "Od alata su neophodni pčelarski nož, dimilica, četkica za pčele i hranilica za dodatnu ishranu.",
        ],
      },
      {
        icon: "MapPin",
        title: "Odabir prave lokacije",
        image: {
          src: "/images/educationBlog/BeekepingImage.png",
          alt: "Pčelinjak na idealnoj lokaciji u šumi",
        },
        content: [
          "Pravilno odabran pčelinjak je osnova uspešnog pčelarenja. Lokacija direktno utiče na zdravlje pčela, količinu meda i dugoročnu održivost.",
          "Ključni faktori su: udaljenost od zagađenja i saobraćajnica, bogata paša sa raznovrsnim biljem koje cveta tokom cele sezone, zaštita od vetra prirodnom šumom ili brdom, izloženost jutarnjem suncu, stalna dostupnost vode ili pojilice, kao i laka pristupačnost vozilom za transport opreme.",
        ],
      },
      {
        icon: "CalendarDays",
        title: "Pčele tokom cijele godine",
        image: {
          src: "/images/educationBlog/Beesinbeehive.jpg",
          alt: "Pčele u letu tokom aktivne sezone",
        },
        content: [
          "Proleće — Sezona počinje pregledom pčela — stanja legla i zdravlja društva. Vrši se stimulativna prihrana sirupom (1 kg šećera + 1 l vode). Kako se zajednica razvija, dodaju se nastavci za proširenje košnica. Ključno je praćenje matičnjaka radi kontrole rojenja, uz preventivne mere zaštite od bolesti.",
          "Leto — Krajem maja ili početkom juna vrši se vrcanje meda. Tokom leta je potrebno redovno održavanje košnica — kontrola rojenja i bolesti, te obezbeđivanje dovoljno vode za pčele.",
          "Jesen — Postupno se pripremaju pčele za zimu. Kontroliše se količina hrane i po potrebi dodaje sirup ili pogače. Ovo je ključni period za lečenje varoe. Smanjuje se vlaga dobrom ventilacijom, a ulaz se sužava na maksimalno 6 mm radi zaštite od glodara.",
          "Zima — Pčele miruju i ne treba ih ometati. Potrebno je čistiti ulaz od snega i leda, obezbediti dobru izolaciju i zaštitu od vetra. Krajem zime vrši se pregled radi pripreme za prolećnu sezonu.",
        ],
      },
      {
        icon: "Droplets",
        title: "Vrcanje meda",
        image: {
          src: "/images/educationBlog/UncappingHoney.png",
          alt: "Otvoren ram pun meda spreman za vrcanje",
        },
        content: [
          "Vrcanje meda predstavlja jedan od najvažnijih i najlepših koraka u pčelarstvu. Med se vrca kada je najmanje 80% saća u ramu poklopljeno voštanim poklopcima — to znači da su pčele smanjile vlažnost meda ispod 18% i da je spreman za dugoročno skladištenje bez fermentacije.",
          "Za vrcanje je potrebna vrcaljka za med — za početnike se preporučuje ručna vrcaljka, dok veći pčelinjaci koriste električne vrcaljke za brži rad. Pčelarska viljuška služi za otklapanje voštanih poklopčića sa saća, a cediljke za filtriranje voska i nečistoća iz svežeg meda.",
          "Za skladištenje meda koriste se plastične kante za prehrambenu upotrebu. Ove kante su lagane, pristupačne i bezbedne za čuvanje meda, a dolaze u različitim zapreminama — od 10 do 40 litara. Važno je da med nikada ne dolazi u kontakt sa običnom plastikom ili metalima koji mogu oksidirati.",
        ],
      },
      {
        icon: "Users",
        title: "Rojenje pčela",
        image: {
          src: "/images/educationBlog/QueenBee.jpg",
          alt: "Matica okružena pčelama na saću",
        },
        content: [
          "Rojenje je prirodan proces razmnožavanja pčelinjih zajednica, ali za pčelare često predstavlja izazov.",
          "Glavni razlozi su: prevelika populacija (košnica postane pretrpana), nedostatak hrane (nema dovoljno nektara i polena), stara matica koja slabi i proizvodi manje feromona, te toplo i mirno vreme u maju i junu.",
        ],
      },
      {
        icon: "ShieldAlert",
        title: "Bolesti i paraziti",
        image: {
          src: "/images/educationBlog/AmerickaTrulez.jpg",
          alt: "Pregled legla u ramu za znake bolesti",
        },
        content: [
          "Krečno leglo je gljivična bolest čiji su simptomi mumificirane larve bele ili sive boje; leči se dobrom ventilacijom i uklanjanjem zaraženog saća.",
          "Američka trulež je bakterijska bolest sa smeđim, lepljivim larvama i neprijatnim mirisom; zahteva spaljivanje košnica i dezinfekciju alata.",
          "Varroa destructor je parazit koji uzrokuje slabe pčele i deformisana krila; tretira se kiselinama i biotehničkim metodama.",
        ],
      },
      {
        icon: "Snowflake",
        title: "Priprema za zimu",
        image: {
          src: "/images/educationBlog/HoneyBees.jpg",
          alt: "Ram sa zalihama meda za zimu",
        },
        content: [
          "Zazimljavanje je proces pripreme pčelinjih društava za hladne zimske mesece.",
          "Ključni koraci su: poslednji jesenji tretman protiv varoe, obezbeđivanje 15–20 kg kvalitetne zimske zalihe hrane, smanjivanje leta radi zaštite od miševa, dobra ventilacija za sprečavanje vlage i izolacija za očuvanje temperature.",
          "Česte greške su nedovoljna količina hrane, zakašnjelo lečenje protiv varoe i loša ventilacija.",
          "Vremenski plan: u avgustu počinje priprema, u septembru se vrše tretmani i prihrana, a u oktobru završne pripreme.",
        ],
      },
      {
        icon: "HelpCircle",
        title: "Najčešća pitanja",
        image: {
          src: "/images/educationBlog/bee.jpg",
          alt: "Pčele na cvetu — početak pčelarstva",
        },
        content: [
          "Za početnike se preporučuju 2 do 3 košnice kako biste mogli učiti i upoređivati razvoj zajednica.",
          "Proleće je idealno vreme za početak pčelarstva jer pčele tada počinju da razvijaju zajednice.",
          "Prvo vrcanje meda se obično vrši krajem maja ili početkom juna, zavisno od paše.",
        ],
      },
    ],
  },
  {
    slug: "spring-hive-inspections",
    title: "Prolećni Pregled Košnica: Šta Proveriti u Pčelinjaku",
    excerpt:
      "Proleće je najvažniji period u godini za svakog pčelara. Saznajte šta proveriti tokom prolećnog pregleda košnica, kada ga obaviti i na šta posebno obratiti pažnju u uslovima Bosne i Hercegovine.",
    date: "Mar 12, 2026",
    category: "Hive Management",
    heroImage: "/images/pcelinjak/SlikaPceleNaLetu.jpg",
    heroAlt: "Pčele na letu ispred košnice — prolećni pregled pčelinjaka",
    images: [
      {
        src: "/images/pcelinjak/SlikaLeglaURamu.jpg",
        alt: "Ram sa leglom — zdrave larve u košnici",
        caption: "Kompaktno leglo je znak kvalitetne matice i jakog društva.",
      },
      {
        src: "/images/pcelinjak/SlikaMaticeSaLeglom.jpg",
        alt: "Pčelinja matica okružena pčelama na saću",
        caption: "Pronalaženje matice tokom prolećnog pregleda.",
      },
    ],
    content: [
      "Proleće je najvažniji period u godini za svakog pčelara. Nakon duge zime, prolećni pregled košnica određuje snagu pčelinjih društava, količinu meda u sezoni i opšte zdravlje pčela. U uslovima klimatskih prilika kakve imamo u Bosni i Hercegovini – od ravničarskih predela Semberije do planinskih krajeva – pravilno obavljen pregled može značiti razliku između prosečne i vrhunske sezone.",
    ],
    sections: [
      {
        icon: "CalendarDays",
        title: "Kada raditi prolećni pregled košnica u BiH?",
        image: {
          src: "/images/educationBlog/Beesinbeehive.jpg",
          alt: "Pčele u košnici — idealno vreme za prolećni pregled",
        },
        content: [
          "U većem delu Bosne i Hercegovine, prvi detaljniji pregled se obavlja kada temperatura pređe 15°C i kada nema jakog vetra. U ravničarskim krajevima poput Bijeljine to je najčešće krajem marta ili početkom aprila, dok u planinskim krajevima poput Tuzle i višim nadmorskim visinama pregled može kasniti 1–2 nedelje.",
          "Idealno vreme za pregled je sunčan dan bez vetra, između 11h i 16h.",
        ],
      },
      {
        icon: "Users",
        title: "Snaga pčelinjeg društva",
        image: {
          src: "/images/pcelinjak/SlikaPceleNaLetu.jpg",
          alt: "Aktivno pčelinje društvo — pčele na letu",
        },
        content: [
          "Prva i najvažnija stavka je procena snage društva. Proverite koliko ramova pokrivaju pčele, da li je leglo kompaktno i ima li dovoljno mladih pčela.",
          "Jako društvo u proleće znači dobru pripremu za bagremovu pašu, koja je ključna za proizvodnju bagremovog meda u Bosni i Hercegovini.",
        ],
      },
      {
        icon: "Crown",
        title: "Prisustvo i kvalitet matice",
        image: {
          src: "/images/educationBlog/QueenBee.jpg",
          alt: "Pčelinja matica na saću — provera kvaliteta matice",
        },
        content: [
          "Proverite da li ima svežih jaja, da li je leglo pravilno raspoređeno i ima li praznih ćelija u sredini legla.",
          "Nepravilan raspored može ukazivati na problem sa maticom. U tom slučaju potrebno je pravovremeno reagovati kako bi se društvo osnažilo pre glavne paše.",
        ],
      },
      {
        icon: "Droplets",
        title: "Količina hrane (med i polen)",
        image: {
          src: "/images/pcelinjak/SlikaRamaSaMedom.jpg",
          alt: "Ram sa medom — zalihe hrane za proleće",
        },
        content: [
          "Jedan od čestih problema u proleće u BiH jeste nedostatak hrane zbog promenljivih vremenskih uslova. Proverite zalihe meda (minimum 6–8 kg u ranom proleću) i prisustvo polena.",
          "Ako je potrebno, izvršite prihranu pogačama ili sirupom u skladu sa vremenskim uslovima. U regionima sa ranom vegetacijom, poput Semberije, unos polena počinje ranije, dok u planinskim predelima kasni.",
        ],
      },
      {
        icon: "ShieldAlert",
        title: "Zdravstveno stanje pčela",
        image: {
          src: "/images/educationBlog/Varroa.jpg",
          alt: "Varoa parazit na pčeli — kontrola zdravlja pčela",
        },
        content: [
          "Tokom prolećnog pregleda obavezno proverite prisustvo varoe, znake nozemoze, deformisana krila i neobično ponašanje pčela.",
          "Redovna kontrola i tretman protiv varoe su ključni za uspešno pčelarenje u Bosni i Hercegovini.",
        ],
      },
      {
        icon: "Wrench",
        title: "Čistoća i stanje košnice",
        image: {
          src: "/images/educationBlog/BeeHiveComponents.png",
          alt: "Delovi košnice — održavanje i čišćenje opreme",
        },
        content: [
          "Proleće je idealno vreme za uklanjanje podnjače i čišćenje mrtvih pčela, dezinfekciju opreme, zamenu oštećenih ramova, te sužavanje ili proširivanje prostora prema jačini društva.",
          "Dobra higijena direktno utiče na zdravlje pčela i prinos meda.",
        ],
      },
      {
        icon: "MapPin",
        title: "Planiranje proširenja društva",
        image: {
          src: "/images/pcelinjak/SlikaPcelinjakaUSumi.jpg",
          alt: "Pčelinjak u šumi — priprema za proširenje društava",
        },
        content: [
          "Ako je društvo jako, potrebno je dodati satne osnove, proširiti plodište i pripremiti medišta pre bagremove paše.",
          "U BiH je bagremova paša najvažnija, ali i livadska i suncokretova paša imaju značajan potencijal, posebno u ravničarskim delovima zemlje.",
        ],
      },
      {
        icon: "HelpCircle",
        title: "Najčešće greške i zaključak",
        image: {
          src: "/images/educationBlog/bee.jpg",
          alt: "Pčela na cvetu — uspešno pčelarenje počinje u proleće",
        },
        content: [
          "Predugo držanje košnice otvorene tokom pregleda može ohladiti leglo i stresirati pčele.",
          "Pregled po hladnom i vetrovitom vremenu može nanijeti više štete nego koristi.",
          "Preuranjeno proširivanje prostora slabi društvo jer pčele ne mogu održavati temperaturu.",
          "Ignorisanje slabih društava dovodi do gubitaka — bolje ih je spojiti sa jakim.",
          "Klima u BiH je promenljiva — topla proleća često prekidaju hladni talasi. Dobro pripremljeno društvo znači veći prinos meda, manje bolesti, manje rojenja i jača društva tokom cele godine. Prolećni pregled košnica nije samo rutina — to je temelj uspešne pčelarske sezone.",
        ],
      },
    ],
  },
  {
    slug: "art-of-extracting-raw-honey",
    title: "Umetnost Vrcanja Sirovog Meda u Bosni i Hercegovini",
    excerpt:
      "Vrcanje sirovog meda predstavlja jedan od najvažnijih trenutaka u pčelarskoj sezoni. Saznajte kako pravilno vrcati med — od određivanja pravog trenutka do skladištenja.",
    date: "Feb 28, 2026",
    category: "Harvest",
    heroImage: "/images/pcelinjak/SlikaOtvorenogMedauRamu.jpg",
    heroAlt: "Otvoren ram pun meda — sirovi med spreman za vrcanje",
    images: [
      {
        src: "/images/pcelinjak/SlikaZatvorenogMedaURamu.jpg",
        alt: "Poklopljene ćelije sa medom — ram spreman za vrcanje",
        caption: "Poklopljene ćelije — pčele su završile svoj posao.",
      },
      {
        src: "/images/pcelinjak/SlikaMedaUKanti.jpeg",
        alt: "Svježe izvrcan med u kanti",
        caption: "Tečno zlato direktno iz vrcaljke, spremno za odležavanje.",
      },
    ],
    content: [
      "Vrcanje sirovog meda predstavlja jedan od najvažnijih trenutaka u pčelarskoj sezoni. U Bosni i Hercegovini, gde su bagrem, livada i suncokret dominantne paše, pravilno vrcanje direktno utiče na kvalitet, aromu i nutritivnu vrednost meda. Ako želite vrhunski domaći sirovi med iz Bosne i Hercegovine, neophodno je razumeti ceo proces – od određivanja pravog trenutka za vrcanje do pravilnog skladištenja.",
    ],
    sections: [
      {
        icon: "Droplets",
        title: "Šta je sirovi med?",
        image: {
          src: "/images/pcelinjak/SlikaRamaSaMedom.jpg",
          alt: "Ram pun meda — čist, sirovi med direktno iz košnice",
        },
        content: [
          "Sirovi med je med koji nije termički obrađen, nije pasterizovan i nije filtriran kroz fine industrijske filtere. To znači da zadržava prirodne enzime, polen, vitamine, minerale, prirodnu aromu i boju.",
          "U Bosni i Hercegovini potražnja za sirovim medom raste, jer potrošači sve više traže prirodan med direktno od pčelara.",
        ],
      },
      {
        icon: "CalendarDays",
        title: "Kada je pravo vreme za vrcanje meda u BiH?",
        image: {
          src: "/images/educationBlog/Beesinbeehive.jpg",
          alt: "Pčele u košnici — praćenje sazrevanja meda",
        },
        content: [
          "Pravilno određivanje vremena za vrcanje je ključno. Bagremov med se najčešće vrca krajem maja ili početkom juna, livadski med tokom juna i jula, a suncokretov med u julu.",
          "U ravničarskim krajevima poput Bijeljine, bagrem cveta ranije nego u višim predelima. U centralnim i planinskim delovima kao što je Zenica, paša može kasniti i do dve nedelje.",
          "Med je spreman za vrcanje kada su ćelije sa medom najmanje 80% poklopljene voskom.",
        ],
      },
      {
        icon: "Wrench",
        title: "Priprema za vrcanje meda",
        image: {
          src: "/images/educationBlog/UncappingHoney.png",
          alt: "Oprema za vrcanje meda — nož za otklapanje i vrcaljka",
        },
        content: [
          "Profesionalno vrcanje meda zahteva čistu i dezinfikovanu prostoriju, vrcaljku (ručnu ili električnu), nož ili viljušku za otklapanje saća, cediljke za grubo filtriranje i posude od inoksa za skladištenje.",
          "Higijena je presudna za kvalitet sirovog meda. U Bosni i Hercegovini sve više pčelara prelazi na inox opremu kako bi očuvali čistoću i standarde proizvodnje.",
        ],
      },
      {
        icon: "MapPin",
        title: "Proces vrcanja – korak po korak",
        image: {
          src: "/images/pcelinjak/SlikaOtvorenogMedauRamu.jpg",
          alt: "Otvoren ram sa medom — proces vrcanja",
        },
        content: [
          "Medišta se skidaju pažljivo kako bi se izbeglo uznemiravanje pčela. Zatim se vosak uklanja nožem ili viljuškom, čime se otvaraju ćelije pune meda.",
          "Ramovi se postavljaju u vrcaljku gde se med centrifugalnom silom izbacuje iz saća. Sirovi med se potom procedi kroz grubu cediljku kako bi se uklonili komadići voska, ali bez uklanjanja polena.",
          "Na kraju, med se ostavlja 2–3 dana u inox posudama da se mehurići vazduha i sitne nečistoće podignu na površinu.",
        ],
      },
      {
        icon: "ShieldAlert",
        title: "Zašto ne treba zagrevati sirovi med?",
        image: {
          src: "/images/pcelinjak/SlikaMedaUKanti.jpeg",
          alt: "Svježe izvrcan sirovi med — bez termičke obrade",
        },
        content: [
          "U industrijskoj proizvodnji med se često zagreva kako bi bio tečniji i duže ostao u tom stanju. Međutim, temperature iznad 40°C uništavaju enzime (invertazu, dijastazu), deo antioksidanasa i prirodna antibakterijska svojstva.",
          "Zato pravi sirovi med iz Bosne i Hercegovine nikada ne prolazi kroz visoku termičku obradu.",
        ],
      },
      {
        icon: "Crown",
        title: "Specifičnosti vrcanja bagremovog meda u BiH",
        image: {
          src: "/images/pcelinjak/SlikaZatvorenogMedaURamu.jpg",
          alt: "Poklopljeni ramovi sa bagremovim medom",
        },
        content: [
          "Bagrem je najvažnija paša u našoj zemlji. U godinama kada mraz ne ošteti cvet, prinosi mogu biti izuzetni. Kvalitetan bagremov med treba da bude svetle, gotovo providne boje, blagog mirisa i sporije kristalizacije.",
          "Zbog čestih prolećnih kiša u BiH, vlaga u medu može biti povećana. Idealna vlažnost meda je ispod 18%. Profesionalni pčelari koriste refraktometar za proveru.",
        ],
      },
      {
        icon: "Snowflake",
        title: "Skladištenje sirovog meda",
        image: {
          src: "/images/educationBlog/HoneyBees.jpg",
          alt: "Pravilno skladištenje meda — dugotrajna svežina",
        },
        content: [
          "Nakon vrcanja, med treba čuvati u inox ili staklenim posudama, na temperaturi 15–20°C, u tamnoj prostoriji.",
          "Pravilno skladišten med može trajati godinama bez gubitka kvaliteta.",
        ],
      },
      {
        icon: "HelpCircle",
        title: "Zaključak",
        image: {
          src: "/images/educationBlog/BeekepingImage.png",
          alt: "Pčelar na pčelinjaku — tradicija proizvodnje sirovog meda",
        },
        content: [
          "Umetnost vrcanja sirovog meda u Bosni i Hercegovini zahteva znanje, iskustvo i poštovanje prirodnih procesa. Pravilno određivanje trenutka vrcanja, očuvanje enzima i pravilno skladištenje garantuju vrhunski kvalitet.",
          "U zemlji bogatoj prirodnim pašnjacima i raznovrsnom florom, proizvodnja sirovog meda nije samo posao – to je tradicija i odgovornost prema kupcima.",
        ],
      },
    ],
  },
  {
    slug: "why-bees-matter",
    title: "Why Bees Matter: Pollination & Biodiversity",
    excerpt:
      "Honeybees pollinate over a third of the food we eat. Learn why protecting pollinators is essential for our ecosystem and food supply.",
    date: "Jan 15, 2026",
    category: "Education",
    heroImage: "/images/pcelinjak/SlikaPceleNaEvodiji.jpg",
    heroAlt: "Honeybees foraging on flowers, pollinating the local flora",
    images: [
      {
        src: "/images/pcelinjak/SlikaPcelinjakaUSumi.jpg",
        alt: "Bee yard surrounded by diverse flora in the forest",
        caption:
          "Our apiaries are placed in biodiverse areas to support healthy pollination.",
      },
      {
        src: "/images/pcelinjak/SlikaPceleNaLetu.jpg",
        alt: "Bees returning to the hive loaded with pollen",
        caption:
          "Bees returning from foraging — each trip pollinates dozens of flowers.",
      },
    ],
    content: [
      "When most people think of bees, they think of honey. But the true value of bees extends far beyond the golden liquid in your jar. Bees are among the most important creatures on our planet, and their decline poses a serious threat to global food security and biodiversity.",
      "Approximately 75% of the world's flowering plants and about 35% of global food crops depend on animal pollinators, with bees being the most significant. From apples and almonds to blueberries and coffee, countless foods we enjoy daily rely on bee pollination.",
      "The economic value of pollination services is staggering. Globally, pollinator-dependent crops are worth over €150 billion annually. Without bees, the cost of food production would skyrocket, and many fruits and vegetables would become scarce luxury items.",
      "Beyond agriculture, bees play a crucial role in maintaining wild ecosystems. They pollinate wildflowers that provide food and habitat for other wildlife. The seeds and fruits that result from pollination feed birds, small mammals, and insects — creating a cascade of ecological benefits.",
      "Unfortunately, bee populations worldwide are under pressure. Habitat loss, pesticide exposure, climate change, diseases, and parasites like the Varroa mite all contribute to declining bee numbers. Colony losses in some regions have reached alarming levels.",
      "As beekeepers, we're on the front lines of this challenge. We manage our hives with minimal chemical intervention, maintain diverse forage areas around our apiaries, and participate in breeding programs that select for disease-resistant bee strains.",
      "But protecting bees isn't just a job for beekeepers. Everyone can help: plant pollinator-friendly flowers, reduce pesticide use in gardens, support local beekeepers by buying raw honey, and advocate for policies that protect pollinator habitats.",
      "The relationship between bees and humans is ancient and profound. By protecting these remarkable insects, we're not just saving a species — we're safeguarding the very foundation of our food system and the biodiversity that sustains all life on Earth.",
    ],
  },
  {
    slug: "overwintering-colonies",
    title: "Prezimljavanje Pčela u Bosni i Hercegovini – Stručni Vodič",
    excerpt:
      "Stručni vodič za prezimljavanje pčela u Bosni i Hercegovini. Savjeti iz prakse Pčelarske farme Ljubojević: tretman varoe, ishrana, ventilacija i sprečavanje zimskih gubitaka.",
    date: "Nov 8, 2025",
    category: "Seasonal Care",
    heroImage: "/images/pcelinjak/SlikaPcelinjakaUSumi.jpg",
    heroAlt: "Pčelinjak u šumi — priprema košnica za prezimljavanje",
    images: [
      {
        src: "/images/pcelinjak/SlikaRamaSaMedom.jpg",
        alt: "Ram sa medom — zalihe hrane za prezimljavanje pčela",
        caption: "Dovoljne zalihe meda su temelj uspješnog prezimljavanja.",
      },
      {
        src: "/images/pcelinjak/SlikaRegistracijePcelinjaka.jpg",
        alt: "Registrovani pčelinjak sa održavanim košnicama",
        caption:
          "Pravilno održavane košnice pomažu društvima da prežive hladne mjesece.",
      },
    ],
    content: [
      "Prezimljavanje pčelinjih društava predstavlja najosjetljiviji i najodgovorniji segment godišnjeg ciklusa upravljanja pčelinjakom. Zimski gubici ne nastaju slučajno – oni su posljedica odluka i postupaka sprovedenih tokom aktivne sezone. Na Pčelarskoj farmi Ljubojević, sa sjedištem u Bijeljini, prezimljavanje se planira sistematski i dugoročno. Sa preko 40 godina porodične tradicije i oko 200 košnica, naš pristup se zasniva na stručnim principima, kontinuiranoj kontroli zdravstvenog stanja društava i prilagođavanju lokalnim klimatskim uslovima područja Semberije.",
    ],
    sections: [
      {
        icon: "Snowflake",
        title: "Klimatske specifičnosti Bosne i Hercegovine",
        image: {
          src: "/images/pcelinjak/SlikaPcelinjakaUSumi.jpg",
          alt: "Pčelinjak u zimskim uslovima — klimatski izazovi u BiH",
        },
        content: [
          "Područje sjeveroistočne Bosne karakterišu dugotrajni mrazevi, povećana relativna vlažnost vazduha, česta magla tokom zimskih mjeseci i izražene temperaturne oscilacije.",
          "U takvim uslovima, prezimljavanje pčela zahtijeva pažljivo balansiranje između ventilacije, izolacije i obezbjeđenja adekvatnih zaliha hrane.",
          "Važno je naglasiti da pčele ne stradaju primarno od niskih temperatura, već od visoke infestacije varoom, nedovoljnih ili loše raspoređenih zaliha hrane, te prekomjerne vlage i kondenzacije unutar košnice. Zbog toga je prezimljavanje kombinacija pravilne ishrane, kontrole parazita i dobre ventilacije.",
        ],
      },
      {
        icon: "Users",
        title: "Formiranje snažnih zimskih društava",
        image: {
          src: "/images/pcelinjak/SlikaMaticeSaLeglom.jpg",
          alt: "Pčelinja matica sa leglom — priprema jakih društava za zimu",
        },
        content: [
          "U zimski period ulaze isključivo jaka i vitalna društva. Profesionalni pristup podrazumijeva procjenu kvaliteta svake zajednice tokom kasnog ljeta i rane jeseni.",
          "Parametri društva spremnog za prezimljavanje: mlada i produktivna matica, 8–10 ramova pčela (LR sistem), kompaktno i pravilno raspoređeno leglo, te zdravstveno stabilno stanje bez znakova bolesti.",
          "Slaba društva se ne ostavljaju da samostalno prezime, već se pravovremeno spajaju sa jačim zajednicama. Ovakva praksa smanjuje rizik zimskih gubitaka i optimizuje snagu pčelinjaka u proljeće.",
          "Zimske pčele, koje se formiraju krajem ljeta, fiziološki su prilagođene dugovječnosti zahvaljujući povećanim masnim rezervama i drugačijem metabolizmu. Njihov kvalitet presudan je za stabilno prezimljavanje.",
        ],
      },
      {
        icon: "Droplets",
        title: "Ishrana i pravilno formiranje zaliha",
        image: {
          src: "/images/pcelinjak/SlikaRamaSaMedom.jpg",
          alt: "Ram sa medom — zalihe hrane za prezimljavanje",
        },
        content: [
          "U klimatskim uslovima Bosne i Hercegovine, optimalne zalihe hrane iznose 15–20 kg meda po košnici. Alternativno, adekvatna količina sirupa (odnos 2:1) tokom septembra.",
          "Prihrana mora biti završena najkasnije do kraja septembra, kako bi pčele imale dovoljno vremena za preradu i pravilno skladištenje hrane.",
          "Posebna pažnja posvećuje se rasporedu ramova: leglo se pozicionira centralno, medni ramovi se raspoređuju bočno i iznad, te se obezbjeđuju dovoljne količine polena.",
          "Nepravilan raspored može dovesti do pojave gladi uprkos nominalno dovoljnim zalihama. Glad u januaru i februaru je jedan od najčešćih uzroka zimskih gubitaka u Bosni i Hercegovini.",
        ],
      },
      {
        icon: "ShieldAlert",
        title: "Tretman protiv varoe – strategija tokom cijele godine",
        image: {
          src: "/images/educationBlog/Varroa.jpg",
          alt: "Varoa parazit — ključni faktor zimskih gubitaka pčela",
        },
        content: [
          "Varoa predstavlja najznačajniji zdravstveni izazov savremenog pčelarstva i vodeći uzrok zimskih gubitaka. Bez sistematske kontrole nema stabilnog pčelinjaka. Na Pčelarskoj farmi Ljubojević tretman protiv varoe sprovodi se planski i kontinuirano tokom cijele godine.",
          "Ljetna kontrola je ključni segment strategije. Nakon završetka glavne paše i vrcanja meda, tokom ljeta primjenjujemo HerbaStrip letvice. Primjena u ovom periodu smanjuje nivo infestacije prije formiranja zimskih pčela, obezbjeđuje zdravu generaciju dugovječnih pčela i stabilizuje zdravstveno stanje društva prije ulaska u jesen.",
          "U periodu minimalnog ili potpunog izostanka legla primjenjuje se jesenja završna kontrola (najčešće oksalnom kiselinom), čime se postiže maksimalna efikasnost.",
          "Kontinuirano praćenje infestacije i rotacija sredstava sprječavaju razvoj otpornosti varoe. Najveća greška je tretirati samo jednom godišnje.",
        ],
      },
      {
        icon: "Wrench",
        title: "Ventilacija i upravljanje vlagom",
        image: {
          src: "/images/educationBlog/BeeHiveComponents.png",
          alt: "Dijelovi košnice — ventilacija i kontrola vlage tokom zime",
        },
        content: [
          "U ravničarskim područjima poput Semberije, vlaga predstavlja veći rizik od hladnoće. Stručni pristup podrazumijeva blago otvoreno leto, obezbijeđenu gornju ventilaciju, kvalitetnu izolaciju iznad poklopne daske i suvu i funkcionalnu podnjaču.",
          "Cilj nije hermetičko zatvaranje košnice, već omogućavanje prirodne cirkulacije vazduha bez promaje i naglih temperaturnih šokova.",
          "Kondenzacija koja kaplje direktno po zimskom klubetu može ugroziti i snažna društva.",
        ],
      },
      {
        icon: "MapPin",
        title: "Pravilno formiranje zimskog gnezda",
        image: {
          src: "/images/pcelinjak/SlikaLeglaURamu.jpg",
          alt: "Ram sa leglom — pravilno formiranje zimskog gnezda",
        },
        content: [
          "U jesen se posebna pažnja posvećuje rasporedu unutar košnice: leglo ostaje u sredini, ramovi sa medom raspoređuju se sa strane i iznad, te se obezbjeđuju dovoljne količine polena.",
          "Pčele se tokom zime pomjeraju kroz hranu. Loš raspored može dovesti do gladi uprkos dovoljnim zalihama.",
        ],
      },
      {
        icon: "Crown",
        title: "Zaključak – Uspješno prezimljavanje počinje u ljetnom periodu",
        image: {
          src: "/images/pcelinjak/SlikaPcelinjakaZaRojeve.jpg",
          alt: "Pčelinjak — stabilno prezimljavanje i snažan proljetni razvoj",
        },
        content: [
          "Stabilno prezimljavanje pčelinjih društava nije rezultat jedne intervencije u zimskim mjesecima, već sistematskog rada tokom cijele aktivne sezone.",
          "Na Pčelarskoj farmi Ljubojević prezimljavanje se temelji na pravovremenoj ljetnoj kontroli varoe, formiranju zdravih zimskih pčela, preciznom planiranju zaliha hrane, održavanju jakih i vitalnih društava, te kontroli ventilacije i vlage.",
          "Snaga pčelinjih društava u januaru i februaru određuje se kvalitetom rada u julu, avgustu i septembru. Upravo taj princip predstavlja osnov dugoročne stabilnosti pčelinjaka u Bosni i Hercegovini.",
          "Najčešći uzroci zimskih gubitaka su: nedovoljan tretman protiv varoe, slaba društva, nedovoljno hrane, kondenzacija i vlaga, te stare i nekvalitetne matice. Problemi koji se pojave u januaru najčešće su posljedica grešaka napravljenih u avgustu.",
        ],
      },
      {
        icon: "HelpCircle",
        title: "Najčešća pitanja",
        image: {
          src: "/images/educationBlog/bee.jpg",
          alt: "Pčele — najčešća pitanja o prezimljavanju",
        },
        content: [
          "Koliko hrane je potrebno za prezimljavanje pčela u Bosni i Hercegovini? Preporučuje se 15–20 kg meda po košnici, u zavisnosti od jačine društva i lokalnih klimatskih uslova.",
          "Kada je najvažniji tretman protiv varoe? Najvažniji je ljetni tretman nakon vrcanja meda, jer direktno utiče na kvalitet zimskih pčela. Završni tretman se sprovodi u kasnu jesen kada je leglo minimalno.",
          "Da li pčele stradaju od hladnoće? Pčele su prirodno prilagođene niskim temperaturama. Najčešći uzrok zimskih gubitaka su varoa, glad i kondenzacija unutar košnice.",
          "Da li košnicu treba potpuno zatvoriti zimi? Ne. Potpuno zatvaranje povećava vlagu. Potrebna je kontrolisana ventilacija kako bi se spriječilo zadržavanje vlage bez promaje.",
          "Kada dodavati pogaču? Pogača se dodaje u februaru ili kada se procijeni da su zalihe hrane pri kraju, direktno iznad klubeta.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
