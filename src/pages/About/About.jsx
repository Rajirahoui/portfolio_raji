import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Développeur - Analyste de données / Curieux - Créatif
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="hero illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Bonjour ! Je suis Raji, passionné par le développement web et l’analyse de données. 
                <span className="font-bold text-white">
                  J’aime construire des solutions utiles, performantes et élégantes.
                </span>
              </p>
              <p className="text-white">
                Que ce soit en front-end avec des frameworks modernes ou en back-end avec la manipulation et la visualisation de données, 
                je cherche toujours à apprendre et à m'améliorer. J’explore aussi l’IA et l’automatisation pour créer des projets intelligents et impactants.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    Mon objectif est de combiner mes compétences en développement et en data pour résoudre des problèmes réels et aider les entreprises à prendre des décisions éclairées.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Raji Rahoui, Développeur & Analyste
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src=""
                        alt=""
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">Projet personnel / Portfolio</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}