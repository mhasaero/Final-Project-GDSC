import { cn } from "../lib/utils";

type Props = { children: string; head: string; className: string };

export default function Card({ children, head, className, ...props }: Props) {
  return (
    <div className={cn("mt-6 lg:mt-8", className)}>
      <h3 className="w-4/5 border-b-2 border-primary inline-flex pb-4 xl:pb-6 hover:border-b-0 ease-in-out duration-300 text-2xl md:text-3xl xl:text-4xl font-times">
        <strong>{head}</strong>
      </h3>
      <p className="mt-4 text-base md:text-lg xl:text-xl">{children}</p>
    </div>
  );
}
