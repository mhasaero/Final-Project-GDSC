import { Phone, Menu, Linkedin } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader, SheetDescription } from "./ui/sheet";

export default function Nav() {
  return (
    <>
      <nav id="navbar" className="flex justify-between text-md md:text-lg lg:text-xl xl:text-2xl items-center mt-2 lg:mt-4 pb-3 md:pb-5 lg:pb-8 text-white">
        <div>
          <h2>M. Ilham Syafik</h2>
        </div>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent side={"bottom"} className="bg-[#1c2657] h-[5rem]">
            <SheetHeader>
              <ul className="text-white flex  gap-4">
                <li>Home</li>
                <li>About</li>
                <li>Work</li>
                <li>Skills</li>
                <li>Contact</li>
              </ul>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <ul className="hidden md:flex w-1/2 justify-between">
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
        <ul className="hidden md:flex gap-4">
          <li className="border-2 border-white rounded-full p-2">
            <Phone />
          </li>
          <li className="border-2 border-white rounded-full p-2">
            <Linkedin />
          </li>
        </ul>
      </nav>
      <div className="w-full border-b-2 border-white blur-[1px]"></div>
    </>
  );
}
