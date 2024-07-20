import Card from "./Card";

export default function About() {
  return (
    <section id="about" className="mt-20 md:mt-32 xl:mt-40 text-primary px-12 md:px-20 lg:px-28 xl:px-40 scroll-mt-[100px] ">
      <Card head="Web Developer" className="text-justify">
        Passionate web developer with 1 years of experience in crafting engaging digital experiences. Proficient in HTML, CSS, JavaScript. Skilled in front-end-development. Eager to contribute to innovative projects and continuously expand
        my skillset. Let's build something amazing together!
      </Card>
      <Card head="Full-Time Gamer" className="md:ml-[10%] text-justify">
        Passionate gamer with 3 years of experience in competitive gaming and streaming. Proficient in JRPG, ARPG, Strategy RPG, Turn-based RPG, FPS and mostly i play in PC device. Skilled in hardworking grinding material or currency in
        game, have silver aim in valorant and gold aim in apex legends and also always participate in all survey.
      </Card>
      <Card head="Tennis Trainee" className="md:ml-[20%] text-justify">
        Passionate tennis trainee with 1 years of experience playing tennis. Possesses a strong foundation in backhand, half volley and also forehand. Committed to improving skills and physical fitness to reach full potential as a tennis
        player. Motivated to learn from experienced coaches and collaborate with teammates.
      </Card>
    </section>
  );
}
