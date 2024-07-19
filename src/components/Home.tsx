export default function Home() {
  return (
    <section id="home" className="flex mt-24 md:mt-32 lg:mt-40 px-12 md:px-20 lg:px-28 xl:px-40">
      <div className="w-5/6 md:w-3/5 lg:w-2/5 h-[35rem] relative mx-auto bg-[#EBDBC4]">
        <img src="/img/border-profil.png" alt="border-profil" className="size-full absolute z-20" />
        <img src="/img/kapal-bajak-laut-vintage.jpg" alt="kapal-bajak-laut" className="w-full h-[60%] absolute bottom-[28%] lg:bottom-[30%] xl:bottom-[35%] z-10" />
        <img src="/img/profil-vintage.png" alt="profil" className="size-3/4 absolute bottom-[12%] left-[12%] z-10" />
        <h3 className="font-times relative z-20 text-primary text-lg md:text-2xl xl:text-4xl top-[74%] left-[16%] md:left-[24%] lg:left-[17%]">
          <strong>M. ILHAM SYAFIK</strong>
        </h3>
        <h3 className="font-times relative z-20 text-primary text-lg md:text-2xl xl:text-4xl top-[80%] md:top-[79%] xl:top-[77%] left-[30%] md:left-[30%] lg:left-[25%]">
          <strong>+ 1000K AURA</strong>
        </h3>
        <img src="/img/robux.png" alt="robux" className="relative z-20 size-9 md:size-11 top-[74%] md:top-[72%] xl:top-[69.5%] left-[10%] bg-[#EBDBC4]" />
      </div>
    </section>
  );
}
