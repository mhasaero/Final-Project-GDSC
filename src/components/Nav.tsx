import { Phone, Menu, Linkedin } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader } from "./ui/sheet";

export default function Nav() {
  return (
    <>
      <nav id="navbar" className="left-12 right-12 md:left-20 md:right-20 lg:left-28 lg:right-28 xl:left-40 xl:right-40 text-md md:text-lg lg:text-xl xl:text-2xl items-center pt-2 lg:pt-4 text-primary fixed top-0 z-50 backdrop-blur-xl">
        <div className="flex justify-between">
          <div>
            <h2>M. Ilham Syafik</h2>
          </div>
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu />
            </SheetTrigger>
            <SheetContent side={"bottom"} className="bg-[#1c2657] h-[5rem]">
              <SheetHeader>
                <ul className="flex gap-4">
                  <li>Home</li>
                  <li>About</li>
                  <li>Skills</li>
                  <li>Contact</li>
                </ul>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <ul className="hidden md:flex w-1/2 justify-between">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
          <ul className="hidden md:flex gap-4">
            <li className="border-2 border-primary rounded-full p-2">
              <Phone />
            </li>
            <li className="border-2 border-primary rounded-full p-2">
              <Linkedin />
            </li>
          </ul>
        </div>

        <div className="w-full border-b-2 border-primary blur-[1px] mt-3 md:mt-5 lg:mt-8"></div>
      </nav>
    </>
  );
}

// left-12 right-12 md:left-20 md:right-20 lg:left-28 lg:right-28 xl:left-40 xl:right-40 text-md md:text-lg lg:text-xl xl:text-2xl items-center pt-2 lg:pt-4 text-primary fixed top-0 z-50 backdrop-blur-xl
