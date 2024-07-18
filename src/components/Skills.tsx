import React from "react";
import SkillsChart from "./SkillsChart";
import { Accordion } from "./ui/accordion";

export default function Skills() {
  return (
    <section id="skills" className="flex mt-20">
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
      <div></div>
    </section>
  );
}
