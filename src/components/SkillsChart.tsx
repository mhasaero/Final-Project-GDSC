import React from "react";
import { Bone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

type Props = { children: string; rate: number; item: string };

export default function SkillsChart({ children, rate, item, ...props }: Props) {
  return (
    // <li className="flex items-center justify-between gap-6 md:gap-8 lg:gap-12">
    //   <h3>
    //     <strong>{children}</strong>
    //   </h3>
    //   <div className="flex text-primary">
    //     {Array.from({ length: rate }, () => (
    //       <Bone className="md:size-8" fill="primary" strokeWidth={0} />
    //     ))}
    //     {Array.from({ length: 5 - rate }, () => (
    //       <Bone className="md:size-8" />
    //     ))}
    //   </div>
    // </li>
    <AccordionItem value={item}>
      <AccordionTrigger className="flex items-center justify-between">
        <h3>
          <strong>{children}</strong>
        </h3>
        <div className="flex text-primary">
          {Array.from({ length: rate }, () => (
            <Bone className="md:size-8" fill="primary" strokeWidth={0} />
          ))}
          {Array.from({ length: 5 - rate }, () => (
            <Bone className="md:size-8" />
          ))}
        </div>
      </AccordionTrigger>
      <AccordionContent className="font-sans">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionItem>
  );
}
