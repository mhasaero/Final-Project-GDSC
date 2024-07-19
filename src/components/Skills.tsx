import React from "react";
import SkillsChart from "./SkillsChart";
import { Accordion } from "./ui/accordion";
import { Flag } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="flex mt-10 md:mt-32 xl:mt-40 px-12 md:px-20 lg:px-28 xl:px-40 gap-8 flex-col md:flex-row scroll-mt-[100px]">
      <Accordion type="single" collapsible className="font-times text-2xl md:text-3xl xl:text-4xl flex flex-col gap-6 lg:gap-8 w-full md:w-1/2">
        <SkillsChart rate={3} item="item-1">
          C++
        </SkillsChart>
        <SkillsChart rate={2} item="item-2">
          Java
        </SkillsChart>
        <SkillsChart rate={3} item="item-3">
          Javascript
        </SkillsChart>
        <SkillsChart rate={4} item="item-4">
          HTML
        </SkillsChart>
        <SkillsChart rate={3} item="item-5">
          CSS
        </SkillsChart>
      </Accordion>
      <div className="mx-auto md:ps-8">
        <h3 className="font-times text-2xl md:text-3xl xl:text-4xl text-center">
          <strong>Experiences</strong>
        </h3>
        <div className="flex flex-col gap-4 mt-8 p">
          <h3 className="font-times text-2xl md:text-3xl xl:text-4xl">
            <strong>2023</strong>
          </h3>
          <div className="flex gap-4">
            <Flag fill="primary" />
            <p>OSN Intensif 2023</p>
          </div>
          <div className="flex gap-4">
            <Flag fill="primary" />
            <p>General Secretary of the MAN IC OKI Putera Dormitory</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <h3 className="font-times text-2xl md:text-3xl xl:text-4xl">
            <strong>2024</strong>
          </h3>
          <div className="flex gap-4">
            <Flag fill="primary" />
            <p>Member of Frontend GDSC UNSRI</p>
          </div>
          <div className="flex gap-4">
            <Flag fill="primary" />
            <p>Member of Dinas Akademik HMIF UNSRI</p>
          </div>
        </div>
      </div>
    </section>
  );
}
