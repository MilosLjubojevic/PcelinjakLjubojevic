import Image from "next/image";
import { MapPin } from "lucide-react";
import { BLUR_DATA_URL } from "@/lib/image-utils";

const MAPS_URL =
  "https://www.google.com/maps/place/Pcelinjak+Ljubojevic/data=!4m2!3m1!1s0x0:0x675e009c76f6e038?sa=X&ved=1t:2428&ictx=111";

const images = [
  {
    src: "/images/pcelinjak/SlikaRamaSaMedom.jpg",
    alt: "Pčelinji ram pun zrelog meda spreman za vrcanje",
    desktopSpan: "md:col-span-2 md:row-span-2",
    mobileSpan: "col-span-2 aspect-[4/3]",
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  {
    src: "/images/pcelinjak/SlikaPceleNaLetu.jpg",
    alt: "Medonosne pčele na letu ispred košnice",
    desktopSpan: "",
    mobileSpan: "aspect-[4/3]",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src: "/images/pcelinjak/SlikaMedaUKanti.jpeg",
    alt: "Svježe izvrcan domaći med u kanti — prirodni livadski med",
    desktopSpan: "",
    mobileSpan: "aspect-[4/3]",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src: "/images/pcelinjak/SlikaPceleNaEvodiji.jpg",
    alt: "Pčele na evodiji — prirodna paša na Pčelinjaku Ljubojević",
    desktopSpan: "md:col-span-2 md:row-span-2",
    mobileSpan: "col-span-2 aspect-[4/3]",
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  {
    src: "/images/pcelinjak/SlikaZatvorenogMedaURamu.jpg",
    alt: "Zatvoreni med u saću — poklopljene ćelije pune meda",
    desktopSpan: "",
    mobileSpan: "aspect-[4/3]",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src: "/images/pcelinjak/SlikaMaticeSaLeglom.jpg",
    alt: "Pčelinja matica sa zdravim leglom na ramu",
    desktopSpan: "",
    mobileSpan: "aspect-[4/3]",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src: "/images/pcelinjak/SlikaOtvorenogMedauRamu.jpg",
    alt: "Otvorene ćelije sa medom u pčelinjem ramu",
    desktopSpan: "md:col-span-2 md:row-span-2",
    mobileSpan: "col-span-2 aspect-[4/3]",
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  {
    src: "/images/pcelinjak/SlikaLeglaURamu.jpg",
    alt: "Zdravo pčelinje leglo u ramu — znak jake pčelinje zajednice",
    desktopSpan: "",
    mobileSpan: "aspect-[4/3]",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src: "/images/pcelinjak/SlikaPolena.jpg",
    alt: "Prirodni pčelinji polen — bogat izvor vitamina i minerala",
    desktopSpan: "",
    mobileSpan: "aspect-[4/3]",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src: "/images/pcelinjak/SlikaPcelinjakaUSumi.jpg",
    alt: "Pčelinjak Ljubojević u šumi — košnice okružene prirodom",
    desktopSpan: "md:col-span-2",
    mobileSpan: "col-span-2 aspect-[16/9]",
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  {
    src: "/images/pcelinjak/SlikaRegistracijePcelinjaka.jpg",
    alt: "Registrovan pčelinjak — legalan uzgoj pčela i proizvodnja meda",
    desktopSpan: "",
    mobileSpan: "aspect-[4/3]",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src: "/images/pcelinjak/PcelaNaPolenu.jpg",
    alt: "Pčela na cvijetu sakuplja polen — prirodno oprašivanje",
    desktopSpan: "",
    mobileSpan: "aspect-[4/3]",
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
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
          >
            <MapPin className="h-4 w-4" />
            Bijeljina, Donji Brodac 90
          </a>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Zavirite u svakodnevni život na pčelinjaku — od pregleda društava
            i njege matica, preko vrcanja meda, do sakupljanja polena i
            propolisa. Priroda i pčele su naši najbolji saradnici.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:gap-5 md:grid-cols-4 md:auto-rows-[280px]">
          {images.map((img) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-lg ${img.mobileSpan} md:aspect-auto ${img.desktopSpan}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={img.sizes}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/10" />
            </div>
          ))}

          <div className="col-span-2 flex items-center justify-center gap-4 rounded-lg bg-primary/5 aspect-[4/3] md:aspect-auto">
            <Image
              src="/LogoPcele.png"
              alt="Logo Pčelinjak Ljubojević"
              width={64}
              height={64}
              className="rounded-full"
            />
            <span className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
              Pčelinjak Ljubojević
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
