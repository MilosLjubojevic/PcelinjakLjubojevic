import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/image-utils";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/images/pcelinjak/SlikaRojaNaGrani.jpg"
              alt="Roj pčela na grani — Pčelinjak Ljubojević"
              fill
              className="object-cover brightness-105 contrast-105 saturate-110 blur-[0.5px]"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-black/10" />
          </div>

          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              O Nama
            </p>
            <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl text-balance">
              45 Godina Posvećeni Pčelarstvu
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Pčelinjak Ljubojević je porodična priča koja traje već 45
                godina. Započeli smo sa svega nekoliko košnica, a ljubav prema
                pčelama i prirodi pretvorila je skroman početak u jedno od
                pouzdanijih pčelarskih domaćinstava u regionu.
              </p>
              <p>
                Danas brinemo o preko 200 pčelinjih društava raspoređenih na dva
                pčelinjaka. Proizvodimo med, kremasti med, polen, propolis,
                matičnu mliječ i pčelinji vosak — sve bez hemijskih dodataka,
                onako kako priroda nalaže.
              </p>
              <p>
                Bilo da tražite kvalitetan domaći med za svoju porodicu,
                pčelinje proizvode za zdravlje ili selekcionirane matice za vaš
                pčelinjak — kod nas ćete naći provjerenu robu i iskren savjet.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <Stat value="200+" label="Pčelinjih Društava" />
              <Stat value="45" label="Godina Iskustva" />
              <Stat value="2" label="Pčelinjaka" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-serif text-3xl font-bold text-primary">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
