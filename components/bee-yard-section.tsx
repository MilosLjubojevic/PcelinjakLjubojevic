import Image from "next/image";

const images = [
  {
    src: "/images/pcelinjak/SlikaPceleNaEvodiji.jpg",
    alt: "Pčele na evodiji — prirodna paša na Pčelinjaku Ljubojević",
    span: "md:col-span-2 md:row-span-2",
    sizes: "(max-width: 768px) 50vw, 50vw",
  },
  {
    src: "/images/pcelinjak/SlikaPceleNaLetu.jpg",
    alt: "Medonosne pčele na letu ispred košnice",
    span: "",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src: "/images/pcelinjak/SlikaMedaUKanti.jpeg",
    alt: "Svježe izvrcan domaći med u kanti — prirodni livadski med",
    span: "",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src: "/images/pcelinjak/SlikaRamaSaMedom.jpg",
    alt: "Pčelinji ram pun zrelog meda spreman za vrcanje",
    span: "md:col-span-2",
    sizes: "(max-width: 768px) 50vw, 50vw",
  },
  {
    src: "/images/pcelinjak/SlikaZatvorenogMedaURamu.jpg",
    alt: "Zatvoreni med u saću — poklopljene ćelije pune meda",
    span: "",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src: "/images/pcelinjak/SlikaMaticeSaLeglom.jpg",
    alt: "Pčelinja matica sa zdravim leglom na ramu",
    span: "",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src: "/images/pcelinjak/SlikaOtvorenogMedauRamu.jpg",
    alt: "Otvorene ćelije sa medom u pčelinjem ramu",
    span: "md:col-span-2 md:row-span-2",
    sizes: "(max-width: 768px) 50vw, 50vw",
  },
  {
    src: "/images/pcelinjak/SlikaLeglaURamu.jpg",
    alt: "Zdravo pčelinje leglo u ramu — znak jake pčelinje zajednice",
    span: "",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src: "/images/pcelinjak/SlikaPolena.jpg",
    alt: "Prirodni pčelinji polen — bogat izvor vitamina i minerala",
    span: "",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src: "/images/pcelinjak/SlikaPcelinjakaUSumi.jpg",
    alt: "Pčelinjak Ljubojević u šumi — košnice okružene prirodom",
    span: "md:col-span-2",
    sizes: "(max-width: 768px) 50vw, 50vw",
  },
  {
    src: "/images/pcelinjak/SlikaRegistracijePcelinjaka.jpg",
    alt: "Registrovan pčelinjak — legalan uzgoj pčela i proizvodnja meda",
    span: "",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src: "/images/pcelinjak/PcelaNaPolenu.jpg",
    alt: "Pčela na cvijetu sakuplja polen — prirodno oprašivanje",
    span: "",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
];

export function BeeYardSection() {
  return (
    <section id="bee-yard" className="scroll-mt-20 bg-secondary py-24">
      <div className="mx-auto w-full px-6">
        <div className="text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Naš Pčelinjak
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Gdje Nastaje Naš Med
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Zavirite u svakodnevni život na pčelinjaku — od pregleda društava
            i njege matica, preko vrcanja meda, do sakupljanja polena i
            propolisa. Priroda i pčele su naši najbolji saradnici.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4 md:auto-rows-[220px]">
          {images.map((img) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-lg ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={img.sizes}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
