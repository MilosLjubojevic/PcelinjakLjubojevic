export type BlogSection = {
  icon: string;
  title: string;
  image: {
    src: string;
    alt: string;
    objectPosition?: string;
    wideCrop?: boolean;
  };
  content: string[];
  /** When provided, each entry pairs with the content paragraph at the same index */
  contentImages?: { src: string; alt: string }[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  lastModified?: string;
  category: string;
  heroImage: string;
  heroAlt: string;
  heroObjectPosition?: string;
  images: { src: string; alt: string; caption?: string }[];
  content: string[];
  sections?: BlogSection[];
  cta?: { text: string; href: string };
  relatedSlugs?: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "vodic-za-pcelarstvo",
    title: "Vodič za Pčelarstvo za Početnike i Iskusne Pčelare (2026)",
    excerpt:
      "Sve što trebate znati o pčelarstvu — oprema za početnike, odabir lokacije pčelinjaka, sezonsko upravljanje košnicama, vrcanje meda, liječenje bolesti i prezimljavanje pčela. Praktičan priručnik sa 40+ godina iskustva.",
    date: "2026-02-21",
    category: "Edukacija",
    heroImage: "/images/educationBlog/BeekepingImage.jpg",
    heroAlt: "Pčelar na pčelinjaku — vodič za pčelarstvo za početnike",
    heroObjectPosition: "center top",
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
      "Pčelarstvo je jedna od najstarijih poljoprivrednih djelatnosti koja i danas igra ključnu ulogu u oprašivanju biljaka, proizvodnji meda i očuvanju biodiverziteta. Bez pčela, trećina hrane koju jedemo jednostavno ne bi postojala. Ovaj kompletni vodič za pčelarstvo nastao je na osnovu preko 40 godina praktičnog iskustva na pčelinjaku Ljubojević — od nabavke prve košnice, preko sezonskog upravljanja, vrcanja meda, zaštite od bolesti, pa sve do uspješnog prezimljavanja. Bilo da ste potpuni početnik ili iskusan pčelar koji želi osvježiti znanje, ovdje ćete naći provjerene savjete koji daju rezultate.",
    ],
    sections: [
      {
        icon: "Wrench",
        title: "Potrebna oprema i alat za pčelarstvo",
        image: {
          src: "/images/educationBlog/BeeKeeperEquipment.jpg",
          alt: "Pčelarska oprema za početnike — zaštitno odelo, dimilica i alat za košnice",
        },
        content: [
          "Zaštitna oprema je prvi i najvažniji korak za svakog pčelara. Kvalitetno pčelarsko odelo ili jakna, šešir sa mrežicom, kožne rukavice i gumene čizme štite vas od uboda i omogućavaju siguran rad na košnicama. Početniku preporučujemo kompletno bijelo odelo jer tamne boje mogu iritirati pčele.",
          "Osnova svake košnice su nastavci (LR sistem je najrasprostranjeniji u BiH i regionu), zbeg za maticu, podnjača, krov i 10 ramova sa žicom i satnim osnovama. Za početak su dovoljne 2–3 kompletne košnice, što omogućava upoređivanje razvoja zajednica i lakše učenje.",
          "Od alata su neophodni: dimilica (koristi se za smirivanje pčela dimom), pčelarski nož ili viljuška za otklapanje saća, četkica za nježno sklanjanje pčela sa ramova, hranilice za stimulativnu prihranu, te matična rešetka koja sprečava maticu da polaže jaja u medišne nastavke.",
        ],
      },
      {
        icon: "MapPin",
        title: "Kako odabrati lokaciju za pčelinjak",
        image: {
          src: "/images/educationBlog/BeekepingImage.jpg",
          alt: "Pčelinjak na idealnoj lokaciji okružen pašom i šumom",
          wideCrop: true,
        },
        content: [
          "Lokacija pčelinjaka je jedan od najvažnijih faktora koji direktno određuje prinos meda, zdravlje pčelinjih zajednica i dugoročnu održivost vašeg pčelarstva. Loše odabrana lokacija može smanjiti prinos i do 50%, bez obzira na kvalitet opreme ili iskustvo pčelara.",
          "Idealna lokacija za pčelinjak treba da ispunjava sljedeće uslove: udaljenost najmanje 500 metara od zagađenja, fabrika i prometnih saobraćajnica; bogata medonosna paša u krugu od 3 km sa raznovrsnim biljem koje cvjeta od ranog proljeća do kasne jeseni (bagrema, lipa, livadsko bilje); prirodna zaštita od vjetra pomoću šume, živice ili brda; izloženost jutarnjem suncu kako bi pčele ranije počele sa izletima; stalan izvor čiste vode ili postavljene pojilice u blizini; te pristupačnost vozilom radi transporta košnica i opreme tokom selidbe ili vrcanja.",
        ],
      },
      {
        icon: "CalendarDays",
        title: "Sezonsko upravljanje košnicama — pčele tokom cijele godine",
        image: {
          src: "/images/educationBlog/Beesinbeehive.jpg",
          alt: "Pčele u košnici tokom aktivne sezone — sezonsko upravljanje",
        },
        content: [
          "Proljeće (mart–maj) — Proljeće je najdinamičniji period u pčelarstvu. Sezona počinje prvim proljetnim pregledom košnica čim temperature stabilno premaše 12°C — provjerava se prisustvo matice, stanje legla, zalihe hrane i zdravlje društva. Stimulativna prihrana sirupom (1 kg šećera na 1 l vode) podstiče maticu na pojačano polaganje jaja. Kako se zajednica razvija i jača, dodaju se nastavci za proširenje prostora. Ključno je redovno praćenje matičnjaka radi kontrole rojenja, jer je upravo proljeće period kada su rojevi najčešći.",
          "Ljeto (jun–avg) — Ljeto donosi glavnu pašu i vrcanje meda — obično krajem maja ili početkom juna, zavisno od regije i cvjetanja bagrema. Nakon vrcanja, redovno se kontrolišu košnice: prati se zdravlje pčela, stanje matice, te se po potrebi dodaju medišni nastavci za drugu vrcanja. Obezbijedite pčelama stalan pristup svježoj vodi, jer tokom vrućih dana jedno društvo može potrošiti i do pola litre vode dnevno.",
          "Jesen (sep–okt) — Jesen je period pripreme za zimu i jedan od najkritičnijih u pčelarskoj godini. Kontroliše se količina zimskih zaliha hrane (potrebno je 15–20 kg meda po košnici) i po potrebi dodaje sirup ili proteinske pogače. Ovo je ključni period za tretman protiv varoe — kasno lječenje je najčešći uzrok gubitka zajednica tokom zime. Ulaz košnice sužava se na 6 mm radi zaštite od miševa, a ventilacija se podešava kako bi se spriječilo nakupljanje vlage.",
          "Zima (nov–feb) — Tokom zime pčele formiraju zimsko klube i miruju — ne treba ih ometati nepotrebnim otvaranjem košnica. Periodično se čisti ulaz od snijega i leda kako bi se omogućio protok svježeg zraka. Dobra izolacija i zaštita od vjetra su ključni za preživljavanje. Krajem februara, pri prvim toplijim danima, vrši se brzi pregled stanja zaliha i priprema za novu proljetnu sezonu.",
        ],
      },
      {
        icon: "Droplets",
        title: "Kako se vrca med — postupak vrcanja meda korak po korak",
        image: {
          src: "/images/educationBlog/UncappingHoney.jpg",
          alt: "Otklapanje saća pčelarskom viljuškom — priprema za vrcanje meda",
        },
        content: [
          "Vrcanje meda je vrhunac pčelarske sezone i trenutak koji svaki pčelar sa nestrpljenjem čeka. Med je spreman za vrcanje kada je najmanje 80% saća u ramu poklopljeno voštanim poklopcima — to je znak da su pčele smanjile vlažnost meda ispod 18%, čime je med stabilan za dugoročno skladištenje bez rizika od fermentacije. Vrcanje se obavlja u čistom, zatvorenom prostoru kako bi se spriječio pristup pčelama i nečistoćama.",
          "Oprema za vrcanje meda uključuje: vrcaljku (ručnu za početnike ili električnu za veće pčelinjake sa 20+ košnica), pčelarsku viljušku ili nož za otklapanje voštanih poklopaca, dvostruku cediljku od inoksa za filtriranje voska i nečistoća, te kante za prehrambenu upotrebu (od 10 do 40 litara). Postupak je jednostavan — ramovi se otklapaju, stavljaju u vrcaljku koja centrifugalnom silom izvlači med, a zatim se med filtrira kroz cediljku u kante.",
          "Pravilno skladištenje meda je jednako važno kao i samo vrcanje. Med se čuva u posudama za prehrambenu upotrebu (inoks ili food-grade plastika) na tamnom i suvom mjestu, na temperaturi između 15°C i 25°C. Nikada ne koristite obične plastične posude ili metalne kante koje mogu oksidirati i pokvariti kvalitet meda. Pravilno uskladišten med čuva svoja svojstva godinama — med pronađen u egipatskim grobnicama bio je još uvijek jestiv nakon 3.000 godina.",
        ],
      },
      {
        icon: "Users",
        title: "Rojenje pčela — uzroci, znakovi i kako ga spriječiti",
        image: {
          src: "/images/educationBlog/QueenBee.jpg",
          alt: "Pčelinja matica okružena radilicama na saću — kontrola rojenja",
        },
        content: [
          "Rojenje je prirodan instinkt razmnožavanja pčelinjih zajednica — stara matica napušta košnicu sa dijelom pčela i traži novi dom, dok u staroj košnici ostaju mlade matice. Iako je rojenje znak zdravog i jakog društva, za pčelara znači gubitak polovine zajednice i značajno smanjenje prinosa meda u toj sezoni.",
          "Najčešći uzroci rojenja su: prenaseljenost košnice (nedostatak prostora za leglo i med), stara matica starija od 2 godine koja luči slabije feromone, nedovoljna ventilacija i pregrijavanje košnice, te toplo i mirno vrijeme u maju i junu koje pogoduje rojenju. Rani znakovi rojenja uključuju prisustvo matičnjaka na rubovima ramova — naročito onih izduženih, u obliku žira.",
          "Preventivne mjere za sprječavanje rojenja: pravovremeno dodavanje nastavaka kako bi pčele imale dovoljno prostora, zamjena matice svake 1–2 godine mladom i kvalitetnom maticom, stvaranje vještačkih rojeva (nukleus) od jakih zajednica, uklanjanje matičnjaka tokom redovnih pregleda, te obezbjeđivanje dobre ventilacije u košnici. Ako do rojenja ipak dođe, roj se hvata koristeći rojilicu ili omotavanjem grane na koju se roj nakupio.",
        ],
      },
      {
        icon: "ShieldAlert",
        title: "Najčešće bolesti pčela i kako ih liječiti",
        image: {
          src: "/images/educationBlog/AmerickaTrulez.jpg",
          alt: "Američka trulež — zaraženo leglo u košnici",
        },
        contentImages: [
          {
            src: "/images/educationBlog/KrecnoLeglo.jpg",
            alt: "Krečno leglo — mumificirane larve u saću",
          },
          {
            src: "/images/educationBlog/AmerickaTrulez.jpg",
            alt: "Američka trulež — zaraženo leglo u košnici",
          },
          {
            src: "/images/educationBlog/Varroa.jpg",
            alt: "Varoa destruktor parazit na pčeli",
          },
        ],
        content: [
          "Krečno leglo (Ascosphaerosis) je gljivična bolest pčelinjeg legla izazvana gljivicom Ascosphaera apis. Prepoznaje se po mumificiranim larvama bijele, sive ili tamne boje koje podsjećaju na komadiće krede. Najčešće se javlja u vlažnim i hladnim uslovima. Liječenje uključuje poboljšanje ventilacije u košnici, uklanjanje zaraženih ramova sa saćem, te jačanje zajednice dodavanjem mladih pčela iz zdravih košnica.",
          "Američka trulež (Paenibacillus larvae) je najopasnija bakterijska bolest pčelinjeg legla i prijavljuje se veterinarskoj inspekciji. Simptomi su smeđe, ljepljive larve koje se razvlače u niti i neprijatan miris truljenja. Zaraženo leglo se ne može izliječiti — obavezno je spaljivanje košnice i kompletnog saća, dok se alat temeljito dezinfikuje. Prevencija je ključna: nikada ne premještajte ramove između košnica bez prethodne provjere zdravlja.",
          "Varroa destruktor je najrašireniji parazit medonosne pčele i glavni uzrok gubitka pčelinjih zajednica širom svijeta. Ovaj parazit se hrani masnim tijelom pčela i prenosi viruse poput virusa deformisanih krila (DWV). Tretmani uključuju: oksalnu kiselinu (sublimacija ili kapanje — najefikasnija u bezleglovnom periodu), mravlje kiseline (tokom ljeta), te biotehničke metode poput izrezivanja trutovskog legla. Redovni tretmani u avgustu/septembru i decembru su obavezni za preživljavanje zajednice.",
        ],
      },
      {
        icon: "Snowflake",
        title: "Prezimljavanje pčela — kako pripremiti košnice za zimu",
        image: {
          src: "/images/educationBlog/HoneyBees.jpg",
          alt: "Ram sa zalihama meda — priprema pčela za prezimljavanje",
        },
        content: [
          "Uspješno prezimljavanje pčela počinje mjesecima prije prvog mraza. Zazimljavanje je proces pripreme pčelinjih zajednica za preživljavanje hladnih zimskih mjeseci i direktno određuje snagu društva na početku sljedeće sezone. Pčelari koji pravilno zazime košnice imaju gubitke ispod 10%, dok nepripremljene zajednice često ne prežive zimu.",
          "Ključni koraci za uspješno prezimljavanje: završni jesenji tretman protiv varoe oksalnom kiselinom (obavezno u bezleglovnom periodu, obično u novembru/decembru); obezbjeđivanje 15–20 kg kvalitetne zimske hrane po košnici (med ili sirup 3:2); sužavanje leta na 6 mm pomoću letne rešetke radi zaštite od miševa i strižaka; postavljanje dobre ventilacije (blagi nagib košnice naprijed) za sprečavanje kondenzacije i vlage; te izolacija krova stiropor pločama ili jutom za očuvanje temperature unutar košnice.",
          "Najčešće greške pri prezimljavanju koje vode do gubitka zajednica: nedovoljna količina hrane (pčele uginu od gladi već u februaru), zakašnjelo lječenje varoe (velika infestacija slabi pčele prije zime), loša ventilacija (kondenzacija uzrokuje gljivične bolesti), te prečesto otvaranje košnica tokom zime čime se remeti zimsko klube.",
          "Vremenski raspored pripreme: avgust — prva procjena stanja i ljetni tretman varoe; septembar — dopunska prihrana sirupom i provjera količine zaliha; oktobar — sužavanje leta, podešavanje ventilacije i izolacija; novembar/decembar — završni tretman oksalnom kiselinom u bezleglovnom periodu.",
        ],
      },
      {
        icon: "HelpCircle",
        title: "Najčešća pitanja o pčelarstvu (FAQ)",
        image: {
          src: "/images/educationBlog/bee.jpg",
          alt: "Pčela na cvijetu — početak bavljenja pčelarstvom",
        },
        content: [
          "Za početnike se preporučuju 2 do 3 košnice. Sa jednom košnicom nemate mogućnost poređenja, dok vam više košnica omogućava da uočite razlike u razvoju zajednica, procijenite kvalitet matice i naučite prepoznavati zdrava od problematičnih društava. Početna investicija za 3 kompletne LR košnice sa pčelama, opremom i alatom kreće se između 800 i 1.200 KM.",
          "Kada je najbolje vrijeme za početak pčelarenja? Proljeće (april–maj) je idealno vrijeme za nabavku prvih košnica jer pčele tada aktivno razvijaju zajednice, cvjetanje je u punom jeku i imate cijelu sezonu pred sobom za učenje. Međutim, priprema počinje zimi — koristite hladne mjesece za edukaciju, nabavku opreme i odabir lokacije za pčelinjak.",
          "Kada se vrši prvo vrcanje meda? Prvo vrcanje meda obično se obavlja krajem maja ili početkom juna, zavisno od regije i glavne paše (bagrem, lipa). Med je spreman za vrcanje kada je 80% saća poklopljeno. Početnici u prvoj godini često neće vrcati uopšte jer zajednica koristi med za vlastiti razvoj — i to je potpuno normalno.",
          "Koliko meda proizvede jedna košnica godišnje? Prinos zavisi od lokacije, paše, snage zajednice i vremenskih uslova. U prosječnoj sezoni u BiH, jedna košnica može dati 10–15 kg meda, dok izuzetno jake zajednice na bogatoj paši mogu proizvesti i preko 20 kg.",
        ],
      },
    ],
    relatedSlugs: [
      "spring-hive-inspections",
      "prezimljavanje-pcela",
      "art-of-extracting-raw-honey",
    ],
  },
  {
    slug: "spring-hive-inspections",
    title: "Proljetni Pregled Košnica: Šta Provjeriti u Pčelinjaku",
    excerpt:
      "Proljeće je najvažniji period u godini za svakog pčelara. Saznajte šta provjeriti tokom proljetnog pregleda košnica, kada ga obaviti i na šta posebno obratiti pažnju u uslovima Bosne i Hercegovine.",
    date: "2026-03-12",
    category: "Upravljanje Košnicama",
    heroImage: "/images/pcelinjak/SlikaPceleNaLetu.jpg",
    heroAlt: "Pčele na letu ispred košnice — proljetni pregled pčelinjaka",
    images: [
      {
        src: "/images/pcelinjak/SlikaLeglaURamu.jpg",
        alt: "Ram sa leglom — zdrave larve u košnici",
        caption: "Kompaktno leglo bez praznina u sredini znak je kvalitetne matice i zdravog društva.",
      },
      {
        src: "/images/pcelinjak/SlikaMaticeSaLeglom.jpg",
        alt: "Pčelinja matica okružena pčelama na saću",
        caption: "Pronalaženje matice tokom proljetnog pregleda potvrđuje da je zajednica u redu.",
      },
    ],
    content: [
      "Proljetni pregled košnica je najvažnija intervencija u pčelarskoj godini — i jedina koja ne daje drugi pokušaj. Dok zajednica hibernira, problemi se gomilaju tiho: matica može uginuti, zalihe hrane se mogu iscrpiti, varoa nastavlja da se razmnožava. Tek kada otvorite prvu košnicu u martu, saznajete šta vas čeka u sezoni. Na Pčelinjaku Ljubojević, poslje 45 godina proljetnih pregleda na ravničarskom tlu Semberije, naučili smo jednu stvar: nema rutinskih proljeća. Ono što se ne mijenja jeste redoslijed koraka i na šta posebno obratiti pažnju.",
    ],
    sections: [
      {
        icon: "CalendarDays",
        title: "Kada raditi proljetni pregled košnica u BiH?",
        image: {
          src: "/images/educationBlog/Beesinbeehive.jpg",
          alt: "Pčele u košnici — idealno vrijeme za proljetni pregled",
        },
        content: [
          "U ravničarskim krajevima poput Bijeljine i Semberije optimalan period za prvi detaljni pregled najčešće pada između 20. marta i 5. aprila. Konkretan uslov: temperatura mora biti stabilno iznad 15°C tokom pregleda, bez jakog vjetra. U planinskim krajevima poput Konjica i Foče isti pregled obično kasni 10–14 dana.",
          "Bolji pokazatelj od termometra je priroda sama: kada na vrbama i leski vidite prve mace, a pčele počnu unositi žuti polenski tovar — pravo je vrijeme. Cvjetanje leve i johe znači da je paša počela i da morate znati stanje zaliha što prije.",
          "Pregled obavite između 11h i 15h, u sunčan dan bez vjetra. Otvaranje košnice po hladnom, oblačnom ili vjetrovitom vremenu može rashladiti otvoreno leglo i izložiti pčele stresu koji traje danima. Kratak pregled od 5–7 minuta po košnici dovoljan je u ranom proljeću — fokus vam je na onome što je presudno — ne na savršenoj analizi svakog rama.",
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
          "Procijenite snagu prema broju ramova koje pčele ravnomjerno pokrivaju. Orijentacione vrijednosti: 3 rama i manje — slabo društvo koje traži pažnju; 4–5 ramova — prosječno, uz prihranu može sustići; 6–7 ramova — dobro, sprema se za punu sezonu; 8+ ramova — odlično, kandidat za rano rojenje.",
          "Ako je košnica izašla iz zime slaba, najčešći razlog je varoa koja nije tretirana dovoljno rano u jesen. Takvo društvo ne treba odmah otpisati — dva slaba društva mogu se ujediniti metodom papirne barijere i zajedno formirati jedno sposobno za sezonu. Čekanje da se sama oporave gotovo nikad ne daje rezultate.",
          "Jako društvo u proljeće je direktna investicija u medenu sezonu: jaka zajednica ulazi u bagremovu pašu u punoj snazi i može sakupiti 20–30 kg meda, dok zaostala zajednica jedva doda zalihe za sebe.",
        ],
      },
      {
        icon: "Crown",
        title: "Prisustvo i kvalitet matice",
        image: {
          src: "/images/educationBlog/QueenBee.jpg",
          alt: "Pčelinja matica na saću — provjera kvaliteta matice",
        },
        content: [
          "Ne morate uvijek fizički vidjeti maticu. Dovoljno je vidjeti jaja starosti do 3 dana — poluprozirna, uspravno postavljena na dno ćelije — i svježe leglo svih uzrasta. Kompaktno leglo bez praznina na centralnim ramovima znači da matica radi odlično.",
          "Prazne ćelije posijane nasumično unutar legla — tzv. rešetkasto leglo — ukazuju na stariju maticu ili bolest. Ako nema jaja ali ima starih larvi, matica je možda tu ali usporena hladnoćom: sačekajte 2–3 sunčana dana, pa ponovo provjerite.",
          "Jedan detalj na koji posebno pazimo tokom proljetnog pregleda košnica: više jaja u jednoj ćeliji, ili jaja pored zida ćelije umjesto na dnu — to je nesna radilica. Znači da matica nedostaje već nedjeljama i da bez brze reakcije pčelinja zajednica neće dočekati sezonu. Rješenje je ili spajanje s jakim susjednim društvom ili hitno uvođenje nove matice.",
        ],
      },
      {
        icon: "Droplets",
        title: "Zalihe hrane — med i polen",
        image: {
          src: "/images/pcelinjak/SlikaRamaSaMedom.jpg",
          alt: "Ram sa medom — zalihe hrane za proljeće",
        },
        content: [
          "U ranom proljeću minimalne zalihe meda po košnici su 6–8 kg — to je granica preživljavanja dok paša još nije počela. Idealno je imati 10–12 kg, jer proljeće u BiH zna biti hladno i produženo, a pčele troše rezerve brže nego zimi jer je leglo već aktivno i traži stalno zagrijavanje.",
          "Ako je med ispod 6 kg, odmah reagujte — ne čekajte sljedeći pregled. U ranom proljeću koristite pogaču (čvrsti šećer sa dodatkom polena ili proteinske zamjene) umjesto tečnog sirupa, jer hladan sirup usporava razvoj legla i može izazvati proliv (dizenterija pčela). Tečnu prihranu 1:1 sirupom uvedite tek kada su noćne temperature stabilno iznad 12°C.",
          "Polen je jednako važan kao med. Bez unosa aminokiselina razvoj legla dramatično zaostaje. U Semberiji vrba i joha daju prve prave polenoše već krajem februara, ali u godinama kasnog proljeća taj unos može izostati — tada dodajte proteinski nadomjestak polena.",
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
          "Varoa je prioritet broj jedan. Kad leglo eksplodira u proljeće, varoa se razmnožava eksponencijalno. Uradite brzi test: sakupite oko 100 pčela iz leglovnog prostora u teglu s alkoholom, protresite i izbrojite grinje. Više od 3 grinje na 100 pčela zahtijeva tretman — ne odgađajte. Oksalna kiselina u sublimaciji je najefikasnija metoda u proljeće.",
          "Nozema se manifestuje tragovima proljeva ispred i na letištu, gubitkom pčela i abnormalno sporim proljetnim razvojem. Ako sumnjate, uzorkujte 30–50 pčela i pošaljite na analizu u veterinarsku stanicu. Prevencija kroz jaku zajednicu i dobru ventilaciju ostaje ključna mjera.",
          "Tokom pregleda obratite pažnju i na deformisana krila (DWV virus koji prenosi varoa), puzajuće pčele ispred košnice (znak visokog virusnog opterećenja) te mumificirane bjelkaste larve u saću — krečno leglo, gljivična bolest koja cvjeta u vlažnim i hladnim godinama.",
        ],
      },
      {
        icon: "Wrench",
        title: "Čistoća i stanje košnice",
        image: {
          src: "/images/educationBlog/BeeHiveComponents.jpg",
          alt: "Dijelovi košnice — održavanje i čišćenje opreme",
        },
        content: [
          "Proljeće je jedina prava šansa za temeljito čišćenje. Počnite sa podnjačom: sakupite zimski otpad (mrtve pčele, vosak, izmet) i uklonite ga daleko od pčelinjaka. Podnjača koja truli privlači varou koja pada i ponovo se penje, pa je redovna zamjena neophodna.",
          "Staro saće tamne, gotovo crne boje, koje je u upotrebi više od 3 sezone, treba zamijeniti svježim satnim osnovama. U starim saćem nagomilavaju se pesticidi, patogeni i varoa. Dobar ritam je zamjena 3–4 najstarija rama godišnje po košnici — spora ali sigurna obnova.",
          "Pregledajte nastavke i krovove na trulež ili pukotine. Pukotine dovode do hladnih propuha koji stresiraju zajednicu i usporavaju razvoj legla. Pukotine zatvorite pčelarskim kitom dok je još rano — jednom kad sezona krene, nema vremena za to.",
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
          "Zlatno pravilo proširenja: dodajte novi nastavak ili satne osnove tek kada pčele pokrivaju 7–8 ramova u plodištu i kada je svaki ram u potpunosti zauzet. Preuranjeno proširenje sili pčele da griju nepotrebno veliki prostor — leglo se hladi, razvoj usporava, prinos pada.",
          "U Semberiji bagrem cvjeta tipično između 10. i 20. maja. Da biste ušli u bagremovu pašu s maksimalnom snagom, plodišno gnijezdo mora biti puno i medišni nastavci postavljeni najmanje 10 dana ranije — dakle oko 30. aprila do 5. maja. Ako vam košnica ima 5 ramova na pregledu krajem marta, imate tačno 5–6 sedmica da je ojačate prihanom i dodavanjem satnih osnova.",
          "Vodite kratak terenski dnevnik — datum pregleda, jačina društva, stanje zaliha, status matice. Zapis od prošle godine je vaš najvažniji alat za planiranje ove sezone.",
        ],
      },
      {
        icon: "ShieldAlert",
        title: "Najčešće greške tokom proljetnog pregleda",
        image: {
          src: "/images/educationBlog/bee.jpg",
          alt: "Pčela na cvijetu — uspješno pčelarenje počinje u proljeće",
        },
        content: [
          "Pregled po lošem vremenu: čak i kratko otvaranje košnice na hladnom ili vjetrovitom danu može rashladiti leglo i rasuti zimski klube. Bolje je sačekati dan-dva nego riskirati gubitak čitavog legla.",
          "Preuranjeno proširenje prostora: dodavanje nastavka ili satnih osnova slaboj zajednici znači da pčele troše energiju na grijanje praznog prostora umjesto na razvoj legla. Proširujte uvijek prema stvarnoj snazi.",
          "Ignorisanje slabih društava: slaba košnica se rijetko sama oporavi bez intervencije, a privlači kradljivice iz jakih košnica. Ujedinite je sa susjednom ili zbrinite što prije.",
          "Kasna reakcija na nedostatak hrane: med se u proljeće troši brže nego što mislite jer leglo zahtijeva konstantnu toplotu. Ako primijetite nizak nivo meda ali odložite prihranu, možda stignete kad je društvo već u stresu.",
          "Preskakanje provjere mladih matica: matica kupljena prošle sezone možda nije prezimila. Svaka košnica zahtijeva provjeru prisustva svježih jaja — bez izuzetka, čak i one naizgled 'sigurne'.",
        ],
      },
      {
        icon: "HelpCircle",
        title: "Najčešća pitanja o proljetnom pregledu košnica (FAQ)",
        image: {
          src: "/images/pcelinjak/SlikaLeglaURamu.jpg",
          alt: "Leglo u košnici — proljetni pregled pčelinjaka",
        },
        content: [
          "Kada je pravo vrijeme za prvi proljetni pregled košnica? U ravničarskim krajevima BiH (Bijeljina, Brčko, Banja Luka) optimalan period je od 20. marta do 5. aprila, kada su temperature stabilno iznad 15°C i nema jakog vjetra. Pouzdan prirodni signal: cvjetanje vrbe i leve, koje pčele aktivno posjećuju. U planinskim krajevima ovaj period kasni 10–14 dana.",
          "Koliko dugo treba trajati proljetni pregled košnice? U ranom proljeću dovoljan je kratak pregled od 5–7 minuta po košnici. Cilj je brzo utvrditi: ima li matice (svježa jaja), koliko je jaka zajednica (broj pokrivenih ramova) i koliko ima hrane. Dugotrajno otvaranje hladi leglo i stresira pčele — detaljan pregled ostavite za topliji dan.",
          "Šta raditi ako tokom proljetnog pregleda nema matice? Prvo provjerite postoje li svježa jaja (do 3 dana stara, poluprozirna, uspravna u ćeliji) — ako ih ima, matica je tu iako je ne vidite. Ako nema ni jaja ni mladog legla, društvo je bez matice: naručite novu maticu što prije ili spojite zajednicu s jakim susjednim društvom dok je još dovoljno snažno.",
          "Da li je normalno da je košnica slabija u proljeće nego u jesen? Da, to je sasvim normalna pojava. Tokom zime zajednica troši zalihe i gubi pčele koje prirodno uginjavaju. Minimalna proljetna snaga trebala bi biti 3–4 rama pokrivenih pčelama. Košnica s manje od 2 rama je u kritičnom stanju i zahtijeva hitnu intervenciju — spajanje ili uvođenje matice uz intenzivnu prihranu.",
          "Kada početi sa stimulativnom prihanom pčela u proljeće? Stimulativnu prihranu tečnim sirupom 1:1 počinjete tek kada su noćne temperature stabilno iznad 12°C, obično u aprilu. Ranije od toga koristite pogaču — čvrsti šećer s dodatkom polena ili proteinskog nadomjestka — jer tečni sirup na hladnom može izazvati proliv i ubrzati razvoj nozeme.",
          "Kako prepoznati zdravo leglo tokom proljetnog pregleda? Zdravo leglo je kompaktno — pokrivene ćelije su poklopljene ravnomjerno, blijedo-smeđe voštane kapice bez rupa. Larve su bjelkaste, sjajne i savijene u obliku polumjeseca. Bolesno leglo je raspršeno, kapice su utonule ili probušene, a larve mogu biti tamne, prozirne ili neobičnog oblika.",
          "Šta učiniti sa košnicama koje nisu prezimile? Čak i košnica bez pčela ima vrijednost — med i zalihe koji su ostali koriste se za prihranu živih zajednica, a saće se može reciklirati. Temeljno pregledajte uzrok gubitka: tragovi proljeva ukazuju na nozemu, crvena mrlja na saću i deformisane larve su znaci varoe, potpuna praznoća bez hrane govori o gladi. Razumijevanje uzroka pomaže da se isti gubitak ne ponovi sljedeće zime.",
        ],
      },
    ],
    relatedSlugs: [
      "vodic-za-pcelarstvo",
      "art-of-extracting-raw-honey",
      "prezimljavanje-pcela",
    ],
  },
  {
    slug: "art-of-extracting-raw-honey",
    title: "Umetnost Vrcanja Sirovog Meda u Bosni i Hercegovini",
    excerpt:
      "Naučite kako pravilno vrcati sirovi med u BiH — od prepoznavanja zrelosti saća i otklapanja do skladištenja. Kompletan vodič za pčelare sa iskustvima iz Bosne.",
    date: "2026-02-28",
    category: "Vrcanje",
    heroImage: "/images/pcelinjak/SlikaOtvorenogMedauRamu.jpg",
    heroAlt: "Otvoren ram pun zrelog meda — sirovi domaći med spreman za vrcanje na bosanskom pčelinjaku",
    images: [
      {
        src: "/images/pcelinjak/SlikaZatvorenogMedaURamu.jpg",
        alt: "Poklopljene ćelije sa zrelim medom — ram spreman za vrcanje",
        caption: "Poklopljene ćelije — pčele su zapečatile zreli med voskom.",
      },
      {
        src: "/images/pcelinjak/SlikaMedaUKanti.jpeg",
        alt: "Svježe izvrcan sirovi med u inoks kanti — domaći med bez termičke obrade",
        caption: "Tečno zlato direktno iz vrcaljke, spremno za odležavanje.",
      },
    ],
    content: [
      "Vrcanje sirovog meda predstavlja jedan od najvažnijih i najuzbudljivijih trenutaka u pčelarskoj sezoni. U Bosni i Hercegovini, gdje su bagrem, livada i suncokret dominantne paše, pravilno vrcanje direktno utiče na kvalitet, aromu i nutritivnu vrijednost meda. Ako tražite vrhunski domaći sirovi med iz Bosne i Hercegovine, neophodno je razumjeti cijeli proces — od određivanja pravog trenutka za vrcanje do pravilnog skladištenja.",
      "U ovom vodiču objašnjavamo sve što treba znati o vrcanju sirovog meda: kako prepoznati zrelost saća, koja oprema je neophodna, korak-po-korak proces vrcanja i kako pravilno sačuvati med da zadrži sva prirodna svojstva. Vodič je namijenjen kako iskusnim pčelarima, tako i svima koji žele dublje razumjeti kako nastaje pravi domaći med direktno od pčelara.",
    ],
    sections: [
      {
        icon: "Droplets",
        title: "Šta je sirovi med?",
        image: {
          src: "/images/pcelinjak/SlikaRamaSaMedom.jpg",
          alt: "Ram pun sirovog meda — neprerađen, prirodan med direktno iz košnice",
        },
        content: [
          "Sirovi med je med koji nije termički obrađen, nije pasterizovan i nije filtriran kroz fine industrijske filtere. To znači da zadržava prirodne enzime (invertazu, dijastazu, glukozu oksidazu), polen, vitamine, minerale, prirodnu aromu, boju i antioksidanse koje med dobija direktno iz nektara i pčelinjeg trbuha.",
          "Za razliku od supermarketskog meda koji prolazi kroz zagrijavanje i ultrafiltraciju, sirovi med zadržava propolis čestice i prirodne antibakterijske komponente. Upravo zbog toga ima i karakteristično zamućen izgled — znak čistoće, a ne mane.",
          "U Bosni i Hercegovini potražnja za sirovim medom ubrzano raste. Sve više potrošača traži prirodan med direktno od pčelara, svjesni razlike u kvalitetu i nutritivnoj vrijednosti u odnosu na industrijsku alternativu.",
        ],
      },
      {
        icon: "CalendarDays",
        title: "Kada je pravo vrijeme za vrcanje meda u BiH?",
        image: {
          src: "/images/educationBlog/Beesinbeehive.jpg",
          alt: "Pčele u košnici zatvaraju ćelije sa zrelim medom — ključan trenutak za procjenu zrelosti",
        },
        content: [
          "Pravilno određivanje vremena za vrcanje je ključno za kvalitet finalnog proizvoda. Bagremov med se najčešće vrca krajem maja ili početkom juna, livadski med tokom juna i jula, a suncokretov med u julu. Vrcanje u pogrešnom trenutku može rezultirati medom s visokim sadržajem vlage koji fermentira.",
          "U ravničarskim krajevima poput Bijeljine, bagrem cvjeta ranije nego u višim predjelima. U centralnim i planinskim dijelovima kao što je Zenica, paša može kasniti i do dvije nedjelje. Ove regionalne razlike su važne za planiranje vrcanja.",
          "Med je spreman za vrcanje kada su ćelije sa medom najmanje 80% poklopljene voskom. Za precizno određivanje vlage preporučujemo provjeru refraktometrom — idealna vlažnost sirovog meda je ispod 18%, a sve iznad 20% znači rizik od fermentacije.",
        ],
      },
      {
        icon: "Wrench",
        title: "Priprema za vrcanje meda",
        image: {
          src: "/images/educationBlog/UncappingHoney.jpg",
          alt: "Oprema za vrcanje meda — nož za otklapanje saća i inoks vrcaljka",
        },
        content: [
          "Profesionalno vrcanje sirovog meda zahtijeva čistu i dobro provjetrenu prostoriju bez pristupa pčelama, vrcaljku (ručnu ili električnu), oštri nož ili viljušku za otklapanje saća, cediljke za grubo filtriranje i inoks posude dovoljnog kapaciteta za prihvat meda.",
          "Higijena opreme je presudna za kvalitet sirovog meda — svaka kontaminacija može pokrenuti fermentaciju ili unijeti strane mirise. U Bosni i Hercegovini sve više malih pčelara prelazi na inoks opremu i čvrste plastične posude za prehrambenu industriju, jer zadovoljavaju standarde kvaliteta i lako se dezinfikuju.",
          "Preporučujemo da se prostorija za vrcanje zatvori sat vremena prije nego što počnete, kako biste izbjegli let pčela privučenih mirisom meda. Temperatura prostorije od 24–28°C olakšava istjecanje meda iz saća.",
        ],
      },
      {
        icon: "MapPin",
        title: "Proces vrcanja – korak po korak",
        image: {
          src: "/images/pcelinjak/SlikaOtvorenogMedauRamu.jpg",
          alt: "Otvoren ram sa zrelim medom — početak procesa vrcanja",
        },
        content: [
          "Medišta se skidaju pažljivo, po mogućnosti rano ujutro kada je manje pčela na letu, kako bi se izbjeglo uznemiravanje zajednice. Ramovi se prenose u prostoriju za vrcanje u zatvorenim sanducima.",
          "Vosak se uklanja oštrim nožem ili viljuškom za otklapanje, čime se otvaraju ćelije pune meda. Otklopljeni vosak se skuplja — vrijedna je sirovina za izradu svjeća i kozmetike. Ramovi se zatim postavljaju u vrcaljku, gdje centrifugalna sila med izbacuje iz saća bez oštećivanja satnih osnova.",
          "Sirovi med se procedi kroz grubu cediljku kako bi se uklonili komadići voska i eventualni dijelovi pčela, ali bez uklanjanja polena i propolisa koji medu daju terapijska svojstva. Na kraju, med odležava 2–3 dana u inoks posudama da se mehurići vazduha i sitne nečistoće podignu na površinu.",
        ],
      },
      {
        icon: "ShieldAlert",
        title: "Zašto ne treba zagrijavati sirovi med?",
        image: {
          src: "/images/pcelinjak/SlikaMedaUKanti.jpeg",
          alt: "Sirovi med u inoks kanti — prirodan med bez zagrijavanja i termičke obrade",
        },
        content: [
          "U industrijskoj proizvodnji med se zagrijava kako bi bio tečniji, duže ostao u tečnom stanju i lakše prolazio kroz fine filtere. Međutim, temperature iznad 40°C počinju da uništavaju invertazu i dijastazu — enzime koji su odgovorni za probavljivost meda i antibakterijska svojstva. Na temperaturama iznad 60°C razaranje je gotovo potpuno.",
          "Zagrijavanje također povećava sadržaj hidroksimetilfurfurala (HMF) — pokazatelja koji regulatorni organi koriste kao mjeru svježine i kvaliteta meda. Svjež sirovi med ima zanemarljive vrijednosti HMF-a, dok zagrijani ili stari med može preći dozvoljene granice.",
          "Pravi sirovi med iz Bosne i Hercegovine nikada ne prolazi kroz visoku termičku obradu — što u kombinaciji s lokalnim pašnjacima i čistom prirodom čini ga jednim od najkvalitetnijih prirodnih proizvoda koje možete pronaći.",
        ],
      },
      {
        icon: "Crown",
        title: "Specifičnosti vrcanja bagremovog meda u BiH",
        image: {
          src: "/images/pcelinjak/SlikaZatvorenogMedaURamu.jpg",
          alt: "Poklopljeni ramovi sa bagremovim medom — karakteristična svjetla boja i spora kristalizacija",
        },
        content: [
          "Bagrem je najvažnija paša u Bosni i Hercegovini. U godinama kada proljetni mraz ne ošteti cvijet, prinosi mogu biti izuzetni. Kvalitetan bagremov sirovi med prepoznaje se po svjetloj, gotovo prozirnpj boji, delikatnom cvjetnom mirisu i izrazito sporijoj kristalizaciji u poređenju s livadskim ili suncokretovim medom.",
          "Zbog čestih proljetnih kiša u BiH, vlaga u bagremovom medu može biti povećana, što je jedan od glavnih razloga prijevremenog vrcanja i kasnijih problema s fermentacijom. Svaki pčelar koji cilja na vrhunski sirovi med mora imati refraktometar i strpljivo čekati pravo poklopljavanje saća — čak i ako to znači kraći prinos.",
        ],
      },
      {
        icon: "Snowflake",
        title: "Skladištenje sirovog meda",
        image: {
          src: "/images/educationBlog/HoneyBees.jpg",
          alt: "Čuvanje i skladištenje sirovog meda — dugotrajna svježina bez konzervansa",
        },
        content: [
          "Nakon vrcanja i odležavanja, sirovi med treba puniti u staklene tegle ili inoks posude s hermetičkim zatvaranjem. Plastične posude koje nisu namijenjene za prehrambenu industriju mogu prenijeti neugodne mirise i mikro-čestice u med.",
          "Optimalna temperatura za dugotrajno čuvanje sirovog meda je između 10 i 20°C, daleko od direktne sunčeve svjetlosti i izvora topline. Med je higroskopan — upija vlagu iz zraka — pa je hermetičko zatvaranje obavezno.",
          "Kristalizacija je prirodni i očekivani proces za gotovo sve vrste sirovog meda, naročito livadski i suncokretov. Ona nije znak kvareži, već dokaz da med nije zagrijan. Pravilno skladišten sirovi med može zadržati kvalitet i terapijska svojstva i više od dvije godine.",
        ],
      },
      {
        icon: "HelpCircle",
        title: "Najčešća pitanja o vrcanju sirovog meda",
        image: {
          src: "/images/educationBlog/BeekepingImage.jpg",
          alt: "Pčelar na pčelinjaku u Bosni — tradicija vrcanja i prerade sirovog meda",
        },
        content: [
          "Po čemu se sirovi med razlikuje od kupovnog meda? Sirovi med nije zagrijavan, pasterizovan ni finofiltiran, zbog čega zadržava sve prirodne enzime, polen, antioksidanse i antibakterijska svojstva. Kupovni supermarketski med prolazi kroz termičku obradu i ultrafiltraciju koji uništavaju veći dio korisnih sastojaka i daju mu tečnu, prozirnu konzistenciju.",
          "Kako znati da je med spreman za vrcanje? Med je spreman kada je najmanje 80% ćelija u ramu poklopljeno voskom. Za preciznu provjeru vlage (ispod 18%) koristite refraktometar — to je jedini pouzdan način da izbjegnete rizik od fermentacije.",
          "Da li kristalizovan sirovi med znači da je pokvaren? Ne — kristalizacija je prirodan proces i dokaz da med nije termički obrađen. Blago zagrijavanje na temperaturi ispod 40°C vraća medu tečnost bez gubitka enzima i nutritivne vrijednosti.",
          "Koliko dugo traje proces vrcanja? Ručno vrcanje 10 nastavaka traje prosječno 4–6 sati uključujući otklapanje, vrcanje i cijeđenje. Električna vrcaljka sa većim kapacitetom skraćuje to na 2–3 sata. Nakon toga, med treba odležati još 2–3 dana u posudama prije punjenja.",
          "Gdje mogu kupiti pravi sirovi med direktno od pčelara iz BiH? Naš domaći sirovi med vrcan je na vlastitom pčelinjaku u Bosni i Hercegovini — bez termičke obrade, bez filtriranja polena i bez ikakvih dodataka. Svaka tegla dolazi direktno sa pčelinjaka do vašeg stola. [Pogledajte ponudu meda](/proizvodi/med).",
        ],
      },
    ],
    relatedSlugs: [
      "spring-hive-inspections",
      "vodic-za-pcelarstvo",
      "prezimljavanje-pcela",
    ],
  },
  {
    slug: "znacaj-pcela-u-oprasivanju",
    title:
      "Značaj Pčela u Oprašivanju Voćnjaka i Bašti: Naučna Analiza i Praktične Implikacije",
    excerpt:
      "Pčele predstavljaju jedan od najvažnijih bioloških faktora stabilnosti agroekosistema. Saznajte zašto je plansko uključivanje pčelinjih društava u voćnjake i bašte strateška odluka za bolji prinos i kvalitet plodova.",
    date: "2026-01-15",
    category: "Edukacija",
    heroImage: "/images/pcelinjak/SlikaPceleNaEvodiji.jpg",
    heroAlt: "Pčele na cvjetovima — oprašivanje lokalne flore",
    images: [
      {
        src: "/images/pcelinjak/SlikaPcelinjakaUSumi.jpg",
        alt: "Pčelinjak okružen raznovrsnom florom u šumi",
        caption:
          "Naši pčelinjaci su smješteni u bioraznolikim područjima za podršku zdravom oprašivanju.",
      },
      {
        src: "/images/pcelinjak/SlikaPceleNaLetu.jpg",
        alt: "Pčele se vraćaju u košnicu natovarene polenom",
        caption:
          "Pčele se vraćaju sa paše — svaki let oprašuje desetine cvjetova.",
      },
    ],
    content: [
      "Pčele predstavljaju jedan od najvažnijih bioloških faktora stabilnosti agroekosistema. Njihova uloga u oprašivanju voćarskih i povrtarskih kultura direktno utiče na kvantitet i kvalitet prinosa, genetsku raznovrsnost biljaka i dugoročnu održivost poljoprivredne proizvodnje. U suvremenim uslovima intenzivne poljoprivrede, klimatskih promjena i smanjenja biodiverziteta, sistematsko uključivanje pčelinjih društava u voćnjake i bašte postaje ne samo preporuka, već i neophodnost.",
      "U uslovima kakvi vladaju u Bosni i Hercegovini, pravilno planirano oprašivanje može povećati prinos pojedinih kultura i do 60–80%, u zavisnosti od vrste i vremenskih uslova tokom cvjetanja.",
    ],
    sections: [
      {
        icon: "Flower2",
        title: "Biološka osnova oprašivanja",
        image: {
          src: "/images/pcelinjak/SlikaPceleNaEvodiji.jpg",
          alt: "Pčele oprašuju cvjetove — biološka osnova oprašivanja",
        },
        content: [
          "Oprašivanje je proces prenosa polena sa prašnika na žig tučka iste ili druge biljke iste vrste. Kod velikog broja voćnih vrsta (jabuka, kruška, šljiva, trešnja, višnja), uspješna oplodnja zavisi od unakrsnog oprašivanja, što znači da je neophodno prisustvo oprašivača.",
          "Medonosna pčela (Apis mellifera) ima ključnu prednost u odnosu na druge insekte zbog organizovanog društvenog života, velikog broja jedinki u jednoj košnici (40.000–60.000 u sezoni), izuzetne vjernosti cvijetu (floralna konstanta) i efikasnog prenosa polena zahvaljujući morfologiji tijela.",
          "Jedno snažno pčelinje društvo tokom perioda intenzivnog cvjetanja može da obiđe i do nekoliko miliona cvjetova dnevno.",
        ],
      },
      {
        icon: "TrendingUp",
        title: "Uticaj pčela na prinos i kvalitet plodova",
        image: {
          src: "/images/pcelinjak/SlikaPcelinjakaUSumi.jpg",
          alt: "Pčelinjak u voćnjaku — uticaj na prinos i kvalitet plodova",
        },
        content: [
          "Brojna agronomska istraživanja pokazuju da prisustvo dovoljnog broja pčelinjih društava utiče na povećanje procenta zametanja plodova — bez adekvatnog oprašivanja dolazi do slabog formiranja plodova ili njihovog opadanja u ranoj fazi razvoja.",
          "Pčele doprinose ujednačenom obliku i veličini plodova. Nepravilno oprašeni plodovi često su deformisani, sitniji i tržišno manje vrijedni. Takođe, bolje oprašivanje doprinosi pravilnom razvoju semena, što utiče na hormonsku regulaciju rasta ploda — rezultat je veći sadržaj šećera i bolja organoleptika.",
          "Kontrolisano prisustvo pčela smanjuje oscilacije u rodu i obezbjeđuje stabilnost prinosa iz godine u godinu. U intenzivnim zasadima jabuke preporučuje se 2–4 jaka pčelinja društva po hektaru, dok kod manjih voćnjaka i porodičnih bašti čak i jedno društvo može napraviti ogromnu razliku.",
        ],
      },
      {
        icon: "Leaf",
        title: "Pčele i biodiverzitet",
        image: {
          src: "/images/pcelinjak/SlikaPceleNaLetu.jpg",
          alt: "Pčele u letu — doprinos biodiverzitetu",
        },
        content: [
          "Pčele ne doprinose samo prinosu — one održavaju genetsku raznovrsnost biljnih vrsta. Kroz unakrsno oprašivanje, dolazi do veće otpornosti biljaka na bolesti, stabilnijih populacija biljnih vrsta i očuvanja prirodnih livada i samoniklog bilja.",
          "Bez oprašivača, lanac ishrane i kompletan ekosistem postaju nestabilni.",
        ],
      },
      {
        icon: "CloudSun",
        title: "Klimatske promjene i potreba za planiranim oprašivanjem",
        image: {
          src: "/images/educationBlog/Beesinbeehive.jpg",
          alt: "Pčele u košnici — planirano oprašivanje u uslovima klimatskih promjena",
        },
        content: [
          "Promjenljive temperature, kasni proljetni mrazevi i nestabilni vremenski uslovi utiču na sinhronizaciju cvjetanja i aktivnosti insekata. U takvim uslovima, oslanjanje isključivo na divlje oprašivače postaje rizično.",
          "Planirano postavljanje snažnih pčelinjih društava u voćnjake povećava sigurnost oplodnje, smanjuje rizik od slabog roda i omogućava bolju kontrolu procesa oprašivanja. U suvremenoj voćarskoj proizvodnji, oprašivanje se smatra investicijom, a ne troškom.",
        ],
      },
      {
        icon: "Home",
        title: "Prednosti posjedovanja sopstvenih pčelinjih društava",
        image: {
          src: "/images/pcelinjak/SlikaPcelinjakaZaRojeve.jpg",
          alt: "Košnice na pčelinjaku — sopstvena pčelinja društva",
        },
        content: [
          "Sve veći broj vlasnika voćnjaka i bašti odlučuje se na nabavku sopstvenih pčela. Prednosti su višestruke: kontinuirano oprašivanje bez zavisnosti od eksternih pčelara, dodatni prihod kroz proizvodnju meda, bolja kontrola zdravlja i jačine društava, te ekološki doprinos lokalnoj sredini.",
          "Čak i jedno do dva društva u porodičnom domaćinstvu mogu značajno unaprijediti rodnost voćaka, malina, jagoda, tikvica i drugih kultura.",
        ],
      },
      {
        icon: "Wrench",
        title: "Tehnički aspekti postavljanja pčela u voćnjak",
        image: {
          src: "/images/educationBlog/BeekepingImage.jpg",
          alt: "Pčelinjak na idealnoj lokaciji — tehnički aspekti postavljanja",
        },
        content: [
          "Za optimalne rezultate potrebno je voditi računa o postavljanju košnica na osunčano i zaklonjeno mjesto, dostupnosti izvora vode, izbjegavanju tretiranja pesticidima tokom cvjetanja i postepenom prilagođavanju društava mikroklimatskim uslovima.",
          "Pravilna saradnja između voćara i pčelara ključna je za dugoročni uspeh. Za detaljnije informacije o opremi, lokaciji i upravljanju košnicama, pogledajte naš [Vodič za Pčelarstvo: Kompletni Priručnik](/blog/vodic-za-pcelarstvo).",
        ],
      },
      {
        icon: "Coins",
        title: "Ekonomika ulaganja u pčele",
        image: {
          src: "/images/pcelinjak/SlikaRamaSaMedom.jpg",
          alt: "Ram sa medom — ekonomska opravdanost ulaganja u pčele",
        },
        content: [
          "Analize pokazuju da povećanje prinosa od 20–50% u voćnjaku višestruko nadmašuje trošak nabavke i održavanja nekoliko pčelinjih društava. Kada se tome doda vrijednost proizvedenog meda, polena i drugih pčelinjih proizvoda, investicija dobija dodatnu ekonomsku opravdanost.",
          "Kod malih gazdinstava, efekat se posebno primjećuje u kvalitetu plodova i tržišnoj cijeni proizvoda.",
        ],
      },
      {
        icon: "Crown",
        title: "Uloga edukacije i pravilnog izbora pčelinjih društava",
        image: {
          src: "/images/educationBlog/QueenBee.jpg",
          alt: "Kvalitetna matica — ključ efikasnog oprašivanja",
        },
        content: [
          "Kvalitet pčelinjeg društva direktno utiče na efikasnost oprašivanja. Zdrava društva sa mladim, kvalitetnim maticama pokazuju veću radnu aktivnost, manju sklonost rojenju i stabilniji razvoj tokom sezone.",
          "Zbog toga je važno nabavljati provjerena i snažna društva od iskusnih pčelara sa dugogodišnjom praksom.",
        ],
      },
      {
        icon: "HelpCircle",
        title: "Zaključak",
        image: {
          src: "/images/educationBlog/bee.jpg",
          alt: "Pčela na cvijetu — temelj održive poljoprivrede",
        },
        content: [
          "Pčele predstavljaju temelj održive poljoprivrede. Njihova uloga prevazilazi proizvodnju meda i ulazi u samu srž bezbjednosti hrane, stabilnosti prinosa i očuvanja biodiverziteta. U vremenu klimatskih izazova i intenzivne proizvodnje, plansko uključivanje pčelinjih društava u voćnjake i bašte postaje strateška odluka.",
          "Investicija u pčele nije samo ulaganje u oprašivanje — to je ulaganje u dugoročnu stabilnost i kvalitet proizvodnje.",
          "Na Pčelarskoj farmi Ljubojević nudimo kvalitetne rojeve sa mladim maticama, formirana pčelinja društva spremna za pašu i savjetovanje oko postavljanja pčela u voćnjake i bašte. Ako želite da unaprijedite prinos, kvalitet plodova i doprinesete zdravijem ekosistemu, [naručite pčele prilagođene lokalnim uslovima](/proizvodi/matice) direktno od nas.",
        ],
      },
    ],
    cta: {
      text: "Pogledajte našu ponudu matica, rojeva i društava",
      href: "/proizvodi/matice",
    },
    relatedSlugs: [
      "vodic-za-pcelarstvo",
      "spring-hive-inspections",
      "prezimljavanje-pcela",
    ],
  },
  {
    slug: "prezimljavanje-pcela",
    title: "Prezimljavanje Pčela u Bosni i Hercegovini – Stručni Vodič",
    excerpt:
      "Stručni vodič za prezimljavanje pčela u Bosni i Hercegovini. Savjeti iz prakse Pčelarske farme Ljubojević: tretman varoe, ishrana, ventilacija i sprečavanje zimskih gubitaka.",
    date: "2025-11-08",
    category: "Sezonska Njega",
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
          "Varoa predstavlja najznačajniji zdravstveni izazov suvremenog pčelarstva i vodeći uzrok zimskih gubitaka. Bez sistematske kontrole nema stabilnog pčelinjaka. Na Pčelarskoj farmi Ljubojević tretman protiv varoe sprovodi se planski i kontinuirano tokom cijele godine.",
          "Ljetna kontrola je ključni segment strategije. Nakon završetka glavne paše i vrcanja meda, tokom ljeta primjenjujemo HerbaStrip letvice. Primjena u ovom periodu smanjuje nivo infestacije prije formiranja zimskih pčela, obezbjeđuje zdravu generaciju dugovječnih pčela i stabilizuje zdravstveno stanje društva prije ulaska u jesen.",
          "U periodu minimalnog ili potpunog izostanka legla primjenjuje se jesenja završna kontrola (najčešće oksalnom kiselinom), čime se postiže maksimalna efikasnost.",
          "Kontinuirano praćenje infestacije i rotacija sredstava sprječavaju razvoj otpornosti varoe. Najveća greška je tretirati samo jednom godišnje.",
        ],
      },
      {
        icon: "Wrench",
        title: "Ventilacija i upravljanje vlagom",
        image: {
          src: "/images/educationBlog/BeeHiveComponents.jpg",
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
    relatedSlugs: [
      "spring-hive-inspections",
      "vodic-za-pcelarstvo",
      "art-of-extracting-raw-honey",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
